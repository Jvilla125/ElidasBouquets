const mongoose = require("mongoose");
const AddOn = require("./AddOnsModel")
const Image = require("./ImageModel")

// productSchema is responsible for fetching, creating, updating, and deleting from the database;
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
    category: {
        type: String,
        // required: true,
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
        { key: { type: String }, value: { type: String } }
        // [{key: "color, value: "red}, {key: "flowerType, value: "roses},  ]
    ],
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Image,
        }
    ],
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