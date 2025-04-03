import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const LoginForm = ({setisLoggedIn}) => {
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
    
    function submitHandler(){
            setisLoggedIn(false);
            toast.success("Logged In")
    }
  
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>Email Address<sup>*</sup></p>
        </label>
        <input 
        required
        type="email"
        value={formdata.email}
        name='email'
        placeholder='Enter Email id'
        onChange={changeHandler}
         />

        <label>
            <p>Password<sup>*</sup></p>
            <input 
            required
            type= {showPassword ? ("text"):("password")}
            value={formdata.password}
            name='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            />

        <span onClick={()=> setShowPassword((prev)=>!prev)}> 
            {showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
         </span>

            <Link to="#">
                <p>Forgot Password</p>
            </Link>
        </label>

        <button>Sign in</button>
        

         
    </form>
  )
}
