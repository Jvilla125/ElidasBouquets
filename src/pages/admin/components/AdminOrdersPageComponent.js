import React from "react";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

const AdminOrdersPageComponent = () => {
    return (
        <>
            <div className="grid mt-6 md:mb-10 grid-cols-1 lg:grid-cols-10">
                <AdminLinksComponent />
                <div className=" w-full row-start-2 col-start-4 col-span-6">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        User
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Total Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Order Details?
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
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
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
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        3
                                    </th>
                                    <td class="px-6 py-4">
                                        John
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                                    </td>
                                </tr>
                                <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        4
                                    </th>
                                    <td class="px-6 py-4">
                                        John
                                    </td>
                                    <td class="px-6 py-4">
                                        Phone
                                    </td>
                                    <td class="px-6 py-4">
                                        $799
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        5
                                    </th>
                                    <td class="px-6 py-4">
                                        John
                                    </td>
                                    <td class="px-6 py-4">
                                        Wearables
                                    </td>
                                    <td class="px-6 py-4">
                                        $999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
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

export default AdminOrdersPageComponent;