import React from "react";

import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

const AdminUsersPageComponent = () => {
    return (
        <>
            <div className="grid mt-6 md:mb-10 grid-cols-1 lg:grid-cols-10">
                <AdminLinksComponent />
                <div className=" w-full row-start-2 col-start-4 col-span-6">
                    <h1>Users page</h1>
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
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        1
                                    </th>
                                    <td class="px-6 py-4">
                                        John
                                    </td>
                                    <td class="px-6 py-4">
                                        Doe
                                    </td>
                                    <td class="px-6 py-4">
                                        JohnDoe@gmail.com
                                    </td>
                                    <td class="px-6 py-4">
                                        300-200-1000
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                    </td>
                                </tr>
                                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        2
                                    </th>
                                    <td class="px-6 py-4">
                                        John
                                    </td>
                                    <td class="px-6 py-4">
                                        Doe
                                    </td>
                                    <td class="px-6 py-4">
                                        JohnDoe@gmail.com
                                    </td>
                                    <td class="px-6 py-4">
                                        300-200-1000
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsersPageComponent;