import PropTypes from "prop-types"; // Import PropTypes

const Title = ({ title }) => {
  return (
    <div className="pt-10">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl font-bold">{title}</h1>
        <button className="bg-primary-900 text p-1 rounded-md hover:shadow-md">See All</button>
      </div>
      <div className="w-full border-b border-gray-300 mt-5"></div>
    </div>
  );
};

// Define propTypes for Title component
Title.propTypes = {
  title: PropTypes.string.isRequired, // title is required and must be a string
};

export default Title;