// import { useState } from "react";
// import PropTypes from "prop-types"; // Import PropTypes

// const CategorySidebar = ({ categories, onCategorySelect }) => {
//   const [activeCategory, setActiveCategory] = useState(null);

//   const handleCategoryClick = (index) => {
//     setActiveCategory(index);
//     onCategorySelect(categories[index].name);
//   };

//   return (
//     <>
//       <div>
//         <div className="lg:w-80 sm:w-full border">
//           <h2 className="text-xl font-bold mb-4 p-4 border-b">Categories</h2>
//           <ul>
//             {categories.map((category, index) => (
//               <li
//                 key={index}
//                 className={`flex items-center mb-3 cursor-pointer p-2 h-12 ${
//                   activeCategory === index ? "border-l-2 border-red-500" : ""
//                 } hover:border-l-2 hover:border-red-300`}
//                 onClick={() => handleCategoryClick(index)}
//               >
//                 <div className="mr-2 w-12 h-12 bg-black p-1 rounded-full">
//                   <span className="text-4xl items-center">{category.icon}</span>
//                 </div>
//                 <span className="text-gray-600">{category.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// // Define PropTypes
// CategorySidebar.propTypes = {
//   categories: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       icon: PropTypes.node,
//     })
//   ).isRequired,
//   onCategorySelect: PropTypes.func.isRequired,
// };

// export default CategorySidebar;



"use client"

import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const CategorySidebar = ({ categories, onCategorySelect, activeCategory: externalActiveCategory }) => {
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    // If external active category is provided, use it
    if (externalActiveCategory) {
      const index = categories.findIndex((cat) => cat.name === externalActiveCategory)
      if (index !== -1) {
        setActiveCategory(index)
      }
    }
  }, [externalActiveCategory, categories])

  const handleCategoryClick = (index) => {
    setActiveCategory(index)
    onCategorySelect(categories[index].name)
  }

  return (
    <>
      <div>
        <div className="lg:w-80 sm:w-full border rounded-lg overflow-hidden shadow-sm">
          <h2 className="text-xl font-bold p-4 border-b bg-gray-50">Categories</h2>
          <ul className="py-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`flex items-center mb-1 cursor-pointer p-3 transition-colors ${
                  activeCategory === index
                    ? "border-l-4 border-red-500 bg-red-50"
                    : "border-l-4 border-transparent hover:border-red-200 hover:bg-gray-50"
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                <div className="mr-3 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                  {category.icon}
                </div>
                <span className={`${activeCategory === index ? "font-medium text-red-500" : "text-gray-700"}`}>
                  {category.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

// Define PropTypes
CategorySidebar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node,
    }),
  ).isRequired,
  onCategorySelect: PropTypes.func.isRequired,
  activeCategory: PropTypes.string,
}

export default CategorySidebar
