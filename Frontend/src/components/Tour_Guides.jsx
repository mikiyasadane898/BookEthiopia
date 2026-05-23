import { TourAgents } from "../data/data";
import { MapPin, Calendar, Star } from "lucide-react";
import BookTourGuides from "./BookTourGuides";
import { useEffect, useState } from "react";
export default function TourAgentss() {
  const [isOpen, setIsOpen] = useState(false)
  const [guideName, setGuideName] = useState("")
  const [tourGuides, setTourGuides] = useState([])

    useEffect(() => {
    fetch("http://localhost:5000/api/tourguides")
    .then(res => res.json())
    .then(data => setTourGuides(data))
    },[])
  return (
    <div>
      <div className="ml-4 mt-6">
        <h1 className=" text-xl text-gray-900 mb-2 font-semibold">Find Your Perfect Tour Guide</h1>
        <p className=" text-sm text-gray-500"> Connect with experienced local guides who speak your language and know Ethiopia's hidden gems  </p>
      </div>
      <div className="flex flex-col md:flex-col lg:grid lg:grid-cols-3 my-10 mx-5 justify-around gap-10 align-center">
        <div className=" -mt-3 lg:mt-0">

          <span className=" flex bg-amber-50 mt-2">
            <MapPin className=" -mr-8 mt-3 ml-2 text-gray-400 " />
            <input
              className=" w-full border focus:outline-2 focus:outline-amber-800 border-amber-200 px-10 py-3 rounded-lg"
              type="text"
              name="destination"
              id="destination_search"
              placeholder="Destination"
            />
          </span>
        </div>
        <div className=" -mt-3 lg:mt-0">

          <span className=" flex bg-amber-50 mt-2">
            <Calendar className=" -mr-8 mt-3 ml-2 text-gray-400 " />
            <input
              type="text"
              name="check-in"
              id="check-in"
              placeholder="Tour Date"
              className="w-full border focus:outline-2 focus:outline-amber-800 border-amber-200 px-10 py-3 rounded-lg"
            />
          </span>
        </div>
        
        <button className="bg-yellow-600 contrast-75 text-sm font-semibold lg:text-lg  py-4 lg:p-0 lg:my-1   rounded-lg">
          Search Guides
        </button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-7 lg:grid-cols-3 ml-3 md:gap-4 md:ml-5 lg:ml-8 mb-4 ">
        {tourGuides.map((TourAgent) => (
          <div className=" lg:w-full hover:shadow-lg hover:shadow-gray-200 rounded-lg" key={TourAgent.id}>
            <div className="absolute ml-80 md:ml-64 lg:ml-64 mt-2 bg-white px-2 rounded">
              <Star
                className=" size-4 fill-yellow-500 inline-block"
                strokeWidth={0}
              />
              <p className="text-sm ml-1 inline-block">{TourAgent.rating}</p>
            </div>
            <img
              src={TourAgent.url}
              alt=""
              className=" h-40 w-full lg:w-full lg:h-50 rounded-lg"
            />
            <h1 className="ml-3 mt-3">{TourAgent.name}</h1>
            <span className="flex ml-2 mt-2">
              <MapPin className=" text-gray-400 size-3 mt-1 " />
              <p className="text-sm ml-1">{TourAgent.city}</p>
            </span>
            
            <div className="flex justify-between items-center py-5 px-4 mt-1 mx-3 lg:mx-0 ml-2">
             
                <p>
                  From <span className="text-yellow-600"> {TourAgent.price} </span> /
                  night
                </p>
         
              <button className="bg-green-700/95 font-semibold text-white px-3 py-1.5 rounded-lg cursor-pointer"
              onClick={ () => {
                setIsOpen(true)
                setGuideName(TourAgent.name)
              } }
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    <BookTourGuides  isOpen={isOpen} setIsOpen={setIsOpen} guideName={guideName}  />
 
    </div>

  );
}
