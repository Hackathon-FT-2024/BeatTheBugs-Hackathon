'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const data = [
  {
    id: 'item-1',
    title: 'Complément Minceur : Brûleur de Graisse Naturel',
    summary:
      'Ce complément aide à accélérer le métabolisme et à brûler les graisses plus rapidement. Formulé à base de thé vert et de guarana, il soutient la perte de poids tout en augmentant l’énergie.',
    href: '#',
    image: 'https://www.nutrisolution.fr/cdn/shop/files/Exislim_x1_86bfff20-ea80-463d-ac35-46953f2405a4.png?v=1702982218&width=1200',
  },
  {
    id: 'item-2',
    title: 'Complément Articulations : Flexibilité et Mobilité',
    summary:
      'Soutenez la santé de vos articulations avec un complément à base de glucosamine et de chondroïtine. Idéal pour les personnes actives et les seniors souhaitant maintenir leur mobilité.',
    href: '#',
    image: 'https://www.terravita.fr/media/cache/terravita_product_main_thumbnail_x2/6d/a3/31206eddae8fd3bb2f9844a4bf61.png',
  },
  {
    id: 'item-3',
    title: 'Vitamines Immunité : Renforcez vos Défenses',
    summary:
      'Un boost de vitamine C et de zinc pour renforcer le système immunitaire et protéger l’organisme contre les infections. Parfait pour les périodes hivernales ou de stress.',
    href: '#',
    image: 'https://apyforme.com/cdn/shop/files/FACING-WEB_2024-MULTIVITAMINES.png?v=1717491555',
  },
  {
    id: 'item-4',
    title: 'Complément Anti-Stress : Sérénité et Détente',
    summary:
      'Ce complément à base de magnésium et de rhodiola aide à réduire le stress et à améliorer la qualité du sommeil. Idéal pour un quotidien plus calme et équilibré.',
    href: '#',
    image: 'https://www.betteroption.fr/cdn/shop/files/Reduit_le_stress_physique_et_mentale_1.png?v=1726390345&width=990',
  },
  {
    id: 'item-5',
    title: 'Complément Énergie : Vitalité et Endurance',
    summary:
      'Formulé pour augmenter l’énergie et améliorer les performances physiques, ce complément est parfait pour les sportifs ou ceux qui recherchent un coup de pouce dans leur journée.',
    href: '#',
    image: 'https://ndlprohealth.com/cdn/shop/files/Regeneradormuscular.jpg?crop=center&height=1000&v=1703232980&width=1000',
  },
];


const CarouselHomePage = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-1">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Nos produits phare
            </h2>
            <a
              href="#"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              Achetez {' '}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-4 mr-4 2xl:ml-[calc(50vw-700px-16px)] 2xl:mr-[calc(50vw-700px-16px)]">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-[20px] md:max-w-[452px]"
              >
                <a
                  href={item.href}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] text-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative size-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="size-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm">
                    Affichez plus{' '}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselHomePage;
