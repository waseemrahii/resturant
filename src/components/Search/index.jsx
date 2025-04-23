import React from 'react'
import SearchBar from './SearchBar'
import { restaurants } from '../../utils/Utils'

const Search = () => {
  return (
    <div>
      <SearchBar restaurants={restaurants}/>
    </div>
  )
}

export default Search



// import { useState, useEffect } from "react"
// import PropTypes from "prop-types"
// import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa"
// import { IoHomeOutline } from "react-icons/io5"
// import RestaurantCard from "./RestaurantCard"
// import { allrestaurants } from "../../utils/Utils"

// const Search = () => {
//   const [searchInput, setSearchInput] = useState("")
//   const [filteredRestaurants, setFilteredRestaurants] = useState(allrestaurants)
//   const [currentPage, setCurrentPage] = useState(1)
//   const restaurantsPerPage = 8

//   useEffect(() => {
//     filterRestaurants(searchInput)
//   }, [searchInput])

//   const handleInputChange = (e) => {
//     setSearchInput(e.target.value)
//   }

//   const filterRestaurants = (searchTerm) => {
//     const filtered = allrestaurants.filter((restaurant) =>
//       restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()),
//     )
//     setFilteredRestaurants(filtered)
//     setCurrentPage(1) // Reset to first page when search changes
//   }

//   // Get current restaurants for the current page
//   const indexOfLastRestaurant = currentPage * restaurantsPerPage
//   const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage
//   const currentRestaurants = filteredRestaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant)

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber)
//   const totalPages = Math.ceil(filteredRestaurants.length / restaurantsPerPage)

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="my-4">
//         <div className="mb-4">
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="Search Food Items"
//               className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={searchInput}
//               onChange={handleInputChange}
//             />
//             <button className="absolute top-0 right-0 mt-3 mr-2">
//               <FaSearch className="mx-4 text-green-500" />
//             </button>
//           </div>
//         </div>
//         <button className="btn flex items-center gap-2">
//           <IoHomeOutline /> Restaurant ({filteredRestaurants.length})
//         </button>
//         <div className=" grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {currentRestaurants.map((restaurant) => (
//             <RestaurantCard key={restaurant.id} restaurant={restaurant} /> // Corrected from rest to restaurant
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center mt-10">
//           <nav className="flex items-center">
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               className={`px-3 py-1 rounded-l-md border ${
//                 currentPage === 1
//                   ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-green-500 hover:bg-green-50"
//               }`}
//             >
//               <FaChevronLeft className="text-sm" />
//             </button>

//             <div className="flex">
//               {[...Array(totalPages).keys()].map((number) => {
//                 // Show limited page numbers with ellipsis
//                 if (
//                   number + 1 === 1 ||
//                   number + 1 === totalPages ||
//                   (number + 1 >= currentPage - 1 && number + 1 <= currentPage + 1)
//                 ) {
//                   return (
//                     <button
//                       key={number + 1}
//                       onClick={() => paginate(number + 1)}
//                       className={`px-3 py-1 border-t border-b ${
//                         currentPage === number + 1
//                           ? "bg-green-500 text-white"
//                           : "bg-white text-green-500 hover:bg-green-50"
//                       }`}
//                     >
//                       {number + 1}
//                     </button>
//                   )
//                 } else if (
//                   (number + 1 === currentPage - 2 && currentPage > 3) ||
//                   (number + 1 === currentPage + 2 && currentPage < totalPages - 2)
//                 ) {
//                   return (
//                     <span key={number + 1} className="px-3 py-1 border-t border-b bg-white text-gray-500">
//                       ...
//                     </span>
//                   )
//                 }
//                 return null
//               })}
//             </div>

//             <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className={`px-3 py-1 rounded-r-md border ${
//                 currentPage === totalPages
//                   ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                   : "bg-white text-green-500 hover:bg-green-50"
//               }`}
//             >
//               <FaChevronRight className="text-sm" />
//             </button>
//           </nav>
//         </div>
//       )}
//     </div>
//   )
// }

// Search.propTypes = {
//   restaurants: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// }

// export default Search
