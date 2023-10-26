import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPageComponent = () => {

    const [validated, setValidated] = useState(false);

    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirm = document.querySelector("input[name=confirmPassword]")
        if (confirm.value === password.value) {
            confirm.setCustomValidity("")
        } else {
            confirm.setCustomValidity("Passwords do not match")
        }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="bg-white w-full md:w-1/3  shadow-md rounded px-8 pt-6 pb-8 border-2 border-black bg-fuchsia-400">
                    <h1 className="text-center text-2xl">Create An Account</h1> <br />
                    <form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                    for="firstName">
                                    First Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    name="name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                    for="lastName">
                                    Last Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                />
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
                                name="email"
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
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                        for="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={onChange} />
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
                        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            User with that email already exists!
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPageComponent;