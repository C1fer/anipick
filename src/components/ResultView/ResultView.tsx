import type { MALAnime } from "@/types/anime";
import { Constants } from "@/utils/constants";
import { Building2, Calendar, CirclePlay, Clock, ExternalLink, Frown, RotateCcw, Sparkles, Tv } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import type { ResultViewProps } from "./ResultView-def";
import { useResultView } from "./useResultView";

export const ResultView = (props: ResultViewProps ) => {
    const { isRedrawing, handleRedraw } = useResultView(props);

    const renderRedrawButton = (label: string) => (
        <Button 
            className="py-6 cursor-pointer bg-accent-indigo text-white hover:bg-accent-indigo/90 gap-4 "
            onClick={handleRedraw}
        >
            {isRedrawing ? <Spinner/> : <RotateCcw size={40} color="white"/>}
            <span className="text-text-off-white">{label}</span>
        </Button>
    )


    const renderEmptyState = () => (
        <motion.div className="flex flex-col items-center justify-center gap-4">
            <motion.div
                className="bg-card-dark w-24 h-24 rounded-full flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Frown className="text-text-muted w-12 h-12"/>
            </motion.div>
            
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-2xl font-bold text-white">No luck?</h2>
                <p className=" text-text-muted wrap text-center max-w-sm">
                    You've gone through all the picks. Want to try again with fresh options?
                </p>
            </div>
             {renderRedrawButton("Try Again")}
        </motion.div>
    )

    const renderSelectionContent = (selection: MALAnime) => (
        <div className="w-full rounded-2xl border border-border-dark/65 overflow-hidden shadow-xl gap">
              <img 
                    src={selection.images.webp.large_image_url} 
                    alt={selection.title} 
                    className="object-cover h-64 w-full"
                    draggable={false}
                />
            <div className="flex flex-col justify-between bg-card-dark p-5 space-y-3">
                <h2 className="text-white font-bold text-xl line-clamp-2">
                    {selection.title}
                </h2>
                <div className="grid gap-y-3 justify-between text-text-muted text-sm max-w-2xs">
                    <span className="col-start-1 flex items-center gap-2">
                        <Tv className="w-4 h-4" />
                        {selection.type}
                    </span>
                    <span className="col-start-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {selection.episodes ? `${selection.episodes} episodes` : "Unknown episodes"}
                    </span>
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {selection.year || selection.aired.prop.from.year || "Unknown"}
                    </span>
                    <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        {selection.studios.map((studio) => studio.name).join(", ")}
                    </span>
                </div>
                {/* <div className="flex gap-2 mt-2 flex-wrap">
                    {cardData.demographic && renderGenreDemoBadge(cardData.demographic)}
                    {cardData.genres.map(renderGenreDemoBadge)}
                </div> */}
                <p className="mt-4 text-text-muted text-sm line-clamp-4">
                    {selection.synopsis}
                </p>
                <div className="flex justify-between">
                    {selection.rating && (
                        <span className="text-text-off-white text-sm">
                            {Constants.ratings[selection.rating] ?? selection.rating}
                        </span>
                    )}
                    <a 
                        className="flex items-center gap-2 text-sm text-accent-indigo-v2 hover:underline mt-2"
                        href={selection.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        <ExternalLink className="w-4 h-4" />
                        View on MAL
                    </a>
                </div>
            </div>
        </div>
    )

    const renderSelectionDetails = (value: MALAnime) => (
        <motion.div className="flex flex-col items-center justify-center gap-6 w-md">
            <h2 className="text-white font-bold text-2xl">Your Pick!</h2>
            {renderSelectionContent(value)}
            <div className="flex flex-col gap-3 items-stretch w-full max-w-md">
                <Button 
                    className="py-6 cursor-pointer bg-accent-indigo text-white hover:bg-accent-indigo/90 gap-4 "
                    // onClick={onSubmit}
                >
                    {/* {isLoading ? <Spinner/> : <Sparkles size={40} color="white"/>} */}
                    <CirclePlay/>
                    <span className="text-text-off-white">Watch Now</span>
                </Button>
                {renderRedrawButton("Redraw")}
            </div>
        </motion.div>
    )

    return (
        <div className="flex h-full items-center justify-center">
            {props.selection ? renderSelectionDetails(props.selection) : renderEmptyState()}
        </div>
    )
}