
import React, { useState } from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri'; // Import the icon
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  return (
    <div className="w-[80vw] rounded-lg mx-auto my-8">
      {data.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl  font-semibold mb-4">{section.category}</h2>
          {section.items.map((item, idx) => (
            <AccordionItem key={idx} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
