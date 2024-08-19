import { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

const AccordionItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mb-4  text-sm text-gray-600 rounded-xl shadow-md"> {/* Add shadow class here */}
        <div>
          <button
            className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{item.question}</span>
            <RiArrowDropDownFill className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} /> {/* Use the icon here */}
          </button>
          {isOpen && <div className="p-3 bg-gray-50 border-t">{item.answer}</div>} {/* Add border-top to answer */}
        </div>
      </div>
    );
  };

  export default AccordionItem;
