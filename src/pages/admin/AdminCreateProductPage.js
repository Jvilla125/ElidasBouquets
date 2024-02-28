import React from "react";
import AdminCreateProductPageComponent from "./components/AdminCreateProductPageComponent";

import { useSelector } from 'react-redux';


const AdminCreateProductPage = () => {
    const { categories } = useSelector((state) => state.getCategories)


    return (
        <>
            <AdminCreateProductPageComponent categories={categories}/>
        </>
    )
}

export default AdminCreateProductPage;