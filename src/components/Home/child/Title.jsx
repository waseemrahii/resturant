

import PropTypes from "prop-types" // Import PropTypes

const Title = ({ title }) => {
  return (
    <div className="pt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl md:text-3xl text-gray-800">{title}</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 font-medium">
          See All
        </button>
      </div>
      <div className="w-full border-b border-gray-300 bg-gradient-to-r from-red-500 to-yellow-500 mt-4 rounded-full"></div>
    </div>
  )
}

// Define propTypes for Title component
Title.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
}

export default Title
