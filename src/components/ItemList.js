import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  // console.log(items);
  // console.log(dummy);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-black border-b-[1px] text-left flex"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold">{item.card.info.name}</span>
                <br></br>
                <span className="font-bold">
                  ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <br></br>
                <span className="text-green-400 rounded-xl p-1">
                  {" ⭐"} {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>
                <span>
                  (
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCount
                    ? item?.card?.info?.ratings?.aggregatedRating?.ratingCount
                    : "No Rating"}
                  )
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="p-2 mx-30 rounded-lg text-white bg-black shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                alt="No Image"
                src={CDN_URL + item?.card?.info?.imageId}
                className="mx-2 w-full h-5/6 rounded-sm"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
