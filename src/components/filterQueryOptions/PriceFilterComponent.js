import React from "react";

const PriceFilterComponent = () => {
    let prices = ["$1 - $25", "$26 - $50", "$51 - $75", "$75 - $100", "100+"]

    return (
        <>
            <h3 class=" font-semibold text-gray-900 dark:text-white">Price</h3>
            <ul class="w-48 text-sm font-medium ">
                {prices.map((item, idx) =>(
                    <li class="w-full dark:border-gray-600">
                    <div class="flex items-center">
                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 "/>
                            <label for="vue-checkbox" class="pl-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {item}
                            </label>
                    </div>
                </li>
                ))}
                
            </ul>
        </>
    )
}

export default PriceFilterComponent;