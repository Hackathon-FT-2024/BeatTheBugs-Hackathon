"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";

const resetPwdSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "L'identifiant doit comporter au moins 2 caractères",
    })
    .max(50),
  email: z.string().email({ message: "Adresse mail non valide" }),
});

export default function ResetPasswordForm() {
  const ResetPwdForm = useForm<z.infer<typeof resetPwdSchema>>({
    resolver: zodResolver(resetPwdSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof resetPwdSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="container w-4/5 mx-auto py-6 2xs:max-xs:text-xs">
        <Form {...ResetPwdForm}>
          <form
            onSubmit={ResetPwdForm.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <p>
              Merci de renseigner votre username et votre adresse mail. Vous
              recevrez un mail contenant les instructions vous permettant de
              réinitialiser votre mot de passe.
            </p>
            <FormField
              control={ResetPwdForm.control}
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
              control={ResetPwdForm.control}
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
            <div className="w-auto flex flex-auto place-content-center py-3">
              <Button type="submit" className="w-50 text-md">
                Réinitialiser mon mot de passe
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
