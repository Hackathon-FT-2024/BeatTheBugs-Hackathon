import Image from "next/image";
import CarouselHomePage from "@components/carouselHomePage";

import bg from '@resources/example_bg.png'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="mx-auto mt-10 mb-10 w-11/12 xs:w-2/3">
        <h1 className="text-center font-semibold text-5xl md:text-7xl ml:text-8xl pb-10">
          Home page
        </h1>{" "}
        <h1 className="text-center text-md md:text-xl">
          Une mitochondrie est un organite, possédant toutes les
          caractéristiques d'un organisme procaryote, entourée d'une double
          membrane composée chacune d'une double couche phospholipidique, et
          retrouvée chez la plupart des cellules eucaryotes.
        </h1>
      </div>
      <div className="container mx-auto px-10">
        {" "}
        <CarouselHomePage />
      </div>
      <div className="h-0 sm:h-16" />
      <div className="w-5/6 mx-auto grid 2xs:max-sm:grid-rows-2 sm:grid-cols-3 gap-1">
        <div className="2xs:max-sm:w-[100%] sm:col-span-2 mx-auto my-auto">
          <h1 className="font-semibold text-4xl mb-2 text-left">Section 1</h1>
          <p className="text-sm md:text-base mr-6">
            Les mitochondries sont souvent décrites comme les « centrales
            énergétiques » des cellules, dans la mesure où elles contribuent à
            l'essentiel de la production d'ATP cellulaire à travers la
            β-oxydation, le cycle de Krebs et la chaîne respiratoire dans le
            cadre de la phosphorylation oxydative, l'ATP étant la molécule
            énergétique ubiquitaire utilisée dans un très grand nombre de
            réactions chimiques du métabolisme, et notamment de l'anabolisme
            (biosynthèses). <br />
            <br />
            En outre, elles effectuent leur propre biosynthèse d'acides gras
            (mtFASII), qui est essentielle pour la biogenèse mitochondriale et
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
            On rencontre environ 300 à 2 000 mitochondries par cellule. Les
            mitochondries y ont un diamètre de 0,75 à 3 μm et une longueur
            pouvant atteindre 10 µm. Elles se composent de deux membranes, une
            membrane mitochondriale externe et une membrane mitochondriale
            interne, qui délimitent trois milieux : le milieu
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