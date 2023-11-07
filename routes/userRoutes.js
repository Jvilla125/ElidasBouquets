const express = require("express");
const router = express.Router();
const {verifyIsLoggedIn, verifyIsAdmin} = require("../middleware/verifyAuthToken")
const {getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, getUser, updateUser, deleteUser} = require("../controllers/userController")

router.post("/register", registerUser)
router.post("/login", loginUser)

// user logged in routes:
router.use(verifyIsLoggedIn)
router.put("/profile", updateUserProfile)
router.get("/profile/:id", getUserProfile)

// admin routes: 
router.use(verifyIsAdmin)
router.get("/", getUsers)
// to edit a single user
router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)

module.exports = router