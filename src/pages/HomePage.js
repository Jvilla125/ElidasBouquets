import React from "react";

import BrowseBouquets from "../components/BrowseBouquetsComponent";
import HomeBannerComponent from "../components/HomeBannerComponent";
import ShopbyOccassionComponent from "../components/ShopByOccasionComponent";
import CustomBouquetsComponent from "../components/CustomBouquetsComponent";
import SocialMediaBannerComponent from "../components/SocialMediaBannerComponent";

const HomePage = () => {
    return (
        <>
            <div className="bg-slate-950 pb-4">
                <div className="w-10/12 mx-auto bg-gray-300">
                    <CustomBouquetsComponent />
                    {/* <HomeBannerComponent /> */}
                    <BrowseBouquets />
                    <ShopbyOccassionComponent />
                    {/* <SocialMediaBannerComponent/> */}
                </div>
            </div>
        </>

    )
}

export default HomePage;

// <div className="background-container pb-4">