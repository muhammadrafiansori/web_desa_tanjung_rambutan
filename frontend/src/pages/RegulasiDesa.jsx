import React, { useState, useEffect } from 'react';
import {
    Icon,
    IconButton,
    getCategoryIcon,
    FaUniversity,
    FaSearch,
    FaFolder,
    FaCalendarAlt,
    FaDownload,
    FaFileAlt,
    FaSpinner,
    FaExclamationTriangle,
    FaPhone,
    FaEnvelope
} from '../components/Icons';

const RegulasiDesa = () => {
    const [regulasiList, setRegulasiList] = useState([]);
    const [filteredRegulasi, setFilteredRegulasi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filter states
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedKategori, setSelectedKategori] = useState('');
    const [selectedTahun, setSelectedTahun] = useState('');

    // Kategori regulasi desa
    const kategoriOptions = [
        'Peraturan Desa (Perdes)',
        'Keputusan Kepala Desa',
        'APBDes (Anggaran Desa)',
        'RPJMDes (Rencana Pembangunan)',
        'RKPDes (Rencana Kerja)',
        'SOP (Standard Operating Procedure)',
        'Surat Keputusan',
        'Dokumen Lainnya'
    ];

    // Get unique years from data
    const getAvailableYears = () => {
        const years = regulasiList.map(item => new Date(item.tanggal_penetapan).getFullYear());
        return [...new Set(years)].sort((a, b) => b - a); // Sort descending
    };

    useEffect(() => {
        document.title = 'Regulasi Desa - Desa Tanjung Rambutan';
        loadRegulasiData();
    }, []);

    useEffect(() => {
        filterRegulasi();
    }, [regulasiList, searchTerm, selectedKategori, selectedTahun]);

    const loadRegulasiData = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API call
            // const response = await api.getRegulasi();

            // Mock data for development
            const mockData = [
                {
                    id: 1,
                    title: 'Peraturan Desa No. 01 Tahun 2024',
                    kategori: 'Peraturan Desa (Perdes)',
                    nomor_regulasi: '01/2024',
                    tahun: 2024,
                    tanggal_penetapan: '2024-01-15',
                    deskripsi: 'Peraturan tentang Anggaran Pendapatan dan Belanja Desa Tahun 2024',
                    pdf_url: '/documents/perdes-01-2024.pdf',
                    file_size: '2.5 MB',
                    download_count: 125,
                    status_aktif: true
                },
                {
                    id: 2,
                    title: 'Keputusan Kepala Desa No. 05 Tahun 2024',
                    kategori: 'Keputusan Kepala Desa',
                    nomor_regulasi: '05/2024',
                    tahun: 2024,
                    tanggal_penetapan: '2024-03-10',
                    deskripsi: 'Keputusan tentang Pembentukan Tim Pelaksana Program Desa Digital',
                    pdf_url: '/documents/sk-kades-05-2024.pdf',
                    file_size: '1.8 MB',
                    download_count: 89,
                    status_aktif: true
                },
                {
                    id: 3,
                    title: 'APBDes Tahun 2024',
                    kategori: 'APBDes (Anggaran Desa)',
                    nomor_regulasi: 'APBDes/2024',
                    tahun: 2024,
                    tanggal_penetapan: '2024-01-01',
                    deskripsi: 'Anggaran Pendapatan dan Belanja Desa Tanjung Rambutan Tahun Anggaran 2024',
                    pdf_url: '/documents/apbdes-2024.pdf',
                    file_size: '4.2 MB',
                    download_count: 256,
                    status_aktif: true
                }
            ];

            setRegulasiList(mockData);
        } catch (err) {
            console.error('Error loading regulasi:', err);
            setError('Gagal memuat data regulasi');
        } finally {
            setLoading(false);
        }
    };

    const filterRegulasi = () => {
        let filtered = [...regulasiList];

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.deskripsi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.nomor_regulasi.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by kategori
        if (selectedKategori) {
            filtered = filtered.filter(item => item.kategori === selectedKategori);
        }

        // Filter by tahun
        if (selectedTahun) {
            filtered = filtered.filter(item => item.tahun === parseInt(selectedTahun));
        }

        // Only show active documents
        filtered = filtered.filter(item => item.status_aktif);

        setFilteredRegulasi(filtered);
    };

    const handleDownload = async (item) => {
        try {
            // TODO: Implement actual download with analytics
            console.log('Downloading:', item.title);

            // Simulate download
            window.open(item.pdf_url, '_blank');

            // TODO: Update download count via API
            // await api.incrementDownloadCount(item.id);

            // Update local state
            setRegulasiList(prev => prev.map(reg =>
                reg.id === item.id
                    ? { ...reg, download_count: reg.download_count + 1 }
                    : reg
            ));
        } catch (error) {
            console.error('Download error:', error);
            alert('Gagal mengunduh dokumen. Silakan coba lagi.');
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const renderCategoryIcon = (category) => {
        const IconComponent = getCategoryIcon(category);
        return <Icon icon={IconComponent} size="2xl" className="text-desa-green-600" />;
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Icon icon={FaSpinner} size="3xl" className="animate-spin text-desa-green-600 mx-auto" />
                    <p className="mt-4 text-gray-600">Memuat data regulasi...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <Icon icon={FaExclamationTriangle} size="3xl" className="text-red-500 mx-auto mb-4" />
                    <p className="text-red-600 mb-4">{error}</p>
                    <IconButton
                        icon={FaSpinner}
                        onClick={loadRegulasiData}
                        variant="primary"
                        size="md"
                    >
                        Coba Lagi
                    </IconButton>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-desa-green-600 to-desa-green-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center space-x-3">
                            <Icon icon={FaUniversity} size="xl" className="text-white" />
                            <span>Regulasi Desa Tanjung Rambutan</span>
                        </h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Kumpulan peraturan desa, keputusan, dan dokumen resmi yang dapat diakses dan diunduh oleh masyarakat untuk meningkatkan transparansi pemerintahan desa.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2">
                            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                                <Icon icon={FaSearch} size="sm" className="text-desa-green-600" />
                                <span>Cari Dokumen</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Cari berdasarkan judul, nomor, atau deskripsi..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-desa-green-500 focus:border-desa-green-500"
                            />
                        </div>

                        {/* Kategori Filter */}
                        <div>
                            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                                <Icon icon={FaFolder} size="sm" className="text-desa-green-600" />
                                <span>Kategori</span>
                            </label>
                            <select
                                value={selectedKategori}
                                onChange={(e) => setSelectedKategori(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-desa-green-500 focus:border-desa-green-500"
                            >
                                <option value="">Semua Kategori</option>
                                {kategoriOptions.map(kategori => (
                                    <option key={kategori} value={kategori}>{kategori}</option>
                                ))}
                            </select>
                        </div>

                        {/* Tahun Filter */}
                        <div>
                            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                                <Icon icon={FaCalendarAlt} size="sm" className="text-desa-green-600" />
                                <span>Tahun</span>
                            </label>
                            <select
                                value={selectedTahun}
                                onChange={(e) => setSelectedTahun(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-desa-green-500 focus:border-desa-green-500"
                            >
                                <option value="">Semua Tahun</option>
                                {getAvailableYears().map(tahun => (
                                    <option key={tahun} value={tahun}>{tahun}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="mt-4 text-sm text-gray-600">
                        Menampilkan {filteredRegulasi.length} dari {regulasiList.length} dokumen
                    </div>
                </div>
            </div>

            {/* Documents Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {filteredRegulasi.length === 0 ? (
                    <div className="text-center py-12">
                        <Icon icon={FaFileAlt} size="3xl" className="text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Tidak ada dokumen ditemukan
                        </h3>
                        <p className="text-gray-500">
                            Coba ubah kriteria pencarian atau filter Anda
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRegulasi.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                {/* Card Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            {renderCategoryIcon(item.kategori)}
                                        </div>
                                        <span className="bg-desa-green-100 text-desa-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                            {item.nomor_regulasi}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                        {item.deskripsi}
                                    </p>

                                    <div className="space-y-2 text-xs text-gray-500">
                                        <div className="flex items-center">
                                            <span className="font-medium">Kategori:</span>
                                            <span className="ml-1">{item.kategori}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-medium">Tanggal:</span>
                                            <span className="ml-1">{formatDate(item.tanggal_penetapan)}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>
                                                <span className="font-medium">Ukuran:</span> {item.file_size}
                                            </span>
                                            <span>
                                                <span className="font-medium">Diunduh:</span> {item.download_count}x
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="px-6 pb-6">
                                    <IconButton
                                        icon={FaDownload}
                                        onClick={() => handleDownload(item)}
                                        variant="primary"
                                        size="md"
                                        className="w-full"
                                    >
                                        Unduh PDF
                                    </IconButton>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Information Footer */}
            <div className="bg-blue-50 border-t">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                                <Icon icon={FaFileAlt} size="md" className="text-blue-600" />
                                <span>Informasi Penting</span>
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Semua dokumen dalam format PDF</li>
                                <li>• Dokumen dapat diunduh secara gratis</li>
                                <li>• Maksimal ukuran file: 10MB</li>
                                <li>• Dokumen diperbarui secara berkala</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center space-x-2">
                                <Icon icon={FaPhone} size="md" className="text-blue-600" />
                                <span>Bantuan</span>
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Jika mengalami kesulitan mengunduh atau membutuhkan dokumen yang tidak tersedia, hubungi:
                            </p>
                            <div className="text-sm font-medium text-desa-green-600 space-y-1">
                                <p>Kantor Desa Tanjung Rambutan</p>
                                <p className="flex items-center space-x-2">
                                    <Icon icon={FaPhone} size="sm" />
                                    <span>Telp: (0761) 123-456</span>
                                </p>
                                <p className="flex items-center space-x-2">
                                    <Icon icon={FaEnvelope} size="sm" />
                                    <span>Email: admin@tanjungrambutan-desa.id</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegulasiDesa;