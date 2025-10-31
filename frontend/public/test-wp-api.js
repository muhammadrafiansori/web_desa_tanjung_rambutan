// Test API WordPress langsung di console browser
console.log('🧪 Testing WordPress API...');

const API_URL = 'http://192.168.1.93/New/web_desa_tanjung_rambutan/wordpress-backend';

// Test function
async function testWordPressAPI() {
    try {
        console.log('📡 Testing API connection...');

        // Test base API info
        const baseResponse = await fetch(`${API_URL}/?rest_route=/`);
        const baseData = await baseResponse.json();
        console.log('✅ Base API:', baseData);

        // Test posts
        const postsResponse = await fetch(`${API_URL}/?rest_route=/wp/v2/posts`);
        const postsData = await postsResponse.json();
        console.log('📰 Posts API:', postsData.length, 'posts found');

        if (postsData.length > 0) {
            console.log('📋 First post:', {
                id: postsData[0].id,
                title: postsData[0].title.rendered,
                date: postsData[0].date
            });
        }

        return { success: true, posts: postsData };

    } catch (error) {
        console.error('❌ API Test failed:', error);
        return { success: false, error: error.message };
    }
}

// Run test
testWordPressAPI().then(result => {
    console.log('🎯 Test result:', result);
});

// Also test if API URL is correct in environment
console.log('🔧 Environment API URL:', import.meta.env?.VITE_WP_API_URL || 'Not defined');