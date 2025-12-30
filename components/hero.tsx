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
            <div className="flex flex-row gap-[38px] w-full items-start justify-end xl:justify-center overflow-hidden">
                <Image
                    src={macbookHeroImage}
                    alt="Macbook hero image"
                    width={628}
                    height={508}
                    loading="eager"
                    className="relative w-[628px] h-[508px]"
                />
                <div className="flex flex-col items-start gap-[40px] pr-3 py-[17px] shrink-0">
                    <div className="flex w-[219px] h-[45px] items-center justify-between px-0 py-[1.02px] relative">
                        <Image src={textLogoDark} alt="App Logo" width={219} height={45} />
                    </div>
                    <h1 className="font-bold text-white text-7xl tracking-[-1.60px] leading-[59.7px]">
                        Philips Hue <br />
                        on your Mac.
                    </h1>
                    <div className="flex flex-col w-[164px] h-[58px] items-start gap-[3.73px] relative">
                        <Link href="https://apps.apple.com/app/apple-store/id1479422551?pt=120333038&ct=WeLoveLights.app&mt=8">
                            <Image
                                className="relative w-[163.05px] h-[41.8px]"
                                alt="Download on the mac app store"
                                src={downloadOnTheMacAppStoreBadgeUsUkRgbWht092917}
                                width={163.05}
                                height={41.8}
                            />
                        </Link>
                        <p className="flex text-muted text-xs">
                            Version 3.6.5, macOS 13.0+
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${hasScrolled ? 'opacity-0 pointer-events-none' : 'animate-bounce'}`}>
                <div className="w-6 h-6 border-l-2 border-b-2 border-white transform -rotate-45 opacity-70"></div>
            </div>
        </section>
    );
}
