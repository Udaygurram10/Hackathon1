import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link as LinkIcon, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { submitProject } from '../services/projectService';
import FileUpload from '../components/FileUpload';
import toast from 'react-hot-toast';
export default function Submit() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [githubUrl, setGithubUrl] = useState('');
    const [demoUrl, setDemoUrl] = useState('');
    const [fileUrls, setFileUrls] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user)
            return;
        try {
            setSubmitting(true);
            await submitProject({
                title,
                description,
                githubUrl,
                demoUrl,
                fileUrls,
                userId: user.uid,
                userName: user.displayName || 'Anonymous'
            });
            toast.success('Project submitted successfully!');
            navigate('/profile');
        }
        catch (error) {
            toast.error('Failed to submit project. Please try again.');
        }
        finally {
            setSubmitting(false);
        }
    };
    const handleFileUpload = (urls) => {
        setFileUrls((prev) => [...prev, ...urls]);
        toast.success('Files uploaded successfully!');
    };
    if (!user) {
        return (_jsx("div", { className: "min-h-[calc(100vh-4rem)] flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-brand-gold mb-4", children: "Access Denied" }), _jsx("p", { className: "text-gray-300", children: "Please log in to submit your project." })] }) }));
    }
    return (_jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/10", children: [_jsx("h1", { className: "text-3xl font-bold mb-8 text-brand-gold", children: "Submit Your Project" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Project Name" }), _jsx("input", { type: "text", value: title, onChange: (e) => setTitle(e.target.value), className: "w-full px-4 py-2 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none", placeholder: "Enter project name", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Description" }), _jsx("textarea", { rows: 4, value: description, onChange: (e) => setDescription(e.target.value), className: "w-full px-4 py-2 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none", placeholder: "Describe your project...", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Project Links" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Github, { size: 20 }), _jsx("input", { type: "url", value: githubUrl, onChange: (e) => setGithubUrl(e.target.value), className: "flex-1 px-4 py-2 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none", placeholder: "GitHub Repository URL", required: true })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(LinkIcon, { size: 20 }), _jsx("input", { type: "url", value: demoUrl, onChange: (e) => setDemoUrl(e.target.value), className: "flex-1 px-4 py-2 rounded-lg bg-brand-primary/50 border border-brand-gold/20 focus:border-brand-gold/50 focus:outline-none", placeholder: "Demo URL" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Project Files" }), _jsx(FileUpload, { onFileUpload: handleFileUpload })] }), _jsx("button", { type: "submit", disabled: submitting, className: "w-full bg-brand-gold text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-gold/90 transition-colors disabled:opacity-50", children: submitting ? 'Submitting...' : 'Submit Project' })] })] }) }));
}
