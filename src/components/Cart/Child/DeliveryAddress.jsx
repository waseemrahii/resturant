import React from 'react';
import PropTypes from 'prop-types';

const DeliveryAddress = ({ address, onChange }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md border border-gray-200 mb-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Delivery Address</h2>
        <button className="text-red font-semibold" onClick={onChange}>Change</button>
      </div>
      <p className="text-gray-600 mb-2">You have a saved address in this location</p>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h3 className="text-lg font-semibold">Address</h3>
        <p>{address.line1}</p>
        <p>{`${address.city}, ${address.state}, ${address.country}`}</p>
      </div>
    </div>
  );
};

DeliveryAddress.propTypes = {
  address: PropTypes.shape({
    line1: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DeliveryAddress;
