import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { Dropdown } from "semantic-ui-react";
import { itemIconOptions } from "../utils/icons";

const AddNewItem = () => {
  const { token } = useAuth();

  const navigate = useNavigate();
  const [spaces, setSpaces] = useState([]);
  const nameRef = useRef();
  const spaceRef = useRef();
  const quantityRef = useRef();
  const valueRef = useRef();
  const descriptionRef = useRef();
  const { id } = useParams();
  const [icon, setIcon] = useState(null);
  const [searchParams] = useSearchParams();
  const space_id = searchParams.get("space_id");

  let action = "new";
  if (id) {
    action = "edit";
  }

  const handleIconChange = (event, { value }) => {
    setIcon(value);
  };

  const handleDelete = async (event) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmed) {
      try {
        await axios.delete(process.env.REACT_APP_API_URL + "/items/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        navigate("/items");
      } catch (error) {
        console.error(error);
      }
    }
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
      icon: icon,
    };
    let method = "post";

    if (action === "edit") {
      url += id;
      method = "put";
    }
    await axios[method](process.env.REACT_APP_API_URL + url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    navigate("/spaces/details/" + spaceRef.current.value);
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

    if (action === "edit") {
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
          setIcon(data.img_url);
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
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col mt-5 justify-center w-full h-full text-white">
          <div className="space-y-12">
            <h1 class="text-center">
              {action === "new" ? "Create New Item" : "Edit Item"}
            </h1>
            <div class="bg-white  text-gray-600 rounded-lg p-8 shadow-md mt-8 ml-40 mr-40">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputSpaces" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    ref={nameRef}
                    type="text"
                    className="form-control placeholder-gray-300"
                    id="inputSpaces"
                    placeholder="Item name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputSpace_id" className="form-label">
                    Spaces
                  </label>
                  <select
                    ref={spaceRef}
                    name="space_id"
                    type="text"
                    className="form-control"
                    id="inputSpace_id"
                    placeholder="Space name"
                  >
                    {spaces &&
                      spaces.map((space) => (
                        <option
                          value={space.id}
                          selected={
                            parseInt(space_id) == space.id ? "selected" : ""
                          }
                        >
                          &nbsp;
                          {space.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputQuantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    ref={quantityRef}
                    name="quantity"
                    type="number"
                    className="form-control placeholder-gray-300"
                    id="inputQuantity"
                    placeholder="Quantity"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputValue" className="form-label">
                    Value
                  </label>
                  <input
                    ref={valueRef}
                    name="value"
                    type="number"
                    className="form-control placeholder-gray-300"
                    id="inputValue"
                    placeholder="Value"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputDescription" className="form-label">
                    Description
                  </label>
                  <input
                    ref={descriptionRef}
                    name="description"
                    type="text"
                    className="form-control placeholder-gray-300"
                    id="inputDescription"
                    placeholder="Item description"
                  />
                </div>
                <div className="col-md-6">
                  <Dropdown
                    onChange={handleIconChange}
                    placeholder="Select Icon"
                    fluid
                    search
                    selection
                    required
                    options={itemIconOptions}
                    value={icon}
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
                  <span style={{ margin: "0 10px" }}></span>
                  <button
                    onClick={() => navigate("/spaces/details/" + space_id)}
                    type="submit"
                    className="btn btn-primary px-6 bg-gradient-to-b from-red-900 to-red-800"
                  >
                    Cancel
                  </button>
                  <span style={{ margin: "0 10px" }}></span>
                  <button
                    onClick={handleDelete}
                    type="submit"
                    className="btn btn-primary px-6 bg-gradient-to-b from-red-900 to-red-800"
                  >
                    Delete
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
