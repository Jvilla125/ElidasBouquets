import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPageComponent = ({ registerUserApiRequest, reduxDispatch, setReduxUserState }) => {

    const [validated, setValidated] = useState(false);
    const [registerUserResponseState, setRegisterUserResponseState] = useState({
        success: "", error: ""
    })
    const [passwordsMatchState, setPasswordsMatchState] = useState(true)

    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirmPassword = document.querySelector("input[name=confirmPassword]")
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
        const email = form.email.value;
        const name = form.name.value;
        const lastName = form.lastName.value;
        const password = form.password.value;
        if (
            event.currentTarget.checkValidity() === true &&
            email &&
            password &&
            name &&
            lastName &&
            form.password.value === form.confirmPassword.value
        ) {
            registerUserApiRequest(name, lastName, email, password)
                .then((data) => {
                    setRegisterUserResponseState({
                        success: data.success,

                    });
                    reduxDispatch(setReduxUserState(data.userCreated));
                })
                .catch((er) =>
                    setRegisterUserResponseState({
                        error: er.response.data.message
                            ? er.response.data.message
                            : er.response.data,
                    })
                );
        }

        setValidated(true);
    };
    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="bg-white w-full md:w-1/3  shadow-md rounded px-8 pt-6 pb-8 border-2 border-black bg-fuchsia-400">
                    <h1 className="text-center text-2xl">Create An Account</h1> <br />
                    <form noValidate validated={validated} onSubmit={handleSubmit} >
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                    for="name">
                                    First Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    id="name"
                                    type="text"
                                    placeholder="First Name"
                                    name="name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                    for="lastName">
                                    Last Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    placeholder="Last Name"
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
                                        isInvalid={!passwordsMatchState}
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
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={onChange}
                                        isInvalid={!passwordsMatchState}
                                    />
                                </div>
                                <span type="invalid" className={`flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1 ${passwordsMatchState === false ? 'block' : 'hidden'}`}>
                                                    Both passwords should match
                                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
                        <div className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${registerUserResponseState && registerUserResponseState.error === "user exists" ? 'block' : 'hidden'}`} role="alert">
                            <strong className="font-bold">User with that email already exists!</strong>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPageComponent;