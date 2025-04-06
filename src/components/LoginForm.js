import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formdata,setFormData] = useState({
        email:"", password:""
    })
    
    const [showPassword,setShowPassword]= useState(false);
    function changeHandler(event){
        const{name,value} = event.target;
        setFormData((prev) => (
            {
            ...prev,
            [name]:value
            }
        ))
    }
    
    function submitHandler(event){
            event.preventDefault();
            setIsLoggedIn(true);
            toast.success("Logged In");
            console.log("Printing the formData ");
            console.log(formdata);
            navigate("/dashboard");
    }
  
  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
        </label>
        <input 
        required
        type="email"
        value={formdata.email}
        name='email'
        placeholder='Enter Email id'
        onChange={changeHandler}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
         />

            <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-pink-200'>*</sup>
            </p>
            <input 
            required
            type= {showPassword ? ("text"):("password")}
            value={formdata.password}
            name='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={()=> setShowPassword((prev)=>!prev)}> 
            {showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
         </span>

            <Link to="#">
                <p className='absolute right-3 top-[38px] cursor-pointer'>Forgot Password</p>
            </Link>
        </label>

        <button  className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign in</button>
        

         
    </form>
  )
}
