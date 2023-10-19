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
            <div className="flex-grow border-t border-gray-900"></div>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t ml-24 border-gray-900"></div>
                <span className="flex-shrink mx-4 text-black text-5xl" >Check out these Custom Made Bouquets!</span>
                <div className="flex-grow border-t mr-24 border-gray-900"></div>
            </div>
            {/* Start of Occasion Cards Section */}
           
            <div className="w-full max-w-xl mx-auto">

                <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory">
                    {Occasions.map((item, idx) => {
                        return (
                            <>
                                <div id={idx} className="w-full flex-shrink-0 snap-start">
                                    <img src={item.img} alt="images"/>
                                </div>
                            </>

                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default CustomBouquetsComponent;