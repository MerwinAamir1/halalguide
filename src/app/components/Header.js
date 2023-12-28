"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const dummyData = [
    "GoodBurger",
    "Halal Food",
    "Vegan Delight",
    "Pizza Palace",
    "Sushi Corner",
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = dummyData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="flex bg-white w-full h-20 p-3 items-center">
      <h1 className="font-extrabold mr-3 ml-3 cursor-pointer">Halal Guide</h1>

      <div className="flex flex-auto justify-center">
        <div className="relative sm:flex flex-grow max-w-screen-lg mx-1">
          <input
            className="hidden md:flex bg-gray-100 rounded-xl p-4 h-11 focus:outline-none w-full  focus:bg-white focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black transition duration-300"
            type="search"
            placeholder="Find Halal Food..."
            value={searchTerm}
            onChange={handleChange}
          />
          <span className="hidden md:flex rounded-xl absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
          </span>
          {suggestions.length > 0 && (
            <ul className="hidden md:absolute md:flex md:flex-col z-10 bg-white border border-gray-200 rounded-md mt-12 max-h-60 overflow-y-auto w-full">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(item);
                    setSuggestions("");
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
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
