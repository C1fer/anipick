import { motion } from 'motion/react';
import { Spinner } from '../ui/spinner';
import type { AnimatedButtonProps } from './AnimatedButton-def';
import { useAnimatedButton } from './useAnimatedButton';

export const AnimatedButton = (props: AnimatedButtonProps) => {
    const {
        leftIcon,
        disabled = false,
        label,
        isLoading = false,
    } = props;

    const { handleClick, style } = useAnimatedButton(props);
    
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={style}
            style={isLoading ? { pointerEvents: "none" } : {}}
            disabled={disabled}
        >
            {isLoading ? <Spinner className="w-4 h-4"/> : leftIcon}
            {label}
        </motion.button>
    )
} 

