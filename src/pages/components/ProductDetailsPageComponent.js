import React, { useState } from "react";

const ProductDetailsPageComponent = () => {
    const [quantity, setQuantity] = useState(1);

    const addQuanity = () => {
        setQuantity(quantity + 1);
    }
    const subtractQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }

    }

    return (
        <>
            <div className="mx-auto grid grid-cols-1 gap-2 mt-4 p-8 sm:grid-cols-2 bg-gray-200 w-11/12 border border-black rounded-xl">
                <div className="mx-auto w-4/5">
                    {/* Large Image Div */}
                    <div >
                        <img className="rounded-xl" src="/images/BouquetOne.jpg" alt="product image" />
                    </div>

                    {/* Description content */}
                    <div className="bg-blue-400">
                        <h1>ghi</h1>
                    </div>

                </div>
                <div className="w-11/12">
                    {/* Select Bouquet Size Div */}
                    <div>
                        <div className="text-3xl text-left ml-3 pb-2">
                            <h1>"Sunset Serenade Bouquet"</h1>
                        </div>
                        <div className="bg-gray-300 border border-black rounded-xl p-4 md:w-11/12 w-4/5 mx-auto">
                            <h1 className="text-xl font-semibold p-1">Select Size</h1>
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <li className="relative md:w-4/5 w-3/5 mx-auto ">
                                    <input
                                        className="sr-only peer "
                                        type="radio"
                                        value="small"
                                        name="size"
                                        id="small"
                                    />
                                    <label
                                        className="flex p-4 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                                        htmlFor="small"
                                    >
                                        <div className="block">
                                            <div className="text-lg font-semibold">Small</div>
                                            <div>$24.99</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="relative md:w-4/5 w-3/5 mx-auto ">
                                    <input
                                        className="sr-only peer"
                                        type="radio"
                                        value="medium"
                                        name="size"
                                        id="medium"
                                    />
                                    <label
                                        className="flex p-4 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                                        htmlFor="medium"
                                    >
                                        <div className="block">
                                            <div className="text-lg font-semibold">Medium</div>
                                            <div>$49.99</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="relative md:w-4/5 w-3/5 mx-auto">
                                    <input
                                        className="sr-only peer"
                                        type="radio"
                                        value="large"
                                        name="size"
                                        id="large"
                                    />
                                    <label
                                        className="flex p-4 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                                        htmlFor="large"
                                    >
                                        <div className="block">
                                            <div className="text-lg font-semibold">Large</div>
                                            <div>$74.99</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
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
                    <div className="bg-gray-300 border border-black rounded-xl mt-4 mb-4 md:w-11/12 w-4/5 mx-auto text-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className=" mx-auto sm:w-11/12  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 p-4 sm:p-4 gap-4 ">
                {/* Your grid content */}
                <h1 className="text-3xl">Item Description & Details</h1>

                <hr class="h-px bg-black border-2  w-auto"></hr>
                <h1>"Introducing our enchanting 'Garden Harmony' bouquet, a symphony of nature's finest blooms. This exquisite arrangement combines vibrant roses, delicate lilies, and fragrant lavender, creating a captivating blend of colors and scents that will brighten any occasion. Nestled in a rustic wicker basket, 'Garden Harmony' is the perfect gift to express your love, appreciation, or warm wishes. Share the beauty of nature with someone special today."</h1>
                <p>What the flowers include:</p>
                <ul className="list-disc list-inside">
                    <li>Roses</li>
                    <li>lillies</li>
                    <li>Cheese</li>
                </ul>
                <h1 className="text-3xl underline"> Pet Safe </h1>
                <p className="text-lg"> My Bouquets Are made with your pets in mind. I use Flowers that are consider non-toxic to cats and dogs. If you or the person you
                    are gifting flowers to has a fur baby at home, I recommend using these flower arrangements.
                </p>
                <p>*As with any pllpant material there could be concern for vomiting or gastrointestinal discomfort when ingested.</p>
            </div>
            
            <div >
                
            </div>
        </>
    )
}

export default ProductDetailsPageComponent;