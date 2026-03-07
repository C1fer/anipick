import type { MALAnime } from "@/types/anime";
import { Constants } from "@/utils/constants";
import {  Building2, Calendar, ChevronFirst, CirclePlay, Clock, ExternalLink, Frown, MonitorPlay, RotateCcw, Star } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { Badge } from "../ui/badge";
import type { ResultViewProps } from "./ResultView-def";
import { useResultView } from "./useResultView";

export const ResultView = (props: ResultViewProps ) => {
    const { isRedrawing, handleRedraw } = useResultView(props);

    const renderEmptyState = () => (
        <motion.div className="flex flex-col items-center justify-center gap-6 max-w-sm">
            <motion.div
                className="bg-muted/50 w-24 h-24 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Frown className="text-muted-foreground w-12 h-12"/>
            </motion.div>
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-2xl font-bold text-foreground">No luck?</h2>
                <p className="text-muted-foreground">
                    You've gone through all the picks. Want to try again with fresh options?
                </p>
            </div>
            <AnimatedButton
                className="w-40"
                onClick={handleRedraw}
                leftIcon={<RotateCcw className="w-4 h-4"/>}
                label="Try Again"
                variant="primary"
                isLoading={isRedrawing}
            />
        </motion.div>
    )

    const renderSelectionContent = (selection: MALAnime) => (
        <div className="bg-card rounded-2xl overflow-hidden media-card-shadow">
            {/* Image & Score */}
            <div className="relative aspect-video overflow-hidden">
                <img 
                    src={selection.images.webp.large_image_url} 
                    alt={selection.title} 
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" /> {/* Gradient overlay */}
                {selection.score && (
                    <div className="absolute bottom-3 right-3">
                    <Badge className="bg-accent/90 text-accent-foreground border-0 gap-1 text-lg px-3 py-1">
                        <Star className="w-4 h-4 fill-current" />
                        {selection.score.toFixed(2)}
                    </Badge>
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-between p-5 gap-4">
                {/* Title */}
                <div>
                    <h2 className="text-foreground font-bold text-xl line-clamp-3">
                        {selection.title}
                    </h2>
                    {selection.title_english && (
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2" title={selection.title_english}>
                            {selection.title_english}
                        </p>
                    )}
                </div>
                
                {/* Meta Info */}
                <div className="grid gap-y-3 justify-between text-muted-foreground text-sm max-w-2xs">
                    <span className="col-start-1 flex items-center gap-2">
                        <MonitorPlay className="w-4 h-4" />
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
                        {selection.studios[0]?.name || "Unknown studio"}
                    </span>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-1.5">
                    {selection.genres.map((genre) => (
                    <Badge
                        key={`genre-${genre.mal_id}`}
                        className="bg-primary/20 text-primary border-primary/30"
                    >
                        {genre.name}
                    </Badge>
                    ))}
                </div>

                {/* Synopsis */}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {selection.synopsis}
                </p>

                <div className="flex justify-between">
                    {selection.rating && (
                        <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground px-3 py-1">
                            {/* {selection.rating} */}
                            {Constants.ratings[selection.rating] ?? selection.rating}
                        </Badge>
                    )}
                    <a 
                        className="flex items-center gap-2 text-sm text-action hover:underline mt-2"
                        href={selection.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                    >
                        <ExternalLink className="w-4 h-4 peer-hover: underline" />
                        View on MAL
                    </a>
                </div>
            </div>
        </div>
    )

    const renderSelectionDetails = (value: MALAnime) => (
        <motion.div className="flex flex-col items-center justify-center gap-6 max-w-md">
            <motion.div 
                className="flex items-center justify-between w-full gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button 
                    className="cursor-pointer p-1.5 text-muted-foreground rounded-lg hover:bg-action hover:text-foreground transition-all" 
                    onClick={props.onGoBack}
                >
                   <ChevronFirst className="w-5 h-5" />
                </button>
                <h2 className="text-foreground font-bold text-2xl"> Your Pick!</h2>
                <div className="w-10"/> {/* Spacer */}
            </motion.div>
            {renderSelectionContent(value)}
            <div className="flex flex-col gap-3 items-stretch w-full">
                <AnimatedButton
                    onClick={handleRedraw}
                    leftIcon={<CirclePlay className="w-4 h-4"/>}
                    label="Watch Now"
                    variant="primary"
               />
               <AnimatedButton
                    onClick={handleRedraw}
                    leftIcon={<RotateCcw className="w-4 h-4"/>}
                    label="Redraw"
                    variant="secondary"
                    isLoading={isRedrawing}
               />
            </div>
        </motion.div>
    )

    return (
        <div className="flex h-full items-center justify-center">
            {props.selection ? renderSelectionDetails(props.selection) : renderEmptyState()}
        </div>
    )
}