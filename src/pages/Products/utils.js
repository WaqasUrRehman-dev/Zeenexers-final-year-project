import axios from "axios";

export const getProducts = async (setProducts, setLoading) => {
  try {
    const response = await axios.get(
      "https://mathematical-lavinia-survivor.koyeb.app/products/"
    );
    console.log("getProducts Response", response.data);
    if (response.status === 200) {
      setProducts(response.data);
      setLoading(false);
    } else {
      setLoading(false);
      setProducts([]);
    }
  } catch (error) {}
};
