import React from "react";
import item from "../Assets/add-item.png";
import file from "../Assets/file.png";
import takephoto from "../Assets/take-a-photo.png";
import easyentry from "../Assets/survey.png";

const Features = () => {
  const features = [
    {
      id: 1,
      src: item,
      title: "Easy to add items",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: file,
      title: "Quck Search",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: takephoto,
      title: "Easy Upload",
      style: "shadow-yellow-500",
    },

    {
      id: 4,
      src: easyentry,
      title: "Easy Entry",
      style: "shadow-blue-600",
    },
  ];

  return (
    <div
      name="feature"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h4 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Features
          </h4>
          <p className="py-6">We offer you a smooth experience </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py08 px-12 sm:px-0">
          {features.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;
