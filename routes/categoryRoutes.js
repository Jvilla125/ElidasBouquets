const express = require("express");
const router = express.Router();
const {getCategories, newCategory, deleteCategory} = require("../controllers/categoryController")
const {verifyIsLoggedIn, verifyIsAdmin} = require("../middleware/verifyAuthToken")


router.get("/", getCategories)

//routes below require admin access
router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.post("/", newCategory)
// dynamic param /:category
router.delete("/:category", deleteCategory)

module.exports = router