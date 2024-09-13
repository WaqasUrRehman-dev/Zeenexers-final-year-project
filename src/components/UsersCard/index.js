import React, { useState } from "react";
import { handleDelete } from "./utills";
import EditUserModal from "../EditUserModal";

const UsersCard = ({ user }) => {
  const [deleting, setDeleting] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full container mx-auto justify-center flex flex-col rounded-xl md:grid md:grid-cols-5 mb-4 border px-4 py-2 items-center bg-[#FAF9F6] hover:shadow-xl transition-all duration-300">
      <div className="w-full md:w-auto justify-center break-all flex products-center text-lg font-semibold">
        {user.full_name}
      </div>
      <div className="w-full md:w-auto justify-center break-all px-4 flex products-center text-lg font-semibold">
        {user.username}
      </div>
      <div className="w-full md:w-auto justify-center break-all px-4 flex products-center text-lg font-semibold">
        {user.email}
      </div>
      <div className="w-full md:w-auto justify-center flex products-center text-lg font-semibold">
        {user.role}
      </div>
      <div className="w-full md:w-auto justify-center flex products-center text-lg font-semibold">
        <div className="flex flex-col justify-start w-[50%]">
          <button
            className="px-2 py-3 mb-2 rounded-lg bg-primeColor text-white hover:bg-black"
            onClick={() => setOpenModal(true)}
            disabled={deleting}
          >
            Edit
          </button>
          <button
            className="px-2 py-3 rounded-lg bg-red-500 text-white hover:bg-red-700 transition-all duration-300"
            onClick={() => handleDelete(user.email, setDeleting)}
            disabled={deleting}
          >
            {deleting ? "Deleting" : "Delete"}
          </button>
        </div>
      </div>
      <EditUserModal
        modalIsOpen={openModal}
        closeModal={setOpenModal}
        userDetails={user}
      />
    </div>
  );
};

export default UsersCard;
