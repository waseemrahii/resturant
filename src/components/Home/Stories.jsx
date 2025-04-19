// import { useState } from 'react';
// import Stories from 'stories-react';
// import { Modal, Box } from '@mui/material';
// import PropTypes from 'prop-types';

// const RestaurantStories = ({ restaurants }) => {
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleOpen = (index) => {
//     setCurrentIndex(index); // Set the index of the clicked restaurant
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   return (
//     <div className="flex justify-center bg-black p-2 items-center">
//       {restaurants.map((restaurant, index) => (
//         <button
//           key={restaurant.id} // Use restaurant.id as the key
//           onClick={() => handleOpen(index)}
//           className="relative focus:outline-none m-2"
//         >
//           {restaurant.media.type === "video" ? (
//             <video
//               className="w-32 h-32 md:w-48 md:h-48 lg:w-36 lg:h-36 object-cover rounded-sm shadow-lg"
//               controls={false}
//               autoPlay
//               loop
//             >
//               <source src={restaurant.media.url} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           ) : (
//             <img
//               src={restaurant.media.url}
//               alt={`Story Thumbnail ${index}`}
//               className="w-32 h-32 md:w-48 md:h-48 lg:w-36 lg:h-36 object-cover rounded-sm shadow-lg"
//             />
//           )}
//           <h2 className="absolute bottom-0 inset-0 flex justify-center text-white text-sm md:text-lg lg:text-xl bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 p-2 w-full text-center">
//             {restaurant.title}
//           </h2>
//         </button>
//       ))}


// <Modal open={open} onClose={handleClose}>
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
//           onClick={handleClose}
//         >
//           <Box
//             sx={{
//               width: 400,
//               height: 600,
//             }}
//             className="w-full max-w-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {restaurants[currentIndex] && (
//               <Stories
//                 stories={restaurants[currentIndex].stories.map(story => ({
//                   ...story,
//                   duration: story.duration || 5000, // Default duration if not specified
//                 }))}
//                 onAllStoriesEnd={handleClose} // Assuming this closes the modal when all stories end
//               />
//             )}
//           </Box>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// RestaurantStories.propTypes = {
//   restaurants: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       media: PropTypes.shape({
//         type: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       }).isRequired,
//       stories: PropTypes.arrayOf(
//         PropTypes.shape({
//           type: PropTypes.string.isRequired,
//           url: PropTypes.string.isRequired,
//           duration: PropTypes.number, // Added duration prop type
//         })
//       ).isRequired,
//     })
//   ).isRequired,
// };

// export default RestaurantStories;




import { useState } from "react"
import Stories from "stories-react"
import { Modal, Box } from "@mui/material"
import PropTypes from "prop-types"

const RestaurantStories = ({ restaurants }) => {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOpen = (index) => {
    setCurrentIndex(index) // Set the index of the clicked restaurant
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  return (
    <div className="flex justify-center bg-black p-4 items-center">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Featured Stories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {restaurants.map((restaurant, index) => (
            <button
              key={restaurant.id} // Use restaurant.id as the key
              onClick={() => handleOpen(index)}
              className="relative focus:outline-none group transform transition-all duration-300 hover:scale-105"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 overflow-hidden rounded-lg shadow-lg">
                {restaurant.media.type === "video" ? (
                  <video className="w-full h-full object-cover" controls={false} autoPlay loop muted>
                    <source src={restaurant.media.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={restaurant.media.url || "/placeholder.svg"}
                    alt={`Story Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-white text-center font-bold text-sm md:text-base px-2">{restaurant.title}</h2>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-500"></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center" onClick={handleClose}>
          <Box
            sx={{
              width: { xs: "90%", sm: 400 },
              height: { xs: "70%", sm: 600 },
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            {restaurants[currentIndex] && (
              <Stories
                stories={restaurants[currentIndex].stories.map((story) => ({
                  ...story,
                  duration: story.duration || 5000, // Default duration if not specified
                }))}
                onAllStoriesEnd={handleClose} // Closes the modal when all stories end
              />
            )}
          </Box>
        </div>
      </Modal>
    </div>
  )
}

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
        }),
      ).isRequired,
    }),
  ).isRequired,
}

export default RestaurantStories



// import { useState } from "react"
// import Stories from "stories-react"
// import { Modal, Box } from "@mui/material"
// import PropTypes from "prop-types"
// import { FaPlay } from "react-icons/fa"

// const RestaurantStories = ({ restaurants }) => {
//   const [open, setOpen] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const handleOpen = (index) => {
//     setCurrentIndex(index) // Set the index of the clicked restaurant
//     setOpen(true)
//   }

//   const handleClose = () => setOpen(false)

//   return (
//     <div className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
//             Featured Stories
//           </span>
//         </h2>

//         <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 scrollbar-hide justify-center md:justify-start">
//           {restaurants.map((restaurant, index) => (
//             <button
//               key={restaurant.id}
//               onClick={() => handleOpen(index)}
//               className="relative focus:outline-none group flex-shrink-0 transform transition-all duration-300 hover:scale-105"
//             >
//               <div className="w-28 h-40 md:w-32 md:h-48 overflow-hidden rounded-xl shadow-lg">
//                 {restaurant.media.type === "video" ? (
//                   <div className="relative w-full h-full">
//                     <video className="w-full h-full object-cover brightness-75" muted>
//                       <source src={restaurant.media.url} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="bg-white/30 p-2 rounded-full backdrop-blur-sm">
//                         <FaPlay className="text-white" />
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <img
//                     src={restaurant.media.url || "/placeholder.svg"}
//                     alt={`Story Thumbnail ${index}`}
//                     className="w-full h-full object-cover brightness-75"
//                   />
//                 )}

//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

//                 {/* Content */}
//                 <div className="absolute inset-x-0 bottom-0 p-3 text-white">
//                   <h3 className="font-bold text-sm">{restaurant.title}</h3>
//                   <div className="mt-1 flex">
//                     <div className="h-1 flex-grow rounded-full bg-white/30 overflow-hidden">
//                       <div className="h-full w-1/3 bg-red-500 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Top border */}
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-t-xl"></div>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div className="fixed inset-0 bg-black/90 flex justify-center items-center" onClick={handleClose}>
//           <Box
//             sx={{
//               width: { xs: "90%", sm: 400 },
//               height: { xs: "70%", sm: 600 },
//               maxWidth: "100%",
//               maxHeight: "100%",
//               borderRadius: "16px",
//               overflow: "hidden",
//               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
//             }}
//             className="relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {restaurants[currentIndex] && (
//               <Stories
//                 stories={restaurants[currentIndex].stories.map((story) => ({
//                   ...story,
//                   duration: story.duration || 5000, // Default duration if not specified
//                 }))}
//                 onAllStoriesEnd={handleClose} // Closes the modal when all stories end
//                 storyStyles={{
//                   objectFit: "cover",
//                   borderRadius: "16px",
//                 }}
//               />
//             )}
//           </Box>
//         </div>
//       </Modal>
//     </div>
//   )
// }

// RestaurantStories.propTypes = {
//   restaurants: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       media: PropTypes.shape({
//         type: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       }).isRequired,
//       stories: PropTypes.arrayOf(
//         PropTypes.shape({
//           type: PropTypes.string.isRequired,
//           url: PropTypes.string.isRequired,
//           duration: PropTypes.number, // Added duration prop type
//         }),
//       ).isRequired,
//     }),
//   ).isRequired,
// }

// export default RestaurantStories
