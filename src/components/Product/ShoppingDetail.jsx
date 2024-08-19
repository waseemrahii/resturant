import React from 'react';
import { FaLock, FaUndo, FaCheckCircle } from 'react-icons/fa';

const ShoppingDetail = () => {
  const items = [
    { text: 'Safe Payment', icon: <FaLock />, color: 'green' },
    { text: '7 Days Return Policy', icon: <FaUndo />, color: 'blue' },
    { text: '100% Authentic Foods', icon: <FaCheckCircle />, color: 'red' },
  ];

  return (
    <div className="flex justify-end mt-4">
      <div className='w-72 h-48 rounded border p-4'>
        {items.map((item, index) => (
          <div key={index} className="flex items-center mb-2 py-2">
            <span className="mr-2" style={{ color: item.color }}>{item.icon}</span>
            <span className='text-gray-600'>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingDetail;