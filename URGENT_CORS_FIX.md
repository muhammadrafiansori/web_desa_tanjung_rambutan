# 🚨 URGENT FIX untuk Teman Backend Developer

## CORS Error Fix - Tambahkan di wp-config.php

Minta teman Anda buka file:
`wordpress-backend/wp-config.php`

Tambahkan kode ini di PALING ATAS, tepat setelah `<?php`:

```php
<?php

// ===== CORS FIX untuk Development =====
if (!headers_sent()) {
    // Remove any existing CORS headers first
    header_remove('Access-Control-Allow-Origin');
    header_remove('Access-Control-Allow-Methods');
    header_remove('Access-Control-Allow-Headers');
    
    // Set single CORS headers
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Authorization, Content-Type, X-Requested-With');
    header('Access-Control-Allow-Credentials: true');
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
// ===== END CORS FIX =====

/**
 * The base configuration for WordPress
 * ... (rest of file)
```

## Setelah tambah kode di atas:
1. Save file wp-config.php
2. Restart PHP server: 
   - Stop (Ctrl+C)
   - Start: `php -S 0.0.0.0:8000`

## Untuk Anda (Frontend):
- Hard refresh browser: Ctrl+Shift+R
- Lihat console - error CORS harus hilang!