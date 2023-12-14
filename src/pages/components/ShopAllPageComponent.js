import React from "react";
import { Link } from "react-router-dom";

import PaginationComponent from "../../components/PaginationComponent";

import PriceFilterComponent from "../../components/filterQueryOptions/PriceFilterComponent";
import FlowerTypeFilterComponent from "../../components/filterQueryOptions/FlowerTypeFilterComponent";
import ColorFilterComponent from "../../components/filterQueryOptions/ColorFilterComponent";

// connects frontend with backend
import axios from "axios";


const ShopAllPageComponent = () => {
    // axios.get("/api/products").then((res) => console.log(res))

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
            <div className="mx-auto w-11/12 grid grid-cols-3 ">
                <div className="col-span-3 col-start-1 sm:w-full w-11/12 justify-center text-lg font-bold  rounded-lg">
                    <ul className="flex  sm:flex-row items-center justify-between">
                        <li><h1 className="sm:text-4xl text-xl  ">Shop All</h1></li>
                        <li>
                            <div className="flex flex-row">
                                <h1 className="m-2">Sort</h1>
                                <div>
                                    <select className="bg-pink-300 rounded-lg ">
                                        <option>SORT BY</option>
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
                <div className="text-lg font-bold w-11/12 rounded-lg col-span-4 flex flex-col sm:flex-row space-x-2">
                    <div className="bg-blue-200 p-6 sm:p-4 sm:w-8/12 w-10/12 h-fit flex flex-col sm:items-start items-center ">
                        <h1 className="text-2xl"><u>Shopping Options</u></h1>
                        <PriceFilterComponent />
                        <FlowerTypeFilterComponent />
                        <ColorFilterComponent />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Apply filters
                        </button> {" "}
                        <button className="bg-red-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                            Reset
                        </button>
                    </div>
                    {/* Start of Cards */}
                    <div className="flex flex-wrap justify-between grid sm:grid-cols-3 grid-cols-2">
                        {bouquets.map((item, idx) => (
                            <Link to="/product-details" key={idx}>
                                <div className="w-full ">
                                    <img className=" sm:w-10/12 w-11/12" src="/images/BouquetOne.jpg" alt="product image" />
                                    <div className="flex flex-col ">
                                        <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                        <span className="text-xl text-gray-900 dark:text-white">{item.price}</span>
                                        Buy Now -
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-3">
                    <PaginationComponent />
                </div>
            </div>
        </>
    )
}

export default ShopAllPageComponent;