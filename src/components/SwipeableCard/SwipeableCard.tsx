import { Badge } from "../ui/badge"
import { BookOpenText, Disc2, Film, Info, Star, Tv, TvMinimal } from "lucide-react"
import { useSwipeableCard } from "./useSwipeableCard"
import type { SwipeableCardProps } from "./SwipeableCard-def"
import { motion } from "motion/react"
import { PickSummaryDialog } from "../Dialogs/PickSummaryDialog"

export const SwipeableCard = (props: SwipeableCardProps): React.ReactElement => {
    const { displayedAtTop, data } = props;

    const {
        isDragging,
        styles,
        showSummaryModal,
        setShowSummaryModal,
        handleCardDragEnd,
        toggleIsDragging
    } = useSwipeableCard(props);

    const getReleaseTypeIcon = (type: string) => {
        const iconStyle = "w-3 h-3";
        if (data.type === "manga") {
            return <BookOpenText className={iconStyle} />;
        }

        switch (type.toLowerCase()) {
            case "tv":
            case "tv special":
                return <Tv className={iconStyle} />;
            case "movie":
                return <Film className={iconStyle} />;
            case "ova":
                return <Disc2 className={iconStyle} />
            case "ona":
                return <TvMinimal className={iconStyle}/>
            default:
                return null;
        }

    }

   const renderGenreDemoBadge = (gd: string) => (
        <Badge
            key={`${data.title}-${gd}`}
            variant="outline"
            className="bg-muted/50 border-border/50 text-muted-foreground text-xs"
        >
            {gd}
        </Badge>
   )

   const renderDragIndicator = () => (
        <>
            <motion.div
                className="absolute inset-0 bg-neon-cyan/20 z-10 flex items-center justify-center rounded-2xl border-4 border-neon-cyan"
                style={{ opacity: styles.pickOpacity }}
            >
                <span className="text-4xl font-bold text-neon-cyan -rotate-20 border-4 border-neon-cyan px-4 py-2 rounded-lg">
                    PICK!
                </span>
            </motion.div>
            <motion.div
                className="absolute inset-0 bg-destructive/20 z-10 flex items-center justify-center rounded-2xl border-4 border-destructive"
                style={{ opacity: styles.skipOpacity }}
            >
                <span className="text-4xl font-bold text-destructive rotate-20 border-4 border-destructive px-4 py-2 rounded-lg">
                    SKIP
                </span>
            </motion.div>
        </>
    )

    const renderMetaInfo = () => (
       <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
            {[
                data?.authors?.length ? data.authors[0] : null,
                data?.studio,
                data.episodeCount,
                data.releaseYear,
            ]
                .filter(Boolean)
                .map((item, i, arr) => (
                    <span key={i} className="flex items-center gap-2">
                        {item}
                        {i < arr.length - 1 && <span className="text-muted-foreground/40 font-2xl">•</span>}
                    </span>
                ))
            }
        </div>
    )

    const renderSummaryToggle = () => (
        <>
            <PickSummaryDialog
                data={data}
                isVisible={showSummaryModal}
                toggleModal={setShowSummaryModal}
            />
            <motion.button
                className="cursor-pointer absolute bottom-3 right-3 flex items-center justify-center p-1.5 rounded-full border border-border/50 bg-card text-muted-foreground hover:text-foreground peer transition-all"
                style={{ zIndex: isDragging ? 0 : 20 }}
                onClick={() => setShowSummaryModal(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
            >
                <Info className="w-5 h-5" />   
            </motion.button>
        </>
    )

    const renderCardContent = () => (
        <>
            {/* Image and Release Type/Score */}
            <div className="relative aspect-3/4 overflow-hidden">
                <img 
                    src={data.imgUri} 
                    alt={data.title} 
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/90 text-primary-foreground border-0 gap-1">
                        {getReleaseTypeIcon(data.releaseType)}
                        {data.releaseType}
                    </Badge>
                </div>
                {props.data.score && (
                    <div className="absolute top-3 right-3">
                        <Badge className="bg-accent/90 text-accent-foreground border-0 gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            {data.score}
                        </Badge>
                    </div>
                )} 
                {renderSummaryToggle()}
            </div>
            <div className="relative -mt-px bg-card flex flex-col justify-between gap-3.5 p-4">
                {/* Titltes */}
                <div >
                    <h2 
                        className="text-foreground font-bold text-xl line-clamp-3 md:line-clamp-none leading-tight hover:cursor-default" 
                        title={data.titleLocalized || data.title}
                    >
                        {data.titleLocalized || data.title}
                    </h2>
                    {data.titleLocalized && data.title !== data.titleLocalized ?  (
                        <p 
                            className="text-muted-foreground text-sm mt-1 line-clamp-3 md:line-clamp-none" 
                            title={data.title}
                        >
                            {data.title}
                        </p> 
                    ) : null}
                </div>
                {renderMetaInfo()}
                {/* Genres & Demographic */}
                <div className="flex gap-1.5 flex-wrap">
                    {data.demographic && renderGenreDemoBadge(data.demographic)}
                    {data.genres.length > 0 && data.genres.map(renderGenreDemoBadge)}
                </div>
            </div>
        </>
    )

    return (
        <motion.div 
            key={`pick-card-${data.id}`}
            className="cursor-grab row-start-1 col-start-1 self-center"
            style={{ x: styles.x, opacity: styles.cardOpacity, rotate: styles.rotate, zIndex: displayedAtTop ? 10 : 0 }}
            drag={displayedAtTop ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            whileDrag={{ cursor: "grabbing" }}
            onDragStart={toggleIsDragging}
            onDragEnd={(_, info) => handleCardDragEnd(info)}
            initial={{ scale: displayedAtTop ? 0.95 : 0.85 }}
            animate={{ scale: displayedAtTop ? 0.95 : 0.85 }}
            exit={{ 
                x: styles.x.get() > 0 ? 300 : -300,
                opacity: 0,
                transition: { duration: 0.3 }
            }}
        >   
            <div className="relative bg-card rounded-2xl overflow-hidden media-card-shadow">
                {renderDragIndicator()}
                {renderCardContent()}
            </div>
        </motion.div>
    )
}