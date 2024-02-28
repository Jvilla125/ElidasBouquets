import React from "react";
import AdminEditProductPageComponent from "./components/AdminEditProductPageComponent";

import { useSelector } from 'react-redux';

const AdminEditProductPage = () => {

    const { categories } = useSelector((state) => state.getCategories)

    console.log(categories)
    return (
        <>
            <AdminEditProductPageComponent categories={categories} />
        </>
    )
}

export default AdminEditProductPage;