import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import deleteIcon from "../Assets/delete.png";
import editIcon from "../Assets/editicons.png";
import axios from "axios";
import useAuth from "../hooks/useAuth.js";

export default function SpaceDetails() {
  const { id } = useParams();
  const { token } = useAuth();
  const [items, setItems] = useState([]);

  const [space, setSpace] = useState(null);
  const [spaceItems, setSpaceItems] = useState([]); // State for storing space items
  const navigate = useNavigate();

  const handleDeleteSpace = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this space?"
    );
    if (confirmed) {
      try {
        // Send a DELETE request to the server to delete the space
        await axios.delete(process.env.REACT_APP_API_URL + "/spaces/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Navigate to the "/spaces" route after  deletion
        navigate("/spaces");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    // Fetch the space details from the server
    axios
      .get(process.env.REACT_APP_API_URL + "/spaces/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSpace(data); // Update the space state with the fetched data
      })
      .catch((error) => console.error(error));

    // Fetch the space items from the server
    axios
      .get(process.env.REACT_APP_API_URL + "/items/spaces/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSpaceItems(data); // Update the space items state with the fetched data
      })
      .catch((error) => console.error(error));
  }, []);

 return (
   <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-10">
     <div className="w-3/4 mx-auto p-4 flex flex-col text-white relative">
       <div className="shadow-md hover:scale-105 duration-500 rounded-full shadow-blue-800 flex flex-col items-center pb-7 mx-6 w-48 my-16 ">
         {/* Display the space image and name */}
         <p className="mt-4 text-white my-7 py-2">
           {space && (
             <i
               aria-hidden="true"
               className={space.img_url + " big icon text-blue-400"}
             ></i>
           )}
           &nbsp;
           {space && space.name}
         </p>
       </div>
       <div className="flex justify-end absolute top-10 right-8 mt-5">
         {/* Link to edit the space */}
         <NavLink to={"/spaces/edit/" + id} className="mr-4">
           <button className="p-2 rounded-full bg-white-900 hover:bg-green-900">
             <img src={editIcon} alt="Edit" className="w-7 h-7" />
           </button>
         </NavLink>
         <button
           className="p-2 rounded-full bg-white-900 hover:bg-red-600"
           onClick={(e) => handleDeleteSpace(e)}
         >
           <img src={deleteIcon} alt="Delete" className="w-7 h-7" />
         </button>
       </div>
       <div className="flex flex-wrap justify-start -my-2">
         <div
           className={`shadow-md hover:scale-105 duration-500 rounded-full shadow-yellow-500 flex flex-col items-center mx-6 w-52 my-16 hover:cursor-pointer ${
             items?.slice(-1)[0]?.style
           }`}
           onClick={() => navigate("/items/new?space_id=" + id)}
         >
           <i
             aria-hidden="true"
             className="add big icon text-blue-400 pt-2"
           ></i>
           <p className="mb-4 mt-3 text-white">New Item</p>
         </div>
         {spaceItems &&
           spaceItems.map(({ id, name, img_url, space_id, quantity }) => (
             <div
               key={id}
               className="shadow-md hover:scale-105 duration-500 rounded-full shadow-yellow-500 flex flex-col items-center mx-6 w-52 my-16"
             >
               <Link
                 to={"/items/" + id + "?space_id=" + space_id}
                 className="no-underline hover:no-underline my-1"
               >
                 <i aria-hidden="true" className={img_url + " big icon"}></i>
                 <p className="mb-4 mt-3 text-center text-white">
                   {name}
                   <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
                     {quantity}
                   </span>
                 </p>
               </Link>
             </div>
           ))}
       </div>
     </div>
   </div>
 );
}
