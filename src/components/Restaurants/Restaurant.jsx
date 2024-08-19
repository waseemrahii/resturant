import  { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import CategorySidebar from "./CategorySidebar";
import Card from "../Cards/Card";

const Restaurant = ({ categories, restaurants }) => {
  const [activeCategory, setActiveCategory] = useState("Italian");

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.category === activeCategory
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
            {filteredRestaurants.map((restaurant, index) => (
              <Card key={index} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  // title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Restaurant;
