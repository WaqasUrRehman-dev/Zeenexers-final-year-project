import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation();
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs
        title="Welcome to Zeenexers – Your Premier Destination for Shopping Across Pakistan!"
        prevLocation={prevLocation}
      />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          At{" "}
          <span className="text-primeColor font-semibold text-lg">
            ZeeNexers
          </span>{" "}
          we are dedicated to providing you with a seamless and enjoyable
          shopping experience. As a leading e-commerce platform in Pakistan, we
          offer a diverse range of high-quality products delivered right to your
          doorstep.
          <br />
          <br />
          Our mission is to bring convenience, choice, and exceptional value to
          our customers. From the latest gadgets and stylish apparel to home
          essentials and unique gifts, Zeenexers has something for everyone.
          With our commitment to excellent customer service, secure
          transactions, and fast delivery, we ensure that your shopping
          experience is not just satisfying but also enjoyable.
          <br />
          <br />
          Explore our extensive catalog and discover the best products Pakistan
          has to offer, all from the comfort of your home. Thank you for
          choosing Zeenexers – where quality meets convenience.
          <br />
          <br />
          Happy shopping!
        </h1>
        <br />
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
