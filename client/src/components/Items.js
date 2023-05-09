import React, { useState, useEffect } from "react";
// import addnew from "../Assets/AddNew.png";
// import { useItems } from "../context/useContext";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import useAuth from "../hooks/useAuth.js";

const Items = () => {
  const { token } = useAuth();
  const [items, setItems] = useState([]); 
  const navigate = useNavigate();
  const { term } = useParams(); // Get the search term from the URL parameter

  let action = "list";
  if (term) {
    action = "search";
  }

  useEffect(() => {
    let params = {};
    if (action === "search") {
      params = {
        term: term,
      };
    }

    axios
      .get(process.env.REACT_APP_API_URL + "/items/all", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
        params: params, // Include the search term as a query parameter for searching
      })
      .then(({ data }) => {
        setItems(data); // Update the items state with the response data
      })
      .catch((error) => console.error(error));
  }, [term]); // Trigger the effect whenever the search term changes                  

  return (
    <div
      name="itemsindex"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-16 min-h-screen "
    >
      <div className="w-3/4 mx-auto p-4 mt-10 flex flex-col text-white">
        <div
          className={`shadow-md hover:scale-105 duration-500 rounded-full shadow-yellow-500 flex flex-col items-center mx-6 w-40 my-16" hover:cursor-pointer ${
            items?.slice(-1)[0]?.style
          }`}
          onClick={() => navigate("/items/new")}
          style={{ marginBottom: "2rem" }} // Added margin-bottom
        >
          {
            <i
              aria-hidden="true"
              className="add big icon text-blue-400 pt-2"
            ></i>
          }
          <p className="mb-4 mt-3 text-white">New Item</p>
        </div>

        <h1 className="ml-5">
          {action === "list" ? "All Items" : "Search " + term}
        </h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 text-center py-8 px-4 pt-5 sm:px-0">
          {items &&
            items.map(({ id, img_url, name, style }) => (
             <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center`}
              >
                 <div>
                  <Link
                    to={"/items/" + id}
                    className="no-underline hover:no-underline"
                  >
                    {
                      <i
                        aria-hidden="true"
                        className={img_url + " big icon"}
                      ></i>
                    }

                    <p className="mt-4 text-white">{name}</p>
                  </Link>
                </div>
              </div>
            ))}
            {!items.length &&
            (<div>
                <p>Item not found</p>
                </div>)
            }
        </div>
      </div>
    </div>
  );
};
export default Items;
