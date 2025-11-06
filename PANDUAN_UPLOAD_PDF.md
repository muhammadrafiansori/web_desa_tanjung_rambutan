# 📁 Panduan Upload dan Mengelola PDF di Website Desa

## 🎯 Langkah Cepat Upload PDF

### Metode 1: Menggunakan PDF Manager (Recommended) ⭐

1. **Buka PowerShell di folder root project**
2. **Jalankan command:**
   ```powershell
   .\upload-pdf-manager.ps1
   ```
3. **Pilih menu "1" untuk upload PDF**
4. **Pilih file PDF dari komputer Anda**
5. **File akan otomatis tercopy ke folder `/frontend/public/documents/`**

### Metode 2: Manual Copy-Paste

1. **Copy file PDF Anda**
2. **Paste ke folder:** `frontend/public/documents/`
3. **File akan tersedia di URL:** `http://localhost:3000/documents/namafile.pdf`

---

## 📂 Struktur Folder PDF

```
frontend/public/documents/
├── profil-desa-2024.pdf          ← Sudah ada
├── PRODUK-HUKUM-TJ-RAMBUTAN.pdf  ← Sudah ada
├── file-baru-anda.pdf             ← File yang Anda upload
└── dokumen-lainnya.pdf            ← File lainnya
```

---

## 🔧 Cara Menambahkan PDF ke Halaman Website

Setelah file PDF diupload, Anda perlu mendaftarkannya di halaman ProfilDesa.jsx:

### 1. Buka file: `frontend/src/pages/ProfilDesa.jsx`

### 2. Cari bagian `documents` array (sekitar baris 20-80)

### 3. Tambahkan objek baru untuk PDF Anda:

```javascript
{
    id: 3, // Increment nomor ID
    title: "Nama Dokumen Anda",
    subtitle: "Deskripsi singkat dokumen",
    version: "1.0",
    yearPublished: 2024,
    fileSize: "2.1 MB", // Sesuaikan ukuran file
    pageCount: 25, // Sesuaikan jumlah halaman
    lastUpdated: "2024-11-06", // Tanggal update
    pdfUrl: "/documents/nama-file-anda.pdf", // Path ke file PDF
    coverImage: "/images/cover-dokumen.png", // Opsional: gambar cover
    category: "Kategori Dokumen", // Misal: "Profil Desa", "Hukum", "Laporan"
    description: "Deskripsi lengkap tentang isi dokumen ini...",
    tableOfContents: [
        "Bab 1: Pendahuluan",
        "Bab 2: Isi Utama",
        "Bab 3: Kesimpulan"
        // Tambahkan daftar isi sesuai dokumen Anda
    ]
}
```

### 4. Contoh Lengkap:

```javascript
const documents = [
    // ... dokumen yang sudah ada ...
    {
        id: 3,
        title: "Laporan Keuangan Desa 2024",
        subtitle: "Transparansi Pengelolaan Dana Desa",
        version: "1.0",
        yearPublished: 2024,
        fileSize: "4.5 MB",
        pageCount: 45,
        lastUpdated: "2024-11-06",
        pdfUrl: "/documents/laporan-keuangan-2024.pdf",
        coverImage: "/images/keuangan-cover.png",
        category: "Laporan",
        description: "Laporan keuangan transparansi pengelolaan dana desa tahun 2024 meliputi APBDes, realisasi anggaran, dan pertanggungjawaban.",
        tableOfContents: [
            "Kata Pengantar",
            "Ringkasan Eksekutif",
            "APBDes Tahun 2024",
            "Realisasi Pendapatan",
            "Realisasi Belanja",
            "Sisa Lebih Perhitungan Anggaran",
            "Catatan Atas Laporan Keuangan",
            "Dokumentasi Kegiatan"
        ]
    }
];
```

---

## 🖼️ Menambahkan Gambar Cover (Opsional)

### 1. Siapkan gambar cover (PNG/JPG)
   - **Ukuran:** 600x800px (rasio buku)
   - **Format:** PNG atau JPG
   - **Ukuran file:** Maksimal 2MB

### 2. Upload ke folder: `frontend/public/images/`

### 3. Update path di kode:
```javascript
coverImage: "/images/nama-cover-anda.png"
```

---

## 📋 Checklist Upload PDF

- [ ] File PDF sudah diupload ke `frontend/public/documents/`
- [ ] File dapat diakses di browser: `http://localhost:3000/documents/namafile.pdf`
- [ ] Data dokumen sudah ditambahkan di `ProfilDesa.jsx`
- [ ] Informasi file (ukuran, jumlah halaman) sudah benar
- [ ] Daftar isi sudah sesuai dengan isi dokumen
- [ ] Gambar cover sudah diupload (jika ada)
- [ ] Website sudah di-test dan berfungsi dengan baik

---

## 🚀 Testing & Verifikasi

### 1. Jalankan development server:
```bash
cd frontend
npm run dev
```

### 2. Buka browser ke: `http://localhost:3000`

### 3. Navigasi ke halaman "Profil Desa"

### 4. Verifikasi:
   - [ ] PDF baru muncul di daftar dokumen
   - [ ] Klik PDF untuk switch ke dokumen tersebut
   - [ ] Tombol "Download PDF" berfungsi
   - [ ] Tombol "Preview Online" berfungsi
   - [ ] Informasi file benar (ukuran, halaman, dll)

---

## ❗ Troubleshooting

### **PDF tidak muncul di website:**
- ✅ Pastikan file berada di `frontend/public/documents/`
- ✅ Pastikan path di kode sesuai dengan nama file
- ✅ Restart development server

### **PDF tidak bisa didownload:**
- ✅ Cek console browser untuk error
- ✅ Pastikan file PDF tidak corrupt
- ✅ Coba akses langsung: `http://localhost:3000/documents/namafile.pdf`

### **Gambar cover tidak muncul:**
- ✅ Pastikan file gambar ada di `frontend/public/images/`
- ✅ Pastikan format gambar didukung (PNG/JPG)
- ✅ Cek path di kode

---

## 🔧 Tools Tersedia

### **PDF Manager Script:**
```powershell
.\upload-pdf-manager.ps1
```

**Fitur:**
- Upload PDF dengan file dialog
- Lihat daftar PDF yang ada
- Hapus PDF
- Informasi ukuran folder
- Jalankan development server

### **Manual Commands:**

**Upload PDF baru:**
```powershell
.\upload-pdf-manager.ps1 upload
```

**Lihat daftar PDF:**
```powershell
.\upload-pdf-manager.ps1 list
```

**Jalankan dev server:**
```powershell
.\upload-pdf-manager.ps1 dev
```

---

## 📞 Bantuan

Jika mengalami kesulitan, pastikan:

1. ✅ Node.js dan npm sudah terinstall
2. ✅ Dependencies sudah diinstall (`npm install`)
3. ✅ Development server berjalan
4. ✅ File PDF ukurannya tidak terlalu besar (< 10MB)
5. ✅ Browser support PDF viewer

**Kontak Support:** Hubungi developer website untuk bantuan teknis.