import { useState, useEffect } from "react";

import { MapPin, Calendar, Star } from "lucide-react";
import BookHotel from "./BookHotel";
export default function Hotels() {

  const [isOpen, setIsOpen] = useState(false)
  const [hotelName, setHotelName] = useState("")
  const [roomType, setRoomType] = useState([])
  const [hotels, setHotels] = useState([])
  const [booked, setBooked] = useState(false)

useEffect(() => {
  fetch("http://localhost:5000/api/hotels")
    .then(res => res.json())
    .then(data => setHotels(data));
}, []);

useEffect(()=>{
setTimeout(() => {
  setBooked(false)
}, 5000);
}, [booked])



  return (
    <div>
      <p className={`-mb-10 text-center bg-green-400 transform transition-all duration-1000 ease-in-out  ${ booked ? "opacity-100 translate-y-0": "opacity-0 -translate-y-4"} text-white py-2 rounded-lg`}>You Have Booked Your Hotel Successfully !</p>
      <div className="flex flex-col md:flex-col lg:flex-row my-10 mx-5 justify-around gap-10 align-center">
        <div className=" -mt-3 lg:mt-0">
          <label htmlFor="destination_search" className=" text-gray-900 text-sm font-semibold">Destination</label>

          <span className=" flex bg-amber-50 mt-2">
            <MapPin className=" absolute mt-3 ml-2 text-gray-400 " />
            <input
              className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
              type="text"
              name="destination"
              id="destination_search"
              placeholder="Where are you going?"
            />
          </span>
        </div>
        <div className=" -mt-3 lg:mt-0">
          <label htmlFor="check-in" className=" text-gray-900 text-sm font-semibold">Check-in</label>

          <span className=" flex bg-amber-50 mt-2">
            <Calendar className=" absolute mt-3 ml-2 text-gray-400 " />
            <input
              type="text"
              name="check-in"
              id="check-in"
              placeholder="Select Date"
              className="w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
            />
          </span>
        </div>
        <div className=" -mt-3 lg:mt-0">
          <label htmlFor="check-in" className=" text-gray-900 text-sm font-semibold">Check-out</label>

          <span className=" flex bg-amber-50 mt-2 ">
            <Calendar className=" absolute mt-3 ml-2 text-gray-400 " />
            <input
              type="text"
              name="check-out"
              id="check-out"
              placeholder="Select Date"
              className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
            />
          </span>
        </div>
        <button className="bg-yellow-500 contrast-75 text-2xl lg:text-[15px] py-4 lg:py-1 lg:mt-8 lg:w-40 rounded-lg cursor-pointer">
          {" "}
          Search Hotels
        </button>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:gap-7 lg:grid-cols-3 ml-3 md:gap-4 md:ml-5 lg:ml-8 mb-4 ">
        {hotels.map((hotel) => (
          <div className=" lg:w-full hover:shadow-lg hover:shadow-gray-200 rounded-lg" key={hotel.id}>
            <div className="absolute ml-80 md:ml-64 lg:ml-64 mt-2 bg-white px-2 rounded">
              <Star
                className=" size-4 fill-yellow-500 inline-block"
                strokeWidth={0}
              />
              <p className="text-sm ml-1 inline-block">{hotel.rating}</p>
            </div>
            <img
              src={hotel.url}
              alt=""
              className=" h-40 w-96 lg:w-full lg:h-50 rounded-t-lg"
            />
            <h1 className="ml-2 mt-3">{hotel.name}</h1>
            <span className="flex ml-2 mt-2">
              <MapPin className=" text-gray-400 size-3 mt-1 " />
              <p className="text-sm ml-1">{hotel.city}</p>
            </span>
            <div className=" mt-3 " >
              {hotel.amenities.map((amenity) => (
                <p className=" bg-amber-50 px-2 py-1 rounded-lg inline text-sm ml-2" key={amenity} >
                  {amenity}
                </p>
              ))}
            </div>
            <div className="flex justify-between items-center py-5 px-4 mt-1 mx-3 lg:mx-0 ml-2">
              {hotel.room_type.slice(0, 1).map((price) => (
                <p key={hotel.id}>
                  From <span className="text-yellow-600"> {price.price} </span>/
                  night
                </p>
              ))}
              <button className="bg-green-700 text-white px-3 py-1.5 rounded-lg"
              onClick={ () => {
                setIsOpen(true)
                setHotelName(hotel.name)
                setRoomType(hotel.room_type)
              }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <BookHotel isOpen={isOpen} setIsOpen={setIsOpen} hotelName={hotelName} roomType={roomType} setBooked={setBooked}/>
    </div>
  );
}
