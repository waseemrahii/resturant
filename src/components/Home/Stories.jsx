import { useState } from 'react';
import Stories from 'stories-react';
import { Modal, Box } from '@mui/material';
import PropTypes from 'prop-types';

const RestaurantStories = ({ restaurants }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index); // Set the index of the clicked restaurant
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center bg-black p-2 items-center">
      {restaurants.map((restaurant, index) => (
        <button
          key={restaurant.id} // Use restaurant.id as the key
          onClick={() => handleOpen(index)}
          className="relative focus:outline-none m-2"
        >
          {restaurant.media.type === "video" ? (
            <video
              className="w-32 h-32 md:w-48 md:h-48 lg:w-36 lg:h-36 object-cover rounded-sm shadow-lg"
              controls={false}
              autoPlay
              loop
            >
              <source src={restaurant.media.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={restaurant.media.url}
              alt={`Story Thumbnail ${index}`}
              className="w-32 h-32 md:w-48 md:h-48 lg:w-36 lg:h-36 object-cover rounded-sm shadow-lg"
            />
          )}
          <h2 className="absolute bottom-0 inset-0 flex justify-center text-white text-sm md:text-lg lg:text-xl bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 p-2 w-full text-center">
            {restaurant.title}
          </h2>
        </button>
      ))}


<Modal open={open} onClose={handleClose}>
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
          onClick={handleClose}
        >
          <Box
            sx={{
              width: 400,
              height: 600,
            }}
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {restaurants[currentIndex] && (
              <Stories
                stories={restaurants[currentIndex].stories.map(story => ({
                  ...story,
                  duration: story.duration || 5000, // Default duration if not specified
                }))}
                onAllStoriesEnd={handleClose} // Assuming this closes the modal when all stories end
              />
            )}
          </Box>
        </div>
      </Modal>
    </div>
  );
};

RestaurantStories.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      media: PropTypes.shape({
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
      stories: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          duration: PropTypes.number, // Added duration prop type
        })
      ).isRequired,
    })
  ).isRequired,
};

export default RestaurantStories;
