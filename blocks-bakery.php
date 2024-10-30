<?php
/**
 * Plugin Name: Blocks Bakery
 * Plugin  URI: https://www.blocksbakery.com
 * Description: Enhance the blocksbakery editor with complex and powerful blocks that will help you quickly create web pages. We offer you a bunch of blocks from Blocks bakery, and you can select one according to the requirements. Each block will provide you many customization options; you can design web pages using those options. 
 * Author: Essa Mamdani
 * Author URI: https://www.essamamdani.com
 * Version: 1.0.12
 * Text Domain:       blocks-bakery
 * Domain Path:       /languages languages folder path
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
define( 'BB__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

if (function_exists('gb_fs_init')) {
    gb_fs_init()->set_basename(true, _FILE_);
} else {
    if (! function_exists('gb_fs_init')) {
        // Create a helper function for easy SDK access.
        function gb_fs_init()
        {
            global $gb_fs_init;

            if (! isset($gb_fs_init)) {
                // Activate multisite network integration.
                if (! defined('WP_FS__PRODUCT_8639_MULTISITE')) {
                    define('WP_FS__PRODUCT_8639_MULTISITE', true);
                }

                // Include Freemius SDK.
                require_once BB__PLUGIN_DIR . '/freemius/start.php';

                $gb_fs_init = fs_dynamic_init(array(
            'id'                  => '8639',
            'slug'                => 'blocks-bakery',
            'type'                => 'plugin',
            'public_key'          => 'pk_d3eec37757ca5e24284647183a3a8',
            'is_premium'          => true,
            // If your plugin is a serviceware, set this option to false.
            'has_premium_version' => true,
            'has_addons'          => false,
            'has_paid_plans'      => true,
            'trial'               => array(
                'days'               => 14,
                'is_require_payment' => true,
            ),
            'menu'                => array(
                'first-path'     => 'plugins.php',
                'support'        => false,
            ),
            // Set the SDK to work in a sandbox mode (for development & testing).
            // IMPORTANT: MAKE SURE TO REMOVE SECRET KEY BEFORE DEPLOYMENT.
            'secret_key'          => 'sk_2At<V$XT=fiv*2E-0+E{.XhDs%f)u',
        ));
            }

            return $gb_fs_init;
        }

        // Init Freemius.
        gb_fs_init();
        // Signal that SDK was initiated.
        do_action('gb_fs_init_loaded');

        if (gb_fs_init()->is__premium_only()) {
            if (gb_fs_init()->is_plan('pro', true)) {			
                foreach (glob(plugin_dir_path(__FILE__) . 'blocks/{,*/,*/*/,*/*/*/}*.php', GLOB_BRACE) as $file) {
                    // die($file);
                    include_once $file;
                }
            } elseif (gb_fs_init()->is_plan('basic')) {
                // ... logic related to Business plan and higher plans ...
                foreach (glob(plugin_dir_path(__FILE__) . 'blocks/{,*/,*/*/,*/*/*/}*.php', GLOB_BRACE) as $file) {
                    // die($file);
                    include_once $file;
                }
            } elseif (gb_fs_init()->is_not_paying()) { 
                include_once BB__PLUGIN_DIR .'blocks/advanced-heading/advanced-heading.php';
                include_once BB__PLUGIN_DIR .'blocks/info-box/info-box.php';      
                include_once BB__PLUGIN_DIR .'blocks/team/team.php';      
                include_once BB__PLUGIN_DIR .'blocks/marketing-button/marketing-button.php';      
            }
        }  
	}
}

add_action('block_categories_all',function($categories){
	// die;
	$category_slugs = wp_list_pluck($categories,'slug');
	$d = in_array('blocks-bakery',$categories, true) ? $categories : array_merge($categories,array(array(
		'slug'=>'blocks-bakery',
		'title'=> __('Blocks Bakery','blocks-bakery'),
		'icon'=>NULL
	)));
	
	return $d;
});
