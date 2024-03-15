import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const ShopbyOccassionComponent = ({ categories }) => {

    const [mainCategories, setMainCategories] = useState([])

    useEffect(() => {
        setMainCategories((cat) => categories.filter((item) => !item.name.includes("/")))
    }, [categories])


    const Occasions = [
        {
            name: "Anniversary!",
            price: "check it out!",
            img: "/images/happyanniversary.jpg"
        },
        {
            name: "Birthday!",
            price: "check it out!",
            img: "/images/happybirthday.jpg"
        },
        {
            name: "Just Because!",
            price: "check it out!",
            img: "/images/justbc.jpeg"
        },
        {
            name: "Mother's Day!",
            price: "check it out!",
            img: "/images/mothersday.jpg"
        }
    ]

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
        </>
    )
}

export default ShopbyOccassionComponent;
