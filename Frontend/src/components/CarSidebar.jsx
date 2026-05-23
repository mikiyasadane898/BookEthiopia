import { City, Car_Type, Price, Transmission, Seats } from "../data/data";

export default function CarSidebar() {
  return (
    <div>
      <button className=" text-lg mb-2">Filters</button>

      <div className=" flex flex-col font-semibold ">
        <span>
          
            <div>
              <div className=" flex flex-col">
                <label className="font-semibold">City</label>

                <select className=" md:w-30 lg:w-50 text-sm mt-2 border border-gray-300 rounded-md p-2 outline-0 cursor-pointer ">
                  {City.map((city) => (
                    <option key={city.id} value={city.id} className="cursor-pointer">
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>

              
              <div className=" mt-3">
                <button className="font-semibold">Car Type</button>

                <ul className=" text-sm mt-2">
                  {Car_Type.map((car) => (
                    <li key={car.id} className=" cursor-pointer">
                      <input type="checkbox" className="size-3 cursor-pointer" />
                      <label className="ml-1">{car.name}</label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" mt-3">
                <button className=" font-semibold">Price</button>

                <ul className="mt-2 text-sm">
                  {Price.map((price) => (
                    <li key={price.id} className=" cursor-pointer">
                      <input type="checkbox" className="size-3 cursor-pointer" />
                      <label className="ml-1">{price.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <button className="font-semibold">Transmission</button>

                <ul className=" text-sm mt-2">
                  {Transmission.map((transmission) => (
                    <li key={transmission.id} className="cursor-pointer">
                      <input type="checkbox" className="size-3 cursor-pointer" />
                      <label className="ml-1">{transmission.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
               
              <div className=" flex flex-col mt-3">
                <label className="font-semibold">Seats</label>

                <select className="md:w-30 lg:w-50  text-sm mt-2 border border-gray-300 rounded-md p-2 outline-0 cursor-pointer ">
                  {Seats.map((seat) => (
                    <option key={seat.id} value={seat.id} className="cursor-pointer">
                      {seat.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className=" text-sm my-3 ml-5 text-amber-700 hover:border-b cursor-pointer hover:border-amber-700"> Clear All Filters</button>
            </div>

        </span>
      </div>
    </div>
  );
}
