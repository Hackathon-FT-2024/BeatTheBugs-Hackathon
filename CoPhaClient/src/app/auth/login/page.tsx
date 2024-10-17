import LogInForm from "@/components/auth/login";

import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/dialog";
import ResetPasswordForm from "@/components/auth/resetPassword";

export default function LogInRoute() {
  return (
    <div className="container mx-auto  min-h-screen">
      <h1 className="text-center font-semibold text-5xl my-[6%] pb-2 sm:my-[1%] ">
        Connexion
      </h1>
      <LogInForm />
      <div className="mx-auto place-content-center text-sm mb-[10%] sm:mb-[4%] text-center w-[50%]">
        <Link
          className="hover:underline hover:underline-offset-4"
          href="/auth/signup"
        >
          Créer un compte
        </Link>
        <br className="my-2" />
        <Dialog>
          <DialogTrigger className="hover:underline hover:underline-offset-4">
            Mot de passe oublié ?
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Mot de passe oublié ?</DialogTitle>
              <DialogDescription>
                <ResetPasswordForm />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
