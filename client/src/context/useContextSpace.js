import { createContext, useContext, useState } from "react";

const ItemsContext = createContext();
const useItems = () => useContext(ItemsContext);

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    // {
    //     name: "name",
    //     id: 2,
    // },
    // {
    //     name: "name2",
    //     id: 3,
    // },
  ]);
  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export { useItems, ItemsContext, ItemsProvider };
