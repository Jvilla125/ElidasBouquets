import React from "react";

import AdminUsersPageComponent from "./components/AdminUsersPageComponent";

import axios from "axios"

const fetchUsers = async (abctrl) => {
    const {data} = await axios.get("/api/users")
    return data
}

const deleteUser = async(userId) => {
    const {data} = await axios.delete(`/api/users/${userId}`)
    return data
}

const AdminUsersPage = () => {
    return <AdminUsersPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />
}

export default AdminUsersPage;