import Hero from "@/components/hero";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import ScrollBackground from "@/components/scroll-background";
import { SoftwareApplicationSchema } from "@/components/structured-data";

export default function Page() {
    return (
        <>
            <SoftwareApplicationSchema />
            <ScrollBackground>
                <Hero />
                <Features />
                <Footer className="bg-tertiary-dark" />
            </ScrollBackground>
        </>
    );
}
