// src/AddressCard.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const AddressCard = ({ address, isDefault, onDefaultChange, onDelete }) => {
  const { location, type } = address;

  return (
    <div className="relative flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <div className="p-4 bg-red-100 rounded-full">
          <IoLocationSharp className="text-red-500 text-4xl" />
        </div>
        <div className="ml-4">
          <p className="w-[70%] text-red-500 font-bold">{location}</p>
          <div className="mt-2 flex gap-2">
            <span className="bg-primary-500 text-white text-sm font-bold  px-2 py-1 rounded-md">{type}</span>
            <button
              className="bg-green-500 text-white text-sm font-bold  px-2 py-1 rounded-md"
              onClick={onDefaultChange}
            >
              {isDefault ? 'Default' : 'Mark as Default'}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex gap-2">
        <button className="text-red-500 p-2">
          <FaEdit />
        </button>
        <button className="text-red-500 p-2" onClick={onDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

AddressCard.propTypes = {
  address: PropTypes.shape({
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  isDefault: PropTypes.bool.isRequired,
  onDefaultChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AddressCard;
