import type { MediaPick } from "@/types/media";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { X } from "lucide-react";

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
            </DialogHeader>
            <p className="text-muted-foreground text-sm whitespace-pre-wrap text-justify max-h-72 overflow-y-auto scrollbar-subtle bg-muted/25 p-3 rounded-lg">
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


