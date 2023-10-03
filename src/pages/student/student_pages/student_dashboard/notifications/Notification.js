import React from 'react'
import Dashboard_navbar_student from '../../student_components/Dashboard_navbar_student'
import Notification_card from './Notification_card'
function Notification() {
  return (
    <div>
        <Dashboard_navbar_student/>

        <div className="flex justify-center items-center h-screen">
      <Notification_card
        title="Warning"
        message="payment Pending"
        type="error"
      />
      <Notification_card
        title="Information"
        message="Tomorrow class Starts @9am and ends on 11am"
        type="info"
      />
    
    </div>

    </div>
  )
}

export default Notification