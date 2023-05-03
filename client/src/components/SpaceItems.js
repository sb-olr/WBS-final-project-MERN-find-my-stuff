import React from 'react';
// import closet from "../Assets/hanger.png";
// import addnew from "../Assets/AddNew.png";

export default function SpaceItems() {
  const itemsindex = [
     {
      id: 1,
      // src: closet,
      title: "Closet",
      style: "shadow-yellow-500",
    },
    // {
    //   id: 3,
    //   src: addnew,
    //   title: "New Item",
    //   style: "shadow-blue-600",
    // },
  ];
  return (
    <div>
      <div
        name="spaces"
        className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20 "
      >
        <div className="max-w-screen-lg mx-auto p-4 pt-1 flex flex-col text-white">
          <div>
            <h4 className="text-4xl py-6  font-bold border-b-4 border-gray-500 p-2 inline">
              Spaces Items
            </h4>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 pt-5 sm:px-0">
              {itemsindex.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full ${style}`}
                >
                  <img src={src} alt={title} />
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}