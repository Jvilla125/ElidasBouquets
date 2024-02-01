const products = [
    {
        name: "Bouquet 1",
        description: "Amazing Bouquets!",
        itemList: ["roses", "daisies"],
        category: "Birthday",
        count: 5,
        price: "25.99",
        attrs: [
            {key: "color", value: "red"},
        ],
        images: [
            {path: "/images/happy.jpeg"}
        ]
    },
    {
        name: "Yellow Bouquet",
        description: "Amazing Bouquets!",
        itemList: ["roses", "daisies"],
        category: "Christmas",
        price: "45.99",
        attrs: [
            {key: "color", value: "red"},
        ],
        images: [
            {path: "/images/happy.jpeg"}
        ]
    }
]

module.exports = products;