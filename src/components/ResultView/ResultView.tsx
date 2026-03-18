import type { MediaPick } from "@/types/media";
import { StringUtils } from "@/utils/StringUtils";
import { Book, Building2, Calendar, ChevronFirst, Clock, ExternalLink, Frown, MonitorPlay, Pencil, Play, RotateCcw, Star } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { StreamingOptionsDialog } from "../Dialogs/StreamingOptionsDialog";
import { Badge } from "../ui/badge";
import type { ResultViewProps } from "./ResultView-def";
import { useResultView } from "./useResultView";

export const ResultView = (props: ResultViewProps ) => {
    const { 
        mediaType,
        showModal,
        streamingOptions,
        isRedrawing,
        isLoadingStreams,
        streamsButtonLabel,
        setShowModal,
        handleRedraw,
        handleWatchNow,
        handleGoBack
    } = useResultView(props);

    const renderEmptyState = () => (
        <motion.div className="flex flex-col items-center justify-center gap-6 max-w-sm h-dvh">
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

    const renderActionButtons = () => (
        <>
            {mediaType === "anime" && (
                <>
                    <StreamingOptionsDialog
                        streamingOptions={streamingOptions}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                    <AnimatedButton
                        onClick={handleWatchNow}
                        leftIcon={<Play className="w-4 h-4"/>}
                        label={streamsButtonLabel}
                        variant="primary"
                        isLoading={isLoadingStreams}
                        disabled={streamingOptions?.length === 0 || isRedrawing}
                    />
                </>
            )}
            <AnimatedButton
                onClick={handleRedraw}
                leftIcon={<RotateCcw className="w-4 h-4"/>}
                label="Redraw"
                variant="secondary"
                isLoading={isRedrawing}
                disabled={isLoadingStreams}
            />
        </>
    )

    const renderGenreDemoBadge = (gd: string) => (
        <Badge
            key={`genre-badge-${gd}`}
            className="bg-primary/20 text-primary border-primary/30"
        >
            {gd}
        </Badge>
    )

    const renderSelectionContent = (selection: MediaPick) => (
        <div className="bg-card rounded-2xl overflow-hidden media-card-shadow md:landscape:flex md:landscape:flex-row">
            {/* Left — Image & Score */}
            <div className="relative aspect-video md:landscape:aspect-auto md:landscape:w-2/5 md:landscape:shrink-0 overflow-hidden">
                <img 
                    src={selection.imgUri} 
                    alt={selection.title} 
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                {selection.score && (
                    <div className="absolute bottom-3 right-3">
                    <Badge className="bg-accent/90 text-accent-foreground border-0 gap-1 text-lg px-3 py-1">
                        <Star className="w-4 h-4 fill-current" />
                        {selection.score}
                    </Badge>
                    </div>
                )}
            </div>

            {/* Right — Details */}
            <div className="flex flex-col p-5 gap-4 w-full md:landscape:overflow-y-auto md:landscape:max-h-[calc(100dvh-8rem)] md:landscape:scrollbar-subtle">
                {/* Title */}
                <div>
                    <h2 className="text-foreground font-bold text-xl line-clamp-3">
                        {selection.titleLocalized || selection.title}
                    </h2>
                    {selection.titleLocalized && selection.titleLocalized !== selection.title ? (
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2" title={selection.title}>
                            {selection.title}
                        </p>
                    ) : null}
                </div>
                
                {/* Meta Info */}
                <div className="grid gap-y-3 justify-between text-muted-foreground text-sm max-w-xs">
                    <span className="col-start-1 flex items-center gap-2">
                        {mediaType === "manga" ? <Book className="w-4 h-4" /> : <MonitorPlay className="w-4 h-4" />}
                        {selection.releaseType}
                    </span>
                    <span className="col-start-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {selection.episodeCount}
                    </span>
                    <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {selection.releaseYear}
                    </span>
                    <span className="flex items-center gap-2">
                        {mediaType === "anime" ? <Building2 className="w-4 h-4" /> : <Pencil className="w-4 h-4"/> }
                        {selection.studio || selection.authors?.[0]}
                    </span>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-1.5">
                    {selection.demographic && renderGenreDemoBadge(selection.demographic)}
                    {selection.genres.length > 0 && selection.genres.map(renderGenreDemoBadge)}
                </div>

                {/* Synopsis */}
                <div className="min-h-24 max-h-32 overflow-y-auto scrollbar-subtle rounded-lg bg-muted/25 px-3 py-2 landscape:max-h-none landscape:h-60">
                    <p className={`text-sm ${selection.synopsis?.length ? "text-muted-foreground text-justify" : "text-muted-foreground/80 italic"}`}>
                        {selection.synopsis || "No synopsis available."}
                    </p>
                </div>

            <div className="flex justify-between w-full">
                {selection.rating ? (
                    <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground px-3 py-1">
                        {selection.rating}
                    </Badge>
                ): <div/>}
                <a 
                    className="flex items-center justify-end gap-2 text-sm mt-2 text-action hover:underline"
                    href={selection.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                >
                    <ExternalLink className="w-4 h-4" />
                    View on MAL
                </a>
            </div>
            {/* Buttons — landscape only*/}
            <div className="hidden md:landscape:flex gap-3 mt-auto">
                {renderActionButtons()}
            </div>
            </div>
        </div>
    )

    const renderSelectionDetails = (value: MediaPick) => (
        <motion.div className="flex flex-col items-center justify-center gap-6 w-full max-w-lg md:landscape:max-w-4xl md:landscape:px-5">
            <motion.div 
                className="flex items-center justify-between w-full gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button 
                    className="cursor-pointer p-1.5 text-muted-foreground rounded-lg hover:bg-action hover:text-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
                    disabled={isLoadingStreams || isRedrawing}
                    onClick={handleGoBack}
                >
                   <ChevronFirst className="w-5 h-5" />
                </button>
                <h2 className="text-foreground font-bold text-2xl">Your Pick!</h2>
                <div className="w-10"/> {/* Spacer */}
            </motion.div>
            {renderSelectionContent(value)}
            {/* Buttons — portrait only*/}
            <div className="flex flex-col gap-3 items-stretch w-full md:landscape:hidden">
                {renderActionButtons()}
            </div>
        </motion.div>
    )

    return (
        <div className="flex h-full items-center justify-center">
            {props.selection ? renderSelectionDetails(props.selection) : renderEmptyState()}
        </div>
    )
}