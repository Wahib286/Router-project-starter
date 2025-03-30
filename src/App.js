import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route,Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn , setisLoggedIn] = useState(false);
  return(
    <div>
      <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login setIsLoggedIn={setisLoggedIn}/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="signup" element={<Signup setIsLoggedIn={setisLoggedIn}/>}/>
      </Routes>
    </div>
  )
}

export default App;
