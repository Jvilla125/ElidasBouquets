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
        },

    ]

    return (
        <>
            <div className="flex flex-col w-11/12 mx-auto bg-slate-300 bg-opacity-50 border border-gray-900 rounded-lg dark:bg-gray-200 dark:border-gray-900 ">
                <div className="flex flex-row justify-center items-center items-end ">
                    <h1 className="font-semibold text-4xl ml-4 mr-4 ">
                        Browse All Bouquets
                    </h1>
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                    {bouquets.map((item, idx) => (
                        <div key={idx} className="w-full max-w-xs sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
                            <a href="#">
                                <img className=" rounded-xl" src="/images/BouquetOne.jpg" alt="product image" />
                            </a>
                            <div className=" pb-5 flex flex-col ml-4">
                            <span className="text-xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                                <a href="#">
                                    <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>
                                
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