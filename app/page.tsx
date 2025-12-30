import Hero from "@/components/hero";
import Features from "@/components/features";
import SupportButton from "@/components/support-button";
import { Footer } from "@/components/footer";

export default function Page() {
    return (
        <>
            <Hero />
            <Features />
            <Footer />

            {/* Floating support button */}
            <SupportButton />
        </>
    );
}
