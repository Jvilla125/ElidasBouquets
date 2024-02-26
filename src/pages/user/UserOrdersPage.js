import React from "react";
import UserOrdersPageComponent from "./components/UserOrdersPageComponent";
import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("/api/orders");
  return data;
};

const UserOrdersPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-600">
      <div className="w-10/12 bg-gray-300 h-screen">
        <UserOrdersPageComponent getOrders={getOrders} />
      </div>
    </div>
  );
};

export default UserOrdersPage;
