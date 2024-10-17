import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
    return(
        <>
        <main className="flex flex-col min-h-screen">
            <div className="mx-auto my-auto pb-[10%] w-3/4">
                <div className="grid grid-rows-3 xs:gap-2">
                    <h1 className="my-auto text-center font-semibold text-4xl xs:text-6xl">Be Right Back</h1>
                    <h1 className="my-auto text-center text-secondary font-semibold text-2xl xs:text-4xl">This page is under construction</h1>
                    <Link
                    className="mx-auto mt-4 sm:mt-1 hover:underline underline-offset-4"
                    href="/">
                        <Button className="rounded-md bg-gradient-to-r sm:px-6 sm:py-2 text-xs sm:text-sm font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
        </>
    )
}