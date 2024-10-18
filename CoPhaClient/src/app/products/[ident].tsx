import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useRouter } from 'next/router';
import { productData } from '@/lib/constants';
import { Product } from '@/context/productContext';


const ProductItemPage = ({ }) => {
  const [priceRange, setPriceRange] = useState([20, 100]);
   const [product, setProduct] = useState<Product | null>(null);

  const router = useRouter();
  const { ident } = router.query;


    useEffect(() => {
        if (router.isReady) {
          const foundProduct = productData.find((prod) => prod.ident === Number(ident));

          if (foundProduct) {
            setProduct(foundProduct || null);
          } 
        }
      }, [router.isReady, ident]);

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with filters */}
        <aside className="space-y-6 lg:col-span-1">
          <h2 className="text-lg font-semibold">Filters</h2>

          {/* Price Range Slider */}
          <div>
            <h3 className="text-md font-medium mb-2">Price Range</h3>
            <Slider
              value={priceRange}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setPriceRange(value)}
            />
            <div className="text-sm mt-2">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>

          {/* Category Checkboxes */}
          <div>
            <h3 className="text-md font-medium mb-2">Categories</h3>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Category 1
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Category 2
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Category 3
            </label>
          </div>

          {/* Brand Search Input */}
          <div>
            <h3 className="text-md font-medium mb-2">Search by Brand</h3>
            <Input placeholder="Search Brand" />
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <div className="flex justify-between mb-6">
            {/* Sorting Dropdown */}
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>

            {/* Product Search Input */}
            <Input className="w-[300px]" placeholder="Search Products" />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.map((product) => (
                    <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">{product.nom}</h1>
                <img src={product.image || '/placeholder-image.png'} alt={product.nom} />
                <p><strong>Marque:</strong> {product.marque || 'No Brand Available'}</p>
                <p><strong>Forme Galénique:</strong> {product.formeGalenique}</p>
                <p><strong>Responsable:</strong> {product.responsable}</p>
            </div>
      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemPage;


// pages/product/[id].tsx
// import { useContext, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import ProductContext from '@/context/productContext';
// import { Product } from '@/context/productContext';


// const ProductDetailPage = () => {
//   const { getProductById } = useContext(ProductContext) || {} ; 
//   const router = useRouter();
//   const { id } = router.query; // Get product ID from the route
//   const [product, setProduct] = useState<Product | undefined>(undefined);

//   useEffect(() => {
//     if (id && getProductById) {
//       const foundProduct = getProductById(parseInt(id as string, 10));
//       setProduct(foundProduct);
//     }
//   }, [id, getProductById]);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div>
//       <h1>{product.NomCommercial}</h1>
//       <p>Brand: {product.Marque}</p>
//       <p>Forme Galénique: {product.FormeGalenique}</p>
//       <p>Responsable Étiquetage: {product.ResponsableEtiquetage}</p>
//       <p>Dose Journaliere: {product.DoseJournaliere}</p>
//       <p>Mode d'Emploi: {product.ModeEmploi}</p>
//     </div>
//   );
// };

// export default ProductDetailPage;



// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Product {
//   ident: number;
//   nom: string;
//   marque: string;
//   formeGalenique: string;
//   responsable: string;
//   doseJournaliere: string;
//   modeEmploi: string;
//   misesEnGarde?: string;
//   gamme?: string;
//   aromes?: string;
//   populationARisques?: string;
//   plantes?: string;
//   famillePlantes?: string;
//   partiePlante?: string;
//   autresIngredients?: string;
//   objectifEffets?: string;
//   image?: string;
// }

// const ProductDetailPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     if (id) {
//       // Fetch the product data from the JSON file based on the dynamic id
//       axios
//         .get(`/data/product-${id}.json`)
//         .then((response) => {
//           setProduct(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error('Error fetching product data:', error);
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">{product.nom}</h1>
//       <img src={product.image} alt={product.nom} className="mb-4" />
//       <p><strong>Marque:</strong> {product.marque}</p>
//       <p><strong>Forme Galénique:</strong> {product.formeGalenique}</p>
//       <p><strong>Responsable:</strong> {product.responsable}</p>
//       <p><strong>Dose Journalière:</strong> {product.doseJournaliere}</p>
//       <p><strong>Mode d'Emploi:</strong> {product.modeEmploi}</p>
//       <p><strong>Mises en Garde:</strong> {product.misesEnGarde}</p>
//       <p><strong>Population à Risques:</strong> {product.populationARisques}</p>
//       <p><strong>Plantes:</strong> {product.plantes}</p>
//       <p><strong>Autres Ingrédients:</strong> {product.autresIngredients}</p>
//       <p><strong>Objectif/Effets:</strong> {product.objectifEffets}</p>
//     </div>
//   );
// };

// export default ProductDetailPage;
