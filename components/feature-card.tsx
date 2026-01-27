"use client";

import Image from "next/image";
import { WarpDialog, WarpDialogContent, WarpDialogTrigger, useWarpDialogContext } from "./ui/warp-dialog";
import { Button } from "./ui/button";

type Feature = {
    icon: string;
    title: string;
    description: string;
    details: string;
};

function FeatureDialogContent({ feature }: { feature: Feature }) {
    const { setOpen } = useWarpDialogContext();

    return (
        <div className="flex flex-col items-center gap-6 px-3">
            <div className="relative">
                <Image
                    className="relative h-[80px] w-[80px]"
                    alt={feature.title.replace("\n", " ")}
                    src={`/assets/${feature.icon}`}
                    width={80}
                    height={80}
                />
            </div>
            <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-white">
                    {feature.title.replace("\n", " ")}
                </h3>
                <p className="text-base text-white/75 text-center leading-relaxed max-w-2xl mx-auto">
                    {feature.details}
                </p>
            </div>
            <div className="flex gap-4 mt-4">
                <Button 
                    variant="default" 
                    className="bg-white hover:bg-white/90 backdrop-blur-md shadow-[0px_4px_4px_#00000040] cursor-pointer overflow-hidden" 
                    onClick={() => setOpen(false)}
                >
                    Close
                </Button>
            </div>
        </div>
    );
}

export function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <WarpDialog>
            <WarpDialogTrigger asChild>
                <article
                    className="group justify-self-center flex flex-col items-center gap-2 sm:gap-4 p-2.5 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out"
                >
                    <div className="relative">
                        {/* Glowing gradient background */}
                        <div className="absolute inset-0 bg-linear-to-br from-yellow-500 via-amber-600 to-orange-500 rounded-full blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                        <Image
                            className="relative h-[50px] sm:h-[60px] max-w-[55px] sm:max-w-[65px] transition-[transform,filter] duration-300 group-hover:filter-[drop-shadow(0_2px_32px_rgba(255,255,255,0.5))_drop-shadow(0_0_5px_rgba(251,191,36,0.8))]"
                            alt={`${feature.title.replace("\n", " ")} - We Love Lights feature for Philips Hue control on macOS`}
                            src={`/assets/${feature.icon}`}
                            width={65}
                            height={60}
                        />
                    </div>
                    <h3 className="font-bold text-white text-xl sm:text-2xl text-center leading-8 whitespace-pre-line">
                        {feature.title}
                    </h3>
                </article>
            </WarpDialogTrigger>
            <WarpDialogContent>
                <FeatureDialogContent feature={feature} />
            </WarpDialogContent>
        </WarpDialog>
    );
}
