import { useState } from "react";
import { Star } from "lucide-react";
import HotelSidebar from "./HotelSidebar";
import CarSidebar from "./CarSidebar";
import TourGuidesSidebar from "./TourGuidesSidebar";
import DestinationsSidebar from "./DestinationsSidebar";
export default function Sidebar({ service, isSidebarOpen, isLargeScreen, setIsSidebarOpen }) {
  
    
  return (
    <>
  
      <div className={` ${isLargeScreen ? "flex": isSidebarOpen ? "flex": "hidden"} h-screen lg:h-full ml-2 py-10 lg:px-4  text-gray-900`}>
      <div className="">
       { !isLargeScreen && <button className="absolute left-36 text-sm" onClick={() => setIsSidebarOpen(false)}>X</button>}
          {service === "Hotels" && <HotelSidebar />}
          {service === "Car_Rentals" && <CarSidebar />}
          {service === "Tour_Guides" && <TourGuidesSidebar />}
          {service === "Destinations" && <DestinationsSidebar />}
        </div>
      </div>

    
   
    </>
    
    
  );
}
