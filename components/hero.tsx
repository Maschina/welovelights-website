import Image from "next/image";
import macbookHeroImage from "@/assets/Macbook_Hero_Image.png";
import textLogoDark from "@/assets/text-logo-dark@2x.png";
import downloadOnTheMacAppStoreBadgeUsUkRgbWht092917 from "@/assets/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import Link from "next/link";
import { ScrollIndicator } from "./scroll-indicator";
import { getLatestVersion } from "@/lib/changelog";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
    const latestVersion = getLatestVersion();

    return (
        <section className="flex hero-gradient pt-[136px] h-screen items-center">
            <Spotlight
                className="hidden md:block"
                fill="white"
            />
            <div className="flex flex-row gap-[38px] w-full items-center justify-center sm:items-start sm:justify-end xl:justify-center overflow-hidden">
                <Image
                    src={macbookHeroImage}
                    alt="We Love Lights Screenshot with open menu from the menu bar and open Studio window"
                    width={1256}
                    height={1016}
                    loading="eager"
                    className="hidden sm:block relative w-[628px] h-[508px]"
                    priority
                />
                <div className="flex flex-col items-center sm:items-start gap-[40px] pr-3 py-[17px] shrink-0">
                    <div className="flex relative">
                        <Image src={textLogoDark} alt="App Logo" className="w-[280px]" width={219} height={45} loading="eager" priority />
                        <p className="sr-only">We Love Lights</p>
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
                            Version {latestVersion}, macOS 13.0+
                        </Link>
                        <Link href="https://testflight.apple.com/join/HAK6qEjT" className="flex text-muted text-xs hover:underline">Interested in Version 3.7 beta?</Link>
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
            <ScrollIndicator />
        </section>
    );
}
