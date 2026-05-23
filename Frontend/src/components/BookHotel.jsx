import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Ticket,
  X,
  CircleCheck,
} from "lucide-react";
import Confirmation from "./Confirmation";

export default function BookHotel({ isOpen, setIsOpen, hotelName, roomType, setBooked }) {
  const [selected, setSelected] = useState(null);
  const [price, setPrice] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [confirmation, setConfirmation] = useState(false);
  

  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    nationality: "",
    check_in_date: "",
    check_out_date: "",
    number_of_guests: "1",
    room_type: "",
    special_request: "",
    card_number: "",
    expiry_date: "",
    cvv: "",
    total_payment: "",
  });

  const requiredFields = [
    "full_name",
    "email_address",
    "phone_number",
    "nationality",
    "check_in_date",
    "check_out_date",
    "number_of_guests",
    "room_type",
    "card_number",
    "expiry_date",
    "cvv",
  ];

  useEffect(() => {
    const checkin = new Date(formData.check_in_date);
    const checkout = new Date(formData.check_out_date);
    if (!isNaN(checkin) && !isNaN(checkout)) {
      const totalDays = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
      setTotalDays(totalDays);
    }

    const totalPayment =
      price * totalDays + price * totalDays * 0.04 + price * totalDays * 0.15;

    setFormData((prev) => ({ ...prev, total_payment: totalPayment }));
  }, [price, formData.check_in_date, formData.check_out_date]); // runs whenever price changes

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/35 flex items-center justify-center">
          {/* Popup Form */}
          <div className="rounded-l-lg flex flex-col lg:w-2/4 mx-auto text-gray-800 bg-white max-h-[80vh] overflow-auto ">
            <div className=" flex items-center  pb-10 pt-5  px-6 ">
              <Ticket
                className="  size-7  mr-1 text-yellow-600"
                strokeWidth={2}
              />

              <span className=" ml-3">
                <h1 className=" text-xl font-semibold text-gray-950">
                  Book Destination Entry
                </h1>
                <p className=" text-sm text-gray-600">{hotelName}</p>
              </span>
              <button
                className="hover:bg-amber-50 p-2 ml-auto cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </button>
            </div>
            <h1 className=" px-6  mb-3 text-lg font-semibold text-gray-800">
              Personal Information
            </h1>

            <form onSubmit={(e) => {
              e.preventDefault()
              setConfirmation(true)}}>
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
                      value={formData.full_name}
                      onChange={handleChange}
                      required
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
                      value={formData.email_address}
                      onChange={handleChange}
                      required
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
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
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
                    <input
                      type="text"
                      name="nationality"
                      id="nationality"
                      placeholder="Your country"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-2 py-3 rounded-lg"
                    />
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
                    <input
                      type="Date"
                      name="check_in_date"
                      id="check_in_date"
                      value={formData.check_in_date}
                      onChange={handleChange}
                      required
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    />
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
                    <input
                      type="Date"
                      name="check_out_date"
                      id="check_out_date"
                      required
                      value={formData.check_out_date}
                      onChange={handleChange}
                      
                      className=" w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 px-10 py-3 rounded-lg"
                    />
                  </span>
                </div>
                <div className=" col-span-2">
                  <label
                    htmlFor="number_of_guests"
                    className=" text-sm font-semibold "
                  >
                    Number of Guests
                  </label>

                  <select
                    name="number_of_guests"
                    value={formData.number_of_guests}
                    onChange={handleChange}
                    required
                    defaultValue={1}
                    className="mt-2 w-full  border border-gray-300 rounded-md py-3 pl-2 outline-0 cursor-pointer "
                  >
                    <option value="1" className="cursor-pointer">
                      1 Guest
                    </option>
                    <option value="2" className="cursor-pointer">
                      2 Guests
                    </option>
                    <option value="3" className="cursor-pointer">
                      3 Guests
                    </option>
                    <option value="5" className="cursor-pointer">
                      4 Guests
                    </option>
                    <option value="5+" className="cursor-pointer">
                      5+ Guests
                    </option>
                  </select>
                </div>
                <h1 className=" col-span-2 mb-3 font-semibold text-lg -mt-2">
                  Select Room Type
                </h1>
                {roomType.map((room) => (
                  <div
                    key={room.id}
                    className={` text-gray-800 border-2  ${selected === room.id ? "border-amber-500" : "border-amber-500/20"} hover:border-amber-500 rounded-lg cursor-pointer`}
                    onClick={(e) => {
                      setSelected(room.id);
                      setFormData((pre) => ({ ...pre, room_type: room.room }));
                      setPrice(room.price);
                    }}
                    name="room_type"
                    value={formData.room_type}
                  >
                    {/* <input type="radio" name="room_selected" id="room_selected"  onChange={(e) => setSelected(Number(e.target.value))} checked={selected === room.id}  className={`size-4 rounded-full  relative top-1 left-56 ${ selected === room.id ? "bg-amber-400" : "bg-white"}`} /> */}
                    <CircleCheck
                      className={` size-5 relative top-1 left-56 ${selected === room.id ? " fill-amber-500 text-white/70" : "opacity-0"}`}
                    />

                    <img
                      src={room.image}
                      alt=""
                      className=" h-40 w-full rounded-t-lg -mt-5"
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
                  <textarea
                    name="special_request"
                    id="special_request"
                    value={formData.special_request}
                    onChange={handleChange}
                    placeholder="Any special requirements or requests..."
                    className=" mt-4 w-full rounded-lg border border-amber-200 bg-white p-3 focus:outline-2 focus:outline-amber-500 "
                  ></textarea>
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
                    <input
                      type="number"
                      name="card_number"
                      id="card_number"
                      placeholder="1234 5678 9012 3456"
                      value={formData.card_number}
                      onChange={handleChange}
                      required
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
                    value={formData.expiry_date}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-amber-50 w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 p-3 rounded-lg"
                  />
                </div>
                <div className=" -mt-4 lg:mt-0">
                  <label htmlFor="cvv" className=" text-sm font-semibold ">
                    CVV
                  </label>

                  <input
                    type="number"
                    name="cvv"
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-amber-50 w-full border focus:outline-2 focus:outline-amber-500 border-amber-200 p-3 rounded-lg"
                  />
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
                    setIsOpen(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" cursor-pointer bg-yellow-500 contrast-75 w-full py-3 rounded-lg text-lg"
                >
                 Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Confirmation
        confirmation={confirmation}
        setIsOpen={setIsOpen}
        setConfirmation={setConfirmation}
        formData={formData}
        setFormData={setFormData}
        price={price}
        totalDays={totalDays}
        roomType={roomType}
        setSelected={setSelected}
        setBooked={setBooked}
      />
    </div>
  );
}
