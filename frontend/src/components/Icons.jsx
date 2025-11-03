import {
    // FontAwesome Icons - Professional and Government-appropriate
    FaUniversity,         // Government building (🏛️)
    FaGavel,             // Law/Regulation (📜)
    FaStamp,             // Official stamp/decision (✅)
    FaDollarSign,        // Budget/Finance (💰)  
    FaBuilding,          // Development/Construction (🏗️)
    FaClipboardList,     // Work plan/checklist (📋)
    FaCogs,              // SOP/Settings (⚙️)
    FaFileAlt,           // Document (📄)
    FaFolder,            // Folder (📁)
    FaSearch,            // Search (🔍)
    FaCalendarAlt,       // Calendar/Date (📅)
    FaDownload,          // Download
    FaChevronDown,       // Dropdown arrow
    FaMapMarkerAlt,      // Location
    FaPhone,             // Phone
    FaEnvelope,          // Email
    FaArrowRight,        // Right arrow
    FaSpinner,           // Loading spinner
    FaExclamationTriangle, // Warning/Error
    FaCheckCircle,       // Success
    FaTimes,             // Close/X
    FaBars,              // Hamburger menu
    FaEye,               // View/Read more
    FaBook,              // Book
    FaInfoCircle,        // Information
    FaFilePdf,           // PDF file
    FaUser               // User profile
} from 'react-icons/fa';

// Export all icons we'll use
export {
    FaUniversity,
    FaGavel,
    FaStamp,
    FaDollarSign,
    FaBuilding,
    FaClipboardList,
    FaCogs,
    FaFileAlt,
    FaFolder,
    FaSearch,
    FaCalendarAlt,
    FaDownload,
    FaChevronDown,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaArrowRight,
    FaSpinner,
    FaExclamationTriangle,
    FaCheckCircle,
    FaTimes,
    FaBars,
    FaEye,
    FaBook,
    FaInfoCircle,
    FaFilePdf,
    FaUser
};

// Icon component with consistent sizing and styling
export const Icon = ({
    icon: IconComponent,
    size = "md",
    className = "",
    color = "currentColor",
    ...props
}) => {
    const sizeClasses = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
        "2xl": "w-10 h-10",
        "3xl": "w-12 h-12"
    };

    return (
        <IconComponent
            className={`${sizeClasses[size]} ${className}`}
            style={{ color }}
            {...props}
        />
    );
};

// Category icons mapping for Regulasi Desa
export const getCategoryIcon = (category) => {
    const iconMap = {
        'Peraturan Desa (Perdes)': FaGavel,
        'Keputusan Kepala Desa': FaStamp,
        'APBDes (Anggaran Desa)': FaDollarSign,
        'RPJMDes (Rencana Pembangunan)': FaBuilding,
        'RKPDes (Rencana Kerja)': FaClipboardList,
        'SOP (Standard Operating Procedure)': FaCogs,
        'Surat Keputusan': FaFileAlt,
        'Dokumen Lainnya': FaFolder
    };

    return iconMap[category] || FaFileAlt;
};

// Icon button component for consistent button styling
export const IconButton = ({
    icon: IconComponent,
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2";

    const variantClasses = {
        primary: "bg-desa-green-600 hover:bg-desa-green-700 text-white focus:ring-desa-green-500",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400",
        outline: "border border-desa-green-600 text-desa-green-600 hover:bg-desa-green-600 hover:text-white focus:ring-desa-green-500",
        ghost: "text-desa-green-600 hover:bg-desa-green-50 focus:ring-desa-green-500"
    };

    const sizeClasses = {
        sm: "px-3 py-2 text-sm space-x-1",
        md: "px-4 py-2 text-sm space-x-2",
        lg: "px-6 py-3 text-base space-x-2",
        xl: "px-8 py-4 text-lg space-x-3"
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            {...props}
        >
            <IconComponent className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : size === 'xl' ? 'w-7 h-7' : 'w-5 h-5'} />
            {children && <span>{children}</span>}
        </button>
    );
};