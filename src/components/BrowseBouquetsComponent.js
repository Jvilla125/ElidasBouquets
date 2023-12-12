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
            <div className="flex flex-col w-11/12 mx-auto bg-slate-300 bg-opacity-50  ">
                <div className="pb-2">
                    <h1 className="font-semibold sm:text-4xl text-2xl ">
                        Browse All Bouquets
                    </h1>
                    <Link className="underline sm:text-xl text-xl" to="/shopAll">
                        Shop All Bouquets -
                    </Link>

                </div>
                <div className="flex flex-wrap justify-between items-center grid sm:grid-cols-2 lg:grid-cols-4  ">
                    {bouquets.map((item, idx) => (
                        <div key={idx} className="w-full ">
                            <a href="#">
                                <img src="/images/BouquetOne.jpg" alt="product image" className="sm:w-full w-1/2" />
                            </a>
                            <div className="pb-5 flex flex-col ">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>
                                <a href="#">Buy Now -</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-around items-center mb-6">

                </div>
            </div>

        </>
    )
}

export default BrowseBouquets;