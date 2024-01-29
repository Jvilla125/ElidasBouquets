import React from "react";

const CartItemComponent = ({ item, changeCount}) => {
    return (
        <>
            <div className="w-2/3 mt-4 ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption className="p-2 text-3xl font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Your Cart
                        <hr className="h-px my-2 bg-gray-900 border-0 " />
                    </caption>
                    <thead className="underline underline-offset-4 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-32 ">
                                <img crossOrigin="anonymous" src={item.image ? (item.image.path ?? null) : null} />
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                {item.name}
                            </td>

                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">

                                    <select type="number" id="first_product"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        onChange={changeCount ? (e) => changeCount(item.productID, e.target.value) : undefined} value={item.quantity}
                                        >
                                        <option selected></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                ${item.price}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
};

export default CartItemComponent; 