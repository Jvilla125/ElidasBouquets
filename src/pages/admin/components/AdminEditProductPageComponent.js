import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const AdminEditProductPageComponent = () => {
    // State to manage form inputs
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        imageUrl: '',
    });

    // Simulated product data for testing
    const sampleProduct = {
        name: 'Sample Product',
        description: 'A beautiful flower bouquet.',
        price: '19.99',
        imageUrl: 'https://example.com/sample-image.jpg',
    };

    // Fetch product data when the component mounts
    useEffect(() => {
        // Simulated API request to fetch product data based on match.params.productId
        // Replace this with actual API call in your application
        // For now, we'll use the sampleProduct data
        setProduct(sampleProduct);
    }, []);

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to update the product data (e.g., send it to an API)
        console.log('Updated Product Data:', product);
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
        <div className="container mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold mb-6 text-center">Edit Product</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
                        Image URL
                    </label>
                    <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        value={product.imageUrl}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>
        </>
    );
};

export default AdminEditProductPageComponent;