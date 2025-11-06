import React, { useState, useEffect } from 'react';
import {
    Icon,
    IconButton,
    FaBook,
    FaDownload,
    FaCalendarAlt,
    FaFileAlt,
    FaPhone,
    FaEnvelope,
    FaEye,
    FaFilePdf,
    FaInfoCircle
} from '../components/Icons';

const ProfilDesa = () => {
    const [downloadCount, setDownloadCount] = useState(1247); // Mock counter
    const [selectedDocument, setSelectedDocument] = useState(0); // Index of selected document
    const [imageError, setImageError] = useState(false); // Track image loading error

    // Data dokumen PDF yang tersedia
    const documents = [
        {
            id: 1,
            title: "Profil Desa Tanjung Rambutan",
            subtitle: "Edisi Tahun 2024",
            version: "1.0",
            yearPublished: 2024,
            fileSize: "5.2 MB",
            pageCount: 52,
            lastUpdated: "2024-10-15",
            pdfUrl: "/documents/profil-desa-2024.pdf",
            coverImage: "/images/book-cover.png",
            category: "Profil Desa",
            description: "Buku profil resmi yang memuat informasi lengkap mengenai Desa Tanjung Rambutan, meliputi sejarah, visi misi, data demografis, potensi desa, struktur pemerintahan, dan program pembangunan terkini.",
            tableOfContents: [
                "Kata Pengantar Kepala Desa",
                "Sejarah dan Latar Belakang Desa",
                "Visi, Misi, dan Tujuan Pembangunan",
                "Kondisi Geografis dan Administratif",
                "Data Kependudukan dan Demografi",
                "Struktur Pemerintahan Desa",
                "Potensi dan Sumber Daya Desa",
                "Program Pembangunan dan Prestasi",
                "Layanan Publik dan Fasilitas Desa",
                "Galeri Foto Kegiatan dan Prestasi",
                "Rencana Pembangunan ke Depan"
            ]
        },
        {
            id: 2,
            title: "Produk Hukum Desa",
            subtitle: "Peraturan dan Keputusan Desa",
            version: "2.0",
            yearPublished: 2024,
            fileSize: "3.8 MB",
            pageCount: 38,
            lastUpdated: "2024-09-20",
            pdfUrl: "/documents/PRODUK-HUKUM-TJ-RAMBUTAN.pdf",
            coverImage: "/images/book-cover-hukum.png", // Updated image path
            category: "Hukum",
            description: "Kumpulan produk hukum desa meliputi peraturan desa, keputusan kepala desa, dan regulasi yang berlaku di Desa Tanjung Rambutan.",
            tableOfContents: [
                "Peraturan Desa tentang APBDes",
                "Peraturan Desa tentang Organisasi Pemerintahan",
                "Keputusan Kepala Desa tentang Pengangkatan Perangkat",
                "Peraturan tentang Retribusi Desa",
                "Keputusan tentang Tim Pelaksana Kegiatan",
                "Peraturan tentang Badan Permusyawaratan Desa"
            ]
        }
    ];

    // Get current selected document
    const bukuProfil = documents[selectedDocument];

    useEffect(() => {
        document.title = 'Buku Profil Desa - Desa Tanjung Rambutan';
    }, []);

    // Reset image error state when document changes
    useEffect(() => {
        console.log('Document changed to:', selectedDocument, 'Reset imageError to false');
        setImageError(false);
    }, [selectedDocument]);

    // Handle image load success
    const handleImageLoad = () => {
        console.log('Image loaded successfully for:', bukuProfil.title);
        setImageError(false);
    };

    // Handle image load error
    const handleImageError = () => {
        console.log('Image failed to load for:', bukuProfil.title, 'Cover path:', bukuProfil.coverImage);
        setImageError(true);
    };

    const handleDownload = async () => {
        try {
            // Track download
            console.log('Downloading:', bukuProfil.title);

            // Open PDF in new tab
            window.open(bukuProfil.pdfUrl, '_blank');

            // Update download count (in real app, this would be API call)
            setDownloadCount(prev => prev + 1);

        } catch (error) {
            console.error('Download error:', error);
            alert('Gagal mengunduh dokumen. Silakan coba lagi.');
        }
    };

    const handlePreview = () => {
        // Preview PDF in new tab (same as download but different tracking)
        window.open(bukuProfil.pdfUrl, '_blank');
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-desa-green-600 via-desa-green-700 to-desa-green-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <div className="mb-6">
                            <Icon icon={FaBook} size="3xl" className="text-white mx-auto mb-4" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {bukuProfil.title}
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 mb-2">
                            {bukuProfil.subtitle}
                        </p>
                        <p className="text-lg opacity-80 max-w-4xl mx-auto">
                            {bukuProfil.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Document Selection */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Koleksi Dokumen Desa</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {documents.map((doc, index) => (
                            <div
                                key={doc.id}
                                onClick={() => setSelectedDocument(index)}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                                    selectedDocument === index
                                        ? 'border-desa-green-500 bg-desa-green-50'
                                        : 'border-gray-200 hover:border-desa-green-300 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-start space-x-3">
                                    <div className={`p-2 rounded-lg ${
                                        doc.category === 'Profil Desa' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                                    }`}>
                                        <Icon icon={FaFilePdf} size="lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                            {doc.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">{doc.subtitle}</p>
                                        <div className="flex items-center justify-between mt-3">
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                doc.category === 'Profil Desa' 
                                                    ? 'bg-blue-100 text-blue-700' 
                                                    : 'bg-orange-100 text-orange-700'
                                            }`}>
                                                {doc.category}
                                            </span>
                                            <span className="text-xs text-gray-500">{doc.fileSize}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Book Preview Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                            {/* Book Cover */}
                            <div className="aspect-[3/4] rounded-lg mb-6 overflow-hidden border-2 border-desa-green-300 shadow-md">
                                {!imageError ? (
                                    <img
                                        key={`${bukuProfil.id}-${selectedDocument}`} // Force re-render when document changes
                                        src={bukuProfil.coverImage}
                                        alt={`Cover ${bukuProfil.title}`}
                                        className="w-full h-full object-cover transition-opacity duration-300"
                                        onError={handleImageError}
                                        onLoad={handleImageLoad}
                                    />
                                ) : (
                                    /* Fallback placeholder */
                                    <div 
                                        key={`placeholder-${bukuProfil.id}-${selectedDocument}`}
                                        className="w-full h-full bg-gradient-to-br from-desa-green-100 to-desa-green-200 flex flex-col items-center justify-center animate-fadeIn"
                                    >
                                        <Icon icon={FaBook} size="3xl" className="text-desa-green-600 mb-4" />
                                        <h3 className="text-lg font-bold text-desa-green-800 text-center px-4">
                                            {bukuProfil.title}
                                        </h3>
                                        <p className="text-sm text-desa-green-600 mt-2 text-center px-2">
                                            {bukuProfil.subtitle}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Book Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Ukuran File:</span>
                                    <span className="font-medium">{bukuProfil.fileSize}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Jumlah Halaman:</span>
                                    <span className="font-medium">{bukuProfil.pageCount} halaman</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Terakhir Diperbarui:</span>
                                    <span className="font-medium">{formatDate(bukuProfil.lastUpdated)}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Total Download:</span>
                                    <span className="font-medium">{downloadCount.toLocaleString()} kali</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <IconButton
                                    icon={FaDownload}
                                    onClick={handleDownload}
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                >
                                    Unduh Buku Profil (PDF)
                                </IconButton>

                                <IconButton
                                    icon={FaEye}
                                    onClick={handlePreview}
                                    variant="secondary"
                                    size="md"
                                    className="w-full"
                                >
                                    Preview Online
                                </IconButton>
                            </div>
                        </div>
                    </div>

                    {/* Content Info Section */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* About Book */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <Icon icon={FaInfoCircle} size="lg" className="text-desa-green-600 mr-3" />
                                Tentang Buku Profil
                            </h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Buku profil ini merupakan kompilasi informasi resmi dan terkini tentang Desa Tanjung Rambutan.
                                    Disusun secara komprehensif untuk memberikan gambaran lengkap mengenai kondisi desa,
                                    potensi yang dimiliki, serta capaian pembangunan yang telah dilaksanakan.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Dokumen ini dapat digunakan sebagai referensi bagi masyarakat, peneliti, investor,
                                    maupun pihak-pihak yang membutuhkan informasi akurat tentang Desa Tanjung Rambutan.
                                </p>
                            </div>
                        </div>

                        {/* Table of Contents */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <Icon icon={FaFileAlt} size="lg" className="text-desa-green-600 mr-3" />
                                Daftar Isi
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {bukuProfil.tableOfContents.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-desa-green-50 transition-colors">
                                        <span className="flex-shrink-0 w-8 h-8 bg-desa-green-100 text-desa-green-700 rounded-full flex items-center justify-center text-sm font-medium">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700 text-sm leading-relaxed">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* File Information */}
                            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <Icon icon={FaFilePdf} size="md" className="text-blue-600 mr-2" />
                                    Informasi File
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Format: PDF (Adobe Acrobat Reader)</li>
                                    <li>• Dapat dibuka di semua device</li>
                                    <li>• Ukuran file: {bukuProfil.fileSize}</li>
                                    <li>• Kualitas: High Resolution</li>
                                    <li>• Dapat diprint dan dibagikan</li>
                                </ul>
                            </div>

                            {/* Contact Help */}
                            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                    <Icon icon={FaPhone} size="md" className="text-green-600 mr-2" />
                                    Bantuan
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    Jika mengalami kesulitan mengunduh atau membutuhkan informasi tambahan:
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="flex items-center text-desa-green-700">
                                        <Icon icon={FaPhone} size="sm" className="mr-2" />
                                        (0761) 123-456
                                    </p>
                                    <p className="flex items-center text-desa-green-700">
                                        <Icon icon={FaEnvelope} size="sm" className="mr-2" />
                                        admin@tanjungrambutan-desa.id
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Update Notice */}
            <div className="bg-desa-green-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-3">
                            <Icon icon={FaCalendarAlt} size="md" className="text-white mr-2" />
                            <h3 className="text-lg font-semibold">Pembaruan Berkala</h3>
                        </div>
                        <p className="text-desa-green-100 max-w-2xl mx-auto">
                            Buku profil ini akan diperbarui setiap tahun untuk memastikan informasi yang tersaji tetap akurat dan terkini.
                            Versi terbaru selalu tersedia di website resmi desa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilDesa;