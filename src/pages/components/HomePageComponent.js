import React from "react";

import BrowseBouquets from "../../components/BrowseBouquetsComponent"
import HomeBannerComponent from "../../components/HomeBannerComponent";
import ShopbyOccassionComponent from "../../components/ShopByOccasionComponent";
import CustomBouquetsComponent from "../../components/CustomBouquetsComponent";
import SocialMediaBannerComponent from "../../components/SocialMediaBannerComponent";
import UpdatedFlyerComponent from "../../components/UpdatedFlyerComponent";

const HomePageComponent = ({categories}) => {
    return (
        <>
            <div className="bg-slate-600 pb-4">
                <div className="w-11/12 mx-auto bg-gray-300">
                    <CustomBouquetsComponent />
                    <UpdatedFlyerComponent />
                    {/* <HomeBannerComponent /> */}
                    <BrowseBouquets />
                    <ShopbyOccassionComponent categories={categories}/>
                    {/* <SocialMediaBannerComponent/> */}
                </div>
            </div>
        </>
    )
}

export default HomePageComponent;