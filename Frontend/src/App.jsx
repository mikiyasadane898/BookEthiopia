import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Header from "./components/Header"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
   <div>
    <BrowserRouter>
        <Routes>
         
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
  
   </div>
  )
}

export default App
