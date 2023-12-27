import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="flex bg-white w-full h-20 p-3 items-center">
      <h1 className="font-extrabold mr-3 ml-3 cursor-pointer">Halal Guide</h1>

      <div className="flex flex-auto justify-center">
        <div className="relative hidden sm:flex flex-grow max-w-screen-lg mx-1">
          <input
            className="bg-gray-100 rounded-xl p-4 h-11 focus:outline-none w-full  focus:bg-white focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black transition duration-300"
            type="search"
            placeholder="Find Halal Food..."
          />
          <span className="rounded-xl absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
          </span>
        </div>
      </div>

      <div className="flex text-sm items-center mr-5">
        <p className="mx-3 text-gray font-bold hover:underline cursor-pointer">
          PlaceHolder1
        </p>
        <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
          PlaceHolder2
        </p>
        <p className="hidden md:block mx-3 text-gray font-bold hover:underline cursor-pointer">
          PlaceHolder3
        </p>
        <span className="hidden md:block mx-3">
          <UserButton afterSignOutUrl="/welcome" />
        </span>
      </div>
    </div>
  );
}
