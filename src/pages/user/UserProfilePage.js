import React from "react";

import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { setReduxUserState } from "../../redux/actions/userActions";

import UserProfilePageComponent from "./components/UserProfilePageComponent";

const updateUserApiRequest = async (name, lastName, password) => {
    const { data } = await axios.put(
        "/api/users/profile",
        { name, lastName, password },
    )
    return data
}

const fetchUser = async (id) => {
    const { data } = await axios.get("/api/users/profile/" + id);
    return data
}

const UserProfilePage = () => {
    const reduxDispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userRegisterLogin);

    return (
        <div className="bg-slate-600 ">
            <div className="w-10/12 mx-auto bg-gray-300">
                <UserProfilePageComponent
                    updateUserApiRequest={updateUserApiRequest}
                    fetchUser={fetchUser}
                    userInfoFromRedux={userInfo}
                    setReduxUserState={setReduxUserState}
                    reduxDispatch={reduxDispatch} 
                    localStorage={window.localStorage}
                    sessionStorage={window.sessionStorage}
                    />
            </div>
        </div>
    )
}

export default UserProfilePage;