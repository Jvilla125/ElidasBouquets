const recordsPerPage = require("../config/pagination")
const Product = require("../models/ProductModel")

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

module.exports = getProducts