// components/Product/ProductList.tsx
import { useContext } from 'react';
import ProductCard from './productCard';
import ProductContext from '@/context/productContext';
import { Product } from '@/context/productContext'; // Import the Product type

const ProductList: React.FC = () => {
  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product: Product, index: number) => (
        <ProductCard key={index} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductList;
