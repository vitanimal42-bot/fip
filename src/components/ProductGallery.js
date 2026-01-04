"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, productName }) {
    const [activeImage, setActiveImage] = useState(images[0]);

    if (!images || images.length === 0) return null;

    return (
        <div className="product-gallery">
            {/* Main Large Image */}
            <div
                className="product-gallery__main"
                style={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-soft)",
                    background: "white",
                    border: "1px solid rgba(0,0,0,0.04)",
                    position: "relative",
                    aspectRatio: "1/1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                }}
            >
                <Image
                    src={activeImage}
                    alt={productName}
                    width={600}
                    height={600}
                    className="product-gallery__image"
                    style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        transition: "all 0.3s ease"
                    }}
                />
            </div>

            {/* Thumbnails */}
            <div
                className="product-gallery__thumbs"
                style={{
                    display: "flex",
                    gap: "12px",
                    overflowX: "auto",
                    paddingBottom: "10px",
                    scrollSnapType: "x mandatory"
                }}
            >
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        style={{
                            flex: "0 0 80px",
                            height: "80px",
                            borderRadius: "12px",
                            border: activeImage === img ? "2px solid var(--brand)" : "1px solid rgba(0,0,0,0.1)",
                            padding: "4px",
                            background: "white",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            transform: activeImage === img ? "scale(1.05)" : "scale(1)",
                            opacity: activeImage === img ? 1 : 0.7
                        }}
                    >
                        <div style={{ position: "relative", width: "100%", height: "100%" }}>
                            <Image
                                src={img}
                                alt={`${productName} thumbnail ${index + 1}`}
                                fill
                                sizes="80px"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
