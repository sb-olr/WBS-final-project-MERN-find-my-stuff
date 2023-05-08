// import React, { useState, useEffect } from "react";

// function SearchInput({ items }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredItems, setFilteredItems] = useState(items);

//   useEffect(() => {
//     const results = items.filter((item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredItems(results);
//   }, [searchTerm, items]);

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="name"
//         placeholder="Search"
//         className="02 bg-transparent border-2 rounded-md text-white placeholder:focus:outline-none"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//         {filteredItems.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchInput;
