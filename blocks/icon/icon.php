<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_ICON')) {
    /** 
     * BB_ICON
     *
     * @category  blocks_bakery
     * @package   Icon
     * @author    Essa Mamdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc GPLv2 Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_ICON
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'iconBlocksBakery' ));
        }
        /**
         * Section_block_block_register
         *
         * @return void
         */
        public function iconBlocksBakery()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'bb-icon-script',
                plugins_url('../../build/icon/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
            );


           
          // Register our block's editor-specific CSS

          wp_register_style(
              'bb-icon-editor-style',
              plugins_url('../../build/icon/editor.css', __FILE__),
              array( 'wp-edit-blocks' )
          );
            add_action('wp_enqueue_scripts', 'qg_enqueue');
            function qg_enqueue()
            {
                wp_enqueue_script(
                    'custom_jquery',
                    plugin_dir_url(__FILE__) . 'jquery.min.js'
                );
                wp_enqueue_script(
                    'custom_code',
                    plugin_dir_url(__FILE__) . 'custom_js.js'
                );
            }

            //Registering Css.. 

    
            // Enqueue the script in the editor
            register_block_type( 'blocksbakery/icon', array (
              'attributes' => 
              array (
                'text_align_wrapper' => 
                array (
                  'type' => 'html',
                  'default' => 'center',
                ),
                'width_per_px' => 
                array (
                  'type' => 'string',
                  'default' => '%',
                ),
                'icon_selector' => 
                array (
                  'type' => 'string',
                  'default' => 'fas fa-star',
                ),
              'icon_size' => 
                array (
                  'type' => 'number',
                  'default' => 50,
                ),
                'icon_colors' => 
                array (
                  'type' => 'string',
                  'default' => 'black',
                ),
                'rotate_size' => 
                array (
                  'type' => 'number',
                  'default'=>''
                ),
                'icon_element_bg' => 
                array (
                  'type' => 'string',
                  'default'=>'',
                ),
                'icon_element_padding' => 
                array (
                  'type' => 'number',
                  'default' => 25,
                ),
                'icon_border_radius' => 
                array (
                  'type' => 'number',
                  'default' => '50%',
                ),
                'border_left_radius' => 
                array (
                  'type' => 'string',
                  'default' => 50,
                ),
                'border_right_radius' => 
                array (
                  'type' => 'string',
                  'default' => 50,
                ),
                'border_top_radius' => 
                array (
                  'type' => 'string',
                  'default' => 50,
                ),
                'border_bottom_radius' => 
                array (
                  'type' => 'string',
                  'default' => 50,
                ),
                'type_border' => 
                array (
                  'type' => 'string',
                ),
                'isAllBorder' => 
                array (
                  'type' => 'boolean',
                  'default' => true,
                ),
                'type_radius' => 
                array (
                  'type' => 'string',
                ),
                'img_border_radius_unit' => 
                array (
                  'type' => 'string',
                  'default' => '%',
                ),
                'border_left_width' => 
                array (
                  'type' => 'number',
                  'default' => 1,
                ),
                'border_right_width' => 
                array (
                  'type' => 'number',
                  'default' => 1,
                ),
                'border_top_width' => 
                array (
                  'type' => 'number',
                  'default' => 1,
                ),
                'border_bottom_width' => 
                array (
                  'type' => 'number',
                  'default' => 1,
                ),
                'border_style' => 
                array (
                  'type' => 'string',
                ),
                'icon_view' => 
                array (
                  'type' => 'text',
                  'default' => 'defaultf',
                ),
                'shape_for_icon' => 
                array (
                  'type' => 'string',
                  'default' => 'circle',
                ),
                'icon_link' => 
                array (
                  'type' => 'string',
                  'default' => '#',
                ),
                'open_tab_option' => 
                array (
                  'type' => 'boolean',
                  'default' => 'false',
                ),
                'open_tab' => 
                array (
                  'type' => 'string',
                  'default' => 'NULL',
                ),
                'rel_nofollow' => 
                array (
                  'type' => 'string',
                  'default' => 'NULL',
                ),
                'nofollow' => 
                array (
                  'type' => 'boolean',
                  'default' => 'false',
                ),
                'hover_icon_color' => 
                array (
                  'type' => 'string',
                  'default'=>'',
                ),
                'border_style_width' => 
                array (
                  'type' => 'string',
                  'default' => 'none',
                ),
                'hover_icon_bg_color' => 
                array (
                  'type' => 'string',
                ),
              ),
            
              
                    'editor_script' => 'bb-icon-script',
                    'editor_style'=> 'bb-icon-editor-style',
                    'render_callback'=> 'Icon_Render_callback',
                
                )
            );
        }
    }
}
function Icon_Render_callback($attributes)
{

   
  
 //container style
   $width = "100%";
   $container_style 	= (($width != '') ? ' style="width:'.$width.'"' : '100%');
 //wrapper style
   $wrapper_align=($attributes['text_align_wrapper'] != 'center') ? "text-align:".$attributes['text_align_wrapper'].";": 'text-align:center;';
   $wrapper_style 	= (($wrapper_align != '') ? ' style="'.$wrapper_align.'"' : '');
 
   //icon selector
 $iocn_selector=($attributes['icon_selector'] != 'fas fa-star') ? "".$attributes['icon_selector']."": 'fas fa-star';
 $iocn_clr=($attributes['icon_colors'] != 'black') ? "".$attributes['icon_colors'].";": 'black;';
 $iocn_clr_for_normal_hover=($attributes['icon_colors'] != 'black') ? "".$attributes['icon_colors']."": 'black';
  $icon_hover =($attributes['hover_icon_color'] != '') ? "".$attributes['hover_icon_color']."": '';
 $icon_sel="";
 $icon_sel.=($attributes['rotate_size'] != '') ? "transform:rotate(".$attributes['rotate_size']."deg);": 'transform:rotate(deg);';
  // $icon_sel.=($attributes['hover_icon_color'] != '') ? "color:".$attributes['hover_icon_color'].";": 'color:;';
 $icon_sel	= (($icon_sel != '') ? ' style="'.$icon_sel.'width:1em;height:1em;position:relative;color:'.$iocn_clr.'"' : '');


//href style
$href_link =($attributes['icon_link'] != '#') ? "".$attributes['icon_link']."": '#';
$href_target =($attributes['open_tab'] != 'NULL') ? "".$attributes['open_tab']."": 'NULL';
$href_rel =($attributes['rel_nofollow'] != 'NULL') ? "".$attributes['rel_nofollow']."": 'NULL';
$href_no =($attributes['nofollow'] != 'false') ? "".$attributes['nofollow']."": 'false';

//icon style
// $iocn_allBorder=($attributes['isAllBorder'] != 'true') ? "".$attributes['isAllBorder']."": '';
// $iocn_typeRadius=($attributes['type_radius'] != '') ? "".$attributes['type_radius']."": '';
// $iocn_borderType.=($attributes['type_border'] != '') ? "border-type:".$attributes['type_border']."": 'border-type:';

// $iocn_oto=($attributes['open_tab_option'] != 'false') ? "".$attributes['open_tab_option']."": 'false';
// $border_Style_wdth=($attributes['border_style_width'] != 'none') ? "".$attributes['border_style_width']."": 'none';
// $hover_icon_bgColor=($attributes['hover_icon_bg_color'] != '') ? "color:".$attributes['hover_icon_bg_color']."color:": '';



$iocn_style="";
$iocn_style.=($attributes['icon_size'] != '50') ? "font-size:".$attributes['icon_size']."px;": 'font-size:50px;';
$iocn_style.=($attributes['border_top_width'] != '1') ? "border-top-width:".$attributes['border_top_width']."px;": 'border-top-width:1px;';
$iocn_style.=($attributes['border_right_width'] != '1') ? "border-right-width:".$attributes['border_right_width']."px;": 'border-right-width:1px;';
$iocn_style.=($attributes['border_bottom_width'] != '1') ? "border-bottom-width:".$attributes['border_bottom_width']."px;": 'border-bottom-width:1px;';
$iocn_style.=($attributes['border_left_width'] != '1') ? "border-left-width:".$attributes['border_left_width']."px;": 'border-left-width:1px;';
$iocn_style.=($attributes['icon_element_padding'] != '25') ? "padding:".$attributes['icon_element_padding']."px;": 'padding:25px;';

$iocn_style	= (($iocn_style != '') ? ' style="'.$iocn_style.'display:inline-block;line-height:1;transition:all 0.3s ease 0s;' : '');
//$iocn_style.=($attributes['icon_border_radius'] != '50%') ? "border-radius:".$attributes['icon_border_radius']."%;": 'border-radius:50%;';

 $iocn_vw=($attributes['icon_view'] != 'defaultf') ? "".$attributes['icon_view']."": 'defaultf';
 $iocn_shape=($attributes['shape_for_icon'] != 'circle') ? "".$attributes['shape_for_icon']."": 'circle';

if($iocn_vw=='defaultf'){

  $img_rd_unit=($attributes['img_border_radius_unit'] != '%') ? "".$attributes['img_border_radius_unit']."": '%';
  $btr= "0".$img_rd_unit;
$icon_block="";
$icon_block.='<div class="bb_icon_container" '.$container_style.' >';
$icon_block.='<div class="bb_icon_wrapper" '.$wrapper_style.'>';
$icon_block.='<div class="bb_icon_element" '.$iocn_style.'background-color:transparent;border-style:none;display:inline-block;transition:all .3s;border-radius:'.$btr.';border-color:'.$iocn_clr.'" >';
$icon_block.='<a class="bb_icon_wrapper_inner" href="'.$href_link.'" target="'.$href_target.'" rel="'.$href_rel.'">';
$icon_block.='<span class="'.$iocn_selector.' bb_icon_selector" '.$icon_sel.' data-hover-icon="'.$icon_hover.'" data-normal-icon="'.$iocn_clr_for_normal_hover.'">';
$icon_block.='</span>';
$icon_block.='</a >';
$icon_block.='</div>';
$icon_block.='</div>';
$icon_block.='</div>';

return $icon_block;

  }

  else if($iocn_vw=='stracked'){
    
    $icon_el_bg =($attributes['icon_element_bg'] != '') ? "".$attributes['icon_element_bg']."": '';
      if($icon_el_bg==''){
                $icon_el_bg = "#6EC1E4;";
            }
      else 
        {
         $icon_el_bg = $icon_el_bg ;
        }
    $img_rd_unit=($attributes['img_border_radius_unit'] != '%') ? "".$attributes['img_border_radius_unit']."": '%';
    $btr=($attributes['border_top_radius'] != '50') ? "".$attributes['border_top_radius']."$img_rd_unit ": '50'.$img_rd_unit.'';
    $brr=($attributes['border_right_radius'] != '50') ? "".$attributes['border_right_radius']."$img_rd_unit ": '50'.$img_rd_unit.'';
    $bbr=($attributes['border_bottom_radius'] != '50') ? "".$attributes['border_bottom_radius']."$img_rd_unit ": '50'.$img_rd_unit.'';
    $blr=($attributes['border_left_radius'] != '50') ? "".$attributes['border_left_radius']."$img_rd_unit ": '50'.$img_rd_unit.'';
    $border_rad = $btr .= $brr .= $bbr .= $blr;
   
   // $border_radius= $btr;
    
    if($iocn_shape=='circle'){
      // $b_radius = $border_radius;
      $b_radius = $border_rad;
    }
    else if($iocn_shape=='squre'){
      $b_radius = "0".$img_rd_unit;
    }
    
    $icon_block="";
    $icon_block.='<div class="bb_icon_container" '.$container_style.' >';
    $icon_block.='<div class="bb_icon_wrapper" '.$wrapper_style.'>';
    $icon_block.='<div class="bb_icon_element" '.$iocn_style.' background-color:'.$icon_el_bg.';border-style:none;display:inline-block;transition:all .3s;border-radius:'.$b_radius.';border-color:'.$iocn_clr.'">';
    $icon_block.='<a class="bb_icon_wrapper_inner" href="'.$href_link.'" target="'.$href_target.'" rel="'.$href_rel.'">';
    $icon_block.='<span class="'.$iocn_selector.' bb_icon_selector" '.$icon_sel.' data-hover-icon="'.$icon_hover.'" data-normal-icon="'.$iocn_clr_for_normal_hover.'">';
    $icon_block.='</span>';
    $icon_block.='</a>';
    $icon_block.='</div>';
    $icon_block.='</div>';
    $icon_block.='</div>';
    
    return $icon_block;
  }
   else if($iocn_vw=='framed')
    {
        $icon_el_bg =($attributes['icon_element_bg'] != '') ? "".$attributes['icon_element_bg'].";": ';';
            if($icon_el_bg==''){
                 $icon_el_bg = "transparent;";
                  }
            else 
                {
                  $icon_el_bg = $icon_el_bg ;
                }

   $img_rd_unit=($attributes['img_border_radius_unit'] != '%') ? "".$attributes['img_border_radius_unit']."": '%';
   $btr=($attributes['border_top_radius'] != '50') ? "".$attributes['border_top_radius']."$img_rd_unit;": '50'.$img_rd_unit.'';
   $brr=($attributes['border_right_radius'] != '50') ? "".$attributes['border_right_radius']."$img_rd_unit ": '50'.$img_rd_unit.'';
   $bbr=($attributes['border_bottom_radius'] != '50') ? "".$attributes['border_bottom_radius']."$img_rd_unit ": '50'.$img_rd_unit.'';
   $blr=($attributes['border_left_radius'] != '50') ? "".$attributes['border_left_radius']."$img_rd_unit ": '50'.$img_rd_unit.'';
   $border_rad = $btr .= $brr .= $bbr .= $blr;

 //  $border_radius= $btr;
                 if($iocn_shape=='circle'){
                                $b_radius = $border_rad;
                               //  $b_radius = $border_radius;
                                  }
                  else if($iocn_shape=='squre'){
                                   $b_radius = "0".$img_rd_unit;
                                }
   $icon_block="";
   $icon_block.='<div class="bb_icon_container" '.$container_style.' >';
   $icon_block.='<div class="bb_icon_wrapper" '.$wrapper_style.'>';
   $icon_block.='<div class="bb_icon_element" '.$iocn_style.' background-color:'.$icon_el_bg.';border-style:solid;display:inline-block;transition:all .3s;border-radius:'.$b_radius.';border-color:'.$iocn_clr.'">';
   $icon_block.='<a class="bb_icon_wrapper_inner" href="'.$href_link.'" target="'.$href_target.'" rel="'.$href_rel.'">';
   $icon_block.='<span class=" '.$iocn_selector.' bb_icon_selector " '.$icon_sel.' data-hover-icon="'.$icon_hover.'" data-normal-icon="'.$iocn_clr_for_normal_hover.'">';
   $icon_block.='</span>';
   $icon_block.='</a >';
   $icon_block.='</div>';
   $icon_block.='</div>';
   $icon_block.='</div>';
   return $icon_block;
  }

}

new BB_ICON();
