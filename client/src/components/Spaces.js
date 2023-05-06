import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import addnew from "../Assets/AddNew.png";
import axios from "axios";
import useAuth from "../hooks/useAuth.js";

const Spaces = () => {
  const { token } = useAuth();
  const [spaces, setSpaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/spaces/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSpaces(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-10">
        <div className="w-3/4 mx-auto p-4 flex flex-col text-white">
          <div
            className={`shadow-md hover:scale-105 duration-500 rounded-full shadow-blue-800 flex flex-col items-center mx-6 w-32 my-16 ${
              spaces?.slice(-1)[0]?.style
            }`}
            onClick={() => navigate("/spaces/new")}
          >
            <img
              src={addnew}
              alt="Add New Space"
              className="w-18 h-18 mx-auto object-cover"
            />
            <p className="mb-4 mt-3 text-white">New Space</p>
          </div>
          {/* <div>
            <h4 className="text-4xl py-6 font-bold border-b-4 border-gray-500  p-2 inline">
              Spaces
            </h4>
          </div> */}
          {/* 
          <div
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center w-40 hover:cursor-pointer ${
              spaces?.slice(-1)[0]?.style
            }`}
            onClick={() => navigate("/spaces/new")}
          >
            <img
              src={addnew}
              alt="Add New Space"
              className="w-20 h-20 mx-auto object-cover"
            />
            <p className="mt-4 text-white">New Space</p>
          </div> */}

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 text-center py-8 px-4 pt-5 sm:px-0">
            {spaces &&
              spaces.map(({ id, src, name, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-blue-800 flex flex-col items-center`}
                >
                  <div>
                    <Link
                      to={`/spaces/details/${id}`}
                      className="no-underline hover:no-underline"
                    >
                      {/* <img src={src} alt={name} className="w-20 h-20" /> */}
                      <p className="mt-4 text-white">{name}</p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Spaces;
