import React from 'react'
import Terms from '../../components/TermsConditions/Terms'
import { termsData } from '../../utils/Utils'

const TermsAndConditions = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <Terms terms={termsData} />  
    </div>
  )
}

export default TermsAndConditions
