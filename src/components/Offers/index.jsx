import React from 'react'
import CouponsList from './CouponsList'
import { couponsdata } from '../../utils/Utils'

const Offers = () => {
  return (
    <div className='w-[80%] mx-auto '>
      <CouponsList coupansdata={couponsdata}/>
    </div>
  )
}

export default Offers
