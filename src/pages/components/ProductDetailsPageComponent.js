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
                                <div className="text-3xl text-left ml-3 pb-2">
                                    <h1>{product.name}</h1>
                                    <p className="text-2xl p-2">$125</p>
                                </div>
                                <div className="p-2">
                                    <p>Price Options</p>
                                    ${product.price}
                                    <select className=" rounded-lg w-11/12 sm:w-1/2">

                                        <option value="price_small">Small: $24.99</option>
                                        <option value="price_medium">Medium: $49.99</option>
                                        <option value="name_large">Large: $74.99</option>
                                    </select>
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