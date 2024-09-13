import axios from "axios";

export const getPurchases = async (token, setPurchases, setLoading) => {
  console.log(token);
  axios
    .get("https://mathematical-lavinia-survivor.koyeb.app/purchases/", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      setLoading(false);
      if (response.status === 200) {
        const sortedData = [...response.data].sort(
          (a, b) => new Date(b.purchase_date) - new Date(a.purchase_date)
        );
        console.log("Admin Purchases", sortedData);
        setPurchases(sortedData);
      } else {
        setPurchases([]);
      }
    })
    .catch((error) => {
      console.error("getPurchases Error:", error);
      setLoading(false);
      setPurchases([]);
    });
};
export const refactorPurchases = (data) => {
  const combinedData = data.reduce((acc, current) => {
    const {
      _id,
      user_id,
      items,
      total_price,
      purchase_date,
      status,
      address,
      contact,
    } = current;

    if (!acc[user_id]) {
      acc[user_id] = [];
    }

    items.forEach((item) => {
      acc[user_id].push({
        _id,
        ...item,
        total_price,
        purchase_date,
        status,
        address,
        contact,
      });
    });

    return acc;
  }, {});

  return Object.keys(combinedData).map((user_id) => ({
    user_id,
    purchases: combinedData[user_id],
  }));
};
