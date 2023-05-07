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

      await axios[method](process.env.REACT_APP_API_URL + url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }

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
          nameRef.current.value = data.name;
          setIcon(data.img_url);
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
                    <div className="col-span-full"></div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="col-md-4">
                    <label for="inputSpaces" className="form-label">
                      Name
                    </label>
                    <input
                      ref={nameRef}
                      name="spacename"
                      type="text"
                      className="form-control"
                      id="inputSpaces"
                      placeholder="space name"
                    />
                  </div>

                  <Dropdown
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

                <div className="flex justify-center items-center"></div>

                <div className="mt-6 flex items-center justify-center gap-x-1 px-5">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="text-white bg-gradient-to-b from-green-900 to-green-800 px-8 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => navigate("/spaces")}
                    type="submit"
                    className="text-white bg-gradient-to-b from-red-900 to-red-800 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
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
