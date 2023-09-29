import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <header>
                {/* Main Navbar */}
                <nav className="bg-gray-800 text-white">
                    <div className="container mx-auto px-2">
                        <ul className="flex flex-col text-center lg:flex-row lg:justify-between lg:items-center ">
                            <li>
                                Small Business located in East Los Angeles
                            </li>
                            <li className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center py-2">
                                <Link to="/register" className=" mr-4 pb-2 uppercase "  >
                                    Register
                                </Link>
                                <Link to="/login" className="mr-4 pb-2 uppercase" >
                                    Login
                                </Link>
                                <Link to="/cart" className="uppercase pb-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* User Profile Navbar */}
                <nav className="bg-pink-100">
                    <div className="container mx-auto px-4">
                        <ul className="flex justify-between items-center py-2">
                            <li><a href="/profile" className="hover:text-blue-300">My Profile</a></li>
                            <li>
                                <div className="flex flex-col items-center flex-shrink-0 ">
                                    <span className="font-semibold text-4xl">Elida's Bouquets
                                    </span>
                                    <ul className="flex space-x-4">
                                        <li className="list-disc mr-2">
                                            Los Angeles
                                        </li>
                                        <li className="list-disc">
                                            South Bay
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="/logout" className="hover:text-blue-300">Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <hr class="h-px bg-green-200 border-1 dark:bg-green-700"></hr>
                {/* Secondary Actions Navbar */}
                <nav className="bg-pink-100 text-black">
                    <div className="container mx-auto px-4">
                        <ul className="flex justify-between items-center py-2">
                        <Link to="/" className="block mt-4 text-xl lg:inline-block lg:mt-0 hover:text-blue-500 mr-4">
                            Home
                        </Link>
                        <Link to="shopAll" className="block mt-4 text-xl lg:inline-block lg:mt-0 hover:text-blue-500 mr-4">
                            Shop All
                        </Link>

                        <a href="#responsive-header" className="block mt-4 text-xl lg:inline-block lg:mt-0 hover:text-blue-500 mr-4">
                            Occasions
                        </a>
                        <Link to="/about" className="block mt-4 text-xl lg:inline-block lg:mt-0 hover:text-blue-500">
                            About us
                        </Link>
                        </ul>
                    </div>
                </nav>
            </header >
        </>
    );
}

export default HeaderComponent;



