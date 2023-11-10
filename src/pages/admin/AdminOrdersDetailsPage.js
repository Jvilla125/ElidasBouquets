import React from "react";

import AdminOrdersDetailsPageComponent from "./components/AdminOrdersDetailsPageComponent"

import axios from "axios";

const getOrder = async (id) => {
    const { data } = await axios.get("/api/orders/user/" + id);
    return data
}

const AdminOrdersDetailsPage = () => {
    return (
        <>
            <AdminOrdersDetailsPageComponent getOrder={getOrder} />
        </>
    )
}

export default AdminOrdersDetailsPage;