import React, { useState } from "react";
import Modal from "react-modal";
import { updateUser } from "./utils";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "70%",
    width: "50%",
  },
};
const EditUserModal = ({ userDetails, modalIsOpen, closeModal }) => {
  const options = ["Admin", "User"];
  const [updating, setUpdating] = useState(false);
  const [status, setStatus] = useState(userDetails.role);
  const onOptionChangeHandler = (event) => {
    if (event.target.value !== status) {
      setStatus(event.target.value);
    }
  };
  const handleClose = () => {
    closeModal(false);
  };
  return (
    <div className="w-full h-full">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Add Product Modal"
        shouldCloseOnEsc={true}
      >
        <div className="w-full h-full container mx-auto content-between flex flex-col justify-between">
          <h2 className="flex justify-center items-center text-2xl text-black font-semibold">
            Update User
          </h2>
          <div className="flex-col mx-5">
            <div className="justify-between flex items-center w-full py-2 gap-2">
              <p className="w-[50%]">Full Name: </p>
              <span className="text-black border rounded-xl py-2 w-[50%] justify-center flex cursor-not-allowed">
                {userDetails.full_name}
              </span>
            </div>
            <div className="justify-between flex items-center w-full py-2">
              <p>Username:</p>
              <span className="text-black border rounded-xl py-2 w-[50%] justify-center flex cursor-not-allowed">
                {userDetails.username}
              </span>
            </div>
            <div className="justify-between flex items-center w-full py-2">
              <p>Email:</p>
              <span className="text-black border rounded-xl py-2 w-[50%] justify-center flex cursor-not-allowed">
                {userDetails.email}
              </span>
            </div>
            <div className="justify-between flex items-center w-full py-2">
              <p>User Role:</p>
              <select
                onChange={onOptionChangeHandler}
                value={status}
                className="text-black border rounded-xl py-2 w-[50%] justify-center flex"
              >
                {options.map((option, index) => {
                  return (
                    <option
                      key={index}
                      className="text-black justify-center flex"
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex items-center mt-7 justify-around">
            <button
              onClick={handleClose}
              className="p-2 border border-1 border-[#DC143C] text-lg rounded-lg bg-[#DC143C] hover:bg-red-700 hover:shadow-xl duration-300 transition-all text-white font-semibold"
              type="button"
            >
              Close
            </button>
            <button
              className="p-2 border border-1 border-black text-lg rounded-lg bg-primeColor hover:bg-black hover:shadow-xl duration-300 transition-all text-white font-semibold"
              disabled={updating}
              onClick={() => updateUser(userDetails, setUpdating, status)}
            >
              {updating ? "Updating..." : "  Update Product"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditUserModal;
