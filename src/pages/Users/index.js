import React, { useEffect, useState } from "react";
import { getUsers } from "./utils";
import AdminHeader from "../../components/AdminLayout/AdminHeader";
import UsersCard from "../../components/UsersCard";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getUsers(setUsers, setLoading, navigate);
  }, []);
  return (
    <div className="w-full pb-20">
      <AdminHeader />
      <div className="w-full h-20 container mx-auto justify-center bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
        <h2>Full Name</h2>
        <h2>User name</h2>
        <h2>Email</h2>
        <h2>Role</h2>
        <h2>Edit / Delete</h2>
      </div>
      <div className="mt-5">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          users.map((user, index) => (
            <div key={index}>
              <UsersCard user={user} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
