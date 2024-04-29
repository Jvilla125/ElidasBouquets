import React from "react";

import BrowseBouquets from "../../components/BrowseBouquetsComponent"
import HomeBannerComponent from "../../components/HomeBannerComponent";
import ShopbyOccassionComponent from "../../components/ShopByOccasionComponent";
import CustomBouquetsComponent from "../../components/CustomBouquetsComponent";
import SocialMediaBannerComponent from "../../components/SocialMediaBannerComponent";
import PreviouslyMadeBouquetsComponent from "../../components/PreviouslyMadeBouquetsComponent";

const HomePageComponent = ({categories}) => {
    return (
        <>
            <div className="bg-slate-600 pb-4">
                <div className="w-full mx-auto bg-gray-300">
                    
                    <CustomBouquetsComponent />    
                    
                    <ShopbyOccassionComponent categories={categories}/>                
                    {/* <HomeBannerComponent /> */}
                    <BrowseBouquets />
                    <PreviouslyMadeBouquetsComponent/>
                    
                    {/* <SocialMediaBannerComponent/> */}
                </div>
            </div>
        </>
    )
}

export default HomePageComponent;