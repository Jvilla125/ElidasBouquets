const Order = require("../models/OrderModel")
const Product = require("../models/ProductModel")
const ObjectId = require("mongodb").ObjectId

const getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({ user: ObjectId(req.user._id) })
        res.send(orders)
    } catch (err) {
        next(err)
    }

}

// TODO update create order to have guest information 

const createOrder = async (req, res, next) => {
    try {
        const { cartItems, orderTotal } = req.body;
        if (!cartItems || !orderTotal) {
            return res.status(400).send("All inputs are required");
        }

        // need for product sales in productModel.js
        let ids = cartItems.map((item) => {
            return item.productID;
        })
        let qty = cartItems.map((item) => {
            return Number(item.quantity);
        })

        await Product.find({ _id: { $in: ids } }).then((products) => {
            products.forEach(function(product, idx) {
                product.sales += qty[idx];
                product.save()
            })
        })

        // TO DO: Update to have guest information
        const order = new Order({
            user: ObjectId(req.user._id),
            orderTotal: orderTotal,
            cartItems: cartItems
        })

        const createdOrder = await order.save();
        res.status(201).send(createdOrder)

    } catch (err) {
        next(err)
    }
}

module.exports = { getUserOrders, createOrder }