import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const updateUser = (user, setUpdating, status) => {
  setUpdating(true);
  const data = {
    ...user,
    role: status,
  };
  axios
    .put(
      `https://mathematical-lavinia-survivor.koyeb.app/users/${user.email}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      console.log("response", response.data);
      toast.success("User Updated Successfully. ", {
        transition: Bounce,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((err) => {
      console.log("User Update Error", err);
      toast.error("Error while updating User", {
        transition: Bounce,
      });
    })
    .finally(() => {
      setUpdating(false);
    });
};
