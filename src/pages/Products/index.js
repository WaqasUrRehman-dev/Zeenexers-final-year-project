import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminLayout/AdminHeader";
import { getProducts } from "./utils";
import ProductCard from "../../components/ProductCard";
import ModalComponent from "../../components/Modal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    getProducts(setProducts, setLoading);
  }, []);
  return (
    <div className="w-full pb-20">
      <AdminHeader />
      <div className="flex px-2 py-4 justify-end w-full h-20 container mx-auto">
        <div
          className="bg-primeColor px-3 py-1.5 rounded-lg text-white flex justify-center items-center text-base font-semibold hover:bg-black hover:shadow-xl duration-300 cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          + Add Product
        </div>
      </div>
      <div className="w-full h-20 container mx-auto justify-center bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-6 place-content-center px-6 text-lg font-titleFont font-semibold">
        <h2 className="col-span-2">Product</h2>
        <h2>Price</h2>
        <h2>Category</h2>
        <h2>Description</h2>
        <h2>Edit / Delete</h2>
      </div>
      <div className="mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <div key={product.iden}>
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
      <ModalComponent modalIsOpen={openModal} closeModal={setOpenModal} />
    </div>
  );
};

export default Products;
