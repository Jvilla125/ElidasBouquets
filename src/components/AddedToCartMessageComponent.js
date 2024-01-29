import React from 'react';
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddedToCartMessageComponent = ({ showCartMessage, setShowCartMessage }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // -1 means go back to the last page user was on 
    }
    return (
        <>
            <div className="flex items-center p-4 mb-4 text-sm " role="alert">
                <div>
                    {
                        showCartMessage === false ? "" : <span className="font-medium"
                            show={showCartMessage}
                            onClose={() => setShowCartMessage(false)}>
                            Success alert!
                            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <span className="sr-only">Info</span>
                            <p>
                                <button
                                    onClick={goBack}
                                    type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    Go back
                                </button>{" "}
                                <Link to="/cart">
                                    <button
                                        type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                    >
                                        Go to cart
                                    </button>
                                </Link>
                            </p>
                        </span>
                    }
                </div>
            </div>

        </>
    )
};

export default AddedToCartMessageComponent;
{/* <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                role="alert"
                show={showCartMessage}
                
                // onClose={() => setShowCartMessage(false)}
                dismissible
            >
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
                    <p>
                    <Button
                        variant='success'
                        onClick={goBack}
                    >
                        Go back
                    </Button>{" "}
                    <Link to="/cart">
                        <Button variant='danger'>
                            Go to cart
                        </Button>
                    </Link>
                </p>
                </div>
            </div> */}