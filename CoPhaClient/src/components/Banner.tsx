import { DollarSign, Flame, KeyRound, Timer, Utensils } from 'lucide-react';

export const Banner = () => {
    return (
        <section className="overflow-hidden pb-20 lg:pb-30">
            <div className="container relative">
                <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden size-[500px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block"></div>
                <div className="relative flex justify-between gap-16">
                    <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-transparent to-transparent lg:block"></div>

                    <div className="w-full max-w-96 shrink-0 justify-between">
                        <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-4xl">
                            Complémentaire alimentaire minceur
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Le contrôle du poids consiste à trouver un équilibre harmonieux entre alimentation, mode de vie et activité physique, tout en maîtrisant la prise ou la perte de poids. Cela implique de manger de manière équilibrée sans frustration, tout en évitant les excès et en modelant sa silhouette de façon progressive. La perte de poids devient plus facile lorsqu’elle est soutenue par des compléments alimentaires adaptés.
                        </p>
                    </div>
                    <div className="hidden w-full md:block">
                        <img
                            src="https://www.nutrilifeshop.com/media/wysiwyg/poids.jpg"
                            alt="placeholder"
                            className="max-h-[400px] w-full rounded-lg border object-cover"
                        />
                    </div>
                </div>
                <div className="relative mt-12 grid md:grid-cols-3">
                    <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                        <Flame />
                        <div>
                            <h3 className="text-lg font-medium">Métabolisme</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Les compléments minceur peuvent stimuler le métabolisme et augmenter la dépense calorique. Des ingrédients comme la caféine et le thé vert boostent l’énergie, aidant à brûler les graisses plus efficacement.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                        <Utensils />
                        <div>
                            <h3 className="text-lg font-medium">Contrôle de l’appétit</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Certains compléments réduisent l’appétit grâce à des ingrédients comme le konjac. Ils favorisent la satiété, limitant ainsi les grignotages et facilitant la gestion des portions sans frustration.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-6 px-2 py-10 md:p-6 lg:p-8">
                        <KeyRound />
                        <div>
                            <h3 className="text-lg font-medium">Élimination des toxines et drainage</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Des plantes drainantes comme la piloselle aident à éliminer l'excès d'eau et les toxines. Elles réduisent la rétention d’eau, permettant d'affiner la silhouette plus rapidement.
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