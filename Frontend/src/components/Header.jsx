import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Compass } from "lucide-react";

export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <header className=" flex flex-col">
        <div className=" flex items-center justify-between py-5 px-4 shadow-lg">
          <div className="flex ml-2">
            <div className=" bg-yellow-500 size-16 lg:size-12 mr-3 lg:mr-1 contrast-75 rounded-full">
              <Compass
                className="  size-12  mx-auto my-2 lg:size-8"
                strokeWidth={2}
              />
            </div>
            <span>
              <h1 className="text-yellow-500 contrast-75 text-4xl lg:text-2xl font-semibold">
                BookEthiopia
              </h1>
              <p className=" lg:text-sm text-gray-600">
                Discover the beauty of Ethiopia{" "}
              </p>
            </span>
          </div>

          <div className="hidden lg:flex">
            <nav className=" space-x-4 mr-6">
              <Link to="/login" className="">
                Help
              </Link>
              <Link to="/signin">Sign In</Link>
              <Link
                to="/signup"
                className=" font-semibold bg-yellow-500 contrast-75 py-2 px-3 rounded-xl"
              >
                Sign Up
              </Link>
            </nav>
          </div>

          <div className="lg:hidden">
            {visible ? (
              <nav className=" absolute right-0 pt-14 px-5 flex flex-col justify-start gap-3 h-screen top-0 text-black bg-white ml-4">
                <button
                  className="text-2xl -mb-3 -mr-14 -mt-8"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  X
                </button>
                <Link to="/login" className="top-0">
                  Help
                </Link>
                <Link to="/signin">Sign In</Link>
                <Link
                  to="/signup"
                  className=" font-semibold bg-yellow-500 contrast-75 py-2 px-3 rounded-xl"
                >
                  Sign Up
                </Link>
              </nav>
            ) : (
              <button
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {" "}
                Menu{" "}
              </button>
            )}
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </header>
    </>
  );
}
