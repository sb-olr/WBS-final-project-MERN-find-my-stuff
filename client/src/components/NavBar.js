import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const { isAuthenticated, logout, loginUser } = useAuth();

  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // const token = localStorage.getItem("token");
  const links = [
    { id: 3, link: "Spaces", path: "/spaces" },
    { id: 4, link: "Items", path: "/items" },
    { id: 4, link: "SpacesItems", path: "/spacesItems" },
  ];
  // handle sign out
  const handelsingout = () => {
    setShowDropdown(false);
    logout();
    // if (token) {
    //   localStorage.clear("token"); // clear token from local storage
    //     navigate("/")
    //       window.location.reload(); // reload the window to sign out the user
    // }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // do something with the search value
  };
  // console.log(search);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  return (
    <>
      <div className="flex justify-between items-cebter w-full h-20 pt-2 px-4 text-white bg-black fixed">
        <div>
          <div>
            <h1 className="text-5xl font-signature ml-2">My Stuff</h1>
          </div>
        </div>

        {/* search input */}
        {isAuthenticated && (
          <div className="search pt-2 max-w-sm">
            <label>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => handleChange(e)}
                  placeholder="Search"
                  className="02 bg-transparent border-2 rounded-md text-white placeholder:focus:outline-none"
                ></input>
              </form>
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
            style={({ isActive }) =>
              isActive
                ? { color: "white", textDecoration: "none" }
                : { color: "gray", textDecoration: "none" }
            }
          >
            Home
          </NavLink>
          {isAuthenticated &&
            links.map(({ id, link, path }) => (
              <NavLink
                key={id}
                to={path}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200"
                activeClassName="text-white"
                style={({ isActive }) =>
                  isActive
                    ? { color: "white", textDecoration: "none" }
                    : { color: "gray", textDecoration: "none" }
                }
              >
                {link}
              </NavLink>
            ))}

          {/* show sign in or sign out button */}
          <NavLink
            to={isAuthenticated ? `/` : `/SignIn`}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200"
            activeClassName="text-white"
            style={{ textDecoration: "none" }}
          >
            <div className="relative ml-3">
              <div>
                {isAuthenticated ? (
                  <button
                    type="button"
                    class="flex max-w-xs items-center rounded-full bg-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowDropdown(() => !showDropdown);
                    }}
                  >
                    <span class="sr-only">Open user menu</span>
                    {/* <img
                      class="h-8 w-8 rounded-full"
                      src="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      alt=""
                    /> */}
                    {/* <img
                      class="h-8 w-8 rounded-full" */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    {/* alt=""
                    ></img> */}
                  </button>
                ) : (
                  `SignIn`
                )}
              </div>
              {showDropdown && isAuthenticated && (
                <div
                  class="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white py-1 shadow-ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <button
                    class="block px-5 bg-white py-1 text-sm text-gray-500"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                    onClick={handelsingout}
                  >
                    Signout
                  </button>
                </div>
              )}
            </div>
          </NavLink>
        </ul>

        {/* for small screen */}

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 pt-2 text-white-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {/* loop through the navigation links */}
            {/* show navigation links after the user logs in */}
            <NavLink
              to="/"
              className="px-4 pt-0 cursor-pointer capitalize py-6 text-4xl"
              activeClassName="text-white"
              // style={{ textDecoration: "none" }}
              style={({ isActive }) =>
                isActive
                  ? { color: "white", textDecoration: "none" }
                  : { color: "gray", textDecoration: "none" }
              }
              onClick={() => setNav(!nav)}
            >
              Home
            </NavLink>
            {isAuthenticated &&
              links.map(({ id, link, path }) => (
                <NavLink
                  key={id}
                  to={path}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  activeClassName="text-white"
                  // style={{ textDecoration: "none" }}
                  style={({ isActive }) =>
                    isActive
                      ? { color: "white", textDecoration: "none" }
                      : { color: "gray", textDecoration: "none" }
                  }
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </NavLink>
              ))}

            {/* show sign in or sign out button */}
            <NavLink
              to={isAuthenticated ? `/` : `/SignIn`}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              activeClassName="text-white"
              // style={{ textDecoration: "none" }}
              style={({ isActive }) =>
                isActive
                  ? { color: "gray", textDecoration: "none" }
                  : { color: "gray", textDecoration: "none" }
              }
              onClick={() => {
                handelsingout();
                setNav(!nav);
              }}
            >
              {isAuthenticated ? `Signout` : `SignIn`}
            </NavLink>
          </ul>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default NavBar;
