import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';
export default function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast.error('Passwords do not match');
        }
        try {
            setLoading(true);
            await signup(email, password, fullName);
            toast.success('Account created successfully!');
            navigate('/');
        }
        catch (error) {
            toast.error('Failed to create account. Please try again.');
        }
        finally {
            setLoading(false);
        }
    }
    return (_jsx("div", { className: "min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-brand-primary to-brand-light", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "w-full max-w-md", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsxs(Link, { to: "/", className: "inline-flex items-center space-x-3 mb-8", children: [_jsx("img", { src: "/src/vikalma-logo.png", alt: "Vikalma", className: "w-12 h-12" }), _jsx("span", { className: "text-2xl font-bold text-brand-gold", children: "Vikalma" })] }), _jsx("h1", { className: "text-3xl font-bold text-brand-gold", children: "Create Account" }), _jsx("p", { className: "text-gray-300 mt-2", children: "Join the Vikalma community" })] }), _jsx("div", { className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/10", children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Full Name" }), _jsxs("div", { className: "relative", children: [_jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }), _jsx("input", { type: "text", value: fullName, onChange: (e) => setFullName(e.target.value), className: "w-full pl-10 pr-4 py-3 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-all", placeholder: "Enter your full name", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Email" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }), _jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full pl-10 pr-4 py-3 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-all", placeholder: "Enter your email", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }), _jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full pl-10 pr-4 py-3 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-all", placeholder: "Create a password", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Confirm Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }), _jsx("input", { type: "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), className: "w-full pl-10 pr-4 py-3 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-all", placeholder: "Confirm your password", required: true })] })] }), _jsxs("button", { type: "submit", disabled: loading, className: "w-full bg-brand-gold text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-gold/90 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50", children: [_jsx("span", { children: loading ? 'Creating Account...' : 'Create Account' }), _jsx(ArrowRight, { size: 20 })] })] }) }), _jsxs("p", { className: "text-center mt-6 text-sm text-gray-300", children: ["Already have an account?", ' ', _jsx(Link, { to: "/login", className: "text-brand-gold hover:underline", children: "Sign in" })] })] }) }));
}
