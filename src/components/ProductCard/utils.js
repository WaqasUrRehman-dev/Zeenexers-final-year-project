import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const handleDelete = (id, setDeleting) => {
  setDeleting(true);
  const token = localStorage.getItem("token");
  axios
    .delete(`https://mathematical-lavinia-survivor.koyeb.app/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("delete product", response.data);
      toast.success("Product deleted successfully", {
        transition: Bounce,
      });
    })
    .catch((err) => {
      console.log("delete product", err);
      toast.error("Error while deleting Product", {
        transition: Bounce,
      });
    })
    .finally(() => {
      setDeleting(false);
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    });
};
