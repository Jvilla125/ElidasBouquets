const mongoose = require("mongoose");
const User = require("./UserModel")
const Guest = require("./GuestModel")

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Guest,
    },
    orderTotal: {
        itemsCount: { type: Number, required: true },
        cartSubtotal: { type: Number, required: true, },
        cartItems: [
            {
                name: { type: String, required: true },
                price: { type: Number, required: true },
                image: { path: { type: String, required: true } },
                quantity: {type: Number, required: true}
            }
        ],
        transactionResult: {
            status: {type: String}, // if user has placed an order
            createTime: {type: String},
            amount: {type: Number}
        },
    }
}, {
    timestamps: true, 
})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order;