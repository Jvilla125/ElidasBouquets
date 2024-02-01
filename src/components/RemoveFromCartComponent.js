import React from "react";

const RemoveFromCartComponent = ({ productID, quantity, price, removeFromCartHandler = false }) => {
    return (
        <>
            <button type="button" 
            variant="secondary"
            onClick={removeFromCartHandler ? () => removeFromCartHandler(productID, quantity, price) : undefined}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                f
            </button>
        </>
    )
}

export default RemoveFromCartComponent;