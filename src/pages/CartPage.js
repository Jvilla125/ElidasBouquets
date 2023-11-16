import React from "react";

import CartPageComponent from "./components/CartPageComponent";

const CartPage = () => {
    return (
        <>
            <CartPageComponent item={{image: {path: "/images/BouquetOne.jpg"}, name: "product one", price: 10}}  />
        </>
    )
};

export default CartPage;