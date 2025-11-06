# 📧 Panduan Setup Form Kontak

Saat ini form kontak di website desa menggunakan **integrasi WhatsApp**. Ketika user mengklik "Kirim Pesan", pesan akan diformat dan dikirim ke WhatsApp Kepala Desa.

## 🔄 Cara Kerja Saat Ini

1. User mengisi form kontak
2. Ketika form di-submit, pesan akan diformat otomatis
3. User akan diarahkan ke WhatsApp dengan pesan yang sudah terformat
4. Pesan akan dikirim ke nomor WhatsApp Kepala Desa: `+62 852-6755-6489`

## 📨 Format Pesan WhatsApp

```
*Pesan dari Website Desa*

*Nama:* [Nama User]
*Email:* [Email User]
*Telepon:* [Nomor User]
*Subjek:* [Kategori Pesan]

*Pesan:*
[Isi Pesan User]
```

## 🚀 Opsi Alternatif: EmailJS (Untuk Email Langsung)

Jika ingin form mengirim email langsung tanpa melalui WhatsApp, ikuti langkah berikut:

### 1. Install EmailJS
```bash
npm install @emailjs/browser
```

### 2. Setup Akun EmailJS
1. Daftar di https://www.emailjs.com/
2. Buat service (Gmail/Outlook/dll)
3. Buat template email
4. Dapatkan Service ID, Template ID, dan Public Key

### 3. Update Code di Contact.jsx

Import EmailJS:
```javascript
import emailjs from '@emailjs/browser';
```

Uncomment dan update bagian EmailJS di function `handleSubmit`:
```javascript
const result = await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'desa.tanjungrambutan@gmail.com'
    },
    'YOUR_PUBLIC_KEY'
);
```

### 4. Template EmailJS
```
Subject: Pesan Baru dari Website Desa - {{subject}}

Nama: {{from_name}}
Email: {{from_email}}
Telepon: {{phone}}
Kategori: {{subject}}

Pesan:
{{message}}

---
Dikirim dari website Desa Tanjung Rambutan
```

## 🔧 Opsi Lain

### Backend Integration
- Buat API endpoint di WordPress
- Simpan pesan ke database
- Kirim notifikasi email
- Panel admin untuk melihat pesan

### Form Services
- Formspree (https://formspree.io/)
- Netlify Forms
- Google Forms integration

## 📞 Kontak Support

Jika butuh bantuan setup:
- WhatsApp Kepala Desa: +62 852-6755-6489
- Email: desa.tanjungrambutan@gmail.com

---

**Status Saat Ini:** ✅ Form aktif dengan integrasi WhatsApp
**Rekomendasi:** Gunakan setup saat ini untuk kemudahan, atau upgrade ke EmailJS untuk email langsung.