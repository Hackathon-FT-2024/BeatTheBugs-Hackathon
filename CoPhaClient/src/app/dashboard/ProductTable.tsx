"use client"

import { AlignJustify } from "lucide-react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ProductEdit from "./ProductEdit";
import ImageEdit from "./lmageEdit";
import { SetStateAction } from "react";
import { useState } from "react";

export default function ProductTable(products: { products: [] }) {
    const [listProducts, setListProducts] = useState(products.products);
    const [nom, setNom] = useState("")
    const [marque, setMarque] = useState("")
    const [effets, setEffets] = useState("")
    const [popRisque, setPopRisque] = useState("")
    // console.log(products)
    function handleSubmit(n: SetStateAction<string>, m: SetStateAction<string>, e: SetStateAction<string>, p: SetStateAction<string>) {
        setNom(n)
        setMarque(m)
        setEffets(e)
        setPopRisque(p)
    }
    return (
        <div className="my-auto max-h-[75%] px-10 overflow-scroll">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{" "}</TableHead>
                        <TableHead>Nom</TableHead>
                        <TableHead>Marque</TableHead>
                        <TableHead>Effets recherchées</TableHead>
                        <TableHead>Populations à risque</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {listProducts.map((product: { ident: number, nom: string, marque: string, objectifEffets: string, populationARisques: string }) => (
                        <TableRow key={product.ident}>
                            <TableCell><img src="https://cdn.pixabay.com/photo/2016/07/26/11/51/capsule-1542682_1280.jpg" style={{ maxWidth: "100px" }} /></TableCell>
                            <TableCell>{product.nom}</TableCell>
                            <TableCell>{product.marque}</TableCell>
                            <TableCell>
                                <ol>
                                    {product.objectifEffets.split(",").map((effet, index) => (
                                        <li key={index}>{effet}</li>
                                    ))}
                                </ol>
                            </TableCell>
                            <TableCell>
                                <ol>
                                    {product.populationARisques.split(",").map((effet, index) => (
                                        <li key={index}>{effet}</li>
                                    ))}
                                </ol>
                            </TableCell>
                            <TableCell>
                                {/* <Button variant="ghost" size="sm"></Button> */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger><AlignJustify /></DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <Dialog>
                                                <DialogTrigger>Modifier le produit
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>Modifier le produit</DialogTitle>
                                                        <DialogDescription>
                                                            <ProductEdit />
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog></DropdownMenuItem>
                                        <DropdownMenuItem><Dialog>
                                            <DialogTrigger>Changer l'image
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Changer l'image</DialogTitle>
                                                    <DialogDescription>
                                                        <ImageEdit />
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog></DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></div>)
}