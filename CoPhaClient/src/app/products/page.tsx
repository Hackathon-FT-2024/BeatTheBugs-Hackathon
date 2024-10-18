import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Link from 'next/link';
import { productData } from '@/lib/constants';



const Feature3 = () => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Filters and Sorting Section */}
        <div className="flex justify-between items-center mb-8">
          {/* Filters */}
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrer par catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tout</SelectItem>
                <SelectItem value="category1">Catérogie 1</SelectItem>
                <SelectItem value="category2">Catérogie 2</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="secondary">Catérogie</Badge>
            <Badge variant="secondary">Prix</Badge>
          </div>

          {/* Sorting */}
          <div className="flex gap-4 items-center">
            <Input placeholder="Rechercher un produit, une marque ..." className="w-[300px]" />
            <Select>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Prix : du plus bas au plus élevé</SelectItem>
                <SelectItem value="priceDesc">Prix : du plus élevé au plus bas






</SelectItem>
                <SelectItem value="popularity">Populaire</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {productData.map((item) => (
            <Card key={item.ident}>
              <CardHeader className="pb-1">
                {/* Link wrapping the image */}
                <Link href={`/products/${item.ident}`} passHref>
                
                    <img src={item.image} alt={item.nom} className="h-40 w-full object-cover rounded-t-md" />
                
                </Link>
              </CardHeader>
              <CardContent className="text-left">
                <Link href={`/products/${item.ident}`} passHref legacyBehavior>
                  <a className="mb-1 text-lg font-semibold hover:underline">
                    <h2>{item.nom}</h2>
                  </a>
                </Link>
                <p className="leading-snug text-muted-foreground">{item.responsable}</p>
                <p className="mt-2 font-bold">{item.marque}</p>
              </CardContent>
              <CardFooter className="justify-end pb-0 pr-0">
                <Button variant="outline">More detail</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
        {/* Pagination */}
          <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
                </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};


export default Feature3;


