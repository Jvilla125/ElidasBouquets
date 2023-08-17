import React from "react";

const FooterComponent = () => {
    return (
        <>
            <footer>
                <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
                    <div className=" flex-shrink-0 text-white mr-6">
                        <h5 className="mb-2.5 font-bold uppercase text-neutral-800 dark:text-neutral-200">
                            Learn More About
                        </h5>
                        <ul className="mb-0 list-none">
                            <li>
                                <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                                >About Us</a
                                >
                            </li>
                            <br />
                            <li>
                                <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                                >Delivery Options</a
                                >
                            </li><br />
                            <li>
                                <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                                >Refund Policy</a
                                >
                            </li><br />
                            <li>
                                <a href="#!" className="text-neutral-800 dark:text-neutral-200"
                                >Terms of Service</a
                                >
                            </li><br />
                        </ul>
                    </div>

                    <div className="w-full block lg:flex lg:items-center lg:w-auto DESKTOP-MENU hidden space-x-8 ">
                        <div className="text-sm lg:flex-grow">
                            <a href="#responsive-header" className="block mt-4 text-xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Home
                            </a>
                            <a href="#responsive-header" className="block mt-4 text-xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Shop All
                            </a>
                            <a href="#responsive-header" className="block mt-4 text-xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                Occasions
                            </a>
                            <a href="#responsive-header" className="block mt-4 text-xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                                About us
                            </a>
                        </div>
                    </div>

                    <div className="w-full block lg:flex lg:items-center lg:w-auto DESKTOP-MENU hidden space-x-8 lg:flex">
                        <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white ">
                            Register
                        </a>
                        <a href="#responsive-header" className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Login
                        </a>
                        <a href="#" className="text-sm px-4 py-2 leading-none  rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>

                        </a>
                    </div>
                </nav>
            </footer>
        </>
    )
}

export default FooterComponent;


