import React from "react"
import { Link } from "react-router-dom";

const LoginPageComponent = () => {
    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="bg-white w-full md:w-1/3 h-2/3 shadow-md rounded px-8 pt-6 pb-8 border-2 border-black bg-fuchsia-300">
                    <h1 className="text-center text-2xl">Login to your account</h1> <br />
                    <form>
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
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl" for="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            <a className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                            <div className="flex justify-center items-center">
                                <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Log In
                                </button>
                            </div>
                        </div>
                        <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-900"></hr>
                        <div className="flex flex-row justify-around items-center ">
                            <h1 >Don't have an account?</h1>
                            <Link to="/register">
                                <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPageComponent;