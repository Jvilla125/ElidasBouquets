const jwt = require("jsonwebtoken");

const generateAuthToken = (_id, name, lastName, email, isAdmin) => {
    return jwt.sign(
        { _id, name, lastName, email, isAdmin },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "7h" }
    );
};

// const generateGuestAuthToken = (_id, name, lastName, email, phoneNumber, date) => {
//     return jwt.sign(
//         { _id, name, lastName, email, phoneNumber, date},
//         process.env.JWT_SECRET_KEY,
//         { expiresIn: "1h" }
//     );
// };

module.exports = generateAuthToken