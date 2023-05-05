import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const AddNewSpace = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const nameRef = useRef();
  const { id } = useParams();
  const [space, setSpace] = useState({
    name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let url = "/spaces/";
      if (id) {
        url += id;
        const response = await axios.put(
          process.env.REACT_APP_API_URL + url,
          {
            name: nameRef.current.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        const response = await axios.post(
          process.env.REACT_APP_API_URL + url,
          {
            name: nameRef.current.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      navigate("/spaces");
    } catch (error) {
      console.error(error);
    }

    navigate("/spaces");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/spaces");
  };

  useEffect(() => {
    if (id) {
      axios
        .get(process.env.REACT_APP_API_URL + "/spaces/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setSpace(data);
          nameRef.current.value = data.name;
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div>
      <div
        name="spaces"
        className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen "
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-[0] ml-40 mr-40">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      {/* <label
                        htmlFor="upload-photo"
                        className="block text-sm pt-20 font-medium leading-6 text-white"
                      >
                        Add New Space
                      </label> */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div class="col-md-4">
                    <label for="inputSpaces" class="form-label">
                      Name
                    </label>
                    <input
                      ref={nameRef}
                      name="spacename"
                      type="text"
                      class="form-control"
                      id="inputSpaces"
                      placeholder="space name"
                      // value={space.name}
                    />
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-2">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    class="text-white bg-gradient-to-b from-green-900 to-green-800 px-8 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    type="submit"
                    class="text-white bg-gradient-to-b from-red-900 to-red-800 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNewSpace;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AddNewSpace = ({ setSpaces }) => {
//   const navigate = useNavigate();
//   // const nameRef = useRef();
//   // const photoRef = useRef();

//   const [spacephoto, setSpacephoto] = useState("");
//   const [spacename, setSpacename] = useState("");

//   const handleSubmit = (event) => {
//     //here need to take the information from your form
//     //and do a post request to the api to creat e a new space
//     event.preventDefault();
//     const { data } = axios.post("localhost:8000/api/spaces/", {
//       // name: nameRef.current.value,
//       // photo: photoRef.current.value,
//       name: spacename,
//       photo: spacephoto,
//     });
//     setSpaces(data && data);

//     navigate("/spaces");
//   };

//   const handleCancel = (event) => {
//     event.preventDefault();
//     navigate("/spaces");
//   };

//   return (
//     <div>
//       <div
//         name="spaces"
//         className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen "
//       >
//         <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//           <div>
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-12">
//                 <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                   {/* <input
//                     id="img_url"
//                     name="img_url"
//                     type="file"
//                     className="sr-only"
//                   /> */}
//                   <div className="col-span-full">
//                     <div className="flex justify-center items-center">
//                       <div className="col-md-4 pt-20">
//                         <label htmlFor="inputPhoto" className="form-label">
//                           Photo
//                         </label>
//                         <input
//                           // ref={photoRef}
//                           name="spacephoto"
//                           type="file"
//                           accept="image/*"
//                           className="form-control"
//                           id="inputPhoto"
//                           value={spacephoto}
//                           onChange={(e) => setSpacephoto(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-center items-center">
//                   <div className="col-md-4">
//                     <label htmlFor="inputSpaces" className="form-label">
//                       Name
//                     </label>
//                     <input
//                       // ref={nameRef}
//                       name="spacename"
//                       type="text"
//                       className="form-control"
//                       id="inputSpaces"
//                       placeholder="space name"
//                       value={spacename}
//                       onChange={(e) => setSpacename(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-6 flex items-center justify-center">
//                   <button
//                     onClick={handleSubmit}
//                     type="submit"
//                     className="text-white bg-gradient-to-b from-green-900 to-green-800 px-8 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={handleCancel}
//                     type="submit"
//                     className="text-white bg-gradient-to-b from-red-900 to-red-800 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddNewSpace;
