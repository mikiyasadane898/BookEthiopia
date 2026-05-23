import { useState } from "react";
import { User, Mail, Phone, Calendar, CreditCard, Ticket, X } from "lucide-react";
export default function BookTourGuides({isOpen, setIsOpen, guideName}) {
  
  return (
    <>
      {isOpen && (
       
<div className="fixed inset-0 bg-black/35 flex items-center justify-center">
   
    <div className="rounded-lg flex flex-col lg:max-w-[90vh] mx-auto text-gray-800 bg-white max-h-[80vh] overflow-auto ">

          <div className=" flex items-center  pb-10 pt-5  px-6 ">
           <User className="  size-7  mr-1 text-yellow-600" strokeWidth={2} />
            
            <span className=" ml-3">
              
              <h1 className=" text-xl font-semibold text-gray-950">
              Book Tour Guide
            </h1>
            <p className=" text-sm text-gray-600">
              {guideName}
            </p>
              </span>
              <button className="ml-auto  cursor-pointer" onClick={()=>setIsOpen(false)}>
                <X />
              </button>
          </div>
            <h1 className=" px-6  mb-3 text-lg font-semibold text-gray-800">Personal Information</h1>

          <div className="lg:grid lg:grid-cols-2 lg:space-x-6 pl-6 space-y-6">
            <div className=" -mt-4 lg:mt-0">
              <label
                htmlFor="full_name"
                className=" text-sm font-semibold "
              >
                Full Name
              </label>

              <span className=" flex bg-amber-50 mt-2 ">
                <User className=" size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="John Doe"
                  className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                />
              </span>
            </div>
            <div className=" -mt-4 lg:mt-0">
              <label
                htmlFor="email_address"
                className=" text-sm font-semibold "
              >
                Email Address
              </label>

              <span className=" flex bg-amber-50 mt-2 ">
                <Mail className=" size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                <input
                  type="email"
                  name="email_address"
                  id="email_address"
                  placeholder="john@example.com"
                  className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                />
              </span>
            </div>
            <div className=" -mt-4 lg:mt-0">
              <label
                htmlFor="phone_number"
                className=" text-sm font-semibold "
              >
                Phone Number
              </label>

              <span className=" flex bg-amber-50 mt-2 ">
                <Phone className=" size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="+251 11 123 4567"
                  className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                />
              </span>
            </div>
            <div className=" -mt-4 lg:mt-0">
              <label
                htmlFor="nationality"
                className=" text-sm font-semibold "
              >
                Nationality
              </label>

              <span className=" flex bg-amber-50 mt-2 ">
                <User className="size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  placeholder="Your country"
                  className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                />
              </span>
            </div>
            <h1 className=" col-span-2 text-lg font-semibold mb-3">Booking Details</h1>
            <div className=" lg:mt-0">
              <label
                htmlFor="tour_date"
                className=" text-sm font-semibold "
              >
                Tour Date
              </label>

              <span className=" flex bg-amber-50 mt-2 ">
                <Calendar className=" size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                <input
                  type="Date"
                  name="tour_date"
                  id="tour_date"
                  className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                />
              </span>
            </div>
            <div className=" flex flex-col ">
              <label
                htmlFor="number_of_visiters"
                className=" text-sm font-semibold "
              >
                Number of People
              </label>

              <select name="number_of_visiters" className="mt-4  border border-gray-300 rounded-md py-3 pl-2 outline-0 cursor-pointer ">
                <option value="1" className="cursor-pointer">
                  1 Person
                </option>
                <option value="2-4" className="cursor-pointer">
                  2-4 People
                </option>
                <option value="5-8" className="cursor-pointer">
                  5-8 People
                </option>
                <option value="9+" className="cursor-pointer">
                  9+ People
                </option>
                
              </select>
            </div>
            <div className=" col-span-2 ">
              <label
                htmlFor="special_request"
                className=" text-sm font-semibold "
              >
                Special Requests (Optional)
              </label>
              <textarea
                name="special_request"
                id="special_request"
                placeholder="Any special requirements or requests..."
                className=" mt-4 w-full rounded-lg border bg-amber-50 border-amber-200 p-3 focus:outline-2 focus:outline-amber-500 "
              ></textarea>
            </div>
            <h1 className=" col-span-2 mb-3 font-semibold text-lg -mt-2">Payment Information</h1>
            <div className="col-span-2 lg:mt-0">
              <label
                htmlFor="card_number"
                className=" text-sm font-semibold "
              >
                Card Number
              </label>

              <span className=" flex bg-amber-50 mt-2 ">
                <CreditCard className=" absolute mt-4 ml-2 text-gray-400 " />
                <input
                  type="number"
                  name="card_number"
                  id="card_number"
                  placeholder="1234 5678 9012 3456"
                  className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                />
              </span>
            </div>
            
              <div className=" -mt-4 lg:mt-0">
                <label
                  htmlFor="expiry_date"
                  className=" text-sm font-semibold "
                >
                  Expiry Date
                </label>

                
                  <input
                    type="Date"
                    name="expiry_date"
                    id="expiry_date"
                    className="mt-2 bg-amber-50 w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 p-3 rounded-lg"
                  />
               
              </div>
              <div className=" -mt-4 lg:mt-0">
                <label
                  htmlFor="cvv"
                  className=" text-sm font-semibold "
                >
                  CVV
                </label>

                
                  <input
                    type="number"
                    name="cvv"
                    id="cvv"
                    className="mt-2 bg-amber-50 w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 p-3 rounded-lg"
                    placeholder="123"
                  />
                
              </div>
            
            <div className=" col-span-2 bg-amber-50 rounded-lg">

            <div className="flex flex-col text-sm  leading-6 p-4">
              <span className="flex justify-between text-gray-500">
                <p>Subtotal</p>
                <p>500 ETB</p>
              </span>
              <span className="flex justify-between text-gray-500">
                <p>Service Fee</p>
                <p>150 ETB</p>
              </span>
              <span className="flex justify-between mb-2 text-gray-500 ">
                <p>Tax (15%)</p>
                <p>75 ETB</p>
              </span>
              <span className="flex justify-between border-t pt-2 border-amber-200 ">
                <p className="  text-lg font-semibold">Total</p>
                <p className="text-yellow-600">725 ETB</p>
              </span>

            </div>
            </div>
             </div>
            <div className="flex justify-around space-x-4 my-6 mx-5 text-black font-semibold">
              <button className=" cursor-pointer hover:bg-amber-100/70 w-full py-3 rounded-lg " onClick={()=> setIsOpen(false)}>Cancel</button>
              <button className=" cursor-pointer bg-yellow-500 contrast-75  w-full py-3 rounded-lg outline-0 ">Confirm Booking</button>
            </div>
        </div>
        </div>
      )}
  
    </>
  );
}
