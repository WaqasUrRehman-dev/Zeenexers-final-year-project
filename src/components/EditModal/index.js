import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import * as yup from "yup";
import { editProduct } from "./utils";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "70%",
    width: "60%",
  },
};
const EditModal = ({ modalIsOpen, closeModal, productDetails }) => {
  const [pic, setPic] = useState("");
  const [preview, setPreview] = useState(
    `https://mathematical-lavinia-survivor.koyeb.app/products/image/${productDetails.iden}`
  );
  const token = localStorage.getItem("token");
  const [error, setError] = useState(false);
  const [updating, setUpdating] = useState(false);
  const fileInputRef = useRef(null);
  console.log("daft", productDetails);
  const initialValues = {
    name: productDetails.name,
    price: productDetails.price,
    description: productDetails.description,
    category: productDetails.categories,
    color: productDetails.colors,
  };
  const productSchema = yup.object().shape({
    name: yup.string(),
    price: yup.number("Price must be a number"),
    description: yup.string(),
    category: yup.string(),
    color: yup.string(),
  });
  const onSubmit = (values) => {
    const updatedValues = {};
    if (values.name !== productDetails.name) updatedValues.name = values.name;
    if (values.price !== productDetails.price)
      updatedValues.price = values.price;
    if (values.description !== productDetails.description)
      updatedValues.description = values.description;
    if (values.category !== productDetails.categories)
      updatedValues.categories = values.category;
    if (values.color !== productDetails.colors)
      updatedValues.colors = values.color;
    if (pic || preview) {
      editProduct(
        productDetails.iden,
        updatedValues,
        pic,
        token,
        closeModal,
        setUpdating
      );
    } else {
      setError(true);
    }
  };
  const handleClose = () => {
    closeModal(false);
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setError(false);
      setPic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Add Product Modal"
        shouldCloseOnEsc={true}
      >
        <div className="w-full h-full container mx-auto content-between flex flex-col justify-between">
          <h2 className="flex justify-center items-center text-2xl text-black font-semibold">
            Update Product
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={productSchema}
            onSubmit={(values) => onSubmit(values)}
          >
            <Form className="flex flex-col py-4">
              <div className="flex mx-5 items-center">
                <label htmlFor="name" className="text-black w-[50%]">
                  Product Name
                </label>
                <Field
                  name="name"
                  className="mt-2 rounded-lg border border-1 p-2 w-[50%] text-black"
                  placeholder="Galaxy Watch"
                />
              </div>
              <ErrorMessage
                component="div"
                name="name"
                className="mx-5 text-red-500"
              />
              <div className="flex mx-5 items-center">
                <label htmlFor="price" className="text-black w-[50%]">
                  Product Price
                </label>
                <Field
                  name="price"
                  className="mt-2 rounded-lg border border-1 p-2 w-[50%] text-black"
                  placeholder="0"
                  type="number"
                />
              </div>
              <ErrorMessage
                component="div"
                name="price"
                className="mx-5 text-red-500"
              />
              <div className="flex mx-5 items-center">
                <label htmlFor="category" className="text-black w-[50%]">
                  Product Category
                </label>
                <Field
                  name="category"
                  className="mt-2 rounded-lg border border-1 p-2 w-[50%] text-black"
                  placeholder="Watches"
                />
              </div>
              <ErrorMessage
                component="div"
                name="category"
                className="mx-5 text-red-500"
              />
              <div className="flex mx-5 items-center">
                <label htmlFor="description" className="text-black w-[50%]">
                  Product Description
                </label>
                <Field
                  name="description"
                  className="mt-2 rounded-lg border border-1 p-2 w-[50%] text-black"
                  placeholder="Smart Watch"
                />
              </div>
              <ErrorMessage
                component="div"
                name="description"
                className="mx-5 text-red-500"
              />
              <div className="flex mx-5 items-center">
                <label htmlFor="color" className="text-black w-[50%]">
                  Product Color
                </label>
                <Field
                  name="color"
                  className="mt-2 rounded-lg border border-1 p-2 w-[50%] text-black"
                  placeholder="Blue with Black and White"
                />
              </div>
              <ErrorMessage
                component="div"
                name="color"
                className="mx-5 text-red-500"
              />
              <div className="flex mx-5 items-center justify-between mt-2">
                <label htmlFor="image" className="text-black w-[50%]">
                  Product Picture
                </label>
                <div className="flex justify-center w-[50%]">
                  <img
                    className="w-32 h-32 rounded-lg my-2"
                    src={preview}
                    alt="productImage"
                    onClick={handleImageClick}
                  />
                  <input
                    name="image"
                    className="mt-2 rounded-lg border border-1 p-2 w-[50%]"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              {error && (
                <div className="mx-5 text-red-500">
                  Product Image is Required
                </div>
              )}
              <div className="flex justify-around items-center mt-7">
                <button
                  onClick={handleClose}
                  className="p-2 border border-1 border-[#DC143C] text-lg rounded-lg bg-[#DC143C] hover:bg-red-700 hover:shadow-xl duration-300 transition-all text-white font-semibold"
                  type="button"
                >
                  Close
                </button>
                <button
                  className="p-2 border border-1 border-black text-lg rounded-lg bg-primeColor hover:bg-black hover:shadow-xl duration-300 transition-all text-white font-semibold"
                  type="submit"
                  disabled={updating}
                >
                  {updating ? "Updating..." : "  Update Product"}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
