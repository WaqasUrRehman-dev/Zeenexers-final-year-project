import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Modal from "react-modal";
import * as yup from "yup";
import { uploadProduct } from "./utils";

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
const ModalComponent = ({ modalIsOpen, closeModal }) => {
  const [pic, setPic] = useState("");
  const token = localStorage.getItem("token");
  const [error, setError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const initialValues = {
    name: "",
    price: "",
    description: "",
    category: "",
    color: "",
  };
  const productSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    price: yup
      .number("Price must be a number")
      .min(1)
      .required("Price is required"),
    description: yup.string().required("Description is Required"),
    category: yup.string().required("Category is Required"),
    color: yup.string().required("Color is Required"),
  });
  const onSubmit = (values) => {
    if (pic) {
      uploadProduct(values, pic, token, closeModal, setUploading);
    } else {
      setError(true);
    }
  };
  const handleClose = () => {
    closeModal(false);
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
        <div className="w-full h-full container mx-auto content-between flex flex-col justify-evenly">
          <h2 className="flex justify-center items-center text-2xl text-black font-semibold">
            Add Product
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
              <div className="flex mx-5 items-center">
                <label htmlFor="image" className="text-black w-[50%]">
                  Product Picture
                </label>
                <input
                  name="image"
                  className="mt-2 rounded-lg border border-1 p-2 w-[50%] text-black"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setError(false);
                    setPic(event.currentTarget.files[0]);
                  }}
                />
              </div>
              {error && (
                <div className="mx-5 text-red-500">
                  Product Image is Required
                </div>
              )}
              <div className="flex justify-around items-center mt-10">
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
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "  Add Product"}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
