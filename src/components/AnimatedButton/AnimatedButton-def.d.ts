export type AnimatedButtonProps = {
    onClick?: () => void;
    leftIcon?: React.ReactNode | null;
    disabled?: boolean;
    label?: string;
    isLoading?: boolean;
    variant?: "primary" | "secondary";
    className? : string;
    hapticsEnabled?: boolean;
    hapticsType?: "light" | "medium" | "heavy";
}
