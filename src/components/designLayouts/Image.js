import React from "react";

const Image = ({ imgSrc, className }) => {
  return (
    <img
      className={className}
      src={imgSrc}
      alt={imgSrc}
      width={"100%"}
      height="30%"
    />
  );
};

export default Image;
