import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const ShopbyOccassionComponent = ({ categories }) => {

    const [mainCategories, setMainCategories] = useState([])

    useEffect(() => {
        setMainCategories((cat) => categories.filter((item) => !item.name.includes("/")))
    }, [categories])

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 5;

    const handleNext = () => {
        const nextIndex = startIndex + itemsPerPage;
        setStartIndex(nextIndex >= categories.length ? 0 : nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = startIndex - itemsPerPage;
        setStartIndex(prevIndex < 0 ? categories.length - itemsPerPage : prevIndex);
    };


    return (
        <>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t ml-24 border-gray-900"></div>
                <span className="flex-shrink mx-4 text-black text-5xl" >Shop by Occasion</span>
                <div className="flex-grow border-t mr-24 border-gray-900"></div>
            </div>
            {/* Start of Occasion Cards Section */}
            <div className="flex flex-row justify-evenly w-11/12 mx-auto grid sm:grid-cols-4 grid-cols-2">
                {categories.map((item, idx) => (
                    <div key={idx} className="sm:w-full w-11/12 p-2 ">
                        <Link to={`/shopAll/category/${item.name}`}>
                            <img className=" rounded-xl" src={categories.image ?? "/images/justbc.jpeg"} alt="product image" />
                            <div className=" pb-5 flex flex-col ml-4">
                                <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* <div className="max-w-screen-lg mx-auto">
                <div className="flex items-center justify-between">
                    <button onClick={handlePrev} className="text-gray-500">&#8592;</button>
                    <button onClick={handleNext} className="text-gray-500">&#8594;</button>
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                    {categories.slice(startIndex, startIndex + itemsPerPage).map((item, index) => (
                        <div key={index} className="w-1/5 p-4">
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                                <p className="text-sm text-gray-500">Find the perfect flowers for your {item.name}!</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    )
}

export default ShopbyOccassionComponent;
