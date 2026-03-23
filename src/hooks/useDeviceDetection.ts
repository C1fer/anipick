import { useState } from "react";

export const useDeviceDetection = () => {
    const mobileDetection = window.matchMedia("(max-width: 768px)");

    const [isMobile, setIsMobile] = useState<boolean>(mobileDetection.matches);

    mobileDetection.addEventListener("change", (e) => {
        setIsMobile(e.matches);
    });

    return { isMobile };
}