import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
const PriceFilterComponent = () => {
    let prices = ["Under $50", "$50 - $100", "$100 - $200", "Above $200"]
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <h3 className=" flex items-center font-semibold text-gray-900 dark:text-white " onClick={() => setIsDropdownOpen((prev) => !prev)}>Price Range
                {!isDropdownOpen ? (
                    <IoMdArrowDropdown />
                ) : (
                    <IoMdArrowDropup />
                )}
            </h3>
            {isDropdownOpen && (
                <ul className="w-48 text-sm font-medium ">
                    {prices.map((item, idx) => (
                        <li className="w-full dark:border-gray-600" key={idx}>
                            <div className=" items-center flex w-full hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent ">
                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 " />
                                <label for="vue-checkbox" className="pl-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {item} 
                                </label>
                            </div>
                        </li>
                    ))}
                    <hr class="h-px my-2 bg-black border-0" />
                </ul>
            )}
        </>
    )
}

export default PriceFilterComponent;