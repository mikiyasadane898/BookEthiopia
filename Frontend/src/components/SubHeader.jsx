import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Building2, Car, Users, Ticket  } from "lucide-react";
export default function SubHeader({ service, setService }) {
  return (
    <div className=" bg-gray-50  lg:px-6 overflow-y-auto lg:overflow-hidden border-b border-yellow-300">
      <nav className=" flex  lg:space-x-5 ml-5 lg:ml-10 w-screen ">
        <Link>
          <span onClick={() => {
          setService("Hotels");
         
        }} className ={` flex  lg:flex-0 p-4 hover:border-b-2 ${ service === "Hotels" && "text-yellow-600 border-b-2"  } hover:text-yellow-600 text-gray-700 `}>
            
            <Building2  strokeWidth={2} className=" -ml-2 lg:ml-0 size-6 inline-block mr-1" />
            <p className={` inline-block align-middle `}  >Hotels</p>
          </span>
        </Link>

        <Link>
          <span onClick={() => {
          setService("Car_Rentals");
         
        }} className={`flex  lg:flex-0 p-4 hover:border-b-2 ${ service === "Car_Rentals" && "text-yellow-600 border-b-2 "  } hover:text-yellow-600 text-gray-700 border-yellow-600`}>
            
            <Car className={` size-6 inline-block mr-1 ${ service && "border-b-0"} `} strokeWidth={2} />
            <p  className=" inline-block align-middle w-20 lg:w-fit">Car Rentals</p>
          </span>
        </Link>
        <Link>
          <span onClick={() => {
          setService("Tour_Guides");
         
        }} className={`flex  lg:flex-0 p-4 hover:border-b-2 ${ service === "Tour_Guides" && "text-yellow-600 border-b-2 border-yellow-600 "  } hover:text-yellow-600 active:text-yellow-500 text-gray-700 border-yellow-600`}>
            <Users className=" size-5 inline-block mr-1" strokeWidth={2} />
            <p  className=" inline-block align-middle w-25 lg:w-fit ">Tour Guides</p>
          </span>
        </Link>
        <Link>
          <span onClick={() => {
          setService("Destinations");
         
        }} className={`flex  lg:flex-0 p-4 hover:border-b-2 ${ service === "Destinations" && "text-yellow-600 border-b-2 border-yellow-600 "  } hover:text-yellow-600 active:text-yellow-500 text-gray-700 border-yellow-600`}>
            <Ticket className="  size-6 inline-block mr-1" strokeWidth={2} />
            <p  className=" inline-block align-middle ">Destinations</p>
          </span>
        </Link>
      </nav>
    </div>
  );
}
