// // import { useState, useEffect } from "react"
// // import PropTypes from "prop-types"

// // const CategorySidebar = ({ categories, onCategorySelect, activeCategory: externalActiveCategory }) => {
// //   const [activeCategory, setActiveCategory] = useState(null)

// //   useEffect(() => {
// //     // If external active category is provided, use it
// //     if (externalActiveCategory) {
// //       const index = categories.findIndex((cat) => cat.name === externalActiveCategory)
// //       if (index !== -1) {
// //         setActiveCategory(index)
// //       }
// //     }
// //   }, [externalActiveCategory, categories])

// //   const handleCategoryClick = (index) => {
// //     setActiveCategory(index)
// //     onCategorySelect(categories[index].name)
// //   }

// //   return (
// //     <>
// //       <div>
// //         <div className="lg:w-80 sm:w-full border rounded-lg overflow-hidden shadow-sm">
// //           <h2 className="text-xl font-bold p-4 border-b bg-primary-500 text-white">Categories</h2>
// //           <ul className="py-2">
// //             {categories.map((category, index) => (
// //               <li
// //                 key={index}
// //                 className={`flex items-center mb-1 cursor-pointer  p-3 transition-colors ${
// //                   activeCategory === index
// //                     ? "border-l-4 border-primary-500 bg-green-100"
// //                     : "border-l-4 border-transparent hover:border-primary-600 hover:bg-gray-50"
// //                 }`}
// //                 onClick={() => handleCategoryClick(index)}
// //               >
// //                 <div className="mr-3 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xl">
// //                   {category.icon}
// //                 </div>
// //                 <span className={`${activeCategory === index ? "font-bold  text-primary-500" : "text-primary-600 font-semibold"}`}>
// //                   {category.name}
// //                 </span>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // // Define PropTypes
// // CategorySidebar.propTypes = {
// //   categories: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       name: PropTypes.string.isRequired,
// //       icon: PropTypes.node,
// //     }),
// //   ).isRequired,
// //   onCategorySelect: PropTypes.func.isRequired,
// //   activeCategory: PropTypes.string,
// // }

// // export default CategorySidebar


// import PropTypes from "prop-types"

// const CategorySidebar = ({ categories, onCategorySelect, activeCategory }) => {
//   // Handle case where categories might be an array of strings or objects
//   const normalizedCategories = categories?.map((category) =>
//     typeof category === "string" ? { name: category } : category,
//   )

//   return (
//     <div className="w-full lg:w-64 mb-6 lg:mb-0 lg:mr-6">
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
//         <ul className="space-y-2">
//           <li>
//             <button
//               onClick={() => onCategorySelect("All")}
//               className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
//                 activeCategory === "All" ? "bg-red-500 text-white" : "hover:bg-gray-100 text-gray-700"
//               }`}
//             >
//               All Categories
//             </button>
//           </li>
//           {normalizedCategories.map((category, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => onCategorySelect(category.name)}
//                 className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
//                   activeCategory === category.name ? "bg-red-500 text-white" : "hover:bg-gray-100 text-gray-700"
//                 }`}
//               >
//                 {category.icon && <span className="mr-2">{category.icon}</span>}
//                 {category.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// CategorySidebar.propTypes = {
//   categories: PropTypes.arrayOf(
//     PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         icon: PropTypes.string,
//       }),
//     ]),
//   ).isRequired,
//   onCategorySelect: PropTypes.func.isRequired,
//   activeCategory: PropTypes.string,
// }

// export default CategorySidebar


import PropTypes from "prop-types"

const CategorySidebar = ({ categories, onCategorySelect, activeCategory }) => {
  // Handle case where categories might be undefined or null
  const normalizedCategories = categories
    ? categories.map((category) => (typeof category === "string" ? { name: category } : category))
    : []

  return (
    <div className="w-full lg:w-64 mb-6 lg:mb-0 lg:mr-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onCategorySelect("All")}
              className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                activeCategory === "All" ? "bg-green-500 text-white" : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              All Categories
            </button>
          </li>
          {normalizedCategories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => onCategorySelect(category.name)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.name ? "bg-green-500 text-white" : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

CategorySidebar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string,
      }),
    ]),
  ),
  onCategorySelect: PropTypes.func.isRequired,
  activeCategory: PropTypes.string,
}

// Set default props to prevent undefined errors
CategorySidebar.defaultProps = {
  categories: [],
  activeCategory: "All",
}

export default CategorySidebar
