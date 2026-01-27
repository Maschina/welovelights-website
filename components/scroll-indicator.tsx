"use client";

import { useState, useEffect } from "react";

export function ScrollIndicator() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${hasScrolled ? 'opacity-0 pointer-events-none' : 'animate-bounce'}`}>
            <div className="w-6 h-6 border-l-2 border-b-2 border-white transform -rotate-45 opacity-70"></div>
        </div>
    );
}
