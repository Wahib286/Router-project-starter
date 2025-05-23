import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setConfirmShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    // formdata 
    const [formdata,setFormData]= useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    // change in input handler 
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
        if(formdata.password !== formdata.confirmpassword){
            toast.error("Password do not match");
            return;
        }

        else{
            setIsLoggedIn(true);
            toast.success("Account Created");
            const accountData = {
                ...formdata
            }
            console.log("Printing Account Data");
            console.log(accountData);

            navigate("/dashboard");
        }
    }
  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType === "student" 
            ? "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                 onClick={()=> setAccountType("student")}>
            Student
            
            </button>
            <button className={`${accountType === "instructor" ?
              "bg-richblack-900 text-richblack-5"
                :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
                 onClick={() => setAccountType("instructor")}>
                Instructor
                </button>
        </div>

        <form onSubmit={submitHandler} >
            {/* firstname and lastname div  */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                    <input 
                    required
                    type="text"
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formdata.firstname}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                    <input 
                    required
                    type="text"
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    value={formdata.lastname}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>
            </div>

            {/* email address  */}
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formdata.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
            </div>

            {/* create password and confiirm password  */}
            <div className='w-full flex gap-x-4 mt-[20px]'>
            <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input 
                    required
                    type= {showPassword?("text"):("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={formdata.password}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={()=> setShowPassword((prev)=>!prev)}> 
                        {showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                    </span>

            </label>

            <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input 
                    required
                    type= {showConfirmPassword?("text"):("password")}
                    name='confirmpassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={formdata.confirmpassword}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={()=> setConfirmShowPassword((prev)=>!prev)}> 
                        {showConfirmPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                    </span>

            </label>
            </div>

            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>

        </form>

    </div>
  )
}
