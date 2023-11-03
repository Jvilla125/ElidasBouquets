const express = require("express");
const router = express.Router();
const { getProducts, getProductById, adminGetProducts, adminDeleteProduct, adminCreateProduct, 
    adminUpdateProduct, adminUpload, adminDeleteProductImage} = require("../controllers/productController")

router.get("/category/:categoryName", getProducts)
router.get("/", getProducts)
//get product by their id 
router.get("/get-one/:id", getProductById);

//admin routes:
router.get("/admin", adminGetProducts)
router.delete("/admin/:id", adminDeleteProduct)
router.delete("/admin/image/:imagePath/:productId", adminDeleteProductImage)
router.put("/admin/:id", adminUpdateProduct)
router.post("/admin/upload", adminUpload)
router.post("/admin", adminCreateProduct)


module.exports = router