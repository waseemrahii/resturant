// import React from 'react'
// import FooterTop from './FooterTop'
// // import FooterContectUs from './FooterContectUs'
// // import FooterCopyRight from './FooterCopyRight'

// const Footer = () => {
//   return (
//     <div>
//       <img src="https://foodieweb.siswebapp.com/img/footer-bg.jpg" className='w-full h-full  object-cover absolute z-0' alt="Footer background" />
//       <div className='w-full h-full bg-black opacity-90 absolute  z-10'></div>
//       <FooterTop/>
//       {/* <FooterContectUs/> */}
//       {/* <FooterCopyRight/> */}
//     </div>
//   )
// }

// export default Footer



import React from 'react'
import FooterTop from './FooterTop'
// import FooterContectUs from './FooterContectUs'
// import FooterCopyRight from './FooterCopyRight'

const Footer = () => {
  return (
    <div className="relative ">
      <img 
        src="https://foodieweb.siswebapp.com/img/footer-bg.jpg" 
        className='w-full h-full object-cover absolute top-0 left-0 z-0' 
        alt="Footer background" 
      />
      <div className='w-full h-full bg-black opacity-90 absolute top-0 left-0 z-10'></div>
      <div className="relative z-20">
        <FooterTop />
        {/* <FooterContectUs/> */}
        {/* <FooterCopyRight/> */}
      </div>
    </div>
  )
}

export default Footer
