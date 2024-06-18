import React from "react";
import { INSTAMART_IMAGE_URL } from "../../utils/constants";

const CategoryCard = ({ displayName, imageId }) => {
  return (
    <div className="w-[98px] h-[144px]">
      <img
        src={INSTAMART_IMAGE_URL + imageId}
        alt="image"
        className="w-[98px] h-[110px]"
      />
      <h3 className="text-sm font-bold">{displayName}</h3>
    </div>
  );
};

export default CategoryCard;
