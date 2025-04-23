// import PropTypes from "prop-types";

// const PrivacyItems = ({ policy }) => {
//   return (
//     <div className="p-16 ml-5">
//       {policy.map((section, index) => (
//         <div key={index} className="pt-5">
//           {section.title && (
//             <p className="text-sm text-black pt-5">{section.title}</p>
//           )}
//           {section.paragraphs &&
//             section.paragraphs.map((paragraph, pIndex) => (
//               <p
//                 key={pIndex}
//                 className={`text-sm ${
//                   pIndex === 0 ? "text-gray-700" : "text-black"
//                 } mt-5`}
//               >
//                 {paragraph}
//               </p>
//             ))}
//           {section.items &&
//             section.items.map((item, itemIndex) => (
//               <div key={itemIndex} className="flex flex-col pt-5">
//                 <p className="text-sm text-black">
//                   <span>{item.number}</span>
//                   <span className="text-gray-700 text-sm"> {item.text}</span>
//                 </p>
//               </div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// PrivacyItems.propTypes = {
//   policy: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       paragraphs: PropTypes.arrayOf(PropTypes.string),
//       items: PropTypes.arrayOf(
//         PropTypes.shape({
//           number: PropTypes.string,
//           text: PropTypes.string,
//         })
//       ),
//     })
//   ).isRequired,
// };

// export default PrivacyItems;



import PropTypes from "prop-types"

const PrivacyItems = ({ policy }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Privacy Policy</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How We Protect Your Data
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Last updated: April 23, 2023</p>
        </div>

        <div className="prose prose-lg max-w-none">
          {policy.map((section, index) => (
            <div key={index} className="mb-8">
              {section.title && <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>}

              {section.paragraphs &&
                section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}

              {section.items && (
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">
                      <span className="font-medium">{item.number}</span> {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

PrivacyItems.propTypes = {
  policy: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      items: PropTypes.arrayOf(
        PropTypes.shape({
          number: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
}

export default PrivacyItems
