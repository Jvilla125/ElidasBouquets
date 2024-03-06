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

const uploadHandler = async (images, productId) => {
    const formData = new FormData();

    Array.from(images).forEach((image) => {
        formData.append("images", image);
    })

    await axios.post("/api/products/admin/upload?productId=" + productId, formData);
}

const AdminEditProductPage = () => {

    const imageDeleteHandler = async (imagePath, productId) => {
        let encoded = encodeURIComponent(imagePath)
        await axios.delete(`/api/products/admin/image/${encoded}/${productId}`);
    }

    const { categories } = useSelector((state) => state.getCategories)

    console.log(categories)
    return (
        <>
            <AdminEditProductPageComponent categories={categories} fetchProduct={fetchProduct}
                updateProductApiRequest={updateProductApiRequest} imageDeleteHandler={imageDeleteHandler} uploadHandler={uploadHandler}/>
        </>
    )
}

export default AdminEditProductPage;