// src/FoodCard.js
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { FaStar } from 'react-icons/fa';

const FoodCard = ({ img, name, price, originalPrice, rating,reviews, isVeg,  }) => {
  return (
    <>
    <Link to="/product-detail">
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl ">
      <div className="relative">
        <img className="w-full h-62 object-cover" src={img} alt={name} />
        <span className={`absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}>
          {isVeg ? 'veg' : 'non-veg'}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex w-16 bg-primary-900 items-center mt-2 mb-4 px-1 text-yellow-100 font-bold rounded">
          <span className=' text-xs'>★</span>
          <span className="flex items-center  text-xs p-1">
          {rating}
          </span>
          <span className="items-center text-sm ">(2{reviews})</span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <span className="text-lg font-semibold text-gray-900">€{price} </span>
          {originalPrice && (
            <span className="text-gray-500 line-through text-sm">€{originalPrice}</span>
          )}
        </div>
      </div>
    </div>
    </Link>
    </>
  );
};

FoodCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number,
  isVeg: PropTypes.bool.isRequired,

};

export default FoodCard;
