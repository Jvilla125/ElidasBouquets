const Product = require("../models/ProductModel")

const getProducts = (req, res) => {
    Product.create({name: "First Bouquet"})
    res.send("hanlding products now, leave")
}

module.exports = getProducts