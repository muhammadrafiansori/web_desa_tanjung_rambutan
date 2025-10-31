import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Home = () => {
    const [latestNews, setLatestNews] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [desaStats, setDesaStats] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orgMembers, setOrgMembers] = useState([]); // New state for organizational members

    useEffect(() => {
        loadHomeData();
    }, []);

    const loadHomeData = async () => {
        setLoading(true);
        setError(null);

        try {
            // Load data parallel untuk performance yang lebih baik
            const [postsData, pengumumanData, statsData, orgData] = await Promise.allSettled([
                api.getPosts(1, 3), // Get latest 3 posts
                api.getPengumuman(3), // Get latest 3 announcements
                api.getDesaStats(),
                api.getOrgMembers() // Fetch organizational members data
            ]);            // Handle posts data
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

            {/* Kata Sambutan Kepala Desa */}
            <section className="bg-gradient-to-b from-desa-green-50 to-white py-20 -mt-20 relative z-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-500">
                        <div className="grid lg:grid-cols-2 items-center">
                            {/* Foto Kepala Desa */}
                            <div className="p-8 lg:p-12 flex justify-center">
                                <div className="relative">
                                    <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-desa-green-100 to-desa-green-200 flex items-center justify-center">
                                        <img
                                            src="/images/kepala-desa.jpg"
                                            alt="Bapak [Nama Kepala Desa]"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-desa-green-100 to-desa-green-200 items-center justify-center text-6xl hidden">
                                            👨‍💼
                                        </div>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-desa-green-200 rounded-full opacity-50 animate-pulse"></div>
                                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-village-primary-300 rounded-full opacity-40 animate-bounce"></div>
                                </div>
                            </div>

                            {/* Kata Sambutan */}
                            <div className="p-8 lg:p-12 lg:pl-8">
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-desa-green-600 mb-2">
                                        Kata Sambutan
                                    </h3>
                                    <div className="w-20 h-1 bg-gradient-to-r from-desa-green-500 to-village-primary-500 rounded-full mb-6"></div>
                                </div>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p className="text-lg font-medium text-desa-green-700 italic">
                                        "Assalamu'alaikum Warahmatullahi Wabarakatuh"
                                    </p>

                                    <p>
                                        Selamat datang di website resmi Desa Tanjung Rambutan. Dengan bangga kami mempersembahkan
                                        portal digital ini sebagai jembatan komunikasi antara pemerintah desa dengan seluruh
                                        masyarakat, baik yang berada di dalam maupun di luar wilayah desa.
                                    </p>

                                    <p>
                                        Melalui website ini, kami berkomitmen untuk menyajikan informasi terkini mengenai
                                        program-program pembangunan, layanan publik, dan berbagai kegiatan yang ada di desa kita.
                                        Transparansi dan akuntabilitas menjadi kunci dalam setiap langkah pembangunan yang kami lakukan.
                                    </p>

                                    <p>
                                        Mari bersama-sama kita wujudkan Desa Tanjung Rambutan yang maju, mandiri, dan sejahtera
                                        untuk kesejahteraan seluruh masyarakat.
                                    </p>

                                    <p className="text-desa-green-700 font-medium italic">
                                        "Wassalamu'alaikum Warahmatullahi Wabarakatuh"
                                    </p>
                                </div>

                                {/* Signature */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="text-right">
                                        <p className="font-bold text-desa-green-600 text-lg">
                                            [Nama Kepala Desa]
                                        </p>
                                        <p className="text-gray-600 font-medium">
                                            Kepala Desa Tanjung Rambutan
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Periode 2019 - 2025
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-20 mt-16 relative z-20">
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

            {/* Village Overview Section */}
            <section className="bg-gradient-to-br from-gray-50 to-white py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-desa-green-600 mb-4">
                            Selayang Pandang Desa Tanjung Rambutan
                        </h2>
                        <div className="w-24 h-1 bg-desa-green-500 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            Desa yang kaya akan potensi alam dan budaya, berkomitmen membangun masyarakat
                            yang sejahtera, mandiri, dan berdaya saing untuk masa depan yang lebih baik
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Potensi Alam */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🌾</span>
                            </div>
                            <h3 className="text-xl font-bold text-desa-green-600 mb-4 group-hover:text-desa-green-700">
                                Potensi Alam
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Lahan pertanian subur dengan hasil padi berkualitas tinggi dan perkebunan
                                rambutan yang menjadi ciri khas desa kami
                            </p>
                            <a href="/potensi/alam" className="text-desa-green-600 hover:text-desa-green-700 font-medium text-sm group-hover:underline">
                                Pelajari Lebih Lanjut →
                            </a>
                        </div>

                        {/* Budaya & Tradisi */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🎭</span>
                            </div>
                            <h3 className="text-xl font-bold text-desa-green-600 mb-4 group-hover:text-desa-green-700">
                                Budaya & Tradisi
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Melestarikan tradisi Melayu dengan berbagai upacara adat dan kesenian
                                yang diwariskan turun temurun
                            </p>
                            <a href="/budaya" className="text-desa-green-600 hover:text-desa-green-700 font-medium text-sm group-hover:underline">
                                Pelajari Lebih Lanjut →
                            </a>
                        </div>

                        {/* Ekonomi Kreatif */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">💼</span>
                            </div>
                            <h3 className="text-xl font-bold text-desa-green-600 mb-4 group-hover:text-desa-green-700">
                                Ekonomi Kreatif
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                UMKM berkembang dengan produk unggulan kerajinan tangan dan olahan
                                hasil pertanian berkualitas tinggi
                            </p>
                            <a href="/ekonomi" className="text-desa-green-600 hover:text-desa-green-700 font-medium text-sm group-hover:underline">
                                Pelajari Lebih Lanjut →
                            </a>
                        </div>
                    </div>

                    {/* Quick Stats & CTA */}
                    <div className="bg-gradient-to-r from-desa-green-600 to-desa-green-700 rounded-2xl p-8 md:p-12 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Bergabunglah dalam Pembangunan Desa
                                </h3>
                                <p className="text-desa-green-100 mb-6 leading-relaxed">
                                    Partisipasi aktif masyarakat adalah kunci kesuksesan pembangunan desa.
                                    Mari bersama membangun Tanjung Rambutan yang lebih maju dan sejahtera.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="/program"
                                        className="bg-white text-desa-green-600 hover:bg-desa-green-50 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                                    >
                                        Lihat Program Desa
                                    </a>
                                    <a
                                        href="/layanan"
                                        className="border-2 border-white text-white hover:bg-white hover:text-desa-green-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                                    >
                                        Akses Layanan
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <div className="text-2xl font-bold mb-1">15+</div>
                                        <div className="text-sm text-desa-green-100">Program Aktif</div>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <div className="text-2xl font-bold mb-1">50+</div>
                                        <div className="text-sm text-desa-green-100">UMKM Binaan</div>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <div className="text-2xl font-bold mb-1">98%</div>
                                        <div className="text-sm text-desa-green-100">Kepuasan Layanan</div>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-4">
                                        <div className="text-2xl font-bold mb-1">24/7</div>
                                        <div className="text-sm text-desa-green-100">Layanan Online</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Berita Terkini Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-desa-green-100 text-desa-green-600 px-6 py-2 rounded-full font-medium mb-4">
                            📰 Informasi Terkini
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-desa-green-600 mb-4">
                            Berita & Pengumuman Desa
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Dapatkan informasi terbaru mengenai kegiatan, program, dan pengumuman penting dari Desa Tanjung Rambutan
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Featured News */}
                        <div className="lg:col-span-2">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                    🗞️ Berita Terkini
                                </h3>
                                <a
                                    href="/berita"
                                    className="bg-desa-green-600 text-white px-6 py-2 rounded-full hover:bg-desa-green-700 transition-colors font-medium text-sm shadow-lg hover:shadow-xl"
                                >
                                    Lihat Semua Berita →
                                </a>
                            </div>

                            <div className="space-y-6">
                                {latestNews.map((news, index) => (
                                    <article
                                        key={news.id}
                                        className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${index === 0 ? 'lg:grid lg:grid-cols-5 lg:gap-6' : ''
                                            }`}
                                    >
                                        {/* Featured News Layout (First News) */}
                                        {index === 0 ? (
                                            <>
                                                <div className="lg:col-span-2 h-64 lg:h-auto overflow-hidden">
                                                    <img
                                                        src={news.image}
                                                        alt={news.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                                                    <div className="inline-flex items-center gap-2 text-sm font-medium text-desa-green-600 mb-3">
                                                        <span className="w-2 h-2 bg-desa-green-500 rounded-full animate-pulse"></span>
                                                        BERITA UTAMA
                                                    </div>
                                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-desa-green-600 transition-colors leading-tight">
                                                        {news.title}
                                                    </h3>
                                                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                                        {news.excerpt}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                                            <span className="text-base">📅</span>
                                                            {new Date(news.date).toLocaleDateString('id-ID', {
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                        </div>
                                                        <button className="text-desa-green-600 hover:text-desa-green-700 font-medium text-sm hover:bg-desa-green-50 px-3 py-1 rounded-full transition-colors">
                                                            Baca Selengkapnya →
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            /* Regular News Layout */
                                            <div className="md:flex">
                                                <div className="md:w-48 h-32 md:h-auto overflow-hidden">
                                                    <img
                                                        src={news.image}
                                                        alt={news.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="p-6 flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-desa-green-600 transition-colors line-clamp-2">
                                                            {news.title}
                                                        </h3>
                                                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                                                            {news.excerpt}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-sm text-gray-500 flex items-center gap-1">
                                                            <span>📅</span>
                                                            {new Date(news.date).toLocaleDateString('id-ID', {
                                                                month: 'short',
                                                                day: 'numeric',
                                                                year: '2-digit'
                                                            })}
                                                        </div>
                                                        <button className="text-desa-green-600 hover:text-desa-green-700 text-sm font-medium hover:bg-desa-green-50 px-2 py-1 rounded transition-colors">
                                                            Baca →
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </article>
                                ))}
                            </div>

                            {/* Load More Button */}
                            <div className="text-center mt-8">
                                <button className="bg-white text-desa-green-600 border-2 border-desa-green-600 px-8 py-3 rounded-full font-medium hover:bg-desa-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Muat Berita Lainnya
                                </button>
                            </div>
                        </div>

                        {/* Pengumuman Sidebar */}
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                    📢 Pengumuman
                                </h3>
                            </div>

                            {/* Pengumuman Cards */}
                            <div className="space-y-4">
                                {announcements.map((announcement, index) => (
                                    <div
                                        key={announcement.id}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-desa-green-200 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-desa-green-100 text-desa-green-600 p-3 rounded-xl font-bold text-sm min-w-fit flex flex-col items-center">
                                                <span className="text-lg">
                                                    {new Date(announcement.date).getDate()}
                                                </span>
                                                <span className="text-xs uppercase">
                                                    {new Date(announcement.date).toLocaleDateString('id-ID', {
                                                        month: 'short'
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-desa-green-600 transition-colors line-clamp-2">
                                                    {announcement.title}
                                                </h4>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <span className="bg-gray-100 px-2 py-1 rounded-full">Pengumuman</span>
                                                    <span>•</span>
                                                    <span>Terbaru</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Action Buttons */}
                            <div className="mt-8 space-y-4">
                                <a
                                    href="/pengumuman"
                                    className="block w-full bg-desa-green-600 text-white text-center py-3 rounded-xl font-medium hover:bg-desa-green-700 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Lihat Semua Pengumuman
                                </a>
                                <a
                                    href="/kontak"
                                    className="block w-full border-2 border-desa-green-600 text-desa-green-600 text-center py-3 rounded-xl font-medium hover:bg-desa-green-50 transition-colors"
                                >
                                    💬 Hubungi Kami
                                </a>
                            </div>

                            {/* Info Box */}
                            <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">ℹ️</span>
                                    <h4 className="font-bold text-blue-800">Info Penting</h4>
                                </div>
                                <p className="text-blue-700 text-sm leading-relaxed">
                                    Untuk informasi layanan darurat atau pengaduan mendesak, hubungi kantor desa pada jam kerja atau melalui kontak darurat yang tersedia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-village-primary-100 text-village-primary-600 px-6 py-2 rounded-full font-medium mb-4">
                            🎯 Layanan Prima
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-desa-green-600 mb-4">Layanan Unggulan Desa</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Layanan administrasi desa yang mudah, cepat, dan terpercaya untuk memenuhi kebutuhan masyarakat
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100 hover:border-desa-green-200">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🆔</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3 group-hover:text-desa-green-700">e-KTP</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Pelayanan pembuatan dan perpanjangan e-KTP</p>
                            <button className="bg-desa-green-50 text-desa-green-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-desa-green-100 transition-colors">
                                Ajukan Sekarang
                            </button>
                        </div>
                        <div className="bg-white text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100 hover:border-desa-green-200">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">👨‍👩‍👧‍👦</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3 group-hover:text-desa-green-700">Kartu Keluarga</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Pengurusan Kartu Keluarga baru dan perubahan data</p>
                            <button className="bg-desa-green-50 text-desa-green-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-desa-green-100 transition-colors">
                                Ajukan Sekarang
                            </button>
                        </div>
                        <div className="bg-white text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100 hover:border-desa-green-200">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📄</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3 group-hover:text-desa-green-700">Surat Keterangan</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Berbagai surat keterangan untuk keperluan administrasi</p>
                            <button className="bg-desa-green-50 text-desa-green-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-desa-green-100 transition-colors">
                                Ajukan Sekarang
                            </button>
                        </div>
                        <div className="bg-white text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100 hover:border-desa-green-200">
                            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
                            <h3 className="text-xl font-semibold text-desa-green-600 mb-3 group-hover:text-desa-green-700">Pengaduan Online</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Sampaikan keluhan dan saran untuk perbaikan desa</p>
                            <button className="bg-desa-green-50 text-desa-green-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-desa-green-100 transition-colors">
                                Sampaikan Aspirasi
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;