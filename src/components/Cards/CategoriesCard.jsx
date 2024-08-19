import React from "react";
// import Titlecard from "./Titlecard";

const CategoriesCard = ({ image, name }) => {
  return (
    <>
      {/* <Titlecard title="Top Categories" /> */}

      <div>
        <div className="hover:shadow-lg border border-gray-400 rounded-2xl p-3 cursor-pointer mt-10 h-32 lg:h-32 md:h-28 sm:h-24">
          <img
            src={image}
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <h1 className="text-center font-semibold text-gray-600 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
          {name}
        </h1>
      </div>
    </>
  );
};

export default CategoriesCard;
