import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CategoriesCard = ({ image, name, categoryId, restaurantId }) => {
  useEffect(() => {
    console.log({ image, name, categoryId, restaurantId });
  }, [image, name, categoryId, restaurantId]);

  return (
    <Link to={`/category/${categoryId}`} state={{ image, name }}>
      <div>
        <div className="hover:shadow-lg border border-gray-400 rounded-2xl p-3 cursor-pointer mt-10 h-32 lg:h-32 md:h-28 sm:h-24">
          <img
            src={image}
            alt="category"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <h1 className="text-center font-semibold text-gray-600 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
          {name}
        </h1>
      </div>
    </Link>
  );
};

// Define PropTypes
CategoriesCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  restaurantId: PropTypes.string.isRequired,
};

export default CategoriesCard;