import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <div className="flex bg-white w-full h-20 p-3 items-center">
      <h1 className="font-extrabold mr-3 ml-3">Halal Guide</h1>

      <div className="flex flex-auto justify-center">
        <input
          className="hidden sm:flex rounded-xl mx-1 p-4 h-11 focus:outline-none flex-grow max-w-screen-lg bg-gray-100"
          type="search"
          placeholder="Find Halal Food..."
        />
        <span className="hidden sm:flex bg-gray-100 rounded-xl rounded-l-none -ml-4 items-center w-10 h-11">
          <MagnifyingGlassIcon className="w-6" />
        </span>
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
