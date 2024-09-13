import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setItems } from "../../redux/orebiSlice";


const Home = () => {
  const { items } = useSelector((state) => state.orebiReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("https://mathematical-lavinia-survivor.koyeb.app/products/", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(setItems(response.data));
        })
        .catch((err) => {
          console.log("Get Products failed", err);
          dispatch(setItems([]));
        });
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const scriptConfig = document.createElement("script");
    scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "QsxP7oAEkcvMARb5FJOUk",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(scriptConfig);

    const scriptEmbed = document.createElement("script");
    scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
    scriptEmbed.defer = true;
    scriptEmbed.setAttribute("chatbotId", "QsxP7oAEkcvMARb5FJOUk");
    scriptEmbed.setAttribute("domain", "www.chatbase.co");
    document.body.appendChild(scriptEmbed);

    return () => {
      document.body.removeChild(scriptConfig);
      document.body.removeChild(scriptEmbed);
    };
  }, []);

  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      {items.length > 0 ? (
        <div className="max-w-container mx-auto px-4">
          <NewArrivals items={items} />
          <BestSellers items={items} />
          <YearProduct />
          <SpecialOffers items={items} />
        </div>
      ) : (
        <div
          role="status"
          className="container mx-auto animate-pulse flex my-4 gap-4"
        >
          <div className="flex-col w-1/3">
            <div className="h-44 bg-gray-200 rounded-lg dark:bg-gray-700  mb-4"></div>
            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
            <span className="sr-only">Loading...</span>
          </div>
          <div className="flex-col w-1/3">
            <div className="h-44 bg-gray-200 rounded-lg dark:bg-gray-700  mb-4"></div>
            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
            <span className="sr-only">Loading...</span>
          </div>
          <div className="flex-col w-1/3">
            <div className="h-44 bg-gray-200 rounded-lg dark:bg-gray-700  mb-4"></div>
            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full mb-2.5"></div>
            <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-700 mb-2.5"></div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="chatbot-icon" onClick={() => window.chatbase?.open()}>
      </div>
    </div>
  );
};

export default Home;
