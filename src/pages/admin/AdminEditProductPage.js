import React from "react";
import AdminEditProductPageComponent from "./components/AdminEditProductPageComponent";

import { useSelector } from 'react-redux';
import axios from "axios"

const fetchProduct = async (productId) => {
    const { data } = await axios.get(`/api/products/get-one/${productId}`);
    return data;
}

const updateProductApiRequest = async (productId, formInputs) => {
    console.log('Update Product Payload:', formInputs);
    try {
        const { data } = await axios.put(`/api/products/admin/${productId}`, { ...formInputs });
        return data;
    } catch (error) {
        throw error;  // Rethrow the error to be caught in the calling function
    }
};

const AdminEditProductPage = () => {

    const { categories } = useSelector((state) => state.getCategories)

    console.log(categories)
    return (
        <>
            <AdminEditProductPageComponent categories={categories} fetchProduct={fetchProduct}
                updateProductApiRequest={updateProductApiRequest} />
        </>
    )
}

export default AdminEditProductPage;