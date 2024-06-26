import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import PaginationComponent from "../../components/PaginationComponent";

import CategoryFilterComponent from "../../components/filterQueryOptions/CategoryFilterComponent";
import PriceFilterComponent from "../../components/filterQueryOptions/PriceFilterComponent";
import FlowerTypeFilterComponent from "../../components/filterQueryOptions/FlowerTypeFilterComponent";
import ColorFilterComponent from "../../components/filterQueryOptions/ColorFilterComponent";
import ProductDetailsPageComponent from "./ProductDetailsPageComponent";

const ShopAllPageComponent = ({ getProducts, categories }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)
    const [showResetFiltersButton, setShowResetFiltersButton] = useState(false)
    const [filters, setFilters] = useState({}) // collects all filters
    const [price, setPrice] = useState(500)
    const [flowerFilter, setFlowerFilters] = useState({})
    const [categoriesFromFilter, setCategoriesFromFilter] = useState({});


    console.log(filters)
    // TO DO: Fix attributes later!!!
    // to display flower types, colors, etc.
    // const [attrsFiler, setAttrsFilter ] = useState([])

    const { categoryName } = useParams() || "";

    // useEffect(() => {
    //     if (categoryName){
    //         let categoryAllData = categories.find((item) => item.name === categoryName.replaceAll(",", "/"))
    //         console.log(categoryAllData)
    //         if (categoryAllData){
    //             let index = categories.findIndex((item) => item.name === categoryAllData)
    //             // setAttrsFilter(categories[index].attrs)
    //         }
    //     }
    //     // else { setAttrsFilter([])}
    // }, [categoryName, categories])

    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products.products)
                setLoading(false)
            })
            .catch((er) => {
                console.log(er)
                setError(true)
            })
            console.log(filters)
    }, [filters])

    const handleFilters = () => {
        setShowResetFiltersButton(true)
        setFilters({
            price: price,
            flower: flowerFilter,
            category: categoriesFromFilter
            // attrs: attrsFromFilter,
        })
    }

    const resetFilters = () => {
        setShowResetFiltersButton(false)
        setFilters({})
        window.location.href ="/shopAll"
    }


    return (
        <>
            <div className="mx-auto w-11/12 grid grid-cols-4">
                <div className="col-span-4 col-start-1 sm:w-full w-11/12 justify-center text-lg font-bold rounded-lg">
                    <ul className="flex sm:flex-row items-center justify-between">
                        <li><h1 className="sm:text-4xl text-xl  ">Shop All</h1></li>
                        <li>
                            <div className="flex flex-row">
                                <h1 className="m-2">Sort</h1>
                                <div>
                                    <select className="bg-pink-300 rounded-lg ">
                                        <option>SORT BY</option>
                                        <option value="price_1">Price: Low to High</option>
                                        <option value="price_-1">Price: High to Low</option>
                                        <option value="name_1">Name A-Z</option>
                                        <option value="name_-1">Name Z-A</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <hr className="h-px my-8 bg-gray-900 border-0 " />
                </div>

                <div className="text-lg font-bold w-full col-span-3 flex flex-col sm:flex-row space-x-4">
                    {/* Start of Filters */}
                    <div className="p-6 mx-auto sm:p-4 sm:w-3/12 w-8/12 h-fit flex flex-col sm:items-start items-center border-solid border rounded-md border-black ">
                        <h1 className="text-2xl">Filter By</h1>
                        <CategoryFilterComponent setCategoriesFromFilter={setCategoriesFromFilter} />
                        <PriceFilterComponent price={price} setPrice={setPrice} />
                        <FlowerTypeFilterComponent flowerFilter={flowerFilter} />
                        <ColorFilterComponent />
                        <br />
                        <div class="inline-flex space-x-2">
                            <button onClick={handleFilters} className="bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                <h3>Apply</h3>
                            </button> {" "}
                            {showResetFiltersButton && ( 
                                <button onClick={resetFilters} className="bg-red-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Reset
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Start of Cards */}
                    {loading ? (
                        <h1>Loading products... </h1>
                    ) : error ? (
                        <h1>Error while loading products. Try again later.</h1>
                    ) : (
                        products.map((product) => (

                            <Link to={`/product-details/${product._id}`} key={product._id}>
                                <div className="w-full ">
                                    <img className=" sm:w-10/12 w-11/12 size-64" src={product.images[0].path} alt="product image" />
                                    <div className="flex flex-col ">
                                        <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                        <span className="text-xl text-gray-900 dark:text-white">{product.price}</span>
                                        Buy Now -
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                    <div className="bg-blue-200 grid sm:grid-cols-3 grid-cols-2">

                    </div>
                </div>
                <div className="text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-3">
                    <PaginationComponent />
                </div>
            </div>
        </>
    )
}

export default ShopAllPageComponent;