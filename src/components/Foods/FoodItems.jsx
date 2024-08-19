import  { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import FoodCard from "./FoodCard";
import CategorySidebar from "../Restaurants/CategorySidebar";

const FoodItems = ({ categories, foods }) => {
  const [activeCategory, setActiveCategory] = useState("Italian");

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const filteredFoods = foods.filter(
    (food) => food.category === activeCategory
  );

  return (
    <div className="flex flex-col mx-auto ">
      <h1 className="text-4xl mb-8 border-b broder-gray-600 text-gray-700 p-6">
      {activeCategory} Restaurants
      </h1>
      <div className="flex flex-col lg:flex-row w-full mx-auto">
        <CategorySidebar
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />
        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredFoods.map((item) => (
          <FoodCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            originalPrice={item.originalPrice}
            rating={item.rating}
            isVeg={item.isVeg}
          />
        ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FoodItems.propTypes = {
  // title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FoodItems;
