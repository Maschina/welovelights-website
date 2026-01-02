import Hero from "@/components/hero";
import Features from "@/components/features";
import { Footer } from "@/components/footer";
import ScrollBackground from "@/components/scroll-background";

export default function Page() {
    return (
        <ScrollBackground>
            <Hero />
            <Features />
            <Footer className="bg-tertiary-dark" />
        </ScrollBackground>
    );
}
