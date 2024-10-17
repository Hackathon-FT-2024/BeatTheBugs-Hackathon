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

const productsList = [
  {
    id: 'item-1',
    title: 'Product 1',
    summary: 'Description for product 1',
    href: '#',
    image: 'https://cdn.pixabay.com/photo/2016/07/26/11/51/capsule-1542682_1280.jpg',
    price: '$19.99',
  },
  {
    id: 'item-2',
    title: 'Product 2',
    summary: 'Description for product 2',
    href: '#',
    image: 'https://cdn.pixabay.com/photo/2015/10/31/12/35/medicine-1015642_1280.jpg',
    price: '$29.99',
  },
  {
    id: 'item-3',
    title: 'Product 3',
    summary: 'Description for product 3',
    href: '#',
    image: 'https://cdn.pixabay.com/photo/2017/04/06/08/36/medicine-2207622_1280.jpg',
    price: '$39.99',
  },
  {
    id: 'item-4',
    title: 'Product 4',
    summary: 'Description for product 4',
    href: '#',
    image: 'https://cdn.pixabay.com/photo/2014/05/19/00/22/pills-347609_1280.jpg',
    price: '$49.99',
  },
  {
    id: 'item-5',
    title: 'Product 5',
    summary: 'Description for product 5',
    href: '#',
    image: 'https://cdn.pixabay.com/photo/2015/09/17/01/15/tablets-943765_1280.jpg',
    price: '$59.99',
  },
  {
    id: 'item-6',
    title: 'Product 6',
    summary: 'Description for product 6',
    href: '#',
    image: 'https://cdn.pixabay.com/photo/2015/09/18/21/05/pills-946406_1280.jpg',
    price: '$69.99',
  },
];


// const Feature3 = () => {
//   return (
//     <section className="py-32">
//       <div className="container">
//         {/* Filters and Sorting Section */}
//         <div className="flex justify-between items-center mb-8">
//           {/* Filters */}
//           <div className="flex gap-4">
//             <Select>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Filter by Category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All</SelectItem>
//                 <SelectItem value="category1">Category 1</SelectItem>
//                 <SelectItem value="category2">Category 2</SelectItem>
//               </SelectContent>
//             </Select>
//             <Badge variant="secondary">Category</Badge>
//             <Badge variant="secondary">Price Range</Badge>
//           </div>

//           {/* Sorting */}
//           <div className="flex gap-4 items-center">
//             <Input placeholder="Search Products" className="w-[200px]" />
//             <Select>
//               <SelectTrigger className="w-[150px]">
//                 <SelectValue placeholder="Sort by" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="priceAsc">Price: Low to High</SelectItem>
//                 <SelectItem value="priceDesc">Price: High to Low</SelectItem>
//                 <SelectItem value="popularity">Popularity</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {productsList.map((item) => (
//             <Card key={item.id}>
//               <CardHeader className="pb-1">
//                 <img src={item.image} alt={item.title} className="h-40 w-full object-cover rounded-t-md" />
//               </CardHeader>
//               <CardContent className="text-left">
//                 <h2 className="mb-1 text-lg font-semibold">{item.title}</h2>
//                 <p className="leading-snug text-muted-foreground">{item.summary}</p>
//                 <p className="mt-2 font-bold">{item.price}</p>
//               </CardContent>
//               <CardFooter className="justify-end pb-0 pr-0">
//                 <Button variant="outline">Add to Cart</Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-8 flex justify-center">
//         {/* Pagination */}
//           <Pagination>
//             <PaginationContent>
//                 <PaginationItem>
//                     <PaginationPrevious href="#" />
//                 </PaginationItem>
//                 <PaginationItem>
//                     <PaginationLink href="#">1</PaginationLink>
//                 </PaginationItem>
//                 <PaginationItem>
//                     <PaginationEllipsis />
//                 </PaginationItem>
//                 <PaginationItem>
//                     <PaginationNext href="#" />
//                 </PaginationItem>
//                 </PaginationContent>
//           </Pagination>
//         </div>
//       </div>
//     </section>
//   );
// };
// pages/product-list.tsx

// export default Feature3;


import ProductList from '@/components/products/productList';

const ProductListPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <ProductList />
    </div>
  );
};

export default ProductListPage;