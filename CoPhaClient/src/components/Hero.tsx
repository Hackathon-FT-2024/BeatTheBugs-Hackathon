import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
    <div className="w-full">
        <div className="container mx-auto">
            <div className="flex gap-8 py-20 items-center justify-center flex-col">
                <div className="flex gap-4 flex-col">
                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                        Hero Page
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="flex flex-row gap-3">
                    <Button size="lg" className="gap-4" variant="outline">
                        Jump on a call <PhoneCall className="w-4 h-4" />
                    </Button>
                    <Button size="lg" className="gap-4">
                        Sign up here <MoveRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
);