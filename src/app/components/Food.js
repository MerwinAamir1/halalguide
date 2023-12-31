import Link from "next/link";
import React from "react";
import Skeleton from "./Skeleton";

export default function Food({ data }) {
  const isLoading = !data || Object.keys(data).length === 0;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Halal Food</h2>
        <div
          className={`grid gap-x-6 gap-y-10 ${
            isLoading
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          }`}
        >
          {isLoading
            ? Array(6)
                .fill()
                .map((_, index) => <Skeleton key={index} />)
            : Object.entries(data).map(([key, { id, name, img, rating }]) => (
                <Restaurant key={id} name={name} imgLink={img} stars={rating} />
              ))}
        </div>
      </div>
    </div>
  );
}

function Restaurant({ name, imgLink, stars }) {
  return (
    <div>
      <Link href="" className="group">
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
