import { useMediaFilterView } from "./useMediaFilterView"
import { ToggleRadio } from "../ToggleRadio/ToggleRadio";
import { CustomDropdown } from "../CustomDropdown/CustomDropdown";
import { NSFWToggle } from "../NSFWToggle/NSFWToggle";
import { BookOpen, Sparkles, Tv  } from "lucide-react";
import type { MediaFilterViewProps } from "./MediaFilterView-def";
import { AnimatePresence, motion } from "motion/react"
import { AnimatedButton } from "../AnimatedButton/AnimatedButton";
import { twMerge } from "tailwind-merge";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const MediaFilterView = (props: MediaFilterViewProps) => {
    const {
        showStatusLengthSection,
        isLoading,
        state,
        lists,
        handleChange,
        onSelectReleaseType,
        onToggleSFW,
        onSelectGenre,
        onSelectDemographic,
        onSubmit,
    } = useMediaFilterView(props);
        
    const renderMediaTypeToggle = () => (
        <motion.div className="flex items-center justify-center mb-4">
            <div className="bg-muted/50 border border-border/50 rounded-xl p-1 flex gap-1">
                {lists.mediaTypes.map(({ label, value }) => (
                    <motion.button
                        key={`media-type-toggle-${value}`}
                        onClick={() => handleChange('mediaType', value)}
                        className={twMerge([
                            'flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer',
                            state.mediaType === value ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                        ])}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {value === "anime" ? <Tv className="w-4 h-4"/> : <BookOpen className="w-4 h-4"/>}
                        {label}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    )

    return (
        <motion.div className="flex flex-col items-center w-full max-w-2xl md:min-w-xl" layout >
            {renderMediaTypeToggle()}
            <div className="flex-col flex w-full gap-6 bg-card/50 border border-border/50 p-6 rounded-xl shadow-xl " >
                {state.mediaType === "anime" ? (
                    <ToggleRadio 
                        headerTitle="Release Type" 
                        options={lists.releaseType} 
                        selectedValue={state.releaseType} 
                        onSelected={(value) => onSelectReleaseType(value)}
                    />) 
                    : (
                    <CustomSelect
                        label="Release Type"
                        options={lists.releaseType}
                        selectedValue={state.releaseType}
                        onSelected={(value) => onSelectReleaseType(value)}
                    />
                )}
                <AnimatePresence mode="wait">
                    {showStatusLengthSection ? (
                        <motion.div 
                            key="status-length"
                            className="flex flex-col gap-6 md:flex-row"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                        >
                            <ToggleRadio 
                                headerTitle="Status" 
                                options={lists.status} 
                                selectedValue={state.status} 
                                onSelected={(value) => handleChange('status', value)} 
                            />

                            <ToggleRadio 
                                headerTitle="Length" 
                                options={lists.mediaLength} 
                                selectedValue={state.mediaLength} 
                                onSelected={(value) => handleChange('mediaLength', value)} 
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