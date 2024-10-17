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

const logInSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "L'identifiant doit comporter au moins 2 caractères",
    })
    .max(50),
  email: z.string().email({ message: "Mail non valide" }),
  password: z
    .string()
    .min(8, {
      message: "Le mot de passe doit comporter au moins 8 caractères",
    })
    .max(50),
});

export default function LogInForm() {
  const LogInForm = useForm<z.infer<typeof logInSchema>>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof logInSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="container w-64 sm:w-96 mx-auto">
        <Form {...LogInForm}>
          <form
            onSubmit={LogInForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={LogInForm.control}
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
              control={LogInForm.control}
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
            <FormField
              control={LogInForm.control}
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
            <div className="w-auto flex flex-auto place-content-center py-3">
              <Button type="submit" className="w-40 text-md">
                Se connecter
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
