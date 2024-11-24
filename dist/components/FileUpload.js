import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { useStorage } from '../hooks/useStorage';
export default function FileUpload({ onFileUpload }) {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const { uploadFile, progress } = useStorage();
    const fileInputRef = useRef(null);
    const handleFileChange = (e) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles((prev) => [...prev, ...newFiles]);
        }
    };
    const handleUpload = async () => {
        if (files.length === 0)
            return;
        setUploading(true);
        try {
            const uploadPromises = files.map((file) => {
                const path = `project-files/${Date.now()}_${file.name}`;
                return uploadFile(file, path);
            });
            const urls = await Promise.all(uploadPromises);
            onFileUpload(urls);
            setFiles([]);
        }
        catch (error) {
            console.error('Error uploading files:', error);
        }
        finally {
            setUploading(false);
        }
    };
    const removeFile = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };
    return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { onClick: () => fileInputRef.current?.click(), className: "border-2 border-dashed border-brand-gold/20 rounded-lg p-8 text-center cursor-pointer hover:border-brand-gold/40 transition-colors", children: [_jsx(Upload, { className: "mx-auto text-brand-gold mb-2", size: 24 }), _jsx("p", { className: "text-sm text-gray-300", children: "Drag and drop your files here, or click to select files" }), _jsx("input", { ref: fileInputRef, type: "file", multiple: true, onChange: handleFileChange, className: "hidden" })] }), files.length > 0 && (_jsxs("div", { className: "space-y-2", children: [files.map((file, index) => (_jsxs("div", { className: "flex items-center justify-between bg-brand-primary/30 p-2 rounded-lg", children: [_jsx("span", { className: "text-sm truncate", children: file.name }), _jsx("button", { onClick: () => removeFile(index), className: "text-red-400 hover:text-red-300", children: _jsx(X, { size: 18 }) })] }, index))), _jsx("button", { onClick: handleUpload, disabled: uploading, className: "w-full bg-brand-gold text-brand-primary font-semibold py-2 px-4 rounded-lg hover:bg-brand-gold/90 transition-colors disabled:opacity-50", children: uploading ? `Uploading... ${Math.round(progress)}%` : 'Upload Files' })] }))] }));
}
