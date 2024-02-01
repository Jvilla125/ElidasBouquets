const mongoose = require("mongoose");
const AddOn = require("./AddOnsModel")

// productSchema is responsible for fetching, creating, updating, and deleting from the database;
// Define imageSchema below instead of creating a new file
const imageSchema = mongoose.Schema({
    path: { type: String, required: true }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        // required: true,
    },
    itemList: [
        {type: String}
    ],
    category: {
        type: String,
        // required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sales: {
        type: Number,
        default: 0
    },
    attrs: [
        { key: { type: String }, value: { type: String } }
        // [{key: "color, value: "red}, {key: "flowerType, value: "roses},  ]
    ],
    images: [imageSchema],
    addOns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: AddOn,
    }],
}, {
    timestamps: true,
})

productSchema.index()
productSchema.index({"attrs.key": 1, "attrs.value": 1})
const Product = mongoose.model("Product", productSchema);

module.exports = Product;