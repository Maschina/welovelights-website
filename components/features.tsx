import Image from "next/image";
import Link from "next/link";
import downloadOnTheMacAppStoreBadgeUsUkRgbWht092917 from "@/assets/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg";

export default function Hero() {
    const features = [
        {
            icon: "Feature_Icon_Menubar.svg",
            title: "Menubar\napplication",
        },
        {
            icon: "Feature_Icon_Window.svg",
            title: "Window\napplication",
        },
        {
            icon: "Feature_Icon_Keyboard.svg",
            title: "Global\nhotkeys",
        },
        {
            icon: "Feature_Icon_Customization.svg",
            title: "Customizable\nLights",
        },
        {
            icon: "Feature_Icon_Scenes.svg",
            title: "Color\nscenes",
        },
        {
            icon: "Feature_Icon_MotionSensor.svg",
            title: "Motion Sensor\ncontrol",
        },
        {
            icon: "Feature_Icon_Switch.svg",
            title: "Switch\ncontrol",
        },
        {
            icon: "Feature_Icon_RuleEditor.svg",
            title: "Rule\neditor",
        },
        {
            icon: "Feature_Icon_Shortcuts.svg",
            title: "Shortcuts\nintegration",
        },
        {
            icon: "Feature_Icon_MultiBridge.svg",
            title: "Multi-Bridge\nsupport",
        },
        {
            icon: "Feature_Icon_Remote.svg",
            title: "Remote\naccess",
        },
        {
            icon: "Feature_Icon_Native.svg",
            title: "Blazing Fast\nNative App",
        },
    ];

    return (
        <section className="bg-tertiary-dark">
            <div className="flex flex-col items-center gap-5 top-[51px]">
                <header className="flex flex-col items-center gap-5 bg-tertiary-darker/80 shadow-[0px_12px_12px_#00000030] rounded-4xl px-6 sm:px-26 py-6 max-w-[1100px] mx-6 sm:mx-12">
                    <h2 className="font-bold text-white text-3xl sm:text-5xl text-center sm:tracking-[-1.00px] leading-8 sm:leading-13 w-[230px] sm:w-full">
                        For Day-to-Day. For Pros.
                    </h2>
                    <p className="font-normal text-white text-base sm:text-xl text-center leading-6 sm:leading-8">
                        We Love Lights is the easiest yet most powerful way to control your Philips Hue or Phoscon deCONZ lights and devices
                        in macOS.
                    </p>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xs:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`justify-self-center flex flex-col items-center gap-2 sm:gap-4 p-2.5`}
                        >
                            <Image
                                className="h-[50px] sm:h-[60px] max-w-[55px] sm:max-w-[65px]"
                                alt={feature.title.replace("\n", " ")}
                                src={`/assets/${feature.icon}`}
                                width={65}
                                height={60}
                            />
                            <h3 className="font-bold text-white text-xl sm:text-2xl text-center leading-8 whitespace-pre-line">
                                {feature.title}
                            </h3>
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