# Setup WordPress Backend untuk Website Desa

## Langkah-langkah Setup WordPress

### 1. Download WordPress
1. Download WordPress terbaru dari https://wordpress.org/download/
2. Extract ke folder `wordpress-backend`

### 2. Database Setup
1. Buat database MySQL baru untuk WordPress
2. Catat kredensial database (nama DB, username, password)

### 3. Konfigurasi WordPress
1. Copy `wp-config-sample.php` menjadi `wp-config.php`
2. Edit `wp-config.php` dan isi:
   - Database credentials
   - Secret keys (generate dari https://api.wordpress.org/secret-key/1.1/salt/)
   - CORS settings untuk frontend

### 4. Install Plugin Custom
1. Copy folder `wp-content/plugins/desa-api-enhancements` ke WordPress installation
2. Aktivasi plugin melalui WordPress admin

### 5. Setup Content Types
Plugin akan otomatis membuat custom post types:
- **Posts** (Berita/Artikel)
- **Pengumuman** (Pengumuman resmi desa)
- **Aparatur** (Data aparatur desa)
- **Galeri** (Foto-foto kegiatan)
- **Layanan** (Layanan administrasi desa)

### 6. Konfigurasi API
WordPress REST API akan tersedia di:
- `/wp-json/wp/v2/` (Standard WordPress endpoints)
- `/wp-json/desa/v1/` (Custom endpoints untuk desa)

### Custom API Endpoints:
- `GET /wp-json/desa/v1/info` - Informasi umum desa
- `GET /wp-json/desa/v1/stats` - Statistik desa

### 7. CORS Configuration
Plugin sudah menghandle CORS untuk frontend React. Pastikan `CORS_ALLOW_ORIGIN` di `wp-config.php` sesuai dengan URL frontend development (default: http://localhost:5173)

### 8. Admin Dashboard
Setelah setup selesai, admin desa bisa mengakses:
- WordPress Admin Dashboard: `http://your-domain/wp-admin`
- Mengelola konten melalui interface yang user-friendly
- Upload foto, tulis artikel, kelola data aparatur, dll.

### 9. Recommended Plugins (Optional)
- **Advanced Custom Fields (ACF)** - untuk custom fields yang lebih advanced
- **Yoast SEO** - untuk SEO optimization
- **Wordfence Security** - untuk keamanan
- **UpdraftPlus** - untuk backup

### 10. Production Settings
Untuk production, edit `wp-config.php`:
```php
define( 'WP_DEBUG', false );
define( 'CORS_ALLOW_ORIGIN', 'https://your-frontend-domain.com' );
```