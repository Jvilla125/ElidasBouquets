import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

const AdminProductsPageComponent = ({ fetchProducts, deleteProduct }) => {

    const [products, setProducts] = useState([])
    const [productDelete, setProductDelete] = useState(false);

    const deleteHandler = async (productId) => {
        if (window.confirm("Are you sure?")) {
            const data = await deleteProduct(productId)
            if (data.message === "product removed") {
                setProductDelete(!productDelete)
            }
        }
    }

    useEffect(() => {
        const abctrl = new AbortController();
        fetchProducts(abctrl)
            .then((res) => setProducts(res))
            .catch((er) =>
                setProducts([
                    {name: er.response.data.message ? er.response.data.message : er.response.data}
                ])
            );
        return () => abctrl.abort();
    }, [productDelete]);


    return (
        <>
            <div className="grid mt-6 md:mb-10 grid-cols-1 lg:grid-cols-10">
                <AdminLinksComponent />
                <div className=" w-full row-start-2 col-start-4 col-span-6">
                    <h1>Products</h1>
                    <Link to="/admin/create-new-product">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Create Product
                        </button>
                    </Link>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Edit
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>
                                            <Link to={`/admin/edit-product/${item._id}`}>
                                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                                    Edit
                                                </button>
                                            </Link>
                                            {" / "}
                                            <button
                                                variant="danger"
                                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                            onClick={() => deleteHandler(item._id)}
                                            >
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

export default AdminProductsPageComponent;