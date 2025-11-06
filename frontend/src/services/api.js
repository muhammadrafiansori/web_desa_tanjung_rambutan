import axios from 'axios';

// Base URL untuk WordPress API
// Untuk development, sesuaikan dengan URL WordPress lokal Anda
// Untuk production, ganti dengan URL WordPress production
const API_BASE_URL = import.meta.env.VITE_WP_API_URL || 'http://localhost:8000';

// Buat instance axios dengan konfigurasi default
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Transform URL untuk menggunakan query parameter format
const transformUrl = (endpoint) => {
    return `?rest_route=${endpoint}`;
};

// Interceptor untuk handle response dan error
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

// WordPress API Service Class
class WordPressAPI {

    // ===== POSTS (Berita) =====

    /**
     * Get all posts with pagination
     * @param {number} page - Page number
     * @param {number} perPage - Posts per page
     * @param {string} search - Search term
     */
    async getPosts(page = 1, perPage = 10, search = '') {
        const params = {
            page,
            per_page: perPage,
            _embed: true, // Include featured images and author info
        };

        if (search) {
            params.search = search;
        }

        try {
            const response = await apiClient.get(transformUrl('/wp/v2/posts'), { params });
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    /**
     * Get single post by ID or slug
     * @param {string|number} identifier - Post ID or slug
     */
    async getPost(identifier) {
        try {
            const response = await apiClient.get(transformUrl(`/wp/v2/posts/${identifier}`), {
                params: { _embed: true }
            });
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // ===== PAGES =====

    /**
     * Get all pages
     */
    async getPages() {
        try {
            const response = await apiClient.get(transformUrl('/wp/v2/pages'), {
                params: { _embed: true }
            });
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    /**
     * Get single page by ID or slug
     * @param {string|number} identifier - Page ID or slug
     */
    async getPage(identifier) {
        try {
            const response = await apiClient.get(`/wp/v2/pages/${identifier}?_embed=true`);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // ===== CUSTOM POST TYPES =====

    /**
     * Get pengumuman (announcements)
     * @param {number} limit - Number of announcements to fetch
     */
    async getPengumuman(limit = 5) {
        try {
            const response = await apiClient.get(transformUrl('/wp/v2/pengumuman'), {
                params: { per_page: limit, _embed: true }
            });
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    /**
     * Get aparatur desa (village officials)
     */
    async getAparatur() {
        try {
            const response = await apiClient.get('/wp/v2/aparatur?_embed=true');
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    /**
     * Get galeri (gallery)
     * @param {number} limit - Number of gallery items to fetch
     */
    async getGaleri(limit = 12) {
        try {
            const response = await apiClient.get(`/wp/v2/galeri?per_page=${limit}&_embed=true`);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    /**
     * Get layanan desa (village services)
     */
    async getLayanan() {
        try {
            const response = await apiClient.get(transformUrl('/wp/v2/layanan'), {
                params: { _embed: true }
            });
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    /**
     * Get kata sambutan (welcome messages)
     * Menggunakan custom post type kata_sambutan dari plugin WordPress
     */
    async getKataSambutan() {
        try {
            console.log('🔄 Fetching kata sambutan...');
            console.log('API Base URL:', API_BASE_URL);
            console.log('Transform URL result:', transformUrl('/wp/v2/kata_sambutan'));

            const response = await apiClient.get(transformUrl('/wp/v2/kata_sambutan'), {
                params: {
                    per_page: 1,
                    status: 'publish',
                    _embed: true
                }
            });

            console.log('✅ Raw kata sambutan response:', response);

            // Response sudah diproses oleh interceptor, jadi langsung array
            if (response && response.length > 0) {
                const data = response[0];
                console.log('📝 Processing kata sambutan data:', data);

                const result = {
                    success: true,
                    data: {
                        id: data.id,
                        title: data.title?.rendered || '',
                        content: data.content?.rendered || '',
                        date: data.date,
                        // Meta fields dari plugin desa-api-enhancements
                        nama_kepala_desa: data.kata_sambutan_meta?.nama_kepala_desa || '',
                        jabatan: data.kata_sambutan_meta?.jabatan || 'Kepala Desa',
                        foto_kepala_desa: data.kata_sambutan_meta?.foto_kepala_desa || null
                    }
                };

                console.log('✅ Processed kata sambutan:', result);
                return result;
            }

            console.log('❌ No kata sambutan data found');
            return { success: false, data: null };
        } catch (error) {
            console.error('❌ Error fetching kata sambutan:', error);
            console.error('Error details:', {
                message: error.message,
                status: error.response?.status,
                statusText: error.response?.statusText,
                url: error.config?.url
            });
            throw this.handleError(error);
        }
    }

    // ===== CUSTOM ENDPOINTS =====

    /**
     * Get desa information from custom endpoint
     */
    async getDesaInfo() {
        try {
            const response = await apiClient.get('/desa/v1/info');
            return response;
        } catch (error) {
            // Fallback data jika API belum tersedia
            console.warn('Custom API not available, using fallback data');
            return {
                nama_desa: 'Desa Tanjung Rambutan',
                alamat: 'Jl. Raya Desa Tanjung Rambutan, Kec. Kampar Kiri',
                telepon: '(0761) 123456',
                email: 'admin@tanjungrambutan-desa.id',
                website: 'https://tanjungrambutan-desa.id',
                kepala_desa: 'Nama Kepala Desa',
                visi: 'Terwujudnya Desa Tanjung Rambutan yang sejahtera, mandiri, dan berbudaya',
                misi: 'Meningkatkan pelayanan kepada masyarakat dan pembangunan berkelanjutan',
                sejarah: 'Sejarah singkat Desa Tanjung Rambutan...'
            };
        }
    }

    /**
     * Get desa statistics from custom endpoint
     */
    async getDesaStats() {
        try {
            const response = await apiClient.get(transformUrl('/desa/v1/stats'));
            return response;
        } catch (error) {
            // Fallback data jika API belum tersedia
            console.warn('Custom API not available, using fallback data');
            return {
                jumlah_penduduk: 2456,
                jumlah_kk: 678,
                luas_wilayah: 15.8,
                jumlah_rt: 12,
                jumlah_rw: 4
            };
        }
    }

    // ===== MEDIA =====

    /**
     * Get media/attachment by ID
     * @param {number} mediaId - Media ID
     */
    async getMedia(mediaId) {
        try {
            const response = await apiClient.get(`/wp/v2/media/${mediaId}`);
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // ===== CATEGORIES & TAGS =====

    /**
     * Get all categories
     */
    async getCategories() {
        try {
            const response = await apiClient.get('/wp/v2/categories');
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    /**
     * Get all tags
     */
    async getTags() {
        try {
            const response = await apiClient.get('/wp/v2/tags');
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // ===== SEARCH =====

    /**
     * Search across all content
     * @param {string} query - Search query
     * @param {string} type - Content type (posts, pages, etc.)
     */
    async search(query, type = '') {
        const params = { search: query };

        if (type) {
            params.type = type;
        }

        try {
            const response = await apiClient.get('/wp/v2/search', { params });
            return response;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    // ===== UTILITY METHODS =====

    /**
     * Handle API errors
     * @param {Error} error - Error object
     */
    handleError(error) {
        if (error.response) {
            // Server responded with error status
            const { status, data } = error.response;
            return {
                status,
                message: data.message || 'Server error occurred',
                code: data.code || 'server_error'
            };
        } else if (error.request) {
            // Network error
            return {
                status: 0,
                message: 'Network error - please check your connection',
                code: 'network_error'
            };
        } else {
            // Other error
            return {
                status: 0,
                message: error.message || 'Unknown error occurred',
                code: 'unknown_error'
            };
        }
    }

    /**
     * Extract featured image URL from post/page data
     * @param {Object} post - Post/page object with _embedded data
     */
    getFeaturedImageUrl(post, size = 'medium') {
        try {
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
                const media = post._embedded['wp:featuredmedia'][0];
                return media.media_details.sizes[size]?.source_url || media.source_url;
            }
            return null;
        } catch (error) {
            return null;
        }
    }

    /**
     * Extract author name from post data
     * @param {Object} post - Post object with _embedded data
     */
    getAuthorName(post) {
        try {
            if (post._embedded && post._embedded.author && post._embedded.author[0]) {
                return post._embedded.author[0].name;
            }
            return 'Unknown Author';
        } catch (error) {
            return 'Unknown Author';
        }
    }

    /**
     * Strip HTML tags from content
     * @param {string} html - HTML string
     */
    stripHtml(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    }

    /**
     * Create excerpt from content
     * @param {string} content - Content string
     * @param {number} length - Excerpt length
     */
    createExcerpt(content, length = 150) {
        const text = this.stripHtml(content);
        return text.length > length ? text.substring(0, length) + '...' : text;
    }

    // ===== GALLERY =====

    /**
     * Get gallery photos from WordPress media library
     * @param {string} category - Photo category filter
     * @param {number} perPage - Photos per page
     */
    async getGalleryPhotos(category = '', perPage = 50) {
        try {
            const params = {
                per_page: perPage,
                media_type: 'image',
                _embed: true
            };

            // If category filter is provided, add to params
            if (category && category !== 'semua') {
                // Assuming we use tags or categories to organize gallery photos
                params.tags = category;
            }

            const response = await apiClient.get(transformUrl('/wp/v2/media'), { params });

            // Transform WordPress media response to gallery format
            return response.map(media => ({
                id: media.id,
                title: media.title.rendered || media.alt_text || 'Untitled',
                category: this.extractCategoryFromMedia(media),
                image: media.source_url,
                thumbnail: media.media_details?.sizes?.medium?.source_url || media.source_url,
                description: media.description.rendered || media.alt_text || '',
                date: media.date,
                photographer: media.author_name || 'Tim KKN Desa Tanjung Rambutan',
                alt_text: media.alt_text || ''
            }));

        } catch (error) {
            console.error('Error fetching gallery photos:', error);
            throw error;
        }
    }

    /**
     * Get single photo details
     * @param {number} photoId - Photo ID
     */
    async getPhotoById(photoId) {
        try {
            const response = await apiClient.get(transformUrl(`/wp/v2/media/${photoId}`), {
                params: { _embed: true }
            });

            return {
                id: response.id,
                title: response.title.rendered || response.alt_text || 'Untitled',
                category: this.extractCategoryFromMedia(response),
                image: response.source_url,
                description: response.description.rendered || response.alt_text || '',
                date: response.date,
                photographer: response.author_name || 'Tim KKN Desa Tanjung Rambutan',
                alt_text: response.alt_text || '',
                metadata: response.media_details || {}
            };

        } catch (error) {
            console.error('Error fetching photo details:', error);
            throw error;
        }
    }

    /**
     * Upload photo to gallery
     * @param {File} file - Photo file
     * @param {Object} metadata - Photo metadata (title, category, description)
     */
    async uploadPhoto(file, metadata = {}) {
        try {
            const formData = new FormData();
            formData.append('file', file);

            if (metadata.title) formData.append('title', metadata.title);
            if (metadata.alt_text) formData.append('alt_text', metadata.alt_text);
            if (metadata.description) formData.append('description', metadata.description);
            if (metadata.caption) formData.append('caption', metadata.caption);

            const response = await apiClient.post(transformUrl('/wp/v2/media'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            return response;

        } catch (error) {
            console.error('Error uploading photo:', error);
            throw error;
        }
    }

    /**
     * Extract category from media object
     * @param {Object} media - WordPress media object
     */
    extractCategoryFromMedia(media) {
        // Try to extract category from filename or metadata
        const filename = media.slug || media.title?.rendered || '';

        if (filename.includes('kegiatan')) return 'kegiatan';
        if (filename.includes('pemandangan')) return 'pemandangan';
        if (filename.includes('kantor')) return 'kantor';

        // Check media details for category info
        if (media.media_details?.meta?.category) {
            return media.media_details.meta.category;
        }

        // Default category
        return 'pemandangan';
    }

    /**
     * Get gallery statistics
     */
    async getGalleryStats() {
        try {
            const photos = await this.getGalleryPhotos();

            const stats = {
                total: photos.length,
                kegiatan: photos.filter(p => p.category === 'kegiatan').length,
                pemandangan: photos.filter(p => p.category === 'pemandangan').length,
                kantor: photos.filter(p => p.category === 'kantor').length
            };

            return stats;

        } catch (error) {
            console.error('Error fetching gallery stats:', error);
            return {
                total: 0,
                kegiatan: 0,
                pemandangan: 0,
                kantor: 0
            };
        }
    }
}

// Export singleton instance
export default new WordPressAPI();