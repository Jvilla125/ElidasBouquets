const connectDB = require("../config/database")
connectDB()

const categoryData = require("./categories")

const Category = require("../models/CategoryModel");

const importData = async () => {
    try {
        await Category.collection.deleteMany({})
        await Category.insertMany(categoryData)
        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while processing seeder data", error)
    }
}

importData()