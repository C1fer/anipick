import { useMediaFilterView } from "./useMediaFilterView"
import { ToggleRadio } from "../ToggleRadio/ToggleRadio";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";
import { NSFWToggle } from "../NSFWToggle/NSFWToggle";
import { Sparkles  } from "lucide-react";
import type { MediaFilterViewProps } from "./MediaFilterView-def";
import { AnimatePresence, motion } from "motion/react"
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { twMerge } from "tailwind-merge";

export const MediaFilterView = (props: MediaFilterViewProps) => {
    const {
        mediaType,
        isLoading,
        state,
        lists,
        handleChange,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
        handleMediaTypeChange,
    } = useMediaFilterView(props);
        
    const renderMediaTypeToggle = () => (
        <motion.div className="flex items-center justify-center mb-4">
            <div className="bg-muted/50 border border-border/50 rounded-xl p-1 flex gap-1">
                {lists.mediaTypes.map(({ label, value, icon: Icon }) => (
                    <motion.button
                        key={`media-type-toggle-${value}`}
                        onClick={() => handleMediaTypeChange(value as 'anime' | 'manga')}
                        className={twMerge([
                            'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                            mediaType === value ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                        ])}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Icon className="w-4 h-4" />
                        {label}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    )

    return (
        <motion.div className="flex flex-col items-center w-full md:max-w-2xl" layout >
            {renderMediaTypeToggle()}
            <div className="flex-col flex w-full gap-6 bg-card/50 border border-border/50 p-6 rounded-xl shadow-xl " >
                {/* TODO: Use CusomtSelect for manga release types*/}
                <ToggleRadio 
                    headerTitle="Release Type" 
                    options={lists.releaseType} 
                    selectedValue={state.releaseType} 
                    onSelected={(value) => handleChange('releaseType', value)}
                />
                <AnimatePresence mode="wait">
                    {(mediaType === "anime" && state.releaseType !== 'movie') || mediaType === "manga" ? (
                        <motion.div 
                            key="status-length"
                            className="flex flex-col gap-6 md:flex-row"
                            initial={mediaType === "manga" ?  {} : { opacity: 0, y: 20 }}
                            animate={mediaType === "manga" ?  {} : { opacity: 1, y: 0 }}
                            exit={mediaType === "manga" ?  {} : { opacity: 0, y: -20 }}
                            transition={mediaType === "manga" ?  {} : { duration: 0.3 }}
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
                    ): null}
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