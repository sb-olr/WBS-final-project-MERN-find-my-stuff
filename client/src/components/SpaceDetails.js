import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import deleteIcon from "../Assets/delete.png";
import editIcon from "../Assets/editicon.png";
import axios from "axios";
import useAuth from "../hooks/useAuth.js";

export default function SpaceDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  const [space, setSpace] = useState(null);
  const [spaceItems, setSpaceItems] = useState([]);
  const navigate = useNavigate();

  const handleDeleteSpace = async (spaceName) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this space?"
    );
    if (confirmed) {
      try {
        await axios.delete(process.env.REACT_APP_API_URL + "/spaces/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        navigate("/spaces");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/spaces/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSpace(data);
      })
      .catch((error) => console.error(error));

    axios
      .get(process.env.REACT_APP_API_URL + "/items/spaces/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSpaceItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-10">
      <div className="w-3/4 mx-auto p-4 flex flex-col text-white relative">
        <div className="shadow-md hover:scale-105 duration-500 rounded-full shadow-blue-800 flex flex-col items-center pb-7 mx-6 w-40 my-16 ">
         
          <p className="mt-4 text-white my-7">
            {space && (
              <i aria-hidden="true" className={space.img_url + " big icon text-blue-400"}></i>
            )}
            &nbsp;
            {space && space.name}
          </p>
        </div>
        <div className="flex justify-end absolute top-10 right-4 mt-5">
          <NavLink to={"/spaces/edit/" + id} className="mr-4">
            <button className="p-2 rounded-full bg-white-900 hover:bg-green-900">
              <img src={editIcon} alt="Edit" className="w-7 h-7" />
            </button>
          </NavLink>
          <button
            className="p-2 rounded-full bg-white-900 hover:bg-red-600"
            onClick={() => handleDeleteSpace(space && space.name)}
          >
            <img src={deleteIcon} alt="Delete" className="w-7 h-7" />
          </button>
        </div>
        <h3>Items in Space</h3>
        {spaceItems &&
          spaceItems.map(({ id, name }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 rounded-full shadow-yellow-500 flex flex-col items-center mx-6 px-10 w-40 my-16"
            >
              <Link
                to={"/items/" + id}
                className="no-underline hover:no-underline my-2"
              >
                <p className="mb-4 mt-3 text-center text-white">{name}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
