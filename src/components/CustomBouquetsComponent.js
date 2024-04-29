import React from "react";
import UpdatedFlyerComponent from "../components/UpdatedFlyerComponent"

const CustomBouquetsComponent = () => {
   



    return (
        <>
            <div className="flex-grow border-t border-gray-900 pt-5"></div>
            <div className="containerimg flex flex-col sm:w-full mx-auto ">
                <img src="/images/custom.avif" className="object-cover sm:h-96" alt="banner" />
                <div className="centered text-white sm:text-5xl text-2xl">
                    Personalize Your Bouquet for Birthdays, Holidays, or Any Special Occasion
                </div>
            </div>
            <UpdatedFlyerComponent/>
            
        </>
    )
}

export default CustomBouquetsComponent;