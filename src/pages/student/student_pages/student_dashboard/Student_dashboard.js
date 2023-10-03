import React from 'react'
import Dashboard_navbar_student from '../student_components/Dashboard_navbar_student'
import Onscrool_corosal from '../others/Onscrool_corosal'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Student_dashboard() {
  const nav=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      alert("LoginRequired")
      nav('/')

    }
  })
  
  return (
    <>
    <Dashboard_navbar_student/>
    <Onscrool_corosal/>
    </>
  )
}

export default Student_dashboard