import Image from "next/image";
import CarouselHomePage from "@components/carouselHomePage";
import { FeatureProduit } from "@/components/featureProduit";
import { Banner } from "../components/Banner";
import { Hero } from "@/components/Hero";

import bg from '@resources/example_bg.png'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="container mx-auto px-10">
        <Hero />
        <Banner />
        <CarouselHomePage />
        <FeatureProduit/>
      </div>
      <div className="h-10 sm:h-16" />
    </main>
  );
}