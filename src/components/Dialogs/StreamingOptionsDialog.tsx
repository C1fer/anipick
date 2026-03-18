import { CirclePlay, ExternalLink, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import type { MALStreamingOption } from "@/types/mal";
import { useWebHaptics } from "web-haptics/react";


type StreamingOptionsDialogProps = {
    streamingOptions: MALStreamingOption[] | null;
    showModal: boolean;
    setShowModal: (open: boolean) => void;
}

export const StreamingOptionsDialog = ({ streamingOptions, showModal, setShowModal }: StreamingOptionsDialogProps) => {
    const { trigger } = useWebHaptics();

    return (
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
                        <button 
                            className="cursor-pointer p-1.5 text-muted-foreground rounded-full hover:bg-action hover:text-foreground transition-all"
                            onClick={() => trigger("light")}
                            >
                            <X className="h-5 w-5" />
                        </button>
                    </DialogClose>
                </DialogHeader>
                <ul className="flex flex-col px-2">
                    {streamingOptions?.map((option, index) => (
                        <li key={`streaming-option-${option.name}`} className="w-full first:pt-0 last:pb-0">
                            {index > 0 && <hr className="border-border/50 my-2" />}
                            <a
                                href={option.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full py-3 px-2 rounded-lg active:bg-muted/50 sm:hover:bg-muted/50 transition-colors group"
                                onClick={() => trigger("selection")}
                            >
                                <div className="flex items-center gap-3">
                                    <CirclePlay className="w-5 h-5 text-action" />
                                    <span className="font-medium group-hover:font-semibold text-foreground">{option.name}</span>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground active:text-action sm:group-hover:text-action transition-colors" />
                            </a>
                        </li>
                    ))}
                </ul>
            </DialogContent>
        </Dialog>
    )
}