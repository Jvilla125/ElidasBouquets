import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminEditUserProfileComponent = ({ updateUserApiRequest, fetchUser }) => {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState([]);
    const [isAdminState, setIsAdminState] = useState(false);
    const [updateUserResponseState, setUpdateUserResponseState] = useState({ message: "", error: "" })

    const { id } = useParams();
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const name = form.name.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const isAdmin = form.isAdmin.checked
        if (event.currentTarget.checkValidity() === true) {
            updateUserApiRequest(id, name, lastName, email, isAdmin)
                .then(data => {
                    if (data === "user updated") {
                        navigate("/admin/users");
                    }
                })
                .catch(er => {
                    setUpdateUserResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data })
                })
        }
        setValidated(true)
    }

    useEffect(() => {
        fetchUser(id)
            .then(data => {
                setUser(data);
                setIsAdminState(data.isAdmin);
            })
            .catch((er) => console.log(er.response.data.message ? er.response.data.message : er.response.data));
    }, [id])

    return (
        <>
            <Link to="/admin/users">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Back
                </button>
            </Link>
            <div class="flex flex-row justify-center items-center w-full">
                <form class="w-1/3 mx-auto" noValidate validated={validated} onSubmit={handleSubmit}>
                    <h1 className="text-4xl">Edit User</h1>
                    <div  >
                        <label for="name" class="block mb-2 font-medium text-gray-900 dark:text-white">First Name</label>
                        <input name="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user.name} required />
                    </div>
                    <div class="mb-5">
                        <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                        <input name="lastName" id="password" class="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user.lastName} required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user.email} required />
                    </div>
                    <div class="flex items-start mb-5">
                        <div class="flex items-center h-5">
                            <input label="Is admin" name="isAdmin" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" checked={isAdminState} onChange={(e) => setIsAdminState(e.target.checked)} />
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is Admin</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update
                    </button>
                    {updateUserResponseState.error}
                </form>
            </div>
        </>
    )
}

export default AdminEditUserProfileComponent;

