import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    name,
    locality,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100  hover:bg-gray-200  ">
      <img
        className="rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{locality}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <span className="w-6 p-1 mr-1 bg-green-400 border rounded-xl">
        🌟 {avgRating}
      </span>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
