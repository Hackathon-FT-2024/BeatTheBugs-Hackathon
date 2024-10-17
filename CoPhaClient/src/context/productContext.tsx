'use client'
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Define the type for a product
export interface Product {
  id: number;
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
export interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  // fetchProductById: (id: string) => Promise<void>;
   getProductById: (id: number) => Product | undefined
}

// Create the ProductContext with an initial empty value
const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Fetch the list of products from the local JSON file instead of the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get<Product[]>('/data/products.json');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch individual product by ID
  // const fetchProductById = async (id: string) => {
  //   try {
  //     const response = await axios.get<Product>(`/data/products.json-${id}`);
  //     setSelectedProduct(response.data);
  //   } catch (error) {
  //     console.error('Error fetching product:', error);
  //   }
  // };

  const getProductById = (id: number): Product | undefined => {
    return products.find((product) => product.id === id);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, selectedProduct, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
