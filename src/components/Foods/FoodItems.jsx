
import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import FoodCard from "./FoodCard"
import CategorySidebar from "../Restaurants/CategorySidebar"

const FoodItems = ({ categories, foods, initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || "Italian")

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory)
    }
  }, [initialCategory])

  const handleCategorySelect = (category) => {
    setActiveCategory(category)
  }

  // If no foods match the active category, show all foods
  const filteredFoods = foods.filter((food) => food.category === activeCategory)
  const displayFoods = filteredFoods.length > 0 ? filteredFoods : foods

  return (
    <div className="flex flex-col mx-auto">
      <h1 className="text-3xl font-bold mb-8 border-b border-gray-200 pb-4 text-gray-800">{activeCategory} Menu</h1>
      <div className="flex flex-col lg:flex-row w-full mx-auto">
        <CategorySidebar
          categories={categories}
          onCategorySelect={handleCategorySelect}
          activeCategory={activeCategory}
        />
        <div className="flex-1 p-4">
          {displayFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {displayFoods.map((item, index) => (
                <FoodCard
                  key={index}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  rating={item.rating}
                  isVeg={item.isVeg}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

FoodItems.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
    }),
  ).isRequired,
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  initialCategory: PropTypes.string,
}

export default FoodItems


// import { useState } from "react"
// import FoodCard from "./FoodCard"
// import { Link } from "react-router-dom"
// import PropTypes from "prop-types"

// const FoodItems = ({ categories, foods, initialCategory }) => {
//   const [activeCategory, setActiveCategory] = useState(initialCategory)

//   // Filter foods by active category
//   const filteredFoods = activeCategory === "All" ? foods : foods.filter((food) => food.category === activeCategory)

//   return (
//     <div className="my-10">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">Popular Food Items</h2>
//         <Link to="/foods" className="text-red-500 hover:text-red-600 font-medium">
//           See All
//         </Link>
//       </div>

//       {/* Category tabs */}
//       <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide gap-2">
//         <button
//           onClick={() => setActiveCategory("All")}
//           className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
//             activeCategory === "All" ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//           }`}
//         >
//           All
//         </button>
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => setActiveCategory(category.name)}
//             className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
//               activeCategory === category.name ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Food cards grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredFoods.slice(0, 8).map((food) => (
//           <Link key={food.id} to={`/product/${food.id}`} className="h-full">
//             <div className="h-full" style={{ minHeight: "380px" }}>
//               <FoodCard
//                 id={food.id}
//                 img={food.image}
//                 name={food.name}
//                 price={food.price}
//                 originalPrice={food.originalPrice}
//                 rating={food.rating}
//                 reviews={food.reviews}
//                 isVeg={food.isVeg}
//               />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// FoodItems.propTypes = {
//   categories: PropTypes.array.isRequired,
//   foods: PropTypes.array.isRequired,
//   initialCategory: PropTypes.string,
// }

// export default FoodItems
