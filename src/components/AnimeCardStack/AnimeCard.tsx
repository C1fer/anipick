import type { AnimeCardProps } from "./AnimeCardStack-def"
import { CustomBadge } from "../Badge/CustomBadge"
import { Badge } from "../ui/badge"
import { Film, Hash, Star, Tv } from "lucide-react"

export const AnimeCard = (props: AnimeCardProps): React.ReactElement => {
    const _data = {
        title: props.data.title,
        episodeCount: props.data.episodes?.toString() ?? null,
        imgUri: props.data.images.webp.large_image_url,
        releaseType: props.data.type,
        score: props.data.score?.toString() ?? null,
        releaseYear: props.data.year,
        genres: props.data.genres.map(g => g.name),
        demographics: props.data.demographics.map(d => d.name)
    }

    const renderGenreDemos = () => {
        const demographic = _data.demographics.length > 0 ? _data.demographics[0] : null;
        const genresToDisplay = _data.genres.slice(0, 3);

        return (
            <div className="flex gap-2 mt-2 flex-wrap">
                {genresToDisplay.map((gd, idx) => (
                    <Badge
                        key={`${_data.title}-${gd}-${idx}`}
                        variant="outline"
                        className="bg-card-dark/60 border-border-dark text-text-muted text-xs"
                    >
                        {gd}
                    </Badge>
                    )
                )}
            </div>
        )
    }
    

    return (
        <div className="w-full rounded-2xl border border-border-dark overflow-hidden cursor-grab">
            <div className="relative aspect-3/4 overflow-hidden">
                <img 
                    src={_data.imgUri} 
                    alt={_data.title} 
                    className="w-full h-auto object-cover z-0"
                    draggable={false}
                />
                <div className="absolute top-3 left-3">
                    <Badge className="bg-primary/90 text-primary-foreground border-0 gap-1">
                        {_data.releaseType === 'TV' ? <Tv className="w-3 h-3" /> : <Film className="w-3 h-3" />}
                        {_data.releaseType}
                    </Badge>
                </div>
                <div className="absolute top-3 right-3">
                    <Badge className="bg-accent/90 text-accent-foreground border-0 gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {_data.score}
                    </Badge>
                </div>  
            </div>
            <div className="flex flex-col justify-between bg-card-dark p-4 space-y-3">
                <h2 className="text-white font-bold text-xl line-clamp-2">{_data.title}</h2>
                <div className="flex items-center gap-3 text-text-muted text-sm">
                    <span className="flex items-center gap-1">
                        <Hash className="w-4 h-4" />
                        {_data.episodeCount} eps
                    </span>
                    <span>{_data.releaseYear}</span>
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {renderGenreDemos()}
                </div>
            </div>
        </div>
    )
}