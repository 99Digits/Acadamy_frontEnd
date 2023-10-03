import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ReactTyped from 'react-typed'
// import '../../bootstrap.min.css'

import './homemaincontents.css'
import Aivideo from './Aivideo'

function Homemaincontents() {
  return (
    <div>
    <Container>
      <div className="text-center">
        <div className="welcome">
          <h4 className='animate__animated animate__slideInRight welcome_h4'>WELCOME TO &nbsp; <span className='welcome-logo'>99Digits</span></h4>   
        
        </div>
      </div>

        <div className="mx-auto mt-4">
          <h5 className='typed_data'>WE are &nbsp;
          <span className='typed_color'>
          <ReactTyped 
                          strings={['We are an AI-integrated leading IT Services','Consulting, Digital Marketing','Branding Solutions company. ']}
                          loop={true}
                          typeSpeed={50}
             />
          </span>
          
          </h5>
            

        </div>
    </Container>
    <Aivideo/>

    {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="classNamemd:flex">
    <div className="md:shrink-0">
     
    </div>
   <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div> */}
    
    </div>
  )
}

export default Homemaincontents