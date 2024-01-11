import React from "react";

import ProductDetailsPageComponent from "./components/ProductDetailsPageComponent";

const ProductDetailsPage = () => {
    return (
        <>
            <div className="bg-slate-600 pb-4">
                <div className="w-11/12 mx-auto bg-gray-300">
                    <ProductDetailsPageComponent />
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage;