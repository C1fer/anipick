import { useAnimeFilterView } from "./useAnimeFilterView"
import { ToggleRadio } from "../ToggleRadio/ToggleRadio";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";
import { NSFWToggle } from "../NSFWToggle/NSFWToggle";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { Sparkles } from "lucide-react";
import type { AnimeFilterViewProps } from "./AnimeFilterView-def";
import { motion } from "motion/react"

export const AnimeFilterView = (props: AnimeFilterViewProps) => {
    const {
        isLoading,
        state,
        lists,
        handleChange,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
    } = useAnimeFilterView(props);

        
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center w-full max-w-md">
            <div className="flex-col flex w-full gap-6 bg-card-dark rounded-xl border border-border-dark p-6 shadow-xl">
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
            <Button 
                className="w-full mt-6 py-8 cursor-pointer bg-accent-indigo text-white hover:bg-accent-indigo/90 gap-4 "
                onClick={onSubmit}
            >
                {isLoading ? <Spinner/> : <Sparkles size={40} color="white"/>}
                <span className="text-text-off-white">Find my Anime</span>
            </Button>
        </motion.div>
       

    )
}