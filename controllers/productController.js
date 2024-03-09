const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductModel");
const imageValidate = require("../utils/imageValidate");

const getProducts = async (req, res, next) => {
    try {

        let query = {}
        let queryCondition = false;

        // Filtering by price
        let priceQueryCondition = {}
        // NEED TO FIGURE THIS ONE OUT
        // if(req.query.price){
        // queryCondition = true 
        //     priceQueryCondition = {price: {$in: req.query.price.split(",")}}
        // }


        // Filtering by category
        let categoryQueryCondition = {}
        const categoryName = req.params.categoryName || "";
        if (categoryName) {
            queryCondition = true;
            let a = categoryName.replace(/,/g, "/")
            var regEx = new RegExp("^" + a)
            categoryQueryCondition = { category: regEx }
        }



        // filtering by category
        if (req.query.category) {
            queryCondition = true
            let a = req.query.category.split(",").map((item) => {
                if (item) return new RegExp("^" + item)
            })
            categoryQueryCondition = {
                category: { $in: a }
            }
        }

        // filtering by attributes
        let attrsQueryCondition = [];
        if (req.query.attrs) {
            //attrs=Color-red-blue,flowerType-roses-lillies
            //['Color-Red-Blue', 'flowerType-roses-lillies']
            // turn string into an array
            attrsQueryCondition = req.query.attrs.split(",").reduce((acc, item) => {
                if (item) {
                    // item.split("-") will result in ['color', 'red', 'blue'],['flowerType', 'roses', 'lillies']
                    let a = item.split("-")
                    let values = [...a]
                    values.shift() // removes first item in a on line 54 -> ['red', 'blue'],['roses', 'lillies']
                    let a1 = {
                        attrs: {
                            $elemMatch: {
                                key: a[0],
                                value: { $in: values }
                            }
                        }
                    }
                    acc.push(a1)
                    return acc
                } else return acc
            }, [])
            queryCondition = true;
        }


        // pagination
        const pageNum = Number(req.query.pageNum) || 1

        // sory by name, price
        let sort = {}
        const sortOption = req.query.sort || ""
        if (sortOption) {
            let sortOpt = sortOption.split("_")
            // example <option value="price_1">
            // we separate price = sortOpt[0] and 1 = sortOpt[1]
            sort = { [sortOpt[0]]: Number(sortOpt[1]) }
            console.log(sort)
        }

        // give users the results of all query criterias
        if (queryCondition) {
            query = {
                $and: [priceQueryCondition, categoryQueryCondition, ...attrsQueryCondition]
            }
        }

        // list of all products
        const totalProducts = await Product.countDocuments(query)
        const products = await Product.find(query)
            .skip(recordsPerPage * (pageNum - 1))
            .sort(sort)
            .limit(recordsPerPage);

        res.json({
            products,
            pageNum,
            paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage)
        })
    } catch (error) {
        next(error)
    }
}

const getProductById = async (req, res, next) => {
    try {
        // req.params.id is from productRoutes.js line 11 "/:id"
        const product = await Product.findById(req.params.id).orFail()
        res.json(product)
    } catch (err) {
        next(err)
    }
}

const adminGetProducts = async (req, res, next) => {
    try {
        // console.log(req.user)
        const products = await Product.find({}).sort({ category: 1 }).select("name price category ")
        return res.json(products)
    } catch (err) {
        next(err)
    }
}

const adminDeleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).orFail()
        await product.deleteOne()
        res.json({ message: "product removed" })
    } catch (err) {
        next(err)
    }
}

const adminCreateProduct = async (req, res, next) => {
    try {
        const product = new Product()
        const { name, description, price, category } = req.body;
        product.name = name;
        product.description = description;
        // product.count = count;
        product.price = price;
        product.category = category;
        // if (attributesTable.length > 0) {
        //     attributesTable.map((item) => {
        //         product.attrs.push(item) // bc attrs is an array in the model
        //     })
        // }
        await product.save()
        res.json({
            message: "product created",
            productId: product._id
        })
    } catch (error) {
        next(error)
    }
}

const adminUpdateProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).orFail()
        const { name, description, price, category } = req.body;
        product.name = name || product.name
        product.description = description || product.description
        // product.count = count || product.count
        product.price = price || product.price
        product.category = category || product.category
        // if (attributesTable.length > 0) {
        //     product.attrs = [];
        //     attributesTable.map((item) => {
        //         product.attrs.push(item)
        //     })
        // } else {
        //     product.attrs = []
        // }
        await product.save()
        res.json({
            message: "product updated"
        })
    } catch (error) {
        next(error)
    }
}

// install npm i express-fileupload@^1.3.1
// use as a middleware in server.js

const adminUpload = async (req, res, next) => {
    if (req.query.cloudinary === "true") {
        try {
            let product = await Product.findById(req.query.productId).orFail();
            product.images.push({ path: req.body.url });
            await product.save();
        } catch (err) {
            next(err)
        }
        return
    }

    try {
        if (!req.files || !!req.files.images === false) {
            return res.status(400).send("No files were uploaded.")
        }

        const validateResult = imageValidate(req.files.images)
        if (validateResult.error) {
            return res.status(400).send(validateResult.error)
        }

        const path = require("path")
        const { v4: uuidv4 } = require("uuid") //npm i uuid to generate random strings\
        const uploadDirectory = path.resolve(__dirname, "../", "public", "images", "products")

        // console.log(req.query.productId);
        let product = await Product.findById(req.query.productId).orFail()

        let imagesTable = []

        if (Array.isArray(req.files.images)) {
            imagesTable = req.files.images
        } else {
            imagesTable.push(req.files.images)
        }
        for (let image of imagesTable) {
            var fileName = uuidv4() + path.extname(image.name)
            var uploadPath = uploadDirectory + "/" + fileName
            product.images.push({ path: "/images/products/" + fileName })
            image.mv(uploadPath, function (err) {
                if (err) {
                    return res.status(500).send(err)
                }
            })
        }
        await product.save()
        return res.send("Files uploaded!")
    } catch (error) {
        next(error)
    }
}

const adminDeleteProductImage = async (req, res, next) => {
    const imagePath = decodeURIComponent(req.params.imagePath);
    if (req.query.cloudinary === "true") {
        try {
           await Product.findOneAndUpdate({ _id: req.params.productId }, { $pull: { images: { path: imagePath } } }).orFail(); 
            return res.end();
        } catch(er) {
            next(er);
        }
        return
    }

    try {
        const imagePath = decodeURIComponent(req.params.imagePath)
        const path = require("path")
        const finalPath = path.resolve("./public") + imagePath;
        console.log(imagePath, "image")
        const fs = require("fs") // built in node file system 
        fs.unlink(finalPath, (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
        await Product.findOneAndUpdate(
            { _id: req.params.productId }, // find product with specified ID
            { $pull: { images: { path: imagePath } } } // if found pull specified path from images array
        ).orFail();

        return res.end() // if we do not want to return any data, we can use res.end()
    } catch (error) {
        next(error)
    }

}


module.exports = { getProducts, getProductById, adminGetProducts, adminDeleteProduct, adminCreateProduct, adminUpdateProduct, adminUpload, adminDeleteProductImage }