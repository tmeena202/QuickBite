import React from "react";

const InstaMartHead = ({ slaString }) => {
  // console.log(slaString);
  return (
    <div className=" border border-gray-300  bg-orange-100  rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-orange-500 text-white rounded-md h-[40px] w-[40px] flex items-center justify-center p-1 font-bold">
          {slaString ? slaString : "7 min"}
        </div>
        <div className="text-gray-700 font-semibold">User</div>
      </div>
      <div>
        <input
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          type="text"
          placeholder="Search for items..."
        />
      </div>
    </div>
  );
};

export default InstaMartHead;
