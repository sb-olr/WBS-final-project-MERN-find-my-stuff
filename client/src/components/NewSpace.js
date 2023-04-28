import React, { useState,useEffect } from "react";
// import { useLocation } from "react-router-dom";

const AddNewSpace = ({ spaces, setSpaces, setShowAddNewSpace }) => {
  const [selectedFile, setSelectedFile] = useState({});

  // const { state } = useLocation();

  const handleFileChange = (event) => {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
        // setSpaces(selectedFile);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle file upload here
    // console.log(selectedFile);
    // setSpaces([{
    //   id: 1,
    //   src: closet,
    //    title: "Closet",
    //    style: "shadow-yellow-500",
    // }],);
    // setShowAddNewSpace(false);

  };

  useEffect(()=>{
console.log(selectedFile?.name)
  },[selectedFile])
  
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
                      <label
                        htmlFor="upload-photo"
                        className="block text-sm pt-20 font-medium leading-6 text-white"
                      >
                        Add New Space
                      </label>
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 ">
                        <div className="text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-300"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              // htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>
                                {selectedFile?.name
                                  ? selectedFile?.name
                                  : `Upload a
                                file`}
                              </span>

                              <input
                                // id="file-upload"
                                // name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop </p>
                          </div>
                          <p class="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div class="col-md-4">
                    <label for="inputSpaces" class="form-label">
                      Space
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputSpaces"
                      placeholder="space name"
                    />
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-end gap-x-2">
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    class="text-white bg-gradient-to-b from-green-900 to-green-800 px-8 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                  >
                    Save
                  </button>
                  <button
                    onSubmit={handleSubmit}
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
