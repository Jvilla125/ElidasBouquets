import React from "react"
import { Link } from "react-router-dom";

const LoginPageComponent = () => {
    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="bg-white w-full md:w-1/3 h-2/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2 border-black bg-fuchsia-200">
                    <h1 className="text-center text-2xl">Login to your account</h1> <br />
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                for="email">
                                Email Address
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2 text-xl" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************" />
                            <p class="text-red-500 text-xs italic">Please choose a password.</p>
                            <a class="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                            <div class="flex justify-center items-center">
                                <button class="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Log In
                                </button>
                            </div>
                        </div>
                        <hr class="h-px my-8 bg-gray-700 border-0 dark:bg-gray-900"></hr>
                        <div class="flex flex-row justify-around items-center ">
                            <h1 >Don't have an account?</h1>
                            <button class="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPageComponent;