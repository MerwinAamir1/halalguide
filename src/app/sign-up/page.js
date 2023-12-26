import React from "react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full">
        <SignUp />
      </div>
    </div>
  );
}
