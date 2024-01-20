import React, { useState } from "react";

import UserLinksComponent from "../../../components/user/UserLinksComponent";

const UserProfilePageComponent = ({ updateUserApiRequest }) => {
    const [validated, setValidated] = useState(false)
    const [updateUserResponseState, setUpdateUserResponseState] = useState({
        success: "", error: ""
    })
    const [passwordsMatchState, setPasswordsMatchState] = useState(true)


    const onChange = () => {
        const password = document.querySelector("input[name=password]");
        const confirmPassword = document.querySelector("input[name=confirmPassword");
        if (confirmPassword.value === password.value) {
            setPasswordsMatchState(true)
        } else {
            setPasswordsMatchState(false)
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const name = form.name.value;
        const lastName = form.lastName.value;
        const password = form.password.value
        if (event.currentTarget.checkValidity() === true && form.password.value === form.confirmPassword.value) {
            updateUserApiRequest(name, lastName, password).then(data => {
                setUpdateUserResponseState({ success: data.success, error: "" })
            }).catch((er) => setUpdateUserResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data }))
        }
        setValidated(true)
    }

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
                            <form noValidate validated={validated} onSubmit={handleSubmit}>
                                <div className="border-t border-gray-200 px-4 py-5 sm:p-0 ">
                                    <dl className="sm:divide-y sm:divide-gray-200">
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <label className="text-sm font-medium text-gray-500"
                                                for="firstName">
                                                First Name
                                            </label>
                                            <input className="text-sm text-gray-900 w-full leading-tight rounded"
                                                id="firstName"
                                                required
                                                type="text"
                                                name="name"
                                                placehonlder="First Name" />
                                        </div>
                                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <label className="text-sm font-medium text-gray-500"
                                                for="lastName">
                                                Last Name
                                            </label>
                                            <input className="text-sm text-gray-900 w-full leading-tight rounded"
                                                id="lastName"
                                                required
                                                type="text"
                                                name="lastName"
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
                                                disabled
                                                id="email"
                                                type="email"
                                                placeholder="Email Address " />
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-6 mt-4 p-2  ">
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                                    for="password">
                                                    Password
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    required
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={onChange}
                                                    isinvalid={!passwordsMatchState}
                                                />
                                                <span type="invalid" className={`flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 ${passwordsMatchState === false ? 'block' : 'hidden'}`}>
                                                    Invalid password field !
                                                </span>
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                                    for="confirmPassword">
                                                    Confirm Password
                                                </label>
                                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="confirmPassword"
                                                    required
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    name="confirmPassword"
                                                    onChange={onChange}
                                                    isinvalid={!passwordsMatchState}
                                                />
                                                <span type="invalid" className={`flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 ${passwordsMatchState === false ? 'block' : 'hidden'}`}>
                                                    Both passwords should match
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                                        </div>

                                        <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative ${updateUserResponseState && updateUserResponseState.success === "user updated" ? 'block' : 'hidden'}`} role="alert">
                                            <strong className="font-bold">User Updated</strong>
                                        </div>
                                    </dl>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default UserProfilePageComponent;