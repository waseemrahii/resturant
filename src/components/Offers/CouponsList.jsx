import PropTypes from "prop-types";
import CouponCard from "./CouponCard";
import { couponsdata } from "../../utils/Utils";

const CouponsList = ({ coupons = couponsdata }) => {
  return (
    <>
      <div className="pt-5">
        <h1 className="px-6 flex items-center rounded bg-primary-900 h-32 w-full text-white font-bold text-[1.6rem]">
          Coupons list
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.isArray(coupons) && coupons.length > 0 ? (
          coupons.map((coupon, index) => (
            <CouponCard key={index} coupon={coupon} />
          ))
        ) : (
          <p>No coupons available</p>
        )}
      </div>
    </>
  );
};

CouponsList.propTypes = {
  coupons: PropTypes.arrayOf(
    PropTypes.shape({
      expireDate: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      discount: PropTypes.string.isRequired,
      description: PropTypes.string,
      location: PropTypes.string.isRequired,
    })
  ),
};

CouponsList.defaultProps = {
  coupons: couponsdata,
};

export default CouponsList;
