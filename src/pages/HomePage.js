import React from "react";

import BrowseBouquets from "../components/BrowseBouquetsComponent";
import HomeBannerComponent from "../components/HomeBannerComponent";
import ShopbyOccassionComponent from "../components/ShopByOccasionComponent";

const HomePage = () => {
    return (
        <>
            <div className="background-container">

                <HomeBannerComponent />
                <BrowseBouquets />
                <ShopbyOccassionComponent />

            </div>
        </>

    )
}

export default HomePage;