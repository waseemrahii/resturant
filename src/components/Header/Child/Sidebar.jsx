import PropTypes from "prop-types"; // Import PropTypes
import { FaHome, FaGift, FaAddressBook, FaHeart } from "react-icons/fa";
import { FiUser, FiLogOut, FiShoppingCart, FiCreditCard } from "react-icons/fi";
import { IoList, IoRestaurant } from "react-icons/io5";
import { Link } from "react-router-dom";
const menuItems = [
  { icon: <FaHome />, label: "Home page", to: "/" },
  { icon: <FiUser />, label: "Contact Us", to: "/contact-us" },
  { icon: <IoList />, label: "All Restaurants", to: "/restaurants" },
  {
    icon: <IoList />,
    label: "Dine in Restaurants",
    to: "/dine-in",
  },
  { icon: <FiUser />, label: "Login", to: "/login" },
  { icon: <FiUser />, label: "Register", to: "/register" },
];
const loggedInItems = [
  { icon: <FaHome />, label: "Home page", to: "/" },
  { icon: <FiShoppingCart />, label: "My Orders", to: "/my-orders" },
  { icon: <FiCreditCard />, label: "My Transactions", to: "/transactions" },
  { icon: <FaGift />, label: "Buy Gift Card", to: "/buy-gift-card" },
  { icon: <FaGift />, label: "My Gift Cards", to: "/my-gift-cards" },
  {
    icon: <FaHeart />,
    label: "Favorite Restaurant",
    to: "/favorite-restaurant",
  },
  { icon: <FaHeart />, label: "Favorite Foods", to: "/favorite-foods" },
  { icon: <FaAddressBook />, label: "Address Book", to: "/address-book" },
  { icon: <IoList />, label: "All Restaurants", to: "/restaurants" },
  {
    icon: <IoRestaurant />,
    label: "Dine in Restaurants",
    to: "/dine-in",
  },
  {
    icon: <IoRestaurant />,
    label: "My Dine In Requests",
    to: "/my-dine-in-requests",
  },
  { icon: <FiUser />, label: "Profile", to: "/profile" },
  { icon: <FiUser />, label: "Contact Us", to: "/contact-us" },
  { icon: <FiLogOut />, label: "Logout", to: "/logout" },
];

const Sidebar = ({ toggleSidebar, isLogIn }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 "
      onClick={toggleSidebar}
    >
      <div
        className="fixed left-0 top-0 w-62 bg-white h-full w-80 shadow-lg z-50 overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex justify-between items-center h-16 font-bold p-4 bg-primary-900">
            <h2 className="text-3xl text-white">E Market</h2>
          </div>
          <ul className="">
            {isLogIn
              ? loggedInItems.map((item, index) => (
                  // JSX for logged in items
                  <Link
                    to={item.to}
                    key={index}
                    className="border-b items-center h-12 gap-2 px-2 flex  hover:bg-primary-500"
                  >
                    {item.icon}
                    <button className="text-gray-700 hover:text-gray-900 text-sm">
                      {item.label}
                    </button>
                  </Link>
                ))
              : menuItems.map((item, index) => (
                  // JSX for menu items
                  <Link
                    to={item.to}
                    key={index}
                    className="border-b items-center h-12 px-2 flex  hover:bg-primary-500"
                  >
                    {item.icon}
                    <button className="text-gray-700 hover:text-gray-900 text-sm">
                      {item.label}
                    </button>
                  </Link>
                ))}
          </ul>
          <p className="mt-4 pl-24 text-black font-semibold border-b p-8">
            V:6.0
          </p>
        </div>
        <div className="border-t mt-28"></div>
        <div className="flex mt-5">
          <Link to="/contact-us" className="group ml-8">
            <img
              src="https://icones.pro/wp-content/uploads/2021/02/icone-de-la-maison-orange.png"
              className="h-5 w-6 group-hover:opacity-0 transition-opacity duration-300"
              alt="Home Icon"
            />
            <h3 className="text-orange-600 text-sm">Home</h3>
          </Link>

          <Link to="/" className="group ml-20">
            <img
              src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-mono/128/Telephone-Receiver-icon.png"
              className="h-5 w-6 group-hover:opacity-0 transition-opacity duration-300"
              alt="Help Icon"
            />
            <h3 className="text-sm text-gray-500">Help</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // toggleSidebar is a function and is required
  isLogIn: PropTypes.bool.isRequired, // isLoggedIn is a boolean and is required
};
export default Sidebar;
