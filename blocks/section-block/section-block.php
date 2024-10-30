<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_SECTION_BLOCK')) {
    /**
     * BB_SECTION_BLOCK
     *
     * @category  blocks_bakery
     * @package   Section
     * @author    Essa Mamdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc GPLv2 Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_SECTION_BLOCK
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'sectionBlockRegister' ));
        }
        /**
         * Section_block_block_register
         *
         * @return void
         */
        public function sectionBlockRegister()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'gb-section-script',
                plugins_url('../../build/section-block/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
            );
    
            // Register our block's base CSS
    
            // Register our block's editor-specific CSS
    
            
    
            // Enqueue the script in the editor
            register_block_type(
                'blocksbakery/section',
                array(
                    'editor_script' => 'gb-section-script',
                
                )
            );
        }
    }
}


new BB_SECTION_BLOCK();
