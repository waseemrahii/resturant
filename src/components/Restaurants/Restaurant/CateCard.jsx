import React from "react";
import PropTypes from "prop-types";

const CateCard = ({ item, index }) => {
  return (
    <div
      key={index}
      className={`rounded-2xl hover:shadow-md flex flex-col justify-between ${
        index === 1 ? "row-span-3" : ""
      }`}
    >
      {index === 1 && (
        <div className="absolute inset-300 h-[44%] w-[14%] bg-opacity-50 rounded-2xl z-50"></div>
      )}
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

CateCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CateCard;
