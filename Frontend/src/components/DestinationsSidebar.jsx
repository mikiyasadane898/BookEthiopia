import {
  Regions,
  Destionations_Categories,
  Durations,
  Languages,
  Price,
  Destinations
} from "../data/data";


export default function DestinationsSidebar() {

  const Regions = [...new Set(Destinations.map((destination) => destination.region))]
  const Categories = [ ...new Set(Destinations.map((destination)=> destination.category ))]
  
  return (
    <div>
      <button className=" text-lg mb-2">Filters</button>

      <div className=" flex flex-col font-semibold w-30">
        <span>
          <>
            
            <div className=" my-3 ">
              <button className="font-semibold">Region</button>

              <ul className=" text-sm mt-2">
                {Regions.map((region) => (
                  <li key={region} className=" flex">
                    <input
                      type="checkbox"
                      className="size-3 cursor-pointer mt-0.5 mr-1"
                    />
                    <label className="ml-1">{region}</label>
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

            <div className=" my-3 ">
              <button className="font-semibold">Category</button>

              <ul className=" text-sm mt-2">
                {Categories.map((category) => (
                  <li key={category} className=" flex">
                    <input
                      type="checkbox"
                      className="size-3 cursor-pointer mt-0.5 mr-1"
                    />
                    <label className="ml-1">{category}</label>
                  </li>
                ))}
              </ul>
            </div>

        

            <button className=" text-sm my-3 ml-5 text-amber-700 hover:border-b cursor-pointer hover:border-amber-700">
              {" "}
              Clear All Filters
            </button>
          </>
        </span>
      </div>
    </div>
  );
}
