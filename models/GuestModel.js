const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    phoneNumber: {
        type: Number, 
        required: true,
    },
    date: {
        type: date, 
        required: true,
    },
}, {
    timestamps: true,
});

const Guest = mongoose.model("Guest", userSchema)
module.exports = Guest; 