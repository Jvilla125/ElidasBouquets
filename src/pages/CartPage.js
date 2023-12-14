import React from "react";

import CartPageComponent from "./components/CartPageComponent";

const CartPage = () => {
    return (
        <>
            <div className="bg-slate-300">
                <CartPageComponent item={{ image: { path: "/images/BouquetOne.jpg" }, name: "product one", price: 10 }} />
            </div>
        </>
    )
};

export default CartPage;