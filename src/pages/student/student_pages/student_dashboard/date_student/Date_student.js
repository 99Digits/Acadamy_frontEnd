import React from 'react'
import { useState } from 'react';
import Dashboard_navbar_student from '../../student_components/Dashboard_navbar_student';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Date_student() {
    const [date, setDate] = useState('');
    const [isPresent, setIsPresent] = useState(false);
  
    const handleDateChange = (e) => {
      setDate(e.target.value);
    };
  
    const handleAttendanceChange = (e) => {
      setIsPresent(e.target.checked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here, you can submit the attendance data to your backend or perform any other actions.
      // For this example, we'll just log the data to the console.
      console.log(`Date: ${date}, Attendance: ${isPresent ? 'Present' : 'Absent'}`);

      if(isPresent===true){
        toast.success("Attendance Registered as present")

      }
      else{
        toast.error("Attendance Registered as Absent")

      }

    };
    const submitAttend=()=>{
           toast.success("Attendance Registered Successfully")
    }
  
  return (
    <>

    <Dashboard_navbar_student/>
    <div className="bg-gradient-to-r from-gray-400 to-black-600">

    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">Attendance Reporting</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            className="w-full border rounded-md py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 ">Attendance</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="attendance"
              checked={isPresent}
              onChange={handleAttendanceChange}
              className="form-checkbox text-indigo-600"
            />
            <span className="ml-2">Present</span>
          </label>
        </div>
        <button onClick={handleSubmit}
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          Submit Attendance
        </button>
      </form>
    </div>
    </div>
    <ToastContainer position='top-center'/>

    
    
    </>
  )
}

export default Date_student