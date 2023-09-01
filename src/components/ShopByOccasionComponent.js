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
            <div class="flex-grow border-t m-2 border-gray-900"></div>
            <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t ml-24 border-gray-900"></div>
                <span class="flex-shrink mx-4 text-black text-5xl" >Shop by Occasion</span>
                <div class="flex-grow border-t mr-24 border-gray-900"></div>
            </div>
            {/* Start of Occasion Cards Section */}
            
                <div class="grid md:mb-12 md:grid-cols-2 pb-10">
                    {bouquets.map((item, idx) => (
                        <figure class="flex flex-col items-center justify-center text-center bg-pink-200">
                            <a href="#">
                                <img class="h-96 " src="/images/BouquetOne.jpg" alt="product image" />
                            </a>
                            <div class="px-8 pb-5 flex flex-col items-center">
                                <a href="#">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </a>
                                <span class="text-xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                                <a href="#">Buy Now -</a>
                            </div>
                        </figure>
                    ))}
                </div>
        </>
    )
}

export default ShopbyOccassionComponent;
