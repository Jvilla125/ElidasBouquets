const User = require("../models/UserModel")
const Guest = require("../models/GuestModel")
const { hashPassword, comparePasswords } = require("../utils/hashPassword")
const generateAuthToken = require("../utils/generateAuthToken");

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).select("-password")
        const guests = await Guest.find({})
        return res.json(users)
    } catch (err) {
        next(err)
    }
}

// need to install jsonwebtoken@^8.5.1 to create token to store new users information
const registerUser = async (req, res, next) => {
    try {
        const { name, lastName, email, password } = req.body
        if (!(name && lastName && email && password)) {
            return res.status(400).send("All inputs are required")
        }
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).send("user exists")
        } else {
            const hashedPassword = hashPassword(password)
            const user = await User.create({
                name,
                lastName,
                email: email.toLowerCase(),
                password: hashedPassword
            });
            res.cookie("access_token", generateAuthToken(user._id, user.name, user.lastName, user.email, user.isAdmin), {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict"
                })
                .status(201)
                .json({
                    success: "User created",
                    userCreated: {
                        _id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        isAdmin: user.isAdmin
                    },
                })
        }
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password, doNotLogout } = req.body;
        if (!(email && password)) {
            return res.status(400).send("All inputs are required");
        }

        const user = await User.findOne({ email }).orFail();
        if (user && comparePasswords(password, user.password)) {
            let cookieParams = {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
            };

            if (doNotLogout) {
                cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 7 }; // 1000=1ms
            }

            return res.cookie(
                "access_token",
                generateAuthToken(
                    user._id,
                    user.name,
                    user.lastName,
                    user.email,
                    user.isAdmin
                ),
                cookieParams
            )
                .json({
                    success: "user logged in",
                    userLoggedIn: {
                        _id: user._id,
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        isAdmin: user.isAdmin,
                        doNotLogout,
                    },
                });
        } else {
            return res.status(401).send("wrong credentials");
        }
    } catch (error) {
        next(error);
    }
};

const updateUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).orFail();
        user.name = req.body.name || user.name;
        user.lastName = req.body.lastName || user.lastName;
        
        if (req.body.password !== user.password) {
            user.password = hashPassword(req.body.password);
        }
        await user.save();
        res.json({
            success: "user updated",
            userUpdated: {
                _id: user._id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                isAdmin: user.isAdmin
            },
        })
    } catch (err) {
        next(err)
    }
}

const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).orFail()
        return res.send(user)
    } catch (err) {
        next(err)
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).select("name lastName email isAdmin").orFail()
        return res.send(user)
    } catch (err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).orFail()
        user.name = req.body.name || user.name;
        user.lastName = req.body.lastName || user.lastName
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin 

        await user.save();

        res.send("user updated")
    } catch (err) {
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).orFail()
        await user.deleteOne();
        res.send("user removed")
    } catch (err) {
        next(err)
    }
}

module.exports = { getUsers, registerUser, loginUser, updateUserProfile, getUserProfile, getUser, updateUser, deleteUser }