import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { User, Mail, Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
export default function Profile() {
    const { user } = useAuth();
    const [userProfile, setUserProfile] = useState(null);
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchUserData() {
            if (!user)
                return;
            try {
                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    setUserProfile(userDoc.data());
                    // Fetch submissions
                    const submissionIds = userDoc.data().submissions || [];
                    const submissionPromises = submissionIds.map((id) => getDoc(doc(db, 'projects', id)));
                    const submissionDocs = await Promise.all(submissionPromises);
                    const submissionData = submissionDocs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setSubmissions(submissionData);
                }
            }
            catch (error) {
                console.error('Error fetching user data:', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchUserData();
    }, [user]);
    if (!user) {
        return (_jsx("div", { className: "min-h-[calc(100vh-4rem)] flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h2", { className: "text-2xl font-bold text-brand-gold mb-4", children: "Access Denied" }), _jsx("p", { className: "text-gray-300", children: "Please log in to view your profile." })] }) }));
    }
    if (loading) {
        return (_jsx("div", { className: "min-h-[calc(100vh-4rem)] flex items-center justify-center", children: _jsx("div", { className: "text-center", children: _jsx("p", { className: "text-gray-300", children: "Loading profile..." }) }) }));
    }
    return (_jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-brand-gold/10", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("div", { className: "w-24 h-24 bg-brand-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center", children: _jsx(User, { size: 40, className: "text-brand-gold" }) }), _jsx("h1", { className: "text-2xl font-bold text-brand-gold", children: userProfile?.fullName }), _jsxs("div", { className: "flex items-center justify-center space-x-2 text-gray-300", children: [_jsx(Mail, { size: 16 }), _jsx("span", { children: user.email })] })] }), _jsx("div", { className: "space-y-6", children: _jsxs("div", { children: [_jsxs("h2", { className: "text-xl font-semibold mb-4 flex items-center space-x-2", children: [_jsx(Award, { className: "text-brand-gold", size: 24 }), _jsx("span", { children: "Your Submissions" })] }), _jsxs("div", { className: "space-y-4", children: [submissions.map((submission) => (_jsxs("div", { className: "bg-brand-primary/30 p-4 rounded-lg space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "font-semibold text-brand-gold", children: submission.title }), _jsx("span", { className: "text-xs bg-brand-gold/20 text-brand-gold px-2 py-1 rounded", children: submission.status })] }), _jsx("p", { className: "text-sm text-gray-300", children: submission.description }), _jsxs("div", { className: "flex space-x-4", children: [submission.githubUrl && (_jsxs("a", { href: submission.githubUrl, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-brand-gold hover:underline flex items-center space-x-1", children: [_jsx(ExternalLink, { size: 14 }), _jsx("span", { children: "GitHub" })] })), submission.demoUrl && (_jsxs("a", { href: submission.demoUrl, target: "_blank", rel: "noopener noreferrer", className: "text-sm text-brand-gold hover:underline flex items-center space-x-1", children: [_jsx(ExternalLink, { size: 14 }), _jsx("span", { children: "Demo" })] }))] })] }, submission.id))), submissions.length === 0 && (_jsx("p", { className: "text-center text-gray-300", children: "No submissions yet" }))] })] }) })] }) }));
}
