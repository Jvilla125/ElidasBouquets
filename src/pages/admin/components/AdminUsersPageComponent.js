import React, { useState, useEffect } from "react";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/userActions"
import { useDispatch } from "react-redux";

const AdminUsersPageComponent = ({ fetchUsers, deleteUser }) => {

    const [users, setUsers] = useState([]);
    const [userDeleted, setUserDeleted] = useState(false);
    const dispatch = useDispatch();
    const deleteHandler = async (userId) => {
        if (window.confirm("Are you sure?")) {
            const data = await deleteUser(userId)
            if(data === "user removed"){
                setUserDeleted(!userDeleted)
            }
        }
    }

    useEffect(() => {
        const abctrl = new AbortController();
        fetchUsers(abctrl).then(res => setUsers(res)).catch((er) =>
        dispatch(logout())
            
        );
        return () => abctrl.abort();
    }, [userDeleted])

    return (
        <>
            <div className="grid mt-6 md:mb-10 grid-cols-1 lg:grid-cols-10">
                <AdminLinksComponent />
                <div className=" w-full row-start-2 col-start-4 col-span-6">
                    <h1>Users page

                    </h1>
                    {console.log(users)}
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Phone Number
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1} </td>
                                        <td>{user.name} </td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.isAdmin ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}
                                        </td>
                                        <td>
                                            <Link to={`/admin/edit-user/${user._id}`}>
                                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                                    edit
                                                </button>
                                            </Link>
                                            {" / "}
                                            <button variant="danger" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => deleteHandler(user._id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsersPageComponent;