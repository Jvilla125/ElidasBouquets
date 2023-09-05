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
            <div class="flex-grow border-t border-gray-900"></div>
            <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t ml-24 border-gray-900"></div>
                <span class="flex-shrink mx-4 text-black text-5xl" >Shop by Occasion</span>
                <div class="flex-grow border-t mr-24 border-gray-900"></div>
            </div>
            {/* Start of Occasion Cards Section */}
                <div class="grid md:mb-12 md:grid-cols-2 gap-2 pb-10">
                    {bouquets.map((item, idx) => (
                        <figure class="flex flex-col items-center justify-center text-center ml-8 mr-8 mb-4 bg-pink-200">
                            <a href="#">
                                <img class="h-96" src="/images/happy.jpeg" alt="product image" />
                            </a>
                            
                        </figure>
                    ))}
                </div>
        </>
    )
}

export default ShopbyOccassionComponent;
