import React, { useEffect, useState } from "react";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { Link } from "react-router-dom";

const AdminOrdersPageComponent = ({ getOrders }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders().then((orders) => setOrders(orders))
        .catch(er => console.log(er.response.data.message ? er.response.data.message : er.response.datat))
    }, [])

    console.log(orders)

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
                            {orders.map((order, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1} </td>
                                <td>
                                    {order.user !== null ? (
                                        <>
                                            {order.user.name} {order.user.lastName}
                                        </>
                                    ) : null}
                                </td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.orderTotal.cartSubtotal}</td>
                                {/* TO DO: figure out order details page */}
                                <td><Link to={`/admin/order-details/${order._id}`}> Go to order</Link></td>
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

export default AdminOrdersPageComponent;