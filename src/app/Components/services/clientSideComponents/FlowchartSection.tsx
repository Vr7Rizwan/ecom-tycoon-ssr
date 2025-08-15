"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FramerWrapper from "../../../../../lib/FramerWrapper";

interface FlowchartProps {
    activeService: string;
}
export default function FlowchartSection({ activeService }: FlowchartProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return; // SSR safety
        const checkMobile = () => setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <FramerWrapper
            animation="fade-up"
            duration={0.8}
            delay={0.1}
            easing="ease-out"
            once={true}
        >
            <div>
                <Image alt="flowchart" width={isMobile ? 1290 : 1921} height={isMobile ? 2796 : 1081} priority src={isMobile ? `/assets/Services/${activeService.toLowerCase()}/flowchart-mobile.webp` : `/assets/Services/${activeService.toLowerCase()}/flowchart.webp`} />
            </div>
        </FramerWrapper>
    );
}
