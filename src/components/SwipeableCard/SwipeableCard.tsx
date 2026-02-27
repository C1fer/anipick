import { Badge } from "../ui/badge"
import { Film, Hash, Star, Tv } from "lucide-react"
import { useSwipeableCard } from "./useSwipeableCard"
import type { SwipeableCardProps } from "./SwipeableCard-def"
import { motion } from "motion/react"

export const SwipeableCard = (props: SwipeableCardProps): React.ReactElement => {
    const { displayedAtTop, mediaType } = props;

    const {
        cardData,
        styles,
        handleCardDragEnd,
    } = useSwipeableCard(props);

    const getReleaseTypeIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case "tv":
                return <Tv className="w-3 h-3" />;
            case "movie":
                return <Film className="w-3 h-3" />;
            default:
                return null;
        }

    }

   const renderGenreDemoBadge = (gd: string) => (
        <Badge
            key={`${cardData.title}-${gd}`}
            variant="outline"
            className="bg-card-dark/60 border-border-dark text-text-muted text-xs"
        >
            {gd}
        </Badge>
   )

   const renderDragIndicator = () => (
        <>
            <motion.div 
                className="flex justify-center items-center w-full h-full border-5 rounded-2xl pointer-events-none z-20 absolute text-[#a84032] border-[#a84032]"
                style={{ opacity: styles.skipOpacity }}
            >
                <span className="text-4xl font-extrabold border-6 border-[#a84032] p-4 rounded-lg rotate-30">
                    SKIP
                </span>
            </motion.div>

            <motion.div 
                className="flex justify-center items-center w-full h-full border-5 rounded-2xl pointer-events-none z-20 absolute text-[#32a852] border-[#32a852]"
                style={{ opacity: styles.pickOpacity }}
            >
                <span className="text-4xl font-extrabold border-6 border-[#32a852] p-4 rounded-lg rotate-30">
                    PICK
                </span>
            </motion.div>
        </>
    )

    const renderCardContent = () => (
        <div className="w-full rounded-2xl border border-border-dark/65 overflow-hidden shadow-xl">
            <div className="relative aspect-3/4 overflow-hidden">
                <img 
                    src={cardData.imgUri} 
                    alt={cardData.title} 
                    className="w-full h-auto object-cover z-0"
                    draggable={false}
                />
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
            <div className="flex flex-col justify-between bg-card-dark p-4 space-y-3">
                <h2 className="text-white font-bold text-xl line-clamp-2">{cardData.title}</h2>
                <div className="flex items-center gap-3 text-text-muted text-sm">
                    <span className="flex items-center gap-1">
                        <Hash className="w-4 h-4" />
                        {cardData.episodeCount }
                    </span>
                    <span>{cardData.releaseYear}</span>
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {cardData.demographic && renderGenreDemoBadge(cardData.demographic)}
                    {cardData.genres.map(renderGenreDemoBadge)}
                </div>
            </div>
        </div>
    )

    return (
        <motion.div 
            key={`pick-card-${props.data.mal_id}`}
            className="cursor-grab row-start-1 col-start-1"
            style={{ x: styles.x, opacity: styles.cardOpacity, rotate: styles.rotate, zIndex: displayedAtTop ? 10 : 0 }}
            drag={displayedAtTop ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            whileDrag={{ cursor: "grabbing" }}
            onDragEnd={(_, info) => handleCardDragEnd(info)}
            initial={{ scale: displayedAtTop ? 1 : 0.95, y: displayedAtTop ? 0 : 10, }}
            animate={{ scale: displayedAtTop ? 1 : 0.95, y: displayedAtTop ? 0 : 10, }}
            exit={{ 
                x: styles.x.get() > 0 ? 300 : -300,
                opacity: 0,
                transition: { duration: 0.3 }
            }}
        >   
            {renderDragIndicator()}
            {renderCardContent()}
        </motion.div>
    )
}