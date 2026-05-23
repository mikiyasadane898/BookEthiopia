import { useState, useEffect } from "react";
import Hotels from "./Hotels";
import Car_Rental from "./Car_Rentals";
import Destination from "./Destination";
import Tour_Guides from "./Tour_Guides";
export default function Main({ service, isLargeScreen, isSidebarOpen, setIsSidebarOpen }) {

  
    return (
        <div className=" flex-1 px-4 pt-5">
            <button className={` ${isLargeScreen ? "md:hidden" : isSidebarOpen ? "hidden": ""}`}  onClick={()=>setIsSidebarOpen(!isSidebarOpen)}> Filters</button> 
{
    service === "Hotels" && <Hotels />
    
}
{
    service === "Car_Rentals" && <Car_Rental />
}
{
    service === "Tour_Guides" && <Tour_Guides />
}
{
    service === "Destinations" && <Destination />
}
            </div>
    )
}