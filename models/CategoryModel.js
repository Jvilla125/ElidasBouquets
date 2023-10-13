const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, default: "/images/happy.jpeg"},
})

// categorySchema.index({name: 1})

const Category = mongoose.model("Category", categorySchema)

module.exports = Category;