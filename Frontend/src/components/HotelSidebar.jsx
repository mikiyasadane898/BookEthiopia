import { City, Around, Price, Room_Type, Amenities } from "../data/data";
import { Star } from "lucide-react";
export default function HotelSidebar() {
  return (
    <div className="">
      <button className=" text-lg mb-2">Filters</button>

      <div className=" flex flex-col font-semibold">
        <span>
            <>
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
                <button className=" font-semibold">Star Rating</button>

                <div className="mt-2">
                  <span className="flex">
                    <input
                      type="checkbox"
                      className="size-3 align-middle mt-0.5 "
                    />
                    <label htmlFor="1_star" className="ml-1">
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                    </label>
                  </span>
                  <span className="flex">
                    <input
                      type="checkbox"
                      className="size-3 align-middle mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="2_star" className="flex ml-1">
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                    </label>
                  </span>
                  <span className="flex">
                    <input
                      type="checkbox"
                      className="size-3 align-middle mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="3_star" className="flex ml-1">
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                    </label>
                  </span>
                  <span className="flex">
                    <input
                      type="checkbox"
                      className="size-3 align-middle mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="4_star" className="flex ml-1">
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                    </label>
                  </span>
                  <span className="flex">
                    <input
                      type="checkbox"
                      className="size-3 align-middle mt-0.5 cursor-pointer"
                    />
                    <label htmlFor="5_star" className="flex ml-1">
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                      <Star
                        className=" size-4 fill-yellow-500 align-middle"
                        strokeWidth={0}
                      />
                    </label>
                  </span>
                </div>
              </div>
              <div className=" mt-3">
                <button className="text-lg font-semibold">Location</button>

                <ul className=" text-sm mt-2">
                  {Around.map((place) => (
                    <li key={place.id} className=" cursor-pointer">
                      <input type="checkbox" className="size-3 cursor-pointer" />
                      <label className="ml-1">{place.name}</label>
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
              <div className="mt-3 flex flex-col items-start ">
                <button className="font-semibold">Room Type</button>

                <select className=" text-sm mt-2 border border-gray-300 rounded-md p-2 outline-0 cursor-pointer md:w-30 lg:w-50 ">
                  {Room_Type.map((roomType) => (
                    <option key={roomType.id} value={roomType.name} className="cursor-pointer">
                      {roomType.name}
                    </option>
                  ))}
                </select>
              </div>
               <div className=" mt-3">
                <button className=" font-semibold">Amenities</button>

                <ul className="mt-2 text-sm">
                  {Amenities.map((amenity) => (
                    <li key={amenity.id} className=" cursor-pointer">
                      <input type="checkbox" className="size-3 cursor-pointer" />
                      <label className="ml-1">{amenity.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <button className=" text-sm my-3 ml-5 text-amber-700 hover:border-b cursor-pointer hover:border-amber-700"> Clear All Filters</button>
            </>

        </span>
      </div>
    </div>
  );
}
