import { createContext, useContext, useState } from "react";

type MediaTypeContextType = {
    mediaType: string;
    setMediaType: (type: string) => void;
}

const MediaTypeContext = createContext<MediaTypeContextType | null>(null)

export const MediaTypeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mediaType, setMediaType] = useState<string>(window.location.pathname.includes("manga") ? "manga" : "anime");

    return (
        <MediaTypeContext.Provider value={{ mediaType, setMediaType }}>
            {children}
        </MediaTypeContext.Provider>
    )
}

export const useMediaType = (): MediaTypeContextType => {
    const ctx = useContext(MediaTypeContext);
    if (!ctx) throw new Error("useMediaType must be used within a MediaTypeProvider");
    return ctx;
}