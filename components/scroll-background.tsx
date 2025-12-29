"use client";

import { useEffect } from "react";

export default function ScrollBackground({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Define the color transition range
        // From hero-gradient-start (10, 18, 45) to hero-gradient-end (44, 69, 142)
        const interpolateColor = (scroll: number) => {
            // Transition over the first 800px of scroll
            const maxScroll = 800;
            const progress = Math.min(scroll / maxScroll, 1);

            const startColor = { r: 10, g: 18, b: 45 };
            const endColor = { r: 44, g: 69, b: 142 };

            const r = Math.round(startColor.r + (endColor.r - startColor.r) * progress);
            const g = Math.round(startColor.g + (endColor.g - startColor.g) * progress);
            const b = Math.round(startColor.b + (endColor.b - startColor.b) * progress);

            return `rgb(${r}, ${g}, ${b})`;
        };

        const handleScroll = () => {
            document.body.style.backgroundColor = interpolateColor(window.scrollY);
        };

        // Set initial color
        document.body.style.backgroundColor = interpolateColor(0);
        document.body.style.transition = 'background-color 0.1s ease-out';

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>{children}</>;
}

