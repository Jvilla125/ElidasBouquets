import React from "react";

const CustomBouquetsComponent = () => {
    const Occasions = [
        {
            name: "Anniversary!",
            price: "check it out!",
            img: "/images/grad.jpg"
        },
        {
            name: "Birthday!",
            price: "check it out!",
            img: "/images/jack.jpg"
        },
        {
            name: "Just Because!",
            price: "check it out!",
            img: "/images/pink.jpg"
        },
        {
            name: "Mother's Day!",
            price: "check it out!",
            img: "/images/sally.jpg"
        },
        {
            name: "Mother's Day!",
            price: "check it out!",
            img: "/images/spider.jpg"
        },
        {
            name: "Mother's Day!",
            price: "check it out!",
            img: "/images/sun.jpg"
        }
    ]



    return (
        <>
            <div className="flex-grow border-t border-gray-900 pt-5"></div>
            <div className="containerimg flex flex-col w-11/12 sm:w-11/12 mx-auto bg-slate-300 bg-opacity-50 border border-gray-900 rounded-lg dark:bg-gray-200 dark:border-gray-900  ">
                <img src="/images/custom.avif" className="object-cover sm:h-96" alt="banner" />
                <div className="centered text-white sm:text-7xl text-5xl"> Elida's Bouquets are customizable!</div>
            </div>
            <p className="text-center mt-6 text-xl font-semibold">Flower delivery in East LA and South Bay</p>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t ml-24 border-gray-900"></div>
                <span className="flex-shrink mx-4 text-black text-5xl" >Check out these Custom Made Bouquets!</span>
                <div className="flex-grow border-t mr-24 border-gray-900"></div>
            </div>
            {/* Start of Occasion Cards Section */}

            <div className="w-11/12 mx-auto bg-slate-300 bg-opacity-50 border border-gray-900 rounded-lg dark:bg-gray-200 dark:border-gray-900 ">
                <div className="flex flex-row sm:h-96 h-88 overflow-x-scroll snap-x snap-mandatory space-x-12 pt-2 mt-2 ">
                    {Occasions.map((item, idx) => {
                        return (
                            <div key={idx} className="p-2 flex-none flex-shrink-0 snap-start ">
                                <img
                                    src={item.img}
                                    alt="images"
                                    className="border border-black rounded-lg object-cover lg:h-80 sm:h-80 h-72 "
                                />
                                <p className="text-center">
                                    {item.name}
                                </p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default CustomBouquetsComponent;