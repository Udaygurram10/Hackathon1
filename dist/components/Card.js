import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export default function Card({ children, className = '' }) {
    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: `bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/10 
        hover:border-brand-gold/20 transition-all duration-300 ${className}`, children: children }));
}
