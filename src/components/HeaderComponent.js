import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <header>
                {/* Main Navbar */}
                <nav className="bg-black text-white">
                    <div className="container mx-auto ">
                        <ul className="flex flex-col text-center lg:flex-row lg:justify-between lg:items-center ">
                            <li>
                                Small Business in East Los Angeles
                            </li>
                            <li className="text-2xl">
                                Oct. 3 National Boyfriends Day
                            </li>
                            <li className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center py-2">
                                <Link to="/register" className=" mr-4 pb-2 uppercase "  >
                                    Register
                                </Link>
                                <Link to="/login" className="mr-4 pb-2 uppercase" >
                                    Login
                                </Link>
                                <Link to="/cart" className="uppercase pb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* User Profile Navbar */}
                <nav className="">
                    <div className="container mx-auto px-4">
                        <ul className="flex justify-center items-center py-2">
                            <Link to="/">
                                <li>
                                    <div className="flex flex-col items-center flex-shrink-0 ">
                                        <span className="font-semibold text-5xl">Elida's Bouquets
                                        </span>
                                        <p>
                                            Bouquets for any Occasions
                                        </p>
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
                            </Link>
                        </ul>
                    </div>
                </nav>
                <hr class="h-px bg-green-200 border-1 dark:bg-green-700"></hr>
                {/* Secondary Actions Navbar */}
                <nav className="text-black">
                    <div className="container mx-auto px-4">
                        <ul className="flex flex-col lg:flex-row justify-between items-center py-2">
                            <li className="mb-4 lg:mb-0">
                                <Link to="/" className="text-xl lg:text-base lg:inline-block hover:text-blue-500 mr-4">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-0">
                                <Link to="shopAll" className="text-xl lg:text-base lg:inline-block hover:text-blue-500 mr-4">
                                    Shop All
                                </Link>
                            </li>
                            <li className="mb-4 lg:mb-0">
                                <div className="dropdown inline-block relative">
                                    <button className="py-2 px-4 rounded inline-flex items-center">
                                        <span className="text-xl lg:text-base lg:inline-block hover:text-blue-500">Occasions</span>
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                    <ul className="dropdown-menu absolute grid grid-cols-2 gap-4 hidden text-gray-700 pt-1">
                                        <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Anniversary</a></li>
                                        <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Birthday</a></li>
                                        <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Graduation</a></li>
                                        <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Mother's Day</a></li>
                                        <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Get Well Soon</a></li>
                                        <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Just Because</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-4 lg:mb-0">
                                <Link to="/about" className="text-xl lg:text-base lg:inline-block hover:text-blue-500">
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="h-px bg-green-200 border-1 dark:bg-green-700"></hr>
                </nav>
            </header>
        </>
    );
}

export default HeaderComponent;



