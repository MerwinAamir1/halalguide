"use client";
import React from "react";
import Team from "../components/Team.js";
import Banner from "../components/Banner.js";
import { FooterWithSitemap } from "../components/FooterWithSitemap.js";
import { useState } from "react";

export default function Welcome() {
  const [remove, setRemove] = useState(true);
  return (
    <div className="page-container">
      <div className="content-wrap">
        {remove && <Banner setRemove={setRemove} />}
        <Team />
      </div>
      <FooterWithSitemap />
    </div>
  );
}
