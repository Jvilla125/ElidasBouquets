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
                    <label htmlFor="name" className="block text-gray-600">Product Name</label>
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
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-gray-600">Image URL</label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        value={product.imageUrl}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
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