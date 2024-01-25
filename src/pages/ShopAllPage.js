import React from "react";
import ShopAllPageComponent from "./components/ShopAllPageComponent";

import axios from "axios";

const getProducts = async () => {
    const { data } = await axios.get("/api/products");
    return data
}

const ShopAllPage = () => {
    return (
        <>
            <div className="bg-slate-600 ">
                <div className="w-10/12 mx-auto bg-gray-300">
                    <ShopAllPageComponent getProducts={getProducts}/>
                </div>
            </div>
        </>
    )
}

export default ShopAllPage;