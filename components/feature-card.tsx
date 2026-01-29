"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Spotlight } from "@/components/ui/spotlight-new";

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export type Feature = {
    icon: string;
    title: string;
    description: string;
    details: string;
    video?: string;
    images?: string[];
};

function FeatureDialogContent({ feature }: { feature: Feature }) {
    return (
        <div className="flex flex-col items-center gap-6 w-[calc(100vw-1rem)] sm:w-auto max-w-2xl mx-auto px-3">
            <div className="relative">
                <Image
                    className="relative h-[60px] w-[60px]"
                    alt={feature.title.replace("\n", " ")}
                    src={`/assets/${feature.icon}`}
                    width={80}
                    height={80}
                />
            </div>
            <div className="text-center space-y-4 w-full">
                <Spotlight
                    className="hidden md:block"
                    translateY={-600}
                    duration={20}
                />
                <h3 className="text-3xl font-bold text-white px-4">
                    {feature.title.replace("\n", " ")}
                </h3>
                {feature.video && (
                    <div className="video-mask shadow-[0px_12px_12px_#00000030] h-auto w-full aspect-video rounded-lg">
                        <video preload="none" autoPlay muted loop className="w-full" aria-label="Video player">
                            <source src={feature.video} type="video/mp4" className="rounded-lg"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}
                <div className="px-4">
                    <p className="text-base text-white/75 text-center leading-relaxed max-w-prose mx-auto">
                        {feature.details}
                    </p>
                </div>
            </div>
            {feature.images && (
                <div className="w-full">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        slidesPerView={1}
                        className="rounded-lg"
                    >
                    {feature.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                <Image
                                    src={image}
                                    alt={`${feature.title.replace("\n", " ")}`}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}

export function FeatureCard({ feature }: { feature: Feature }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <article
                    className="group justify-self-center flex flex-col items-center gap-2 sm:gap-4 p-2.5 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out"
                >
                    <div className="relative">
                        {/* Glowing gradient background */}
                        <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-75" />
                        <Image
                            className="relative h-[50px] sm:h-[60px] max-w-[55px] sm:max-w-[65px] transition-[transform,filter] duration-300 group-hover:filter-[drop-shadow(0_2px_32px_rgba(255,255,255,0.5))_drop-shadow(0_0_5px_rgba(251,191,36,0.3))]"
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
            </DialogTrigger>
            <DialogContent showCloseButton={false} className="max-w-[100vw] ring-0 bg-tertiary-darker/0 rounded-4xl p-0">
                <DialogHeader className="sr-only">
                    <DialogTitle>{feature.title.replace("\n", " ")}</DialogTitle>
                </DialogHeader>
                <FeatureDialogContent feature={feature} />
                <DialogFooter className="flex-row justify-center sm:justify-center">
                    <DialogClose asChild>
                        <Button type="button" className="bg-white hover:bg-white/90 backdrop-blur-md shadow-[0px_4px_4px_#00000040] cursor-pointer overflow-hidden">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
