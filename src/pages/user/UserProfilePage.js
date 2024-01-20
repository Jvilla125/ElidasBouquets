import React from "react";

import axios from "axios"


import UserProfilePageComponent from "./components/UserProfilePageComponent";

const UserProfilePage = () => {
    const updateUserApiRequest = async (name, lastName, password) => {
        const { data } = await axios.put(
            "/api/users/profile",
            { name, lastName, password },
        )
        return data
    }

    return (
        <div className="bg-slate-600 ">
            <div className="w-10/12 mx-auto bg-gray-300">
                <UserProfilePageComponent updateUserApiRequest={updateUserApiRequest}/>
            </div>
        </div>
    )
}

export default UserProfilePage;