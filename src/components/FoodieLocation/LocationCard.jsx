import React from "react";
const LocationCard = ({ name, details, img }) => {
  return (
    <div className="bg-[#262626] text-white rounded-3xl p-6 h-72  flex flex-col items-center justify-center space-y-4 hover:bg-gray-700 transition">
      <img src={img} alt="img" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-center  text-slate-200">{details}</p>
    </div>
  );
};

export default LocationCard;
