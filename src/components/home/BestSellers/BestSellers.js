import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = ({ items }) => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id={items[2].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[2].iden}`}
          productName={items[2].name}
          price={items[2].price}
          color={items[2].colors}
          badge={true}
          des={items[2].description}
          category={items[2].categories}
        />
        <Product
          _id={items[3].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[3].iden}`}
          productName={items[3].name}
          price={items[3].price}
          color={items[3].colors}
          badge={true}
          des={items[3].description}
          category={items[3].categories}
        />
        <Product
          _id={items[5].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[5].iden}`}
          productName={items[5].name}
          price={items[5].price}
          color={items[5].colors}
          badge={false}
          des={items[5].description}
          category={items[5].categories}
        />
        <Product
          _id={items[6].iden}
          img={`https://mathematical-lavinia-survivor.koyeb.app/products/image/${items[6].iden}`}
          productName={items[6].name}
          price={items[6].price}
          color={items[6].colors}
          badge={true}
          des={items[6].description}
          category={items[6].categories}
        />
      </div>
    </div>
  );
};

export default BestSellers;
