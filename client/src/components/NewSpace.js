import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddNewSpace = () => {
  const navigate = useNavigate();

  const nameRef = useRef();

  const handleSubmit = (event) => {
    //here you need to take the information from your form
    //and do a post request to the api to creat e a new space
    event.preventDefault();
    const { data } = axios.post("/api/spaces/", {
      name: nameRef.current.value,
    });

    navigate("/spaces");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/spaces");
  };

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
