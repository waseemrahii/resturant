import React from 'react';

const Services = () => {
  return (
    <div>
      <h1 className='font-bold text-xl'>SERVICES</h1>

      <div className='mt-2 flex items-center'>
        <div className='w-8 h-1 bg-red-500'></div>
        <div className='w-16 h-1 bg-gray-200'></div>
      </div>
      
      <ul className=' mt-4'>
        <li>Delivery support</li>
        <li>Contact us</li>
        <li>Terms of use</li>
        <li>About us</li>
      </ul>
    </div>
  );
}

export default Services;
