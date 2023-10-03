import React, { useEffect, useState } from 'react'
import './cos.css'
import { Carousel } from 'react-carousel3'

function Cos() {
    const style = {
        width: 500,
        height: 346,
        
      };    
  return (
    <div>
    
        <div className="row">
            
            <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #16235e 0%, #020223 100%)',
      overflow: 'hidden'

    }}
  >
    <Carousel height={460} width={980} Origin={42} yRadius={48} autoPlay={true}>
      <div key={1} style={style}>
        <img className='img1' alt="" src="https://trainings.internshala.com/cached_uploads/tally/signup_page_media/illustration-images/placement.png" />
      </div>
      <div key={2} style={style}>
        <img className='img1' alt="" src="https://burlingtonenglish.in/app/uploads/hero-image-courses-online-min.png" />
      </div>
      <div key={3} style={style}>
        <img className='img1' alt="" src="https://download.blender.org/branding/community/blender_community_badge_orange.png" />
      </div>
      <div  key={4} style={style}>
        <img className='img1' alt="" src="https://logodownload.org/wp-content/uploads/2019/10/adobe-premiere-pro-logo-0-1.png" />
      </div>
      <div key={5} style={style}>
        <img className='img1' alt="" src="https://i.pinimg.com/originals/5c/98/5e/5c985e0b67da1a2f01c07a30996f128f.png" />
      </div>
      <div key={6} style={style}>
        <img className='img1' alt="" src="https://download.logo.wine/logo/Adobe_After_Effects/Adobe_After_Effects-Logo.wine.png" />
      </div>

      <div key={7} style={style}>
        <img className='img1' alt="" src="https://trainings.internshala.com/cached_uploads/tally/signup_page_media/illustration-images/why-learn.png" />
      </div>
      <div key={8} style={style}>
        <img className='img1' alt="" src="https://pngimg.com/uploads/yoga/yoga_PNG125.png" />
      </div>
      <div key={9} style={style}>
        <img className='img1' alt="" src="https://pngimg.com/d/yoga_PNG36.png" />
      </div>
    </Carousel>
  </div>
            </div>
        </div>
     
   
  )
}

export default Cos