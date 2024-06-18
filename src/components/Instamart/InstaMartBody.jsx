import React, { useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

function InstaMartBody({ categoriesInfo }) {
  console.log(categoriesInfo);

  const { displayName, imageId, nodeId } = categoriesInfo;

  return (
    <div>
      <div className="my-2 mx-2">Shop by Category</div>
      <div className="flex flex-wrap gap-7">
        {categoriesInfo.map((category) => (
          <Link
            to={`/category/${category.displayName}/${category.nodeId}`}
            key={category.nodeId}
          >
            <CategoryCard
              displayName={category.displayName}
              imageId={category.imageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InstaMartBody;
