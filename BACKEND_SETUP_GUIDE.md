# 🖥️ Panduan Setup WordPress Backend
## Untuk Backend Developer - Website Desa Tanjung Rambutan

---

## 📋 **Prerequisites**
- PHP 7.4+ terinstall
- Git terinstall
- Text editor (VS Code recommended)

---

## 🚀 **Setup Langkah demi Langkah**

### **1. Clone Repository**
```bash
git clone https://github.com/4hannnn/web_desa_tanjung_rambutan.git
cd web_desa_tanjung_rambutan
```

### **2. Jalankan WordPress Server**
```bash
cd wordpress-backend
php -S 0.0.0.0:8000
```

### **3. Cek IP Address Anda**
```bash
# Windows
ipconfig | findstr IPv4

# MacOS/Linux  
ifconfig | grep inet
```

**Contoh output**: `IPv4 Address: 192.168.1.85`

### **4. Setup WordPress**
1. Buka browser: `http://localhost:8000`
2. Ikuti WordPress installation wizard
3. **Database Setup**:
   - Database Name: `desa_tanjung_rambutan`
   - Username: `root` (atau sesuai setup)
   - Password: (kosong atau sesuai setup)
   - Host: `localhost`

### **5. Aktivasi Plugin**
1. Login ke WordPress Admin: `http://localhost:8000/wp-admin`
2. Go to **Plugins** → **Installed Plugins**
3. **Activate** plugin: **"Desa API Enhancements"**

---

## 📰 **Membuat Konten Berita**

### **Standard Posts (Berita Umum)**
1. **Posts** → **Add New**
2. **Title**: Contoh "Gotong Royong Membersihkan Desa"
3. **Content**: Tulis konten lengkap dengan paragraf
4. **Featured Image**: Upload gambar (recommended 800x400px)
5. **Publish** post

### **Custom Post Types (Plugin Desa)**
- **Pengumuman**: Untuk pengumuman resmi desa
- **Layanan**: Untuk informasi layanan publik

---

## 🌐 **Sharing dengan Frontend Developer**

### **Kirim Informasi Ini:**
```
WordPress Backend Ready! 🎉

WordPress Admin: http://[YOUR-IP]:8000/wp-admin
API Base URL: http://[YOUR-IP]:8000/wp-json

Test Endpoints:
- Posts: http://[YOUR-IP]:8000/wp-json/wp/v2/posts
- Pengumuman: http://[YOUR-IP]:8000/wp-json/wp/v2/pengumuman

Username: [admin-username]
Password: [admin-password]
```

**Replace [YOUR-IP]** dengan IP address Anda dari step 3.

---

## ✅ **Checklist Sebelum Kolaborasi**

- [ ] WordPress installation selesai
- [ ] Plugin "Desa API Enhancements" active
- [ ] Minimal 3 sample posts dibuat
- [ ] Featured images diupload
- [ ] API endpoints tested (buka di browser)
- [ ] IP address sudah dikirim ke frontend developer

---

## 🔧 **API Endpoints untuk Testing**

Test endpoints ini di browser untuk memastikan working:

- `http://[YOUR-IP]:8000/wp-json/wp/v2/posts`
- `http://[YOUR-IP]:8000/wp-json/wp/v2/pengumuman`  
- `http://[YOUR-IP]:8000/wp-json/desa/v1/info`
- `http://[YOUR-IP]:8000/wp-json/desa/v1/stats`

---

## 🛠️ **Troubleshooting**

### **Server Not Accessible dari Luar**
```bash
# Pastikan menggunakan 0.0.0.0, bukan localhost
php -S 0.0.0.0:8000
```

### **Plugin Tidak Muncul**
- Check folder `wp-content/plugins/desa-api-enhancements/` exists
- Refresh Plugins page
- Check file permissions

### **Database Connection Error**
- Install MySQL/MariaDB jika belum ada
- Atau gunakan SQLite plugin untuk WordPress

---

## 📱 **Daily Workflow**

1. **Morning**: Jalankan `php -S 0.0.0.0:8000`
2. **Content Work**: Buat/edit berita via WordPress admin
3. **Testing**: Check API endpoints
4. **Evening**: Commit changes ke Git

```bash
git add wordpress-backend/
git commit -m "Add: new village news and announcements"
git push origin main
```

---

**🎉 Ready untuk kolaborasi dengan Frontend Developer!**