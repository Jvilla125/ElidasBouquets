import React from "react";
import "../index.css"
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <>
            <footer >
                <nav className="flex flex-col items-center  flex-wrap bg-gray-500 p-4 text-white">
                    <h1 className="font-bold p-2 text-xl">Elida's Bouquets</h1>
                    <p >East Los Angeles, CA </p>
                    {/* <span className="flex flex-row space-x-6">
                        
                        <p> |</p>
                        <p>South Bay</p>
                    </span> */}
                    <ul className=" flex flex-row justify-between items-center space-x-6 p-4">
                        <li  >
                            <a href="https://www.instagram.com/elidasbouquets/?hl=en"
                                target="_blank" rel="noreferrer"
                            >
                                <button
                                    id="instagram"
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </button>
                            </a>
                        </li>
                        
                        <li>
                            <a href="https://www.tiktok.com/@elidasbouquets"
                                target="_blank" rel="noreferrer"
                            >


                                <button
                                    id="tiktok"
                                    type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="h-8 w-8">
                                        <path
                                            fill="currentColor"
                                            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                    </svg>
                                </button>
                            </a>
                        </li>
                    </ul>
                    <p className="p-1">Copyrighted images herein are used with permission by Elida's Bouquets. </p>
                    <p className="p-1">© 2024. All Rights Reserved.</p>
                    <ul className="flex flex-row text-white p-2 space-x-6">
                        <li>
                            <Link to="/about" className="">
                                About Us
                            </Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to="/delivery-options" className="">
                                Delivery Options
                            </Link>

                        </li>
                        <li>|</li>
                        <li>
                            <Link to="/refund-policy" className="">
                                Refund policy
                            </Link>
                        </li>
                        <li>|</li>
                        <li>
                            <Link to="termsofservice" className="">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>

                    {/* <div className="flex flex-row space-x-6 text-white p-2 mt-4">
                        <div className="mr-2">
                            <h5 className="mb-2.5 font-bold uppercase underline ">
                                Contact Info
                            </h5>
                            <a href="#!" 
                            >Email</a
                            >
                        </div>

                        <div className=" mr-8">
                            <h5 className=" mb-2.5 font-bold uppercase underline ">
                                Any Questions?
                            </h5>
                            <a href="#!" >
                                Q&A Section
                            </a>


                        </div>
                    </div>
                     */}
                </nav>
            </footer>
        </>
    )
}

export default FooterComponent;


