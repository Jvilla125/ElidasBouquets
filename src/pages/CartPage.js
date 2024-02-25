import React from "react";

import CartPageComponent from "./components/CartPageComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, removeFromCart} from "../redux/actions/cartActions";

const CartPage = () => {
    const createOrder = async (orderData) => {
        const { data } = await axios.post("/api/orders", { ...orderData })
        return data
    }
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
    const itemsCount = useSelector((state) => state.cart.itemsCount);
    const reduxDispatch = useDispatch();

    return (
        <>
            <div className="bg-slate-300">
                <CartPageComponent addToCart={addToCart} itemsCount={itemsCount} removeFromCart={removeFromCart} cartItems={cartItems} 
                cartSubtotal={cartSubtotal} reduxDispatch={reduxDispatch}
                createOrder={createOrder}
                />
            </div>
        </>
    )
};

export default CartPage;