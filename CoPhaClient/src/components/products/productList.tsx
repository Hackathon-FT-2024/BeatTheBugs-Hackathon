
import React, { useContext } from 'react';
import ProductContext, { Product } from '@/context/productContext'; 
import ProductCard from './productCard'; 

const ProductList: React.FC = () => {
  const productContext = useContext(ProductContext);;

  if (!productContext) {
    return <p>Context is not available</p>; 
  }

  const { products } = productContext; 

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} index={0} />
      ))}
    </div>
  );
};

export default ProductList;
