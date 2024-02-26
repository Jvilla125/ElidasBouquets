import React, { useEffect, useState } from "react";
import UserLinksComponent from "../../../components/user/UserLinksComponent";
import { Link } from "react-router-dom";

const UserOrdersPageComponent = ({ getOrders }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders()
            .then((orders) => setOrders(orders))
            .catch((er) => console.log(er));
    }, []);

    return (
        <>
            <div className="mx-auto w-11/12 grid sm:grid-cols-3 grid-cols-1 pt-5 ">
                <div className="w-full col-span-3 flex flex-col sm:flex-row">
                    {/* start of first div */}
                    <div className="mx-auto">
                        <UserLinksComponent />
                    </div>
                    {/* start of second div */}
                    <div className="sm:w-3/4 w-full mx-auto h-fit pt-5 sm:pt-0 overflow-x-auto">
                        <div className="table-container">
                            <table className="w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500 bg-blue-400">
                                    <tr>
                                        <th scope="col" className="w-1/6 px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="w-1/6 px-6 py-4">
                                            Full
                                        </th>
                                        <th scope="col" className="w-1/6 px-6 py-4">
                                            Date
                                        </th>
                                        <th scope="col" className="w-1/6 px-6 py-4">
                                            Total Price
                                        </th>
                                        <th scope="col" className="w-1/6 px-6 py-4">
                                            Order Details
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                            <div className="table-body overflow-y-auto h-64">
                                <table className="w-full text-left text-sm font-light">
                                    <tbody>
                                        {orders.map((order, idx) => (
                                            <tr
                                                className="border-b dark:border-neutral-500 bg-blue-200"
                                                key={idx}
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    {idx + 1}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {order.createdAt.substring(0, 10)}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {order.orderTotal.cartSubtotal}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {/* <Link to={`/user/order-details/${order._id}`}>
                                                        Details
                                                    </Link> */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserOrdersPageComponent;
