import React from "react";
import banner from "../../assets/banner.png";
import { HeroPostCard } from "../";

function Hero() {
  return (
    <div className="relative">
      <img src={banner} alt="banner" className="max-w-full" />
      <HeroPostCard />
    </div>
  );
}

export default Hero;
