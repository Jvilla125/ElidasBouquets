import React, { useState } from "react";




const HeaderComponent = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    return (

        <nav className="flex items-center justify-between flex-wrap bg-pink-500 p-6">

            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Elida's Bouquets
                </span>
            </div>




            {/* This section is the collasped window */}
            <section className="MOBILE-MENU flex lg:hidden ">
                <div
                    className="HAMBURGER-ICON space-y-2 "
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                <div className={isNavOpen ? "showMenuNav p-12" : "hideMenuNav"}>

                    <span className="font-semibold text-xl tracking-tight ">Elida's Bouquets
                    </span>
                    <div
                        className=" CROSS-ICON absolute top-0 right-0 px-7 py-8"
                        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                        <svg
                            className="h-8 w-8 text-gray-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>

                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[140px] ">
                        <li className="border-b border-gray-400 uppercase">
                            <a href="/about">Home</a>
                        </li>
                        <li className="border-b border-gray-400 uppercase">
                            <a href="/portfolio">Shop All</a>
                        </li>
                        <li className="border-b border-gray-400 uppercase">
                            <a href="/contact">Occasions</a>
                        </li>
                        <li className="border-b border-gray-400 uppercase">
                            <a href="/contact">About us</a>
                        </li>

                    </ul>
                    <div className="MENU-LINK-MOBILE-OPEN flex flex-row items-center justify-between min-h-[50px]">
                        <a href="#responsive-header" className="border-b border-gray-400 mr-4 uppercase">
                            Register
                        </a>
                        <a href="#responsive-header" className="border-b border-gray-400  mr-4 uppercase">
                            Login
                        </a>
                        <a href="#" className="border-b border-gray-400 uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <div className="w-full block lg:flex lg:items-center lg:w-auto DESKTOP-MENU hidden space-x-8 lg:flex">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Shop All
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Occasions
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        About us
                    </a>
                </div>
            </div>

            <div className="DESKTOP-MENU hidden space-x-8 lg:flex row">
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Register
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Login
                </a>
                <a href="#" className="text-sm px-4 py-2 leading-none  rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>

                </a>
            </div>

            <style>{`
                .hideMenuNav {
                    display: none;
                }
                .showMenuNav {
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: pink;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
    `}</style>

        </nav>
    );
}

export default HeaderComponent;
{/* <nav className="flex items-center justify-between flex-wrap bg-pink-500 p-6">

            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Elida's Bouquets</span>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Shop All
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Occasions
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        About us
                    </a>
                </div>
            </div>

            <div>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Register
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Login
                </a>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    Shopping Cart
                </a>
            </div>
        </nav> */}