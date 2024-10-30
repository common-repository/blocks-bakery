<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if(!class_exists('GB_ADVACED_COLUMNS')){
class GB_ADVACED_COLUMNS {
	public function __construct() {
		add_action( 'init', array( $this, 'advanced_columns_block_register' ) );
	}
	public function advanced_columns_block_register() {

		// Register our block script with WordPress
		wp_register_script(
			'gb-advanced-columns-script',
			plugins_url( '../../build/advanced-columns/main.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components' )
		);

		// Register our block's base CSS
		wp_register_style(
			'gb-advanced-columns-style',
			plugins_url( '../../build/advanced-columns/style.css', __FILE__ ),
			array( 'wp-blocks' )
		);

		// Register our block's editor-specific CSS

		wp_register_style(
			'gb-advanced-columns-editor-style',
			plugins_url( '../../build/advanced-columns/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' )
		);

		// Enqueue the script in the editor
		register_block_type(
			'blocksbakery/advanced-column',
			array(
				'editor_script' => 'gb-advanced-columns-script',
				'editor_style'  => 'gb-advanced-columns-style',
				'style'         => 'gb-advanced-columns-editor-style',
			)
		);
	}

 	}
}

new GB_ADVACED_COLUMNS();
