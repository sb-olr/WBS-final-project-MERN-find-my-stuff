import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import addnew from "../Assets/AddNew.png";
import AddNewSpace from "./NewSpace";

const Spaces = ({ spaces, setSpaces }) => {
  const [showAddNewSpace, setShowAddNewSpace] = useState(false);
  const navigate = useNavigate();

  const handleAddNewSpaceClick = () => {
    navigate("/spaces/new");
    // navigate("/AddNewSpace", {
    //   state: setSpaces,
    // });
    //setShowAddNewSpace(true)
  };
  console.log(spaces, "spaces");

  // useEffect(
  //   {
  //     //here need to post api and get all spaces
  //   },
  //   []
  // );
  return (
    <div
      name="spaces"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 pt-1 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <h4 className="text-4xl py-6  font-bold border-b-4 border-gray-500  p-2 inline">
            Spaces
          </h4>
        </div>
        {showAddNewSpace ? (
          <AddNewSpace
            spaces={spaces}
            setSpaces={setSpaces}
            setShowAddNewSpace={setShowAddNewSpace}
          />
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py08 px-12 pt-5 sm:px-0">
            {spaces &&
              spaces.map(({ id, src, title, style }) => (
                <Link key={id} to={`/spaces/${id}`}>
                  <div
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center w-40`}
                  >
                    <img src={src} alt={title} className="w-20" />
                    <p className="mt-4 text-white">{title}</p>
                  </div>
                </Link>
              ))}
            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center w-40 hover:cursor-pointer ${
                spaces?.slice(-1)[0]?.style
              }`}
              onClick={handleAddNewSpaceClick}
            >
              <img src={addnew} alt="Add New Space" className="w-20 mx-auto" />
              <p className="mt-4 text-white">New Space</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spaces;
