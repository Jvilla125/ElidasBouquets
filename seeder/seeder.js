const connectDB = require("../config/database")
connectDB()

const categoryData = require("./categories")
const productData = require("./products")
const userData = require("./users");
const orderData = require('./Orders')

const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel")
const User = require("../models/UserModel")
const Order = require("../models/OrderModel");

const importData = async () => {
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})

        await Category.insertMany(categoryData)
        await Product.insertMany(productData)
        await User.insertMany(userData)
        await Order.insertMany(orderData)

        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while processing seeder data", error)
    }
}

importData()