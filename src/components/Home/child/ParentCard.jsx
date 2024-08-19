import Title from "./Title";
import PropTypes from 'prop-types'; // Import PropTypes for validation
import Card from '../../Cards/Card';

const ParentCard = ({ title, rest }) => {
  // Slice the array to get only the first five elements
  const displayedRestaurants = rest.slice(0, 4);

  return (
    <>
      <div >
        <Title title={title} />
        <div className=" grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedRestaurants.map((restaurant) => (
            <Card key={restaurant.id} restaurant={restaurant} /> // Corrected from rest to restaurant
          ))}
        </div>
      </div>
    </>
  );
};

// Prop types validation
ParentCard.propTypes = {
  title: PropTypes.string.isRequired,
  rest: PropTypes.array.isRequired, // Added validation for 'rest'
};

export default ParentCard;
