// components/Product/ProductCard.tsx
import Link from 'next/link';
import { Product } from '@/context/productContext'; 
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { productData } from '@/lib/constants';

// Define the props for ProductCard
interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productData.map((product) => (
        <Card key={product.ident}>
          <CardHeader>
            <img
              className="h-40 w-full object-cover rounded-md"
              src={product.image || '/placeholder-image.png'} // Default placeholder image if null
              alt={product.nom}
            />
          </CardHeader>
          <CardContent>
            <h2 className="text-lg font-semibold">{product.nom}</h2>
            <p>{product.marque || 'No Brand Available'}</p> {/* Default value if empty */}
            <p className="mt-2 text-sm text-muted-foreground">{product.formeGalenique}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/products/${product.ident}`} passHref>
              <Button variant="outline">View Details</Button>
            </Link>
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
