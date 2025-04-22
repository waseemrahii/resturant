import PropTypes from "prop-types";
import { FaRegCopy } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const CouponCard = ({ coupon }) => {
  return (
    <div className="container hover:shadow-md cursor-pointer rounded-xl overflow-hidden shadow-sm p-4 w-full my-4 border border-gray-200">
      <div className="relative flex flex-wrap items-center">
        <img
          className="w-16 h-16 rounded-full  bg-primary-100 object-fill mr-4 mb-4 md:mb-0"
          src="/logoemart.png" // Replace with the actual path to your image
          alt="Logo"
        
        />
        <div className="flex-grow">
          <p className="text-black-600 text-md font-semibold mb-2">
            Expires At: {new Date(coupon.expireDate).toLocaleString()}
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <div className="bg-[#FCF8F3] text-black px-2 py-1 border-2 border-dashed border-gray-300 rounded text-sm flex items-center mb-4 md:mb-0">
              {coupon.code}
              <button className="ml-2">
                <FaRegCopy className="text-red font-semibold" />
              </button>
            </div>
            <div className="text-xl font-bold">{coupon.discount}</div>
          </div>
          <p className="text-sm font-semibold mt-2">{coupon.description}</p>
          <p className="text-gray-600 flex items-center mt-2">
            <IoLocationOutline className="text-red-500 mr-1" />
            {coupon.location}
          </p>
        </div>
      </div>
    </div>
  );
};

CouponCard.propTypes = {
  coupon: PropTypes.shape({
    expireDate: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    description: PropTypes.string,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default CouponCard;
