
import React from 'react';
import PropTypes from 'prop-types';

const PaymentOptions = ({ options }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-red font-semibold mb-4 flex items-center gap-1">
        Net Banking
      </h2>
      <div className="mb-4">
        {options.map((option, index) => (
          <div className="flex items-center mb-2" key={index}>
            <input type="radio" name="payment" className="mr-2" />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

PaymentOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PaymentOptions;

