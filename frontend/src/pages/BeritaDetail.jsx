import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';

const BeritaDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const postId = location.state?.postId;

    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadPostDetail();
        loadRelatedPosts();
    }, [slug, postId]);

    const loadPostDetail = async () => {
        setLoading(true);
        setError(null);

        try {
            console.log('🔄 Loading post detail for:', slug, 'ID:', postId);

            let postData;
            if (postId) {
                // Load by ID if available
                postData = await api.getPost(postId);
            } else {
                // Try to load by slug (fallback)
                postData = await api.getPost(slug);
            }

            const processedPost = {
                id: postData.id,
                title: postData.title.rendered,
                content: postData.content.rendered,
                date: postData.date,
                image: api.getFeaturedImageUrl(postData) || `https://picsum.photos/800/400?random=${postData.id}`,
                slug: postData.slug,
                author: api.getAuthorName(postData) || 'Admin Desa',
                excerpt: api.createExcerpt(postData.content.rendered, 200)
            };

            setPost(processedPost);
            console.log('✅ Post detail loaded:', processedPost);

        } catch (error) {
            console.error('❌ Error loading post detail:', error);
            setError('Berita tidak ditemukan atau terjadi kesalahan.');

            // Fallback post
            setPost({
                id: 1,
                title: "Berita Desa Tanjung Rambutan",
                content: `
                    <p>Desa Tanjung Rambutan terus mengalami perkembangan positif dalam berbagai aspek pembangunan. Berbagai program dan kegiatan telah dilaksanakan untuk meningkatkan kesejahteraan masyarakat.</p>
                    
                    <h3>Program Pembangunan Berkelanjutan</h3>
                    <p>Pemerintah desa berkomitmen untuk melaksanakan pembangunan yang berkelanjutan dan berpihak pada masyarakat. Program-program yang telah dan akan dilaksanakan meliputi:</p>
                    
                    <ul>
                        <li>Perbaikan infrastruktur jalan dan drainase</li>
                        <li>Pengembangan potensi ekonomi lokal</li>
                        <li>Peningkatan kualitas pelayanan publik</li>
                        <li>Program kesehatan masyarakat</li>
                    </ul>
                    
                    <p>Dengan dukungan seluruh masyarakat, Desa Tanjung Rambutan optimis dapat mencapai visi menjadi desa yang maju, mandiri, dan sejahtera.</p>
                `,
                date: "2024-10-31T08:00:00",
                image: "https://picsum.photos/800/400?random=1",
                slug: "berita-desa-tanjung-rambutan",
                author: "Admin Desa",
                excerpt: "Desa Tanjung Rambutan terus mengalami perkembangan positif dalam berbagai aspek pembangunan..."
            });
        } finally {
            setLoading(false);
        }
    };

    const loadRelatedPosts = async () => {
        try {
            const posts = await api.getPosts(1, 3);
            const processedPosts = posts
                .filter(p => p.id !== postId) // Exclude current post
                .slice(0, 3)
                .map(post => ({
                    id: post.id,
                    title: post.title.rendered,
                    excerpt: api.createExcerpt(post.content.rendered, 100),
                    date: post.date,
                    image: api.getFeaturedImageUrl(post) || `https://picsum.photos/300/200?random=${post.id}`,
                    slug: post.slug
                }));

            setRelatedPosts(processedPosts);
        } catch (error) {
            console.error('Error loading related posts:', error);
            // Use fallback related posts
            setRelatedPosts([
                {
                    id: 2,
                    title: "Gotong Royong Membersihkan Desa",
                    excerpt: "Kegiatan gotong royong rutin dilaksanakan setiap minggu untuk menjaga kebersihan lingkungan desa.",
                    date: "2024-10-25T08:00:00",
                    image: "https://picsum.photos/300/200?random=2",
                    slug: "gotong-royong-desa"
                }
            ]);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleRelatedPostClick = (relatedPost) => {
        navigate(`/berita/${relatedPost.slug}`, {
            state: { postId: relatedPost.id }
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
                        <p className="text-gray-700 font-medium text-sm sm:text-base">✨ Memuat berita...</p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">Harap tunggu sebentar</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error && !post) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
                <div className="max-w-md w-full">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center border border-gray-100">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-4xl sm:text-5xl">😕</span>
                        </div>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Berita Tidak Ditemukan
                        </h1>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                            {error}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={() => navigate('/berita')}
                                className="flex-1 bg-gradient-to-r from-desa-green-600 to-desa-green-700 text-white 
                                         px-6 py-3 rounded-xl hover:from-desa-green-700 hover:to-desa-green-800 
                                         transition-all duration-300 font-semibold text-sm sm:text-base
                                         shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform
                                         inline-flex items-center justify-center gap-2"
                            >
                                <span>←</span>
                                <span>Kembali ke Berita</span>
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="flex-1 bg-white text-gray-700 border-2 border-gray-200 
                                         px-6 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50
                                         transition-all duration-300 font-semibold text-sm sm:text-base
                                         shadow-md hover:shadow-lg hover:-translate-y-0.5 transform
                                         inline-flex items-center justify-center gap-2"
                            >
                                <span>🏠</span>
                                <span>Beranda</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {/* Breadcrumb */}
                <nav className="mb-6 sm:mb-8">
                    <div className="flex items-center text-xs sm:text-sm text-gray-500 bg-white rounded-full px-4 py-2 shadow-sm">
                        <button
                            onClick={() => navigate('/')}
                            className="hover:text-desa-green-600 transition-colors flex items-center gap-1"
                        >
                            <span className="text-sm">🏠</span>
                            <span className="hidden sm:inline">Beranda</span>
                        </button>
                        <span className="mx-2 text-gray-300">›</span>
                        <button
                            onClick={() => navigate('/berita')}
                            className="hover:text-desa-green-600 transition-colors"
                        >
                            Berita
                        </button>
                        <span className="mx-2 text-gray-300">›</span>
                        <span className="text-gray-700 font-medium truncate max-w-32 sm:max-w-none">
                            {post?.title}
                        </span>
                    </div>
                </nav>

                {/* Main Article */}
                <article className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden mb-8 sm:mb-12 border border-gray-100">
                    {/* Featured Image */}
                    <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden relative">
                        <img
                            src={post?.image}
                            alt={post?.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Article Content */}
                    <div className="p-4 sm:p-6 lg:p-10">
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5">
                                <span className="text-desa-green-600">📅</span>
                                <span className="font-medium">{formatDate(post?.date)}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5">
                                <span className="text-desa-green-600">👤</span>
                                <span className="font-medium">{post?.author}</span>
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
                            {post?.title}
                        </h1>

                        {/* Content */}
                        <div
                            className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none
                                       prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
                                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                                       prose-a:text-desa-green-600 prose-a:no-underline hover:prose-a:underline
                                       prose-strong:text-gray-900 prose-strong:font-semibold
                                       prose-ul:space-y-2 prose-ol:space-y-2
                                       prose-li:text-gray-700 prose-li:leading-relaxed
                                       prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                                       prose-blockquote:border-l-4 prose-blockquote:border-desa-green-500 
                                       prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6
                                       prose-code:bg-gray-100 prose-code:rounded prose-code:px-1 prose-code:py-0.5"
                            dangerouslySetInnerHTML={{ __html: post?.content }}
                        />
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                        <div className="flex items-center gap-3 mb-6 sm:mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-desa-green-500 to-desa-green-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl">📰</span>
                            </div>
                            <div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
                                    Berita Terkait
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">Artikel lain yang mungkin menarik</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <article
                                    key={relatedPost.id}
                                    className="group bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl 
                                             transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 
                                             hover:border-desa-green-200 hover:-translate-y-1"
                                    onClick={() => handleRelatedPostClick(relatedPost)}
                                >
                                    <div className="aspect-[4/3] overflow-hidden relative">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-4 sm:p-5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs text-desa-green-600 bg-desa-green-50 px-2 py-1 rounded-full font-medium">
                                                📅 {formatDate(relatedPost.date)}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-desa-green-600 transition-colors duration-300 text-sm sm:text-base leading-snug">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                                            {relatedPost.excerpt}
                                        </p>
                                        <div className="mt-4 flex items-center text-desa-green-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span>Baca selengkapnya</span>
                                            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back Button */}
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => navigate('/berita')}
                        className="w-full sm:w-auto bg-gradient-to-r from-desa-green-600 to-desa-green-700 text-white 
                                 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:from-desa-green-700 hover:to-desa-green-800 
                                 transition-all duration-300 inline-flex items-center justify-center gap-3 
                                 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base
                                 hover:-translate-y-0.5 transform"
                    >
                        <span className="text-lg">←</span>
                        <span>Kembali ke Daftar Berita</span>
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full sm:w-auto bg-white text-gray-700 border-2 border-gray-200 
                                 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:border-gray-300 hover:bg-gray-50
                                 transition-all duration-300 inline-flex items-center justify-center gap-3 
                                 shadow-md hover:shadow-lg font-semibold text-sm sm:text-base
                                 hover:-translate-y-0.5 transform"
                    >
                        <span className="text-lg">🏠</span>
                        <span>Ke Beranda</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BeritaDetail;