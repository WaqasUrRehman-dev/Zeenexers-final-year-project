import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const updatePurchase = (id, setUpdating, status, token) => {
  setUpdating(true);
  const data = {
    status,
  };
  axios
    .patch(
      `https://mathematical-lavinia-survivor.koyeb.app/purchases/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      console.log("response", response.data);
      toast.success("Purchase Updated Successfully. ", {
        transition: Bounce,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((err) => {
      console.log("Purchase Update Error", err);
      toast.error("Error while updating Purchase", {
        transition: Bounce,
      });
    })
    .finally(() => {
      setUpdating(false);
    });
};
