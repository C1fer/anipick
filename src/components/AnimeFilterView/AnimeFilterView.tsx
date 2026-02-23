import { useAnimeFilterView } from "./useAnimeFilterView"
import { ToggleRadio } from "../ToggleRadio/ToggleRadio";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";
import { NSFWToggle } from "../NSFWToggle/NSFWToggle";

export const AnimeFilterView = () => {
    const {
       state,
       lists,
       handleChange,
       onToggleSFW,
       onSelectGenre,
       onSelectDemographic
    } = useAnimeFilterView();

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
                headerTitle="Length" 
                options={lists.minEpisodes} 
                selectedValue={state.minEpisodes.toString()} 
                onSelected={(value) => handleChange('minEpisodes', value)} 
            />
            <CustomDropdown
                label="Genres"
                options={lists.genres}
                selectedValues={state.genres}
                onSelected={(value) => onSelectGenre(value)}
                showSelectionBadges={true}
            />
            <CustomDropdown
                label="Demographics"
                options={lists.demographics}
                selectedValues={state.demographics}
                onSelected={(value) => onSelectDemographic(value)}
                showSelectionBadges={true}
            />
            <NSFWToggle
                isChecked={!state.sfw}
                onToggle={onToggleSFW}
            />
        </div>
    )
}