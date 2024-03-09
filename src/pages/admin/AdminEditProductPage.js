import React from "react";
import AdminEditProductPageComponent from "./components/AdminEditProductPageComponent";
import { uploadImagesApiRequest, uploadImagesCloudinaryApiRequest } from "./utils/utils";
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

    const imageDeleteHandler = async (imagePath, productId) => {
        let encoded = encodeURIComponent(imagePath)
        if (process.env.NODE_ENV !== "production") {
            // to do: change to !==
            await axios.delete(`/api/products/admin/image/${encoded}/${productId}`);
        } else {
            await axios.delete(`/api/products/admin/image/${encoded}/${productId}?cloudinary=true`);
        }
    }

    const { categories } = useSelector((state) => state.getCategories)

    console.log(categories)
    return (
        <>
            <AdminEditProductPageComponent categories={categories} fetchProduct={fetchProduct}
                updateProductApiRequest={updateProductApiRequest} imageDeleteHandler={imageDeleteHandler} 
                uploadImagesApiRequest={uploadImagesApiRequest} uploadImagesCloudinaryApiRequest={uploadImagesCloudinaryApiRequest}/>
        </>
    )
}

export default AdminEditProductPage;