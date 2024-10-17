import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Define the type for a product
interface Product {
  NomCommercial: string;
  Marque: string;
  FormeGalenique: string;
  ResponsableEtiquetage: string;
  DoseJournaliere: string;
  ModeEmploi: string;
  MisesEnGarde?: string;
  Gamme?: string;
  Aromes?: string;
  population_a_risques?: string;
  plantes?: string;
  familles_plantes?: string;
  parties_plantes?: string;
  autres_ingredients?: string;
  objectif_effet?: string;
}

// Define the context type
interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  fetchProductById: (id: string) => Promise<void>;
}

// Create the ProductContext with an initial empty value
const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Fetch the list of products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>('/copha/shop/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch individual product by ID
  const fetchProductById = async (id: string) => {
    try {
      const response = await axios.get<Product>(`/copha/shop/product-${id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, selectedProduct, fetchProductById }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
