import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Berita = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const postsPerPage = 6;

    const navigate = useNavigate();

    useEffect(() => {
        loadPosts();
    }, [currentPage]);

    const loadPosts = async () => {
        setLoading(true);
        setError(null);

        try {
            console.log('🔄 Loading posts for page:', currentPage);
            const postsData = await api.getPosts(currentPage, postsPerPage);

            const processedPosts = postsData.map(post => ({
                id: post.id,
                title: post.title.rendered,
                excerpt: api.createExcerpt(post.content.rendered, 180),
                date: post.date,
                image: api.getFeaturedImageUrl(post) || `https://picsum.photos/400/250?random=${post.id}`,
                slug: post.slug,
                author: api.getAuthorName(post) || 'Admin Desa'
            }));

            setPosts(processedPosts);
            console.log('✅ Posts loaded:', processedPosts.length);

            // Calculate total pages (WordPress usually provides this in headers, but we'll estimate)
            setTotalPages(Math.ceil(50 / postsPerPage)); // Estimate, adjust as needed

        } catch (error) {
            console.error('❌ Error loading posts:', error);
            setError('Gagal memuat berita. Silakan coba lagi.');

            // Fallback posts
            setPosts([
                {
                    id: 1,
                    title: "Gotong Royong Membersihkan Saluran Air",
                    excerpt: "Warga Desa Tanjung Rambutan mengadakan kegiatan gotong royong untuk membersihkan saluran air di seluruh wilayah desa...",
                    date: "2024-10-25T08:00:00",
                    image: "https://picsum.photos/400/250?random=1",
                    slug: "gotong-royong-saluran-air",
                    author: "Admin Desa"
                },
                {
                    id: 2,
                    title: "Pembangunan Jalan Desa Tahap 2",
                    excerpt: "Program pembangunan jalan desa tahap kedua telah dimulai dan diperkirakan akan selesai dalam waktu 3 bulan ke depan...",
                    date: "2024-10-20T10:30:00",
                    image: "https://picsum.photos/400/250?random=2",
                    slug: "pembangunan-jalan-tahap-2",
                    author: "Admin Desa"
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handlePostClick = (post) => {
        navigate(`/berita/${post.slug}`, {
            state: { postId: post.id }
        });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="relative">
                        <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-4 border-gray-200 mx-auto mb-6"></div>
                        <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-4 border-desa-green-600 border-t-transparent absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-xl px-6 py-4 inline-block">
                        <p className="text-gray-700 font-medium text-sm sm:text-base">📰 Memuat berita...</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">Harap tunggu sebentar</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-desa-green-50 to-desa-green-100 
                                  text-desa-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold mb-4 sm:mb-6 
                                  shadow-md border border-desa-green-200">
                        <span className="text-base sm:text-lg">📰</span>
                        <span>Berita Desa</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                        Berita & Informasi
                        <span className="block text-desa-green-600 mt-2">Desa Tanjung Rambutan</span>
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg lg:text-xl">
                        Informasi terkini seputar kegiatan dan perkembangan Desa Tanjung Rambutan.
                        Tetap terhubung dengan berita dan program desa.
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                            onClick={() => handlePostClick(post)}
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span className="flex items-center gap-1">
                                        📅 {formatDate(post.date)}
                                    </span>
                                    <span className="mx-2">•</span>
                                    <span className="flex items-center gap-1">
                                        👤 {post.author}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-desa-green-600 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="mt-4 flex items-center text-desa-green-600 font-medium">
                                    <span>Baca Selengkapnya</span>
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg border transition-colors ${currentPage === 1
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-desa-green-50 hover:text-desa-green-600 border-gray-300'
                                }`}
                        >
                            ← Sebelumnya
                        </button>

                        <span className="px-4 py-2 text-gray-600">
                            Halaman {currentPage} dari {totalPages}
                        </span>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg border transition-colors ${currentPage === totalPages
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    : 'bg-white text-gray-700 hover:bg-desa-green-50 hover:text-desa-green-600 border-gray-300'
                                }`}
                        >
                            Selanjutnya →
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {posts.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📰</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Belum Ada Berita</h3>
                        <p className="text-gray-600">Berita akan ditampilkan di sini setelah dipublikasikan.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Berita;