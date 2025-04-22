import { Link } from "react-router-dom"

const BecomeASeller = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 my-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src="/seller.2044003e.svg"
          alt="Become a Seller"
          className="w-24 h-24 md:w-32 md:h-32 object-contain mr-6"
        />
        <div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Become a Seller</h3>
          <p className="text-gray-500">Register as seller & open shop in 6amMart to start your business</p>
        </div>
      </div>
      <Link
        to="/vendor-registration"
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
      >
        Register
      </Link>
    </div>
  )
}

export default BecomeASeller
