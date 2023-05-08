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
        <div className="w-3/4 mx-auto p-4 flex flex-col text-white ">
          <div
            className={`shadow-md hover:scale-105 duration-500 rounded-full shadow-blue-800 flex flex-col items-center mx-6 w-40 my-16 ${
              spaces?.slice(-1)[0]?.style
            }`}
            onClick={() => navigate("/spaces/new")}>
              
            {<i aria-hidden="true" className="add big icon text-blue-400 pt-2 "></i>}
            <p className="mb-4 mt-3 text-white">New Space</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 text-center py-8 px-4 pt-5 sm:px-0">
            {spaces &&
              spaces.map(({ id, img_url, name, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-blue-800 flex flex-col items-center`}
                >
                  <div>
                    <Link
                      to={`/spaces/details/${id}`}
                      className="no-underline hover:no-underline"
                    >
                      {<i aria-hidden="true" className={img_url + " big icon"}></i>}
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
