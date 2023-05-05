import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import useAuth from "../hooks/useAuth";

const AddNewItem = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [spaces, setSpaces] = useState([]);
  const nameRef = useRef();
  const spaceRef = useRef();
  const quantityRef = useRef();
  const valueRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const { id } = useParams();

  const [newItem, setNewItem] = useState({
    img_url: "",
    name: "",
    space_id: "",
    quantity: 0,
    value: 0,
    description: "",
    owner: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let url = "/items/";

    const data = {
      name: nameRef.current.value,
      space_id: spaceRef.current.value,
      quantity: quantityRef.current.value,
      value: valueRef.current.value,
      description: descriptionRef.current.value,
      // date: dateRef.current.value,
    };
    if (id) {
      url += id;
      await axios.put(process.env.REACT_APP_API_URL + url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      await axios.post(process.env.REACT_APP_API_URL + url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    navigate("/items");
  };

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

    if (id) {
      axios
        .get(process.env.REACT_APP_API_URL + "/items/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          nameRef.current.value = data.name;
          spaceRef.current.value = data.space_id;
          quantityRef.current.value = data.quantity;
          valueRef.current.value = data.value;
          descriptionRef.current.value = data.description;
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <>
      <div
        name="spaces"
        className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex items-center justify-center"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="space-y-12">
            <div className="flex justify-center items-center">
              <div class="col-md-4">
                <label htmlFor="inputSpaces" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  ref={nameRef}
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
                    ref={spaceRef}
                    name="space_id"
                    type="text"
                    class="form-control"
                    id="inputSpace_id"
                    placeholder="Space name"
                  >
                    {spaces &&
                      spaces.map((space) => (
                        <option value={space.id}> {space.name}</option>
                      ))}
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputQuantity" class="form-label">
                    Quantity
                  </label>
                  <input
                    ref={quantityRef}
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
                    ref={valueRef}
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
                    ref={descriptionRef}
                    name="description"
                    type="text"
                    class="form-control"
                    id="inputDescription"
                    placeholder="Item description"
                  />
                </div>
                {/* <div class="col-md-6">
                  <label for="inputDate" class="form-label">
                    Date
                  </label>
                  <input
                    ref={dateRef}
                    name="date"
                    type="date"
                    class="form-control"
                    id="inputDate"
                  />
                </div> */}

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
                    onClick={() => navigate("/items")}
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
