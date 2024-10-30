<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_DIVIDER')) {
    /** ss
     * BB_DIVIDER
     *
     * @category  blocks_bakery
     * @package   Divider
     * @author    Essa Mamssdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc GPLv2 Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_DIVIDER
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'dividerBlocksBakery' ));
        }
        /**
         * Section_block_block_register
         *
         * @return void
         */
        public function dividerBlocksBakery()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'bb-divider-script',
                plugins_url('../../build/divider/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
            );
    
            wp_register_script(
              'bb-divider-style',
              plugins_url('../../build/divider/style.css', __FILE__),
              array( 'bb-divider-style' )
          );
    
            
    
            // Enqueue the script in the editor
            register_block_type('blocksbakery/divider',array(
                'attributes' => 
                array (
                  'sep_style' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'width_per_px' => 
                  array (
                    'type' => 'string',
                    'default' => '%',
                  ),
                  'seprator_width' => 
                  array (
                    'type' => 'number',
                    'default' => 100,
                  ),
                  'max_range' => 
                  array (
                    'type' => 'number',
                    'default' => 100,
                  ),
                  'justify_content' => 
                  array (
                    'type' => 'string',
                    'default' => 'flex-start',
                  ),
                  'bg_pattern' => 
                  array (
                    'type' => 'string',
                  ),
                  'divider_width' => 
                  array (
                    'type' => 'number',
                    'default' => 1,
                  ),
                  'divider_size_width' => 
                  array (
                    'type' => 'number',
                    'default' => 10,
                  ),
                  'seprator_divider_style' => 
                  array (
                    'type' => 'string',
                    'default' => 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\' overflow=\'visible\' height=\'100%\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'black\' stroke-width=\'1\' stroke-linecap=\'square\' stroke-miterlimit=\'10\'%3E%3Cpath d=\'M0,21c3.3,0,8.3-0.9,15.7-7.1c6.6-5.4,4.4-9.3,2.4-10.3c-3.4-1.8-7.7,1.3-7.3,8.8C11.2,20,17.1,21,24,21\'/%3E%3C/svg%3E',
                  ),
                  'element_text_content' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'element_content' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'element_icon_content' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'icon_selector' => 
                  array (
                    'type' => 'string',
                    'default'=>'',
                  ),
                  'text_divider' => 
                  array (
                    'type' => 'string',
                    'default'=>'',
                  ),
                  'text_divider_headings' => 
                  array (
                    'type' => 'string',
                    'default' => 'p',
                  ),
                  'title_color' => 
                  array (
                    'type' => 'string',
                    'default' => '#000000',
                  ),
                  'divider_text_color' =>array(
                    'type'=>'string',
                    'default'=>'',
                  ),
                  'title_family'=>array(
                    'type'=>'string',
                    'default'=>'ABeeZee',
                  ),
                'divider_text_weight'=>array(
                    'type'=> 'string',
                    'default'=> 'regular',
        
                ),
                'title_font_size'=>array(
                    'type'=>'number',
                    'default'=>15,
                ),
                
                'title_shadow_blur'=>array(
                    'type'=>'number',
                    'default'=>0,
                ), 
                'text_shadow_horizental'=>array(
                    'type'=>'number',
                    'default'=>0,
                ),
                'text_shadow_vertical'=>array(
                    'type'=>'number',
                    'default'=>0,
                ),
                'text_shadow_clors'=>array(
                    'type'=>'string',
                    'default'=>'none',
                ),  
                'button_box_shadow_hori'=>array(
                    'type'=>'number',
                    'default'=>0,
                ),
                'button_box_shadow_vert'=>array(
                    'type'=>'number',
                    'default'=>0,
                ),
                'button_box_shadow_blur'=>array(
                    'type'=>'number',
                    'default'=>0,
                ),
                'button_box_shadow_spred'=>array(
                    'type'=>'number',
                    'default'=>0,
                ),
                'button_box_shadow_wrap_color'=>array(
                    'type'=>'string',
                    'default'=>'',
                ),
                'divider_desc_lh_controller'=>array(
                    'type'=>'string',
                    'default'=>'em',
                ),
                'divider_tile_font_style'=>array (
                    'type'=> 'string',
                    'default'=> 'initial',
                ),
                'divider_text_decoration'=> array(
                    'type'=>'string',
                    'default'=>'none',
                ),
                'adv_button_text_transform'=>array(
                  'type'=>'string',
                  'default'=>'none',
                ),
                'divider_line_height_title'=> array(
                    'type'=>'number',
                    'default'=>2,
                ),
                'divider_letter_spacing'=> array(
                    'type'=> 'number',
                    'default'=> 0,
              ),
                'px_em_vh_vw_title'=> array(
                    'type'=>'string',
                    'default'=> 'px',
        
                ),
                'padding_icon_spacing'=> array(
                    'type'=>'number',
                    'default'=>0,
                ),
                'divider_icon_size'=>array(
                    'type'=>'number',
                    'default'=>16,
                ),
                'rotate_size'=>array(
                    'type'=>'number',
                    'default'=>'',
                ),
        
                'divider_icon_inner_spacing'=>array(
                    'type'=>'number',
                    'default'=>'5',
                ),
                'divider_icon_clr'=>array(
                    'type'=>'string',
                    'default'=>'black',
                ),
                'divider_icon_bg_color'=>array(
                    'type'=>'string',
                    'default'=>'',
                ),
                'divider_icon_border_width'=>array(
                    'type'=>'number',
                    'default'=>0,
                ),
                  'options' => 
                  array (
                    'type' => 'array',
                    'default' => 
                    array (
                      0 => 
                      array (
                        'label' => 'None',
                        'value' => 'None',
                      ),
                      1 => 
                      array (
                        'label' => 'Solid',
                        'value' => 'Solid',
                      ),
                      2 => 
                      array (
                        'label' => 'Double',
                        'value' => 'Double',
                      ),
                      3 => 
                      array (
                        'label' => 'Dashed',
                        'value' => 'Dashed',
                      ),
                      4 => 
                      array (
                        'label' => 'Dotted',
                        'value' => 'Dotted',
                      ),
                      5 => 
                      array (
                        'label' => 'Curly',
                        'value' => 'Curly',
                      ),
                      6 => 
                      array (
                        'label' => 'Curved',
                        'value' => 'Curved',
                      ),
                      7 => 
                      array (
                        'label' => 'Slashes',
                        'value' => 'Slashes',
                      ),
                      8 => 
                      array (
                        'label' => 'Squared',
                        'value' => 'Squared',
                      ),
                      9 => 
                      array (
                        'label' => 'Wavy',
                        'value' => 'Wavy',
                      ),
                      10 => 
                      array (
                        'label' => 'ZigZag',
                        'value' => 'ZigZag',
                      ),
                      11 => 
                      array (
                        'label' => 'Multiple',
                        'value' => 'Multiple',
                      ),
                      12 => 
                      array (
                        'label' => 'Arrows',
                        'value' => 'Arrows',
                      ),
                      13 => 
                      array (
                        'label' => 'Pluses',
                        'value' => 'Pluses',
                      ),
                      14 => 
                      array (
                        'label' => 'Rhombus',
                        'value' => 'Rhombus',
                      ),
                      15 => 
                      array (
                        'label' => 'Parallelogram',
                        'value' => 'Parallelogram',
                      ),
                      16 => 
                      array (
                        'label' => 'Rectangles',
                        'value' => 'Rectangles',
                      ),
                      17 => 
                      array (
                        'label' => 'Dots',
                        'value' => 'Dots',
                      ),
                      18 => 
                      array (
                        'label' => 'Fir Tree',
                        'value' => 'Firtree',
                      ),
                      19 => 
                      array (
                        'label' => 'Half Rounds',
                        'value' => 'Halfrounds',
                      ),
                      20 => 
                      array (
                        'label' => 'Leaves',
                        'value' => 'Leaves',
                      ),
                      21 => 
                      array (
                        'label' => 'Stripes',
                        'value' => 'Stripes',
                      ),
                      22 => 
                      array (
                        'label' => 'Squares',
                        'value' => 'Squares',
                      ),
                      23 => 
                      array (
                        'label' => 'Trees',
                        'value' => 'Trees',
                      ),
                      24 => 
                      array (
                        'label' => 'Tribal',
                        'value' => 'Tribal',
                      ),
                      25 => 
                      array (
                        'label' => 'X',
                        'value' => 'X',
                      ),
                      26 => 
                      array (
                        'label' => 'Zigzag Curve',
                        'value' => 'Zigzag Curve',
                      ),
                    ),
                  ),
                  'select_option' => 
                  array (
                    'type' => 'string',
                    'default' => 'Curved',
                  ),
                  'divider_content_margin_left'=>array(
                    'type'=>'string',
                    'default'=>'auto',
                  ),
                'divider_content_margin_right'=>array(
                    'type'=>'string',
                    'default'=>'auto',
                ),
                'icon_stracked'=>array(
                  'type'=>'string',
                  'default'=>'default',
              ),
              'divider_border_radius'=>array(
                'type'=>'number',
                'default'=>'0',
              ),
            'divider_border_radius_px_per'=>array(
                'type'=>'string',
                'default'=>'px',
            ),
                ),
            
                    'editor_script' => 'bb-divider-script',
                    'style'         => 'bb-divider-style',
                    'render_callback'=> 'divider_render_callback',
                
                )
            );
        }
    }
}
function Divider_Render_callback($attributes)
{
 
  
  $sep_style=($attributes['sep_style'] != 'none') ? "text-align:".$attributes['sep_style'].";": 'text-align:none;';
  $icon_selector=($attributes['icon_selector'] != '') ? "".$attributes['icon_selector']."": '';

  //add show and hide
  $element_text_content=($attributes['element_text_content'] != 'none') ? "".$attributes['element_text_content'].";": 'none';
  $element_content=($attributes['element_content'] != 'none') ? "".$attributes['element_content'].";": 'none';
  $element_icon_content=($attributes['element_icon_content'] != 'none') ? "".$attributes['element_icon_content'].";": 'none';
  
  //divider style
  $seprator_divider_style=($attributes['seprator_divider_style'] != '') ? "".$attributes['seprator_divider_style'].";": '';
  $div_style="";
  $div_style.=($attributes['divider_width'] != '1') ? "border-width:".$attributes['divider_width']."px;": 'border-width:1px;';
  $div_style.=($attributes['select_option'] != 'Curved') ? "border-top-style:".$attributes['select_option'].";": 'border-top-style:Curved;';
  $binclr =($attributes['title_color'] != '#000000') ? "".$attributes['title_color'].";": '#000000;';
  //$binColor = urlencode($binclr);
  $div_style	= (($div_style != '') ? 'style="'.$div_style.' border-top-color:'.$binclr.'" ' : '');
 

  
  //spacerWrapper style  1 div
  $spacer_wrapper="";
  $spacer_wrapper.=($attributes['justify_content'] != 'flex-start') ? "justify-content:".$attributes['justify_content'].";": 'justify-content:flex-start;';
  $spacer_wrapper	= (($spacer_wrapper != '') ? 'style="display:flex; '.$spacer_wrapper.'" ' : '');
 
  //bbspacer 2 div
  $spacer="";
  $widthUnit=($attributes['width_per_px'] != '%') ? "".$attributes['width_per_px'].";": '%;';
  $spacer.=($attributes['seprator_width'] != '100') ? "width:".$attributes['seprator_width']."$widthUnit": 'width:100'.$widthUnit;
  $spacer.=($attributes['divider_size_width'] != '10') ? "padding-top:".$attributes['divider_size_width']."px;": 'padding-top:10px;';
  $spacer.=($attributes['divider_size_width'] != '10') ? "padding-bottom:".$attributes['divider_size_width']."px;": 'padding-bottom:10px;';
  $spacer	= (($spacer != '') ? ' style="'.$spacer.'"'  : '');
  
  //$text_divider_headings=($attributes['text_divider_headings'] != 'p') ? "".$attributes['text_divider_headings']."": 'p';
  $text_divider=($attributes['text_divider'] != '') ? "".$attributes['text_divider']."" : '';
 
  //heading div
  $text_style=""; 
  
  $text_style.=($attributes['divider_content_margin_left'] != 'auto') ? "margin-left:".$attributes['divider_content_margin_left'].";": 'margin-left:auto;';
  $text_style.=($attributes['divider_content_margin_right'] != 'auto') ? "margin-right:".$attributes['divider_content_margin_right'].";": 'margin-right:auto;';
  
  $text_style.=($attributes['title_family'] != 'ABeeZee') ? "font-family:".$attributes['title_family'].";": 'font-family:ABeeZee;';
  $unit=($attributes['px_em_vh_vw_title'] != '') ? "".$attributes['px_em_vh_vw_title']."": 'px';
  $text_style.=($attributes['title_font_size'] != '15') ? "font-size:".$attributes['title_font_size']."$unit;": 'font-size:15'.$unit.';';
  $horizontal_desc=($attributes['button_box_shadow_hori'] != '0') ? "".$attributes['button_box_shadow_hori']."px "  : '0px ';
  $vertical_desc=($attributes['button_box_shadow_vert'] != '0') ?  "".$attributes['button_box_shadow_vert']."px "  : '0px ';
  $blur_desc=($attributes['button_box_shadow_blur'] != '0') ? "".$attributes['button_box_shadow_blur']."px "  : '0px '; 
  $spread_desc=($attributes['button_box_shadow_spred'] != '0') ? "".$attributes['button_box_shadow_spred']."px "  : '0px'; 
  $box_shadow= $horizontal_desc .= $vertical_desc .=  $blur_desc .= $spread_desc ;
  $text_style.=($attributes['button_box_shadow_wrap_color'] != '') ? "box-shadow:".$attributes['button_box_shadow_wrap_color']."$box_shadow;": 'box-shadow:'.$box_shadow.';';
  $text_style.=($attributes['divider_tile_font_style'] != 'initial') ? "font-style:".$attributes['divider_tile_font_style'].";": 'font-style:initial;';
  $text_style.=($attributes['divider_text_decoration'] != 'none') ? "text-decoration:".$attributes['divider_text_decoration'].";": 'text-decoration:none;';
  $text_style.=($attributes['divider_letter_spacing'] != '0') ? "letter-spacing:".$attributes['divider_letter_spacing']."px;": 'letter-spacing:0px;';
  $text_style.=($attributes['padding_icon_spacing'] != '0') ? "padding-left:".$attributes['padding_icon_spacing']."px;" : 'padding-left:0px;';
  $text_style.=($attributes['padding_icon_spacing'] != '0') ? "padding-right:".$attributes['padding_icon_spacing']."px;" : 'padding-right:0px;';
  $text_style.=($attributes['divider_text_color'] != '') ? "color:".$attributes['divider_text_color'].";": 'color:;';
  $text_style.=($attributes['adv_button_text_transform'] != 'none') ? "text-transform:".$attributes['adv_button_text_transform'].";": 'text-transform:none;';
  $text_style.=($attributes['divider_text_weight'] != 'regular') ? "font-weight:".$attributes['divider_text_weight'].";": 'font-weight:regular;';
  $unit=($attributes['divider_desc_lh_controller'] != 'em') ? "".$attributes['divider_desc_lh_controller']."": 'em';
  $text_style.=($attributes['divider_line_height_title'] != '2') ? "line-height:".$attributes['divider_line_height_title']."$unit;": 'line-height:2'.$unit.';';
  $text_style	= (($text_style != '') ? ' style="margin-top:-20px;background:white;width:fit-content;display:flex;'.$text_style.' "' : '');
  

  
  //spacerIconStyle last span div
  $spacerIcon="";
  $spacerIcon.=($attributes['divider_content_margin_left'] != 'auto') ? "margin-left:".$attributes['divider_content_margin_left'].";" : 'margin-left:auto;';
  $spacerIcon.=($attributes['divider_content_margin_right'] != 'auto') ? "margin-right:".$attributes['divider_content_margin_right'].";" : 'margin-right:auto;';
  $spacerIcon.=($attributes['divider_icon_size'] != '16') ? "font-size:".$attributes['divider_icon_size']."px;" : 'font-size:16px;';
  $spacerIcon.=($attributes['divider_icon_clr'] != 'black') ? "color:".$attributes['divider_icon_clr'].";" : 'color:black;';
  $spacerIcon.=($attributes['divider_icon_clr'] != 'black') ? "border-color:".$attributes['divider_icon_clr'].";" : 'border-color:black;';
  $spacerIcon.=($attributes['divider_icon_bg_color'] != '') ? "background:".$attributes['divider_icon_bg_color'].";" : 'background:;';
  
  //  $spacerIcon.=($attributes['padding_icon_spacing'] != '0') ? "padding-left:".$attributes['padding_icon_spacing']."px;" : 'padding-left:0px;';
  //  $spacerIcon.=($attributes['padding_icon_spacing'] != '0') ? "padding-right:".$attributes['padding_icon_spacing']."px;" : 'padding-right:0px;';
  $spacerIcon.=($attributes['divider_icon_inner_spacing'] != '5') ? "padding:".$attributes['divider_icon_inner_spacing']."px;" : 'padding:5px;';
  $spacerIcon.=($attributes['divider_icon_border_width'] != '0') ? "border-width:".$attributes['divider_icon_border_width']."px;" : 'border-width:0px;';
  $spacerIcon.=($attributes['rotate_size'] != '0') ? "transform:rotate(".$attributes['rotate_size']."deg);" : 'transform:rotate(0deg);';
  $unit=($attributes['divider_border_radius_px_per'] != '') ? "".$attributes['divider_border_radius_px_per'].";": 'px;';
  $spacerIcon.=($attributes['divider_border_radius'] != '0') ? "border-radius:".$attributes['divider_border_radius']."$unit" : 'border-radius:0'.$unit.'';
  $spacerIcon	= (($spacerIcon!= '') ? 'style="margin-top:-18px;'.$spacerIcon.' width:fit-content;display:flex;border-style:solid;background:#ffffff" ' : '');
  
 
  
   $dvd_selector=($attributes['select_option'] != 'Curved') ? "".$attributes['select_option']."": 'Curved';
  
if($dvd_selector == "Solid" || $dvd_selector == "Double" || $dvd_selector == "Dashed" || $dvd_selector =="Dotted")
{
  //$titlecolor=($attributes['title_color'] != 'black') ? "".$attributes['title_color']."": 'black';

  $divider = "";
  $divider .= '<div '.$spacer_wrapper.'>';
  $divider .= '<div '.$spacer.'>';
  $divider .= '<div '.$div_style.'>';
  $divider .= '</div>';
  $divider.='<'.$attributes['text_divider_headings'] .$text_style.'>'.$text_divider.
     '</'.$attributes['text_divider_headings'].'>';
   $divider .= '<span '.$spacerIcon.' class="'.$icon_selector.'">';
  $divider .= '</span>';
  $divider .= '</div>';
  $divider .= '</div>';
  return $divider;
}

else{
  
  $titleclr=($attributes['title_color'] != '#000000') ? "".$attributes['title_color']."": '#000000';
 $binColor = urlencode($titleclr);
     
  //die;
  //echo $binColor = "rgb($r,$g,$b)";
  

 $dividrWidth=($attributes['divider_width'] != '1') ? "".$attributes['divider_width']."": '1';

   if($dvd_selector=="Curly"){
   $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M0,21c3.3,0,8.3-0.9,15.7-7.1c6.6-5.4,4.4-9.3,2.4-10.3c-3.4-1.8-7.7,1.3-7.3,8.8C11.2,20,17.1,21,24,21\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
   
   }  
   else if($dvd_selector=="Curved"){
    $dividershape="background:url('data:image/svg+xml,%3Csvg  viewBox=\'002424\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M0,6c6,0,6,13,12,13S18,6,24,6\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
  }
   else if($dvd_selector=="Slashes"){
     $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M28,0L10,18,M18,0L0,18,M48,0L30,18,M38,0L20,18\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
    }
    else if($dvd_selector=="Squared"){
     $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'0 0 24 24\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpolyline points=\'0,6 6,6 6,18 18,18 18,6 24,6\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
      }
      else if($dvd_selector=="Wavy"){
        $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M0,6c6,0,0.9,11.1,6.9,11.1S18,6,24,6\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
      }
      else if($dvd_selector=="ZigZag"){
        $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpolyline points=\'0,18 12,6 24,18\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
      }
      else if($dvd_selector=="Multiple"){
        $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M24,8v12H0V8H24zM24,4v1H0V4H24z\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
      }
      else if($dvd_selector=="Arrows"){
        $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'xMidYMidmeet\' viewBox=\'002424\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M14.2,4c0.3,0,0.5,0.1,0.7,0.3l7.9,7.2c0.2,0.2,0.3,0.4,0.3,0.7s-0.1,0.5-0.3,0.7l-7.9,7.2c-0.2,0.2-0.4,0.3-0.7,0.3s-0.5-0.1-0.7-0.3s-0.3-0.4-0.3-0.7l0-2.9l-11.5,0c-0.4,0-0.7-0.3-0.7-0.7V9.4C1,9,1.3,8.7,1.7,8.7l11.5,0l0-3.6c0-0.3,0.1-0.5,0.3-0.7S13.9,4,14.2,4z\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
      }
      else if($dvd_selector=="Pluses"){
        $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M21.4,9.6h-7.1V2.6c0-0.9-0.7-1.6-1.6-1.6h-1.6c-0.9,0-1.6,0.7-1.6,1.6v7.1H2.6C1.7,9.6,1,10.3,1,11.2v1.6c0,0.9,0.7,1.6,1.6,1.6h7.1v7.1c0,0.9,0.7,1.6,1.6,1.6h1.6c0.9,0,1.6-0.7,1.6-1.6v-7.1h7.1c0.9,0,1.6-0.7,1.6-1.6v-1.6C23,10.3,22.3,9.6,21.4,9.6z\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
      }
      else if($dvd_selector=="Rhombus"){
        $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M12.7,2.3c-0.4-0.4-1.1-0.4-1.5,0l-8,9.1c-0.3,0.4-0.3,0.9,0,1.2l8,9.1c0.4,0.4,1.1,0.4,1.5,0l8-9.1c0.3-0.4,0.3-0.9,0-1.2L12.7,2.3z\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
        }
        else if($dvd_selector=="Parallelogram"){
          $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'002424\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpolygon points=\'9.4,2 24,2 14.6,21.6 0,21.6\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
        }
        else if($dvd_selector=="Rectangles"){
          $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'none\' viewBox=\'0 0 60 30\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Crect x=\'15\' y=\'0\' width=\'30\' height=\'30\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
        }
        else if($dvd_selector=="Dots"){
          $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'xMidYMidmeet\' viewBox=\'0012626\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M3,10.2c2.6,0,2.6,2,2.6,3.2S4.4,16.5,3,16.5s-3-1.4-3-3.2S0.4,10.2,3,10.2zM18.8,10.2c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.2-1.4-3.2-3.2S17,10.2,18.8,10.2zM34.6,10.2c1.5,0,2.6,1.4,2.6,3.2s-0.5,3.2-1.9,3.2c-1.5,0-3.4-1.4-3.4-3.2S33.1,10.2,34.6,10.2zM50.5,10.2c1.7,0,3.2,1.4,3.2,3.2s-1.4,3.2-3.2,3.2c-1.7,0-3.3-0.9-3.3-2.6S48.7,10.2,50.5,10.2zM66.2,10.2c1.5,0,3.4,1.4,3.4,3.2s-1.9,3.2-3.4,3.2c-1.5,0-2.6-0.4-2.6-2.1S64.8,10.2,66.2,10.2zM82.2,10.2c1.7,0.8,2.6,1.4,2.6,3.2s-0.1,3.2-1.6,3.2c-1.5,0-3.7-1.4-3.7-3.2S80.5,9.4,82.2,10.2zM98.6,10.2c1.5,0,2.6,0.4,2.6,2.1s-1.2,4.2-2.6,4.2c-1.5,0-3.7-0.4-3.7-2.1S97.1,10.2,98.6,10.2zM113.4,10.2c1.2,0,2.2,0.9,2.2,3.2s-0.1,3.2-1.3,3.2s-3.1-1.4-3.1-3.2S112.2,10.2,113.4,10.2z\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
        }
        else if($dvd_selector=="Firtree"){
          $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'xMidYMidmeet\' viewBox=\'0012626\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M111.9,18.3v3.4H109v-3.4H111.9zM90.8,18.3v3.4H88v-3.4H90.8zM69.8,18.3v3.4h-2.9v-3.4H69.8zM48.8,18.3v3.4h-2.9v-3.4H48.8zM27.7,18.3v3.4h-2.9v-3.4H27.7zM6.7,18.3v3.4H3.8v-3.4H6.7zM46.4,4l4.3,4.8l-1.8,0l3.5,4.4l-2.2-0.1l3,3.3l-11,0.4l3.6-3.8l-2.9-0.1l3.1-4.2l-1.9,0L46.4,4zM111.4,4l2.4,4.8l-1.8,0l3.5,4.4l-2.5-0.1l3.3,3.3h-11l3.1-3.4l-2.5-0.1l3.1-4.2l-1.9,0L111.4,4zM89.9,4l2.9,4.8l-1.9,0l3.2,4.2l-2.5,0l3.5,3.5l-11-0.4l3-3.1l-2.4,0L88,8.8l-1.9,0L89.9,4zM68.6,4l3,4.4l-1.9,0.1l3.4,4.1l-2.7,0.1l3.8,3.7H63.8l2.9-3.6l-2.9,0.1L67,8.7l-2,0.1L68.6,4zM26.5,4l3,4.4l-1.9,0.1l3.7,4.7l-2.5-0.1l3.3,3.3H21l3.1-3.4l-2.5-0.1l3.2-4.3l-2,0.1L26.5,4zM4.9,4l3.7,4.8l-1.5,0l3.1,4.2L7.6,13l3.4,3.4H0l3-3.3l-2.3,0.1l3.5-4.4l-2.3,0L4.9,4z\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
        }
        else if($dvd_selector=="Halfrounds"){
          $dividershape="background:url('data:image/svg+xml,%3Csvg preserveAspectRatio=\'xMidYMidmeet\' viewBox=\'0012026\' fill=\'$binColor\' xmlns=\'http://www.w3.org/2000/svg\' stroke=\'$binColor\' overflow=\'visible\' height=\'100%\' stroke-width=\'$dividrWidth\' stroke-linecap=\'square\' stroke-miterlimit=\'10\' %3E%3Cpath d=\'M11.9,15.9L11.9,15.9L0,16c-0.2-3.7,1.5-5.7,4.9-6C10,9.6,12.4,14.2,11.9,15.9zM26.9,15.9L26.9,15.9L15,16c0.5-3.7,2.5-5.7,5.9-6C26,9.6,27.4,14.2,26.9,15.9zM37.1,10c3.4,0.3,5.1,2.3,4.9,6H30.1C29.5,14.4,31.9,9.6,37.1,10zM57,15.9L57,15.9L45,16c0-3.4,1.6-5.4,4.9-5.9C54.8,9.3,57.4,14.2,57,15.9zM71.9,15.9L71.9,15.9L60,16c-0.2-3.7,1.5-5.7,4.9-6C70,9.6,72.4,14.2,71.9,15.9zM82.2,10c3.4,0.3,5,2.3,4.8,6H75.3C74,13,77.1,9.6,82.2,10zM101.9,15.9L101.9,15.9L90,16c-0.2-3.7,1.5-5.7,4.9-6C100,9.6,102.4,14.2,101.9,15.9zM112.1,10.1c2.7,0.5,4.3,2.5,4.9,5.9h-11.9l0,0C104.5,14.4,108,9.3,112.1,10.1z\' /%3E%3C/svg%3E') 0% 0% / 20px 100%; min-height: 20px";
        }
        else if($dvd_selector=="None")
        {
          $dividershape ="";
        }
   $divider = "";
   $divider .= '<div '.$spacer_wrapper.'>';
   $divider .= '<div '.$spacer.'>';
   $divider .= '<div style="'.$dividershape.'" >';
   $divider .= '</div>';
   $divider.='<'.$attributes['text_divider_headings'] .$text_style.'>'.$text_divider.
      '</'.$attributes['text_divider_headings'].'>';
   $divider .= '<span '.$spacerIcon.' class="'.$icon_selector.'">';
   $divider .= '</span>';

   $divider .= '</div>';
   $divider .= '</div>';
   return $divider;

} 
  
}

new BB_DIVIDER();



