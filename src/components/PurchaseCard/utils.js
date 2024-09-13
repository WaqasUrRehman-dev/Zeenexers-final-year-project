import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const fetchItemDetails = (id, setItemData) => {
  axios
    .get(`https://mathematical-lavinia-survivor.koyeb.app/products/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setItemData(response.data);
      } else {
        setItemData([]);
      }
    })
    .catch((error) => {
      console.error("getPurchases Error:", error);
    });
};
export const deletePurchase = (id, token, setDeleting) => {
  console.log("delete id", id);
  setDeleting(true);
  axios
    .delete(`https://mathematical-lavinia-survivor.koyeb.app/purchases/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      toast.success("Purchase deleted successfully", {
        transition: Bounce,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((err) => {
      console.log("delete product", err);
      toast.error("Error while deleting Purchase", {
        transition: Bounce,
      });
    })
    .finally(() => {
      setDeleting(false);
    });
};
