"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "L'utilisateur doit comporter au moins 2 caractères",
      })
      .max(50),
    email: z.string().email({ message: "Adresse mail non valide" }),
    password: z
      .string()
      .min(8, {
        message: "Le mot de passe doit comporter au moins 8 caractères",
      })
      .max(50),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Le mot de passe doit comporter au moins 8 caractères",
      })
      .max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne sont pas identiques",
    path: ["confirmPassword"],
  });


export function SignUpForm() {
  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log(values);
  }

  return (
    <div className="container w-64 sm:w-96 mx-auto">
      <Form {...signUpForm}>
        <form
          onSubmit={signUpForm.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={signUpForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signUpForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-md">Adresse mail</FormLabel>
                <FormControl>
                  <Input placeholder="Adresse mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-2">
            <FormField
              control={signUpForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Mot de passe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">
                    Confirmer le mot de passe
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Mot de passe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-auto flex flex-auto place-content-center py-3">
            <Button type="submit" className="w-40 text-md">
              Créer mon compte
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
