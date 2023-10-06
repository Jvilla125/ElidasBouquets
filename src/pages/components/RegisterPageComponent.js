import React from "react";
import { Link } from "react-router-dom";

const RegisterPageComponent = () => {
    
    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="bg-white w-full md:w-1/3  shadow-md rounded px-8 pt-6 pb-8 border-2 border-black bg-fuchsia-400">
                    <h1 className="text-center text-2xl">Create An Account</h1> <br />
                    <form>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                    for="firstName">
                                    First Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                    for="lastName">
                                    Last Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                for="email">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email" />
                        </div>
                        <div className="mb-6">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                        for="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Password" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                        for="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password" />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Register
                                </button>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-900"></hr>
                        <div className="flex flex-row justify-around items-center ">
                            <h1>Already have an account?</h1>
                            <Link to="/login">
                                <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPageComponent;