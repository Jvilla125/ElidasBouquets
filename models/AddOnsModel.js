const mongoose = require("mongoose");
const Image = require("./ImageModel")

const addOnsSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    images: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: Image,
    }
],
    price: {
        type: Number,
    }
})

const AddOn = mongoose.model("AddOn", addOnsSchema)

module.exports = AddOn