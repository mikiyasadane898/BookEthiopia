import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Signin";
import Signup from "./Signup";
import Sidebar from "./Sidebar";
import SubHeader from "./SubHeader";
import Main from "./Main";
import { useState, useEffect, useRef } from "react";
export default function Home() {  
    const [service, setService] = useState("Hotels");
    
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const main = useRef()
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  
    return (
        <div>

        <Header />
        <div className=" bg-[url(/home.png)] bg-cover bg-center h-full py-40 pl-10 lg:pl-30 text-white bg-blend-multiply bg-black/50"
         >
            <h1 className=" text-6xl font-semibold">Experience Ethiopia</h1>
            <p className=" text-xl mt-4 w-4/5 lg:w-2/5">Your gateway to unforgettable adventures - Hotels, Cars, Tours & Destinations</p>
            <div className="mt-10">
                <button className=" bg-yellow-500 contrast-75 text-black px-6 py-3 font-semibold rounded-xl"
                onClick={()=>scrollTo(main)}>Start Exploring</button>
                <button className=" bg-transparent backdrop-blur border border-white text-white px-6 py-3 font-semibold rounded-xl ml-4">Learn More</button>
            </div>
        </div>
        <SubHeader setService={setService} service={service}/>
        <div className=" flex lg:gap-6">
            <Sidebar service={service} isSidebarOpen={isSidebarOpen} isLargeScreen={isLargeScreen} setIsSidebarOpen={setIsSidebarOpen}/>
            <section ref={main}>

            <Main service={service}  isSidebarOpen={isSidebarOpen} isLargeScreen={isLargeScreen} setIsSidebarOpen={setIsSidebarOpen} />
            </section>

        </div>
        <footer className=" bottom-0 bg-gray-900 text-white mt-20">
            <h1 className=" text-center py-10">Copyright &copy; {new Date().getFullYear()} Visit Ethiopia. All rights reserved.</h1>
        </footer>
    </div>
        
        
    )
}