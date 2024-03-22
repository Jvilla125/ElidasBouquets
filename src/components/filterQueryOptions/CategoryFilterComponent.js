import React, { useState } from "react";
import {useRef} from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux"

const CategoryFilterComponent = ({ setCategoriesFromFilter }) => {

    const { categories } = useSelector((state) => state.getCategories)
    const [selectedCategories, setSelectedCategories] = useState([]);

    const myRefs = useRef([])
        console.log(myRefs)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const selectCategory = (e, category, idx) => {
        setCategoriesFromFilter(items => {
            return {...items, [category.name]: e.target.checked}
        })

        let selectedMainCategory = category.name
        console.log(selectedMainCategory)
        
        let allCategories = myRefs.current.map((_, id) => {
            return {name: categories[id].name, idx: id};
        })

        let indexesOfMainCategory = allCategories.reduce((acc, item) => {
            let cat = item.name;
            if (selectedMainCategory === cat){
                acc.push(item.idx)
            }
            return acc
        }, [])

        if (e.target.checked) {
            setSelectedCategories( [category.name]);
        } else {
            setSelectedCategories((old) => {
                const filteredCategories = old.filter((cat) => cat !== category.name);
                if (filteredCategories.length === 0) {
                    window.location.href = "/shopAll";
                }
                return filteredCategories;
            });
            
        }
        console.log(selectedCategories, "set")
    }

    return (
        <>
            <h3 className=" flex items-center font-semibold text-gray-900 dark:text-white " onClick={() => setIsDropdownOpen((prev) => !prev)}>Categories
                {!isDropdownOpen ? (
                    <IoMdArrowDropdown />
                ) : (
                    <IoMdArrowDropup />
                )}
            </h3>
            {isDropdownOpen && (
                <ul className="w-48 text-sm font-medium ">
                    {categories.map((category, idx) => (
                        <li className="w-full dark:border-gray-600" >
                            <div className=" items-center flex w-full hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent" key={idx}>
                                <input id={`category-${idx}`} type="checkbox" value="" className="w-4 h-4 " 
                                ref={(el) => (myRefs.current[idx] = el)}
                                onChange={(e) => selectCategory(e, category, idx)}
                                    checked={selectedCategories.includes(category.name)}
                                />
                                <label for="vue-checkbox" className="pl-4 py-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {category.name}
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

export default CategoryFilterComponent;