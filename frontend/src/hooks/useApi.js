import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Custom hook untuk fetch data dari WordPress API
 * @param {Function} apiCall - Function yang akan dipanggil untuk fetch data
 * @param {Array} dependencies - Dependencies untuk useEffect
 * @param {*} initialData - Initial data sebelum fetch selesai
 */
export const useApi = (apiCall, dependencies = [], initialData = null) => {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await apiCall();

                if (mounted) {
                    setData(result);
                }
            } catch (err) {
                if (mounted) {
                    setError(err);
                    console.error('API Error:', err);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, dependencies);

    const refetch = () => {
        setLoading(true);
        setError(null);
        return apiCall()
            .then(result => {
                setData(result);
                return result;
            })
            .catch(err => {
                setError(err);
                throw err;
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
};

/**
 * Hook khusus untuk posts/berita
 */
export const usePosts = (page = 1, perPage = 10, search = '') => {
    return useApi(
        () => api.getPosts(page, perPage, search),
        [page, perPage, search],
        []
    );
};

/**
 * Hook khusus untuk single post
 */
export const usePost = (id) => {
    return useApi(
        () => api.getPost(id),
        [id],
        null
    );
};

/**
 * Hook khusus untuk pengumuman
 */
export const usePengumuman = (limit = 5) => {
    return useApi(
        () => api.getPengumuman(limit),
        [limit],
        []
    );
};

/**
 * Hook khusus untuk aparatur
 */
export const useAparatur = () => {
    return useApi(
        () => api.getAparatur(),
        [],
        []
    );
};

/**
 * Hook khusus untuk galeri
 */
export const useGaleri = (limit = 12) => {
    return useApi(
        () => api.getGaleri(limit),
        [limit],
        []
    );
};

/**
 * Hook khusus untuk layanan
 */
export const useLayanan = () => {
    return useApi(
        () => api.getLayanan(),
        [],
        []
    );
};

/**
 * Hook khusus untuk kata sambutan
 */
export const useKataSambutan = () => {
    return useApi(
        () => api.getKataSambutan(),
        [],
        []
    );
};

/**
 * Hook khusus untuk informasi desa
 */
export const useDesaInfo = () => {
    return useApi(
        () => api.getDesaInfo(),
        [],
        {}
    );
};

/**
 * Hook khusus untuk statistik desa
 */
export const useDesaStats = () => {
    return useApi(
        () => api.getDesaStats(),
        [],
        {}
    );
};

/**
 * Hook khusus untuk pages
 */
export const usePages = () => {
    return useApi(
        () => api.getPages(),
        [],
        []
    );
};

/**
 * Hook khusus untuk single page
 */
export const usePage = (id) => {
    return useApi(
        () => api.getPage(id),
        [id],
        null
    );
};

/**
 * Hook untuk search
 */
export const useSearch = (query, type = '') => {
    return useApi(
        () => api.search(query, type),
        [query, type],
        []
    );
};