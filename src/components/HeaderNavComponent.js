import React from "react";
import { Link } from "react-router-dom";

const HeaderNavComponent = () => {

    return (
        <>
      
            <nav className="text-black sm:block hidden">
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
                            <div className="dropdown inline-block relative ">
                                <button className="py-2 px-4 rounded inline-flex items-center">
                                    <span className="text-xl lg:text-base lg:inline-block hover:text-blue-500 ">Occasions</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <ul className="dropdown-menu absolute grid grid-cols-2 gap-4 hidden text-gray-700 pt-1 z-20">
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
        </>
    )
}

export default HeaderNavComponent;
