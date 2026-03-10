import { Badge } from "../ui/badge"
import { Disc2, Film, Hash, Star, Tv, TvMinimal } from "lucide-react"
import { useSwipeableCard } from "./useSwipeableCard"
import type { SwipeableCardProps } from "./SwipeableCard-def"
import { motion } from "motion/react"

export const SwipeableCard = (props: SwipeableCardProps): React.ReactElement => {
    const { displayedAtTop } = props;

    const {
        mediaType,
        cardData,
        styles,
        handleCardDragEnd,
    } = useSwipeableCard(props);

    const getReleaseTypeIcon = (type: string) => {
        const iconStyle = "w-3 h-3";
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
            key={`${cardData.title}-${gd}`}
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

    const renderCardContent = () => (
        <>
            <div className="relative aspect-3/4 overflow-hidden">
                <img 
                    src={cardData.imgUri} 
                    alt={cardData.title} 
                    className="w-full h-auto object-cover"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/90 text-primary-foreground border-0 gap-1">
                        {getReleaseTypeIcon(cardData.releaseType)}
                        {cardData.releaseType}
                    </Badge>
                </div>
                {props.data.score && (
                    <div className="absolute top-3 right-3">
                        <Badge className="bg-accent/90 text-accent-foreground border-0 gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            {cardData.score}
                        </Badge>
                    </div>
                )} 
            </div>
            <div className="flex flex-col justify-between gap-3.5 p-4">
                <div className="">
                    <div>
                        <h2 
                            className="text-foreground font-bold text-xl line-clamp-2 md:line-clamp-none leading-tight hover:cursor-default" 
                            title={cardData.titleLocalized || cardData.title}
                        >
                            {cardData.titleLocalized || cardData.title}
                        </h2>
                    </div>
                      {cardData.titleLocalized && cardData.title !== cardData.titleLocalized ?  (
                        <p 
                            className="text-muted-foreground text-sm mt-1 line-clamp-2 md:line-clamp-none" 
                            title={cardData.title}
                        >
                            {cardData.title}
                        </p> ) : null}
                </div>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                        <Hash className="w-4 h-4" />
                        {cardData.episodeCount}
                    </span>
                    <span>{cardData.releaseYear}</span>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                    {cardData.demographic && renderGenreDemoBadge(cardData.demographic)}
                    {cardData.genres.length > 0 && cardData.genres.map(renderGenreDemoBadge)}
                </div>
            </div>
        </>
    )

    return (
        <motion.div 
            key={`pick-card-${props.data.mal_id}`}
            className="cursor-grab row-start-1 col-start-1 self-center"
            style={{ x: styles.x, opacity: styles.cardOpacity, rotate: styles.rotate, zIndex: displayedAtTop ? 10 : 0 }}
            drag={displayedAtTop ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            whileDrag={{ cursor: "grabbing" }}
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