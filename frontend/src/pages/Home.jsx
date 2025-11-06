import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Home = () => {
    const navigate = useNavigate();
    // Initialize with static fallback data for faster loading
    const [latestNews, setLatestNews] = useState([
        {
            id: 1,
            title: "Website Desa Tanjung Rambutan Diluncurkan",
            excerpt: "Website resmi Desa Tanjung Rambutan kini telah diluncurkan untuk memberikan informasi terkini kepada masyarakat.",
            date: "2024-10-28",
            image: "/default-news.jpg",
            slug: "website-desa-diluncurkan"
        },
        {
            id: 2,
            title: "Program Pembangunan Infrastruktur Desa",
            excerpt: "Pembangunan jalan dan fasilitas umum terus dilakukan untuk meningkatkan kesejahteraan masyarakat.",
            date: "2024-10-25",
            image: "/default-news.jpg",
            slug: "program-pembangunan-infrastruktur"
        },
        {
            id: 3,
            title: "Kegiatan Posyandu Rutin Bulan Oktober",
            excerpt: "Posyandu rutin dilaksanakan setiap bulan untuk memantau kesehatan ibu dan anak.",
            date: "2024-10-20",
            image: "/default-news.jpg",
            slug: "kegiatan-posyandu-oktober"
        }
    ]);
    const [announcements, setAnnouncements] = useState([
        {
            id: 1,
            title: "Pengumuman Jadwal Pelayanan Administrasi",
            content: "Pelayanan administrasi desa buka setiap hari Senin-Jumat pukul 08.00-15.00 WIB.",
            date: "2024-10-28",
            urgent: true
        },
        {
            id: 2,
            title: "Himbauan Keamanan dan Ketertiban",
            content: "Masyarakat diimbau untuk selalu menjaga keamanan lingkungan dan melaporkan hal-hal mencurigakan.",
            date: "2024-10-25",
            urgent: false
        }
    ]);
    const [desaStats, setDesaStats] = useState({
        total_penduduk: 2847,
        total_kk: 892,
        laki_laki: 1456,
        perempuan: 1391,
        wilayah_rt: 8,
        wilayah_rw: 3
    });
    const [kataSambutan, setKataSambutan] = useState({
        id: 1,
        content: `<p>Assalamualaikum warahmatullahi wabarakatuh,</p>
                 <p>Selamat datang di website resmi Desa Tanjung Rambutan. Kami berkomitmen untuk memberikan pelayanan terbaik kepada masyarakat dan membangun desa yang maju, mandiri, dan sejahtera.</p>
                 <p>Melalui website ini, kami berharap dapat meningkatkan transparansi dan komunikasi dengan seluruh masyarakat desa. Mari bersama-sama membangun Tanjung Rambutan yang lebih baik.</p>
                 <p>Wassalamualaikum warahmatullahi wabarakatuh.</p>`,
        kepala_desa: 'H. Ahmad Rahman',
        jabatan: 'Kepala Desa Tanjung Rambutan',
        foto_kepala_desa: null,
        date: new Date().toISOString()
    });
    const [loading, setLoading] = useState(false); // Changed to false for immediate display
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load data in background without blocking UI
        loadHomeDataBackground();
    }, []);

    const loadHomeDataBackground = async () => {
        // Load data in background without showing loading states
        setError(null);

        try {
            console.log('🔄 Loading home data in background...');
            console.log('API_URL from env:', import.meta.env.VITE_WP_API_URL);

            // Load data parallel untuk performance yang lebih baik
            const [postsData, pengumumanData, statsData, kataSambutanData] = await Promise.allSettled([
                api.getPosts(1, 3), // Get latest 3 posts
                api.getPengumuman(3), // Get latest 3 announcements
                api.getDesaStats(),
                api.getKataSambutan() // Get kata sambutan kepala desa
            ]);

            // Handle posts data
            console.log('📰 Posts API result:', postsData);
            if (postsData.status === 'fulfilled') {
                console.log('✅ Posts API success:', postsData.value.length, 'posts found');
                const posts = postsData.value.map(post => {
                    const featuredImageUrl = api.getFeaturedImageUrl(post);
                    console.log('🖼️ Post image debug:', {
                        postId: post.id,
                        title: post.title.rendered,
                        hasFeaturedMedia: !!post._embedded?.['wp:featuredmedia'],
                        featuredImageUrl: featuredImageUrl,
                        fallbackUsed: !featuredImageUrl
                    });

                    return {
                        id: post.id,
                        title: post.title.rendered,
                        excerpt: api.createExcerpt(post.content.rendered, 120),
                        date: post.date,
                        image: featuredImageUrl || `https://picsum.photos/800/400?random=${post.id}`,
                        slug: post.slug
                    };
                });
                setLatestNews(posts);
                console.log('📋 Processed posts:', posts);
            } else {
                console.log('❌ Posts API failed, keeping initial data:', postsData.reason);
            }

            // Handle announcements data - only update if successful
            console.log('📢 Pengumuman API result:', pengumumanData);
            if (pengumumanData.status === 'fulfilled') {
                const announcements = pengumumanData.value.map(announcement => ({
                    id: announcement.id,
                    title: announcement.title.rendered,
                    content: announcement.content?.rendered || announcement.excerpt?.rendered || '',
                    date: announcement.date,
                    slug: announcement.slug,
                    urgent: false
                }));
                setAnnouncements(announcements);
                console.log('✅ Pengumuman API success:', announcements);
            } else {
                console.log('❌ Pengumuman API failed, keeping initial data:', pengumumanData.reason);
            }

            // Handle stats data - only update if successful
            console.log('📊 Stats API result:', statsData);
            if (statsData.status === 'fulfilled') {
                setDesaStats(statsData.value);
                console.log('✅ Stats API success:', statsData.value);
            } else {
                console.log('❌ Stats API failed, keeping initial data:', statsData.reason);
            }

            // Handle kata sambutan data - only update if successful
            console.log('💬 Kata Sambutan API result:', kataSambutanData);
            if (kataSambutanData.status === 'fulfilled' && kataSambutanData.value?.success && kataSambutanData.value.data) {
                console.log('✅ Kata Sambutan API success:', kataSambutanData.value.data);
                const sambutan = kataSambutanData.value.data;
                setKataSambutan({
                    id: sambutan.id,
                    content: sambutan.content,
                    kepala_desa: sambutan.nama_kepala_desa || 'Kepala Desa Tanjung Rambutan',
                    jabatan: sambutan.jabatan || 'Kepala Desa',
                    foto_kepala_desa: sambutan.foto_kepala_desa?.url || sambutan.foto_kepala_desa?.large || null,
                    date: sambutan.date
                });
            } else {
                console.log('❌ Kata Sambutan API failed, keeping initial data:', kataSambutanData.reason);
            }

        } catch (error) {
            console.error('Error loading home data in background:', error);
            setError('Koneksi terbatas, menampilkan data lokal.');
        }
    };

    const handleNewsClick = (news) => {
        navigate(`/berita/${news.slug}`, {
            state: { postId: news.id }
        });
    };

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
                            href="/galeri"
                            className="border-2 border-white text-white hover:bg-white hover:text-desa-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            Galeri Desa
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

            {/* Kata Sambutan Kepala Desa Section */}
            {kataSambutan && (
                <section className="bg-gradient-to-br from-desa-green-50 to-white py-16 sm:py-20 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-desa-green-300 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-40 h-40 bg-desa-green-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                                Sambutan
                                <span className="block text-desa-green-600 mt-2">Kepala Desa</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            {/* Foto Kepala Desa */}
                            <div className="lg:col-span-4 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-desa-green-600 to-desa-green-700 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
                                    <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                                        <div className="aspect-[4/5] w-64 sm:w-80 overflow-hidden rounded-2xl">
                                            {kataSambutan.foto_kepala_desa ? (
                                                <img
                                                    src={kataSambutan.foto_kepala_desa}
                                                    alt={kataSambutan.kepala_desa}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-desa-green-100 to-desa-green-200 flex items-center justify-center">
                                                    <div className="text-center text-desa-green-600">
                                                        <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                        </svg>
                                                        <p className="text-sm font-medium">Foto Kepala Desa</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Info Kepala Desa */}
                                        <div className="text-center mt-6">
                                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                                {kataSambutan.kepala_desa}
                                            </h3>
                                            <p className="text-desa-green-600 font-semibold text-sm sm:text-base">
                                                {kataSambutan.jabatan}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Kata Sambutan Content */}
                            <div className="lg:col-span-8">
                                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 lg:p-12">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 bg-desa-green-600 rounded-full flex items-center justify-center">
                                                <span className="text-white text-lg">"</span>
                                            </div>
                                            <div className="h-px flex-1 bg-gradient-to-r from-desa-green-200 to-transparent"></div>
                                        </div>
                                    </div>

                                    <div
                                        className="prose prose-lg max-w-none text-gray-700 leading-relaxed
                                                 prose-p:mb-4 prose-p:text-gray-700 prose-p:text-base sm:prose-p:text-lg
                                                 prose-strong:text-gray-900 prose-strong:font-semibold
                                                 [&>p:first-child]:text-xl [&>p:first-child]:font-medium [&>p:first-child]:text-desa-green-700
                                                 [&>p:last-child]:font-medium [&>p:last-child]:text-desa-green-600"
                                        dangerouslySetInnerHTML={{ __html: kataSambutan.content }}
                                    />

                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                                <span className="w-2 h-2 bg-desa-green-500 rounded-full"></span>
                                                <span>Diperbarui {new Date(kataSambutan.date).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-desa-green-600">
                                                <span className="text-sm font-medium">Hormat kami</span>
                                                <div className="w-6 h-px bg-desa-green-400"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

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
                                        href="/galeri"
                                        className="border-2 border-white text-white hover:bg-white hover:text-desa-green-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-center"
                                    >
                                        Lihat Galeri
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

            {/* Lokasi & Kontak Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Lokasi & Kontak
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kunjungi kantor desa kami untuk berbagai kebutuhan layanan administrasi
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid lg:grid-cols-5">
                            {/* Contact Information */}
                            <div className="lg:col-span-2 p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>

                                <div className="space-y-6">
                                    {/* Address */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Alamat</h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            Jl. Raya Tanjung Rambutan<br />
                                            Kec. Kampar Kiri, Kab. Kampar<br />
                                            Provinsi Riau 28461
                                        </p>
                                    </div>

                                    {/* Contact */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3">Hubungi Kami</h4>
                                        <div className="space-y-2">
                                            <a href="tel:+62761123456" className="flex items-center text-gray-600 hover:text-desa-green-600 transition-colors">
                                                <span className="w-5 h-5 mr-3 text-gray-400">📞</span>
                                                (0761) 123-456
                                            </a>
                                            <a href="https://wa.me/628123456789" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                                                <span className="w-5 h-5 mr-3 text-gray-400">💬</span>
                                                +62 812-3456-789
                                            </a>
                                            <a href="mailto:info@desatanjungrambutan.id" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                                                <span className="w-5 h-5 mr-3 text-gray-400">✉️</span>
                                                info@desatanjungrambutan.id
                                            </a>
                                        </div>
                                    </div>

                                    {/* Operating Hours */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3">Jam Operasional</h4>
                                        <div className="text-gray-600 space-y-1 text-sm">
                                            <div className="flex justify-between">
                                                <span>Senin - Jumat</span>
                                                <span>08:00 - 16:00</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sabtu</span>
                                                <span>08:00 - 12:00</span>
                                            </div>
                                            <div className="flex justify-between text-red-600">
                                                <span>Minggu & Libur</span>
                                                <span>Tutup</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-4 space-y-3">
                                        <a
                                            href="https://maps.google.com/maps?ll=0.310596,101.083200&z=13&t=m&hl=id&gl=ID&mapclient=embed&q=Tanjung+Rambutan+Kampar+Riau"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full bg-desa-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-desa-green-700 transition-colors"
                                        >
                                            Buka di Google Maps
                                        </a>
                                        <a
                                            href="https://wa.me/628123456789"
                                            target="_blank"
                                            className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                                        >
                                            Chat WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="lg:col-span-3">
                                <div className="h-96 lg:h-full min-h-[400px]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92511.3954185628!2d101.08320040086461!3d0.31059586184797294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d513456a6bab0d%3A0xdd8fbd24f2b82583!2sTj.%20Rambutan%2C%20Kec.%20Kampar%2C%20Kabupaten%20Kampar%2C%20Riau!5e1!3m2!1sid!2sid!4v1761908542191!5m2!1sid!2sid"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Lokasi Desa Tanjung Rambutan, Kec. Kampar, Kabupaten Kampar, Riau">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-desa-green-600 mb-1">08:00</div>
                            <div className="text-sm text-gray-600">Jam Buka Layanan</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-desa-green-600 mb-1">24/7</div>
                            <div className="text-sm text-gray-600">WhatsApp Support</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="text-2xl font-bold text-desa-green-600 mb-1">Free</div>
                            <div className="text-sm text-gray-600">Parkir Tersedia</div>
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
                                <button
                                    onClick={() => navigate('/berita')}
                                    className="bg-desa-green-600 text-white px-6 py-2 rounded-full hover:bg-desa-green-700 transition-colors font-medium text-sm shadow-lg hover:shadow-xl"
                                >
                                    Lihat Semua Berita →
                                </button>
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
                                                        <button
                                                            onClick={() => handleNewsClick(news)}
                                                            className="text-desa-green-600 hover:text-desa-green-700 font-medium text-sm hover:bg-desa-green-50 px-3 py-1 rounded-full transition-colors"
                                                        >
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
                                                        <h3
                                                            className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-desa-green-600 transition-colors line-clamp-2 cursor-pointer"
                                                            onClick={() => handleNewsClick(news)}
                                                        >
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
                                                        <button
                                                            onClick={() => handleNewsClick(news)}
                                                            className="text-desa-green-600 hover:text-desa-green-700 text-sm font-medium hover:bg-desa-green-50 px-2 py-1 rounded transition-colors"
                                                        >
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
                                <button
                                    onClick={() => navigate('/berita')}
                                    className="bg-white text-desa-green-600 border-2 border-desa-green-600 px-8 py-3 rounded-full font-medium hover:bg-desa-green-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
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


        </div>
    );
};

export default Home;