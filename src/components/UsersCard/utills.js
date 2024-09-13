import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const handleDelete = (email, setDeleting) => {
  console.log("delete user email", email);
  setDeleting(true);
  axios
    .delete(`https://mathematical-lavinia-survivor.koyeb.app/users/${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      console.log("delete user", response.data);
      toast.success("User deleted successfully", {
        transition: Bounce,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((err) => {
      console.log("delete user", err);
      toast.error("Error while deleting User", {
        transition: Bounce,
      });
    })
    .finally(() => {
      setDeleting(false);
    });
};
