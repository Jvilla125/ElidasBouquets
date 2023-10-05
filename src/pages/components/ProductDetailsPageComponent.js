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
            <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2 ">
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
                    <div >
                        <div className=" text-3xl text-center pb-2">
                            <h1>"Sunset Serenade Bouquet"</h1>
                        </div>
                        <div className="bg-gray-300 border border-black rounded-xl">
                            <h1 className="text-xl font-semibold p-1">Select Size</h1>
                            <ul className="grid p-4 w-full gap-6 md:grid-cols-3">
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="small" name="size" id="small" />
                                    <label className="flex p-6 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" for="small">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">Small</div>
                                            <div className="w-full">$24.99</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer" type="radio" value="medium" name="size" id="medium" />
                                    <label className="flex p-6 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" for="medium">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">Medium</div>
                                            <div className="w-full">$49.99</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="relative">
                                    <input className="sr-only peer flex flex-col" type="radio" value="large" name="size" id="large" />
                                    <label className="flex p-6 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" for="large">
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">Large</div>
                                            <div className="w-full">$74.99</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>


                    {/* Select Additional Add ons Div */}
                    <div className="bg-gray-300 border border-black rounded-xl mt-4 mb-4 ">
                        <div className="">
                            <h1 className="text-xl font-semibold p-1">2. Additional Add-ons</h1>
                            <div className="grid p-4 w-full gap-6 md:grid-cols-2">
                                {/* Add-ons options here */}
                            </div>
                        </div>
                    </div>

                    {/* Quantity selector section */}
                    <div className="bg-gray-300 border border-black rounded-xl mt-4 mb-4 ">
                        <h1 className="text-xl font-semibold p-1">Select your quantity</h1>
                        <div className="flex items-center">
                            <button
                                className="p-4 bg-blue-500 text-white rounded-l"
                                onClick={subtractQuantity}
                            >
                                -
                            </button>
                            <span className="p-4 bg-gray-200">{quantity}</span>
                            <button
                                className="p-4 bg-blue-500 text-white rounded-r"
                                onClick={addQuanity}
                            >
                                +
                            </button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>

                        </div>
                    </div>



                </div>

            </div>
            <div className=" mx-auto sm:w-11/12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 ">
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