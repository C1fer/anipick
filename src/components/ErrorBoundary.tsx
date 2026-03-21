import { ErrorBoundary as InnerErrorBoundary } from "react-error-boundary";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import type { ErrorInfo } from "react";
import { AnimatedButton } from "./AnimatedButton/AnimatedButton";

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    const ErrorDialog = () => (
        <Dialog open={true}>
            <DialogContent>
                <div className="flex flex-col items-center justify-center p-6 gap-4">
                    <DialogTitle className="text-2xl font-bold">
                        Something went wrong.
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground text-center text-md">
                        An unexpected error occurred. Please try again later.
                    </DialogDescription>
                    <AnimatedButton 
                        className="h-14"
                        label="Go to Home" 
                        onClick={() => window.location.reload()}
                    />
                </div>
            </DialogContent>
        </Dialog>
    )

    const handleError = (error: unknown, info: ErrorInfo) => {
        console.error("ErrorBoundary caught an error:", error, info);
    }

    return (
        <InnerErrorBoundary FallbackComponent={ErrorDialog} onError={handleError}>
            {children}
        </InnerErrorBoundary>
    )
}