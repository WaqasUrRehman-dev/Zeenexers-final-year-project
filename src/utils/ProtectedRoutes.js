import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const [isAdmin, setIsAdmin] = useState(undefined);
  useEffect(() => {
    const access_token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    console.log("token", access_token);
    console.log("role", role);
    if (access_token && role === "Admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);
  return (
    <div>
      {isAdmin !== undefined && (isAdmin ? <Outlet /> : <Navigate to="/" />)}
    </div>
  );
};

export default ProtectedRoutes;
