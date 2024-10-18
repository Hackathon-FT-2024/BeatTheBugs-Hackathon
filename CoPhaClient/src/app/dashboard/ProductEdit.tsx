"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";

const productEditSchema = z.object({
    nom: z
        .string(),
    marque: z.string(),
    objectifEffets: z.string(),
    populationARisques: z.string(),
});

export default function ProductEdit() {
    const LogInForm = useForm<z.infer<typeof productEditSchema>>({
        resolver: zodResolver(productEditSchema),
        defaultValues: {
            nom: "",
            marque: "",
            objectifEffets: "",
            populationARisques: "",
        },
    });

    const handleSubmit = () => {
        //    make POST request to api
        alert('Produit modifié');
    };

    return (
        <>
            <div className="container mx-auto">
                <Form {...LogInForm}>
                    <form
                        // onSubmit={LogInForm.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={LogInForm.control}
                            name="nom"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={LogInForm.control}
                            name="marque"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Marque</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Marque" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={LogInForm.control}
                            name="objectifEffets"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Effets recherchés</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Effets recherchés"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={LogInForm.control}
                            name="populationARisques"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-md">Population à risque</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Population à risque"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-auto flex flex-auto place-content-center py-3">
                            <Button onClick={handleSubmit} className="w-40 text-md">
                                Modifier
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    );
}