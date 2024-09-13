import React, { useState } from "react";
import { deletePurchase, fetchItemDetails } from "./utils";
import { useEffect } from "react";
import { dateFormatter } from "../../utils";
import EditPurchaseModal from "../EditPurchaseModal";

const PurchaseCard = ({ purchase, data }) => {
  const [itemData, setItemData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    console.log(purchase, "shubair", data);
    fetchItemDetails(purchase.product_id, setItemData);
  }, []);
  return (
    <div className="w-full mb-4 container mx-auto border rounded-xl p-2 items-center bg-[#FAF9F6] hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-2 md:grid-cols-7 py-2">
        <div className="flex col-span-2 items-center gap-4">
          <img
            className="w-32 h-32 rounded-xl"
            src={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${itemData.iden}`}
            alt="productImage"
          />
          <h1 className="font-titleFont font-semibold">{itemData.name}</h1>
        </div>
        <div className="flex col-span-2 mdl:col-span-5 items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
          <div className="flex w-1/4 products-center text-lg font-semibold">
            PKR {itemData.price}
          </div>
          <div className="flex w-1/4 products-center text-lg font-semibold">
            <p>{purchase.quantity}</p>
          </div>
          <div className="flex w-1/4 products-center text-lg font-semibold">
            <p>PKR {purchase.quantity * itemData.price}</p>
          </div>
          <div className="flex w-1/4 products-center text-lg font-semibold">
            <p>{data.status}</p>
          </div>
          <div className="hidden md:block w-1/4">
            <div className="flex flex-col justify-start w-[50%]">
              <button
                className="px-2 py-3 mb-2 rounded-lg bg-primeColor text-white hover:bg-black"
                onClick={() => setShowModal(true)}
                disabled={deleting}
              >
                Edit
              </button>
              <button
                className="px-2 py-3 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-all duration-300"
                onClick={() => deletePurchase(data._id, token, setDeleting)}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:hidden col-span-2">
          <div className="flex flex-col justify-start w-full">
            <button
              className="px-2 py-3 mb-2 rounded-lg bg-primeColor text-white hover:bg-black"
              onClick={() => setShowModal(true)}
              disabled={deleting}
            >
              Edit
            </button>
            <button
              className="px-2 py-3 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-all duration-300"
              onClick={() => deletePurchase(data._id, token, setDeleting)}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>
          Purchase Date:{" "}
          <span className="flex-col items-center font-titleFont font-semibold text-black">
            {dateFormatter(data.purchase_date)}
          </span>
        </p>
      </div>
      <EditPurchaseModal
        closeModal={setShowModal}
        modalIsOpen={showModal}
        purchase={data}
        quantity={purchase.quantity}
      />
    </div>
  );
};

export default PurchaseCard;
