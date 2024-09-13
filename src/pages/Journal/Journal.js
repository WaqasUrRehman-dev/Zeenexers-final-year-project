import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation();
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Terms of Services" prevLocation={prevLocation} />
      <div className="pb-10">
        {/* Acceptance of terms */}
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-6">
          <span className="text-primeColor font-bold text-xl">
            Acceptance of Terms
          </span>
          <br />
          <br />
          By accessing and using the Site, you agree to comply with and be bound
          by these Terms and any other applicable laws or regulations. We
          reserve the right to change these Terms at any time without prior
          notice. Changes will be effective upon posting on the Site, and your
          continued use of the Site constitutes your acceptance of any changes.
        </h1>

        {/* Product and Services */}
        <span
          className="text-primeColor font-bold text-xl ml-6"
          id="product-and-services"
        >
          Product and Services
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg">
            Product Infomation
          </span>
          <br />
          <br />
          We strive to ensure that product information, including descriptions
          and prices, is accurate and up-to-date. However, we do not warrant
          that product descriptions or other content is accurate, complete,
          reliable, or error-free.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Availability
          </span>
          <br />
          <br />
          All products and services are subject to availability. We reserve the
          right to limit quantities and may not always have items in stock.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Pricing
          </span>
          <br />
          <br />
          Prices for products are subject to change without notice. Taxes and
          shipping costs are additional and will be displayed at checkout.
        </h1>

        {/* Order and Payment */}
        <span
          className="text-primeColor font-bold text-xl ml-6"
          id="order-and-payment"
        >
          Order and Payment
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Order and Process
          </span>
          <br />
          <br />
          To place an order, select the product you want to purchase, add them
          to your cart, and proceed to checkout. You will be required to provide
          payment and shopping information.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Payment
          </span>
          <br />
          <br />
          We accept various payment methods including [list payment methods,
          e.g., credit/debit cards, online payment gateways]. Payment is
          processed securely. You agree to provide accurate and complete payment
          information.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Order Confirmation
          </span>
          <br />
          <br />
          After placing an order, you will receive an email confirmation with
          the details of your order. This email does not constitute acceptance
          of your order but confirms that we have received it.
        </h1>

        {/* Shipping and Delivery */}
        <span
          className="text-primeColor font-bold text-xl ml-6"
          id="shipping-and-delivery"
        >
          Shipping and Delivery
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Shipping
          </span>
          <br />
          <br />
          We offer shipping across Pakistan. Delivery times vary depending on
          your location and the shipping method selected. Estimated delivery
          times will be provided at checkout.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Delivery Issues
          </span>
          <br />
          <br />
          If you experience issues with delivery, please contact our customer
          service team for assistance. We are not responsible for delays caused
          by third-party carriers or factors outside our control.
        </h1>

        {/* Returns and Refund*/}
        <span
          className="text-primeColor font-bold text-xl ml-6"
          id="returns-and-refund"
        >
          Returns and Refund
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Return Policy
          </span>
          <br />
          <br />
          You may return products within [insert number] days of receipt for a
          refund or exchange. Products must be in their original condition and
          packaging. Some items may be non-returnable due to hygiene or other
          reasons.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Refund Request via WhatsApp
          </span>
          <br />
          <br />
          To initiate a refund, please contact us via WhatsApp at [+92 321
          1001475]. Include the following details in your message:
        </h1>
        <div className="ml-16 mb-8">
          <ul className="list-disc">
            <li>Customer Name</li>
            <li>Customer Number</li>
            <li>Product's to be Returned</li>
            <li>Reason for Return</li>
            <li>Photos of the Product (If Applicable)</li>
            <li>Permanent Address</li>
          </ul>
        </div>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Refund Processing
          </span>
          <br />
          <br />
          Once we receive your refund request, we will process it within [insert
          number] days. Refunds will be issued to the original payment method.
          If the return is due to our error, we will also cover the shipping
          costs.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Valid Reason to Return a Product
          </span>
          <br />
          <br />
          <div className="pl-6 mb-8">
            <ul className="list-disc">
              <li>
                The product is physically damaged or has a manufacturing defect
                that makes it unusable.
              </li>
              <li>
                The product received is not the same as what was ordered (e.g.,
                wrong size, color, model)
              </li>
              <li>
                The product does not match the description or images provided on
                the website
              </li>
              <li>
                The product arrived without essential parts or accessories that
                were supposed to be included.
              </li>
              <li>
                The product arrived without essential parts or accessories that
                were supposed to be included.
              </li>
            </ul>
          </div>
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Non-Valid Reason to Return a Product
          </span>
          <br />
          <br />
          <div className="pl-6 mb-8">
            <ul className="list-disc">
              <li>
                Simply deciding you no longer want the product without a valid
                reason is often not a valid reason for a return.
              </li>
              <li>
                Damaging or using the product in a manner not intended by the
                manufacturer, leading to issues, is not valid for a return.
              </li>
              <li>
                Normal wear and tear or deterioration from regular use is not a
                valid reason for a return.
              </li>
              <li>
                Returning a product because it does not perform as expected
                due to incorrect or improper usage not covered by the return
                policy
              </li>
            </ul>
          </div>
        </h1>

        {/* Account Management */}
        <span className="text-primeColor font-bold text-xl ml-6">
          Account Management
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Account Creation
          </span>
          <br />
          <br />
          To access certain features of the Site, you may need to create an
          account. You are responsible for maintaining the confidentiality of
          your account information and for all activities under your account.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Account Security
          </span>
          <br />
          <br />
          Notify us immediately if you suspect any unauthorized use of your
          account. We are not liable for any loss or damage arising from your
          failure to protect your account information.
        </h1>

        {/* User Conduct*/}
        <span className="text-primeColor font-bold text-xl ml-6">
          User Conduct
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Prohibited Activities
          </span>
          <br />
          <br />
          You agree not to use the Site for any unlawful purpose or engage in
          any activity that may damage, disable, or impair the Site or interfere
          with other users’ access.
        </h1>

        {/* Intellectual Property */}
        <span className="text-primeColor font-bold text-xl ml-6">
          Intellectual Property
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Ownership
          </span>
          <br />
          <br />
          All content and materials on the Site, including but not limited to
          text, images, logos, and software, are the property of Zeenexers or
          its licensors and are protected by intellectual property laws.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Use of Material
          </span>
          <br />
          <br />
          You may not reproduce, distribute, or use any content from the Site
          without our prior written permission.
        </h1>

        {/* Limitation of Liability */}
        <span
          className="text-primeColor font-bold text-xl ml-6"
          id="limitation-of-liability"
        >
          Limitation of Liability
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Disclaimer
          </span>
          <br />
          <br />
          The Site and its content are provided "as is" without warranties of
          any kind, either express or implied. We do not guarantee that the Site
          will be uninterrupted or error-free.
        </h1>

        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          <span className="text-primeColor font-semibold text-lg ">
            Liability
          </span>
          <br />
          <br />
          To the fullest extent permitted by law, Zeenexers will not be liable
          for any indirect, incidental, special, or consequential damages
          arising from your use of the Site or products purchased through the
          Site.
        </h1>

        {/* Indemnification*/}
        <span className="text-primeColor font-bold text-xl ml-6">
          Indemnification
        </span>
        <br />
        <br />
        <h1 className="max-w-[600px] text-base text-lightText mb-8 ml-10">
          You agree to indemnify and hold harmless Zeenexers, its affiliates,
          and their respective officers, directors, employees, and agents from
          any claims, liabilities, damages, losses, or expenses arising out of
          your use of the Site or violation of these Terms.
        </h1>
      </div>
    </div>
  );
};

export default Journal;
