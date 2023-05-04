import React from "react";
// import closet from "../Assets/hanger.png";
import addnew from "../Assets/AddNew.png";
// import ItemsCards from "./itemsCards";
import { useItems } from "../context/useContext";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import AddNewItem from "./NewItems";

const Items = () => {
  const { items } = useItems();
  const itemsindex = [
    // {
    //   id: 1,
    //   src: closet,
    //   title: "Closet",
    //   style: "shadow-yellow-500",
    // },
    {
      id: 3,
      src: addnew,
      title: "New Item",
      style: "shadow-blue-600",
    },
  ];
  // const navigate= useNavigate
  // const handleAddNewItemClick = () => {
  //   // Navigate to the "NewSpace" component
  //   // navigate("/items/newitem");
  //   // navigate("/AddNewSpace", {
  //   //   state: setSpaces,
  //   // });
  //   //setShowAddNewSpace(true)
  // };
  console.log(items);

  return (
    <div
      name="itemsindex"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-16 min-h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-5 flex flex-col justify-center w-full h-full text-white">
        {/* <div className="text-center">
          <h4 className="text-4xl py-6 pt-8 font-bold border-b-4 border-gray-500 p-2 inline">
            Items
          </h4>
        </div> */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py08 px-12 pt-2 sm:px-0 ">
          {itemsindex.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center w-40`}
            >
              {id === 3 ? ( // Check if the current item is "New Item"
                <div>
                  <Link
                    to="/AddNewItem"
                    className="no-underline hover:no-underline"
                  >
                    {/* Wrap the image and text in a Link */}

                    <img
                      src={src}
                      alt=""
                      className="flex flex-col items-center w-20 mx-auto"
                    />
                    <p className="mt-4 text-white">{title}</p>
                  </Link>
                </div>
              ) : (
                <>
                  <img
                    src={src}
                    alt=""
                    // className="mx-auto flex flex-col items-center w-40"
                    className="w-20 mx-auto"
                  />
                  <p className="mt-4 text-white">{title}</p>
                </>
              )}
            </div>
          ))}
          {/* <div>
            {items.map((item) => (
              <ItemsCards item={item} />
            ))}
          </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Items;
