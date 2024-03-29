import React from "react";

import HomePageComponent from "./components/HomePageComponent";
import { useSelector } from "react-redux";


const HomePage = () => {

    const {categories} = useSelector((state) => state.getCategories)

    return (
        <>
            <HomePageComponent categories={categories} />
        </>

    )
}

export default HomePage;

// <div className="background-container pb-4">