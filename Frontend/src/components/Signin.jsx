import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
export default function Login() {
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData((pre) => (
      {...pre, [e.target.name]: e.target.value}
    ))
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify(formData)

      })
      .then( res => res.json().then( data => ({ status: res.status, body: data})))
      .then( result => {
        if(result.status === 404 || result.status === 401) {
          setError(result.body.message)
        }
        
        if(result.status === 200) {
          navigate("/")
          setError("")
        
        }
      })
    
    
    
    
  }


  return (
    
    <div className=" w-screen h-screen bg-gray-200 py-40 lg:py-10 ">
      <div className=" flex flex-col justify-between text-amber-700 lg:justify-around h-full lg:h-full lg:shadow-lg lg:w-fit mx-auto">
      <h1 className="text-4xl text-center">Signin</h1>
      <form onSubmit={handleSubmit} className="flex flex-col  mx-12 -mt-20 lg:-mt-5 lg:w-xl lg:mx-auto lg:px-12">
        <span className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-lg ">User Name</label>
            <input type="text" name="name" id="name" className=" border border-gray-500 rounded-lg h-10"
            value={formData.name}
            onChange={handleChange}/>
            
        </span>
        <span  className="flex flex-col mt-6 lg:mt-4">
            <label htmlFor="password" className="mb-1 text-lg">Password</label>
            <input type="password" name="password" id="password" className=" text-black border border-gray-500 rounded-lg h-10"
            value={formData.password}
            onChange={handleChange}/>
        </span>
        {error && <p>{error}</p>}
        <button type="submit" className=" bg-amber-700 text-black mt-15 rounded-full mx-20 py-2 text-center  text-2xl md:mx-40">Sign in</button>
      </form>
      <span className="flex justify-between mx-6 lg:justify-center lg:space-x-48 lg:-mt-3">
        <a href="#">Forget Password?</a>
        <Link to="/signup">Don't have an account?</Link>
      </span>

     </div>
    </div>
      
     
   
  );
}

