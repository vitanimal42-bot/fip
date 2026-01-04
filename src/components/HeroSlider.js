"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000); // Change slide every 6 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="hero__bg" aria-hidden="true">
            {images.map((src, index) => (
                <div
                    key={src}
                    style={{
                        position: "absolute",
                        inset: 0,
                        opacity: index === currentIndex ? 1 : 0,
                        transition: "opacity 1.5s ease-in-out",
                        zIndex: index === currentIndex ? 1 : 0,
                    }}
                >
                    <img
                        src={src}
                        alt="Hero background"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(0.85)",
                            animation: index === currentIndex ? "soft-zoom 15s ease-out forwards" : "none",
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
