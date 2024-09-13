import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const uploadProduct = (values, pic, token, closeModal, setUploading) => {
  setUploading(true);
  const url = `https://mathematical-lavinia-survivor.koyeb.app/products/?name=${encodeURIComponent(
    values.name
  )}&price=${values.price}&description=${encodeURIComponent(
    values.description
  )}&colors=${encodeURIComponent(values.color)}&categories=${encodeURIComponent(
    values.category
  )}`;
  let formData = new FormData();
  formData.append("image", pic);
  console.log(pic);
  console.log(token);
  axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("response", response.data);
      setUploading(false);
      toast.success("Product Added Successfully. ", {
        transition: Bounce,
      });
      closeModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((error) => {
      console.log("error", error);
      setUploading(false);
      toast.error("Error while adding product", {
        transition: Bounce,
      });
    });
};
