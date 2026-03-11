import { CirclePlay, ExternalLink, X } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import type { MALStreamingOption } from "@/types/mal";

type StreamingOptionsDialogProps = {
    streamingOptions: MALStreamingOption[] | null;
    showModal: boolean;
    setShowModal: (open: boolean) => void;
}

export const StreamingOptionsDialog = ({ streamingOptions, showModal, setShowModal }: StreamingOptionsDialogProps) => (
    <Dialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
        <DialogContent showCloseButton={false}>
            <DialogHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2 px-2">
                    <DialogTitle className="font-bold">Where to Watch</DialogTitle>
                    <span className="text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5">
                        {streamingOptions?.length}
                    </span>
                </div>
                <DialogClose>
                    <button className="cursor-pointer p-1.5 text-muted-foreground rounded-full hover:bg-action hover:text-foreground transition-all">
                        <X className="h-5 w-5" />
                    </button>
                </DialogClose>
            </DialogHeader>
            <div className="flex flex-col px-2">
                {streamingOptions?.map((option, index) => (
                    <Fragment key={option.name}>
                        {index > 0 && <hr className="border-border/50 my-2" />}
                        <a
                            href={option.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <CirclePlay className="w-5 h-5 text-action" />
                                <span className="font-medium group-hover:font-semibold text-foreground">{option.name}</span>
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-action transition-colors" />
                        </a>
                    </Fragment>
                ))}
            </div>
        </DialogContent>
    </Dialog>
)