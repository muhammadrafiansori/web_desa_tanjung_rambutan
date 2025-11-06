# 📸 Panduan Upload Foto Galeri

## Struktur Foto yang Dibutuhkan:

### 🏃‍♂️ **Kategori: Kegiatan Desa**
File yang dibutuhkan:
- `kegiatan-1.jpg` - Gotong royong membersihkan saluran air
- `kegiatan-2.jpg` - Rapat koordinasi RT/RW  
- `kegiatan-3.jpg` - Posyandu balita
- `kegiatan-4.jpg` - Senam pagi bersama
- `kegiatan-5.jpg` - [tambahkan kegiatan lainnya]

### 🏞️ **Kategori: Pemandangan**
File yang dibutuhkan:
- `pemandangan-1.jpg` - Hamparan sawah di pagi hari
- `pemandangan-2.jpg` - Sunset di perbukitan desa
- `pemandangan-3.jpg` - Jembatan desa
- `pemandangan-4.jpg` - Kebun sayur warga
- `pemandangan-5.jpg` - [tambahkan pemandangan lainnya]

### 🏢 **Kategori: Kantor Desa**
File yang dibutuhkan:
- `kantor-1.jpg` - Gedung kantor desa (tampak depan)
- `kantor-2.jpg` - Balai pertemuan desa
- `kantor-3.jpg` - Area parkir kantor desa
- `kantor-4.jpg` - Ruang tunggu pelayanan
- `kantor-5.jpg` - [tambahkan fasilitas lainnya]

## 📋 **Spesifikasi Teknis:**

### Format File:
- ✅ Format: JPG atau PNG
- ✅ Resolusi: Minimal 800x800 pixels (untuk tampilan grid square)
- ✅ Ukuran file: Maksimal 2MB per foto
- ✅ Kualitas: Resolusi tinggi untuk lightbox view

### Penamaan File:
```
Format: [kategori]-[nomor].[ekstensi]
Contoh: kegiatan-1.jpg, pemandangan-2.jpg, kantor-3.jpg
```

## 🎯 **Tips Fotografi untuk Tim KKN:**

### Komposisi:
- Gunakan rule of thirds
- Pastikan pencahayaan yang baik
- Hindari foto blur atau terlalu gelap
- Capture moment yang natural dan candid

### Angle yang Bagus:
- **Kegiatan**: Wide shot untuk menunjukkan partisipasi warga
- **Pemandangan**: Golden hour (sunrise/sunset) untuk hasil terbaik  
- **Kantor**: Straight angle, pastikan bangunan terlihat rapi

### Editing (Opsional):
- Adjust brightness dan contrast
- Crop sesuai komposisi
- Hindari filter berlebihan

## 🔄 **Cara Upload:**

1. **Persiapkan Foto:**
   - Rename file sesuai konvensi penamaan
   - Compress jika ukuran >2MB
   - Organize berdasarkan kategori

2. **Upload ke Folder:**
   ```
   /frontend/public/images/gallery/
   ├── kegiatan-1.jpg
   ├── kegiatan-2.jpg
   ├── pemandangan-1.jpg
   ├── pemandangan-2.jpg
   ├── kantor-1.jpg
   └── kantor-2.jpg
   ```

3. **Update Data (Jika Diperlukan):**
   - File: `/frontend/src/pages/Gallery.jsx`
   - Update array `staticPhotos` untuk menambah metadata

## 🌟 **Contoh Foto yang Bagus:**

### Kegiatan Desa:
- Gotong royong: Show teamwork, banyak orang terlibat
- Rapat: Suasana formal tapi tidak kaku  
- Posyandu: Fokus pada pelayanan kesehatan
- Senam: Energy dan antusiasme warga

### Pemandangan:
- Sawah: Green scenery, luas hamparan
- Sunset: Dramatic sky dengan siluet
- Jembatan: Architectural element dengan context
- Kebun: Close-up tanaman dengan background

### Kantor Desa:
- Exterior: Clean building facade
- Interior: Professional office environment
- Facilities: Functional spaces yang rapi
- Signage: Clear identification

---

**Tim KKN**: Upload foto-foto terbaik kalian sesuai panduan ini! 📷✨