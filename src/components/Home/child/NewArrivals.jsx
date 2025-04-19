// import React from 'react';
// import Title from "./Title";
// import PropTypes from 'prop-types'; // Import PropTypes for validation
// import { newarrivals } from '../../../utils/Utils';
// import ArrivalsCard from './ArrivalsCard';

// const NewArrivals = ({ title }) => {
//   // Slice the array to get only the first five elements

//   return (
//     <>
//       <div className=''>
//         <Title title={title} />
//         <div className="py-4">
//         <ArrivalsCard images={newarrivals}/>
//         </div>
//       </div>
//     </>
//   );
// };

// // Prop types validation
// // Correct the prop validation for 'images' instead of 'rest'
// NewArrivals.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// export default NewArrivals;



import Title from "./Title"
import PropTypes from "prop-types" // Import PropTypes for validation
import { newarrivals } from "../../../utils/Utils"
import ArrivalsCard from "./ArrivalsCard"

const NewArrivals = ({ title }) => {
  return (
    <div className="mt-8">
      <Title title={title} />
      <div className="py-6">
        <ArrivalsCard images={newarrivals} />
      </div>
    </div>
  )
}

// Prop types validation
NewArrivals.propTypes = {
  title: PropTypes.string.isRequired,
}

export default NewArrivals
