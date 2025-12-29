import Hero from "@/components/hero";
import Features from "@/components/features";
import SupportButton from "@/components/support-button";

export default function Page() {
    return (
        <>
            <Hero />
            <Features />

            {/* Floating support button */}
            <SupportButton />
        </>
    );
}
