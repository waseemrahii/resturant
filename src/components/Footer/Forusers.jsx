import React from 'react'

const Forusers = () => {
  return (
    <div>
      <h1 className='font-bold text-xl'>FOR USERS</h1>

      <div className='mt-2 flex items-center'>
        <div className='w-8 h-1 bg-red-500'></div>
        <div className='w-16 h-1 bg-gray-200'></div>
      </div>
      
      <ul className=' mt-4'>
        <li>User login</li>
        <li>User Register</li>
        <li>Account Setting</li>
        
      </ul>
    </div>
  )
}

export default Forusers
