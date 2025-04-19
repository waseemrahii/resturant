// import  { useState } from "react";
// import PropTypes from "prop-types"; // Import PropTypes
// import FoodCard from "./FoodCard";
// import CategorySidebar from "../Restaurants/CategorySidebar";

// const FoodItems = ({ categories, foods }) => {
//   const [activeCategory, setActiveCategory] = useState("Italian");

//   const handleCategorySelect = (category) => {
//     setActiveCategory(category);
//   };

//   const filteredFoods = foods.filter(
//     (food) => food.category === activeCategory
//   );

//   return (
//     <div className="flex flex-col mx-auto ">
//       <h1 className="text-4xl mb-8 border-b broder-gray-600 text-gray-700 p-6">
//       {activeCategory} Restaurants
//       </h1>
//       <div className="flex flex-col lg:flex-row w-full mx-auto">
//         <CategorySidebar
//           categories={categories}
//           onCategorySelect={handleCategorySelect}
//         />
//         <div className="flex-1 p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {filteredFoods.map((item) => (
//           <FoodCard
//             key={item.id}
//             img={item.img}
//             name={item.name}
//             price={item.price}
//             originalPrice={item.originalPrice}
//             rating={item.rating}
//             isVeg={item.isVeg}
//           />
//         ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// FoodItems.propTypes = {
//   // title: PropTypes.string.isRequired,
//   categories: PropTypes.arrayOf(PropTypes.string).isRequired,
//   foods: PropTypes.arrayOf(
//     PropTypes.shape({
//       category: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default FoodItems;




"use client"

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
