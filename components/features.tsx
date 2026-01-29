import Image from "next/image";
import Link from "next/link";
import downloadOnTheMacAppStoreBadgeUsUkRgbWht092917 from "@/assets/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg";
import { FeatureCard, type Feature } from "./feature-card";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";
import path from "node:path";

export default async function Hero() {
    const features: Feature[] = [
        {
            icon: "Feature_Icon_Menubar.svg",
            title: "Menubar\napplication",
            description: "For Day-to-Day.",
            details: "We Love Lights lives in your menubar, providing instant access to all your Philips Hue and deCONZ lights. Control brightness, colors, and scenes without opening a window. The menubar app is lightweight, fast, and designed to stay out of your way until you need it.",
            video: "https://welovelights1.s3.eu-central-1.amazonaws.com/menubar.demo.mp4",
        },
        {
            icon: "Feature_Icon_Window.svg",
            title: "Window\napplication",
            description: "For Pros: We Love Lights Studio",
            details: "For those who prefer a traditional application window, We Love Lights offers a beautiful, intuitive interface with all features at your fingertips. The window application provides a comprehensive view of all your lights, rooms, and scenes with advanced controls and customization options.",
            video: "https://welovelights1.s3.eu-central-1.amazonaws.com/studio.demo.mp4",
        },
        {
            icon: "Feature_Icon_Keyboard.svg",
            title: "Global\nhotkeys",
            description: "Control your lights without touching your mouse using customizable keyboard shortcuts.",
            details: "Set up global keyboard shortcuts to control your lights from any application. Toggle lights on and off, adjust brightness, switch scenes, and more—all without leaving your current task. Perfect for productivity enthusiasts and power users who prefer keyboard-driven workflows.",
            images: [
                "/screenshots/feature-hotkeys-1@2x.png",
            ],
        },
        {
            icon: "Feature_Icon_Customization.svg",
            title: "Customizable\nLights",
            description: "Fine-tune every aspect of your lighting experience with advanced customization options.",
            details: "We Love Lights gives you complete control over your lighting setup. Adjust colors with precision using HSB, RGB, or XY color pickers. Set exact brightness levels, color temperatures, and transition times. Group lights, rename them, and organize your space exactly how you want it.",
        },
        {
            icon: "Feature_Icon_Scenes.svg",
            title: "Color\nscenes",
            description: "Create and activate beautiful lighting scenes for any mood or occasion.",
            details: "Save your favorite lighting configurations as scenes and recall them instantly. Create scenes for work, relaxation, movie nights, or any activity. We Love Lights supports all native Hue scenes and lets you create unlimited custom scenes with precise control over every light in your setup.",
        },
        {
            icon: "Feature_Icon_MotionSensor.svg",
            title: "Motion Sensor\ncontrol",
            description: "Automate your lighting with motion sensors for hands-free control.",
            details: "Configure and manage your Philips Hue motion sensors directly from the app. Set up automated lighting rules based on motion detection, adjust sensitivity, and customize behavior for different times of day. Create smart lighting that responds to your presence automatically.",
        },
        {
            icon: "Feature_Icon_Switch.svg",
            title: "Switch\ncontrol",
            description: "Configure and manage your Hue switches and dimmer switches effortlessly.",
            details: "Take full control of your Philips Hue switches, dimmer switches, and tap switches. Customize button actions, assign scenes, and create complex lighting behaviors. We Love Lights provides an intuitive interface for programming your switches exactly how you want them to work.",
        },
        {
            icon: "Feature_Icon_RuleEditor.svg",
            title: "Rule\neditor",
            description: "Create powerful automation rules to make your lights truly smart.",
            details: "The built-in rule editor lets you create sophisticated automation based on sensors, switches, time schedules, and more. Set up rules for automatic dimming at sunset, motion-activated lighting, or complex multi-light sequences. The visual rule editor makes it easy to build powerful automations without coding.",
        },
        {
            icon: "Feature_Icon_Shortcuts.svg",
            title: "Shortcuts\nintegration",
            description: "Integrate with Apple Shortcuts for unlimited automation possibilities.",
            details: "We Love Lights integrates seamlessly with Apple Shortcuts, allowing you to control your lights as part of larger automation workflows. Trigger lighting changes from Siri, create complex multi-app automations, or control your lights based on location, time, or any other Shortcuts trigger.",
        },
        {
            icon: "Feature_Icon_MultiBridge.svg",
            title: "Multi-Bridge\nsupport",
            description: "Manage multiple Hue bridges from a single application.",
            details: "If you have multiple Philips Hue bridges across different locations—home, office, or vacation property—We Love Lights can manage them all from one place. Switch between bridges seamlessly, control lights across multiple locations, and maintain separate configurations for each setup.",
        },
        {
            icon: "Feature_Icon_Remote.svg",
            title: "Remote\naccess",
            description: "Control your lights from anywhere in the world with remote access.",
            details: "Connect to your lights remotely through Philips Hue's secure cloud service. Check if you left lights on while you're away, turn them on before you arrive home, or create the appearance that someone's home while you're traveling. Remote access works seamlessly with all We Love Lights features.",
        },
        {
            icon: "Feature_Icon_Native.svg",
            title: "Blazing Fast\nmacOS App",
            description: "Built natively for macOS with Apple Silicon optimization.",
            details: "We Love Lights is a 100% native macOS application built with Swift and optimized for Apple Silicon. It launches instantly, uses minimal battery power, and feels right at home on your Mac. With support for all macOS features including Dark Mode, full keyboard navigation, and retina displays, it's the Mac app you expect.",
        },
    ];

    // Generate blur data URLs for all images
    const featuresWithImageBlurData = await Promise.all(
        features.map(async (feature) => {
            if (!feature.images) return feature;

            const blurData = await Promise.all(
                feature.images.map(async (imagePath) => {
                    try {
                        const fullPath = path.join(process.cwd(), "public", imagePath);
                        const buffer = await fs.readFile(fullPath);
                        const { base64 } = await getPlaiceholder(buffer);
                        return base64;
                    } catch (error) {
                        console.error(`Failed to generate blur for ${imagePath}:`, error);
                        return undefined;
                    }
                })
            );

            return {
                ...feature,
                imageBlurData: blurData.filter((url): url is string => url !== undefined),
            };
        })
    );

    return (
        <section className="bg-tertiary-dark" aria-label="We Love Lights Features">
            <div className="flex flex-col items-center gap-5 top-[51px]">
                <div className="flex flex-col items-center gap-5 bg-tertiary-darker/80 shadow-[0px_12px_12px_#00000030] rounded-4xl px-6 sm:px-26 py-6 max-w-[1100px] mx-6 sm:mx-12">
                    <h2 className="font-bold text-white text-3xl sm:text-5xl text-center sm:tracking-[-1.00px] leading-8 sm:leading-13 w-[230px] sm:w-full">
                        For Day-to-Day. For Pros.
                    </h2>
                    <p className="font-normal text-white text-base sm:text-xl text-center leading-6 sm:leading-8">
                        We Love Lights is the easiest yet most powerful way for Mac users to control your Philips Hue lights and Zigbee devices on macOS.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xs:gap-8">
                    {featuresWithImageBlurData.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>

                {/* SEO-friendly feature list - hidden visually but readable by crawlers */}
                <div className="sr-only">
                    <h2>Complete Feature List</h2>
                    {featuresWithImageBlurData.map(feature => (
                        <div key={feature.title}>
                            <h3>{feature.title.replace("\n", " ")}</h3>
                            <p>{feature.details}</p>
                        </div>
                    ))}
                </div>

                <Link href="https://apps.apple.com/app/apple-store/id1479422551?pt=120333038&ct=WeLoveLights.app&mt=8" className="mt-12">
                    <Image
                        className="w-[180px] sm:w-[220px]"
                        alt="Download on the mac app store"
                        src={downloadOnTheMacAppStoreBadgeUsUkRgbWht092917}
                        width={163.05}
                        height={41.8}
                    />
                </Link>
            </div>
        </section>
    );
}