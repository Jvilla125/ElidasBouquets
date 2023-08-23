import React from "react";

const DeliveryOptionsPage = () => {
    return (
        <>
            <div className="w-full block lg:flex lg:items-center lg:flex-col">
                <h1><b>Ordering</b></h1>
                <p> Orders are through DM on instagram or on this website</p>
                <p> I would need a <b>confirmed</b> order about <b>4-5 days</b> in advance before pick up date</p>

                <h1> <b>Delivery</b></h1>
                <ul>
                    <li>
                        Delivery is possible (within 15 miles) but should be discussed when making an order.
                    </li>
                    <li>
                        Delivery fees will be applied depending on the distance ($5 less than 10 miles) ($10 greater than 10 miles)
                    </li>
                    <li>
                        Pick up is free and location would be discussed after order confirmation.
                    </li>
                </ul>
                <h1><b>Payment Options</b></h1>
                <ul>
                    <li>Zelle</li>
                    <li>Cash</li>
                    <li>CashApp</li>
                </ul>
            </div>
        </>
    )
}

export default DeliveryOptionsPage;