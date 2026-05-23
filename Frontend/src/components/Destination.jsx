import { MapPin, Star } from "lucide-react"
import  BookDestination  from "./BookDestination"
import { useEffect, useState } from "react";

export default function Destination () {
  const [isOpen, setIsOpen] = useState(false);
  const [destinationName, setDestinationName] = useState("")
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
    .then(res => res.json())
    .then(data => setDestinations(data))
  }, [])
    return (
       <div >
      <div className=" bg-white pl-2 pb-10 pt-5 mb-10 mx-10">
        <h1 className=" text-2xl font-semibold">Book Your Destination Entry</h1>  
        <p className=" text-gray-600">Pre-book tickets to national parks, museums, and tourist attractions across Ethiopia </p>    
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-7 lg:grid-cols-3 ml-3 md:gap-4 md:ml-5 lg:ml-8 mb-4 ">
        {destinations.map((Destination) => (
          <div className=" lg:w-full hover:shadow-lg hover:shadow-gray-200 rounded-lg" key={Destination.id}>
            
            <div className="absolute ml-80 md:ml-64 lg:ml-64 mt-2 bg-white px-2 rounded">
              <Star
                className=" size-4 fill-yellow-500 inline-block"
                strokeWidth={0}
              />
              <p className="text-sm ml-1 inline-block">{Destination.rating}</p>
              
            </div>
            <p className="absolute ml-3 mt-2 px-2 rounded bg-orange-600 text-sm text-white">{Destination.category}</p>
            
            <img
              src={Destination.image}
              alt=""
              className=" h-40 w-96 lg:w-full lg:h-50 rounded-lg"
            />
            <h1 className="ml-3 mt-3">{Destination.name}</h1>
            <span className="flex ml-3 mt-2 align-middle">
              <MapPin className=" text-gray-600 size-4 mt-0.5 " />
              <p className="text-sm ml-1">{Destination.city}</p>
            </span>
            <p className="mt-2 text-gray-600 text-sm ml-3 h-14">{ Destination.description}</p>
            
            <div className="flex justify-between items-center py-5 px-2 mt-1 mx-3 lg:mx-0 text-sm">
              {Destination.entry_fee.map((Fee) => (
                <div className="flex flex-col gap-2" key={Fee}>

                <p key={Fee.local}>local
                  <span className="text-yellow-600 ml-2">{Fee.local} / Person </span>
                </p>
                <p key={Fee.foreign}>Foreign
                  <span className="text-yellow-600 ml-2">{Fee.foreign} / Person </span>
                </p>
                </div>
              ))}
              <div className="flex flex-col gap-2">

              <button className="bg-green-700 text-white px-3 py-1.5 rounded-lg cursor-pointer"
              onClick={ () => {
                setIsOpen(true)
                setDestinationName(Destination.name)

              }}>
                Book Entry
              </button>
              <button className=" cursor-pointer hover:text-gray-600">
                Explore more...
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookDestination isOpen={isOpen} setIsOpen={setIsOpen} destinationName={destinationName}/>
    </div>
    )
}