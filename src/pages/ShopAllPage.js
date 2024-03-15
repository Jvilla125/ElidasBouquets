import React from "react";
import ShopAllPageComponent from "./components/ShopAllPageComponent";

import axios from "axios";

import { useSelector } from "react-redux";


const getProducts = async () => {
    const { data } = await axios.get("/api/products");
    return data
}

const ShopAllPage = () => {

    const { categories } = useSelector((state) => state.getCategories)

    return (
        <>
            <div className="bg-slate-600 ">
                <div className="w-10/12 mx-auto bg-gray-300">
                    <ShopAllPageComponent getProducts={getProducts} categories={categories} />
                </div>
            </div>
        </>
    )
}

export default ShopAllPage;