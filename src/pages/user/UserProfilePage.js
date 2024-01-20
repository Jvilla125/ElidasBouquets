import React from "react";

import axios from "axios"
import { useSelector } from "react-redux";

import UserProfilePageComponent from "./components/UserProfilePageComponent";

const updateUserApiRequest = async (name, lastName, password) => {
    const { data } = await axios.put(
        "/api/users/profile",
        { name, lastName, password },
    )
    return data
}

const fetchUser = async (user_id) => {
    const { data } = await axios.get("/api/users/profile/" + user_id);
    return data
}

const UserProfilePage = () => {
    const { userInfo } = useSelector((state) => state.userRegisterLogin);

    return (
        <div className="bg-slate-600 ">
            <div className="w-10/12 mx-auto bg-gray-300">
                <UserProfilePageComponent updateUserApiRequest={updateUserApiRequest} fetchUser={fetchUser} userInfo={userInfo} />
            </div>
        </div>
    )
}

export default UserProfilePage;