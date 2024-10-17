// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Slider } from '@/components/ui/slider';
// import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// const ProductItemPage = ({ product }) => {
//   const [priceRange, setPriceRange] = useState([20, 100]);
  
//   return (
//     <div className="container mx-auto p-4">
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold mb-6">Products</h1>
      
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Sidebar with filters */}
//         <aside className="space-y-6 lg:col-span-1">
//           <h2 className="text-lg font-semibold">Filters</h2>

//           {/* Price Range Slider */}
//           <div>
//             <h3 className="text-md font-medium mb-2">Price Range</h3>
//             <Slider
//               value={priceRange}
//               min={0}
//               max={100}
//               step={1}
//               onValueChange={(value) => setPriceRange(value)}
//             />
//             <div className="text-sm mt-2">
//               ${priceRange[0]} - ${priceRange[1]}
//             </div>
//           </div>

//           {/* Category Checkboxes */}
//           <div>
//             <h3 className="text-md font-medium mb-2">Categories</h3>
//             <label className="flex items-center mb-2">
//               <input type="checkbox" className="mr-2" />
//               Category 1
//             </label>
//             <label className="flex items-center mb-2">
//               <input type="checkbox" className="mr-2" />
//               Category 2
//             </label>
//             <label className="flex items-center mb-2">
//               <input type="checkbox" className="mr-2" />
//               Category 3
//             </label>
//           </div>

//           {/* Brand Search Input */}
//           <div>
//             <h3 className="text-md font-medium mb-2">Search by Brand</h3>
//             <Input placeholder="Search Brand" />
//           </div>
//         </aside>

//         {/* Main Content Area */}
//         <div className="lg:col-span-3">
//           <div className="flex justify-between mb-6">
//             {/* Sorting Dropdown */}
//             <Select>
//               <SelectTrigger className="w-[200px]">
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="priceAsc">Price: Low to High</SelectItem>
//                 <SelectItem value="priceDesc">Price: High to Low</SelectItem>
//                 <SelectItem value="popularity">Popularity</SelectItem>
//               </SelectContent>
//             </Select>

//             {/* Product Search Input */}
//             <Input className="w-[300px]" placeholder="Search Products" />
//           </div>

//           {/* Product Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <Card>
//               <CardHeader>
//                 <img
//                   className="h-40 w-full object-cover rounded-md"
//                   src={product.image}
//                   alt={product.NomCommercial}
//                 />
//               </CardHeader>
//               <CardContent>
//                 <h2 className="text-lg font-semibold">{product.NomCommercial}</h2>
//                 <p>{product.Marque}</p>
//                 <p className="mt-2 text-sm text-muted-foreground">{product.FormeGalenique}</p>
//               </CardContent>
//               <CardFooter>
//                 <Button variant="outline">Buy Now</Button>
//                 <Button>Add to Cart</Button>
//               </CardFooter>
//             </Card>

//             {/* Add more products here in a similar structure */}
//           </div>

//           {/* Pagination */}
//           <div className="mt-8 flex justify-center">
//             <Pagination>
//               <PaginationContent>
//                   <PaginationItem>
//                       <PaginationPrevious href="#" />
//                   </PaginationItem>
//                   <PaginationItem>
//                       <PaginationLink href="#">1</PaginationLink>
//                   </PaginationItem>
//                   <PaginationItem>
//                       <PaginationEllipsis />
//                   </PaginationItem>
//                   <PaginationItem>
//                       <PaginationNext href="#" />
//                   </PaginationItem>
//                   </PaginationContent>
//             </Pagination>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductItemPage;


// pages/product/[id].tsx
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductContext from '@/context/productContext';
import { Product } from '@/context/productContext';


const ProductDetailPage = () => {
  const { getProductById } = useContext(ProductContext) || {} ; 
  const router = useRouter();
  const { id } = router.query; // Get product ID from the route
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id && getProductById) {
      const foundProduct = getProductById(parseInt(id as string, 10));
      setProduct(foundProduct);
    }
  }, [id, getProductById]);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.NomCommercial}</h1>
      <p>Brand: {product.Marque}</p>
      <p>Forme Galénique: {product.FormeGalenique}</p>
      <p>Responsable Étiquetage: {product.ResponsableEtiquetage}</p>
      <p>Dose Journaliere: {product.DoseJournaliere}</p>
      <p>Mode d'Emploi: {product.ModeEmploi}</p>
    </div>
  );
};

export default ProductDetailPage;
