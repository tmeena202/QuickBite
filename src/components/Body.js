import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  // console.log("Body Rendered");

  // console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.652&lng=77.1663&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // console.log(data);
    const json = await data.json();
    //console.log("Restaurant API : \n", json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // online offline status Code
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return <h2>Looks like your internet Connection is lost !!!</h2>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-orange-100">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <div className="search m-1 p-3">
            <input
              type="text"
              className="border border-solid border-black "
              onChange={(e) => {
                setSearchText(e.target.value);
                // console.log(e.target.value);
              }}
              value={searchText}
            />
            <button
              onClick={() => {
                console.log(searchText);

                const filteredRestaurant = listOfRestaurants.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });

                setFilteredRestaurant(filteredRestaurant);
              }}
              className="px-4 bg-green-100 m-4 rounded-lg"
            >
              Search
            </button>
          </div>
          <button
            onClick={() => {
              console.log(listOfRestaurants);

              const filteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 4.5;
              });
              setFilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
            className="px-4  bg-gray-200 rounded-lg"
          >
            Top Rated Restaurants
          </button>
          <div className="search m-4 p-4 flex items-center">
            <label className="">UserName: </label>
            <input
              className="border border-black"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {!filteredRestaurants ? (
          <h3>No restaurant present SORRY !! </h3>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
