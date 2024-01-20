import React from "react";
import UserLinksComponent from "../../../components/user/UserLinksComponent";

const UserOrdersPageComponent = () => {
    return (
        <>
            <div className="mx-auto w-11/12 grid sm:grid-cols-3 grid-cols-1 pt-5 ">
                <div className="w-full col-span-3 flex flex-col sm:flex-row">
                    {/* start of first div */}
                    <div className="mx-auto ">
                        <UserLinksComponent />
                    </div>
                    {/* start of second div */}
                    <div className=" sm:w-3/4 w-full mx-auto pt-5 sm:pt-0">
                        <table className="w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500 bg-blue-400">
                                <tr>
                                    <th scope="col" class="px-6 py-4">#</th>
                                    <th scope="col" class="px-6 py-4">Full</th>
                                    <th scope="col" class="px-6 py-4">Date</th>
                                    <th scope="col" class="px-6 py-4">Total Price</th>
                                    <th scope="col" class="px-6 py-4">Order Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:border-neutral-500 bg-blue-200">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500 bg-blue-200">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                    <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                    <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                    <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                                <tr className="border-b dark:border-neutral-500 bg-blue-200">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                    <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                    <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                    <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserOrdersPageComponent;

{/* <div class="flex flex-col">
<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden"> */}
// </div>
//             </div>
//         </div>
//     </div>