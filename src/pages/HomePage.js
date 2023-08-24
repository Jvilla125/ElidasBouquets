import React from "react";

import BrowseBouquets from "../components/BrowseBouquetsComponent";
import CarouselComponent from "../components/CarouselComponent";

const HomePage = () => {
    return(
        <>
        <h1>
            This is the home page
        </h1>
        <CarouselComponent/>
        <BrowseBouquets/>
        </>
        
    )
}

export default HomePage;