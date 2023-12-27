"use client";
import Link from "next/link";
import React from "react";

export default function Food() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Halal Food</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <Restaurant
              name="Good Burger"
              imgLink="http://a.mktgcdn.com/p/ZoGnmjelxlEn6h6gHku1tBxb3KXrbcQspSLuDv4fuM0/1364x1362.jpg"
              stars={5}
            />
            <Restaurant
              name="Halal Place"
              imgLink="https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?rs=1&pid=ImgDetMain"
              stars={4}
            />
            <Restaurant
              name="Taystees"
              imgLink="https://th.bing.com/th/id/R.83262eca1ef8ce33c82141cba81e93b3?rik=sn8jEGlxb7V4Ow&pid=ImgRaw&r=0"
              stars={3}
            />
            <Restaurant
              name="Halal Place"
              imgLink="https://th.bing.com/th/id/R.1a32300a1f3d69708d49b08c6eb89693?rik=lt4UftWfwKgojw&pid=ImgRaw&r=0"
              stars={3}
            />
            <Restaurant
              name="Good Burger"
              imgLink="https://th.bing.com/th/id/R.e0f292dbf4410492e113bb6d527f4a4a?rik=6A2G4JzON11A3Q&pid=ImgRaw&r=0"
              stars={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Restaurant({ name, imgLink, stars }) {
  return (
    <div>
      <Link href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={imgLink}
            alt={name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {Array(Math.min(stars, 5))
            .fill()
            .map(() => "★")}
        </p>
      </Link>
    </div>
  );
}
