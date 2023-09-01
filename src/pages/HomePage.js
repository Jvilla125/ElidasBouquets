import React from "react";

import BrowseBouquets from "../components/BrowseBouquetsComponent";
import HomeBannerComponent from "../components/HomeBannerComponent";
import ShopbyOccassionComponent from "../components/ShopByOccasionComponent";

const HomePage = () => {
    return(
        <>
        <HomeBannerComponent/>
        <BrowseBouquets/>
        <ShopbyOccassionComponent/>
        </>
        
    )
}

export default HomePage;