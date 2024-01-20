import React from "react";

import UserLinksComponent from "../../../components/user/UserLinksComponent";

const UserProfilePageComponent = () => {
    return (
        <>
            <div className="pt-5 mx-auto w-11/12 grid sm:grid-cols-4 grid-cols-1">
                <div className="w-full col-span-3 flex flex-col sm:flex-row">
                    {/* start of first div */}
                    <div className=" mx-auto ">
                        <UserLinksComponent />
                    </div>
                    {/* start of second div */}
                    <div className=" mx-auto pt-5 sm:pt-0 ">
                        <div className="bg-white overflow-hidden shadow rounded-lg border ">
                            <div className="bg-gray-200 px-4 py-5 sm:px-6">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    User Profile
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    This is some information about the user.
                                </p>
                            </div>
                            <form>
                                <div className="border-t border-gray-200 px-4 py-5 sm:p-0 ">
                                    <dl className="sm:divide-y sm:divide-gray-200">
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <label className="text-sm font-medium text-gray-500"
                                                for="firstName">
                                                First Name
                                            </label>
                                            <input className="text-sm text-gray-900 w-full leading-tight rounded"
                                                id="firstName"
                                                type="text"
                                                placehonlder="First Name" />
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <label className="text-sm font-medium text-gray-500"
                                                for="lastName">
                                                Last Name
                                            </label>
                                            <input className="text-sm text-gray-900 w-full leading-tight rounded"
                                                id="lastName"
                                                type="text"
                                                placeholder="Last Name" />
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">

                                            <label className="text-sm font-medium text-gray-500"
                                                for="phone">
                                                Phone Number
                                            </label>
                                            <input className="text-sm text-gray-900 w-full leading-tight rounded"
                                                id="phone"
                                                type="tel"
                                                placeholder="Phone Number" />
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
                                            <label className="text-sm font-medium text-gray-500"
                                                for="email">
                                                Email Address
                                            </label>
                                            <input className="text-sm text-gray-900 w-full leading-tight rounded "
                                                id="email"
                                                type="email"
                                                placeholder="Email Address" />
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                                        </div>
                                    </dl>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                {/* Start of third div */}
                <div className="mt-4 sm:row-start-2 sm:col-start-2 col-span-2 mx-auto pb-2 w-full sm:w-4/5">
                    <div class=" bg-white overflow-hidden shadow rounded-lg border ">

                        <div className="bg-gray-200 px-4 py-5 sm:px-6">
                            <h3 className=" bg-gray-200 text-lg leading-6 font-medium text-gray-900">
                                Update Password
                            </h3>
                        </div>
                        <form>
                            <div className="grid md:grid-cols-2 md:gap-6 mt-4 p-2  ">
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
                            <div className="text-center">
                                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UserProfilePageComponent;