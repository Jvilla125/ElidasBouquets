const jwt = require("jsonwebtoken")
// need to npm i cookie-parser@^1.4.6
// express is not able to read cookies without installing cookie parser
const verifyIsLoggedIn = (req, res, next) => {
    try {
        const token = req.cookies.access_token
        if (!token) {
            return res.status(403).send("A token is required for authentication")
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = decoded
            next()
        } catch (err) {
            return res.status(401).send("Unauthorized. Invalid Token")
        }

    } catch (err) {
        next(err)
    }
}

module.exports = { verifyIsLoggedIn }