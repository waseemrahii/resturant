import React from 'react'
import { accordionData } from '../../utils/Utils'
import Accordion from './Child/Accordion'

const Faqs = () => {
  return (
    <div>
        <Accordion data={accordionData} />
    </div>
  )
}

export default Faqs
