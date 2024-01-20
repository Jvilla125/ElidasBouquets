import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const AdminEditProductPageComponent = () => {
    // State to manage form inputs
    const [product, setProduct] = useState({
        name: '',
        description: '',
        smallPrice: '',
        mediumPrice: '',
        largePrice: '',
        imageUrl: '',
    });

    // Simulated product data for testing
    const sampleProduct = {
        name: 'Sample Product',
        description: 'A beautiful flower bouquet.',
        smallPrice: '19.99',
        mediumPrice: '29.99',
        largePrice: '39.99',
        imageUrl: 'https://example.com/sample-image.jpg',
    };

    useEffect(() => {
        // Simulated API request to fetch product data based on match.params.productId
        // Replace this with actual API call in your application
        // For now, we'll use the sampleProduct data
        setProduct(sampleProduct);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic here to update the product data, considering optional prices
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
                        <label htmlFor="smallPrice" className="block text-gray-700 text-sm font-bold mb-2">
                            Small Price (Optional)
                        </label>
                        <input
                            type="number"
                            id="smallPrice"
                            name="smallPrice"
                            value={product.smallPrice}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mediumPrice" className="block text-gray-700 text-sm font-bold mb-2">
                            Medium Price (Optional)
                        </label>
                        <input
                            type="number"
                            id="mediumPrice"
                            name="mediumPrice"
                            value={product.mediumPrice}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="largePrice" className="block text-gray-700 text-sm font-bold mb-2">
                            Large Price (Optional)
                        </label>
                        <input
                            type="number"
                            id="largePrice"
                            name="largePrice"
                            value={product.largePrice}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
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