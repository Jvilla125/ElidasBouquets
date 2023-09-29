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
            <div className="flex flex-col bg-slate-300 bg-opacity-50 border border-gray-900 rounded-lg ml-8 mr-8 dark:bg-gray-200 dark:border-gray-900 ">
                
                <div className="flex flex-row items-end mb-4 ml-8">
                    <h1 className="font-semibold text-3xl mr-4 ">
                        Browse Bouquets
                    </h1>
                    <p>See all Flowers -</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center space-x-2 ">
                    {bouquets.map((item, idx) => (
                        <div className="w-full max-w-xs ">
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