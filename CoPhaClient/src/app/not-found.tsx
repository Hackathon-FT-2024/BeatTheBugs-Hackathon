import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default function NotFound() {
    return(
        <>
        <main className="flex flex-col min-h-screen">
            <div className="mx-auto my-auto pb-[10%] w-3/4">
                <div className="grid 2xs:max-2s:grid-rows-2 sm:grid-cols-8 sm:gap-4">
                    <h1 className="my-auto sm:col-span-4 text-center sm:text-right font-semibold text-6xl sm:text-8xl ml:text-9xl xl:text-[9rem]">
                    4O4
                    </h1>
                    <h1 className="my-auto sm:col-span-3 sm:col-end-8 ml:col-span-4 text-secondary text-center sm:text-left font-semibold text-3xl sm:text-4xl ml:text-6xl xl:text-[4.5rem]">
                    Page <br className="hidden sm:inline"/>not found
                    </h1>
                </div>
                <div className="grid grid-cols-1 my-2">
                <Link className="text-xs sm:text-sm text-muted-foreground text-center hover:underline underline-offset-4" href="/">Return home</Link>
                </div>
            </div>
        </main>
        </>
    )
}