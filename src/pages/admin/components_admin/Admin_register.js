import React, { useState } from 'react'
import Mainheader from '../../../header/Mainheader'
import Loader_one from '../../../components/Loader_one'
import { AdminRegister } from '../../../services/Allapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Admin_register() {

    const [loader,setloader]=useState(false)
    const [inputData,setinputData]=useState({
        username:"",
        mobile:"",
        password:""
      })
    
      const inputvalue=(e)=>{
        const {name,value}=e.target
        setinputData({...inputData,[name]:value})
      }
      const nav=useNavigate()
      console.log(inputData);

      const RegisterData=async(e)=>{
        e.preventDefault()
        const {username,mobile,password}=inputData
          
        if(username==="" || mobile==="" || password===""){
            toast.error("Fields cannot be empty")
        }
        else{
            const data=new FormData()
            data.append("username",username)
            data.append("mobile",mobile)
            data.append("password",password)
            try{
                const response=await AdminRegister(data)
                console.log(response);
                if(response.status===200){
                    setloader(true)
                    
                    setTimeout(() => {
                        setloader(false)
                        nav('/login_admin')

                        
                    }, 3000);

                }

            }
            catch(err){
                console.log(err);
            }
        }

      }
  return (
    <>
    <Mainheader/>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-400 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Admin Register  <i class="fa-solid fa-user-lock"></i></h2>
        <form>
           { loader===false?<div className="">
           <div className="mb-4">
            <label htmlFor="text" className="block text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              value={inputData.username} onChange={inputvalue}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your Registered mobile number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-600">Mobile</label>
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
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your password"
              value={inputData.password} onChange={inputvalue}
            />
          </div>
          <button onClick={RegisterData}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Log In
          </button>
          <div className="mt-2">
            <div className="row">
                <div className="col-lg-6">

                </div>
            </div>
            <p href="">Already hve an account click here <a className='registerplus' href="/login_admin">Login<i class="fa-solid fa-user"></i><i class="fa-solid fa-plus"></i></a> </p>
          </div>


            </div>:<Loader_one/>}
       
        </form>
       

      </div>
    </div> 
    
    <ToastContainer position='top-center'/>

    </>
  )
}

export default Admin_register