# 🚨 URGENT: Cara Upload Featured Image di WordPress

## Masalah: Gambar Berita Tidak Muncul di Homepage

**Penyebab**: Featured Image tidak di-set di WordPress posts

---

## 📋 LANGKAH-LANGKAH UNTUK TEMAN BACKEND:

### **Step 1: Login WordPress Admin**
```
http://192.168.1.93/New/web_desa_tanjung_rambutan/wordpress-backend/wp-admin
```

### **Step 2: Edit Posts**
1. Klik **"Posts"** di menu kiri
2. Klik **"All Posts"**
3. Edit post **"CONTOH"** dan **"Halo dunia!"**

### **Step 3: Upload Featured Image**
1. **Saat edit post, SCROLL KE BAWAH** di sidebar kanan
2. Cari kotak **"Featured Image"** atau **"Gambar Unggulan"**
3. Klik **"Set featured image"** atau **"Atur gambar unggulan"**
4. **Upload Files** → pilih gambar dari komputer
5. Pilih gambar → klik **"Set featured image"**
6. **UPDATE POST**

### **Step 4: Verifikasi**
Setelah upload, harus ada **thumbnail gambar kecil** di kotak Featured Image.

---

## ⚠️ PENTING - Spesifikasi Gambar:

- **Format**: JPG, PNG (tidak GIF)
- **Ukuran**: Minimal 800x400 pixel
- **Rasio**: 2:1 (landscape/horizontal)
- **Size**: Maksimal 2MB

---

## 🔍 Test Apakah Berhasil:

### **Method 1: Cek di WordPress**
- Edit post → harus ada thumbnail di "Featured Image" box

### **Method 2: Test API**
Buka browser dan paste URL ini:
```
http://192.168.1.93/New/web_desa_tanjung_rambutan/wordpress-backend/?rest_route=/wp/v2/posts
```

**SEBELUM upload**: `"featured_media": 0`
**SESUDAH upload**: `"featured_media": 123` (angka > 0)

---

## 🎯 Hasil yang Diharapkan:

Setelah featured image diupload:
- ✅ Gambar muncul di homepage React
- ✅ Tidak ada placeholder abu-abu lagi
- ✅ Berita terlihat professional

---

## 💡 Contoh Gambar yang Bagus:

- Foto kegiatan desa
- Foto pembangunan
- Foto rapat atau acara
- Landscape desa
- **HINDARI**: Screenshot, gambar blur, atau terlalu kecil

---

**🚀 Setelah upload featured image, refresh browser React dan gambar akan langsung muncul!**