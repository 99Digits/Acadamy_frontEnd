import React, { useState } from 'react'
import Mainheader from '../../../header/Mainheader'
import Loader_one from '../../../components/Loader_one'
import { Studentregister } from '../../../services/Allapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function StudentRegiser() {

    const [loader,setloader]=useState(false)
    const [inputData,setinputData]=useState({
        username:"",
        email:"",
        mobile:"",
        password:""
      })
    
      const inputvalue=(e)=>{
        const {name,value}=e.target
        setinputData({...inputData,[name]:value})
      }
      console.log(inputData);
       const nav=useNavigate()
      const Register_student=async(e)=>{
        e.preventDefault()
        const {username,email,mobile,password}=inputData
        if(username ==="" || email ==="" || mobile==="" || password===""){
            toast.error("Fields cannot be empty")

        }
        else{
            const datas=new FormData()
            datas.append("username",username)
            datas.append("email",email)
            datas.append("mobile",mobile)
            datas.append("password",password)

            try{
                const response=await Studentregister(datas)
                if(response.status===200){
                     toast.success("Registration Success")
                     setloader(true)
                     setTimeout(() => {
                        setloader(false)
                        nav('/student_login')
                     }, 3000);
                }
                else{
                    toast.error("Student Already Exists")
                }
                console.log(response);

            }
            catch(err){
                console.log(err);
            }
        }
      }
  return (
    <>
        <Mainheader/>

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-black-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Student Register <i class="fa-solid fa-graduation-cap"></i> <i class="fa-solid fa-plus"></i></h2>
        <form>
         {loader===false? <div className="">
         <div className="mb-4">
            <label htmlFor="text" className="block text-gray-600">username</label>
            <input
              type="text"
              name="username"
              value={inputData.username} onChange={inputvalue}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">email</label>
            <input
              type="email"
              name="email"
              value={inputData.email} onChange={inputvalue}
              className="w-full border rounded-md py-2 px-3"
              placeholder="Enter your emailr"
            />
          </div>
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
          <button onClick={Register_student}
            className="w-full bg-gradient-to-r from-green-400 to-blue-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Sign Up <i class="fa-solid fa-user-plus"></i>
          </button>
          <div className="mt-2">
            <div className="row">
                <div className="col-lg-6">

                </div>
            </div>
            <p>Already hv an acount <a className='registerplus' href="student_login">Login <i class="fa-solid fa-user"></i><i class="fa-solid fa-key"></i></a> </p>
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

export default StudentRegiser