import { createContext, useContext, useState } from "react";

const SpacesContext = createContext();
const useSpaces = () => useContext(SpacesContext);

const SpacesProvider = ({ children }) => {
  const [spaces, setSpaces] = useState([

  ]);
  return (
    <SpacesContext.Provider value={{ spaces, setSpaces }}>
      {children}
    </SpacesContext.Provider>
  );
};

export { useSpaces, SpacesContext, SpacesProvider };
