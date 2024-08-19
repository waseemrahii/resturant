import React from "react";
import PropTypes from "prop-types";
import { IoHomeOutline } from "react-icons/io5";
import { allrestaurants } from "../../utils/Utils";
import RestaurantCard from "../Search/RestaurantCard";

const AllRestaurants = ({ title }) => {
  // const allrestaurants=[];
  return (
    <div>
      <h1 className="text-4xl border-b p-4">{title} Restaurant</h1>
      <div className="py-4">
        <button className="btn flex items-center gap-2">
          <IoHomeOutline /> All Restaurant ({allrestaurants.length})
        </button>
        <div className="">
          {allrestaurants.length === 0 ? (
            <p className="w-full h-screen mx-auto text-center mt-4 text-xl font-bold">
              No Result Found
            </p>
          ) : (
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allrestaurants.map((restaurant, index) => (
                <RestaurantCard key={index} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

AllRestaurants.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AllRestaurants;
