import type { MediaPick } from "@/types/media";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

type PickSummaryDialogProps = {
    className?: string;
    data: MediaPick;
    isVisible: boolean;
    toggleModal: (open: boolean) => void;
    triggerComponent?: React.ReactNode;
}

export const PickSummaryDialog = ({ data, isVisible, toggleModal }: PickSummaryDialogProps) => (
    <Dialog open={isVisible} onOpenChange={(open) => toggleModal(open)}>
       <DialogContent 
        className="bg-card " 
        showCloseButton={false}
       >
            <DialogHeader>
                <DialogTitle className="text-foreground font-bold text-base text-center">About</DialogTitle>
                <DialogDescription className="sr-only">
                    Summary details for the selected pick.
                </DialogDescription>
            </DialogHeader>
            <p 
                className={twMerge(
                    "text-muted-foreground text-justify text-sm whitespace-pre-wrap min-h-20 max-h-92 overflow-y-auto scrollbar-subtle bg-muted/25 p-3 rounded-lg",
                    data.synopsis ? "" : "text-muted-foreground/80 italic"
                )}
            >
                {data.synopsis || "No synopsis available."}
            </p>
            {data.rating && (
                <p className="text-xs text-muted-foreground">
                    Rated:
                    <span className="ml-1 font-medium text-foreground">
                        {data.rating}
                    </span>
                </p>
            )}
            <DialogClose asChild>
                <button className="cursor-pointer p-1 absolute top-4 right-4 rounded-md text-muted-foreground hover:bg-action hover:text-foreground transition-colors">
                    <X className="w-4 h-4"/>
                </button>
            </DialogClose>
       </DialogContent>
    </Dialog>
)

