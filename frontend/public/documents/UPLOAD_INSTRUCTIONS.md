# 📋 Petunjuk Upload File PDF - UPDATED

## 🎯 Cara Upload PDF Baru:

### Metode 1: Menggunakan PDF Manager (Recommended) ⭐
1. Buka PowerShell di root folder project
2. Jalankan: `.\upload-pdf-manager.ps1`
3. Pilih menu "1" untuk upload PDF
4. Pilih file PDF dari komputer
5. File otomatis tercopy ke folder ini

### Metode 2: Manual
- **Lokasi**: Copy file PDF ke folder `/frontend/public/documents/`
- **Ukuran**: Maksimal 10MB untuk performa optimal
- **Format**: PDF yang dapat dibuka di browser

## 📝 Registrasi PDF di Website:

Setelah upload, daftarkan PDF di file `ProfilDesa.jsx`:
1. Buka `/frontend/src/pages/ProfilDesa.jsx`
2. Tambahkan data dokumen baru di array `documents`
3. Sesuaikan informasi: title, description, fileSize, dll.

## 📂 File Yang Sudah Ada:

✅ **PDF Tersedia:**
- [x] profil-desa-2024.pdf (5.2 MB)
- [x] PRODUK-HUKUM-TJ-RAMBUTAN.pdf (3.8 MB)

## 🔧 Status Implementasi:

✅ **Sudah Selesai:**
- [x] Navigation menu diubah dari "Regulasi Desa" ke "Profil Desa"
- [x] Multiple PDF support system
- [x] PDF Manager script
- [x] Dynamic document selection
- [x] Route `/profil-desa` sudah dibuat
- [x] Komponen `ProfilDesa.jsx` sudah dibuat dengan fitur:
  - Preview buku profil
  - Download counter
  - Daftar isi
  - Informasi file
  - Contact support
- [x] Folder structure untuk documents dan images
- [x] React Icons integration lengkap

⏳ **Menunggu:**
- [ ] Upload file PDF buku profil (`profil-desa-2024.pdf`)
- [ ] Upload cover image (opsional)

## 🚀 Fitur Halaman Profil Desa:

### **Tampilan Utama:**
- Hero section dengan judul dan deskripsi buku
- Book preview card dengan informasi file
- Tombol download utama dan preview
- Download counter otomatis
- Daftar isi lengkap

### **Informasi yang Ditampilkan:**
- Ukuran file: 5.2 MB (akan otomatis detect)
- Jumlah halaman: 52 halaman
- Terakhir diperbarui: 15 Oktober 2024
- Total download: Counter dinamis

### **Daftar Isi:**
1. Kata Pengantar Kepala Desa
2. Sejarah dan Latar Belakang Desa
3. Visi, Misi, dan Tujuan Pembangunan
4. Kondisi Geografis dan Administratif
5. Data Kependudukan dan Demografi
6. Struktur Pemerintahan Desa
7. Potensi dan Sumber Daya Desa
8. Program Pembangunan dan Prestasi
9. Layanan Publik dan Fasilitas Desa
10. Galeri Foto Kegiatan dan Prestasi
11. Rencana Pembangunan ke Depan

## 📱 Responsive Design:
- Desktop: Layout 2 kolom (preview + content)
- Tablet: Adaptive layout
- Mobile: Stack vertical, optimized for touch

## 🎨 Design Features:
- Professional government portal styling
- React Icons untuk consistency
- Gradient backgrounds
- Card-based layout
- Hover effects dan smooth transitions

## ⚡ Next Steps:

1. **Upload PDF**: Letakkan file `profil-desa-2024.pdf` di folder ini
2. **Test**: Jalankan `npm run dev` dan buka `/profil-desa`
3. **Verify**: Pastikan download berfungsi dengan baik
4. **Optional**: Upload cover image untuk tampilan yang lebih menarik

## 🔗 Path yang Sudah Disiapkan:
- URL: `http://localhost:5173/profil-desa`
- PDF Path: `/documents/profil-desa-2024.pdf`
- Cover: `/images/book-cover.png` (optional)

**Status: READY FOR PDF UPLOAD** 🎯