import React from "react";

const ShopbyOccassionComponent = () => {

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
                {Occasions.map((item, idx) => (
                    <div key={idx} className="sm:w-full w-11/12 p-2 ">
                        <a href="#">
                            <img className=" rounded-xl" src={item.img} alt="product image" />
                        </a>
                        <div className=" pb-5 flex flex-col ml-4">
                            <a href="#">
                                <h5 className="text-xl  tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                            </a>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShopbyOccassionComponent;
