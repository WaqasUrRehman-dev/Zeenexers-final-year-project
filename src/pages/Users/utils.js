import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const getUsers = (setUsers, setLoading, navigate) => {
  setLoading(true);
  axios
    .get("https://mathematical-lavinia-survivor.koyeb.app/users/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      setLoading(false);
      setUsers(res.data);
      console.log(res.data);
      toast.success("Users Fetched", {
        transition: Bounce,
      });
    })
    .catch((err) => {
      console.log("Error while fetching Users", err);
      setLoading(false);
      toast.error("Error while fetching Users", {
        transition: Bounce,
      });
      localStorage.clear();
      navigate("/signin");
    });
};
