const ObjectId = require("mongodb").ObjectId

const Orders = Array.from({ length: 22 }).map((_, idx) => {
    let day = 20
    if (idx < 10) {
        var hour = "0" + idx
        var subtotal = 100
    } else if (idx > 16 && idx < 21) {
        var hour = idx
        var subtotal = 100 + 12 * idx
    } else {
        var hour = idx
        var subtotal = 100
    }
    return {
        user: ObjectId("625add3d78fb449f9d9fe2ee"),
        orderTotal: {
            itemsCount: 3,
            cartSubtotal: subtotal
        },
        cartItems: [
            {
                name: "Bouquet One",
                price: 34.99,
                image: { path: "/images/BouquetOne.jpg" },
                quantity: 3,
                count: 12
            }
        ],
        createdAt: `2022-03-${day}T${hour}:12:36.490+00:00`
    }
})

module.exports = Orders