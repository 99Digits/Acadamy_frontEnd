import React from 'react'
import Dashboard_navbar_student from '../../student_components/Dashboard_navbar_student'

function View_profile_student() {
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
      </div>

      {/* User Info */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">John Doe</h2>
        <span className="bg-indigo-600 text-white text-sm px-2 py-1 rounded-full mt-2">
          Premium
        </span>
      </div>

      {/* Contact Info */}
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.293 4.293a1 1 0 011.414 0L5 5.586V16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-2 0V4a1 1 0 00-1-1H3a1 1 0 00-1 1v8.586l-1.293-1.293a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 111.414 1.414L10.414 13H16a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a2 2 0 012-2h1a1 1 0 010 2H4a2 2 0 01-2-2V5a2 2 0 012-2h1a1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">Email:</span>
          <span className="ml-2 text-indigo-600">johndoe@example.com</span>
          
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.293 4.293a1 1 0 011.414 0L5 5.586V16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-2 0V4a1 1 0 00-1-1H3a1 1 0 00-1 1v8.586l-1.293-1.293a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 111.414 1.414L10.414 13H16a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a2 2 0 012-2h1a1 1 0 010 2H4a2 2 0 01-2-2V5a2 2 0 012-2h1a1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">Mobile:</span>
          <span className="ml-2 text-indigo-600">123-456-7890</span>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.293 4.293a1 1 0 011.414 0L5 5.586V16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-2 0V4a1 1 0 00-1-1H3a1 1 0 00-1 1v8.586l-1.293-1.293a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 111.414 1.414L10.414 13H16a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a2 2 0 012-2h1a1 1 0 010 2H4a2 2 0 01-2-2V5a2 2 0 012-2h1a1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">Adress:</span>
          <span className="ml-2 text-indigo-600">123-456-7890</span>
        </div>

        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.293 4.293a1 1 0 011.414 0L5 5.586V16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-2 0V4a1 1 0 00-1-1H3a1 1 0 00-1 1v8.586l-1.293-1.293a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 111.414 1.414L10.414 13H16a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a2 2 0 012-2h1a1 1 0 010 2H4a2 2 0 01-2-2V5a2 2 0 012-2h1a1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">course:</span>
          <span className="ml-2 text-indigo-600">Tally</span>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.293 4.293a1 1 0 011.414 0L5 5.586V16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2h10a2 2 0 012 2v1a1 1 0 01-2 0V4a1 1 0 00-1-1H3a1 1 0 00-1 1v8.586l-1.293-1.293a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 111.414 1.414L10.414 13H16a2 2 0 012 2v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1a2 2 0 012-2h1a1 1 0 010 2H4a2 2 0 01-2-2V5a2 2 0 012-2h1a1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-gray-600">MileStone:</span>
          <span className="ml-2 text-indigo-600">60%</span>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default View_profile_student