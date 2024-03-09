import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AdminCreateProductPageComponent = ({ categories, uploadImagesApiRequest,
    createProductApiRequest, uploadImagesCloudinaryApiRequest, reduxDispatch, newCategory }) => {
    const [validated, setValidated] = useState(false)
    const [images, setImages] = useState(false);
    const [isCreating, setIsCreating] = useState("");
    const [createProductResponseState, setCreateProductResponseState] = useState({ message: "", error: "" })
    const [categoryChosen, setCategoryChosen] = useState("Choose category")

    const navigate = useNavigate();

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
            if (images.length > 3) {
                setIsCreating("too many files");
                return
            }
            createProductApiRequest(formInputs)
                .then(data => {
                    if (images) {
                        if (process.env.NODE_ENV !== "production") {
                            uploadImagesApiRequest(images, data.productId)
                                .then(res => { })
                                .catch((er) => setIsCreating(er.response.data.message ? er.response.data.message : er.response.data))
                        } else {
                            uploadImagesCloudinaryApiRequest(images, data.productId)
                        }
                    }
                    if (data.message === "product created") navigate("/admin/products");
                })
                .catch(er => {
                    setCreateProductResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data });
                })
        }
        setValidated(true)
    };

    const uploadHandler = (images) => {
        setImages(images);
    }

    const newCategoryHandler = (e) => {
        if (e.keyCode && e.keyCode === 13 && e.target.value) {
            reduxDispatch(newCategory(e.target.value));
            setTimeout(() => {
                let element = document.getElementById("categories");
                element.value = e.target.value;
                setCategoryChosen(e.target.value);
                e.target.value = "";
            })

        }
    }

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

                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-600">Description</label>
                        <textarea
                            id="description"
                            name="description"

                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="smallPrice" className="block text-gray-600"> Price </label>
                        <input
                            type="number"
                            id="price"
                            name="price"

                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        Attributes
                    </div>
                    <div>
                        <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                        <select id="categories" name="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="Choose category">Choose a Category</option>
                            {categories.map((category, idx) => (
                                <option key={idx} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="newCategory" className="block text-gray-600">Add a new Category</label>
                        <input
                            type="text"
                            id="newCategory"
                            name="newCategory"
                            onKeyUp={newCategoryHandler}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-gray-600">Image URL</label>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >

                        </label>
                        <input
                            for="file_input"
                            id="file_input"
                            name="imageUrl"
                            type="file"
                            multiple
                            required
                            onChange={(e) => uploadHandler(e.target.files)}
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        />

                        {isCreating}
                        Upload file
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Create Product
                        </button>
                        {createProductResponseState.error ?? ""}
                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminCreateProductPageComponent;