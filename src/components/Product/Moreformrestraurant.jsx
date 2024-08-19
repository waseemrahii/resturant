


import React from 'react';
import RestaurantCard from '../Search/RestaurantCard';
import Restaurantcard from './Restraurantcard';


const  Moreformrestraurant = () => {
 
  return (
    <div className="flex justify-end mt-4">
      <div className='w-96  rounded border p-4'>
        
        <div className='flex items-center justify-center'>
       <h1 className='text-xl'>More From The Restaurant</h1>
      </div>
      
      <div className='flex flex-col'>
        <Restaurantcard/>



      </div>
      
      </div>
    </div>
  );
};

export default  Moreformrestraurant;