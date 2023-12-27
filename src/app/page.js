"use client";
import Header from "./components/Header.js";
import Food from "./components/Food.js";
import { FooterWithSitemap } from "./components/FooterWithSitemap.js";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Food />
      <FooterWithSitemap />
    </main>
  );
}
