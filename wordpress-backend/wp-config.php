<?php

/**
 * The base configuration for WordPress
 *
 * Konfigurasi khusus untuk Website Desa - Headless WordPress
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'desa_tanjung_rambutan');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'desa-tanjung-rambutan-auth-key-2025');
define('SECURE_AUTH_KEY',  'desa-tanjung-rambutan-secure-auth-key-2025');
define('LOGGED_IN_KEY',    'desa-tanjung-rambutan-logged-in-key-2025');
define('NONCE_KEY',        'desa-tanjung-rambutan-nonce-key-2025');
define('AUTH_SALT',        'desa-tanjung-rambutan-auth-salt-2025');
define('SECURE_AUTH_SALT', 'desa-tanjung-rambutan-secure-auth-salt-2025');
define('LOGGED_IN_SALT',   'desa-tanjung-rambutan-logged-in-salt-2025');
define('NONCE_SALT',       'desa-tanjung-rambutan-nonce-salt-2025');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);

/**
 * CORS Configuration for Headless WordPress
 * Mengizinkan akses dari React frontend dan device lain
 */
define('CORS_ALLOW_ORIGIN', '*'); // Mengizinkan semua origin untuk development
define('WP_REST_ALLOW_ANONYMOUS_COMMENTS', true);

/**
 * URL Configuration untuk akses dari network
 * Ubah sesuai IP address lokal Anda
 */
define('WP_HOME', 'http://192.168.1.93/New/web_desa_tanjung_rambutan/wordpress-backend');
define('WP_SITEURL', 'http://192.168.1.93/New/web_desa_tanjung_rambutan/wordpress-backend');

/**
 * Allow WordPress to be accessed from different domains
 */
$_SERVER['HTTP_HOST'] = '192.168.1.93';

/**
 * JWT Authentication (Optional - untuk autentikasi yang lebih aman)
 * Uncomment jika menggunakan JWT plugin
 */
// define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
// define('JWT_AUTH_CORS_ENABLE', true);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (! defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';