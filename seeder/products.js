const products = [
    {
        name: "Bouquet 1",
        description: "Amazing Bouquets!",
        itemList: ["roses", "daisies"],
        category: "Birthday",
        price: [{
            smallPrice: 20,
            mediumPrice: 30,
            largePrice: 40
        }],
        attrs: [
            {key: "color", value: "red"},
        ],
        image: ["/images/happy.jpeg"]
    }
]

module.exports = products;