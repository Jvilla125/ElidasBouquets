import React from "react";
import { Link } from "react-router-dom";

import ShopAllBreadCrumbComponent from "../../components/ShopAllBreadCrumbComponent";
import PaginationComponent from "../../components/PaginationComponent";

import PriceFilterComponent from "../../components/filterQueryOptions/PriceFilterComponent";
import FlowerTypeFilterComponent from "../../components/filterQueryOptions/FlowerTypeFilterComponent";
import ColorFilterComponent from "../../components/filterQueryOptions/ColorFilterComponent";


const ShopAllPageComponent = () => {
    const bouquets = [
        {
            name: "bouquet1",
            price: "$59",
        },
        {
            name: "bouquet2",
            price: "$59"
        },
        {
            name: "bouquet3",
            price: "$59"
        },
        {
            name: "bouquet4",
            price: "$59"
        },
        {
            name: "bouquet4",
            price: "$59"
        }
    ]

    return (
        <>
            <div class=" grid grid-cols-3 gap-4 p-5 ">
                <div class="text-lg font-bold text-center p-10 rounded-lg col-span-3">
                    <ShopAllBreadCrumbComponent />
                </div>

                <div className="lg:w-10/12 md:w-2/3 absolute right-0 justify-end text-lg font-bold p-10 rounded-lg col-span-3 ">
                    <ul className="flex flex-col sm:flex-row items-center justify-between">
                        <li><h1 className="text-4xl ">Shop All</h1></li>
                        <li>
                            <div className="flex flex-row  ">
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
                    <hr className="h-px my-8 bg-gray-900 border-0 " />
                </div>

                <div className="shadow-lg bg-green-100 text-lg font-bold p-10 rounded-lg col-span-3 flex flex-col sm:flex-row items-start  ">
                    <div className="bg-blue-200 p-10 ">
                        <h1 className="text-2xl"><u>Shopping Options </u></h1>
                        <PriceFilterComponent />
                        <FlowerTypeFilterComponent />
                        <ColorFilterComponent />
                    </div>
                    {/* Start of Cards */}
                    <div className="grid md:mb-10 md:grid-cols-3 lg:grid-cols-4 pl-10 sm:ml-0 md:ml-24 lg:ml-2 md:gap-6 lg:gap-8">
                            {bouquets.map((item, idx) => (
                                <div className="w-full max-w-xs rounded-xl bg-pink-200 border-2 border-black">
                                    <a href="#">
                                        <img className=" rounded-xl" src="/images/BouquetOne.jpg" alt="product image" />
                                    </a>
                                    <div className="px-5 pb-5 flex flex-col items-center">
                                        <a href="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                        </a>
                                        <span className="text-xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                                        <a href="#">Buy Now -</a>
                                    </div>
                                </div>
                            ))}
                        
                    </div>
                </div>
                <div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-3">
                    <PaginationComponent />
                </div>
            </div>


        </>
    )
}

export default ShopAllPageComponent;