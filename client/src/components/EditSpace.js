import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { Dropdown } from "semantic-ui-react";
import { spaceIconOptions } from "../utils/icons";

const AddNewSpace = () => {
  const { token } = useAuth();
  const navigate = useNavigate(); 
  const nameRef = useRef(); 
  const { id } = useParams(); 
  const [icon, setIcon] = useState(null); 

  const handleIconChange = (event, { value }) => {
    setIcon(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let url = "/spaces/";

      const data = {
        name: nameRef.current.value,
        icon: icon,
      };

      let method = "post";

      if (id) {
        url += id;
        method = "put";
      }

      // Make a POST or PUT request to create or update the space
      await axios[method](process.env.REACT_APP_API_URL + url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }

    navigate("/spaces"); // Redirect to the spaces page after submission

    navigate("/spaces/details/${id}"); 
  };

  useEffect(() => {
    if (id) {
      // If editing an existing space, fetch its data from the API
      axios
        .get(process.env.REACT_APP_API_URL + "/spaces/" + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          nameRef.current.value = data.name;
          setIcon(data.img_url);
        })
        .catch((error) => console.error(error));
    }
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex items-center justify-center">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col mt-5 justify-center w-full h-full text-white">
          <div className="space-y-12">
            <div className="bg-white  text-gray-600 rounded-lg p-8 shadow-md mt-8 ml-40 mr-40">
              <h4>New Space</h4>
              <form onSubmit={handleSubmit} className="row g-3">
                <div>
                  <label htmlFor="inputSpaces" className="form-label"></label>
                  <input
                    ref={nameRef}
                    name="spacename"
                    type="text"
                    className="form-control"
                    id="inputSpaces"
                    placeholder="Space Name"
                  />
                </div>
                <div>
                  <label htmlFor="selectIcon" className="form-label"></label>
                  <Dropdown
                    id="selectIcon"
                    onChange={handleIconChange}
                    placeholder="Select Icon"
                    fluid
                    search
                    selection
                    required
                    options={spaceIconOptions}
                    value={icon}
                  />
                </div>
                <div className="col-span-2">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary px-8 bg-gradient-to-b from-green-900 to-green-800"
                  >
                    Save
                  </button>
                  <span style={{ margin: "0 10px" }}></span>
                  <button
                    onClick={() => navigate("/spaces")}
                    type="submit"
                    className="btn btn-primary px-6 bg-gradient-to-b from-red-900 to-red-800"
                  >
                    Cancel
                  </button>
                  <span style={{ margin: "0 10px" }}></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewSpace;
