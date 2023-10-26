import React, { useState } from "react";

const ProductDetailsPageComponent = () => {
   
    return (
        <>
            <div className="mx-auto grid grid-cols-1 gap-2 mt-4 p-8 sm:grid-cols-4 bg-gray-100 w-10/12 border border-black rounded-xl">
                <div className="mx-auto w-4/5 col-span-2">
                    {/* Large Image Div */}
                    <div >
                        <img className="rounded-xl" src="/images/BouquetOne.jpg" alt="product-image" />
                    </div>

                    {/* Description content */}
                    <div className="bg-blue-400">
                        <h1>ghi</h1>
                    </div>

                </div>
                <div className="w-11/12 col-span-2">
                    {/* Select Bouquet Size Div */}
                    <div>
                        <div className="text-3xl text-left ml-3 pb-2">
                            <h1>"Sunset Serenade Bouquet"</h1>
                            <p className="text-2xl p-2">$125</p>
                        </div>
                        <div className="p-2">
                            <p>Price Options</p>
                            <select className=" rounded-lg w-11/12 sm:w-1/2">

                                <option value="price_small">Small: $24.99</option>
                                <option value="price_medium">Medium: $49.99</option>
                                <option value="name_large">Large: $74.99</option>

                            </select>
                        </div>
                        <div className="p-2 ">
                            <p className="mb-2">Quantity</p>
                            <div>
                                <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                            </div>

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
                    <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded rounded-lg w-11/12 sm:w-10/12">
                        Add to Cart
                    </button>
                    <div className="pt-4">
                        <h1 className="text-3xl">Item Description & Details</h1>

                        <hr class="h-px bg-black border-2  w-auto"></hr>
                        <h1>"Introducing our enchanting 'Garden Harmony' bouquet, a symphony of nature's finest blooms. This exquisite arrangement combines vibrant roses, delicate lilies, and fragrant lavender, creating a captivating blend of colors and scents that will brighten any occasion. Nestled in a rustic wicker basket, 'Garden Harmony' is the perfect gift to express your love, appreciation, or warm wishes. Share the beauty of nature with someone special today."</h1>
                        <p>What the flowers include:</p>
                        <ul className="list-disc list-inside">
                            <li>Roses</li>
                            <li>lillies</li>
                            <li>Cheese</li>
                        </ul>
                    </div>
                    
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

            <div >

            </div>
        </>
    )
}

export default ProductDetailsPageComponent;