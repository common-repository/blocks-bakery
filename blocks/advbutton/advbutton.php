<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_ADVBUTTON')) {
    /** 
     * BB_BUTTON
     *
     * @category  blocks_bakery
     * @package   button
     * @author    Essa Mamdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc GPLv2 Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_ADVBUTTON
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'buttonBlocksBakery' ));
        }
        /**
         * Section_block_block_register
         *
         * @return void
         */
        public function buttonBlocksBakery()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'bb-advbutton-script',
                plugins_url('../../build/advbutton/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
            );


           
          // Register our block's editor-specific CSS

            wp_register_style(
              'bb-advbutton-style',
              plugins_url('../../build/advbutton/editor.css', __FILE__),
              array( 'wp-edit-blocks' )
          );
        

      
            
    
            // Enqueue the script in the editor
            register_block_type('blocksbakery/advbutton',array(
               
                'attributes' => 
                array (
                  'bb_button_content_wrapper_bg' => 
                  array (
                    'type' => 'string',
                    'default' => '#61CE70',
                  ),
                  'bb_button_content_wrapper_text_color' => 
                  array (
                    'type' => 'string',
                    'default' => '#ffffff',
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
                    'default' => 'null',
                  ),
                  'rel_nofollow' => 
                  array (
                    'type' => 'string',
                    'default' => 'null',
                  ),
                  'nofollow' => 
                  array (
                    'type' => 'boolean',
                    'default' => 'false',
                  ),
                  'button_inline_block' => 
                  array (
                    'type' => 'string',
                    'default' => 'inline-block',
                  ),
                  'button_padding_top' => 
                  array (
                    'type' => 'number',
                    'default' => 12,
                  ),
                  'button_padding_right' => 
                  array (
                    'type' => 'number',
                    'default' => 24,
                  ),
                  'button_padding_bottom' => 
                  array (
                    'type' => 'number',
                    'default' => 12,
                  ),
                  'button_padding_left' => 
                  array (
                    'type' => 'number',
                    'default' => 24,
                  ),
                  'icon_selector' => 
                  array (
                    'type' => 'string',
                    'default' => '',
                  ),
                  'bb_button_content_text' => 
                  array (
                    'type' => 'string',
                    'default' => 'Click Here',
                  ),
                  'bb_button_content_text_change' => 
                  array (
                    'type' => 'string',
                    'default' => 'span',
                  ),
                  'button_icon_position' => 
                  array (
                    'type' => 'string',
                    'default' => 'before',
                  ),
                  'title_family' => 
                  array (
                    'type' => 'string',
                    'default' => 'ABeeZee',
                  ),
                  'adv_button_title_weight' => 
                  array (
                    'type' => 'string',
                    'default' => 'regular',
                  ),
                  'px_em_vh_vw_title' => 
                  array (
                    'type' => 'string',
                    'default' => 'px',
                  ),
                  'title_font_size' => 
                  array (
                    'type' => 'number',
                    'default' => 15,
                  ),
                  'adv_button_title_text_transform' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'adv_button_tile_font_style' => 
                  array (
                    'type' => 'string',
                    'default' => 'initial',
                  ),
                  'img_border_radius_unit' => 
                  array (
                    'type' => 'string',
                    'default' => 'px',
                  ),
                  'type_radius' => 
                  array (
                    'type' => 'string',
                    'default' => '',
                  ),
                  'border_left_radius' => 
                  array (
                    'type' => 'string',
                    'default' => 4,
                  ),
                  'border_right_radius' => 
                  array (
                    'type' => 'string',
                    'default' => 4,
                  ),
                  'border_top_radius' => 
                  array (
                    'type' => 'string',
                    'default' => 4,
                  ),
                  'border_bottom_radius' => 
                  array (
                    'type' => 'string',
                    'default' => 4,
                  ),
                  'border_left_width' => 
                  array (
                    'type' => 'string',
                    'default' => 0,
                  ),
                  'border_right_width' => 
                  array (
                    'type' => 'string',
                    'default' => 0,
                  ),
                  'border_top_width' => 
                  array (
                    'type' => 'string',
                    'default' => 0,
                  ),
                  'border_bottom_width' => 
                  array (
                    'type' => 'string',
                    'default' => 0,
                  ),
                  'type_border_width' => 
                  array (
                    'type' => 'string',
                    'default' => '',
                  ),
                  'border_width_color' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'border_style' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'title_shadow_blur' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'text_shadow_horizental' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'text_shadow_vertical' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'text_shadow_clors' => 
                  array (
                    'type' => 'string',
                    'default' => '',
                  ),
                  'adv_button_text_decoration' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'adv_btn_line_height_title' => 
                  array (
                    'type' => 'number',
                    'default' => 1.5,
                  ),
                  'button_box_shadow_hori' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'button_box_shadow_vert' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'button_box_shadow_blur' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'button_box_shadow_spred' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'button_box_shadow_wrap_color' => 
                  array (
                    'type' => 'string',
                    'default' => '',
                  ),
                  'desc_lh_controller' => 
                  array (
                    'type' => 'string',
                    'default' => 'em',
                  ),
                  'order_pos' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'adv_btn_letter_spacing' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'icon_margin_pos_left_right' => 
                  array (
                    'type' => 'number',
                    'default' => 5,
                  ),
                  'button_padding_inn_top' => 
                  array (
                    'type' => 'number',
                    'default' => 12,
                  ),
                  'button_padding_inn_right' => 
                  array (
                    'type' => 'number',
                    'default' => 24,
                  ),
                  'button_padding_inn_bottom' => 
                  array (
                    'type' => 'number',
                    'default' => 12,
                  ),
                  'button_padding_inn_left' => 
                  array (
                    'type' => 'number',
                    'default' => 24,
                  ),
                  'padding_btn_px_em_per' => 
                  array (
                    'type' => 'string',
                    'default' => 'px',
                  ),
                  'divider_text_transform' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'button_bg_color_random' => 
                  array (
                    'type' => 'string',
                    'default' => 'default',
                  ),
                  'button_bg_size_random' => 
                  array (
                    'type' => 'string',
                    'default' => 'extrasmall',
                  ),
                  'text_align_wrapper' => 
                  array (
                    'type' => 'string',
                    'default' => 'left',
                  ),

                ),
              
                    'editor_script' => 'bb-advbutton-script',
                    'editor_style'=> 'bb-advbutton-style',
                    'render_callback'=> 'advbutton_Render_callback',
                
                )
            );
        }
    }
}
function advbutton_Render_callback($attributes)
{

  $attributes['text_align_wrapper'];
  $alignment= ($attributes['text_align_wrapper'] != 'left') ? "".$attributes['text_align_wrapper'].";": 'left;';
 
  
    $bb_container ="style='width:100%;text-align:$alignment '";
   

    $bgcolorValue= ($attributes['button_bg_color_random'] != 'default') ? "".$attributes['button_bg_color_random']."": 'default';
    if($bgcolorValue == 'default' ){
     $bgcolor= ($attributes['bb_button_content_wrapper_bg'] != '#61CE70') ? "".$attributes['bb_button_content_wrapper_bg'].";": '#61CE70;';
     
    }
    else if($bgcolorValue=='info'){
         $bgcolor='#5bc0de;';
    }
    else if($bgcolorValue=='success'){
         $bgcolor='#5cb85c;';
    }
    else if($bgcolorValue=='warning'){
         $bgcolor='#f0ad4e;';
    }
    else if($bgcolorValue=='danger'){
          $bgcolor= '#d9534f;';
    }
    $button_content_wrapper ="";
    $button_content_wrapper.= ($attributes['bb_button_content_wrapper_text_color'] != '#ffffff') ? "color:".$attributes['bb_button_content_wrapper_text_color'].";": 'color:#ffffff;';
    $paddingUnit = ($attributes['padding_btn_px_em_per'] != 'px') ? "".$attributes['padding_btn_px_em_per']."": 'px';
    $button_content_wrapper.= ($attributes['button_padding_inn_top'] != '12') ? "padding-top:".$attributes['button_padding_inn_top']."$paddingUnit;": 'padding-top:12'.$paddingUnit.';';
    $button_content_wrapper.= ($attributes['button_padding_inn_right'] != '24') ? "padding-right:".$attributes['button_padding_inn_right']."$paddingUnit;": 'padding-right:24'.$paddingUnit.';';
    $button_content_wrapper.= ($attributes['button_padding_inn_bottom'] != '12') ? "padding-bottom:".$attributes['button_padding_inn_bottom']."$paddingUnit;": 'padding-bottom:12'.$paddingUnit.';';
    $button_content_wrapper.= ($attributes['button_padding_inn_left'] != '24') ? "padding-left:".$attributes['button_padding_inn_left']."$paddingUnit;": 'padding-left:24'.$paddingUnit.';';
    $button_content_wrapper.= ($attributes['button_inline_block'] != 'inline-block') ? "display:".$attributes['button_inline_block'].";": 'display:inline-block;';
    
    $ibr_unit=($attributes['img_border_radius_unit'] != 'px') ? "".$attributes['img_border_radius_unit']."": 'px';
    $button_content_wrapper.= ($attributes['border_top_radius'] != '4') ? "border-top-left-radius:".$attributes['border_top_radius']."$ibr_unit;": 'border-top-left-radius:4'.$ibr_unit.';';
    $button_content_wrapper.= ($attributes['border_right_radius'] != '4') ? "border-top-right-radius:".$attributes['border_right_radius']."$ibr_unit;": 'border-top-right-radius:4'.$ibr_unit.';';
    $button_content_wrapper.= ($attributes['border_bottom_radius'] != '4') ? "border-bottom-right-radius:".$attributes['border_bottom_radius']."$ibr_unit;": 'border-bottom-right-radius:4'.$ibr_unit.';';
    $button_content_wrapper.= ($attributes['border_left_radius'] != '4') ? "border-bottom-left-radius:".$attributes['border_top_radius']."$ibr_unit;": 'border-bottom-left-radius:4'.$ibr_unit.';';
   
    $button_content_wrapper.= ($attributes['border_top_width'] != '0') ? "border-top-width:".$attributes['border_top_width']."px;": 'border-top-width:0px;';
    $button_content_wrapper.= ($attributes['border_right_width'] != '0') ? "border-right-width:".$attributes['border_right_width']."px;": 'border-right-width:0px;';
    $button_content_wrapper.= ($attributes['border_bottom_width'] != '0') ? "border-bottom-width:".$attributes['border_bottom_width']."px;": 'border-bottom-width:0px;';
    $button_content_wrapper.= ($attributes['border_left_width'] != '0') ? "border-left-width:".$attributes['border_left_width']."px;": 'border-left-width:0px;';
     
    $button_content_wrapper.= ($attributes['border_width_color'] != 'none') ? "border-color:".$attributes['border_width_color'].";": 'border-color:none;';
    $button_content_wrapper.= ($attributes['border_style'] != 'none') ? "border-style:".$attributes['border_style'].";": 'border-style:none;';
    
    $button_content_wrapper	= (($button_content_wrapper != '') ? 'style="'.$button_content_wrapper.'text-align:center;transition:all 0.3s ease 0s;font-size:15px;text-decoration:none;background-color:'.$bgcolor.'" ' : '');
     
     //href style
     $icon_link = ($attributes['icon_link'] != '#') ? "".$attributes['icon_link']."": '#';
     $hrefTarget = ($attributes['open_tab'] != 'null') ? "".$attributes['open_tab']."": 'null';
     $hrefRel = ($attributes['rel_nofollow'] != 'null') ? "".$attributes['rel_nofollow']."": 'null';
     
     
     //for textBox
    $buttn_txt= ($attributes['bb_button_content_text'] != 'Click Here') ? "".$attributes['bb_button_content_text']."": 'Click Here';
   
    //btn_content_left_style
    $btnContentLeft="";
    $unit=($attributes['px_em_vh_vw_title'] != 'px') ? "".$attributes['px_em_vh_vw_title']."": 'px';
    $btnContentLeft.= ($attributes['title_font_size'] != '15') ? "font-size:".$attributes['title_font_size']."$unit;": 'font-size:15'.$unit.';';
    $btnContentLeft	= (($btnContentLeft != '') ? 'style="'.$btnContentLeft.'margin-right:5px;display:flex;align-items:center;" ' : '');
    
    //bb_btn_content
    $btn_content="";
    $btn_content.= ($attributes['order_pos'] != '0') ? "order:".$attributes['order_pos'].";": 'order:0;';
    $btn_content.= ($attributes['icon_margin_pos_left_right'] != '5') ? "margin-left:".$attributes['icon_margin_pos_left_right']."px;": 'margin-left:5px;';
    $btn_content.= ($attributes['icon_margin_pos_left_right'] != '5') ? "margin-right:".$attributes['icon_margin_pos_left_right']."px;": 'margin-right:5px;';
    $btn_content	= (($btn_content != '') ? 'style="display:flex; '.$btn_content.'" ' : '');
    

    //for title
    $title_style="";
    $title_style.= ($attributes['title_family'] != 'ABeeZee') ? "font-family:".$attributes['title_family'].";": 'font-family:ABeeZee;';
    $title_unit=($attributes['px_em_vh_vw_title'] != 'px') ? "".$attributes['px_em_vh_vw_title']."": 'px';
    $title_style.= ($attributes['title_font_size'] != '15') ? "font-size:".$attributes['title_font_size']."$title_unit;": 'font-size:15'.$title_unit.';';
    //boxshadow
    $horizantl_box=($attributes['button_box_shadow_hori'] != '0') ? "".$attributes['button_box_shadow_hori']."px "  : '0px ';
    $vertical_box=($attributes['button_box_shadow_vert'] != '0') ?  "".$attributes['button_box_shadow_vert']."px "  : '0px ';
    $blur_box=($attributes['button_box_shadow_blur'] != '0') ? "".$attributes['button_box_shadow_blur']."px "  : '0px '; 
    $spread_box=($attributes['button_box_shadow_spred'] != '0') ? "".$attributes['button_box_shadow_spred']."px "  : '0px '; 
    $box_shadow = $horizantl_box .= $vertical_box .= $blur_box .=$spread_box ;
    $title_style.= ($attributes['button_box_shadow_wrap_color'] != '') ? "box-shadow:".$attributes['button_box_shadow_wrap_color']." $box_shadow ;": 'box-shadow:'.$box_shadow .';';
    $title_style.= ($attributes['adv_button_tile_font_style'] != 'initial') ? "font-style:".$attributes['adv_button_tile_font_style'].";": 'font-style:initial;';
    $title_style.= ($attributes['adv_button_text_decoration'] != 'none') ? "text-decoration:".$attributes['adv_button_text_decoration'].";": 'text-decoration:none;';
    $title_style.= ($attributes['adv_btn_letter_spacing'] != '0') ? "letter-spacing:".$attributes['adv_btn_letter_spacing']."px;": 'letter-spacing:0px;';
    $title_style.= ($attributes['divider_text_transform'] != 'none') ? "text-transform:".$attributes['divider_text_transform'].";": 'text-transform:none;';
    $title_style.= ($attributes['adv_button_title_weight'] != '15') ? "font-weight:".$attributes['adv_button_title_weight'].";": 'font-weight:15;';
   $lh_unit=($attributes['desc_lh_controller'] != 'em') ? "".$attributes['desc_lh_controller'].";": 'em;';
    
   $title_style.= ($attributes['adv_btn_line_height_title'] != '1.5') ? "line-height:".$attributes['adv_btn_line_height_title']."$lh_unit": 'line-height:1.5'.$lh_unit.'';
   //textshadow
    $horizantl_title=($attributes['text_shadow_horizental'] != '0') ? "" .$attributes['text_shadow_horizental']."px "  : '0px ';
    $vertical_title=($attributes['text_shadow_vertical'] != '0') ?  "".$attributes['text_shadow_vertical']."px "  : '0px ';
    $blur_title=($attributes['title_shadow_blur'] != '0') ? "".$attributes['title_shadow_blur']."px"  : ' 0px'; 
    $txt_shadow = $horizantl_title .= $vertical_title .= $blur_title ;
    $title_style.= ($attributes['text_shadow_clors'] != '') ? "text-shadow:".$attributes['text_shadow_clors']." $txt_shadow;": 'text-shadow:' .$txt_shadow.';';
  
    $title_style	= (($title_style != '') ? 'style="'.$title_style.'margin: 0 auto; " ' : '');

    
    
    
    $iocn= ($attributes['icon_selector'] != 'fas fa-truck') ? "".$attributes['icon_selector']."": 'fas fa-truck';


$advbtn="";
$advbtn.='<div '.$bb_container.'>';
$advbtn.='<div>';
$advbtn.='<a href="'.$icon_link.'" target="'.$hrefTarget.'" rel="'.$hrefRel.'" '.$button_content_wrapper.' >';
$advbtn.='<span '.$btnContentLeft.'>';
$advbtn.='<span '.$btn_content.'>';
$advbtn.='<i class= "'.$iocn.'style=font-style:normal;">';
$advbtn.='</i>';
$advbtn.='</span>';
$advbtn.='<span '.$title_style.'>' .$buttn_txt. '</span>';
$advbtn.='</span>';
$advbtn.='</a>';
$advbtn.='</div>';
$advbtn.='</div>';
  
  return $advbtn;
}

new BB_ADVBUTTON();
