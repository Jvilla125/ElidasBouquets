import React, { useEffect } from "react";
import ProductDetailsPageComponent from "./components/ProductDetailsPageComponent";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

import axios from "axios";

const getProductDetails = async (id) => {
    const { data } = await axios.get(`/api/products/get-one/${id}`);
    return data
}


const ProductDetailsPage = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="bg-slate-600 pb-4">
                <div className="w-11/12 mx-auto bg-gray-300">
                    <ProductDetailsPageComponent
                        addToCartReduxAction={addToCart} reduxDispatch={dispatch}
                        getProductDetails={getProductDetails}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage;