import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const LoginPageComponent = ({ loginUserApiRequest, reduxDispatch, setReduxUserState }) => {

    const [validated, setValidated] = useState(false);
    const [loginUserResponseState, setLoginUserResponseState] = useState({
        success: "",
        error: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;

        const email = form.email.value;
        const password = form.password.value;
        const doNotLogout = form.doNotLogout.checked;

        if (event.currentTarget.checkValidity() === true && email && password) {
            loginUserApiRequest(email, password, doNotLogout)
                .then((res) => {
                    setLoginUserResponseState({success: res.success, error: ""})

                    if(res.userLoggedIn){
                        reduxDispatch(setReduxUserState(res.userLoggedIn))
                    }

                    if (res.success === "user logged in" && !res.userLoggedIn.isAdmin) 
                    navigate('/', {replace: true})
                    else navigate("/admin/orders", {replace: true})
                })
                .catch((er) =>
                    setLoginUserResponseState({ error: er.response.data.message ? er.response.data.message : er.response.data })
                );
        }

        setValidated(true);
    };

    return (
        <>
            <div className="grid h-screen place-items-center">
                <div className="bg-white w-full md:w-1/3 shadow-md rounded px-8 pt-6 pb-8 border-2 border-black bg-fuchsia-400">
                    <h1 className="text-center text-2xl">Login to your account</h1> <br />
                    {/* FORM START */}
                    <form noValidate validated={validated} onSubmit={handleSubmit} action="#" method="POST">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl"
                                for="email">
                                Email Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-xl" for="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                required
                                id="password"
                                type="password"
                                name="password"
                                placeholder="password"
                            />
                            <div class="flex items-center mb-4">
                                <input
                                    id="checkbox"
                                    type="checkbox"
                                    name="doNotLogout"
                                    label="Do not logout"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                            </div>

                            <div className="flex justify-center items-center">
                                <button type="submit" className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                    Log In
                                    
                                </button>

                            </div>
                            <div className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${loginUserResponseState && loginUserResponseState.error === "wrong credentials" ? 'block' : 'hidden'}`} role="alert">
                                <strong className="font-bold">Wrong Password!</strong>
                            </div>
                        </div>
                    </form>
                    <hr className="h-px my-8 bg-gray-700 border-0 dark:bg-gray-900"></hr>
                    <div className="flex flex-row justify-around items-center ">
                        <h1 >Don't have an account?</h1>
                        <Link to="/register">
                            <button className="bg-fuchsia-600 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Register
                            </button>
                        </Link>
                    </div>

                    <a className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </>
    )
}

export default LoginPageComponent;