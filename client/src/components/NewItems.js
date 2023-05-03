import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useItems } from "../context/useContext";
// import axios from "axios";

const AddNewItem = () => {
  const navigate = useNavigate();

  const { setItems, items } = useItems();
  const [newItem, setNewItem] = useState({
    img_url: "",
    name: "",
    space_id: "",
    quantity: 0,
    value: 0,
    description: "",
    owner: "",
  });

  //     function fetchdata() {
  // const response= fetch('abc').then(data => data.json());
  // setNewItem({
  // spacename: response.spacename
  // })
  // }
  // Handle changes to the file input field
  const handleInputChange = (event) => {
    event.preventDefault();
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };
  console.log(newItem.img_url.substring(12));
  // console.log(newItem.spacename);

  // Handle form submission

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems(...items, newItem);
    navigate("/items");
  };
  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/items");
  };
  // console.log(items);
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
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* <input
                id="img_url"
                name="img_url"
                type="file"
                className="sr-only"
              /> */}
              <div className="col-span-full">
                <div className="flex justify-center items-center">
                  <div className="col-md-4 pt-20">
                    <label htmlFor="inputPhoto" className="form-label">
                      Photo
                    </label>
                    <input
                      // ref={img_urlRef}
                      name="spacephoto"
                      type="file"
                      accept="image/*"
                      className="form-control"
                      id="inputPhoto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div class="col-md-4">
                <label htmlFor="inputSpaces" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  onChange={handleInputChange}
                  value={newItem.name}
                  type="text"
                  class="form-control"
                  id="inputSpaces"
                  placeholder="item name"
                />
              </div>
            </div>

            <div class="bg-white  text-gray-600 rounded-lg p-8 shadow-md mt-8 ml-40 mr-40">
              <h4>Item Details</h4>
              <form onSubmit={handleSubmit} class="row g-3">
                <div class="col-md-5">
                  <label for="inputSpace_id" class="form-label">
                    Spaces
                  </label>
                  <select
                    onChange={handleInputChange}
                    // ref={space_idRef}
                    value={newItem.space_id}
                    name="space_id"
                    type="text"
                    class="form-control"
                    id="inputSpace_id"
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
                    // ref={quantityRef}
                    value={newItem.quantity}
                    name="quantity"
                    type="number"
                    class="form-control"
                    id="inputQuantity"
                  />
                </div>
                <div class="col-md-4">
                  <label for="inputValue" class="form-label">
                    Value
                  </label>
                  <input
                    onChange={handleInputChange}
                    // ref={valueRef}
                    value={newItem.value}
                    name="value"
                    type="value"
                    class="form-control"
                    id="inputValue"
                    placeholder="value"
                  />
                </div>
                <div class="col-12">
                  <label for="inputDescription" class="form-label">
                    Description
                  </label>
                  <input
                    onChange={handleInputChange}
                    // ref={descriptionRef}
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
                    // ref={dateRef}
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
                    // ref={ownerRef}
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
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary px-8 bg-gradient-to-b from-green-900 to-green-800"
                  >
                    Save
                  </button>
                  <span style={{ margin: "0 30px" }}></span>
                  <button
                    onClick={handleCancel}
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



  // Handle changes to the file input field
  // const handleInputChange = (event) => {
  //   event.preventDefault();
  //     setNewItem({
  //       ...newItem,
  //         [event.target.name]: event.target.value,
  //   });
  // };
  // console.log(newItem.fileupload.substring(12));
  // console.log(newItem.spacename);

  // Handle form submission