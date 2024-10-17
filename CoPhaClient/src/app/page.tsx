import Image from "next/image";
import CarouselHomePage from "@components/carouselHomePage";
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
      </div>
      <div className="h-0 sm:h-16" />
      <div className="w-5/6 mx-auto grid 2xs:max-sm:grid-rows-2 sm:grid-cols-3 gap-1">
        <div className="2xs:max-sm:w-[100%] sm:col-span-2 mx-auto my-auto">
          <h1 className="font-semibold text-4xl mb-2 text-left">Section 1</h1>
          <p className="text-sm md:text-base mr-6">
            Les mitochondries sont souvent dÃ©crites comme les Â« centrales
            Ã©nergÃ©tiques Â» des cellules, dans la mesure oÃ¹ elles contribuent Ã
            l'essentiel de la production d'ATP cellulaire Ã  travers la
            Î²-oxydation, le cycle de Krebs et la chaÃ®ne respiratoire dans le
            cadre de la phosphorylation oxydative, l'ATP Ã©tant la molÃ©cule
            Ã©nergÃ©tique ubiquitaire utilisÃ©e dans un trÃ¨s grand nombre de
            rÃ©actions chimiques du mÃ©tabolisme, et notamment de l'anabolisme
            (biosynthÃ¨ses). <br />
            <br />
            En outre, elles effectuent leur propre biosynthÃ¨se d'acides gras
            (mtFASII), qui est essentielle pour la biogenÃ¨se mitochondriale et
            la respiration cellulaire.
          </p>
        </div>
        <div className="mx-auto my-5 sm:my-auto w-full">
          <Image
            src={bg}
            alt="Image"
            className="rounded-md object-cover h-[200px] sm:h-[300px] sm:max-h-[500px]"
          />
        </div>
      </div>
      <div className="h-0 sm:h-16" />
      <div className="w-5/6 mx-auto grid 2xs:max-sm:grid-rows-2 sm:grid-cols-3 gap-1">
        <div className="w-[100%] sm:w-[105%] sm:col-span-2 mx-auto my-auto">
          <h1 className="font-semibold text-4xl mb-2 sm:ml-6 text-left">
            Section 2
          </h1>
          <p className="text-sm md:text-base sm:ml-6">
            On rencontre environ 300 Ã  2 000 mitochondries par cellule. Les
            mitochondries y ont un diamÃ¨tre de 0,75 Ã  3 Î¼m et une longueur
            pouvant atteindre 10 Âµm. Elles se composent de deux membranes, une
            membrane mitochondriale externe et une membrane mitochondriale
            interne, qui dÃ©limitent trois milieux : le milieu
            extra-mitochondrial (cytoplasme de la cellule), l'espace
            intermembranaire mitochondrial, et la matrice mitochondriale.
          </p>
        </div>
        <div className="mx-auto sm:my-auto w-full sm:order-first">
          <Image
            src={bg}
            alt="Image"
            className="rounded-md object-cover h-[200px] sm:h-[300px] sm:max-h-[500px]"
          />
        </div>
      </div>
      <div className="h-10 sm:h-16" />
    </main>
  );
}