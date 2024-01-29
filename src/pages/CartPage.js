import React from "react";

import CartPageComponent from "./components/CartPageComponent";

import { useSelector, useDispatch } from "react-redux";
import {addToCart} from "../redux/actions/cartActions";

const CartPage = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
    const reduxDispatch = useDispatch();

    return (
        <>
            <div className="bg-slate-300">
                <CartPageComponent addToCart={addToCart} cartItems={cartItems} cartSubtotal={cartSubtotal} reduxDispatch={reduxDispatch}/>
            </div>
        </>
    )
};

export default CartPage;