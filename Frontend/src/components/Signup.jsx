import { useState } from "react";
import Signin from "./Signin";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
    
  })
  const handleChange = (e) => {
    setFormData((pre)=> (
      {...pre, [e.target.name]: e.target.value}
    ))
  }
  const handSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-type" : "application/json"},
      body: JSON.stringify(formData)
    })
    
    if(res.ok){
      navigate("/Signin")
    }else{
      console.error("Registration Failed")
    }
  }
  return (
    <div className=" w-screen h-screen bg-gray-200 py-40 lg:py-10 ">
      <div className=" flex flex-col justify-between text-amber-700 lg:justify-around h-full lg:h-full lg:shadow-lg lg:w-fit mx-auto">
      <h1 className="text-4xl text-center">Signup</h1>
      <form onSubmit={handSubmit} className="flex flex-col  mx-12 -mt-20 lg:-mt-5 lg:w-xl lg:mx-auto lg:px-12">
        <span className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-lg ">Full Name</label>
            <input type="text" name="name" id="name" className=" border border-gray-500 rounded-lg h-10"
            value={formData.name}
            onChange={handleChange}/>
        </span>
         <span className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-lg ">Email</label>
            <input type="email" name="email" id="email" className=" border border-gray-500 rounded-lg h-10"
            value={formData.email}
            onChange={handleChange}/>
        </span>
        <span  className="flex flex-col mt-6 lg:mt-4">
            <label htmlFor="password" className="mb-1 text-lg">Password</label>
            <input type="password" name="password" id="password" className=" border border-gray-500 rounded-lg h-10"
            value={formData.password}
            onChange={handleChange}/>
        </span>
        <span  className="flex flex-col mt-6 lg:mt-4">
            <label htmlFor="confirm_password" className="mb-1 text-lg">Confirm Password</label>
            <input type="password" name="confirm_password" id="confirm_password" className=" border border-gray-500 rounded-lg h-10"/>
        </span>
        <button type="submit" className=" bg-amber-700 text-black mt-15 rounded-full mx-20 py-2 text-center  text-2xl md:mx-40">Signup</button>
      </form>
      <span className=" text-center">
        
        
        <Link to="/Signin">Already have an account?</Link>
        
      </span>

     </div>
    </div>
  );
}
