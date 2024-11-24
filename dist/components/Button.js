import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export default function Button({ variant = 'primary', children, isLoading, className = '', ...props }) {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50';
    const variants = {
        primary: 'bg-brand-gold text-brand-primary hover:bg-brand-gold/90',
        secondary: 'bg-brand-primary/50 text-white hover:bg-brand-primary/70',
        outline: 'border-2 border-brand-gold/20 text-brand-gold hover:border-brand-gold/50'
    };
    return (_jsx(motion.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: `${baseStyles} ${variants[variant]} ${className}`, ...props, children: isLoading ? (_jsx("div", { className: "w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" })) : children }));
}
