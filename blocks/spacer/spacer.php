<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_SPACER')) {
    /** 
     * BB_SPACER
     *
     * @category  blocks_bakery
     * @package   Spacer
     * @author    Essa Mamdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc GPLv2 Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_SPACER
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'spacerBlocksBakery' ));
        }
        /**
         * Section_block_block_register
         *
         * @return void
         */
        public function spacerBlocksBakery()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'bb-spacer-script',
                plugins_url('../../build/spacer/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
            );
    
      
    
             
    
            // Enqueue the script in the editor
            register_block_type(
                'blocksbakery/spacer',
                array(
               
                        'attributes' => 
                        array (
                          'spacer_height' => 
                          array (
                            'type' => 'number',
                            'default' => '10',
                          ),
                          'spacer_height_units' => 
                          array (
                            'type' => 'string',
                            'default' => 'px',
                          ),
                          'units_control' => 
                          array (
                            'type' => 'number',
                            'default' => '600',
                          ),
                          'bg_color' => 
                          array (
                            'type' => 'string',
                            'default' => '#eee',
                          ),
                          'bb_spacer_wrapper' =>
                          array(
                            'source' => 'attribute',
                            'attribute' => 'style',
                          ),
                          'bb_spacer_inner' =>
                          array(
                            'source' => 'attribute',
                            'attribute' => 'style',
                          ),

                          
                        ),
              
                    'editor_script' => 'bb-spacer-script',
                    'render_callback'=> 'Spacer_Render_callback',
                
                )
            );
        }
    }
}
function Spacer_Render_callback($attributes)
{

  $bb_spacer_wrapper= '';
  $bb_spacer_inner = '';

    $bb_spacer_wrapper .= ($attributes['bg_color'] != '#eee') ? "background-color: ". $attributes['bg_color'] .";" : 'background-color:transparent;';
    $bb_spacer_wrapper = (($bb_spacer_wrapper != '') ? ' style="'.$bb_spacer_wrapper . '"' : '');

    $bb_spacer_inner .= ($attributes['spacer_height'].$attributes['spacer_height_units'] != '10') ? "height: ". $attributes['spacer_height'].$attributes['spacer_height_units'] .";" : 'height:10';
   
    $bb_spacer_inner .= (($bb_spacer_inner != '') ? ' style="'.$bb_spacer_inner . '"' : '');

    $bb_spacer_output = '';
    $bb_spacer_output .= '<div class="bb-spacer-container" '.$bb_spacer_wrapper.' >';
    $bb_spacer_output .= '<div class="bb-spacer-inner" '.$bb_spacer_inner. '>';
  
    $bb_spacer_output .= '</div>';
    $bb_spacer_output .= '</div>';


    return $bb_spacer_output;

}

new BB_SPACER();
