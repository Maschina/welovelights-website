"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import macbookHeroImage from "@/assets/Macbook_Hero_Image@2x.png";
import textLogoDark from "@/assets/text-logo-dark@2x.png";
import downloadOnTheMacAppStoreBadgeUsUkRgbWht092917 from "@/assets/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import Link from "next/link";

export default function Hero() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="flex hero-gradient pt-[136px] h-screen items-center">
            <div className="flex flex-row gap-[38px] w-full items-center justify-center sm:items-start sm:justify-end xl:justify-center overflow-hidden">
                <Image
                    src={macbookHeroImage}
                    alt="We Love Lights Screenshot with open menu from the menu bar and open Studio window"
                    width={628}
                    height={508}
                    loading="eager"
                    className="hidden sm:block relative w-[628px] h-[508px]"
                />
                <div className="flex flex-col items-center sm:items-start gap-[40px] pr-3 py-[17px] shrink-0">
                    <div className="flex relative">
                        <Image src={textLogoDark} alt="App Logo" className="w-[280px]" width={219} height={45} />
                    </div>
                    <h1 className="font-bold text-white text-center sm:text-left text-6xl sm:text-7xl tracking-tight leading-14 sm:leading-18">
                        Philips Hue <br />
                        on your Mac.
                    </h1>
                    <div className="flex flex-col items-center sm:items-start gap-[3.73px] relative">
                        <Link href="https://apps.apple.com/app/apple-store/id1479422551?pt=120333038&ct=WeLoveLights.app&mt=8">
                            <Image
                                className="relative w-[160px] sm:w-[190px]"
                                alt="Download on the Mac App Store"
                                src={downloadOnTheMacAppStoreBadgeUsUkRgbWht092917}
                                width={163.05}
                                height={41.8}
                            />
                        </Link>
                        <Link href="/changelog" className="flex text-muted text-xs hover:underline">
                            Version 3.6.5, macOS 13.0+
                        </Link>
                    </div>
                    <Image
                        src={macbookHeroImage}
                        alt="We Love Lights Screenshot with open menu from the menu bar and open Studio window"
                        width={628}
                        height={508}
                        loading="eager"
                        className="block sm:hidden relative w-[350px]"
                    />
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${hasScrolled ? 'opacity-0 pointer-events-none' : 'animate-bounce'}`}>
                <div className="w-6 h-6 border-l-2 border-b-2 border-white transform -rotate-45 opacity-70"></div>
            </div>
        </section>
    );
}
