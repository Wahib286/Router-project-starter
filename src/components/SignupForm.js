import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);

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
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler} >
            {/* firstname and lastname div  */}
            <div>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input 
                    required
                    type="text"
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter First Name'
                    value={formdata.firstname}
                    />
                </label>

                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input 
                    required
                    type="text"
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter Last Name'
                    value={formdata.lastname}
                    />
                </label>
            </div>

            {/* email address  */}
            <label>
                    <p>Email<sup>*</sup></p>
                    <input 
                    required
                    type="text"
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    value={formdata.email}
                    />
            </label>

            {/* create password and confiirm password  */}
            <div>
            <label>
                    <p>Create Password<sup>*</sup></p>
                    <input 
                    required
                    type= {showPassword?("text"):("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={formdata.password}
                    />
                    <span onClick={()=> setShowPassword((prev)=>!prev)}> 
                        {showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                    </span>

            </label>

            <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input 
                    required
                    type= {showPassword?("text"):("password")}
                    name='confirmpassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={formdata.confirmpassword}
                    />
                    <span onClick={()=> setShowPassword((prev)=>!prev)}> 
                        {showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)}
                    </span>

            </label>
            </div>

            <button>Create Account</button>

        </form>

    </div>
  )
}
