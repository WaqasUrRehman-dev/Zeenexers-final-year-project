import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { uploadPurchase } from "./utils";
import { Bounce, toast } from "react-toastify";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, name, access_token, email } = useSelector(
    (state) => state.orebiReducer
  );
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState();
  const [err, setErr] = useState("");
  useEffect(() => {
    console.log(access_token);
    console.log(name);
    console.log(email);
    if (!access_token || !name || !email) {
      navigate("/signin");
      toast.error("Please login first to continue order", {
        transition: Bounce,
      });
    } else {
      navigate("/placeorder");
    }
  }, [email, name, navigate, access_token]);
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    setShippingCharge(200);
  }, []);
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErr("");
  };
  const handleContact = (e) => {
    setContact(e.target.value); // Update password state
    setErr("");
  };
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Place Your Order" />
      <div className="pb-10 flex flex-col">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 "> */}
        <div>
          <h1 className="text-2xl font-semibold text-left">Payment Info</h1>
          <div className="border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium flex justify-between">
            <p>Name: </p>
            <p className="text-black text-right">{name}</p>
          </div>
          <div className="border-[1px] border-gray-400 border-b-0 text-lg px-4 font-medium flex">
            <p className="w-[50%] py-1.5">Contact: </p>
            <input
              onChange={handleContact}
              value={contact}
              className="w-[50%] bg-[#f8f8f8] pl-2 py-1.5 border-l-[1px] border-gray-400 placeholder:text-sm placeholder:tracking-wide text-base font-semibold tracking-wide placeholder:font-normal outline-none appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              inputMode="numeric"
              placeholder="Enter number to contact"
            />
          </div>
          <div className="border-[1px] border-gray-400 border-b-0 text-lg px-4 font-medium flex">
            <p className="w-[50%] py-1.5">Address: </p>
            <input
              onChange={handleAddress}
              value={address}
              className="w-[50%] py-1.5 bg-[#f8f8f8] pl-2 border-l-[1px] border-gray-400 placeholder:text-sm placeholder:tracking-wide text-base placeholder:font-normal outline-none font-semibold tracking-wide"
              type="text"
              placeholder="Enter delivery address here."
            />
          </div>
          <div className="border-[1px] border-gray-400 border-b-0 text-lg px-4 font-medium flex">
            <p className="w-[50%] py-1.5">City: </p>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="w-[50%] py-1.5 bg-[#f8f8f8] pl-2 border-l-[1px] border-gray-400 placeholder:text-sm placeholder:tracking-wide text-base placeholder:font-normal outline-none font-semibold tracking-wide"
              type="text"
              placeholder="Enter City here."
            />
          </div>
          <div className="border-[1px] border-gray-400 text-lg px-4 font-medium flex">
            <p className="w-[50%] py-1.5">Zip Code: </p>
            <input
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              className="w-[50%] py-1.5 bg-[#f8f8f8] pl-2 border-l-[1px] border-gray-400 placeholder:text-sm placeholder:tracking-wide text-base placeholder:font-normal outline-none font-semibold tracking-wide appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              inputMode="numeric"
              placeholder="Enter Zip Code here."
            />
          </div>
          {err && <div className="text-red-600 font-semibold">{err}</div>}
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Cart totals</h1>
          <div>
            <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
              Subtotal
              <span className="font-semibold tracking-wide font-titleFont">
                PKR {totalAmt}
              </span>
            </p>
            <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
              Shipping Charge
              <span className="font-semibold tracking-wide font-titleFont">
                PKR {shippingCharge}
              </span>
            </p>
            <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
              Total
              <span className="font-bold tracking-wide text-lg font-titleFont">
                PKR {totalAmt + shippingCharge}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
        <button
          className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300"
          onClick={() => {
            uploadPurchase(
              address,
              city,
              zipCode.toString(),
              contact,
              products,
              totalAmt + shippingCharge,
              setErr,
              dispatch,
              navigate
            );
          }}
        >
          Checkout
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Payment;
