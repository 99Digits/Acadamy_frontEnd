import React, { useState } from 'react'
import './adminlogin.css';
import Loader_one from '../../../components/Loader_one';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-toastify/dist/ReactToastify.css';
import { AdminsLogin } from '../../../services/Allapi';
import { useNavigate } from 'react-router-dom';
function AdminLogin() {

    const [loader,setloader]=useState(false)
    const [inputData,setinputData]=useState({
        mobile:"",
        password:""
      })
      const inputvalue=(e)=>{
        const {name,value}=e.target
        setinputData({...inputData,[name]:value})
      }
       console.log(inputData);

       const LoginData=async(e)=>{
        e.preventDefault()
        const {mobile,password}=inputData
           
        if(mobile ==="" || password ===""){
            toast.error("fields cannot be empty")
        }
        else{
            const data=new FormData()
            data.append("mobile",mobile)
            data.append("password",password)

            try{
                const response=await AdminsLogin(data)
                console.log(response);
                if(response.status===200){
                  toast.success("Login successfully")
                  setloader(true)
                  setTimeout(() => {
                    nav('/')
                    setloader(false)
                  }, 2000);
                }
                

            }
            catch(err){

            }


        }
       }
       const nav=useNavigate()

  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Admin Login <i class="fa-solid fa-user-lock"></i></h2>
        <form>
         {loader===false? <div className="">

          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-600">Mobile</label>
            <input
              type="number"
              name="mobile"
              value={inputData.mobile} onChange={inputvalue}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your Registered mobile number"
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
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Log In
          </button>
          <div className="mt-2">
            <div className="row">
                <div className="col-lg-6">

                </div>
            </div>
            <p>Already have an account click here to <a className='registerplus' href="admin_register">Register <i class="fa-solid fa-user"></i><i class="fa-solid fa-plus"></i></a> </p>
          </div>
          </div>:<Loader_one/>
          }
        </form>
      </div>
    </div> 
    <ToastContainer position='top-center'/>

    </>
  )
}

export default AdminLogin