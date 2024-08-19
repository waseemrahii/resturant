import React, { useState } from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Step 1: Import PropTypes
import { Menu, MenuItem } from '@mui/material';


const Dropdown = ({ isLoggedIn }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RiArrowDropDownFill className="text-gray-600 hover:text-gray-800" />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        MenuListProps={{ onMouseLeave: handleMouseLeave }}
      >
        {isLoggedIn && (
          <li onClick={handleMouseLeave}>
            <Link to="/account" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">My Account</Link>
          </li>
        )}
        <li onClick={handleMouseLeave}>
          <Link to="/restaurants" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">All Restaurants</Link>
        </li>
        <li onClick={handleMouseLeave}>
          <Link to="/dine-in" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Dine in Restaurants</Link>
        </li>
        <li onClick={handleMouseLeave}>
          <Link to="/delivery-support" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Delivery Support</Link>
        </li>
        <li onClick={handleMouseLeave}>
          <Link to="/contact-us" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Contact Us</Link>
        </li>
        <li onClick={handleMouseLeave}>
          <Link to="/terms" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Terms of Use</Link>
        </li>
        <li onClick={handleMouseLeave}>
          <Link to="/privacy" className="block px-4 py-1 text-gray-800 hover:bg-gray-100">Privacy Policy</Link>
        </li>
      </Menu>
    </div>
  );
};

Dropdown.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, // Step 2: Define PropTypes for isLoggedIn
};

export default Dropdown;
