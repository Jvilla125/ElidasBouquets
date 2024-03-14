import React from "react";
import AdminEditUserProfileComponent from "./components/AdminEditUserProfileComponent";
import axios from "axios";

const fetchUser = async (userId) => {
    const { data } = await axios.get(`/api/users/${userId}`);
    return data
}

const updateUserApiRequest = async (userId, name, lastName, email, isAdmin) => {
    const { data } = await axios.put(`/api/users/${userId}`, { name, lastName, email, isAdmin })
    return data;
}

const AdminEditUserProfile = () => {
    return (
        <>
            <AdminEditUserProfileComponent updateUserApiRequest={updateUserApiRequest} fetchUser={fetchUser} />
        </>
    )
}

export default AdminEditUserProfile;