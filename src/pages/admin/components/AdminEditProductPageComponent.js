import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AdminEditProductPageComponent = ({ categories, fetchProduct, updateProductApiRequest, imageDeleteHandler, uploadHandler }) => {

    const [validated, setValidated] = useState(false);
    const [product, setProduct] = useState({});
    const [updateProductResponseState, setUpdateProductResponseState] = useState({
        message: '',
        error: ''
    });
    const [imageRemoved, setImageRemoved] = useState(false)
    const [isUploading, setIsUploading] = useState("");
    const [imageUploaded, setImageUploaded] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct(id)
            .then((product) => setProduct(product))
            .catch((er) => console.log(er));
    }, [id, imageRemoved, imageUploaded]);

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;

        const formInputs = {
            name: form.name.value,
            description: form.description.value,
            category: form.category.value,
            price: form.price.value,
        }

        if (event.currentTarget.checkValidity() === true) {
            updateProductApiRequest(id, formInputs)
                .then(data => {
                    if (data.message === "product updated") navigate('/admin/products')
                })
                .catch((er) => setUpdateProductResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data }));

        }
        setValidated(true)
        // console.log('Updated Product Data:', product);
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
                <form noValidate validated={validated} onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={product.name}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            defaultValue={product.description}

                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <select id="categories" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose category</option>
                            {categories.map((category, idx) => {
                                return product.category === category.name ? (
                                    <option selected key={idx} value={category.name}>
                                        {category.name}
                                    </option>
                                ) : (
                                    <option key={idx} value={category.name}>
                                        {category.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                            Small Price (Optional)
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            defaultValue={product.price}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label htmlFor="mediumPrice" className="block text-gray-700 text-sm font-bold mb-2">
                            Medium Price (Optional)
                        </label>
                        <input
                            type="number"
                            id="mediumPrice"
                            name="mediumPrice"
                            value={product.mediumPrice}
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
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div> */}

                    <div className="mb-4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                        {product.images &&
                            product.images.map((image, idx) => (
                                <div key={idx} className="relative">
                                    <a href="#">
                                        <img
                                            src={image.path ?? null}
                                            alt="product image"
                                            className="sm:w-10/12 w-11/12"
                                        />
                                    </a>

                                    {/* 'x' icon */}
                                    <div className="absolute top-0 left-0" 
                                    onClick={() => imageDeleteHandler(image.path, id).then(data => setImageRemoved(!imageRemoved))}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="red"
                                            className="h-8 w-8 text-white cursor-pointer"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="5"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ))}

                        <input
                            name="imageUrl"
                            value={product.imageUrl}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="file_input_help"
                            id="file_input"
                            type="file"
                            multiple 
                            required
                            onChange={e => {
                                setIsUploading("upload files in progress...")
                                uploadHandler(e.target.files, id)
                                .then(data => {
                                    setIsUploading("upload file completed");
                                    setImageUploaded(!imageUploaded);
                                })
                                .catch((er) => setIsUploading(er.response.data.message ? er.response.data.message : er.response.data))
                            }}/>
                            {isUploading}
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Update Product
                        </button>
                        {updateProductResponseState.error ?? ""}
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminEditProductPageComponent;