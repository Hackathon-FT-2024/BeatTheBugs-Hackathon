
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const FeatureProduit = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">New!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-2x md:text-4xl max-w-lg tracking-tighter text-left font-regular">
              Vitalité Plus - Énergie Naturelle
            </h1>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Vitalité Plus est un complément alimentaire conçu pour vous offrir un regain d'énergie tout au long de la journée. Grâce à une formule enrichie en ginseng, guarana et vitamines B, il aide à réduire la fatigue et à améliorer vos performances physiques et mentales. Idéal pour les journées intenses ou en période de stress, ce complément naturel soutient votre vitalité sans effet de nervosité.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            
            <Link href="/maintenance" passHref legacyBehavior>
            <Button size="lg" className="gap-4">
              Lire la suite <MoveRight className="w-4 h-4" />
            </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square">
            <img
             src="https://cdn.pixabay.com/photo/2018/04/05/21/36/fruit-3294314_1280.jpg"
              
                className="size-full object-cover object-center"
              />
          </div>
          <div className="bg-muted rounded-md row-span-2">
            <img
              src="https://cdn.pixabay.com/photo/2024/04/26/08/03/slimming-8721327_1280.png"
                className="size-full object-cover object-center"
              />
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <img
              src="https://laboratoirehollis.fr/cdn/shop/products/HOLLIS-ONAGRE_472x653_crop_center.jpg?v=1622477559"
                className="size-full object-cover object-center"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
);