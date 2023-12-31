import React, { useState, useEffect } from "react";

//need to fetch id from url request (App.js file)
import { useParams } from "react-router-dom";
import CartItemComponent from "../../../components/CartItemComponent";
import {logout} from "../../../redux/actions/userActions"
import { useDispatch } from "react-redux";

const AdminOrdersDetailsPageComponent = ({ getOrder }) => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState([])
    const [cartSubtotal, setCartSubtotal] = useState(0)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        getOrder(id)
            .then((order) => {
                setUserInfo(order.user)
                setCartSubtotal(order.orderTotal.cartSubtotal)
                setCartItems(order.cartItems)
            })
            .catch((er) => dispatch(logout()))
    }, [id])

    return (
        <>
            <h1>This will show details of a specific order</h1>
            <h2>Order item {userInfo.name} {userInfo.lastName}</h2>
            <h1>{cartSubtotal}</h1>
        <div>
        {cartItems.map((item, idx) => (
                            <CartItemComponent key={idx} item={item} />
                        ))}
        </div>
        </>
    )
}

export default AdminOrdersDetailsPageComponent;