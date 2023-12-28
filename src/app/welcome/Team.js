import React from "react";

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet The Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <Person
            name="Merwin Aamir"
            title="Co-Founder / CEO"
            profileImg="https://media.licdn.com/dms/image/D5603AQFOYDFrTh5kGA/profile-displayphoto-shrink_200_200/0/1689904388720?e=1709164800&v=beta&t=1LH93yhyvQWX1066_odFW5nd8Hy1gal3IjcozqGSYKk"
          />
          <Person
            name="Aly Kortam"
            title="Co-Founder / CEO"
            profileImg="https://media.licdn.com/dms/image/D5603AQGoVbdzaTYg_A/profile-displayphoto-shrink_100_100/0/1700578656141?e=1709164800&v=beta&t=oU5KTezBxrkbIWcVDDVcV2FBswf4oukQ-N76xqSCjyg"
          />
        </ul>
      </div>
    </div>
  );
}

function Person({ name, title, profileImg }) {
  return (
    <li>
      <div className="flex items-center gap-x-6">
        <img className="h-16 w-16 rounded-full" src={profileImg} alt={name} />
        <div>
          <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
            {name}
          </h3>
          <p className="text-sm font-semibold leading-6 text-indigo-600">
            {title}
          </p>
        </div>
      </div>
    </li>
  );
}
