import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar=({isLoggedIn, setisLoggedIn})=>{
    return(
        <div className="flex justify-evenly">
        <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>

        {/* fixed links */}
        <nav>
            <ul className="flex gap-3 ">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/">About</Link>
                </li>

                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* changing buttons */}
        <div className="flex mr-3 ml-5 gap-3">
            {!isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>

            }

            {!isLoggedIn &&
                <Link to="/signup">
                    <button>
                        Sign Up
                    </button>
                </Link>

            }

            {isLoggedIn &&
                <Link to="/">
                    <button onClick={()=>{
                        setisLoggedIn(false);
                        toast.success("Logged Out")
                    }}>
                        LogOut
                    </button>
                </Link>

            }

            {isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>

            }
        </div>
        
        </div>
    )
}
export default Navbar;