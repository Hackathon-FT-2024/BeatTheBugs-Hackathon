import {  Search, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => (
    <div className="w-full">
        <div className="container mx-auto">
            <div className="flex gap-8 py-20 items-center justify-center flex-col">
                <div className="flex gap-4 flex-col">
                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                        Le chemin vers une sihouette de rêve
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                        Découvrez notre gamme de produits innovants !
                    </p>
                </div>
                <div className="flex flex-row gap-3">
                    <Link href="/products" passHref legacyBehavior>
                        <Button size="lg" className="gap-4" variant="outline">
                            Shop <ShoppingBag className="w-4 h-4" />
                        </Button>
                    </Link>
                    <Link href="/maintenance" passHref legacyBehavior> 
                        <Button size="lg" className="gap-4">
                            Recherche <Search className="w-4 h-4" />
                        </Button>
                        </Link>
                   
                </div>
            </div>
        </div>
    </div>
);