import { DollarSign, KeyRound, Timer } from 'lucide-react';

export const Banner = () => {
    return (
        <section className="overflow-hidden pb-20 lg:pb-30">
            <div className="container relative">
                <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden size-[500px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block"></div>
                <div className="relative flex justify-between gap-16">
                    <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block"></div>

                    <div className="w-full max-w-96 shrink-0 justify-between">
                        <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-4xl">
                            Banner
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="hidden w-full md:block">
                        <img
                            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                            alt="placeholder"
                            className="max-h-[400px] w-full rounded-lg border object-cover"
                        />
                    </div>
                </div>
                <div className="relative mt-12 grid md:grid-cols-3">
                    <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                        <Timer />
                        <div>
                            <h3 className="text-lg font-medium">Descrription</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                        <DollarSign />
                        <div>
                            <h3 className="text-lg font-medium">Descrription</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                        <KeyRound />
                        <div>
                            <h3 className="text-lg font-medium">Description</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="absolute -inset-x-4 top-0 h-px bg-input md:hidden"></div>
                    <div className="absolute -inset-x-4 top-[-0.5px] row-start-2 h-px bg-input md:hidden"></div>
                    <div className="absolute -inset-x-4 top-[-0.5px] row-start-3 h-px bg-input md:hidden"></div>
                    <div className="absolute -inset-x-4 bottom-0 row-start-4 h-px bg-input md:hidden"></div>
                    <div className="absolute -left-2 -top-2 bottom-0 w-px bg-input md:hidden"></div>
                    <div className="absolute -right-2 -top-2 bottom-0 col-start-2 w-px bg-input md:hidden"></div>
                    <div className="absolute -inset-x-2 top-0 hidden h-px bg-input md:block"></div>
                    <div className="absolute -top-2 bottom-0 left-0 hidden w-px bg-input md:block"></div>
                    <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-2 hidden w-px bg-input md:block"></div>
                    <div className="absolute -left-[0.5px] -top-2 bottom-0 col-start-3 hidden w-px bg-input md:block"></div>
                    <div className="absolute -top-2 bottom-0 right-0 hidden w-px bg-input md:block"></div>
                </div>
            </div>
        </section>
    );
};