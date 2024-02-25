import React, { useState } from "react";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.module.css'

import { useNavigate } from "react-router-dom";


const CheckOutFormComponent = ({ cartSubtotal, orderHandler}) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        calendar: null,
        floating_first_name: '',
        floating_last_name: '',
        floating_email: '',
        floating_phone: '',
        comment: '',
        contact_method: 'text', // Set a default value for the select field
    });

    const currentDate = new Date();

    const handleDateChange = (date) => {
        setFormData({ ...formData, calendar: date });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const orderData = orderHandler();
            console.log('formData:', formData);
            console.log('orderData:', orderData);
            const response = await fetch('http://localhost:3000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({formData: formData, orderData: orderData}),
            });
            if (response.ok) {
                console.log('Form submitted successfully!');
                // You can navigate to any page after successfully placing an order here VVVV
                navigate("/")
                // Optionally, you can reset the form here
                setFormData({
                    calendar: null,
                    floating_first_name: '',
                    floating_last_name: '',
                    floating_email: '',
                    floating_phone: '',
                    comment: '',
                    contact_method: 'text', // Reset the select field to its default value
                });
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
        <form className="p-6 bg-blue-200 border-2 border-black rounded-lg w-fit">
            <div className="max-w-md mx-auto ">
                <div className="mb-4 ">
                    <DatePicker
                        id="calendar"
                        selected={formData.calendar}
                        onChange={handleDateChange}
                        minDate={currentDate}
                        dateFormat="MM/dd/yyyy"
                        className="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholderText="Select a date"
                    />
                </div>
                <div className="grid md:grid-cols-2 md:gap-6  ">
                    {['First', 'Last'].map((name, index) => (
                        <div key={index} className="relative z-0 border-2 border-gray-500 w-full group py-2 px-4 mb-4 bg-white rounded-lg">
                            <input
                                type="text"
                                name={`floating_${name.toLowerCase()}_name`}
                                id={`floating_${name.toLowerCase()}_name`}
                                value={formData[`floating_${name.toLowerCase()}_name`]}
                                onChange={handleInputChange}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor={`floating_${name.toLowerCase()}_name`}
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                {name} name
                            </label>
                        </div>
                    ))}
                </div>
                <div className="relative z-0 border-2 border-gray-500 w-full mb-6 group py-2 px-4 mb-4 bg-white rounded-lg">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        value={formData.floating_email}
                        onChange={handleInputChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </div>
                <div className="relative z-0 border-2 border-gray-500 w-full mb-6 group py-2 px-4 mb-4 bg-white rounded-lg">
                    <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="floating_phone"
                        id="floating_phone"
                        value={formData.floating_phone}
                        onChange={handleInputChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_phone"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Phone number (123-456-7890)
                    </label>
                </div>
                <div className="py-2 border-2 border-gray-500 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <label htmlFor="comment" className="sr-only">
                        Special instructions or comments
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="4"
                        value={formData.comment}
                        onChange={handleInputChange}
                        className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="Special instructions or comments"
                        required
                    ></textarea>
                </div>
                <div className="p-2">
                    <p>Preferred method of contact for Order Confirmation:</p>
                    <select
                        name="contact_method"
                        value={formData.contact_method}
                        onChange={handleInputChange}
                        className="rounded-lg w-11/12 sm:w-1/2"
                    >
                        <option value="text">Text</option>
                        <option value="call">Call</option>
                        <option value="email">Email</option>
                    </select>
                </div>
                <button
                    disabled={cartSubtotal === 0 }
                    onClick={handleSubmit}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    
                >
                    Check Out!
                </button>
            </div>
        </form>
        </>
    )
}

export default CheckOutFormComponent;