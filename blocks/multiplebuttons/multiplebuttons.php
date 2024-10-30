<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if(!class_exists('BB_MUTIBUTTON')){
class BB_MUTIBUTTON {
	public function __construct() {
		add_action( 'init', array( $this, 'multibutton_block_register' ) );
	}
	public function multibutton_block_register() {

		// Register our block script with WordPress
		wp_register_script(
			'gb-multi-script',
			plugins_url( '../../build/multiplebuttons/main.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-editor', 'wp-components' )
		);

		// Register our block's base CSS
		wp_register_style(
			'gb-multi-style',
			plugins_url( '../../build/multiplebuttons/style.css', __FILE__ ),
			array( 'wp-blocks' )
		);

		// Register our block's editor-specific CSS

		wp_register_style(
			'gb-multi-editor-style',
			plugins_url( '../../build/multiplebuttons/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' )
		);

		// Enqueue the script in the editor
		register_block_type(
			'blocksbakery/innerbutton',
			array(
				'editor_script' => 'gb-multi-script',
				'editor_style'  => 'gb-multi-style',
				'style'         => 'gb-multi-editor-style',
			)
			
		);
	}

 	}
}

new BB_MUTIBUTTON();
