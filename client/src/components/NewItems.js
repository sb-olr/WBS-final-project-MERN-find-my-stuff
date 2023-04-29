import React, { useState } from "react";
import { useItems } from "../context/useContext";
import Items from "./Items";

const AddNewItem = () => {
  const { setItems, items } = useItems();
  const [newItem, setNewItem] = useState({
    fileupload: "",
    itemname: "",
    spacename: "",
    quantity: 0,
    price: 0,
    description: "",
    owner: "",
  });

  // Handle changes to the file input field
  const handleInputChange = (event) => {
    event.preventDefault();
    setNewItem({
      ...newItem,
      [event.target.name]: [event.target.value],
    });
  };
  console.log(newItem);
  // console.log(newItem.spacename);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
  };

  // Use effect hook to log the selected file name when it changes
  // // useEffect(() => {
  // //   console.log(selectedFile?.name);
  // }, [newItem]);
  return (
    <>
      <div
        name="spaces"
        className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex items-center justify-center"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-[0] ml-40 mr-40">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="upload-photo"
                    className="block text-sm pt-10 font-medium leading-6 text-white"
                  >
                    Add New Item
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
                          {/* <span>
                            {selectedFile?.name
                              ? selectedFile?.name
                              : `Upload a
                                file`}
                          </span> */}

                          <span>Upload a file</span>
                          <input
                            onChange={handleInputChange}
                            value={newItem.fileupload}
                            id="fileupload"
                            name="fileupload"
                            type="file"
                            className="sr-only"
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
                <input
                  name="itemname"
                  onChange={handleInputChange}
                  value={newItem.itemname}
                  type="text"
                  class="form-control"
                  id="inputSpaces"
                  placeholder="item name"
                />
              </div>
            </div>

            <div class="bg-white  text-gray-600 rounded-lg p-8 shadow-md mt-8 ml-40 mr-40">
              <h4>Item Details</h4>
              <form class="row g-3">
                <div class="col-md-5">
                  <label for="inputSpaces" class="form-label">
                    Spaces
                  </label>
                  <select
                    onChange={handleInputChange}
                    value={newItem.spacename}
                    name="spacename"
                    type="text"
                    class="form-control"
                    id="inputSpaces"
                    placeholder="Space name"
                  >
                    <option> Kitchen</option>
                    <option>Office</option>
                    <option>Closet</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputQuantity" class="form-label">
                    Quantity
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={newItem.quantity}
                    name="quantity"
                    type="number"
                    class="form-control"
                    id="inputQuantity"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputPrice" class="form-label">
                    Price
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={newItem.price}
                    name="price"
                    type="price"
                    class="form-control"
                    id="inputPrice"
                    placeholder="Price"
                  />
                </div>
                <div class="col-12">
                  <label for="inputDescription" class="form-label">
                    Description
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={newItem.description}
                    name="description"
                    type="text"
                    class="form-control"
                    id="inputDescription"
                    placeholder="Item description"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputDate" class="form-label">
                    Date
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={newItem.date}
                    name="date"
                    type="date"
                    class="form-control"
                    id="inputDate"
                  />
                </div>

                <div class="col-md-6">
                  <label for="inputOwner" class="form-label">
                    Owner
                  </label>
                  <input
                    onChange={handleInputChange}
                    value={newItem.owner}
                    name="owner"
                    type="text"
                    class="form-control"
                    id="inputOwner"
                    placeholder="Item owner"
                  />
                </div>
                <div className="col-12">
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="btn btn-primary px-8 bg-gradient-to-b from-green-900 to-green-800"
                  >
                    Save
                  </button>
                  <span style={{ margin: "0 30px" }}></span>
                  <button
                    onSubmit={handleSubmit}
                    type="submit"
                    className="btn btn-primary px-6 bg-gradient-to-b from-red-900 to-red-800"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddNewItem;
