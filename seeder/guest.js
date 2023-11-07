const bcrypt = require("bcryptjs")
const ObjectId = require("mongodb").ObjectId;

const guests = [
    {
        _id: ObjectId("629add3d78fb449f9d9fe2ee"),
        name: 'jeff',
        lastName: 'jeff',
        email: 'jeff@jeff.com',
        phoneNumber: "3103103100",
        date: "2020-05-18T14:10:30.000Z",
    },
]

module.exports = guests