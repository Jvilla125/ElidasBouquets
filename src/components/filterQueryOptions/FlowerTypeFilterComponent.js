import React from "react";

const FlowerTypeFilterComponent = () => {
    let flowers = ["Roses", "Dandelions", "Sunflowers", "Lilies", "Tulips"]
    return (    
        <>
        <h3 className=" font-semibold text-gray-900 dark:text-white">Flower Types</h3>
            <ul className="w-48 text-sm font-medium ">
                {flowers.map((item, idx) =>(
                    <li className="w-full dark:border-gray-600">
                    <div className="flex items-center">
                        <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 "/>
                            <label for="vue-checkbox" className="pl-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {item} ({idx})
                            </label>
                    </div>
                </li>
                ))}
                
            </ul>
        </>
    )
}

export default FlowerTypeFilterComponent;