<?php

/**
 * Plugin Name: Desa API Enhancements
 * Description: Custom API endpoints dan CORS configuration untuk Website Desa
 * Version: 1.0
 * Author: Website Desa Team
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class DesaAPIEnhancements
{

    public function __construct()
    {
        add_action('init', array($this, 'init'));
        add_action('rest_api_init', array($this, 'register_api_routes'));

        // CORS disabled in plugin - handled in wp-config.php instead
        // add_filter('rest_pre_serve_request', array($this, 'add_cors_headers'), 0, 4);
        // add_action('init', array($this, 'handle_cors_preflight'));
    }

    public function init()
    {
        // Add theme support for post thumbnails
        add_theme_support('post-thumbnails');

        // Register custom post types
        $this->register_custom_post_types();
    }

    /**
     * Register custom post types untuk website desa
     */
    public function register_custom_post_types()
    {

        // Pengumuman Desa
        register_post_type('pengumuman', array(
            'labels' => array(
                'name' => 'Pengumuman',
                'singular_name' => 'Pengumuman',
                'add_new' => 'Tambah Pengumuman',
                'add_new_item' => 'Tambah Pengumuman Baru',
                'edit_item' => 'Edit Pengumuman',
                'new_item' => 'Pengumuman Baru',
                'view_item' => 'Lihat Pengumuman',
                'search_items' => 'Cari Pengumuman',
                'not_found' => 'Tidak ada pengumuman',
                'not_found_in_trash' => 'Tidak ada pengumuman di trash'
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-megaphone'
        ));

        // Aparatur Desa
        register_post_type('aparatur', array(
            'labels' => array(
                'name' => 'Aparatur Desa',
                'singular_name' => 'Aparatur',
                'add_new' => 'Tambah Aparatur',
                'add_new_item' => 'Tambah Aparatur Baru',
                'edit_item' => 'Edit Aparatur',
                'new_item' => 'Aparatur Baru',
                'view_item' => 'Lihat Aparatur',
                'search_items' => 'Cari Aparatur',
                'not_found' => 'Tidak ada aparatur',
                'not_found_in_trash' => 'Tidak ada aparatur di trash'
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-businessperson'
        ));

        // Galeri
        register_post_type('galeri', array(
            'labels' => array(
                'name' => 'Galeri',
                'singular_name' => 'Galeri',
                'add_new' => 'Tambah Foto',
                'add_new_item' => 'Tambah Foto Baru',
                'edit_item' => 'Edit Foto',
                'new_item' => 'Foto Baru',
                'view_item' => 'Lihat Foto',
                'search_items' => 'Cari Foto',
                'not_found' => 'Tidak ada foto',
                'not_found_in_trash' => 'Tidak ada foto di trash'
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-camera'
        ));

        // Layanan Desa
        register_post_type('layanan', array(
            'labels' => array(
                'name' => 'Layanan Desa',
                'singular_name' => 'Layanan',
                'add_new' => 'Tambah Layanan',
                'add_new_item' => 'Tambah Layanan Baru',
                'edit_item' => 'Edit Layanan',
                'new_item' => 'Layanan Baru',
                'view_item' => 'Lihat Layanan',
                'search_items' => 'Cari Layanan',
                'not_found' => 'Tidak ada layanan',
                'not_found_in_trash' => 'Tidak ada layanan di trash'
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-admin-tools'
        ));
    }

    /**
     * Register custom API routes
     */
    public function register_api_routes()
    {

        // Custom endpoint untuk informasi desa
        register_rest_route('desa/v1', '/info', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_desa_info'),
            'permission_callback' => '__return_true'
        ));

        // Custom endpoint untuk statistik
        register_rest_route('desa/v1', '/stats', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_desa_stats'),
            'permission_callback' => '__return_true'
        ));
    }

    /**
     * Get informasi umum desa
     */
    public function get_desa_info($request)
    {
        return array(
            'nama_desa' => get_option('desa_nama', 'Desa Tanjung Rambutan'),
            'alamat' => get_option('desa_alamat', ''),
            'telepon' => get_option('desa_telepon', ''),
            'email' => get_option('desa_email', ''),
            'website' => get_option('desa_website', ''),
            'kepala_desa' => get_option('desa_kepala_desa', ''),
            'visi' => get_option('desa_visi', ''),
            'misi' => get_option('desa_misi', ''),
            'sejarah' => get_option('desa_sejarah', '')
        );
    }

    /**
     * Get statistik desa
     */
    public function get_desa_stats($request)
    {
        return array(
            'jumlah_penduduk' => get_option('desa_jumlah_penduduk', 0),
            'jumlah_kk' => get_option('desa_jumlah_kk', 0),
            'luas_wilayah' => get_option('desa_luas_wilayah', 0),
            'jumlah_rt' => get_option('desa_jumlah_rt', 0),
            'jumlah_rw' => get_option('desa_jumlah_rw', 0)
        );
    }

    /**
     * Handle CORS preflight requests
     */
    public function handle_cors_preflight()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
            header('Access-Control-Allow-Headers: Authorization, Content-Type, X-Requested-With');
            header('Access-Control-Max-Age: 86400'); // Cache for 1 day
            http_response_code(200);
            exit();
        }
    }

    /**
     * Add CORS headers to REST API responses
     */
    public function add_cors_headers($served, $result, $request, $server)
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Headers: Authorization, Content-Type, X-Requested-With');

        return $served;
    }
}

// Initialize plugin
new DesaAPIEnhancements();

/**
 * Add custom fields untuk custom post types
 */
function add_desa_custom_fields()
{
    // Custom fields untuk Aparatur
    add_meta_box(
        'aparatur_details',
        'Detail Aparatur',
        'aparatur_details_callback',
        'aparatur',
        'normal',
        'high'
    );

    // Custom fields untuk Layanan
    add_meta_box(
        'layanan_details',
        'Detail Layanan',
        'layanan_details_callback',
        'layanan',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_desa_custom_fields');

function aparatur_details_callback($post)
{
    $jabatan = get_post_meta($post->ID, '_aparatur_jabatan', true);
    $pendidikan = get_post_meta($post->ID, '_aparatur_pendidikan', true);
    $telepon = get_post_meta($post->ID, '_aparatur_telepon', true);

    echo '<table style="width: 100%;">';
    echo '<tr><td><label for="aparatur_jabatan">Jabatan:</label></td>';
    echo '<td><input type="text" id="aparatur_jabatan" name="aparatur_jabatan" value="' . esc_attr($jabatan) . '" style="width: 100%;" /></td></tr>';
    echo '<tr><td><label for="aparatur_pendidikan">Pendidikan:</label></td>';
    echo '<td><input type="text" id="aparatur_pendidikan" name="aparatur_pendidikan" value="' . esc_attr($pendidikan) . '" style="width: 100%;" /></td></tr>';
    echo '<tr><td><label for="aparatur_telepon">Telepon:</label></td>';
    echo '<td><input type="text" id="aparatur_telepon" name="aparatur_telepon" value="' . esc_attr($telepon) . '" style="width: 100%;" /></td></tr>';
    echo '</table>';
}

function layanan_details_callback($post)
{
    $persyaratan = get_post_meta($post->ID, '_layanan_persyaratan', true);
    $prosedur = get_post_meta($post->ID, '_layanan_prosedur', true);
    $biaya = get_post_meta($post->ID, '_layanan_biaya', true);
    $waktu = get_post_meta($post->ID, '_layanan_waktu', true);

    echo '<table style="width: 100%;">';
    echo '<tr><td><label for="layanan_persyaratan">Persyaratan:</label></td>';
    echo '<td><textarea id="layanan_persyaratan" name="layanan_persyaratan" rows="3" style="width: 100%;">' . esc_textarea($persyaratan) . '</textarea></td></tr>';
    echo '<tr><td><label for="layanan_prosedur">Prosedur:</label></td>';
    echo '<td><textarea id="layanan_prosedur" name="layanan_prosedur" rows="3" style="width: 100%;">' . esc_textarea($prosedur) . '</textarea></td></tr>';
    echo '<tr><td><label for="layanan_biaya">Biaya:</label></td>';
    echo '<td><input type="text" id="layanan_biaya" name="layanan_biaya" value="' . esc_attr($biaya) . '" style="width: 100%;" /></td></tr>';
    echo '<tr><td><label for="layanan_waktu">Waktu Penyelesaian:</label></td>';
    echo '<td><input type="text" id="layanan_waktu" name="layanan_waktu" value="' . esc_attr($waktu) . '" style="width: 100%;" /></td></tr>';
    echo '</table>';
}

// Save custom fields
function save_desa_custom_fields($post_id)
{
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;

    // Save aparatur fields
    if (isset($_POST['aparatur_jabatan'])) {
        update_post_meta($post_id, '_aparatur_jabatan', sanitize_text_field($_POST['aparatur_jabatan']));
    }
    if (isset($_POST['aparatur_pendidikan'])) {
        update_post_meta($post_id, '_aparatur_pendidikan', sanitize_text_field($_POST['aparatur_pendidikan']));
    }
    if (isset($_POST['aparatur_telepon'])) {
        update_post_meta($post_id, '_aparatur_telepon', sanitize_text_field($_POST['aparatur_telepon']));
    }

    // Save layanan fields
    if (isset($_POST['layanan_persyaratan'])) {
        update_post_meta($post_id, '_layanan_persyaratan', sanitize_textarea_field($_POST['layanan_persyaratan']));
    }
    if (isset($_POST['layanan_prosedur'])) {
        update_post_meta($post_id, '_layanan_prosedur', sanitize_textarea_field($_POST['layanan_prosedur']));
    }
    if (isset($_POST['layanan_biaya'])) {
        update_post_meta($post_id, '_layanan_biaya', sanitize_text_field($_POST['layanan_biaya']));
    }
    if (isset($_POST['layanan_waktu'])) {
        update_post_meta($post_id, '_layanan_waktu', sanitize_text_field($_POST['layanan_waktu']));
    }
}
add_action('save_post', 'save_desa_custom_fields');
