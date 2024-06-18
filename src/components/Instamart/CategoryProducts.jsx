import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INSTAMART_IMAGE_URL } from "../../utils/constants";

const CategoryProducts = () => {
  const { categoryName, nodeId } = useParams();
  console.log(categoryName, nodeId);
  const [data, setData] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  useEffect(() => {
    if (data) {
      fetchCategoryProducts();
    }
  }, [data]);

  const fetchCategoryData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
      );
      const json = await response.json();
      console.log(json.data);
      setData(json.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const fetchCategoryProducts = async () => {
    try {
      const { storeId } = data;
      const { filterName } = data?.widgets[1]?.data[0];
      const response = await fetch(
        `https://www.swiggy.com/api/instamart/category-listing?categoryName=${categoryName}&storeId=${storeId}&offset=0&filterId=${"5f2c18a68ac42c7d7c3efef1"}&taxonomyType=All%20Listing`
      );
      const responseData = await response.json();
      console.log(responseData);
      setProducts(responseData.products);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };

  if (!data) {
    return <h1>Loading ....</h1>;
  }

  const {} = data;

  return (
    <div className="w-[1000px] mx-auto border border-black">
      <img src={INSTAMART_IMAGE_URL + imageId} alt="" />
      <h1>{categoryName}</h1>
    </div>
  );
};

export default CategoryProducts;
