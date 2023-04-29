import React from "react";
// import Footer from "./Footer";
import closet from "../Assets/hanger.png";
import office from "../Assets/office-supplies.png";
import addnew from "../Assets/AddNew.png";

const Items = () => {
  const itemsindex = [
    {
      id: 1,
      src: closet,
      title: "Closet",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: office,
      title: "Office",
      style: "shadow-blue-500",
    },
  

    {
      id: 3,
      src: addnew,
      title: "New Item",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div
      name="itemsindex"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-5 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <h4 className="text-4xl py-6 font-bold border-b-4 border-gray-500 p-2 inline">
            Items
          </h4>
        </div>

        <div className="flex justify-end">
          <h4 className="text-4xl py-6 font-bold border-b-4 border-gray-500 p-2 inline">
            Filter
          </h4>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py08 px-12 pt-5 sm:px-0">
          {itemsindex.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Items;
