import React from 'react'

function Notification_card({ title, message, type }) {
    let bgColorClass = '';
    if (type === 'success') {
      bgColorClass = 'bg-green-200';
    } else if (type === 'info') {
      bgColorClass = 'bg-blue-200';
    } else if (type === 'warning') {
      bgColorClass = 'bg-yellow-200';
    } else if (type === 'error') {
      bgColorClass = 'bg-red-200';
    }
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColorClass} mb-8 sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:w-1/1`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2">{message}</p>
  </div>
  )
}

export default Notification_card