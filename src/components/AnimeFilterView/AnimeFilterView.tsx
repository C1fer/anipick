import { useAnimeFilterView } from "./useAnimeFilterView"
import { ToggleRadio } from "../ToggleRadio/ToggleRadio";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";
import { NSFWToggle } from "../NSFWToggle/NSFWToggle";
import { Sparkles } from "lucide-react";
import type { AnimeFilterViewProps } from "./AnimeFilterView-def";
import { motion } from "motion/react"
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";

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
        <motion.div className="flex flex-col items-center justify-center w-full mx-auto">
            <div className="flex-col flex w-full gap-6 bg-card/50 border border-border/50 p-6 rounded-xl shadow-xl " >
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
            <AnimatedButton
                className="font-semibold h-14 mt-6"
                leftIcon={<Sparkles className="w-4 h-4"/>}
                label="Find Picks"
                variant="primary"
                isLoading={isLoading}
                onClick={onSubmit}
            />
        </motion.div>
       

    )
}