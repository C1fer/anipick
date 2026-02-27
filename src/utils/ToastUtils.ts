import { toast } from "sonner";
import type { ToasterProps } from "sonner";

export const triggerErrorToast = (message: string | null = "An error occurred. Please try again.", toastProps?: ToasterProps) => {
    toast.error(
        message, 
        {
            position: 'top-center',
            style: { 
                background: "var(--color-destructive-red)", 
                color: "white", 
                borderColor: "transparent" 
            },
            ...toastProps,
        }
    );
}  

export const triggerWarningToast = (message: string, toastProps?: ToasterProps) => {
    toast.warning(
        message, 
        {
            position: 'top-center',
            style: { 
                background: "var(--color-destructive-red)", 
                color: "white", 
                borderColor: "transparent" 
            },
            ...toastProps,
        }
    );
}