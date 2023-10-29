const express = require("express");
const router = express.Router();
const {getCategories, newCategory, deleteCategory} = require("../controllers/categoryController")

router.get("/", getCategories)
router.post("/", newCategory)
// dynamic param /:category
router.delete("/:category", deleteCategory)

module.exports = router