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

const getOrder = async (req, res, next) => {
    try {
        // Getting users info from order model (reference) by getting Order's ID
        // populate users info without password, isAdmin, id, createdAt, and updatedAt infro
        const order = await Order.findById(req.params.id).populate("user", "-password -isAdmin -_id -__v -createdAt -updatedAt").orFail()
        res.send(order)
    } catch (error) {
        next(error)
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
            products.forEach(function (product, idx) {
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

// update to include guest orders
const getOrders = async (req, res, next) => {
    try{
        const orders = await Order.find({}).populate("user", "-password");
        res.send(orders)
    } catch(err){
        next(err)
    }
}

module.exports = { getUserOrders, createOrder, getOrders, getOrder }