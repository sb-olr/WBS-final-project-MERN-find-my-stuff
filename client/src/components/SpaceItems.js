import React from "react";
import { Link } from "react-router-dom";
import addnew from "../Assets/AddNew.png";
import closetHanger from "../Assets/hanger.png";
// import deleteIcon from "../Assets/delete.png";

export default function SpaceItems() {
  const spaces = [
    {
      name: "Closet",
      icon: closetHanger,
      alt: "Clothes hanger icon",
      items: [
        {
          id: 1,
          src: "item1.png",
          title: "Item 1",
          style: "shadow-blue-600",
        },
        {
          id: 2,
          src: "item2.png",
          title: "Item 2",
          style: "shadow-blue-600",
        },
        {
          id: 3,
          src: addnew,
          title: "New Item",
          style: "shadow-blue-600",
        },
      ],
    },
  ];

  return (
    <>
      {/* // return the following JSX code */}
      <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20">
        {/* // define a div with a background gradient */}
        <div className="w-3/5 mx-auto p-4 pt-1 flex flex-col text-white">
          <div className="shadow-md hover:scale-105 duration-500 rounded-full shadow-yellow-500 flex flex-col items-center mx-6 w-32 my-16">
          
            <img
              src={spaces[0].icon}
              alt={spaces[0].alt}
              className="w-20 h-20 mx-auto object-cover"
            />
            <p className="mt-2 text-white">{spaces[0].name}</p>
          </div>
        
          {spaces.map(
            (
              space 
            ) => (
              <div key={space.name} className="flex flex-wrap justify-between">
               
                {space.items.map(({ id, src, title }) => (
                  
                  <div
                    key={id}
                    className="shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center w-32 m-4"
                  >

                    <Link
                      to={title === "New Item" ? "/SpacesNewItem" : ""}
                      className="no-underline hover:no-underline"
                    >
                      {/* // define a Link component with a conditional path
                          depending on the item's title */}
                      <img
                        src={src}
                        alt={title}
                        className="w-20 h-20 mx-auto object-cover"
                      />
                      {/* // add an image for the item */}
                      <p className="mt-4 text-white">{title}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

//   return (
//     <div>
//       <div
//         name="spaces"
//         className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-20"
//       >
//         <div className="max-w-screen-lg mx-auto p-4 pt-1 flex flex-col text-white">
//           <div>
//             <img
//               onClick={handleDeleteClick} // add onClick event handler
//               src={deleteIcon}
//               alt="Delete Icon"
//               className="w-10 absolute top- right-40 sm:right-40 m-4 cursor-pointer"
//             />
//             <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 pt-5 sm:px-0">
//               {itemsindex.map(({ id, src, title }) => (
//                 <div
//                   key={id}
//                   className="shadow-md hover:scale-105 duration-500 py-2 rounded-full shadow-yellow-500 flex flex-col items-center w-40"
//                 >
//                   <Link
//                     to="/SpacesNewItem"
//                     className="no-underline hover:no-underline"
//                   >
//                     <img src={src} alt={title} className="w-20 mx-auto" />
//                     <p className="mt-4 text-white">{title}</p>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
