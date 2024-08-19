// import { MdPayments } from "react-icons/md";
import PropTypes from 'prop-types';

const Transacation = ({payment}) => {
  return (
    <div className="w-[80%] mx-auto py-4 ">
      <div className="bg-primary-900 md:pl-28 pl-6 py-10 rounded-lg text-lg md:text-xl font-semibold text-white">
        <h1>Total Payment : $ {payment}</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-2 md:gap-0">
        <button className="text-red border border-red px-3 py-1 rounded w-full md:w-auto">
          Previous
        </button>
        <button className="text-red border border-red px-3 py-1 rounded w-full md:w-auto">
          Next
        </button>
      </div>
    </div>
  );
};

Transacation.propTypes = {
  payment: PropTypes.number.isRequired,
};

export default Transacation;
