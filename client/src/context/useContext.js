import { createContext, useContext, useState } from "react";

// Creating a new context object
const ItemsContext = createContext();

// Defining a custom hook that returns the current context value
const useItems = () => useContext(ItemsContext);

// Creating a provider component that will wrap its children with the context provider
const ItemsProvider = ({ children }) => {
  // Initializing a state variable "items" with an empty array and a function "setItems" to update the state
  const [items, setItems] = useState([]);

  // Rendering the context provider and passing the current "items" state and "setItems" function as the value
  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

// Exporting the custom hook, context object, and provider component to be used elsewhere in the app
export { useItems, ItemsContext, ItemsProvider };

// import { createContext, useContext, useState } from "react";

// const ItemsContext = createContext()
// const useItems = () => useContext(ItemsContext);

// const ItemsProvider = ({children})=>{
//     const [items, setItems] = useState([
//     // {
//     //     name: "name",
//     //     id: 2,
//     // },
//     // {
//     //     name: "name2",
//     //     id: 3,
//     // },
//     ]);
//     return (
//       <ItemsContext.Provider value={{ items, setItems }}>
//         {children}
//       </ItemsContext.Provider>
//     );
// }

// export { useItems, ItemsContext, ItemsProvider };
