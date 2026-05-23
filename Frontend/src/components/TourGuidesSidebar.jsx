import { City, Rating, Specialties, Languages, Price } from "../data/data";
import { Star } from "lucide-react";

export default function TourGuidesSidebar() {
  return (
    <div>
      <button className=" text-lg mb-2">Filters</button>

      <div className=" flex flex-col ">
        <span>
          
            <>
             
<div className=" flex flex-col">
                <label className="font-semibold">City</label>

                 <select className=" md:w-30 lg:w-50 text-sm mt-2 border border-gray-300 font-semibold rounded-md p-2 outline-0 cursor-pointer ">


                  {City.map((city) => (
                    <option key={city.id} value={city.id} className="cursor-pointer">
                      {city.name}
                    </option>
                  ))}
                </select>
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
              
              <div className=" mt-3">
                <button className="font-semibold">Minimum Rating</button>

                <ul className=" text-sm mt-2">
                  {Rating.map((star) => (
                    <li key={star.id} className=" flex items-center">
                      <input type="checkbox" className="size-3 cursor-pointer mr-1" />
                       <Star
                        className=" size-4 fill-yellow-500 "
                        strokeWidth={0}
                      />
                      <label className="" >
                       {star.name}</label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className=" mt-3">
                <button className=" font-semibold">Specialization</button>

                <ul className="mt-2 text-sm">
                  {Specialties.map((speciale) => (
                    <li key={speciale.id} className=" cursor-pointer">
                      <input type="checkbox" className="size-3 cursor-pointer" />
                      <label className="ml-1">{speciale.name}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <button className="font-semibold">Languages</button>

                <ul className=" text-sm mt-2">
                  {Languages.map((language) => (
                    <li key={language.id} className="cursor-pointer">
                      <input type="checkbox" className="size-3 cursor-pointer" />
                      <label className="ml-1">{language.name}</label>
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
