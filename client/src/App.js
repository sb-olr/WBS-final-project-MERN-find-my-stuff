import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Spaces from "./components/Spaces";
import Items from "./components/Items";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddNewSpace from "./components/NewSpace";
import AddNewItem from "./components/NewItems";
import SpacesItems from "./components/SpaceItems";
import { ItemsProvider } from "./context/useContext";


import Layout from "./components/Layout";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [spaces, setSpaces] = useState([
    // {
    //   id: 1,
    //   src: closet,
    //   title: "Closet",
    //   style: "shadow-yellow-500",
    // },
  ]);
  return (
    <div className="App">
      <NavBar token={token} />
      <main>
        <ItemsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Spaces" element={<Layout />}>
              <Route
                index
                element={<Spaces spaces={spaces} setSpaces={setSpaces} />}
              />
              <Route
                path="new"
                element={<AddNewSpace spaces={spaces} setSpaces={setSpaces} />}
              />
            </Route>
            <Route path="/Items" element={<Items />} />
            <Route path="/SignIn" element={<SignIn setToken={setToken} />} />
            <Route path="/SignUp" element={<SignUp setToken={setToken} />} />
            {/* <Route path="/AddNewSpace" element={<AddNewSpace />} /> */}
            <Route path="/AddNewItem" element={<AddNewItem />} />
            <Route path="/SpacesItems" element={<SpacesItems />} />
          </Routes>
        </ItemsProvider>
      </main>
      <div></div>
    </div>
  );
};

export default App;
