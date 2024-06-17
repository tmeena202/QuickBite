import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log(data);

  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-7/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
