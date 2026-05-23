//import { Cars } from "../data/data"
import { MapPin, Calendar, Star, Car, Users } from "lucide-react"
import BookCar from "./BookCar"
import { useState, useEffect } from "react"
export default function Car_Rental () {
  const [isOpen, setIsOpen] = useState(false)
  const [carName, setCarName] = useState("")
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/cars")
    .then(res => res.json())
    .then(data => setCars(data))
  }, [])


    return (
       <div>
        <div className="flex flex-col md:flex-col lg:flex-row my-10 mx-5 justify-around gap-10 align-center">
        <div className=" -mt-3 lg:mt-0">
          <label htmlFor="pick_up_location" className="text-sm font-semibold text-gray-900">Pick-up Location</label>

          <span className=" flex bg-amber-50 mt-2">
            <MapPin className=" absolute mt-3 ml-2 text-gray-400 " />
            <input
              className=" w-full border focus:outline-2 focus:outline-amber-800 border-amber-200 px-10 py-3 rounded-lg"
              type="text"
              name="pick_up_location"
              id="pick_up_location"
              placeholder="City or Airport"
            />
          </span>
        </div>
        <div className=" -mt-3 lg:mt-0">
          <label htmlFor="pick_up_date" className=" text-sm font-semibold text-gray-900">Pick-up Date</label>

          <span className=" flex bg-amber-50 mt-2">
            <Calendar className=" absolute mt-3 ml-2 text-gray-400 " />
            <input
              type="text"
              name="pick_up_date"
              id="pick_up_date"
              placeholder="Select Date"
              className="w-full border focus:outline-2 focus:outline-amber-800 border-amber-200 px-10 py-3 rounded-lg"
            />
          </span>
        </div>
        <div className=" -mt-3 lg:mt-0">
          <label htmlFor="return_date" className=" text-sm font-semibold text-gray-900">Return Date</label>

          <span className=" flex bg-amber-50 mt-2 ">
            <Calendar className=" absolute mt-3 ml-2 text-gray-400 " />
            <input
              type="text"
              name="return_date"
              id="return_date"
              placeholder="Select Date"
              className=" w-full border focus:outline-2 focus:outline-amber-800 border-amber-200 px-10 py-3 rounded-lg"
            />
          </span>
        </div>
        <button className="bg-yellow-500 contrast-75 text-2xl lg:text-[15px] py-4 lg:py-1 lg:mt-8 lg:w-40 rounded-lg">
          {" "}
          Search Car
        </button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-7 lg:grid-cols-3 ml-3 md:gap-4 md:ml-5 lg:ml-8 mb-4 ">
        {cars.map((car) => (
          <div className=" lg:w-full hover:shadow-lg" key={car.id}>
            <div className="absolute ml-80 md:ml-64 lg:ml-64 mt-2 bg-white px-2 rounded">
              <Star
                className=" size-4 fill-yellow-500 inline-block"
                strokeWidth={0}
              />
              <p className="text-sm ml-1 inline-block">{car.rating}</p>
            </div>
            <img
              src={car.url}
              alt=""
              className=" h-40 w-full lg:w-full rounded-t-lg"
            />
            <h1 className="ml-2 mt-3">{car.name}</h1>
           
            <div className=" flex gap-6">
            <span className="flex ml-2 mt-2">
              <Users className=" text-gray-400 size-4 " />
              <p className="text-sm ml-1">{car.seats}</p>
            </span>
            <span className="flex ml-2 mt-2 ">
              <Car className=" text-gray-400 size-5 " />
              <p className="text-sm ml-1">{car.transmission}</p>
            </span>
            </div>
            <div className="flex justify-between items-center py-3 px-3 mt-1 mx-3 lg:mx-0 ml-2">
              
                <p >
                  From <span className="text-yellow-600"> {car.price} </span>
                  
                </p>
            
              <button className="bg-green-700 text-white px-3 py-1.5 rounded-lg cursor-pointer hover:opacity-85"
              onClick={ () => {
                setIsOpen(true)
                setCarName(car.name)
              
              }}
              >
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <BookCar isOpen={isOpen} setIsOpen={setIsOpen} carName={carName} />
       </div>
    )
}