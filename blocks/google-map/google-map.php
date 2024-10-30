<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_GOOGLE_MAP')) {
    /**
     * BB_GOOGLE_MAP
     *
     * @category  blocks_bakery
     * @package   Google_Map
     * @author    Essa Mamdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc GPLv2 Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_GOOGLE_MAP
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'googleMapBlockRegister' ));
        }
        /**
         * Google_map_block_register
         *
         * @return void
         */
        public function googleMapBlockRegister()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'gb-google-map-script',
                plugins_url('../../build/google-map/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-components', 'wp-editor' )
            );
    
            // Enqueue the script in the editor
            register_block_type('blocksbakery/google-map',array(
                   'attributes' => 
                    array (
                      'zoom_map' => 
                      array (
                        'type' => 'number',
                        'default' => 15,
                      ),
                      'height_map' => 
                      array (
                        'type' => 'number',
                        'default' => 300,
                      ),
                      'heigphtpxvh'=>array(
                        'type'=>'string',
                        'default'=>'vh'
                      ),
                      'address' => 
                      array (
                        'type' => 'string',
                        'default' => 'damn e koh',
                      ),
                      'lang_code' => 
                      array (
                        'type' => 'string',
                        'default' => 'en',
                      ),
                      'googlemap_style' => array (
                        'source' => 'attribute',
                        'attribute' => 'style',
                      ),
                    'css_blur' => array(
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'css_brightness' =>   array(
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_contrast' => array(
               
                    'type' => 'number',
                    'default' => 100,
                    ),
                     'css_saturation' => array(
                
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_hue' => array(
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'css_hover_brightness'=>array (
                      'type'=>'number',
                      'default'=> 100,
                    ),
                  'css_hover_contrast'=> array(
                      'type'=>'number',
                      'default'=> 100,
                  ),
                  'css_hover_saturation'=>array (
                      'type'=> 'number',
                      'default'=> 100,
                  ),
                  'css_hover_hue'=>array(
                      'type'=> 'number',
                      'default'=> 0,
                  ),
                  "css_hover_blur"=> array(
                      'type'=> 'number',
                      'default'=> 0,
                  ),
                    ),
                 
                 'editor_script' => 'gb-google-map-script',
                 'render_callback' => 'googlemap_render_callback',
                )
            );
        }
    }
} 
      function googlemap_render_callback($attributes)
              {
           
          $googlemap_ZOOM =  ($attributes['zoom_map'] != '15') ? $attributes['zoom_map']: '15';
          $googlemap_address =  ($attributes['address'] != 'damn e koh') ?  $attributes['address'] : 'damn e koh';
          $googlemap_lang=  ($attributes['lang_code'] != 'en') ?  $attributes['lang_code']  : 'en';
             
           $chbrt= ($attributes['css_brightness'] != '100') ? "brightness(".$attributes['css_brightness']."%)"  : 'brightness(100%)';
           $chc= ($attributes['css_contrast'] != '100') ? "contrast(".$attributes['css_contrast']."%)"  : 'contrast(100%)';
           $chs= ($attributes['css_saturation'] != '100') ? "saturate(".$attributes['css_saturation']."%)"  : 'saturate(100%)';
           $chb= ($attributes['css_blur'] != '0') ? "blur(".$attributes['css_blur']."px)"  : 'blur(0px)';
           $chh= ($attributes['css_hue'] != '0') ? "hue-rotate(".$attributes['css_hue']."deg)"  : 'hue-rotate(0deg)';
           
           $filter = $chbrt .= $chc .= $chs .= $chb .= $chh;
           $unit=  ($attributes['heigphtpxvh'] != 'vh') ?  $attributes['heigphtpxvh']  : 'vh';
           $heightMap =  ($attributes['height_map'] != '300') ? $attributes['height_map'].$unit  : '300 '.$unit.'';
           $google_style= 'style=filter:'.$filter.';width:100%;height:'.$heightMap.';';
           // $googlemap_style = "";

          //$googlemap_style = (($googlemap_style != '') ? ' style= " width:100%; height:'.$heightMap.';filter:'.$filter.'"' : '');
           
              $gbm_block = "";
              $gbm_block .= '<div>';
              $gbm_block .= '<iframe class="bb-google-map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-1FeCwOmIay86tOgg-NIejXLmHKqKVzA&q='.$googlemap_address.'&zoom='.$googlemap_ZOOM.'&language='.$googlemap_lang.'" '.$google_style.'  > </ifrmae>';
              $gbm_block .= '</div>';

              return $gbm_block;

            
              }    
new BB_GOOGLE_MAP();
