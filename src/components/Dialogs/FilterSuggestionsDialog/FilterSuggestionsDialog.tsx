import { X } from "lucide-react";
import { AnimatedButton } from "../../AnimatedButton/AnimatedButton";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../../ui/drawer";
import { useFilterSuggestionsDialog } from "./useFilterSuggestionsDialog";
import type { FilterSuggestionsDialogProps } from "./FilterSuggestionsDialog-def";
import type { FilterSuggestion } from "@/services/Media/MediaConfig";

export const FilterSuggestionsDialog = (props: FilterSuggestionsDialogProps) => {
    const { isOpen } = props;

    const {
        title,
        description,
        suggestedChanges,
        isMobile,
        handleOpenStateChange,
        onApplySuggestion,
        isSuggestionApplied,
    } = useFilterSuggestionsDialog(props)

    const renderSuggestions = (suggestions: FilterSuggestion[]) => {
        if (suggestions.length === 0) {
            return (
                <p className="text-muted-foreground text-sm italic bg-muted/25 px-3 py-5 rounded-lg">
                    No suggestions available. Try adjusting your filters and searching again!
                </p>
            )
        }

       return (
            <ul className="list-disc list-inside bg-muted/25 p-3 rounded-lg text-muted-foreground text-sm">
                {suggestions.map(({ type, label }, index) => {
                    const isApplied = isSuggestionApplied(type);
                    return (
                        <li 
                            key={index}
                            className="mb-1 last:mb-0 flex items-center justify-between"
                        >
                            {label}
                            <button 
                                className="cursor-pointer text-xs text-primary hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed px-4"
                                disabled={isApplied}
                                onClick={() => onApplySuggestion(type)}
                            >
                                {isApplied ? "Applied" : "Apply"}
                            </button>
                        </li>
                    )
                })
               }
            </ul>
        )
    }
    
   const renderMobileDrawer = () => (
        <Drawer open={isOpen} onOpenChange={handleOpenStateChange}>
            <DrawerContent className="bg-card px-4 pb-4">
                <DrawerHeader>
                    <DrawerTitle className="text-xl">{title}</DrawerTitle>
                    <DrawerDescription>{description}</DrawerDescription>
                </DrawerHeader>
               <div className="space-y-3">
                    {renderSuggestions(suggestedChanges)}
                    <DrawerClose asChild>
                        <AnimatedButton
                            label="Close"
                            variant="secondary"
                        />
                    </DrawerClose>
               </div>
            </DrawerContent>
        </Drawer>
    )
   
   const renderDesktopDialog = () => (
        <Dialog open={isOpen} onOpenChange={handleOpenStateChange}>
            <DialogContent className="bg-card" showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {renderSuggestions(suggestedChanges)}
               <DialogClose asChild>
                    <AnimatedButton
                        label="Close"
                        variant="secondary"
                        className="mt-4"
                    />
                </DialogClose>
                <DialogClose asChild>
                    <button className="cursor-pointer p-1 absolute top-4 right-4 rounded-md text-muted-foreground hover:bg-action hover:text-foreground transition-colors">
                        <X className="w-4 h-4"/>
                    </button>
            </DialogClose>
            </DialogContent>
        </Dialog>
    )

   return isMobile ? renderMobileDrawer() : renderDesktopDialog();
}

