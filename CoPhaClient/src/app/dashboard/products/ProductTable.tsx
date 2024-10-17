"use client"

import { Pencil } from "lucide-react"
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
import ProductEdit from "./ProductEdit";

const productsList = [
    {
        id: '1',
        nom: 'HARPAGOPHYTUM BIO',
        marque: 'ELFIA NATURE',
        effetsRecherchees: [],
        populationRisque: ['Ulcère (estomac ou duodenum)'],
        image: 'https://cdn.pixabay.com/photo/2016/07/26/11/51/capsule-1542682_1280.jpg',
    },
    {
        id: '2',
        nom: 'Complexe So08',
        marque: 'Nutri Prescription Paris',
        effetsRecherchees: ['Solaire'],
        populationRisque: ['Allaitement', 'Enfants (moins de 12 ans)', 'Grossesse'],
        image: 'https://cdn.pixabay.com/photo/2016/07/26/11/51/capsule-1542682_1280.jpg',
    },
    {
        id: '3',
        nom: 'BOOSTE L\'ENERGIE',
        marque: 'GERIMAX',
        effetsRecherchees: ['Autre (à préciser)', 'Concentration', 'Sport'],
        populationRisque: ['Allaitement', 'Enfants (moins de 12 ans)', 'Grossesse'],
        image: 'https://cdn.pixabay.com/photo/2016/07/26/11/51/capsule-1542682_1280.jpg',
    },
    {
        id: '4',
        nom: 'Tonique',
        marque: 'VITAKIDS',
        effetsRecherchees: ['Autre (à préciser)'],
        populationRisque: ['Sous antidiabétiques'],
        image: 'https://cdn.pixabay.com/photo/2016/07/26/11/51/capsule-1542682_1280.jpg',
    },
];

export default function ProductTable() {
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
                    {productsList.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell><img src={product.image} style={{ maxWidth: "100px" }} /></TableCell>
                            <TableCell>{product.nom}</TableCell>
                            <TableCell>{product.marque}</TableCell>
                            <TableCell>
                                <ol>
                                    {product.effetsRecherchees.map((i, index) => (
                                        <li key={index}>{i}</li>
                                    ))}
                                </ol>
                            </TableCell>
                            <TableCell>
                                <ol>
                                    {product.populationRisque.map((i, index) => (
                                        <li key={index}>{i}</li>
                                    ))}
                                </ol>
                            </TableCell>
                            <TableCell>
                                {/* <Button variant="ghost" size="sm"></Button> */}
                                <Dialog>
                                    <DialogTrigger>
                                        <Pencil style={{ maxHeight: "14px", maxWidth: "14px" }} />
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Modifier le produit</DialogTitle>
                                            <DialogDescription>
                                                <ProductEdit />
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></div>)
}