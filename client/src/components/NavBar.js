import React, { useState } from "react";
import { NavLink, Outlet,useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ token }) => {
  const navigate = useNavigate();

  // state variables
  const [nav, setNav] = useState(false); // controls mobile navigation

  // get token from local storage

  // const token = localStorage.getItem("token");

  // navigation links
  const links = [
    { id: 3, link: "Spaces", path: "/spaces" },
    { id: 4, link: "Items", path: "/items" },
    { id: 4, link: "SpacesItems", path: "/spacesItems" },
  ];
  // handle sign out
  const handelsingout = () => {
    if (token) {
      localStorage.clear("token"); // clear token from local storage
      navigate("/")
      window.location.reload(); // reload the window to sign out the user
    }
  };
  // render the navigation bar

  return (
    <>
      <div className="flex justify-between items-cebter w-full h-20 px-4 text-white bg-black fixed">
        <div>
          <h1 className="text-5xl font-signature ml-2">Logo</h1>
        </div>

        {/* search input */}
        {token && (
          <div className="search pt-2 max-w-sm">
            <label>
              <input
                type="text"
                name="name"
                placeholder="Search"
                className="02 bg-transparent border-2 rounded-md text-white placeholder:focus:outline-none"
                // onChange={(e) => setSearchQuery(e.target.value)}
              ></input>
            </label>
          </div>
        )}

        {/* navigation links */}
        <ul className="hidden md:flex pt-2">
          {/* loop through the navigation links */}
          {/* show navigation links after the user logs in */}
          <NavLink
            to="/"
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200"
            activeClassName="text-white"
            style={{ textDecoration: "none" }}
          >
            Home
          </NavLink>
          {token &&
            links.map(({ id, link, path }) => (
              <NavLink
                key={id}
                to={path}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200"
                activeClassName="text-white"
                style={{ textDecoration: "none" }}
              >
                {link}
              </NavLink>
            ))}

          {/* show sign in or sign out button */}
          <NavLink
            to={token ? `/` : `/SignIn`}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200"
            activeClassName="text-white"
            style={{ textDecoration: "none" }}
            onClick={handelsingout}
          >
            {token ? `Signout` : `SignIn`}
          </NavLink>
        </ul>
        {/* for small screen */}

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 pt-2 text-white-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {/* for small screen */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {/* loop through the navigation links */}
            {/* show navigation links after the user logs in */}
            <NavLink
              to="/"
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              activeClassName="text-white"
              style={{ textDecoration: "none" }}
              onClick={() => setNav(!nav)}
            >
              Home
            </NavLink>
            {token &&
              links.map(({ id, link, path }) => (
                <NavLink
                  key={id}
                  to={path}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  activeClassName="text-white"
                  style={{ textDecoration: "none" }}
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </NavLink>
              ))}

            {/* show sign in or sign out button */}
            <NavLink
              to={token ? `/` : `/SignIn`}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              activeClassName="text-white"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handelsingout();
                setNav(!nav);
              }}
            >
              {token ? `Signout` : `SignIn`}
            </NavLink>
          </ul>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default NavBar;
