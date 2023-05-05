import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Spaces from "./components/Spaces";
import Items from "./components/Items";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddNewSpace from "./components/EditSpace";
import EditItem from "./components/EditItem";
import SpacesItems from "./components/SpaceItems";
import SpacesNewItem from "./components/SpacesNewItem";
import { ItemsProvider } from "./context/useContext";
// import { SpacesProvider } from "./context/useContextSpace";
import Layout from "./components/Layout";
import AuthStateContext from "./context/AuthContext";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AuthStateContext>
      <div className="App">
        <NavBar token={token} />
        <main>
          <ItemsProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spaces" element={<Layout />}>
                <Route index element={<Spaces />} />
                <Route path="new" element={<AddNewSpace />} />
                <Route path=":id" element={<AddNewSpace />} />
              </Route>

              <Route path="/items" element={<Layout />}>
                <Route index element={<Items />} />
                <Route path="new" element={<EditItem />} />
                <Route path=":id" element={<EditItem />} />
              </Route>

              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />

              <Route path="/SpacesItems" element={<SpacesItems />} />
              <Route path="/SpacesNewItem" element={<SpacesNewItem />} />
            </Routes>
          </ItemsProvider>
        </main>
        <div></div>
      </div>
    </AuthStateContext>
  );
};

export default App;
