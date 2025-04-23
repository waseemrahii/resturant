


import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { IoHomeOutline } from "react-icons/io5"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { allrestaurants } from "../../utils/Utils"
import RestaurantCard from "../Search/RestaurantCard"

const AllRestaurants = ({ title }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const restaurantsPerPage = 8

  // Calculate total pages
  const totalPages = Math.ceil(allrestaurants.length / restaurantsPerPage)

  // Get current restaurants
  const indexOfLastRestaurant = currentPage * restaurantsPerPage
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage
  const currentRestaurants = allrestaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant)

  useEffect(() => {
    // Simulate loading
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [currentPage])

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 border-b border-gray-200 pb-4 text-gray-800">
        {title} Restaurants
      </h1>
      <div className="py-4">
        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">
          <IoHomeOutline className="text-lg" />
          All Restaurants ({allrestaurants.length})
        </button>
        <div className="mt-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : allrestaurants.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <img src="/placeholder.svg?height=100&width=100" alt="No results" className="mb-4 opacity-50" />
              <p className="text-xl font-bold text-gray-500">No restaurants found</p>
              <p className="text-gray-400">Try adjusting your search criteria</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentRestaurants.map((restaurant, index) => (
                  <RestaurantCard key={index} restaurant={restaurant} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-10">
                  <nav className="flex items-center">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded-l-md border ${
                        currentPage === 1
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-green-500 hover:bg-green-50"
                      }`}
                    >
                      <FaChevronLeft className="text-sm" />
                    </button>

                    <div className="flex">
                      {[...Array(totalPages).keys()].map((number) => {
                        // Show limited page numbers with ellipsis
                        if (
                          number + 1 === 1 ||
                          number + 1 === totalPages ||
                          (number + 1 >= currentPage - 1 && number + 1 <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={number + 1}
                              onClick={() => paginate(number + 1)}
                              className={`px-3 py-1 border-t border-b ${
                                currentPage === number + 1
                                  ? "bg-green-500 text-white"
                                  : "bg-white text-green-500 hover:bg-green-50"
                              }`}
                            >
                              {number + 1}
                            </button>
                          )
                        } else if (
                          (number + 1 === currentPage - 2 && currentPage > 3) ||
                          (number + 1 === currentPage + 2 && currentPage < totalPages - 2)
                        ) {
                          return (
                            <span key={number + 1} className="px-3 py-1 border-t border-b bg-white text-gray-500">
                              ...
                            </span>
                          )
                        }
                        return null
                      })}
                    </div>

                    <button
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded-r-md border ${
                        currentPage === totalPages
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white text-green-500 hover:bg-green-50"
                      }`}
                    >
                      <FaChevronRight className="text-sm" />
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

AllRestaurants.propTypes = {
  title: PropTypes.string.isRequired,
}

export default AllRestaurants
