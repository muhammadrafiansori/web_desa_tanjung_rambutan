# 🚀 Setup Environment Configuration untuk Frontend Developer

## 📋 Untuk Teman yang Baru Clone Repository

Setelah `git pull` atau `git clone`, file `.env.local` tidak akan ada karena file tersebut di-ignore oleh Git untuk alasan keamanan. Ikuti langkah berikut:

### **1. Copy Template Environment File**

```bash
# Di folder frontend/
cp .env.example .env.local
```

Atau manual:
1. Buka file `frontend/.env.example`
2. Copy semua isi file
3. Buat file baru `frontend/.env.local`
4. Paste isi file

### **2. Pilih Konfigurasi API URL**

Edit file `.env.local` dan **pilih salah satu** opsi:

#### **Opsi 1: Vite Proxy (RECOMMENDED)**
```bash
VITE_WP_API_URL=/wp-api
```
✅ **Keuntungan**: Tidak ada CORS issue, mudah setup
❌ **Syarat**: Harus development di komputer yang sama dengan React

#### **Opsi 2: Direct URL**
```bash
VITE_WP_API_URL=http://192.168.1.93/New/web_desa_tanjung_rambutan/wordpress-backend
```
✅ **Keuntungan**: Bisa akses WordPress dari komputer lain
❌ **Kekurangan**: Perlu setup CORS di WordPress

#### **Opsi 3: Local Development**
```bash
VITE_WP_API_URL=http://localhost:8000
```
✅ **Keuntungan**: Setup paling mudah
❌ **Syarat**: WordPress harus running di komputer yang sama

### **3. Update vite.config.js (Jika Pakai Opsi 1)**

Pastikan `vite.config.js` sudah memiliki proxy configuration. Jika tidak, tambahkan:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/wp-api': {
        target: 'http://[WORDPRESS-SERVER-IP]/New/web_desa_tanjung_rambutan/wordpress-backend',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-api/, ''),
      }
    }
  }
})
```

**Ganti `[WORDPRESS-SERVER-IP]`** dengan IP server WordPress.

### **4. Start Development Server**

```bash
cd frontend
npm install  # Install dependencies jika belum
npm run dev  # Start React server
```

### **5. Test Connection**

Buka browser console dan pastikan muncul:
```
✅ Posts API success: X posts found
📋 Processed posts: [array]
```

## **🔧 Troubleshooting**

### **CORS Error**
Jika muncul CORS error, gunakan **Opsi 1** (Vite Proxy).

### **API Not Found**
Pastikan:
- WordPress server running
- IP address benar di configuration
- Network accessible

### **No Posts Found**
Pastikan:
- WordPress plugin "Desa API Enhancements" aktif
- Ada posts yang published di WordPress
- Featured images sudah di-set

## **📱 Quick Setup Commands**

```bash
# Clone repository
git clone https://github.com/4hannnn/web_desa_tanjung_rambutan.git
cd web_desa_tanjung_rambutan/frontend

# Setup environment
cp .env.example .env.local

# Edit .env.local dengan text editor favorit
# Pilih salah satu konfigurasi API URL

# Install dan jalankan
npm install
npm run dev
```

## **🎯 Expected Result**

Setelah setup berhasil:
- Website buka di `http://localhost:5173`
- Berita dari WordPress muncul di homepage
- Console tidak ada error CORS
- Real-time sync dengan WordPress content

**Happy coding! 🚀**