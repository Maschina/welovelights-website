import Image from "next/image";

export default function Hero() {
    const features = [
        {
            icon: "Feature_Icon_Menubar.svg",
            title: "Menubar\napplication",
            row: "row-[1_/_2]",
            col: "col-[1_/_2]",
        },
        {
            icon: "Feature_Icon_Window.svg",
            title: "Window\napplication",
            row: "row-[1_/_2]",
            col: "col-[2_/_3]",
        },
        {
            icon: "Feature_Icon_Keyboard.svg",
            title: "Global\nhotkeys",
            row: "row-[1_/_2]",
            col: "col-[3_/_4]",
        },
        {
            icon: "Feature_Icon_Customization.svg",
            title: "Customizable\nLights",
            row: "row-[2_/_3]",
            col: "col-[1_/_2]",
        },
        {
            icon: "Feature_Icon_Scenes.svg",
            title: "Color\nscenes",
            row: "row-[2_/_3]",
            col: "col-[2_/_3]",
        },
        {
            icon: "Feature_Icon_MotionSensor.svg",
            title: "Motion Sensor\ncontrol",
            row: "row-[2_/_3]",
            col: "col-[3_/_4]",
        },
        {
            icon: "Feature_Icon_Switch.svg",
            title: "Switch\ncontrol",
            row: "row-[3_/_4]",
            col: "col-[1_/_2]",
        },
        {
            icon: "Feature_Icon_RuleEditor.svg",
            title: "Rule\neditor",
            row: "row-[3_/_4]",
            col: "col-[2_/_3]",
        },
        {
            icon: "Feature_Icon_Shortcuts.svg",
            title: "Shortcuts\nintegration",
            row: "row-[3_/_4]",
            col: "col-[3_/_4]",
        },
        {
            icon: "Feature_Icon_MultiBridge.svg",
            title: "Multi-Bridge\nsupport",
            row: "row-[4_/_5]",
            col: "col-[1_/_2]",
        },
        {
            icon: "Feature_Icon_Remote.svg",
            title: "Remote\naccess",
            row: "row-[4_/_5]",
            col: "col-[2_/_3]",
        },
        {
            icon: "Feature_Icon_Native.svg",
            title: "Blazing Fast\nNative App",
            row: "row-[4_/_5]",
            col: "col-[3_/_4]",
        },
    ];

    return (
        <section className="features-bg">
            <div className="flex flex-col items-center gap-24 top-[51px]">
                <header className="flex flex-col items-center gap-[26px] self-stretch w-full flex-[0_0_auto]">
                    <h1 className="relative self-stretch -mt-px font-bold text-white text-[45px] text-center tracking-[-1.80px] leading-9">
                        For Day-to-Day. For Pros.
                    </h1>
                    <p className="relative w-[825px] font-normal text-white text-[22px] text-center tracking-[-0.88px] leading-9">
                        We Love Lights is the easiest yet most powerful way to control{" "}
                        <br />
                        your Philips Hue or Phoscon deCONZ lights and devices <br />
                        in macOS.
                    </p>
                </header>

                <div className="grid grid-cols-[200px_200px_200px] grid-rows-[repeat(4,fit-content(100%))] w-[678px] h-[753px] gap-[39px] top-[266px] left-[190px]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`relative ${feature.row} ${feature.col} justify-self-center w-fit h-fit inline-flex flex-col items-center gap-[15px] p-2.5`}
                        >
                            <div className="inline-flex h-[60px] items-center justify-center gap-2.5 relative">
                                <Image
                                    className="relative max-w-[65px] max-h-[60px]"
                                    alt={feature.title.replace("\n", " ")}
                                    src={`/assets/${feature.icon}`}
                                    width={65}
                                    height={60}
                                />
                            </div>
                            <h3 className="relative w-fit font-bold text-white text-[26px] text-center tracking-[-1.04px] leading-8 whitespace-pre-line">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}