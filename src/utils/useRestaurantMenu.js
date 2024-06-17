// We want to make Custom Hooks
// to make code more Modular, Abstract, Readable, etc

import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurnatMenu = (resId) => {
  // fetch API with useEffect

  const [resInfo, setResInfo] = useState(null);

  useEffect((resId) => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // data = {....}
    const data = await fetch(MENU_API + resId);
    // json = {...}
    const json = await data.json();
    // console.log("Menu API:", json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurnatMenu;
