# Website Desa Tanjung Rambutan

Website resmi Desa Tanjung Rambutan yang dibangun dengan arsitektur **Headless WordPress** sebagai CMS backend dan **React.js** sebagai frontend modern.

## 🏗️ Arsitektur

```
├── Frontend (React.js + Vite)
│   ├── Modern UI/UX
│   ├── Responsive Design
│   ├── Fast Loading (SPA)
│   └── SEO Optimized
│
└── Backend (WordPress Headless CMS)
    ├── Admin-friendly Dashboard
    ├── Content Management
    ├── REST API
    └── Media Management
```

## 🚀 Fitur

### Frontend Features
- **Responsive Design** - Mobile-first approach
- **Fast Loading** - Single Page Application (SPA)
- **Modern UI** - Clean dan user-friendly interface
- **SEO Friendly** - Optimized untuk search engines

### Backend Features  
- **User-friendly CMS** - WordPress dashboard yang mudah digunakan
- **Custom Post Types** - Pengumuman, Aparatur, Galeri, Layanan
- **REST API** - WordPress REST API + Custom endpoints
- **Media Management** - Upload dan manage foto/dokumen

### Content Management
- ✅ **Berita & Artikel** - Posting berita terkini desa
- ✅ **Pengumuman** - Pengumuman resmi pemerintah desa
- ✅ **Profil Desa** - Sejarah, visi-misi, geografis
- ✅ **Aparatur Desa** - Data dan foto aparatur desa
- ✅ **Galeri Foto** - Dokumentasi kegiatan desa
- ✅ **Layanan Desa** - Informasi layanan administrasi
- ✅ **Kontak** - Informasi kontak dan lokasi

## 📋 Prasyarat

### Development
- **Node.js** 18+ 
- **npm** atau **yarn**
- **Git**

### WordPress Backend
- **PHP** 7.4+
- **MySQL** 5.7+ atau **MariaDB** 10.2+
- **Apache** atau **Nginx**
- **WordPress** 6.0+

## 🛠️ Instalasi & Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-username/web-desa-tanjungrambutan.git
cd web-desa-tanjungrambutan
```

### 2. Setup Frontend (React)
```bash
cd frontend
npm install
```

#### Environment Configuration ⚠️ IMPORTANT
```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local dan pilih salah satu konfigurasi:
```

**Opsi 1: Vite Proxy (Recommended untuk development)**
```bash
VITE_WP_API_URL=/wp-api
```

**Opsi 2: Direct URL (Ganti dengan IP WordPress server)**
```bash
VITE_WP_API_URL=http://192.168.1.93/New/web_desa_tanjung_rambutan/wordpress-backend
```

**Opsi 3: Local Development**
```bash
VITE_WP_API_URL=http://localhost:8000
```

📖 **Panduan lengkap**: Lihat `FRONTEND_SETUP_GUIDE.md`

#### Jalankan Development Server
```bash
npm run dev
```
Frontend akan berjalan di `http://localhost:5173`

### 3. Setup WordPress Backend

#### Install WordPress
1. Download WordPress terbaru dari https://wordpress.org/download/
2. Extract ke folder `wordpress-backend`
3. Buat database MySQL baru
4. Setup `wp-config.php` (gunakan `wp-config-sample.php` sebagai template)

#### Konfigurasi WordPress
```php
// wp-config.php - tambahkan konfigurasi CORS
define( 'CORS_ALLOW_ORIGIN', 'http://localhost:5173' ); 
define( 'WP_REST_ALLOW_ANONYMOUS_COMMENTS', true );
```

#### Install Plugin Custom
1. Copy folder `wordpress-backend/wp-content/plugins/desa-api-enhancements` ke WordPress installation
2. Aktivasi plugin melalui WordPress admin dashboard
3. Plugin akan otomatis membuat custom post types

#### Akses WordPress Admin
- URL: `http://localhost/wordpress/wp-admin`
- Login dengan credentials yang dibuat saat instalasi

## 📚 Struktur Project

```
Web_Desa_TanjungRambutan/
├── frontend/                          # React Frontend
│   ├── public/                        # Static files
│   ├── src/
│   │   ├── components/               # Reusable components
│   │   │   ├── Header.jsx            # Header navigation
│   │   │   └── Footer.jsx            # Footer
│   │   ├── pages/                    # Page components
│   │   │   └── Home.jsx              # Homepage
│   │   ├── services/                 # API services
│   │   │   └── api.js                # WordPress API service
│   │   ├── hooks/                    # Custom React hooks
│   │   │   └── useApi.js             # API hooks
│   │   └── styles/                   # CSS files
│   ├── .env.example                  # Environment variables template
│   └── package.json                  # Dependencies & scripts
│
├── wordpress-backend/                 # WordPress Backend
│   ├── wp-content/
│   │   └── plugins/
│   │       └── desa-api-enhancements/ # Custom plugin
│   ├── wp-config-sample.php          # WordPress config template
│   └── README.md                     # WordPress setup guide
│
└── docs/                             # Documentation
    ├── deployment.md                 # Deployment guide
    └── api-documentation.md          # API docs
```

## 🔧 Development

### Available Scripts (Frontend)
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### WordPress Custom Post Types
Plugin otomatis membuat custom post types:

1. **Posts** (Berita) - `wp/v2/posts`
2. **Pages** (Halaman) - `wp/v2/pages`
3. **Pengumuman** - `wp/v2/pengumuman`
4. **Aparatur** - `wp/v2/aparatur`  
5. **Galeri** - `wp/v2/galeri`
6. **Layanan** - `wp/v2/layanan`

### Custom API Endpoints
- `GET /wp-json/desa/v1/info` - Informasi desa
- `GET /wp-json/desa/v1/stats` - Statistik desa

## 🌐 Deployment

### Frontend Deployment
```bash
# Build production
cd frontend
npm run build

# Upload dist/ folder ke hosting
# Configure web server untuk SPA routing
```

### WordPress Deployment  
1. Upload WordPress files ke hosting
2. Import database
3. Update `wp-config.php` dengan credentials production
4. Update CORS settings untuk domain production

### Hosting Recommendations
- **Frontend**: Netlify, Vercel, GitHub Pages
- **WordPress**: Shared hosting, VPS, atau WordPress hosting
- **Domain**: .desa.id (khusus untuk website desa)

## 🔒 Keamanan

### Frontend
- Environment variables untuk sensitive data
- API error handling
- Input validation

### WordPress
- Regular updates WordPress core & plugins
- Strong passwords
- SSL certificate
- Backup reguler
- Security plugins (Wordfence, etc.)

## 📖 Panduan Admin

### Untuk Admin Desa
1. **Login WordPress**: `https://domain-anda.com/wp-admin`
2. **Posting Berita**: Posts → Add New
3. **Tambah Pengumuman**: Pengumuman → Add New  
4. **Update Aparatur**: Aparatur → Add New
5. **Upload Foto**: Galeri → Add New
6. **Kelola Layanan**: Layanan → Add New

### Tips Content Management
- Upload gambar dengan resolusi optimal (max 1MB)
- Gunakan featured image untuk thumbnail
- Tulis excerpt yang menarik
- Kategorikan content dengan benar

## 🐛 Troubleshooting

### Common Issues

**CORS Error**
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```
**Solution**: Pastikan `CORS_ALLOW_ORIGIN` di `wp-config.php` sesuai dengan URL frontend

**API Not Found**
```
404 Not Found - wp-json/desa/v1/info
```
**Solution**: Aktivasi plugin "Desa API Enhancements" di WordPress admin

**Build Error** 
```
Module not found: Can't resolve './services/api'
```
**Solution**: Pastikan file `src/services/api.js` ada dan path benar

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

Distributed under MIT License. See `LICENSE` for more information.

## 👥 Tim Pengembang

- **Frontend Developer**: [Nama]
- **WordPress Developer**: [Nama]  
- **UI/UX Designer**: [Nama]

## 📞 Support

Jika mengalami kendala, silakan:
- Buat issue di GitHub repository
- Hubungi tim support via email
- Cek dokumentasi lengkap di folder `/docs`

---

**Website Desa Tanjung Rambutan** - Melayani dengan Teknologi Modern 🏘️