import { ArrowLeft } from "lucide-react";
import type { AnimeCardStackProps } from "./AnimeCardStack-def"
import { useAnimeCardStack } from "./useAnimeCardStack"
import { AnimeCard } from "./AnimeCard";

export const AnimeCardStack = (props: AnimeCardStackProps): React.ReactElement => {
    // const { 
        
    // } = useAnimeCardStack(props);

    return (
        <div className="flex flex-col items-center justify-center w-full h-auto max-w-md gap-2">
            <div className="flex items-center w-full h-full">
                <ArrowLeft size={32} className="cursor-pointer" color="white"/>
                <span className=" text-text-muted self-center">{`1/${props.picks.length}`}</span>
            </div>
            <AnimeCard data={props.picks[0]}/>
        </div>
    )
}