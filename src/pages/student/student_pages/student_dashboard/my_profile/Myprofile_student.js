import React from 'react'
import Dashboard_navbar_student from '../../student_components/Dashboard_navbar_student'
import { button } from '@material-tailwind/react'

function Myprofile_student() {
  return (
    <>
    <Dashboard_navbar_student/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-400 to-violet-600">
       <div className="max-w-md mx-auto bg-white p-4 shadow-lg rounded-lg">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/17/17004.png" // Replace with the actual URL of the profile picture
          alt="User Profile"
          className="w-32 h-32 rounded-full border-4 border-indigo-600"
        />
        <button className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-2 h-10 ms-3 mt-10 rounded">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
      </div>

      {/* User Info */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">John Doe <button className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-2 h-10 ms-3  rounded">
        <i class="fa-solid fa-pen-to-square"></i>
    </button></h2> 
        <span className="bg-indigo-600 text-white text-sm px-2 py-1 rounded-full mt-2">
          Premium
        </span>
      </div>

      {/* Contact Info */}
      <div className="mt-4">
        <div className="flex items-center mb-2">
        <button className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-2 h-10   rounded">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
          <span className="text-gray-600 ms-2">Email:</span>
          <span className="ml-2 text-indigo-600">johndoe@example.com</span>
          
        </div>
        <div className="flex items-center">
        <button className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-2 h-10  rounded">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
          <span className="text-gray-600 ms-2">Mobile:</span>
          <span className="ml-2 text-indigo-600">123-456-7890</span>
        </div>
        <div className="flex items-center mt-2">
        <button className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-2 h-10  rounded">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
          <span className="text-gray-600 ms-2">Adress:</span>
          <span className="ml-2 text-indigo-600">123-456-7890</span>
        </div>

        <div className="flex items-center mt-2">
        <button className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-2 h-10  rounded">
        <i class="fa-solid fa-pen-to-square"></i>
    </button>
          <span className="text-gray-600 ms-2">course:</span>
          <span className="ml-2 text-indigo-600">Tally</span>
        </div>
        <div className="flex items-center mt-2">
     
          <span className="text-gray-600 ms-8">MileStone:</span>
          <span className="ml-2 text-indigo-600">60%</span>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Myprofile_student