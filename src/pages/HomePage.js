import React from "react";

import BrowseBouquets from "../components/BrowseBouquetsComponent";
import HomeBannerComponent from "../components/HomeBannerComponent";
import ShopbyOccassionComponent from "../components/ShopByOccasionComponent";
import CustomBouquetsComponent from "../components/CustomBouquetsComponent";
import SocialMediaBannerComponent from "../components/SocialMediaBannerComponent";

const HomePage = () => {
    return (
        <>
            <div className="background-container pb-4">
                <CustomBouquetsComponent />
                {/* <HomeBannerComponent /> */}
                <BrowseBouquets />
                <ShopbyOccassionComponent />
                {/* <SocialMediaBannerComponent/> */}
            </div>
        </>

    )
}

export default HomePage;