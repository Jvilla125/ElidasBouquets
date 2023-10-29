import React, { useState } from "react";
import { Link } from "react-router-dom";
const AdminCreateProductPageComponent = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        smallPrice: '',
        mediumPrice: '',
        largePrice: '',
        imageUrl: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add logic here to save the product data to your backend or perform other actions
        console.log('Product Data:', product);
    };

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

            <div className="container mx-auto mt-5">
                <h1 className="text-2xl font-semibold mb-3">Create New Product</h1>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600">Bouquet Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-600">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={product.description}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="smallPrice" className="block text-gray-600">Small Price (Optional)</label>
                        <input
                            type="number"
                            id="smallPrice"
                            name="smallPrice"
                            value={product.smallPrice}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mediumPrice" className="block text-gray-600">Medium Price (Optional)</label>
                        <input
                            type="number"
                            id="mediumPrice"
                            name="mediumPrice"
                            value={product.mediumPrice}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="largePrice" className="block text-gray-600">Large Price (Optional)</label>
                        <input
                            type="number"
                            id="largePrice"
                            name="largePrice"
                            value={product.largePrice}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select id="categoriires" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a Category</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-gray-600">Image URL</label>
                        
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            for="file_input"
                            id="imageUrl"
                            name="imageUrl"
                            value={product.imageUrl}
                            onChange={handleInputChange}
                            required
                        >
                            Upload file
                        </label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Create Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminCreateProductPageComponent;