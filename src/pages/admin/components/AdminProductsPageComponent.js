import React from "react";

import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

const AdminProductsPageComponent = () => {
    return (
        <>
            <div className="grid mt-6 md:mb-10 grid-cols-1 lg:grid-cols-10">
                <AdminLinksComponent />
                <div className=" w-full row-start-2 col-start-4 col-span-6">
                    <h1>Products</h1>
                </div>
            </div>
        </>
    )
}

export default AdminProductsPageComponent;