import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminLayout/AdminHeader";
import { getPurchases } from "./utils";
import PurchaseCard from "../../components/PurchaseCard";

const Purchases = () => {
  const [userPurchases, setUserPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const access_token = localStorage.getItem("token");
  useEffect(() => {
    getPurchases(access_token, setUserPurchases, setLoading);
  }, []);
  return (
    <div className="w-full pb-20">
      <AdminHeader />
      <div className="w-full container mt-8 mx-auto h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-7 place-content-center px-6 text-lg font-titleFont font-semibold">
        <h2 className="col-span-2">Products</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Total Price</h2>
        <h2>Status</h2>
        <h2>Edit / Delete</h2>
      </div>
      <div className="mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          userPurchases.map((userPurchase, index) => (
            <div key={index}>
              <div className="w-full container mx-auto font-titleFont font-medium pb-5 px-5">
                <p>
                  Purchase by:{" "}
                  <span className="font-semibold pl-2 text-black">
                    {userPurchase.user_id}
                  </span>
                </p>
              </div>
              {userPurchase.items.map((purchase) => (
                <PurchaseCard
                  purchase={purchase}
                  key={purchase.product_id}
                  data={userPurchase}
                />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Purchases;
