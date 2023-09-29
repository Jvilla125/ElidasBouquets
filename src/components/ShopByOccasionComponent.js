import React from "react";

const ShopbyOccassionComponent = () => {

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
            <div className="flex-grow border-t border-gray-900"></div>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t ml-24 border-gray-900"></div>
                <span className="flex-shrink mx-4 text-black text-5xl" >Shop by Occasion</span>
                <div className="flex-grow border-t mr-24 border-gray-900"></div>
            </div>
            {/* Start of Occasion Cards Section */}
                <div className="grid md:mb-12 md:grid-cols-2 gap-2 pb-10">
                    {bouquets.map((item, idx) => (
                        <figure className="flex flex-col items-center justify-center text-center ml-8 mr-8 mb-4 bg-pink-200 bg-opacity-25">
                            <a href="#">
                                <img className="h-96" src="/images/happy.jpeg" alt="product image" />
                            </a>
                            
                        </figure>
                    ))}
                </div>
        </>
    )
}

export default ShopbyOccassionComponent;
