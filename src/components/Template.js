import React from 'react'
import frameImage from '../assets/frame.png'
import {SignupForm} from '../components/SignupForm';
import {LoginForm} from '../components/LoginForm';
export const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>

            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {formType === "signup"?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) 
            :(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>Sign in with Google</button>

        </div>

        <div>
            <img src={frameImage} 
            alt='patten'
            width={558}
            height={504}
            loading='lazy'
            />

            <img src={image} 
            alt='students'
            width={558}
            height={504}
            loading='lazy'
            />
        </div>
    </div>
  )
}
