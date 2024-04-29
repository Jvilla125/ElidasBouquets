import React, { useState, useEffect } from "react";
import AddedToCartMessageComponent from '../../components/AddedToCartMessageComponent';

import { useParams } from "react-router-dom";


const ProductDetailsPageComponent = ({ addToCartReduxAction, reduxDispatch, getProductDetails }) => {

    const { id } = useParams()
    const [quantity, setQuantity] = useState(1)
    const [showCartMessage, setShowCartMessage] = useState(false)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const addToCartHandler = () => {
        reduxDispatch(addToCartReduxAction(id, quantity))
        setShowCartMessage(true)
    }

    useEffect(() => {
        getProductDetails(id)
            .then(data => {
                setProduct(data);
                setLoading(false)
            })
            .catch((er) => setError(er.response.data.message ? er.response.data.message : er.response.data));
    }, [])

    return (
        <>
            <div className="mx-auto grid grid-cols-1 gap-2 mt-4 p-8 sm:grid-cols-4 bg-gray-100 w-10/12 border border-black rounded-xl">
                {loading ? (
                    <h2> Loading product details... </h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    <>
                        <div className="mx-auto w-4/5 col-span-2">
                            {/* Large Image Div */}
                            {product.images ? product.images.map((image, id) => (
                                <div key={id}>
                                    <div key={id} id={`imageId${id + 1}`}>
                                        <img
                                            className="rounded-xl"
                                            src={`${image.path ?? null}`}
                                            alt="product-image" />
                                    </div>
                                </div>
                            ))
                                : null}


                            {/* Description content */}
                            <div className="bg-blue-400">
                                <h1>ghi</h1>
                            </div>

                        </div>
                        <div className="w-11/12 col-span-2">
                            {/* Select Bouquet Size Div */}
                            <AddedToCartMessageComponent
                                showCartMessage={showCartMessage}
                                setShowCartMessage={setShowCartMessage} />
                            <div>
                                <div className="text-3xl text-left ml-3 ">
                                    <h1>{product.name}</h1>
                                    <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                </div>
                                <div className="p-2">
                                    
                                    ${product.price}
                                    {/* start of price options */}
                                    <h3 className="mb-5 text-xl font-medium ">Price Options</h3>
                                    <ul className="grid w-full gap-6 sm:grid-cols-3 ">
                                        <li >
                                            <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
                                            <label for="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-black bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full text-lg font-semibold">Standard</div>
                                                    <div className="w-full">$24.99</div>
                                                </div>
                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="hosting-medium" name="hosting" value="hosting-medium" className="hidden peer" />
                                            <label for="hosting-medium" className="inline-flex items-center justify-between w-full p-5 text-black bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full text-lg font-semibold">Deluxe</div>
                                                    <div className="w-full">$49.99</div>
                                                </div>

                                            </label>
                                        </li>
                                        <li>
                                            <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                                            <label for="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-black bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <div className="block">
                                                    <div className="w-full text-lg font-semibold">Premium</div>
                                                    <div className="w-full">$89.99</div>
                                                </div>
                                                
                                            </label>
                                        </li>
                                    </ul>
                                    <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                    {/* <select className=" rounded-lg w-11/12 sm:w-1/2">

                                        <option value="price_small">Small: $24.99</option>
                                        <option value="price_medium">Medium: $49.99</option>
                                        <option value="name_large">Large: $74.99</option>
                                    </select> */}
                                </div>
                                <div className="p-2 ">
                                    <p className="mb-2">Quantity</p>
                                    <select type="number" id="first_product" value={quantity}
                                        onChange={e => setQuantity(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Choose Your Quantity</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                            </div>

                            {/* Update the following section when we have additional items to add */}
                            {/* Select Additional Add ons Div */}
                            {/* <div className="bg-gray-300 border border-black rounded-xl mt-4 mb-4 ">
                        <div className="">
                            <h1 className="text-xl font-semibold p-1">2. Additional Add-ons</h1>
                            <div className="grid p-4 w-full gap-6 md:grid-cols-2"> */}
                            {/* Add-ons options here */}
                            {/* </div>
                        </div>
                    </div> */}

                            {/* Quantity selector section */}
                            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-lg w-11/12 sm:w-10/12"
                                onClick={addToCartHandler}
                            >
                                Add to Cart
                            </button>
                            <div className="pt-4">
                                <h1 className="text-3xl">Item Description & Details</h1>

                                <hr class="h-px bg-black border-2  w-auto"></hr>
                                {product.description}
                                <ul className="list-disc list-inside">
                                    <li>Roses</li>
                                    <li>lillies</li>
                                    <li>Cheese</li>
                                </ul>
                            </div>

                        </div>
                        <div className=" mx-auto sm:w-10/12  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 p-4 sm:p-4 gap-4 ">
                            {/* Your grid content */}

                            <h1 className="text-3xl underline"> Pet Safe </h1>
                            <p className="text-lg"> My Bouquets Are made with your pets in mind. I use Flowers that are consider non-toxic to cats and dogs. If you or the person you
                                are gifting flowers to has a fur baby at home, I recommend using these flower arrangements.
                            </p>
                            <p>*As with any pllpant material there could be concern for vomiting or gastrointestinal discomfort when ingested.</p>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default ProductDetailsPageComponent;