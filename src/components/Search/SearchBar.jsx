import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import RestaurantCard from './RestaurantCard';
import { allrestaurants } from '../../utils/Utils';



const SearchBar = ({ restaurants }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(allrestaurants);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    filterRestaurants(value);
  };

  const filterRestaurants = (searchTerm) => {
    const filtered = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div>
      <div className="my-4">
        <div className="mb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Food Items"
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchInput}
              onChange={handleInputChange}
            />
            <button className="absolute top-0 right-0 mt-3 mr-2">
              <FaSearch className="mx-4 text-orange-500" />
            </button>
          </div>
        </div>
        <button className="btn flex items-center gap-2">
          <IoHomeOutline /> Restaurant ({filteredRestaurants.length})
        </button>
        <div className=" grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRestaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} /> // Corrected from rest to restaurant
          ))}
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchBar;