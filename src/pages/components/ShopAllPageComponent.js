import React from "react";
import { Link } from "react-router-dom";

import ShopAllBreadCrumbComponent from "../../components/ShopAllBreadCrumbComponent";
import PaginationComponent from "../../components/PaginationComponent";

const ShopAllPageComponent = () => {
    return (
        <>
            <div class=" grid grid-cols-3 gap-4 p-5 ">
                <div class="text-lg font-bold text-center p-10 rounded-lg col-span-3">
                    <ShopAllBreadCrumbComponent />
                </div>

                <div className=" text-lg font-bold p-10 rounded-lg col-span-3 ">

                    <ul className="flex flex-row items-center justify-between">
                        <li><h1 className="text-4xl ">Shop All</h1></li>
                        <li>
                            <div className="flex flex-row ">
                                <h1 className="m-2">Sort</h1>
                                <div>
                                    <select className="bg-pink-300 rounded-lg">
                                        <option>Featured</option>
                                        <option value="price_1">Price: Low to High</option>
                                        <option value="price_-1">Price: High to Low</option>
                                        <option value="name_1">Name A-Z</option>
                                        <option value="name_-1">Name Z-A</option>
                                    </select>
                                </div>
                            </div>

                        </li>
                    </ul>
                    <hr class="h-px my-8 bg-gray-900 border-0 " />
                </div>

                <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2 col-span-1">1</div>

                <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold p-10 rounded-lg col-span-2 flex flex-col sm:flex-row  ">
                    {/* start of Card Component */}
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="/images/BouquetOne.jpg" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    {/* End of Card Component */}
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="/images/BouquetOne.jpg" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Card Component */}
                <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-3">
                    <PaginationComponent/>
                </div>
            </div>

            {/* start of Card Component */}
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="p-8 rounded-t-lg" src="/images/BouquetOne.jpg" alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                    </a>
                    <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
            </div>
            {/* End of Card Component */}

        </>
    )
}

export default ShopAllPageComponent;