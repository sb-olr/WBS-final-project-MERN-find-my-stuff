import React, { useState, useEffect } from "react";
import addnew from "../Assets/AddNew.png";
import { useItems } from "../context/useContext";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import useAuth from "../hooks/useAuth.js";

const Items = () => {
  const { token } = useAuth();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { term } = useParams();

  useEffect(() => {
    let params = {};
    if (term) {
      params = {
        term: term,
      };
    }

    axios
      .get(process.env.REACT_APP_API_URL + "/items/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: params,
      })
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      name="itemsindex"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-16 min-h-screen "
    >
      {/* <div className="max-w-screen-lg mx-auto p-4 pt-5 flex flex-col justify-center w-full h-full text-white"> */}
      <div className="w-3/4 mx-auto p-4 mt-10 flex flex-col text-white">
        <div
          className={`shadow-md hover:scale-105 duration-500 rounded-full shadow-yellow-500 flex flex-col items-center mx-6 w-32 my-16" hover:cursor-pointer ${
            items?.slice(-1)[0]?.style
          }`}
          onClick={() => navigate("/items/new")}
        >
          <img
            src={addnew}
            alt="Add New Item"
            className="w-18 h-18 mx-auto object-cover"
          />
          <p className="mb-4 mt-3 text-white">New Item</p>
        </div>

        {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py08 px-12 pt-2 sm:px-0 "> */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 text-center py-8 px-4 pt-5 sm:px-0">
          {items &&
            items.map(({ id, src, name, style }) => (
              <div
                key={id}
                //   className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center w-40`}
                // >
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center`}
              >
                <div>
                  <Link
                    to={"/items/" + id}
                    className="no-underline hover:no-underline"
                  >
                    <img
                      src={src}
                      alt=""
                      className="flex flex-col items-center w-18 mx-auto"
                    />
                    <p className="mt-4 text-white">{name}</p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Items;
