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
        add_action('rest_api_init', array($this, 'register_custom_fields_api'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
        
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
            'supports' => array('title', 'thumbnail'),
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
        // Kata Sambutan Kepala Desa
        register_post_type('kata_sambutan', array(
            'labels' => array(
                'name' => 'Kata Sambutan',
                'singular_name' => 'Kata Sambutan',
                'add_new' => 'Tambah Kata Sambutan',
                'add_new_item' => 'Tambah Kata Sambutan Baru',
                'edit_item' => 'Edit Kata Sambutan',
                'new_item' => 'Kata Sambutan Baru',
                'view_item' => 'Lihat Kata Sambutan',
                'search_items' => 'Cari Kata Sambutan',
                'not_found' => 'Tidak ada Kata Sambutan',
                'not_found_in_trash' => 'Tidak ada Kata Sambutan di trash'
            ),
            'public' => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'menu_icon' => 'dashicons-format-status'
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
     * Register custom fields untuk REST API
     */
    public function register_custom_fields_api()
    {
        // Register custom fields untuk aparatur
        register_rest_field('aparatur', 'aparatur_meta', array(
            'get_callback' => array($this, 'get_aparatur_meta'),
            'update_callback' => null,
            'schema' => array(
                'description' => 'Meta fields for aparatur',
                'type' => 'object',
                'context' => array('view', 'edit'),
                'properties' => array(
                    'jabatan' => array(
                        'type' => 'string',
                        'description' => 'Jabatan aparatur'
                    ),
                    'pendidikan' => array(
                        'type' => 'string', 
                        'description' => 'Pendidikan aparatur'
                    ),
                    'telepon' => array(
                        'type' => 'string',
                        'description' => 'Telepon aparatur'
                    ),
                    'foto' => array(
                        'type' => 'object',
                        'description' => 'Foto aparatur',
                        'properties' => array(
                            'id' => array('type' => 'integer'),
                            'url' => array('type' => 'string'),
                            'thumbnail' => array('type' => 'string'),
                            'medium' => array('type' => 'string'),
                            'large' => array('type' => 'string')
                        )
                    )
                )
            )
        ));
        
        // Register custom fields untuk layanan
        register_rest_field('layanan', 'layanan_meta', array(
            'get_callback' => array($this, 'get_layanan_meta'),
            'update_callback' => null,
            'schema' => array(
                'description' => 'Meta fields for layanan',
                'type' => 'object',
                'context' => array('view', 'edit'),
                'properties' => array(
                    'persyaratan' => array(
                        'type' => 'string',
                        'description' => 'Persyaratan layanan'
                    ),
                    'prosedur' => array(
                        'type' => 'string',
                        'description' => 'Prosedur layanan'
                    ),
                    'biaya' => array(
                        'type' => 'string',
                        'description' => 'Biaya layanan'
                    ),
                    'waktu' => array(
                        'type' => 'string',
                        'description' => 'Waktu penyelesaian'
                    )
                )
            )
        ));
        
        // Register custom fields untuk kata sambutan
        register_rest_field('kata_sambutan', 'kata_sambutan_meta', array(
            'get_callback' => array($this, 'get_kata_sambutan_meta'),
            'update_callback' => null,
            'schema' => array(
                'description' => 'Meta fields for kata sambutan',
                'type' => 'object',
                'context' => array('view', 'edit'),
                'properties' => array(
                    'nama_kepala_desa' => array(
                        'type' => 'string',
                        'description' => 'Nama kepala desa'
                    ),
                    'jabatan' => array(
                        'type' => 'string',
                        'description' => 'Jabatan kepala desa'
                    ),
                    'foto_kepala_desa' => array(
                        'type' => 'object',
                        'description' => 'Foto kepala desa',
                        'properties' => array(
                            'id' => array('type' => 'integer'),
                            'url' => array('type' => 'string'),
                            'thumbnail' => array('type' => 'string'),
                            'medium' => array('type' => 'string'),
                            'large' => array('type' => 'string')
                        )
                    )
                )
            )
        ));
    }
    
    /**
     * Get aparatur meta fields untuk REST API
     */
    public function get_aparatur_meta($object, $field_name, $request)
    {
        $jabatan = get_post_meta($object['id'], '_aparatur_jabatan', true);
        $pendidikan = get_post_meta($object['id'], '_aparatur_pendidikan', true);
        $telepon = get_post_meta($object['id'], '_aparatur_telepon', true);
        $foto_id = get_post_meta($object['id'], '_aparatur_foto_id', true);
        
        $foto_data = null;
        if ($foto_id) {
            $foto_data = array(
                'id' => intval($foto_id),
                'url' => wp_get_attachment_url($foto_id),
                'thumbnail' => wp_get_attachment_image_url($foto_id, 'thumbnail'),
                'medium' => wp_get_attachment_image_url($foto_id, 'medium'),
                'large' => wp_get_attachment_image_url($foto_id, 'large')
            );
        }
        
        return array(
            'jabatan' => $jabatan,
            'pendidikan' => $pendidikan,
            'telepon' => $telepon,
            'foto' => $foto_data
        );
    }
    
    /**
     * Get layanan meta fields untuk REST API
     */
    public function get_layanan_meta($object, $field_name, $request)
    {
        return array(
            'persyaratan' => get_post_meta($object['id'], '_layanan_persyaratan', true),
            'prosedur' => get_post_meta($object['id'], '_layanan_prosedur', true),
            'biaya' => get_post_meta($object['id'], '_layanan_biaya', true),
            'waktu' => get_post_meta($object['id'], '_layanan_waktu', true)
        );
    }
    
    /**
     * Get kata sambutan meta fields untuk REST API
     */
    public function get_kata_sambutan_meta($object, $field_name, $request)
    {
        $nama_kepala_desa = get_post_meta($object['id'], '_kata_sambutan_nama_kepala_desa', true);
        $jabatan = get_post_meta($object['id'], '_kata_sambutan_jabatan', true);
        $foto_kepala_desa_id = get_post_meta($object['id'], '_kata_sambutan_foto_kepala_desa_id', true);
        
        $foto_data = null;
        if ($foto_kepala_desa_id) {
            $foto_data = array(
                'id' => intval($foto_kepala_desa_id),
                'url' => wp_get_attachment_url($foto_kepala_desa_id),
                'thumbnail' => wp_get_attachment_image_url($foto_kepala_desa_id, 'thumbnail'),
                'medium' => wp_get_attachment_image_url($foto_kepala_desa_id, 'medium'),
                'large' => wp_get_attachment_image_url($foto_kepala_desa_id, 'large')
            );
        }
        
        return array(
            'nama_kepala_desa' => $nama_kepala_desa,
            'jabatan' => $jabatan,
            'foto_kepala_desa' => $foto_data
        );
    }
    
    /**
     * Enqueue admin scripts for media uploader
     */
    public function enqueue_admin_scripts($hook)
    {
        global $post_type;
        
        // Load on aparatur and kata_sambutan post type edit screens
        if (($hook == 'post.php' || $hook == 'post-new.php') && 
            ($post_type == 'aparatur' || $post_type == 'kata_sambutan')) {
            wp_enqueue_media();
            wp_enqueue_script('jquery');
        }
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
    
    // Custom fields untuk Kata Sambutan
    add_meta_box(
        'kata_sambutan_details',
        'Detail Kata Sambutan',
        'kata_sambutan_details_callback',
        'kata_sambutan',
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
    $foto_id = get_post_meta($post->ID, '_aparatur_foto_id', true);
    
    // Add nonce for security
    wp_nonce_field('aparatur_details_nonce', 'aparatur_details_nonce');
    
    echo '<table style="width: 100%;">';
    echo '<tr><td><label for="aparatur_jabatan">Jabatan:</label></td>';
    echo '<td><input type="text" id="aparatur_jabatan" name="aparatur_jabatan" value="' . esc_attr($jabatan) . '" style="width: 100%;" /></td></tr>';
    echo '<tr><td><label for="aparatur_pendidikan">Pendidikan:</label></td>';
    echo '<td><input type="text" id="aparatur_pendidikan" name="aparatur_pendidikan" value="' . esc_attr($pendidikan) . '" style="width: 100%;" /></td></tr>';
    echo '<tr><td><label for="aparatur_telepon">Telepon:</label></td>';
    echo '<td><input type="text" id="aparatur_telepon" name="aparatur_telepon" value="' . esc_attr($telepon) . '" style="width: 100%;" /></td></tr>';
    
    // Foto Aparatur Field
    echo '<tr><td><label for="aparatur_foto">Foto Aparatur:</label></td>';
    echo '<td>';
    echo '<div id="aparatur-foto-wrapper">';
    
    // Display current image if exists
    if ($foto_id) {
        $image_url = wp_get_attachment_image_url($foto_id, 'medium');
        echo '<div id="aparatur-foto-preview" style="margin-bottom: 10px;">';
        echo '<img src="' . esc_url($image_url) . '" style="max-width: 150px; height: auto; border: 1px solid #ddd; padding: 5px;" />';
        echo '</div>';
    }
    
    echo '<input type="hidden" id="aparatur_foto_id" name="aparatur_foto_id" value="' . esc_attr($foto_id) . '" />';
    echo '<button type="button" id="upload-aparatur-foto" class="button">Pilih Foto</button> ';
    echo '<button type="button" id="remove-aparatur-foto" class="button" style="' . ($foto_id ? '' : 'display:none;') . '">Hapus Foto</button>';
    echo '</div>';
    echo '</td></tr>';
    
    echo '</table>';
    
    // Add JavaScript for media uploader
    ?>
    <script type="text/javascript">
    jQuery(document).ready(function($) {
        var mediaUploader;
        
        $('#upload-aparatur-foto').click(function(e) {
            e.preventDefault();
            
            if (mediaUploader) {
                mediaUploader.open();
                return;
            }
            
            mediaUploader = wp.media({
                title: 'Pilih Foto Aparatur',
                button: {
                    text: 'Pilih Foto'
                },
                multiple: false,
                library: {
                    type: 'image'
                }
            });
            
            mediaUploader.on('select', function() {
                var attachment = mediaUploader.state().get('selection').first().toJSON();
                
                $('#aparatur_foto_id').val(attachment.id);
                
                var imageHtml = '<div id="aparatur-foto-preview" style="margin-bottom: 10px;">';
                imageHtml += '<img src="' + attachment.sizes.medium.url + '" style="max-width: 150px; height: auto; border: 1px solid #ddd; padding: 5px;" />';
                imageHtml += '</div>';
                
                $('#aparatur-foto-preview').remove();
                $('#aparatur-foto-wrapper').prepend(imageHtml);
                $('#remove-aparatur-foto').show();
            });
            
            mediaUploader.open();
        });
        
        $('#remove-aparatur-foto').click(function(e) {
            e.preventDefault();
            
            $('#aparatur_foto_id').val('');
            $('#aparatur-foto-preview').remove();
            $(this).hide();
        });
    });
    </script>
    <?php
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

function kata_sambutan_details_callback($post)
{
    $nama_kepala_desa = get_post_meta($post->ID, '_kata_sambutan_nama_kepala_desa', true);
    $jabatan_kepala_desa = get_post_meta($post->ID, '_kata_sambutan_jabatan', true);
    $foto_kepala_desa_id = get_post_meta($post->ID, '_kata_sambutan_foto_kepala_desa_id', true);
    
    // Add nonce for security
    wp_nonce_field('kata_sambutan_details_nonce', 'kata_sambutan_details_nonce');
    
    echo '<table style="width: 100%;">';
    echo '<tr><td><label for="kata_sambutan_nama_kepala_desa">Nama Kepala Desa:</label></td>';
    echo '<td><input type="text" id="kata_sambutan_nama_kepala_desa" name="kata_sambutan_nama_kepala_desa" value="' . esc_attr($nama_kepala_desa) . '" style="width: 100%;" placeholder="Contoh: Bapak Dedi Wahyudi, SE.MM" /></td></tr>';
    
    echo '<tr><td><label for="kata_sambutan_jabatan">Jabatan:</label></td>';
    echo '<td><input type="text" id="kata_sambutan_jabatan" name="kata_sambutan_jabatan" value="' . esc_attr($jabatan_kepala_desa) . '" style="width: 100%;" placeholder="Contoh: Kepala Desa Tanjung Rambutan" /></td></tr>';
    
    // Foto Kepala Desa Field
    echo '<tr><td><label for="kata_sambutan_foto">Foto Kepala Desa:</label></td>';
    echo '<td>';
    echo '<div id="kata-sambutan-foto-wrapper">';
    
    // Display current image if exists
    if ($foto_kepala_desa_id) {
        $image_url = wp_get_attachment_image_url($foto_kepala_desa_id, 'medium');
        echo '<div id="kata-sambutan-foto-preview" style="margin-bottom: 10px;">';
        echo '<img src="' . esc_url($image_url) . '" style="max-width: 200px; height: auto; border: 1px solid #ddd; padding: 5px; border-radius: 8px;" />';
        echo '</div>';
    }
    
    echo '<input type="hidden" id="kata_sambutan_foto_kepala_desa_id" name="kata_sambutan_foto_kepala_desa_id" value="' . esc_attr($foto_kepala_desa_id) . '" />';
    echo '<button type="button" id="upload-kata-sambutan-foto" class="button button-primary">Pilih Foto Kepala Desa</button> ';
    echo '<button type="button" id="remove-kata-sambutan-foto" class="button" style="' . ($foto_kepala_desa_id ? '' : 'display:none;') . '">Hapus Foto</button>';
    echo '<br><small style="color: #666;">Ukuran foto yang disarankan: 400x400px atau rasio 1:1</small>';
    echo '</div>';
    echo '</td></tr>';
    
    echo '</table>';
    
    // Add JavaScript for media uploader
    ?>
    <script type="text/javascript">
    jQuery(document).ready(function($) {
        var mediaUploader;
        
        $('#upload-kata-sambutan-foto').click(function(e) {
            e.preventDefault();
            
            if (mediaUploader) {
                mediaUploader.open();
                return;
            }
            
            mediaUploader = wp.media({
                title: 'Pilih Foto Kepala Desa',
                button: {
                    text: 'Pilih Foto'
                },
                multiple: false,
                library: {
                    type: 'image'
                }
            });
            
            mediaUploader.on('select', function() {
                var attachment = mediaUploader.state().get('selection').first().toJSON();
                
                $('#kata_sambutan_foto_kepala_desa_id').val(attachment.id);
                
                var imageHtml = '<div id="kata-sambutan-foto-preview" style="margin-bottom: 10px;">';
                imageHtml += '<img src="' + attachment.sizes.medium.url + '" style="max-width: 200px; height: auto; border: 1px solid #ddd; padding: 5px; border-radius: 8px;" />';
                imageHtml += '</div>';
                
                $('#kata-sambutan-foto-preview').remove();
                $('#kata-sambutan-foto-wrapper').prepend(imageHtml);
                $('#remove-kata-sambutan-foto').show();
            });
            
            mediaUploader.open();
        });
        
        $('#remove-kata-sambutan-foto').click(function(e) {
            e.preventDefault();
            
            $('#kata_sambutan_foto_kepala_desa_id').val('');
            $('#kata-sambutan-foto-preview').remove();
            $(this).hide();
        });
    });
    </script>
    <?php
}

// Save custom fields
function save_desa_custom_fields($post_id)
{
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if (!current_user_can('edit_post', $post_id)) return;
    
    // Verify nonce for aparatur
    if (isset($_POST['aparatur_details_nonce']) && !wp_verify_nonce($_POST['aparatur_details_nonce'], 'aparatur_details_nonce')) {
        return;
    }

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
    
    // Save aparatur foto
    if (isset($_POST['aparatur_foto_id'])) {
        $foto_id = intval($_POST['aparatur_foto_id']);
        if ($foto_id > 0) {
            update_post_meta($post_id, '_aparatur_foto_id', $foto_id);
        } else {
            delete_post_meta($post_id, '_aparatur_foto_id');
        }
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
    
    // Verify nonce for kata sambutan
    if (isset($_POST['kata_sambutan_details_nonce']) && wp_verify_nonce($_POST['kata_sambutan_details_nonce'], 'kata_sambutan_details_nonce')) {
        // Save kata sambutan fields
        if (isset($_POST['kata_sambutan_nama_kepala_desa'])) {
            update_post_meta($post_id, '_kata_sambutan_nama_kepala_desa', sanitize_text_field($_POST['kata_sambutan_nama_kepala_desa']));
        }
        if (isset($_POST['kata_sambutan_jabatan'])) {
            update_post_meta($post_id, '_kata_sambutan_jabatan', sanitize_text_field($_POST['kata_sambutan_jabatan']));
        }
        
        // Save kata sambutan foto
        if (isset($_POST['kata_sambutan_foto_kepala_desa_id'])) {
            $foto_id = intval($_POST['kata_sambutan_foto_kepala_desa_id']);
            if ($foto_id > 0) {
                update_post_meta($post_id, '_kata_sambutan_foto_kepala_desa_id', $foto_id);
            } else {
                delete_post_meta($post_id, '_kata_sambutan_foto_kepala_desa_id');
            }
        }
    }
}
add_action('save_post', 'save_desa_custom_fields');
