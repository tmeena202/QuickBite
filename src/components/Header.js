import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // console.log("Header");

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //subscribing to store using selector.
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img className="h-32 w-32 min-h-32 min-w-32 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">
            Net. Status: {onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4 text-lg">
            <Link to={"/instmart"}>InstaMart</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="p-2 rounded-lg border border-solid bg-red-400"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
          <li className="px-4 text-lg font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
