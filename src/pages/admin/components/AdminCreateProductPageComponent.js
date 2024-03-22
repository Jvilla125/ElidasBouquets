import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { changeCategory, setValuesForAttrFromDbSelectForm, setAttributesTableWrapper } from './utils/utils';


const AdminCreateProductPageComponent = ({ categories,
    uploadImagesApiRequest,
    createProductApiRequest,
    uploadImagesCloudinaryApiRequest,
    reduxDispatch,
    newCategory,
    deleteCategory,
    saveAttributeToCatDoc
}) => {
    const [validated, setValidated] = useState(false)
    // const [attributesTable, setAttributesTable] = useState([]);
    // const [attributesFromDb, setAttributesFromDb] = useState([]);
    const [images, setImages] = useState(false);
    const [isCreating, setIsCreating] = useState("");
    const [createProductResponseState, setCreateProductResponseState] = useState({ message: "", error: "" })
    const [categoryChosen, setCategoryChosen] = useState("Choose category")
    // const [newAttrKey, setNewAttrKey] = useState(false);
    // const [newAttrValue, setNewAttrValue] = useState(false);

    // const attrVal = useRef(null);
    // const attrKey = useRef(null);
    // const createNewAttrKey = useRef(null);
    // const createNewAttrVal = useRef(null);

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
            }, 200);
        }
    };

    const deleteCategoryHandler = () => {
        let element = document.getElementById("categories");
        reduxDispatch(deleteCategory(element.value));
        setCategoryChosen("Choose category");
    }

    // const attributeValueSelected = (e) => {
    //     if (e.target.value !== "Choose attribute value") {
    //         setAttributesTableWrapper(attrKey.current.value, e.target.value, setAttributesTable);
    //     }
    // }

    // const deleteAttribute = (key) => {
    //     setAttributesTable((table) => table.filter((item) => item.key !== key));
    // }

    // const newAttrKeyHandler = (e) => {
    //     e.preventDefault();
    //     setNewAttrKey(e.target.value);
    //     addNewAttributeManually(e);
    // }

    // const newAttrValueHandler = (e) => {
    //     e.preventDefault();
    //     setNewAttrValue(e.target.value);
    //     addNewAttributeManually(e);
    // }

    // const addNewAttributeManually = (e) => {
    //     if (e.keyCode && e.keyCode === 13) {
    //         if (newAttrKey && newAttrValue) {
    //             reduxDispatch(saveAttributeToCatDoc(newAttrKey, newAttrValue, categoryChosen));
    //             setAttributesTableWrapper(newAttrKey, newAttrValue, setAttributesTable);
    //             e.target.value = "";
    //             createNewAttrKey.current.value = "";
    //             createNewAttrVal.current.value = "";
    //             setNewAttrKey(false);
    //             setNewAttrValue(false);
    //         }
    //     }
    // }

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
                        <button type="button"
                            onClick={deleteCategoryHandler}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
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
                    
                        {/* <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="formBasicAttributes" className="block mb-1">Choose attribute and set value</label>
                                <input
                            type="text"
                            id="newCategory"
                            name="newCategory"
                            onKeyUp={newCategoryHandler}
                            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"

                        />
                                <select
                                    id="formBasicAttributes"
                                    name="atrrKey"
                                    className="w-full px-4 py-2 border rounded-md bg-white"
                                    ref={attrKey}
                                    onChange={(e) => setValuesForAttrFromDbSelectForm(e, attrVal, attributesFromDb)}
                                >
                                    <option value="">Choose attribute</option>
                                    {attributesFromDb.map((item, idx) => (
                                        <option key={idx} value={item.key}>{item.key}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="formBasicAttributeValue" className="block mb-1">Attribute value</label>
                                <select
                                    id="formBasicAttributeValue"
                                    name="atrrVal"
                                    className="w-full px-4 py-2 border rounded-md bg-white"
                                    ref={attrVal}
                                    onChange={attributeValueSelected}
                                >
                                    <option value="">Choose attribute value</option>
                                </select>
                            </div>
                        </div> */}
                    
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