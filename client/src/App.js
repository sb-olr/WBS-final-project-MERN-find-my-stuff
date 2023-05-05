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
import SpacesNewItem from "./components/SpacesNewItem";
import { ItemsProvider } from "./context/useContext";
// import { SpacesProvider } from "./context/useContextSpace";
import Layout from "./components/Layout";
import AuthStateContext from "./context/AuthContext";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [spaces, setSpaces] = useState([]);
  const [selectedSpace, setSelectedSpace] = useState(1);

  return (
    <AuthStateContext>
      <div className="App">
        <NavBar token={token} />
        <main>
          <ItemsProvider>
            {/* <SpacesProvider> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Spaces" element={<Layout />}>
                <Route
                  index
                  element={<Spaces spaces={spaces} setSpaces={setSpaces} />}
                />
                <Route
                  path="new"
                  element={
                    <AddNewSpace spaces={spaces} setSpaces={setSpaces} />
                  }
                />
                <Route path=":id" element={<AddNewSpace />} />
              </Route>
              <Route path="/Items" element={<Items />} />
              <Route path="/SignIn" element={<SignIn setToken={setToken} />} />
              <Route path="/SignUp" element={<SignUp setToken={setToken} />} />
              <Route path="/AddNewItem" element={<AddNewItem />} />
              <Route path="/SpacesItems" element={<SpacesItems />} />
              <Route path="/SpacesNewItem" element={<SpacesNewItem />} />
            </Routes>
            {/* </SpacesProvider> */}
          </ItemsProvider>
        </main>
        <div></div>
      </div>
    </AuthStateContext>
  );
};

export default App;
