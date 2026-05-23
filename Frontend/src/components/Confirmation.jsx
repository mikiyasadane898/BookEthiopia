import { Building2, Calendar, User, Mail, Phone, CreditCard, X } from "lucide-react";
import { useEffect } from "react";

export default function Confirmation({
  confirmation,
  setConfirmation,
  formData,
  price,
  totalDays,
  roomType,
  setIsOpen,
  setSelected,
  setFormData,
  setBooked
}) {

    const handleSubmit = async () => {
   
    const res = await fetch("http://localhost:5000/api/bookhotel", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setIsOpen(false);
      setConfirmation(false)
      setBooked(true)
      setSelected("");
      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        nationality: "",
        check_in_date: "",
        check_out_date: "",
        number_of_guests: "",
        room_type: "",
        special_request: "",
        card_number: "",
        expiry_date: "",
        cvv: "",
        total_payment: "",
      });
    } else {
      console.log(" Booking failed");
    }
  };


    const selectedRoom = roomType.filter((room) => room.room === formData.room_type)
    
  return (
    <div>
      {confirmation && (
        
      
        <div className="fixed inset-0 bg-black/35 flex items-center justify-center">
          {/* Popup Form */}
          <div className="rounded-l-lg flex flex-col lg:w-2/4 mx-auto text-gray-800 bg-white max-h-[80vh] overflow-auto ">
            <div className=" flex items-center  pb-10 pt-5  px-6 ">
              <Building2
                className="  size-7  mr-1 text-yellow-600"
                strokeWidth={2}
              />

              <span className=" ml-3">
                <h1 className=" text-xl font-semibold text-gray-950">
                  Booked Hotel Details
                </h1>
              </span>
              <button
                className="hover:bg-amber-50 p-2 ml-auto cursor-pointer"
                onClick={() => setConfirmation(false)}
              >
                <X />
              </button>
            </div>
            <h1 className=" px-6  mb-3 text-lg font-semibold text-gray-800">
              Personal Information
            </h1>

            <form onSubmit={(e)=>{
              e.preventDefault()
              handleSubmit()
              
            }}>
              <div className=" lg:space-x-6 pl-6 space-y-6">
                <div className=" -mt-4 lg:mt-0">
                  <label
                    htmlFor="full_name"
                    className=" text-sm font-semibold "
                  >
                    Full Name
                  </label>

                  <span className=" flex bg-amber-50 mt-2 ">
                    <User className=" size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                    <p
                    name="full_name"
                      id="full_name"
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    >{formData.full_name}</p>
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
                    <p
                      name="email_address"
                      id="email_address"
                      
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    >{formData.email_address}</p>
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
                    <p
                      name="phone_number"
                      id="phone_number"
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    >{formData.phone_number}</p>
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
                    <p
                      
                      name="nationality"
                      id="nationality"
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-2 py-3 rounded-lg"
                    >{formData.nationality}</p>
                  </span>
                </div>
                <h1 className=" col-span-2 text-lg font-semibold mb-3">
                  Booking Details
                </h1>
                <div className=" lg:mt-0">
                  <label
                    htmlFor="check_in_date"
                    className=" text-sm font-semibold "
                  >
                    Check-in Date
                  </label>

                  <span className=" flex bg-amber-50 mt-2 ">
                    <Calendar className=" size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                    <p
                      name="check_in_date"
                      id="check_in_date"
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    >{formData.check_in_date}</p>
                  </span>
                </div>
                <div className=" lg:mt-0">
                  <label
                    htmlFor="check_out_date"
                    className=" text-sm font-semibold "
                  >
                    Check-out Date
                  </label>

                  <span className=" flex bg-amber-50 mt-2 ">
                    <Calendar className=" size-5 -mr-8 mt-4 ml-2 text-gray-900 " />
                    <p
                      name="check_out_date"
                      id="check_out_date"
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    >{formData.check_out_date}</p>
                  </span>
                </div>
                <div className=" col-span-2">
                  <label
                    htmlFor="number_of_guests"
                    className=" text-sm font-semibold "
                  >
                    Number of Guests
                  </label>

                  <p
                    name="number_of_guests"
                    className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"

                  >
                   {formData.number_of_guests}
                  </p>
                </div>
                <h1 className=" col-span-2 mb-3 font-semibold text-lg -mt-2">
                   Room Type
                </h1>
                { 
                selectedRoom.map((room) => (
                  <div
                    key={room.id}
                    className=" text-gray-800 border-2 w-2/4 border-amber-500 rounded-lg"
                    name="room_type"
                  >
                    <img
                      src={room.image}
                      alt=""
                      className=" h-40 w-full rounded-t-lg"
                    />
                    <div className=" text-sm my-4 mx-2">
                      <span className=" flex justify-between">
                        <h1 className=" font-semibold">{room.room}</h1>
                        <p className="text-yellow-600 ">${room.price}</p>
                      </span>

                      <p className=" text-gray-600 text-[12px] font-semibold">
                        {room.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className=" col-span-2 ">
                  <label
                    htmlFor="special_request"
                    className=" text-sm font-semibold "
                  >
                    Special Requests (Optional)
                  </label>
                  <p
                    name="special_request"
                    id="special_request"
                    className=" mt-4 w-full rounded-lg border border-amber-200 bg-white p-3 focus:outline-2 focus:outline-amber-500 "
                  >{formData.special_request}</p>
                </div>
                <h1 className=" col-span-2 mb-3 font-semibold text-lg -mt-2">
                  Payment Information
                </h1>
                <div className="col-span-2 lg:mt-0">
                  <label
                    htmlFor="card_number"
                    className=" text-sm font-semibold "
                  >
                    Card Number
                  </label>

                  <span className=" flex bg-amber-50 mt-2 ">
                    <CreditCard className=" absolute mt-4 ml-2 text-gray-400 " />
                    <p
                      name="card_number"
                      id="card_number"
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    >{formData.card_number}</p>
                  </span>
                </div>

                <div className=" -mt-4 lg:mt-0">
                  <label
                    htmlFor="expiry_date"
                    className=" text-sm font-semibold "
                  >
                    Expiry Date
                  </label>

                  <p
                    name="expiry_date"
                    id="expiry_date"
                    className="mt-2 bg-amber-50 w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 p-3 rounded-lg"
                  >{formData.expiry_date}</p>
                </div>
                <div className=" -mt-4 lg:mt-0">
                  <label htmlFor="cvv" className=" text-sm font-semibold ">
                    CVV
                  </label>

                  <p
                    name="cvv"
                    id="cvv"
                    className="mt-2 bg-amber-50 w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 p-3 rounded-lg"
                  >{formData.cvv}</p>
                </div>

                <div className=" col-span-2 bg-amber-50 rounded-lg">
                  <div className="flex flex-col text-sm  leading-6 p-4">
                    <span className="flex justify-between text-gray-500">
                      <p>Subtotal</p>
                      <p>${price * totalDays}</p>
                    </span>
                    <span className="flex justify-between text-gray-500">
                      <p>Service Fee</p>
                      <p>${price * totalDays * 0.04}</p>
                    </span>
                    <span className="flex justify-between mb-2 text-gray-500 ">
                      <p>Tax (15%)</p>
                      <p>${price * totalDays * 0.15}</p>
                    </span>
                    <span className="flex justify-between border-t pt-2 border-amber-200 ">
                      <p className="  text-lg font-semibold">Total</p>
                      <p className="text-yellow-600">
                        $
                        {Number(
                          price * totalDays +
                            price * totalDays * 0.04 +
                            price * totalDays * 0.15,
                        )}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-around space-x-4 my-6 mx-5 text-black font-semibold ">
                <button
                  className=" cursor-pointer hover:bg-amber-100/70 w-full py-3 rounded-lg text-lg"
                  onClick={() => {
                    setConfirmation(false);
                  }}
                >
                  Cancel
                </button>
                <button
                 
                  type="submit"
                  className=" cursor-pointer bg-yellow-500 contrast-75 w-full py-3 rounded-lg text-lg"
                >
                 Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    
   </div> 
  )
}
