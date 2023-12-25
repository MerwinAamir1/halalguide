"use client";
import Image from "next/image";
import Header from "./components/Header.js";
import Team from "./components/Team.js";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Team />
    </main>
  );
}
