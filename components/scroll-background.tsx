"use client";

import { useEffect } from "react";

export default function ScrollBackground({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Helper function to parse CSS color variable
        const getCSSColor = (variableName: string) => {
            const value = getComputedStyle(document.documentElement)
                .getPropertyValue(variableName)
                .trim();

            // Parse hex format (#RGB or #RRGGBB)
            const hex = value.replace('#', '');

            if (hex.length === 3) {
                // Short hex format: #RGB -> #RRGGBB
                const r = parseInt(hex[0] + hex[0], 16);
                const g = parseInt(hex[1] + hex[1], 16);
                const b = parseInt(hex[2] + hex[2], 16);
                return { r, g, b };
            } else if (hex.length === 6) {
                // Full hex format: #RRGGBB
                const r = parseInt(hex.substring(0, 2), 16);
                const g = parseInt(hex.substring(2, 4), 16);
                const b = parseInt(hex.substring(4, 6), 16);
                return { r, g, b };
            }

            return null;
        };
        
        // Define the color transition range
        const interpolateColor = (scroll: number) => {
            // Transition over the height of one viewport
            const maxScroll = window.innerHeight;
            const progress = Math.min(scroll / maxScroll, 1);

            const startColor = getCSSColor('--color-tertiary-darkest') || { r: 0, g: 0, b: 0 };
            const endColor = getCSSColor('--color-tertiary-dark') || { r: 0, g: 0, b: 0 };

            const r = Math.round(startColor.r + (endColor.r - startColor.r) * progress);
            const g = Math.round(startColor.g + (endColor.g - startColor.g) * progress);
            const b = Math.round(startColor.b + (endColor.b - startColor.b) * progress);

            return `rgb(${r}, ${g}, ${b})`;
        };

        const handleScroll = () => {
            document.body.style.backgroundColor = interpolateColor(window.scrollY);
        };

        // Set initial color based on current scroll position
        document.body.style.backgroundColor = interpolateColor(window.scrollY);
        // document.body.style.transition = 'background-color 0.1s ease-out';

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>{children}</>;
}

