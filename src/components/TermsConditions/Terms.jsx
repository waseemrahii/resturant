import React from "react";
import PropTypes from "prop-types";

const Terms = ({ terms }) => {
  return (
    <div className="p-16 ml-5">
      {terms.map((section, index) => (
        <div key={index} className="pt-5">
          {section.title && (
            <p className="text-sm text-black pt-5">{section.title}</p>
          )}
          {section.paragraphs &&
            section.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className={`text-sm ${
                  pIndex === 0 ? "text-gray-700" : "text-black"
                } mt-5`}
              >
                {paragraph}
              </p>
            ))}
          {section.items &&
            section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-col pt-5">
                <p className="text-sm text-black">
                  <span>{item.number}</span>
                  <span className="text-gray-700 text-sm"> {item.text}</span>
                </p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

Terms.propTypes = {
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
      items: PropTypes.arrayOf(
        PropTypes.shape({
          number: PropTypes.string,
          text: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Terms;
