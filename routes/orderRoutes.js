const express = require("express");
const router = express.Router();
const { verifyIsLoggedIn, verifyIsAdmin } = require("../middleware/verifyAuthToken")
const { getUserOrders, createOrder } = require("../controllers/orderController")

// user routes
router.use(verifyIsLoggedIn)
router.get("/", getUserOrders)
router.post("/", createOrder);

// admin routes 
router.use(verifyIsAdmin)

module.exports = router