import React from 'react'
import Footer from '../footer/footer/Footer'
import Mainheader from '../header/Mainheader'
import Cos from './contents/Cos'
import Homemaincontents from './contents/Homemaincontents'
import Aivideo from './contents/Aivideo'
import Maincarosal from './maincontents/Maincarosal'
function MainHome() {
  return (
    <div>
        <Mainheader/>
        <Cos/>
        <div className="mt-3">
          <Maincarosal/>
          {/* <Homemaincontents/> */}
          
        </div>

        {/* <Footer/> */}
    </div>
  )
}

export default MainHome