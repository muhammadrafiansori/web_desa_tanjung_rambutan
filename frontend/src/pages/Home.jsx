import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Home = () => {
    const [latestNews, setLatestNews] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [desaStats, setDesaStats] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadHomeData();
    }, []);

    const loadHomeData = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // Load data parallel untuk performance yang lebih baik
            const [postsData, pengumumanData, statsData] = await Promise.allSettled([
                api.getPosts(1, 3), // Get latest 3 posts
                api.getPengumuman(3), // Get latest 3 announcements
                api.getDesaStats()
            ]);

            // Handle posts data
            if (postsData.status === 'fulfilled') {
                const posts = postsData.value.map(post => ({
                    id: post.id,
                    title: post.title.rendered,
                    excerpt: api.createExcerpt(post.content.rendered, 120),
                    date: post.date,
                    image: api.getFeaturedImageUrl(post) || '/default-news.jpg',
                    slug: post.slug
                }));
                setLatestNews(posts);
            } else {
                // Fallback data jika API gagal
                setLatestNews([
                    {
                        id: 1,
                        title: "Gotong Royong Membersihkan Saluran Air",
                        excerpt: "Warga Desa Tanjung Rambutan mengadakan gotong royong untuk membersihkan saluran air di seluruh desa.",
                        date: "2024-10-25",
                        image: "/default-news.jpg"
                    },
                    {
                        id: 2,
                        title: "Pembangunan Jalan Desa Tahap 2", 
                        excerpt: "Pembangunan jalan desa tahap 2 telah dimulai dan diperkirakan selesai dalam 3 bulan.",
                        date: "2024-10-20",
                        image: "/default-news.jpg"
                    }
                ]);
            }

            // Handle announcements data
            if (pengumumanData.status === 'fulfilled') {
                const announcements = pengumumanData.value.map(announcement => ({
                    id: announcement.id,
                    title: announcement.title.rendered,
                    date: announcement.date,
                    slug: announcement.slug
                }));
                setAnnouncements(announcements);
            } else {
                // Fallback data jika API gagal
                setAnnouncements([
                    {
                        id: 1,
                        title: "Pendaftaran Bantuan Sosial Bulan November",
                        date: "2024-10-28"
                    },
                    {
                        id: 2,
                        title: "Rapat Koordinasi RT/RW",
                        date: "2024-10-30"
                    }
                ]);
            }

            // Handle stats data
            if (statsData.status === 'fulfilled') {
                setDesaStats(statsData.value);
            } else {
                // Fallback data jika API gagal
                setDesaStats({
                    jumlah_penduduk: 2456,
                    jumlah_kk: 678,
                    luas_wilayah: 15.8,
                    jumlah_rt: 12,
                    jumlah_rw: 4
                });
            }

        } catch (error) {
            console.error('Error loading home data:', error);
            setError('Gagal memuat data. Menggunakan data lokal.');
            
            // Use fallback data
            setLatestNews([
                {
                    id: 1,
                    title: "Website Desa Tanjung Rambutan Diluncurkan",
                    excerpt: "Website resmi Desa Tanjung Rambutan kini telah diluncurkan untuk memberikan informasi terkini kepada masyarakat.",
                    date: "2024-10-28",
                    image: "/default-news.jpg"
                }
            ]);
            
            setAnnouncements([
                {
                    id: 1,
                    title: "Selamat datang di Website Desa Tanjung Rambutan",
                    date: "2024-10-28"
                }
            ]);
            
            setDesaStats({
                jumlah_penduduk: 2456,
                jumlah_kk: 678,
                luas_wilayah: 15.8,
                jumlah_rt: 12,
                jumlah_rw: 4
            });
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-96 text-desa-green-600">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-desa-green-600 mb-4"></div>
                <p className="text-lg">Memuat data...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen bg-gradient-to-br from-desa-green-600 via-desa-green-500 to-desa-green-700 flex items-center justify-center text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-desa-green-600/20 to-transparent"></div>
                
                <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg">
                        Selamat Datang di Website
                        <br />
                        <span className="text-desa-green-100">Desa Tanjung Rambutan</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                        Desa yang bersih, sejahtera, dan berdaya saing untuk kesejahteraan seluruh masyarakat
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="/profil" 
                            className="bg-white text-desa-green-600 hover:bg-desa-green-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 shadow-lg"
                        >
                            Profil Desa
                        </a>
                        <a 
                            href="/layanan" 
                            className="border-2 border-white text-white hover:bg-white hover:text-desa-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            Layanan Desa
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-16 -mt-20 relative z-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-3xl lg:text-4xl font-bold text-desa-green-600 mb-2">
                                {desaStats.jumlah_penduduk?.toLocaleString()}
                            </div>
                            <div className="text-gray-600 font-medium">Jiwa Penduduk</div>
                        </div>
                        <div className="bg-white text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-3xl lg:text-4xl font-bold text-desa-green-600 mb-2">
                                {desaStats.jumlah_kk?.toLocaleString()}
                            </div>
                            <div className="text-gray-600 font-medium">Kepala Keluarga</div>
                        </div>
                        <div className="bg-white text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-3xl lg:text-4xl font-bold text-desa-green-600 mb-2">
                                {desaStats.luas_wilayah} Km²
                            </div>
                            <div className="text-gray-600 font-medium">Luas Wilayah</div>
                        </div>
                        <div className="bg-white text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="text-3xl lg:text-4xl font-bold text-desa-green-600 mb-2">
                                {desaStats.jumlah_rt}
                            </div>
                            <div className="text-gray-600 font-medium">RT</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto px-5 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Latest News */}
                    <div className="lg:col-span-2">
                        <div className="flex justify-between items-center mb-8 border-b-3 border-desa-green-500 pb-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-desa-green-600">Berita Terkini</h2>
                            <a href="/berita" className="text-desa-green-600 hover:text-desa-green-700 hover:bg-desa-green-50 px-4 py-2 rounded-full transition-all duration-300 font-medium">
                                Lihat Semua
                            </a>
                        </div>
                        <div className="space-y-6">
                            {latestNews.map(news => (
                                <article key={news.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                    <div className="md:flex">
                                        <div className="md:w-48 h-32 md:h-auto overflow-hidden">
                                            <img 
                                                src={news.image} 
                                                alt={news.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="p-6 flex-1">
                                            <h3 className="text-lg font-semibold text-desa-green-600 mb-2 group-hover:text-desa-green-700 transition-colors">
                                                {news.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 line-clamp-2">
                                                {news.excerpt}
                                            </p>
                                            <div className="text-sm text-gray-500">
                                                {new Date(news.date).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Announcements */}
                    <div>
                        <div className="flex justify-between items-center mb-8 border-b-3 border-desa-green-500 pb-2">
                            <h2 className="text-2xl font-bold text-desa-green-600">Pengumuman</h2>
                            <a href="/pengumuman" className="text-desa-green-600 hover:text-desa-green-700 hover:bg-desa-green-50 px-4 py-2 rounded-full transition-all duration-300 font-medium">
                                Lihat Semua
                            </a>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg">
                            {announcements.map((announcement, index) => (
                                <div 
                                    key={announcement.id} 
                                    className={`p-4 hover:bg-gray-50 transition-colors ${index !== announcements.length - 1 ? 'border-b border-gray-100' : ''}`}
                                >
                                    <div className="flex gap-4">
                                        <div className="text-desa-green-600 font-semibold text-sm min-w-20">
                                            {new Date(announcement.date).toLocaleDateString('id-ID', {
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-gray-800 font-medium line-clamp-2">
                                                {announcement.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Services */}
                <section className="mt-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-desa-green-600 mb-4">Layanan Unggulan</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Layanan administrasi desa yang mudah, cepat, dan terpercaya untuk memenuhi kebutuhan masyarakat</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🆔</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3">e-KTP</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Pelayanan pembuatan dan perpanjangan e-KTP</p>
                        </div>
                        <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">👨‍👩‍👧‍👦</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3">Kartu Keluarga</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Pengurusan Kartu Keluarga baru dan perubahan data</p>
                        </div>
                        <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3">Surat Keterangan</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Berbagai surat keterangan untuk keperluan administrasi</p>
                        </div>
                        <div className="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3">Pengaduan</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Sampaikan keluhan dan saran untuk perbaikan desa</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;