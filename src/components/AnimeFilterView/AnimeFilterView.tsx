import { useAnimeFilterView } from "./useAnimeFilterView"
import { ToggleRadio } from "../ToggleRadio/ToggleRadio";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";
import { NSFWToggle } from "../NSFWToggle/NSFWToggle";
import { Sparkles } from "lucide-react";
import type { AnimeFilterViewProps } from "./AnimeFilterView-def";
import { AnimatePresence, motion } from "motion/react"
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
        <motion.div className="flex flex-col items-center w-full md:w-xl">
            <div className="flex-col flex w-full gap-6 bg-card/50 border border-border/50 p-6 rounded-xl shadow-xl " >
                <ToggleRadio 
                    headerTitle="Release Type" 
                    options={lists.releaseType} 
                    selectedValue={state.releaseType} 
                    onSelected={(value) => handleChange('releaseType', value)}
                />
                <AnimatePresence mode="wait">
                    {state.releaseType !== 'movie' && (
                        <motion.div 
                            key="status-length"
                            className="flex flex-col gap-6 md:flex-row"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
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
                        </motion.div>
                    )}
                </AnimatePresence>
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
                className="h-14 mt-6 shrink-0"
                leftIcon={<Sparkles className="w-4 h-4"/>}
                label="Find Picks"
                variant="primary"
                isLoading={isLoading}
                onClick={onSubmit}
            />
        </motion.div>
       

    )
}