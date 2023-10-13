const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: "/images/happy.jpeg"
    },
    attrs: [{
        key: {
            type: String // can be color, flower type
        },
        value: [{
            type: String
        }] // can be red, blue, green - roses, daisies, sunflowers
    }]
})

const Category = mongoose.mondel("Category", categorySchema);

module.exports = Category;