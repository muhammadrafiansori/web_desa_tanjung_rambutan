# 🖼️ Panduan Upload Featured Images untuk Berita

## Masalah: Gambar Berita Tidak Muncul

Jika gambar berita tidak muncul di website React, kemungkinan penyebabnya:

1. **Featured Image tidak di-set** di WordPress
2. **Format gambar tidak didukung**
3. **Ukuran gambar terlalu besar**

---

## ✅ Cara Upload Featured Image yang Benar

### **Untuk Backend Developer (WordPress Admin):**

#### **1. Upload Featured Image saat Create/Edit Post**
1. **Posts** → **Add New** (atau Edit post yang sudah ada)
2. Tulis **Title** dan **Content** seperti biasa
3. **PENTING**: Di sidebar kanan, cari **"Featured Image"**
4. Klik **"Set featured image"**
5. **Upload files** → pilih gambar dari komputer
6. Pilih gambar → **"Set featured image"**
7. **Publish** atau **Update** post

#### **2. Spesifikasi Gambar yang Direkomendasikan**
- **Format**: JPG, PNG, atau WebP
- **Ukuran**: 1200x600px (optimal untuk web)
- **Ukuran file**: Maksimal 2MB
- **Aspect ratio**: 2:1 (landscape)

#### **3. Contoh Gambar yang Bagus untuk Berita Desa**
- Foto kegiatan gotong royong
- Foto pembangunan infrastruktur
- Foto rapat atau acara desa
- Landscape desa atau fasilitas publik

---

## 🔍 Troubleshooting

### **Jika Gambar Masih Tidak Muncul:**

#### **1. Cek di WordPress Admin**
- Buka post yang bermasalah
- Pastikan ada **thumbnail image** di **"Featured Image"** section
- Jika tidak ada, upload gambar baru

#### **2. Test Featured Image URL**
Buka browser dan test URL ini:
```
http://[YOUR-IP]/New/web_desa_tanjung_rambutan/wordpress-backend/?rest_route=/wp/v2/posts&_embed=true
```

Cari post Anda dan lihat apakah ada section `_embedded['wp:featuredmedia']`

#### **3. Re-upload Gambar**
Jika masih bermasalah:
1. **Remove** featured image yang ada
2. **Upload gambar baru** dengan format JPG
3. **Set as featured image**
4. **Update post**

---

## 💡 Tips untuk Hasil Optimal

### **Best Practices:**
1. **Selalu upload featured image** untuk setiap berita
2. **Gunakan gambar berkualitas** tapi tidak terlalu besar
3. **Crop gambar** sesuai rasio 2:1 sebelum upload
4. **Beri nama file** yang deskriptif (contoh: `gotong-royong-oktober-2024.jpg`)

### **Tools untuk Edit Gambar:**
- **Online**: Canva, Photopea, atau GIMP
- **Resize**: TinyPNG untuk compress ukuran file
- **Crop**: Crop ke rasio 2:1 (1200x600px)

---

## 🎯 Hasil yang Diharapkan

Setelah featured image di-upload dengan benar:
- ✅ Gambar muncul di homepage React
- ✅ Gambar responsive di mobile dan desktop  
- ✅ Loading time website tetap cepat
- ✅ Berita terlihat lebih menarik dan professional

---

**💬 Jika masih bermasalah, screenshot error di console browser dan kirim ke frontend developer!**