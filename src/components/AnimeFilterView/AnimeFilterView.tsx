import { useAnimeFilterView } from "./useAnimeFilterView"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Switch } from "../ui/switch";


export const AnimeFilterView = () => {
    const {
       state,
       lists,
       handleChange,
       onToggleSFW
    } = useAnimeFilterView();

    const LabelStyle = "text-text-muted text-xs font-bold uppercase tracking-wider mb-3"

    const renderToggleGroup = (label: string, options: Record<string, string>, selectedValue: string, onValueChange: (value: string) => void) => {
        return (
            <div >
                <h3 className={LabelStyle}>{label}</h3>
                <ToggleGroup
                    type="single"
                    className="flex h-10 bg-background-ultra-dark p-1 rounded-lg border border-border-dark"
                    value={selectedValue}
                    onValueChange={onValueChange}
                >
                    {Object.entries(options).map(([key, value]) => (
                        <ToggleGroupItem
                            key={key}
                            value={value}
                            className="flex h-10 items-center cursor-pointer justify-center rounded-lg text-text-muted peer-checked:bg-accent-indigo peer-checked:text-text-off-white font-medium transition-all"
                        >
                            {key}
                        </ToggleGroupItem>
                    ))}
                </ToggleGroup>
            </div>
        )
    }

    const showDemographicSelector = () => {
        return (
            <div>
                <h3 className={LabelStyle}>Demographic</h3>
                <Select>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue  />
                    </SelectTrigger>
                    <SelectContent >
                        {Object.entries(lists.demographics).map(([id, name]) => (
                            <SelectItem key={id} value={id}>{name}</SelectItem>
                        )) }
                    </SelectContent>
                </Select>
            </div>
        )
    }

    const showNSFWToggle = () => (
        <div className="p-5 bg-background-ultra-dark rounded-md border border-border-dark flex items-center gap-4">
            <span>🔞</span>
            <div className="flex-col">
                <p className="font-bold text-white">NSFW Content</p>
                <p className="text-gray-600">Show mature and R-rated content</p>
            </div>
            <Switch onClick={onToggleSFW} value={Number(state.sfw)}/>
        </div>
    )

    const renderTest = () => (
       <div className="">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-wider mb-3">Release Type</h3>

            <div className="flex bg-background-ultra-dark p-1 rounded-lg border border-border-dark">
                <label className="flex-1 cursor-pointer">
                    <input className="sr-only peer" name="type" type="radio" value="TV" />
                    {/* <div className="flex h-10 items-center justify-center rounded-lg text-text-muted peer-checked:bg-accent-indigo peer-checked:text-text-off-white font-medium transition-all">
                        TV
                    </div> */}
                </label>
                <label className="flex-1 cursor-pointer">
                    <input className="sr-only peer" name="type" type="radio" value="Movie" />
                    <div className="flex h-10 items-center justify-center rounded-lg text-text-muted peer-checked:bg-accent-indigo peer-checked:text-text-off-white font-medium transition-all">
                        Movie
                    </div>
                </label>
                {/* <label className="flex-1 cursor-pointer">
                    <input className="sr-only peer" name="type" type="radio" value="Any" />
                    <div
                        className="flex h-10 items-center justify-center rounded-lg text-text-muted peer-checked:bg-accent-indigo peer-checked:text-text-off-white font-medium transition-all">
                        Any</div>
                </label> */}
            </div>
        </div>
    )

    return (
        <div className="flex-col flex bg-card-dark rounded-xl border border-border-dark p-6 shadow-2xl gap-y-6 align-center">
            {renderTest()}
            {renderToggleGroup('Release Type', lists.releaseType, state.releaseType, (value) => handleChange('releaseType', value)) }
            {/* {renderToggleGroup('Status', lists.status, state.status, (value) => handleChange('status', value))} */}
            {/* {renderToggleGroup('Minimum Episodes', lists.minEpisodes, state.minEpisodes.toString(), (value) => handleChange('minEpisodes', value))} */}
            {showDemographicSelector()}
            {showNSFWToggle()}
            
        </div>
    )
}