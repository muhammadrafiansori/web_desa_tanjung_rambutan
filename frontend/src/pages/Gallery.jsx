import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '../components/Icons';
import { FaTimes, FaChevronLeft, FaChevronRight, FaFilter, FaCamera, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [filteredPhotos, setFilteredPhotos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('semua');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Static photos data (sesuai dengan foto yang tersedia)
    const staticPhotos = [
        {
            id: 1,
            title: 'Kegiatan Desa Bersama Tim KKN',
            category: 'kegiatan',
            image: '/images/gallery/kegiatan-1.jpg',
            description: 'Dokumentasi kegiatan desa yang dilakukan bersama mahasiswa KKN',
            date: '2024-10-15',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        },
        {
            id: 2,
            title: 'Rapat Koordinasi Desa',
            category: 'kegiatan',
            image: '/images/gallery/kegiatan-2.jpg',
            description: 'Kegiatan rapat koordinasi dengan warga dan aparatur desa',
            date: '2024-10-20',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        },
        {
            id: 3,
            title: 'Kegiatan Sosial Kemasyarakatan',
            category: 'kegiatan',
            image: '/images/gallery/kegiatan-3.jpg',
            description: 'Aktivitas sosial dan kemasyarakatan di Desa Tanjung Rambutan',
            date: '2024-10-22',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        },
        {
            id: 4,
            title: 'Kantor Desa Tanjung Rambutan',
            category: 'kantor',
            image: '/images/gallery/kantor-1.jpg',
            description: 'Gedung kantor desa yang menjadi pusat pelayanan masyarakat',
            date: '2024-10-10',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        },
        {
            id: 5,
            title: 'Fasilitas Kantor Desa',
            category: 'kantor',
            image: '/images/gallery/kantor-2.jpg',
            description: 'Fasilitas dan ruangan di kantor Desa Tanjung Rambutan',
            date: '2024-10-08',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        },
        {
            id: 6,
            title: 'Pemandangan Alam Desa',
            category: 'pemandangan',
            image: '/images/gallery/pemandangan-1.jpg',
            description: 'Keindahan alam dan pemandangan di Desa Tanjung Rambutan',
            date: '2024-10-12',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        },
        {
            id: 7,
            title: 'Lingkungan Sekitar Desa',
            category: 'pemandangan',
            image: '/images/gallery/pemandangan-2.jpg',
            description: 'Suasana dan lingkungan sekitar Desa Tanjung Rambutan',
            date: '2024-10-18',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        },
        {
            id: 8,
            title: 'Panorama Desa',
            category: 'pemandangan',
            image: '/images/gallery/pemandangan-3.jpg',
            description: 'Panorama dan view indah dari berbagai sudut desa',
            date: '2024-10-14',
            photographer: 'Tim KKN Desa Tanjung Rambutan'
        }
    ];

    // Categories configuration
    const categories = [
        {
            id: 'semua',
            label: 'Semua Foto',
            icon: FaCamera,
            count: staticPhotos.length
        },
        {
            id: 'kegiatan',
            label: 'Kegiatan Desa',
            icon: FaCamera,
            count: staticPhotos.filter(p => p.category === 'kegiatan').length
        },
        {
            id: 'pemandangan',
            label: 'Pemandangan',
            icon: FaMapMarkerAlt,
            count: staticPhotos.filter(p => p.category === 'pemandangan').length
        },
        {
            id: 'kantor',
            label: 'Kantor Desa',
            icon: FaBuilding,
            count: staticPhotos.filter(p => p.category === 'kantor').length
        }
    ];

    useEffect(() => {
        loadGalleryData();
    }, []);

    useEffect(() => {
        filterPhotos();
    }, [photos, selectedCategory]);

    const loadGalleryData = async () => {
        // Initialize with static data for immediate display
        setPhotos(staticPhotos);

        // Try to load from WordPress API in background
        try {
            console.log('🔄 Loading gallery from WordPress API...');
            const response = await import('../services/api').then(module => module.default.getGalleryPhotos());

            if (response && response.length > 0) {
                console.log('✅ Gallery API success:', response.length, 'photos found');
                setPhotos(response);
            } else {
                console.log('📷 No photos found in WordPress, using static data');
            }
        } catch (error) {
            console.log('❌ Gallery API failed, using static data:', error.message);
        }
    };

    const filterPhotos = () => {
        if (selectedCategory === 'semua') {
            setFilteredPhotos(photos);
        } else {
            setFilteredPhotos(photos.filter(photo => photo.category === selectedCategory));
        }
    };

    const openLightbox = (photo) => {
        setSelectedPhoto(photo);
        setCurrentIndex(filteredPhotos.findIndex(p => p.id === photo.id));
    };

    const closeLightbox = () => {
        setSelectedPhoto(null);
        setCurrentIndex(0);
    };

    const navigatePhoto = (direction) => {
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % filteredPhotos.length
            : currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
        setSelectedPhoto(filteredPhotos[newIndex]);
    };

    // Keyboard navigation
    const handleKeyPress = useCallback((e) => {
        if (!selectedPhoto) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                if (filteredPhotos.length > 1) navigatePhoto('prev');
                break;
            case 'ArrowRight':
                if (filteredPhotos.length > 1) navigatePhoto('next');
                break;
        }
    }, [selectedPhoto, filteredPhotos.length]);

    // Add keyboard event listeners
    useEffect(() => {
        if (selectedPhoto) {
            document.addEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.body.style.overflow = 'unset';
        };
    }, [selectedPhoto, handleKeyPress]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    // Get featured photo (latest upload)
    const featuredPhoto = photos.length > 0 ? photos[0] : null;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Featured Photo */}
            <section className="relative h-72 sm:h-96 bg-gradient-to-br from-desa-green-600 via-desa-green-500 to-desa-green-700 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                {featuredPhoto && (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                        style={{
                            backgroundImage: `url(${featuredPhoto.image})`,
                            filter: 'brightness(0.7)'
                        }}
                    ></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Icon icon={FaCamera} size="lg" className="mb-4 sm:mb-6 mx-auto" />
                            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
                                Galeri Desa
                            </h1>
                            <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
                                Dokumentasi kegiatan dan keindahan Desa Tanjung Rambutan
                            </p>
                            <p className="text-sm sm:text-lg opacity-75 mt-3 sm:mt-4">
                                Oleh Tim KKN Desa Tanjung Rambutan
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Content */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <motion.div
                        className="mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center justify-center mb-6 sm:mb-8">
                            <Icon icon={FaFilter} className="mr-2 sm:mr-3 text-desa-green-600" />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Kategori Foto</h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 font-semibold text-sm sm:text-base ${selectedCategory === category.id
                                            ? 'bg-desa-green-600 text-white shadow-lg transform -translate-y-1'
                                            : 'bg-white text-desa-green-600 border-2 border-desa-green-200 hover:border-desa-green-400 hover:shadow-md'
                                        }`}
                                >
                                    <Icon icon={category.icon} size="sm" className="mr-1 sm:mr-2" />
                                    <span className="hidden sm:inline">{category.label}</span>
                                    <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                                    <span className={`ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold ${selectedCategory === category.id
                                            ? 'bg-white/20 text-white'
                                            : 'bg-desa-green-100 text-desa-green-600'
                                        }`}>
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Photo Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <AnimatePresence>
                            {filteredPhotos.map((photo, index) => (
                                <motion.div
                                    key={photo.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                    onClick={() => openLightbox(photo)}
                                >
                                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:group-hover:-translate-y-2 active:scale-95">
                                        {/* Photo */}
                                        <div className="aspect-square overflow-hidden">
                                            <img
                                                src={photo.image}
                                                alt={photo.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.src = `https://picsum.photos/400/400?random=${photo.id}`;
                                                }}
                                            />
                                        </div>

                                        {/* Overlay - Always visible on mobile, hover on desktop */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                                                <h3 className="font-bold text-sm sm:text-lg mb-1 line-clamp-2">
                                                    {photo.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm opacity-90 mb-1 sm:mb-2 line-clamp-2 hidden sm:block">
                                                    {photo.description}
                                                </p>
                                                <p className="text-xs opacity-75">
                                                    {formatDate(photo.date)}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                                            <span className="bg-desa-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                                                {categories.find(c => c.id === photo.category)?.label}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredPhotos.length === 0 && (
                        <motion.div
                            className="text-center py-12 sm:py-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Icon icon={FaCamera} size="xl" className="mx-auto mb-4 text-gray-400" />
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                                Tidak Ada Foto
                            </h3>
                            <p className="text-sm sm:text-base text-gray-500 px-4">
                                Belum ada foto untuk kategori ini.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 p-2"
                            onClick={closeLightbox}
                        >
                            <Icon icon={FaTimes} size="lg" />
                        </button>

                        {/* Navigation Buttons */}
                        {filteredPhotos.length > 1 && (
                            <>
                                <button
                                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 sm:p-3 bg-black/30 rounded-full"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigatePhoto('prev');
                                    }}
                                >
                                    <Icon icon={FaChevronLeft} size="lg" />
                                </button>
                                <button
                                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 sm:p-3 bg-black/30 rounded-full"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigatePhoto('next');
                                    }}
                                >
                                    <Icon icon={FaChevronRight} size="lg" />
                                </button>
                            </>
                        )}

                        {/* Photo Content */}
                        <motion.div
                            className="max-w-4xl max-h-full flex flex-col w-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image */}
                            <div className="flex-1 flex items-center justify-center mb-3 sm:mb-4">
                                <img
                                    src={selectedPhoto.image}
                                    alt={selectedPhoto.title}
                                    className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
                                    onError={(e) => {
                                        e.target.src = `https://picsum.photos/800/600?random=${selectedPhoto.id}`;
                                    }}
                                />
                            </div>

                            {/* Photo Info */}
                            <div className="bg-white rounded-lg p-4 sm:p-6 text-center mx-2 sm:mx-0">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                    {selectedPhoto.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                    {selectedPhoto.description}
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
                                    <span>📅 {formatDate(selectedPhoto.date)}</span>
                                    <span>📷 {selectedPhoto.photographer}</span>
                                    <span>📁 {categories.find(c => c.id === selectedPhoto.category)?.label}</span>
                                </div>
                                {filteredPhotos.length > 1 && (
                                    <p className="text-xs text-gray-400 mt-3 sm:mt-4">
                                        {currentIndex + 1} dari {filteredPhotos.length} foto
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;