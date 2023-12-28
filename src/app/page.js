"use client";
import Header from "./components/Header.js";
import Food from "./components/Food.js";
import { FooterWithSitemap } from "./components/FooterWithSitemap.js";
import { useState, useEffect } from "react";
import getData from "./api/restaurants.js";

export default function Home() {
  const [data, setData] = useState([]);
  const [rawData, setRawData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getData();
        const names = newData.map((item) => item.name);
        setData(names);
        setRawData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <main className="">
      <Header data={data} setData={setData} />
      <Food data={rawData} />
      <FooterWithSitemap />
    </main>
  );
}
