import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // * this should only work after webpage is loaded - useEffect()
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
