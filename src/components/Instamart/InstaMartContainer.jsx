import React, { useState, useEffect } from "react";
import InstaMartHead from "./InstaMartHead";
import InstaMartBody from "./InstaMartBody";

const InstaMartContainer = () => {
  console.log("Rendered");
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("UseEffect called");
    getCategoryData();
  }, []);

  const getCategoryData = async () => {
    console.log("API called");
    try {
      const response = await fetch(
        "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
      );
      const json = await response.json();
      setData(json.data);
      console.log(json.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  if (!data) {
    console.log("UI loaded 1");
    return <h1>Loading ....</h1>;
  }

  const slaString = data.slaString;
  const categoriesInfo = data?.widgets?.[1]?.data;

  return (
    <div className="mx-auto w-[1000px]">
      {console.log("UI loaded 2")}
      <InstaMartHead slaString={slaString} />
      {categoriesInfo ? (
        <InstaMartBody categoriesInfo={categoriesInfo} />
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  );
};

export default InstaMartContainer;
