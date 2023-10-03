import React, { useState } from 'react'
import Mainheader from '../../../header/Mainheader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loader_one from '../../../components/Loader_one'
import { studentlogin } from '../../../services/Allapi'
import { useNavigate } from 'react-router-dom';
function StudentLogin() {
    const [loader,setloader]=useState(false)
    const [inputData,setinputData]=useState({
        
      
        email:"",
        
        password:""
      })
    
      const inputvalue=(e)=>{
        const {name,value}=e.target
        setinputData({...inputData,[name]:value})
      }
      console.log(inputData);
         const nav=useNavigate()
      const LoginData=async(e)=>{
        e.preventDefault()
        const {email,password}=inputData
        if(email==="" || password===""){
                toast.error("fields cannot Be Empty")
        }
        else{
            const data=new FormData()
            data.append("email",email)
            data.append("password",password)
            const response=await studentlogin(data)
            console.log(response);
            if(response.status===200){
                setloader(true)
                toast.success("Login Success")
                localStorage.setItem("token",response.data['token'])
               
                setTimeout(() => {
                    setloader(false)
                    nav('/student_dashboard')
                }, 3000);
            }
            else{
                toast.error("email or password was incorrect")
            }
        }
      }

  return (
    <>
    <Mainheader/>
    <div className="">

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-400 to-green-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Student Login <i class="fa-solid fa-graduation-cap"></i></h2>
        <form>
         {loader===false? <div className="">

          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-600">Email</label>
            <input
              type="text"
              name="email"
              value={inputData.email} onChange={inputvalue}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your Registered email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputData.password} onChange={inputvalue}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={LoginData}
            className="w-full bg-gradient-to-r from-yellow-400 to-green-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Log In <i class="fa-solid fa-key"></i>
          </button>
          <div className="mt-2">
            <div className="row">
                <div className="col-lg-6">

                </div>
            </div>
            <p>Already have an account click here to <a className='registerplus' href="student_register">Register <i class="fa-solid fa-user"></i><i class="fa-solid fa-plus"></i></a> </p>
          </div>
          </div>:<Loader_one/>
          }
        </form>
      </div>
    </div> 
    <ToastContainer position='top-center'/>
    </div>
    </>
  )
}

export default StudentLogin