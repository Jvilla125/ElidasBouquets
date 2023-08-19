import React from "react";
import { Link } from "react-router-dom";

const BrowseBouquets = () => {

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
        }
    ]

    return (
        <>
            <div className="flex flex-col bg-slate-300 border border-gray-900 rounded-lg  dark:bg-gray-200 dark:border-gray-900 ">
                <div className="flex flex-row items-end mb-4 ml-8">
                    <h1 className="font-semibold text-3xl mr-4 ">
                        Browse Bouquets
                    </h1>
                    <p>See all Flowers -</p>
                </div>
                <div className="flex flex-row justify-center items-center space-x-12">
                    {bouquets.map((item, idx) => (
                        <div class="w-full max-w-xs ">
                            <a href="#">
                                <img class="p-2 rounded-xl" src="/images/BouquetOne.jpg" alt="product image" />
                            </a>
                            <div class="px-5 pb-5 flex flex-col items-center">
                                <a href="#">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>

                                <span class="text-xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                                <a href="#">Buy Now -</a>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-around items-center mb-6">
                    <Link to="/shopAll">
                        <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Shop All Bouquets -
                        </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default BrowseBouquets;