import React, { useState } from "react";

const ProductDetailsPageComponent = () => {
    const [quantity, setQuantity] = useState(1);

    const addQuanity = () => {
        setQuantity(quantity + 1);
    }
    const subtractQuantity = () => {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
        
    }

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-7 gap-4 p-8 sm:grid-auto-row sm:grid-auto-col">
                <div className="bg-blue-400">
                    <h1>Bouquet #1</h1>
                </div>
                {/* Select Bouquet Size Div  */}
                <div className="row-span-2 col-start-2 row-start-2 row-end-3 bg-blue-400">
                    <h1 className="text-xl font-semibold p-1">1. Select your size</h1>
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
                {/* Large Image Div */}
                <div className="row-span-4 col-start-1 row-start-2 bg-blue-400">
                    <img className=" rounded-xl" src="/images/BouquetOne.jpg" alt="product image" />
                </div>
                {/* Smaller images Div */}
                <div className="col-start-1 row-start-6 bg-blue-400 flex flex-row justify-around sm:justify-self-auto">
                    <img className="object-contain md:object-scale-down sm:w-8 sm:h-8 lg:w-28 lg:h-32" src="/images/BouquetOne.jpg" alt="product image" />
                    <img className="object-contain md:object-scale-down sm:w-8 sm:h-8 lg:w-28 lg:h-32" src="/images/BouquetOne.jpg" alt="product image" />
                </div>
                {/* Select Additional Add ons Div */}
                <div className="row-span-2 col-start-2 row-start-3 row-end-4 bg-blue-400">
                    <h1 className="text-xl font-semibold p-1">2. Additional Add-ons</h1>
                    <div className="grid p-4 w-full gap-6 md:grid-cols-2 ">
                        <div>
                            <h1 className="sm:text-lg font-semibold w-full sm:w-auto text-sm">Additional Add ons</h1>
                            <select className="bg-gray-300 rounded-lg ">
                                <option>Featured</option>
                                <option value="price_1">Price: Low to High</option>
                                <option value="price_-1">Price: High to Low</option>
                                <option value="name_1">Name A-Z</option>
                                <option value="name_-1">Name Z-A</option>
                            </select>
                            <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Add to Bouquet
                            </button>
                        </div>
                        <div >
                            <h1 className="text-lg font-semibold ">Wrapping Paper Color</h1>
                            <select className="bg-gray-300 rounded-lg">
                                <option>Featured</option>
                                <option value="price_1">Price: Low to High</option>
                                <option value="price_-1">Price: High to Low</option>
                                <option value="name_1">Name A-Z</option>
                                <option value="name_-1">Name Z-A</option>
                            </select>
                            <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Add to Bouquet
                            </button>
                        </div>
                    </div>


                </div>
                <div className="col-start-1 row-start-7 bg-blue-400">
                    This will be the description
                    <ul>
                        <li>
                            list one
                        </li>
                        <li>
                            list two
                        </li>
                    </ul>
                </div>
                {/* This will be the quantity selector section */}
                <div className="row-span-2 col-start-3 row-start-2 bg-blue-400">
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
                    </div>
                </div>

                <div className="row-span-2 col-start-3 row-start-4 bg-blue-400">14</div>
            </div>
        </>
    )
}

export default ProductDetailsPageComponent;