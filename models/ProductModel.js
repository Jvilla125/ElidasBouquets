const mongoose = require("mongoose");

// productSchema is responsible for fetching, creating, updating, and deleting from the database;
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String, 
        required: true, 
    },
    category: {
        type: String,
        required: true,
    },
    smallPrice: {
        type: Number,
    },
    mediumPrice: {
        type: Number,
    },
    largePrice: {
        type: Number,
    },
    sales: {
        type: Number,
        default: 0
    },
    attrs: [
        // [{key: "color, value: "red}, {key: "flowerType, value: "roses},  ]
    ]
}, {
    timestamps: true, 
})

productSchema.index()

const Product = mongoose.model("Product", productSchema);

module.exports = Product;