import Image from "next/image";
import HeroSection from "./components/custom/home_components/HeroSection";
import Page2 from "./components/custom/home_components/Page2";
import Page3 from "./components/custom/home_components/Page3";
import CardDemo from "./components/custom/home_components/Page4";
import TimelineDemo from "./components/custom/home_components/Page5";
import { TabsDemo } from "./components/custom/home_components/Page6";
import { InfiniteMovingCardsDemo } from "./components/custom/home_components/Page7";
// import AppleCardsCarouselDemo from "./components/custom/home_components/Page8";
import "./globals.css";

export default function Home() {
  return (

    <div className="">
      <HeroSection />
      <Page2 />
      <Page3 />
      <CardDemo />
      <TimelineDemo />
      {/* <TabsDemo /> */}
      {/* <AppleCardsCarouselDemo /> */}
      <InfiniteMovingCardsDemo />
    </div>
  );
}
