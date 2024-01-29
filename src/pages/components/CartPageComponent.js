import React from "react";

import CheckOutFormComponent from "../../components/CheckOutFormComponent";
import CartItemComponent from "../../components/CartItemComponent";

const CartPageComponent = ({ item, addToCart, cartItems, cartSubtotal, reduxDispatch }) => {
    
    const changeCount = (productID, count) => {
        reduxDispatch(addToCart(productID, count))
    }

    return (
        <>
            <div className=" w-10/12 mx-auto flex sm:flex-row flex-col pb-12">
                {
                    cartItems.map((item, idx) => (
                        <CartItemComponent item={item} key={idx} changeCount={changeCount} />
                    ))}
                
                <div className="p-3 flex flex-col justify-center">
                    <div>
                        <h1 className="text-3xl ">Subtotal (# of Products)</h1>
                        <p >$250</p>
                    </div>
                    <div>
                        <CheckOutFormComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPageComponent;