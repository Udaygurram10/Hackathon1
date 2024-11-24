import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
const Input = forwardRef(({ label, error, icon, className = '', ...props }, ref) => {
    return (_jsxs("div", { className: "space-y-1", children: [label && (_jsx("label", { className: "block text-sm font-medium text-gray-200", children: label })), _jsxs("div", { className: "relative", children: [icon && (_jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", children: icon })), _jsx(motion.input, { ref: ref, whileFocus: { scale: 1.01 }, className: `w-full px-4 py-2 ${icon ? 'pl-10' : ''} rounded-lg 
              bg-brand-primary/50 border border-brand-gold/20 
              focus:border-brand-gold/50 focus:outline-none 
              transition-all duration-200 ${className}`, ...props })] }), error && (_jsx(motion.p, { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, className: "text-red-400 text-sm", children: error }))] }));
});
Input.displayName = 'Input';
export default Input;
