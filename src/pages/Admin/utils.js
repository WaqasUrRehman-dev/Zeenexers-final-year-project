import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const fetchData = (
  setTotalProducts,
  setTotalUsers,
  setTotalPurchases,
  setLoading,
  navigate
) => {
  setLoading(true);
  Promise.all([
    getTotalProducts(setTotalProducts),
    getTotalUsers(setTotalUsers),
    getTotalPurchases(setTotalPurchases),
  ])
    .catch(() => {
      console.log("Catch");
      setLoading(false);
      localStorage.clear();
      navigate("/");
      toast.error("Please Login", {
        transition: Bounce,
      });
    })
    .finally(() => {
      setLoading(false);
      console.log("Finally");
    });
};
const getTotalProducts = async (setTotalProducts) => {
  axios
    .get("https://mathematical-lavinia-survivor.koyeb.app/products/")
    .then((response) => {
      setTotalProducts(response.data.length);
    })
    .catch((err) => {
      console.log("Error while fetching Products", err);
      toast.error("Error while fetching Products", {
        transition: Bounce,
      });
    });
};
const getTotalUsers = async (setTotalUsers) => {
  axios
    .get("https://mathematical-lavinia-survivor.koyeb.app/users/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      setTotalUsers(response.data.length);
    })
    .catch((err) => {
      console.log("Error while fetching Users", err);
      toast.error("Error while fetching Users", {
        transition: Bounce,
      });
    });
};
const getTotalPurchases = async (setTotalPurchases) => {
  axios
    .get("https://mathematical-lavinia-survivor.koyeb.app/purchases/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      setTotalPurchases(response.data.length);
    })
    .catch((err) => {
      console.log("Error while fetching Purchases", err);
      toast.error("Error while fetching Purchases", {
        transition: Bounce,
      });
    });
};
