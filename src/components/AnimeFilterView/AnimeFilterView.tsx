import { useAnimeFilterView } from "./useAnimeFilterView"
import { Switch } from "../ui/switch";
import { ToggleRadio } from "../ToggleRadio/ToggleRadio";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";

export const AnimeFilterView = () => {
    const {
       state,
       lists,
       handleChange,
       onToggleSFW,
       onSelectGenres
    } = useAnimeFilterView();


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

    return (
        <div className="flex-col flex bg-card-dark rounded-xl border border-border-dark p-6 shadow-2xl gap-y-6 align-center">
            <ToggleRadio 
                headerTitle="Release Type" 
                options={lists.releaseType} 
                selectedValue={state.releaseType} 
                onSelected={(value) => handleChange('releaseType', value)}
             />
            <ToggleRadio 
                headerTitle="Status" 
                options={lists.status} 
                selectedValue={state.status} 
                onSelected={(value) => handleChange('status', value)} 
            />
            <ToggleRadio 
                headerTitle="Episodes" 
                options={lists.minEpisodes} 
                selectedValue={state.minEpisodes.toString()} 
                onSelected={(value) => handleChange('minEpisodes', value)} 
            />
            <CustomDropdown
                label="Genres"
                options={Object.entries(lists.genres)}
                selectedValues={state.genres}
                onSelected={(value) => onSelectGenres(value)}
                showSelectionBadges={true}
            />
            
            <CustomSelect
                label="Demographic"
                options={lists.demographics}
                onSelected={(value) => handleChange('demographics', value)}
            />

            {showNSFWToggle()}
        </div>
    )
}