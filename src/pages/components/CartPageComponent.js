import React from "react";

import CheckOutFormComponent from "../../components/CheckOutFormComponent";
import CartItemComponent from "../../components/CartItemComponent";

const CartPageComponent = ({ item, addToCart, itemsCount, removeFromCart, cartItems, cartSubtotal, reduxDispatch }) => {

    const changeCount = (productID, count) => {
        reduxDispatch(addToCart(productID, count));
    };

    const removeFromCartHandler = (productID, quantity, price) => {
        if (window.confirm("Are you sure?")) {
            console.log(productID);
            console.log(quantity);
            console.log(price)
            reduxDispatch(removeFromCart(productID, quantity, price))
        }
    }
    

    const orderHandler = () => {
        const orderData = {
            orderTotal: {
                itemsCount: itemsCount,
                cartSubtotal: cartSubtotal,
            },
        cartItems: cartItems.map(item => {
            return {
                productID: item.productID,
                name: item.name,
                price: item.price,
                image: {path: item.image ? (item.image.path ?? null) : null},
                quantity: item.quantity,
                count: item.count 
            }
        }),
    }
    console.log(orderData)
    return orderData
}

    return (
        <>
            <div className=" w-10/12 mx-auto flex sm:flex-row flex-col pb-12 ">
                {cartItems.length === 0 ? (
                    <div> empty</div>
                ) : (
                    cartItems.map((item, idx) => (
                        <CartItemComponent
                            item={item}
                            key={idx}
                            changeCount={changeCount}
                            removeFromCartHandler={removeFromCartHandler}
                        />
                    ))
                )}


                <div className="p-3 flex flex-col justify-center ">
                    <div className="pb-4">
                        <h1 className="text-3xl underline">Subtotal {cartItems.length} {cartItems.length === 1 ? "Product" : "Products"} </h1>
                        <p >$250</p>
                    </div>
                    <div>
                        <CheckOutFormComponent orderHandler={orderHandler} cartSubtotal={cartSubtotal} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPageComponent;