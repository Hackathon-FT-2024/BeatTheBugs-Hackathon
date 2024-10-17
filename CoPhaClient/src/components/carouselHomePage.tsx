import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import bg from "@/resources/example_bg.png";
import bg2 from "@/resources/Australian_Hotel_(Guest_Room)_(Night_-_Bright)_Full_webp.png";
import bg3 from "@/resources/Cafe_COCHI_(Night_-_Bright)_Full_webp.png";
import bg4 from "@/resources/Garden_Full_webp.png";
import bg5 from "@/resources/Season_Avenue_(Winter)_(Night_-_Bright)_Full_webp.png";

export default function CarouselHomePage() {
  const images = [bg, bg2, bg3, bg4, bg5];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto mb-10"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 sm:basis-1/2 ml:basis-1/3"
          >
            <div className="relative aspect-[3/2] sm:aspect-[5/4] overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={`Carousel Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
