// components/Product/ProductCard.tsx
import Link from 'next/link';
import { ProductContext } from '@/context/productContext'; 

// Define the props for ProductCard
interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{product.NomCommercial}</h2>
      <p>Brand: {product.Marque}</p>

      {/* Link to Product Detail Page */}
      <Link href={`/product/${index}`}>
        <a className="text-blue-500 hover:underline">View Product Details</a>
      </Link>
    </div>
  );
};

export default ProductCard;
