import React from "react";
import UserLinksComponent from "../../../components/user/UserLinksComponent";

const UserOrdersPageComponent = () => {
    return (
        <>
            <div className="grid mx-auto w-11/12 grid sm:grid-cols-3 grid-cols-1">
                {/* start of first div */}
                <div className=" mx-auto ">
                    <UserLinksComponent />
                </div>
                {/* start of second div */}
                <div className="bg-blue-200 w-full mx-auto pt-5 sm:pt-0">
                    <table className="w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" class="px-6 py-4">#</th>
                                <th scope="col" class="px-6 py-4">First</th>
                                <th scope="col" class="px-6 py-4">Last</th>
                                <th scope="col" class="px-6 py-4">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                <td className="whitespace-nowrap px-6 py-4">@fat</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-500">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                            </tr>
                        </tbody>
                    </table>
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