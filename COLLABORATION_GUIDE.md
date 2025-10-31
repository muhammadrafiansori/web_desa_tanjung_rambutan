# 🤝 Panduan Kolaborasi WordPress-React
## Website Desa Tanjung Rambutan

---

## 🎯 **Pembagian Tugas Tim**

### **Frontend Developer (React)**
- ✅ React components (sudah selesai)
- ✅ API integration service (sudah siap)
- ✅ Responsive design & styling
- 🔄 Fine-tuning UI/UX berdasarkan konten WordPress

### **Backend Developer (WordPress)**
- 🔄 WordPress content management
- 🔄 Membuat berita dan pengumuman
- 🔄 Upload gambar dan media
- 🔄 Konfigurasi plugin desa

---

## 🖥️ **Akses Development**

### **Frontend (React)**
```bash
cd frontend
npm run dev
```
**URL**: http://localhost:5173

### **Backend (WordPress)**  
```bash
cd wordpress-backend
php -S 0.0.0.0:8000
```
**URL**: http://192.168.1.84:8000
**Admin**: http://192.168.1.84:8000/wp-admin

---

## 📰 **Workflow Pengelolaan Berita**

### **Untuk Backend Developer:**

1. **Login WordPress Admin**
   - URL: http://192.168.1.84:8000/wp-admin
   - Setup admin account saat first install

2. **Membuat Berita Baru**
   - Posts → Add New
   - **Title**: Judul berita yang menarik
   - **Content**: Konten lengkap dengan gambar
   - **Featured Image**: Upload gambar utama (recommended: 800x400px)
   - **Excerpt**: Ringkasan singkat (opsional, akan auto-generate)

3. **Custom Post Types** (Plugin Desa):
   - **Pengumuman**: Informasi resmi desa
   - **Layanan**: Info layanan publik desa

4. **SEO & Media**:
   - Upload gambar ke Media Library
   - Optimize image size (max 500KB)
   - Gunakan alt text untuk accessibility

### **Untuk Frontend Developer:**

1. **Monitor Content Changes**
   - Website otomatis sync dengan WordPress
   - Refresh browser untuk melihat konten terbaru

2. **Debug API Connection**
   - Check console browser untuk errors
   - Test API endpoints:
     - Posts: http://192.168.1.84:8000/wp-json/wp/v2/posts
     - Pengumuman: http://192.168.1.84:8000/wp-json/wp/v2/pengumuman

3. **Styling Adjustments**
   - Adjust layout berdasarkan content length
   - Responsive images handling
   - Loading states optimization

---

## 🔧 **API Endpoints Available**

### **Standard WordPress REST API**
- `GET /wp-json/wp/v2/posts` - Blog posts
- `GET /wp-json/wp/v2/posts/{id}` - Single post
- `GET /wp-json/wp/v2/media` - Media/images

### **Custom Desa Plugin API**
- `GET /wp-json/wp/v2/pengumuman` - Announcements
- `GET /wp-json/wp/v2/layanan` - Village services  
- `GET /wp-json/desa/v1/info` - Village information
- `GET /wp-json/desa/v1/stats` - Village statistics

---

## 🚀 **Testing Workflow**

### **Backend Testing:**
1. Buat 3-5 sample berita dengan gambar
2. Test Featured Images appear correctly
3. Check excerpt generation
4. Verify publication date

### **Frontend Testing:**
1. Refresh React app (localhost:5173)
2. Check news section loads WordPress data
3. Test responsive layout
4. Verify image loading and fallbacks

---

## 🛠️ **Troubleshooting**

### **WordPress Issues:**
- **404 Errors**: Pastikan PHP server berjalan dari folder `wordpress-backend`
- **Plugin Not Active**: Aktifkan "Desa API Enhancements" di Plugins menu
- **CORS Errors**: Plugin sudah handle CORS, restart PHP server

### **React Issues:**
- **API Errors**: Check network tab, verify WordPress URL
- **Images Not Loading**: Check image paths dan CORS
- **No Content**: Verify WordPress has published posts

---

## 📱 **Contact & Communication**

### **Daily Sync:**
- **Morning**: Backend dev create/update content
- **Afternoon**: Frontend dev review and adjust styling
- **Evening**: Joint testing dan bug fixes

### **Git Workflow:**
```bash
# Backend developer
git pull origin main
# Make content changes
git add wordpress-backend/
git commit -m "Add: new village news content"
git push origin backend-content

# Frontend developer  
git pull origin main
# Make UI adjustments
git add frontend/
git commit -m "Fix: news card responsive layout"
git push origin frontend-updates
```

---

## ✅ **Success Checklist**

- [ ] WordPress admin accessible
- [ ] Plugin "Desa API Enhancements" active
- [ ] Sample news articles created
- [ ] Featured images uploaded
- [ ] React app displaying WordPress content
- [ ] Responsive design tested
- [ ] API endpoints responding correctly
- [ ] Cross-browser compatibility checked

---

**🎉 Happy Coding & Collaboration!**