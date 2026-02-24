import { useState } from "react";
import type { AnimeCardStackProps, UseAnimeCardStackResult } from "./AnimeCardStack-def"

export const useAnimeCardStack = (props: AnimeCardStackProps): UseAnimeCardStackResult => {
    const [currentPickIndex, setCurrentPickIndex] = useState<number>(0);

    return {
        currentPickIndex,
    }
}