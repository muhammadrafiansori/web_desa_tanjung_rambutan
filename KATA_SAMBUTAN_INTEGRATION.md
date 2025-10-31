# Integrasi Kata Sambutan Kepala Desa dengan WordPress

## Overview
Fitur Kata Sambutan Kepala Desa telah diintegrasikan dengan WordPress CMS menggunakan custom post type yang sudah disiapkan oleh backend team melalui plugin `desa-api-enhancements.php`.

## Backend Structure

### Custom Post Type
- **Post Type**: `kata_sambutan`
- **Endpoint**: `/wp/v2/kata_sambutan`
- **Support**: REST API enabled

### Custom Fields (Meta Fields)
Plugin WordPress menyediakan custom fields berikut:

1. **_kata_sambutan_nama_kepala_desa**
   - Field untuk nama kepala desa
   - Contoh: "Bapak Dedi Wahyudi, SE.MM"

2. **_kata_sambutan_jabatan** 
   - Field untuk jabatan
   - Contoh: "Kepala Desa Tanjung Rambutan"

3. **_kata_sambutan_foto_kepala_desa_id**
   - Field untuk ID attachment foto kepala desa
   - Dikembalikan dalam berbagai ukuran (thumbnail, medium, large)

### API Response Structure
```json
{
  "id": 123,
  "title": {"rendered": "Kata Sambutan"},
  "content": {"rendered": "<p>Content here...</p>"},
  "date": "2024-01-01T00:00:00",
  "kata_sambutan_meta": {
    "nama_kepala_desa": "H. Ahmad Rahman",
    "jabatan": "Kepala Desa Tanjung Rambutan", 
    "foto_kepala_desa": {
      "id": 456,
      "url": "http://example.com/photo.jpg",
      "thumbnail": "http://example.com/photo-150x150.jpg",
      "medium": "http://example.com/photo-300x300.jpg",
      "large": "http://example.com/photo-1024x1024.jpg"
    }
  }
}
```

## Frontend Implementation

### API Service (`api.js`)
Method `getKataSambutan()` sudah diupdate untuk:
- Menggunakan endpoint `/wp/v2/kata_sambutan`
- Handle parameter `per_page=1&status=publish`
- Parse meta fields dari response
- Return structured data dengan error handling

### Component Integration (`Home.jsx`)
Komponen Home sudah terintegrasi dengan:
- Parallel loading dengan Promise.allSettled
- Proper error handling dan fallback data
- Responsive design untuk menampilkan foto, nama, jabatan
- Glass morphism styling effect

### Data Flow
```
WordPress Admin → Custom Post Type → REST API → Frontend API Service → React Component → UI
```

## Cara Pengelolaan Konten

### Di WordPress Admin
1. Login ke WordPress Admin
2. Buka menu "Kata Sambutan" (dari custom post type)
3. Klik "Tambah Kata Sambutan Baru"
4. Isi form:
   - **Title**: Judul kata sambutan
   - **Content**: Isi pesan sambutan (mendukung rich text)
   - **Nama Kepala Desa**: Nama lengkap dengan gelar
   - **Jabatan**: Jabatan resmi
   - **Foto Kepala Desa**: Upload foto (ukuran disarankan 400x400px)
5. Publish post

### Frontend Display
- Otomatis mengambil kata sambutan terbaru yang published
- Menampilkan dalam section khusus di homepage
- Responsive design (grid 4/8 columns di desktop, full width di mobile)
- Glass effect styling untuk visual menarik

## Testing & Troubleshooting

### API Testing
```bash
# Test endpoint directly
curl "http://localhost/wordpress/wp-json/wp/v2/kata_sambutan?per_page=1&status=publish"
```

### Frontend Testing
```javascript
// Console debug di browser
console.log('Kata sambutan data:', kataSambutan);
```

### Common Issues
1. **CORS Error**: Pastikan CORS plugin aktif di WordPress
2. **Empty Response**: Pastikan ada post dengan status "publish" di kata_sambutan
3. **Missing Images**: Cek attachment ID dan pastikan file exists
4. **Meta Fields Empty**: Pastikan plugin desa-api-enhancements aktif

## Future Enhancements
- [ ] Multiple kata sambutan support dengan pagination
- [ ] Rich text editor preview di frontend  
- [ ] Image optimization dan lazy loading
- [ ] SEO meta tags untuk kata sambutan
- [ ] Social sharing integration