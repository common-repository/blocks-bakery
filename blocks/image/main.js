const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, MediaUploadCheck, AlignmentToolbar } = wp.blockEditor;
const { PanelBody, Button, ResponsiveWrapper, SelectControl, Dashicon, TextControl, PanelRow, RangeControl, Card, CardBody, ColorPalette, ColorIndicator

} = wp.components;
const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { __ } = wp.i18n;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import color_palette_list from '../gb-helper/color_palette';
import { all_font_families } from '../gb-helper/font_family_detailed';
import img_icon from '../assets/default';
// You need to import the CSS only once




const BlockEdit = (props) => {
    const { attributes, setAttributes } = props;

    const removeMedia = () => {
        props.setAttributes({
            mediaId: 0,
            mediaUrl: ''
        });
    }
    const onSelectMedia = (media) => {
        props.setAttributes({
            mediaId: media.id,
            mediaUrl: media.url
        });
    }

    const onChangeAlignment = (newAlignment) => {
        setAttributes({
            alignment: newAlignment === undefined ? 'none' : newAlignment,
        });
    };
    // Responsove 

    const laptop = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    }
    const tablet = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    }
    const smartphone = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    }
    const widthLaptop = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    }
    const widthTablet = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    }
    const widthSmartphone = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    }
    const maxWidthLaptop = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    }
    const maxWidthTablet = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    }
    const maxWidthSmartphone = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    }
    const heightLaptop = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    }
    const heightTablet = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    }
    const heightSmartphone = () => {
        wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    }
    const px_case = () => {
        var px_case = document.getElementById("px_case");
        var em_case = document.getElementById("em_case");
        var rem_case = document.getElementById("rem_case");
        var vw_case = document.getElementById("vw_case");
        px_case.style.textDecoration = "underline";
        em_case.style.textDecoration = "none";
        rem_case.style.textDecoration = "none";
        vw_case.style.textDecoration = "none";

        props.setAttributes({ pxfortile: 'px', caption_range_controller: 200 })
    }
    const em_case = () => {
        var px_case = document.getElementById("px_case");
        var em_case = document.getElementById("em_case");
        var rem_case = document.getElementById("rem_case");
        var vw_case = document.getElementById("vw_case");
        px_case.style.textDecoration = "none";
        em_case.style.textDecoration = "underline";
        rem_case.style.textDecoration = "none";
        vw_case.style.textDecoration = "none";

        props.setAttributes({ pxfortile: 'em', caption_range_controller: 10 })
    }
    const rem_case = () => {
        var px_case = document.getElementById("px_case");
        var em_case = document.getElementById("em_case");
        var rem_case = document.getElementById("rem_case");
        var vw_case = document.getElementById("vw_case");
        px_case.style.textDecoration = "none";
        em_case.style.textDecoration = "none";
        rem_case.style.textDecoration = "underline";
        vw_case.style.textDecoration = "none";

        props.setAttributes({ pxfortile: 'rem', caption_range_controller: 10 })
    }
    const vw_case = () => {
        var px_case = document.getElementById("px_case");
        var em_case = document.getElementById("em_case");
        var rem_case = document.getElementById("rem_case");
        var vw_case = document.getElementById("vw_case");
        px_case.style.textDecoration = "none";
        em_case.style.textDecoration = "none";
        rem_case.style.textDecoration = "none";
        vw_case.style.textDecoration = "underline";

        props.setAttributes({ pxfortile: 'vw', caption_range_controller: 10 })
    }


    // Unit Conversion

    var img_width_per = document.getElementById("img_width_per");
    var img_width_px = document.getElementById("img_width_px");
    var img_width_vw = document.getElementById("img_width_vw");
    const imgWidthPer = () => {
        img_width_per.style.textDecoration = "underline";
        img_width_px.style.textDecoration = "none";
        img_width_vw.style.textDecoration = "none";
        setAttributes({ img_width: null, img_width_unit: '%', img_width_controller: 100 })
    }
    const imgWidthPX = () => {
        img_width_per.style.textDecoration = "none";
        img_width_px.style.textDecoration = "underline";
        img_width_vw.style.textDecoration = "none";
        setAttributes({ img_width: null, img_width_unit: 'px', img_width_controller: 1000 })
    }
    const imgWidthVW = () => {
        img_width_per.style.textDecoration = "none";
        img_width_px.style.textDecoration = "none";
        img_width_vw.style.textDecoration = "underline";
        setAttributes({ img_width: null, img_width_unit: 'vw', img_width_controller: 100 })
    }

    var img_max_width_per = document.getElementById("img_max_width_per");
    var img_max_width_px = document.getElementById("img_max_width_px");
    var img_max_width_vw = document.getElementById("img_max_width_vw");
    const imgMaxWidthPer = () => {
        img_max_width_per.style.textDecoration = "underline";
        img_max_width_px.style.textDecoration = "none";
        img_max_width_vw.style.textDecoration = "none";
        setAttributes({ img_max_width: null, img_max_width_unit: '%', img_max_width_controller: 100 })
    }
    const imgMaxWidthPX = () => {
        img_max_width_per.style.textDecoration = "none";
        img_max_width_px.style.textDecoration = "underline";
        img_max_width_vw.style.textDecoration = "none";
        setAttributes({ img_max_width: null, img_max_width_unit: 'px', img_max_width_controller: 1000 })
    }
    const imgMaxWidthVW = () => {
        img_max_width_per.style.textDecoration = "none";
        img_max_width_px.style.textDecoration = "none";
        img_max_width_vw.style.textDecoration = "underline";
        setAttributes({ img_max_width: null, img_max_width_unit: 'vw', img_max_width_controller: 100 })
    }

    var img_height_px = document.getElementById("img_height_px");
    var img_height_em = document.getElementById("img_height_em");
    const imgHeightPX = () => {
        img_height_px.style.textDecoration = "underline";
        img_height_em.style.textDecoration = "none";
        setAttributes({ img_height: null, img_height_unit: 'px', img_height_controller: 500 })
    }
    const imgHeightVH = () => {
        img_height_px.style.textDecoration = "none";
        img_height_em.style.textDecoration = "underline";
        setAttributes({ img_height: null, img_height_unit: 'vh', img_height_controller: 100 })
    }

    var img_radius_PX = document.getElementById("img_radius_px");
    var img_radius_PER = document.getElementById("img_radius_per");
    const imgBorderPX = () => {
        img_radius_PX.style.textDecoration = "underline";
        img_radius_PER.style.textDecoration = "none";
        setAttributes({ img_height: null, img_border_radius_unit: 'px' })
    }
    const imgBorderPER = () => {
        img_radius_PX.style.textDecoration = "none";
        img_radius_PER.style.textDecoration = "underline";
        setAttributes({ img_height: null, img_border_radius_unit: '%' })
    }

    var img_radius_hover_px = document.getElementById("img_radius_hover_px")
    var img_radius_hover_per = document.getElementById("img_radius_hover_per")
    const imgBorderHoverPX = () => {
        img_radius_hover_px.style.textDecoration = "underline"
        img_radius_hover_per.style.textDecoration = "none"
        setAttributes({ img_border_hover_radius_unit: "px" })
    }
    const imgBorderHoverPER = () => {
        img_radius_hover_px.style.textDecoration = "none"
        img_radius_hover_per.style.textDecoration = "underline"
        setAttributes({ img_border_hover_radius_unit: "%" })
    }


    // Image Filter Edit Panel

    const imgFilterEditPanel = () => {
        var filter_edit_panel = document.getElementById("img_filter_edit_panel");
        var filter_reset_display = document.getElementById("filter_reset_display");
        filter_reset_display.style.display = "inline-block"
        if (filter_edit_panel.style.display === "block") {
            filter_edit_panel.style.display = "none"
        }
        else if (filter_edit_panel.style.display === "none") {
            filter_edit_panel.style.display = "block";
        }
    }
    const imgFilterHoverEditPanel = () => {
        var filter_edit_panel = document.getElementById("img_hover_filter_edit_panel");
        var filter_reset_display = document.getElementById("filter_hover_reset_display");
        filter_reset_display.style.display = "inline-block"
        if (filter_edit_panel.style.display === "block") {
            filter_edit_panel.style.display = "none"
        }
        else if (filter_edit_panel.style.display === "none") {
            filter_edit_panel.style.display = "block";
        }
    }


    // Change Flag

    const changeFlagForBorder = () => {
        if (attributes.isAllBorder) {
            setAttributes({ isAllBorder: false });
        } else {
            setAttributes({ isAllBorder: true });
        }
    }

    if (attributes.isAllBorder) {
        if (attributes.type_border === "left") {
            setAttributes({
                border_top_width: attributes.border_left_width,
                border_right_width: attributes.border_left_width,
                border_left_width: attributes.border_left_width,
                border_bottom_width: attributes.border_left_width,
            })


        } else if (attributes.type_border === "right") {
            setAttributes({
                border_top_width: attributes.border_right_width,
                border_right_width: attributes.border_right_width,
                border_left_width: attributes.border_right_width,
                border_bottom_width: attributes.border_right_width,
            })

        } else if (attributes.type_border === "top") {
            setAttributes({
                border_top_width: attributes.border_top_width,
                border_right_width: attributes.border_top_width,
                border_left_width: attributes.border_top_width,
                border_bottom_width: attributes.border_top_width,
            })

        } else if (attributes.type_border === "bottom") {
            setAttributes({
                border_top_width: attributes.border_bottom_width,
                border_right_width: attributes.border_bottom_width,
                border_left_width: attributes.border_bottom_width,
                border_bottom_width: attributes.border_bottom_width,
            })

        }
    }

    // const changeFlagForHoverBorder = () => {
    //     if (attributes.isAllHoverBorder) {
    //         setAttributes({ isAllHoverBorder: false });
    //     } else {
    //         setAttributes({ isAllHoverBorder: true });
    //     }
    // }

    if (attributes.isAllHoverBorder) {
        if (attributes.type_hover_border === "left") {
            setAttributes({
                border_top_hover_width: attributes.border_left_hover_width,
                border_right_hover_width: attributes.border_left_hover_width,
                border_left_hover_width: attributes.border_left_hover_width,
                border_bottom_hover_width: attributes.border_left_hover_width,
            })

        } else if (attributes.type_hover_border === "right") {
            setAttributes({
                border_top_hover_width: attributes.border_right_hover_width,
                border_right_hover_width: attributes.border_right_hover_width,
                border_left_hover_width: attributes.border_right_hover_width,
                border_bottom_hover_width: attributes.border_right_hover_width,
            })
        } else if (attributes.type_hover_border === "top") {
            setAttributes({
                border_top_hover_width: attributes.border_top_hover_width,
                border_right_hover_width: attributes.border_top_hover_width,
                border_left_hover_width: attributes.border_top_hover_width,
                border_bottom_hover_width: attributes.border_top_hover_width,
            })
        } else if (attributes.type_hover_border === "bottom") {
            setAttributes({
                border_top_hover_width: attributes.border_bottom_hover_width,
                border_right_hover_width: attributes.border_bottom_hover_width,
                border_left_hover_width: attributes.border_bottom_hover_width,
                border_bottom_hover_width: attributes.border_bottom_hover_width,
            })
        }
    }


    const changeFlagForRadius = () => {
        if (attributes.isAllRadius) {
            setAttributes({ isAllRadius: false });
        } else {
            setAttributes({ isAllRadius: true });
        }
    }

    if (attributes.isAllRadius === true) {
        if (attributes.type_radius === "left") {
            setAttributes({
                border_right_radius: attributes.border_left_radius,
                border_left_radius: attributes.border_left_radius,
                border_bottom_radius: attributes.border_left_radius,
                border_top_radius: attributes.border_left_radius,

            })

        } else if (attributes.type_radius === "right") {
            setAttributes({
                border_right_radius: attributes.border_right_radius,
                border_left_radius: attributes.border_right_radius,
                border_bottom_radius: attributes.border_right_radius,
                border_top_radius: attributes.border_right_radius,

            })
        } else if (attributes.type_radius === "top") {
            setAttributes({
                border_right_radius: attributes.border_top_radius,
                border_left_radius: attributes.border_top_radius,
                border_bottom_radius: attributes.border_top_radius,
                border_top_radius: attributes.border_top_radius,

            })
        } else if (attributes.type_radius === "bottom") {
            setAttributes({
                border_right_radius: attributes.border_bottom_radius,
                border_left_radius: attributes.border_bottom_radius,
                border_bottom_radius: attributes.border_bottom_radius,
                border_top_radius: attributes.border_bottom_radius,

            })
        }
    } else if (attributes.isAllRadius === false) {
        setAttributes({
            border_top_radius: attributes.border_top_radius,
            border_right_radius: attributes.border_right_radius,
            border_left_radius: attributes.border_left_radius,
            border_bottom_radius: attributes.border_bottom_radius,
        })
    }


    const changeFlagForHoverRadius = () => {
        if (attributes.isAllHoverRadius) {
            setAttributes({ isAllHoverRadius: false });
        } else {
            setAttributes({ isAllHoverRadius: true });
        }
    }
    if (attributes.isAllHoverRadius) {
        if (attributes.type_hover_radius === "left") {
            setAttributes({
                border_hover_top_radius: attributes.border_hover_left_radius,
                border_hover_right_radius: attributes.border_hover_left_radius,
                border_hover_left_radius: attributes.border_hover_left_radius,
                border_hover_bottom_radius: attributes.border_hover_left_radius,
            })

        } else if (attributes.type_hover_radius === "right") {
            setAttributes({
                border_hover_top_radius: attributes.border_hover_right_radius,
                border_hover_right_radius: attributes.border_hover_right_radius,
                border_hover_left_radius: attributes.border_hover_right_radius,
                border_hover_bottom_radius: attributes.border_hover_right_radius,
            })
        } else if (attributes.type_hover_radius === "top") {
            setAttributes({
                border_hover_top_radius: attributes.border_hover_top_radius,
                border_hover_right_radius: attributes.border_hover_top_radius,
                border_hover_left_radius: attributes.border_hover_top_radius,
                border_hover_bottom_radius: attributes.border_hover_top_radius,
            })
        } else if (attributes.type_hover_radius === "bottom") {
            setAttributes({
                border_hover_top_radius: attributes.border_hover_bottom_radius,
                border_hover_right_radius: attributes.border_hover_bottom_radius,
                border_hover_left_radius: attributes.border_hover_bottom_radius,
                border_hover_bottom_radius: attributes.border_hover_bottom_radius,
            })
        }
    }


    // Border Display Panel

    const borderPanelDisp = (val) => {
        if (val === "None") {
            setAttributes({ border_width_disp: "none" })
        } else {
            setAttributes({ border_width_disp: "block" })
        }
    }
    const borderPanelHoverDisp = (val) => {
        if (val === "None") {
            setAttributes({ border_width_hover_disp: "none" })
        } else {
            setAttributes({ border_width_hover_disp: "block" })
        }
    }

    // Toggle Controller

    const img_toggle = () => {
        var x = document.getElementById("img_toggle");
        if (x.style.display === "block") {
            x.style.display = "none"
        }
        else if (x.style.display === "none") {
            x.style.display = "block";
        }
    }
    const imgHoverToggle = () => {
        var x = document.getElementById("img_hover_toggle");
        if (x.style.display === "block") {
            x.style.display = "none"
        }
        else if (x.style.display === "none") {
            x.style.display = "block";
        }
    }

    // Color Clear

    const clearImgBorderColor = () => { setAttributes({ image_border_color: "" }) }
    const clearImgShadowColor = () => { setAttributes({ img_shadow_color: '' }) }
    const clearImgShadowHoverColor = () => { setAttributes({ img_hover_shadow_blur: '' }) }

    // Reset

    const imgShadowReset = () => {
        setAttributes({ img_shadow_horizontal: 0 })
        setAttributes({ img_shadow_vertical: 0 })
        setAttributes({ img_shadow_color: '' })
        setAttributes({ img_shadow_blur: 0 })
    }
    const filter_edit_panel_reset = () => {
        setAttributes({ css_blur: 0 })
        setAttributes({ css_brightness: 100 })
        setAttributes({ css_contrast: 100 })
        setAttributes({ css_hue: 0 })
        setAttributes({ css_saturation: 100 })
    }
    const imgFilterHoverResetPanel = () => {
        setAttributes({ css_hover_blur: 0 })
        setAttributes({ css_hover_brightness: 100 })
        setAttributes({ css_hover_contrast: 100 })
        setAttributes({ css_hover_hue: 0 })
        setAttributes({ css_hover_saturation: 100 })
    }

    const imgHover = (e) => {
        const hover = e.target.style;
        hover.opacity = attributes.img_hover_opacity;
        hover.filter = `brightness(${attributes.css_hover_brightness}%) contrast(${attributes.css_hover_contrast}%) saturate(${attributes.css_hover_saturation}%) blur(${attributes.css_hover_blur}px) hue-rotate(${attributes.css_hover_hue}deg)`
        hover.transitionDuration = attributes.img_trans_duration+'s';
        // hover.borderType = attributes.img_border_hover_style;
        // hover.borderWidth = attributes.border_top_hover_width + "px " + attributes.border_right_hover_width + "px " + attributes.border_bottom_hover_width + "px " + attributes.border_left_hover_width + "px ";
        // hover.borderRadius = attributes.border_hover_top_radius + attributes.img_border_hover_radius_unit + " " + attributes.border_hover_right_radius + attributes.img_border_hover_radius_unit + " " + attributes.border_hover_bottom_radius + attributes.img_border_hover_radius_unit + " " + attributes.border_hover_left_radius + attributes.img_border_hover_radius_unit + " ";
        hover.boxShadow = attributes.img_hover_shadow_horizental + 'px ' + attributes.img_hover_shadow_vertical + 'px ' + attributes.img_hover_shadow_blur + 'px ' + attributes.img_hover_shadow_color;


    }
    const imgNormal = (e) => {
        const normal = e.target.style;
        normal.opacity = attributes.img_opacity;
        normal.filter = `brightness(${props.attributes.css_brightness}%) contrast(${props.attributes.css_contrast}%) saturate(${props.attributes.css_saturation}%) blur(${props.attributes.css_blur}px) hue-rotate(${props.attributes.css_hue}deg)`;
        // normal.borderType = attributes.img_border_style;
        // normal.borderWidth = attributes.border_top_width + "px " + attributes.border_right_width + "px " + attributes.border_bottom_width + "px " + attributes.border_left_width + "px ";
        // normal.borderRadius = attributes.border_top_radius + attributes.img_border_radius_unit + " " + attributes.border_right_radius + attributes.img_border_radius_unit + " " + attributes.border_bottom_radius + attributes.img_border_radius_unit + " " + attributes.border_left_radius + attributes.img_border_radius_unit + " ";
        normal.boxShadow = attributes.img_shadow_horizontal + 'px ' + attributes.img_shadow_vertical + 'px ' + attributes.img_shadow_blur + 'px ' + attributes.img_shadow_color;

    }

    const blockStyle = {
        backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
    };

    // caption
    const alignCenter = () => {
        props.setAttributes({ caption_align: 'center' })
    }
    const alignLeft = () => {
        props.setAttributes({ caption_align: 'left' })
    }
    const alignRight = () => {
        props.setAttributes({ caption_align: 'right' })
    }
    const alignJustify = () => {
        props.setAttributes({ caption_align: 'justify' })
    }
    const capOpacityConverter = (val) => {
        val = Math.round(val * 100) / 100;
        var alpha = Math.round(val * 255);
        var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
        props.setAttributes({ caption_opacity: hex })
    }
    const capBgOpacityConverter = (val) => {
        val = Math.round(val * 100) / 100;
        var alpha = Math.round(val * 255);
        var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
        props.setAttributes({ caption_bg_opacity: hex })
    }

    const captionPxLh = () => {
        var x = document.getElementById("caption_px_lineh");
        var y = document.getElementById("caption_em_lineh");
        x.style.textDecoration = "underline";
        y.style.textDecoration = "none";
        props.setAttributes({ lineheightpxemfortitle: 'px', line_range_controller: 100 })

    }

    const captionEmLh = () => {
        var x = document.getElementById("caption_px_lineh");
        var y = document.getElementById("caption_em_lineh");
        x.style.textDecoration = "none";
        y.style.textDecoration = "underline";
        props.setAttributes({ lineheightpxemfortitle: 'em', line_range_controller: 10 })

    }
    const clearCaptionColor = () => {
        props.setAttributes({ caption_color: '#000000' })
    }
    const clearCaptionBgColor = () => {
        props.setAttributes({ caption_bg_color: '#FFFFFF' })
    }
    const clearCaptionShadowColor = () => {
        props.setAttributes({ caption_shadow_colors: 'transparent' })
    }

    const captionReset = () => {
        props.setAttributes({ caption_shadow_horizontal: 0 })
        props.setAttributes({ caption_shadow_vertical: 0 })
        props.setAttributes({ caption_shadow_colors: '' })
        props.setAttributes({ caption_shadow_blur: 0 })
    }

    const captionToggle = (new_val) => {
        props.setAttributes({ caption_shadow_colors: "#000000" })
        var x = document.getElementById("prifex-toggle");
        if (x.style.display === "block") {
            x.style.display = "none"
        }
        else if (x.style.display === "none") {
            x.style.display = "block";
        }
    }

    let styles = {
        img_styling: {
            width: attributes.img_width + attributes.img_width_unit,
            maxWidth: attributes.img_max_width + attributes.img_max_width_unit,
            height: attributes.img_height + attributes.img_height_unit,
            objectFit: attributes.image_object_fit,
            opacity: attributes.img_opacity,
            filter: `brightness(${props.attributes.css_brightness}%) contrast(${props.attributes.css_contrast}%) saturate(${props.attributes.css_saturation}%) blur(${props.attributes.css_blur}px) hue-rotate(${props.attributes.css_hue}deg)`,
            borderStyle: attributes.img_border_style,
            borderTopWidth: attributes.border_top_width + "px",
            borderRightWidth: attributes.border_right_width + "px",
            borderBottomWidth: attributes.border_bottom_width + "px ",
            borderLeftWidth: attributes.border_left_width + "px ",
            borderColor: props.attributes.image_border_color,
            borderRadius: attributes.border_top_radius + attributes.img_border_radius_unit + " " + attributes.border_right_radius + attributes.img_border_radius_unit + " " + attributes.border_bottom_radius + attributes.img_border_radius_unit + " " + attributes.border_left_radius + attributes.img_border_radius_unit + " ",
            boxShadow: attributes.img_shadow_horizontal + 'px ' + attributes.img_shadow_vertical + 'px ' + attributes.img_shadow_blur + 'px ' + attributes.img_shadow_color,
        },
        caption_style: {
            display: attributes.caption_type,
            textAlign: attributes.caption_align,
            color: attributes.caption_color + attributes.caption_opacity,
            backgroundColor: attributes.caption_bg_color + attributes.caption_bg_opacity,
            fontFamily: attributes.caption_family,
            fontWeight: attributes.caption_weight,
            fontSize: attributes.caption_size + attributes.pxfortile,
            textTransform: attributes.caption_transform,
            lineHeight: attributes.caption_height + attributes.lineheightpxemfortitle,
            letterSpacing: attributes.letter_spacing_title,
            textShadow: attributes.caption_shadow_horizontal + 'px ' + attributes.caption_shadow_vertical + 'px ' + attributes.caption_shadow_blur + 'px ' + attributes.caption_shadow_colors,
            mixBlendMode: attributes.caption_blend_mode,
            fontStyle: attributes.caption_style,
            textDecoration: props.attributes.caption_decoration,
            marginTop: attributes.caption_spacing


        }
    }

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title={__('Image', 'Blocks Bakery')}
                    initialOpen={false}
                >
                    <div className="editor-post-featured-image">
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectMedia}
                                value={attributes.mediaId}
                                allowedTypes={['image']}
                                render={({ open }) => (
                                    <Button
                                        className={attributes.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                                        onClick={open}
                                    >
                                        {attributes.mediaId == 0 && __('Choose an image', 'awp')}
                                        {props.media != undefined &&
                                            <ResponsiveWrapper
                                                naturalWidth={props.media.media_details.width}
                                                naturalHeight={props.media.media_details.height}
                                            >
                                                <img src={props.media.source_url} />
                                            </ResponsiveWrapper>
                                        }
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        {attributes.mediaId != 0 &&
                            <MediaUploadCheck>
                                <MediaUpload
                                    title={__('Replace image', 'awp')}
                                    value={attributes.mediaId}
                                    onSelect={onSelectMedia}
                                    allowedTypes={['image']}
                                    render={({ open }) => (
                                        <Button onClick={open} isDefault isLarge>{__('Replace image', 'awp')}</Button>
                                    )}
                                />
                            </MediaUploadCheck>
                        }
                        {attributes.mediaId != 0 &&
                            <MediaUploadCheck>
                                <Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'awp')}</Button>
                            </MediaUploadCheck>
                        }
                    </div>
                    <hr />
                    <SelectControl
                        label={__("Image Size", "blocks_bakery")}
                        value={attributes.image_size}
                        options={[
                            { label: 'Thumbnail - 150 x 150', value: '150' },
                            { label: 'Medium - 300 x 300', value: '300' },
                            { label: 'Medium Large - 768 x 768', value: '768' },
                            { label: 'Large - 1024 x 1024', value: '1024' },
                            { label: '1536 x 1536 - 1536 x 1536', value: '1536' },
                            { label: '2048 x 2048 - 2048 x 2048', value: '2048' },
                            { label: 'Full', value: '100%' },
                        ]}
                        onChange={(new_val) => {
                            props.setAttributes({ image_size: new_val })
                        }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Alignment</p>
                        <AlignmentToolbar
                            value={attributes.alignment}
                            onChange={onChangeAlignment}
                        />
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Responsive</p>
                        <div>
                            <Dashicon style={{ cursor: 'pointer' }} onClick={laptop} icon='laptop' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={tablet} icon='tablet' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={smartphone} icon='smartphone' />
                        </div>
                    </div>
                    <SelectControl
                        label={__("Caption", "blocks_bakery")}
                        value={attributes.caption_type}
                        options={[
                            { label: 'None', value: 'none' },
                            { label: 'Attachment Caption', value: 'block' },
                        ]}
                        onChange={(value) => { setAttributes({ caption_type: value }) }}
                    />
                    <div style={{ display: attributes.caption_type }} >
                        <TextControl
                            label="Custom Caption"
                            placeholder="Enter Your Image Caption"
                            value={attributes.img_caption}
                            onChange={(value) => { setAttributes({ img_caption: value }) }}
                        />
                    </div>
                </PanelBody>
                <PanelBody
                    title={__('Style', 'Blocks Bakery')}
                    initialOpen={false}
                >
                    <PanelRow>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '10px' }}>Width</p>
                            <div>
                                <Dashicon style={{ cursor: 'pointer' }} onClick={widthLaptop} icon='laptop' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={widthTablet} icon='tablet' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={widthSmartphone} icon='smartphone' />
                            </div>
                        </div>
                        <div>
                            <Button id="img_width_per" onClick={imgWidthPer} style={{ textDecoration: "underline", padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>%</Button>
                            <Button id="img_width_px" onClick={imgWidthPX} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>px</Button>
                            <Button id="img_width_vw" onClick={imgWidthVW} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>vw</Button>
                        </div>
                    </PanelRow>
                    <RangeControl
                        min={0}
                        max={attributes.img_width_controller}
                        step={1}
                        value={attributes.img_width}
                        onChange={(new_val) => {
                            props.setAttributes({ img_width: new_val })
                        }}
                    />
                    <hr />
                    <PanelRow>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '10px' }}>Max Width</p>
                            <div>
                                <Dashicon style={{ cursor: 'pointer' }} onClick={maxWidthLaptop} icon='laptop' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={maxWidthTablet} icon='tablet' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={maxWidthSmartphone} icon='smartphone' />
                            </div>
                        </div>
                        <div>
                            <Button id="img_max_width_per" onClick={imgMaxWidthPer} style={{ textDecoration: "underline", padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>%</Button>
                            <Button id="img_max_width_px" onClick={imgMaxWidthPX} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>px</Button>
                            <Button id="img_max_width_vw" onClick={imgMaxWidthVW} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>vw</Button>
                        </div>
                    </PanelRow>
                    <RangeControl
                        min={0}
                        max={attributes.img_max_width_controller}
                        step={1}
                        value={attributes.img_max_width}
                        onChange={(new_val) => {
                            props.setAttributes({ img_max_width: new_val })
                        }}
                    />
                    <hr />

                    <PanelRow>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '10px' }}>Height</p>
                            <div>
                                <Dashicon style={{ cursor: 'pointer' }} onClick={heightLaptop} icon='laptop' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={heightTablet} icon='tablet' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={heightSmartphone} icon='smartphone' />
                            </div>
                        </div>
                        <div>
                            <Button id="img_height_px" onClick={imgHeightPX} style={{ textDecoration: "underline", padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>px</Button>
                            <Button id="img_height_em" onClick={imgHeightVH} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>vh</Button>
                        </div>
                    </PanelRow>
                    <RangeControl
                        min={0}
                        max={attributes.img_height_controller}
                        step={1}
                        value={attributes.img_height}
                        onChange={(new_val) => {
                            props.setAttributes({ img_height: new_val })
                        }}
                    />
                    <hr />

                    <PanelRow>
                        <p>Object Fit</p>
                        <div>
                            <Dashicon style={{ cursor: 'pointer' }} onClick={widthLaptop} icon='laptop' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={widthTablet} icon='tablet' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={widthSmartphone} icon='smartphone' />
                        </div>
                    </PanelRow>
                    <SelectControl
                        value={attributes.image_object_fit}
                        options={[
                            { label: 'Default', value: 'default' },
                            { label: 'Fill', value: 'fill' },
                            { label: 'Cover', value: 'cover' },
                            { label: 'Contain', value: 'contain' },
                        ]}
                        onChange={(new_val) => {
                            props.setAttributes({ image_object_fit: new_val })
                        }} />
                    <hr />

                </PanelBody>
                <PanelBody
                    title={__('Normal', 'Blocks Bakery')}
                    initialOpen={false}
                >
                    <RangeControl
                        label={__('Opacity', 'blocks-bakery')}
                        min={0}
                        max={1}
                        value={props.attributes.img_opacity}
                        step={0.01}
                        onChange={(new_val) => {
                            props.setAttributes({ img_opacity: new_val })
                        }}
                    />
                    <PanelRow>
                        <p>Image Filters</p>
                        <div>
                            <Button onClick={filter_edit_panel_reset} id="filter_reset_display" style={{ display: 'none', paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="image-rotate" style={{ fontSize: 15 }} /></span></Button>
                            <Button onClick={imgFilterEditPanel} style={{ textDecoration: "underline", paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="edit" style={{ fontSize: 15 }} /></span></Button>
                        </div>
                    </PanelRow>
                    <Card id="img_filter_edit_panel" style={{ display: "none" }}>
                        <CardBody style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 10, paddingRight: 10 }}>
                            <RangeControl
                                label="Blur"
                                min={0}
                                max={10}
                                initialPosition={0}
                                value={props.attributes.css_blur}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_blur: new_val })
                                }}
                            />
                            <RangeControl
                                label="Brightness"
                                min={0}
                                max={200}
                                initialPosition={100}
                                value={props.attributes.css_brightness}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_brightness: new_val })
                                }}
                            />
                            <RangeControl
                                label="Contrast"
                                min={0}
                                max={200}
                                initialPosition={100}
                                value={props.attributes.css_contrast}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_contrast: new_val })
                                }}
                            />
                            <RangeControl
                                label="Saturation"
                                min={0}
                                max={200}
                                initialPosition={100}
                                value={props.attributes.css_saturation}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_saturation: new_val })
                                }}
                            />
                            <RangeControl
                                label="Hue"
                                min={0}
                                max={360}
                                initialPosition={0}
                                value={props.attributes.css_hue}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_hue: new_val })
                                }}
                            />
                        </CardBody>
                    </Card>
                    <hr />
                    <SelectControl
                        label="Border Type"
                        options={[
                            { label: 'None', value: 'None' },
                            { label: 'Solid', value: 'solid' },
                            { label: 'Double ', value: 'double' },
                            { label: 'Dashed', value: 'dashed' },
                            { label: 'Dotted', value: 'dotted' },
                            { label: 'Groove', value: 'groove' }
                        ]}
                        onChange={(new_val) => {
                            props.setAttributes({ img_border_style: new_val })
                            borderPanelDisp(new_val)
                        }}
                        value={props.attributes.img_border_style}
                    />
                    <div style={{ display: attributes.border_width_disp }}>
                        <PanelRow>
                            <p>Border Width</p>
                            <div>
                                <Dashicon style={{ cursor: 'pointer' }} onClick={laptop} icon='laptop' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={tablet} icon='tablet' />
                                <Dashicon style={{ cursor: 'pointer' }} onClick={smartphone} icon='smartphone' />
                            </div>
                        </PanelRow>
                        <div style={{ display: 'flex', fontSize: '9px' }}>
                            <NumberControl
                                label="TOP"
                                onChange={e => setAttributes({ border_top_width: e, type_border: "top" })}
                                isDragEnabled
                                isShiftStepEnabled
                                shiftStep={1}
                                step={1}
                                value={attributes.border_top_width}
                            />
                            <NumberControl
                                label="RIGHT"
                                onChange={e => setAttributes({ border_right_width: e, type_border: "right" })}
                                isDragEnabled
                                isShiftStepEnabled
                                shiftStep={1}
                                step={1}
                                value={attributes.border_right_width}
                            />
                            <NumberControl
                                label="BOTTOM"
                                onChange={e => setAttributes({ border_bottom_width: e, type_border: "bottom" })}
                                isDragEnabled
                                isShiftStepEnabled
                                shiftStep={1}
                                step={1}
                                value={attributes.border_bottom_width}
                            />
                            <NumberControl
                                label="LEFT"
                                onChange={e => setAttributes({ border_left_width: e, type_border: "left" })}
                                isDragEnabled
                                isShiftStepEnabled
                                shiftStep={1}
                                step={1}
                                value={attributes.border_left_width}
                            />
                            <Dashicon onClick={changeFlagForBorder} style={{
                                display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px', marginLeft: '10px',
                                width: '150px', height: '30px', border: '1px solid darkslategray'
                            }} icon="admin-links" />
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p> <span>Border Color</span>
                            <ColorIndicator
                                style={{ backgroundColor: props.attributes.image_border_color }} />
                        </p>
                        <Dashicon style={{ cursor: 'pointer' }} icon="image-rotate" onClick={clearImgBorderColor} />
                    </div>
                    <ColorPalette
                        clearable={false}
                        colors={color_palette_list}
                        onChange={(new_val) => {
                            props.setAttributes({ image_border_color: new_val })

                        }}
                        value={props.attributes.image_border_color}
                    />

                    <hr />
                    <PanelRow>
                        <p>
                            <span> Border Radius </span>
                            <Dashicon style={{ cursor: 'pointer' }} onClick={laptop} icon='laptop' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={tablet} icon='tablet' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={smartphone} icon='smartphone' />
                        </p>
                        <div>
                            <Button id="img_radius_px" onClick={imgBorderPX} style={{ textDecoration: "underline", padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>px</Button>
                            <Button id="img_radius_per" onClick={imgBorderPER} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>%</Button>
                        </div>
                    </PanelRow>
                    <div style={{ display: 'flex', fontSize: '9px' }}>
                        <NumberControl
                            label="TOP"
                            onChange={e => setAttributes({ border_top_radius: e, type_radius: "top" })}
                            isDragEnabled
                            isShiftStepEnabled
                            shiftStep={1}
                            step={1}
                            value={attributes.border_top_radius}
                        />
                        <NumberControl
                            label="RIGHT"
                            onChange={e => setAttributes({ border_right_radius: e, type_radius: "right" })}
                            isDragEnabled
                            isShiftStepEnabled
                            shiftStep={1}
                            step={1}
                            value={attributes.border_right_radius}
                        />
                        <NumberControl
                            label="BOTTOM"
                            onChange={e => setAttributes({ border_bottom_radius: e, type_radius: "bottom" })}
                            isDragEnabled
                            isShiftStepEnabled
                            shiftStep={1}
                            step={1}
                            value={attributes.border_bottom_radius}
                        />
                        <NumberControl
                            label="LEFT"
                            onChange={e => setAttributes({ border_left_radius: e, type_radius: "left" })}
                            isDragEnabled
                            isShiftStepEnabled
                            shiftStep={1}
                            step={1}
                            value={attributes.border_left_radius}
                        />
                        <Dashicon onClick={changeFlagForRadius} style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px', marginLeft: '10px',
                            width: '150px', height: '30px', border: '1px solid darkslategray'
                        }} icon="admin-links" />
                    </div>
                    <hr />
                    <PanelRow>
                        <p>Image Shadow</p>
                        <div>
                            <Button onClick={imgShadowReset} style={{ paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="image-rotate" style={{ fontSize: 15 }} /></span></Button>
                            <Button onClick={img_toggle} style={{ paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="admin-tools" style={{ fontSize: 15 }} /></span></Button>
                        </div>
                    </PanelRow>
                    <Card id="img_toggle" style={{ display: "none" }}>
                        <CardBody style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 10, paddingRight: 10 }}>
                            <RangeControl
                                label="Blur"
                                min={0}
                                max={100}
                                step={1}
                                initialPosition={0}
                                value={props.attributes.img_shadow_blur}
                                onChange={(new_val) => {
                                    props.setAttributes({ img_shadow_blur: new_val })
                                }}
                            />
                            <RangeControl
                                label="Horizental"
                                min={0}
                                max={100}
                                step={1}
                                initialPosition={0}
                                value={props.attributes.img_shadow_horizontal}
                                onChange={(new_val) => {
                                    props.setAttributes({ img_shadow_horizontal: new_val })
                                }}
                            />

                            <RangeControl
                                label="Vertical"
                                min={0}
                                max={100}
                                step={1}
                                initialPosition={0}
                                value={props.attributes.img_shadow_vertical}
                                onChange={(new_val) => {
                                    props.setAttributes({ img_shadow_vertical: new_val })
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p> <span>Image Shadow Color</span>
                                    <ColorIndicator
                                        style={{ backgroundColor: props.attributes.img_shadow_color }} />
                                </p>
                                <Dashicon icon="image-rotate" onClick={clearImgShadowHoverColor} />
                            </div>
                            <ColorPalette
                                clearable={false}
                                colors={color_palette_list}
                                onChange={(new_val) => {
                                    props.setAttributes({ img_shadow_color: new_val })

                                }}
                                value={props.attributes.img_shadow_color}
                            />
                        </CardBody>
                    </Card>



                </PanelBody>
                <PanelBody
                    title={__('Hover', 'Blocks Bakery')}
                    initialOpen={false}
                >
                    <RangeControl
                        label={__('Opacity', 'blocks-bakery')}
                        min={0}
                        max={1}
                        value={props.attributes.img_hover_opacity}
                        step={0.01}
                        onChange={(new_val) => {
                            props.setAttributes({ img_hover_opacity: new_val })
                        }}
                    />
                    <PanelRow>
                        <p>Image Hover Filters</p>
                        <div>
                            <Button onClick={imgFilterHoverResetPanel} id="filter_hover_reset_display" style={{ display: 'none', paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="image-rotate" style={{ fontSize: 15 }} /></span></Button>
                            <Button onClick={imgFilterHoverEditPanel} style={{ textDecoration: "underline", paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="edit" style={{ fontSize: 15 }} /></span></Button>
                        </div>
                    </PanelRow>
                    <Card id="img_hover_filter_edit_panel" style={{ display: "none" }}>
                        <CardBody style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 10, paddingRight: 10 }}>
                            <RangeControl
                                label="Blur"
                                min={0}
                                max={10}
                                initialPosition={0}
                                value={props.attributes.css_hover_blur}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_hover_blur: new_val })
                                }}
                            />
                            <RangeControl
                                label="Brightness"
                                min={0}
                                max={200}
                                initialPosition={100}
                                value={props.attributes.css_hover_brightness}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_hover_brightness: new_val })
                                }}
                            />
                            <RangeControl
                                label="Contrast"
                                min={0}
                                max={200}
                                initialPosition={100}
                                value={props.attributes.css_hover_contrast}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_hover_contrast: new_val })
                                }}
                            />
                            <RangeControl
                                label="Saturation"
                                min={0}
                                max={200}
                                initialPosition={100}
                                value={props.attributes.css_hover_saturation}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_hover_saturation: new_val })
                                }}
                            />
                            <RangeControl
                                label="Hue"
                                min={0}
                                max={360}
                                initialPosition={0}
                                value={props.attributes.css_hover_hue}
                                onChange={(new_val) => {
                                    props.setAttributes({ css_hover_hue: new_val })
                                }}
                            />
                        </CardBody>
                    </Card>
                    <hr />
                    <RangeControl
                        label="Transition Duration"
                        min={0}
                        max={3}
                        step={0.1}
                        initialPosition={0}
                        value={props.attributes.img_trans_duration}
                        onChange={(new_val) => {
                            props.setAttributes({ img_trans_duration: new_val })
                        }}
                    />
                    <SelectControl
                        label={__("Hover Animation", "blocks_bakery")}
                        value={attributes.img_animation}
                        options={[
                            { label: 'Grow', value: 'grow' },
                            { label: 'Shrink', value: 'shrink' },
                            { label: 'Pulse', value: 'pulse' },
                            { label: 'Pulse Grow', value: 'Pulse-grow' },
                            { label: 'Pulse Shrink', value: 'Pulse-shrink' },
                            { label: 'push', value: 'push' },
                            { label: 'Pop', value: 'pop' },
                            { label: 'Bounce In', value: 'bounce-in' },
                            { label: 'Bounce Out', value: 'bounce-out' },
                            { label: 'Rotate', value: 'rotate' },
                            { label: 'Grow Rotate', value: 'grow-rotate' },
                            { label: 'Bob', value: 'bob' },
                            { label: 'Float', value: 'float' },
                            { label: 'Sink', value: 'Sink' },
                            { label: 'Hang', value: 'hang' },
                            { label: 'Skew', value: 'skew' },
                            { label: 'Skew Forward', value: 'skew-forward' },
                            { label: 'Skew Backward', value: 'skew-backward' },
                            { label: 'Wobble Vertical', value: 'wobble-vertical' },
                            { label: 'Wobble Horizontal', value: 'wobble-horizontal' },
                            { label: 'Wobble To Bottom Right', value: 'wobble-bottom-right' },
                            { label: 'Wobble To Top Right', value: '' },
                            { label: 'Wobble Skew', value: 'wobble-skew' },
                            { label: 'Wobble Top', value: 'wobble-top' },
                            { label: 'Wobble Bottom', value: 'wobble-bottom' },
                            { label: 'Buzz', value: 'buzz' },
                            { label: 'Buzz Out', value: 'buzz-out' },
                        ]}
                        onChange={(value) => { setAttributes({ img_animation: value }) }}
                    />
                </PanelBody>
                <PanelBody
                    title={__('Caption', 'Block Bakery')}
                    initialOpen={true}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>Alignment</p>

                        <div>
                            <Dashicon style={{ cursor: 'pointer' }} onClick={alignLeft} icon='editor-alignleft' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={alignCenter} icon='editor-aligncenter' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={alignRight} icon='editor-alignright' />
                            <Dashicon style={{ cursor: 'pointer' }} onClick={alignJustify} icon='editor-justify' />
                        </div>
                    </div>
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p> <span>Caption Color</span>
                            <ColorIndicator
                                style={{ backgroundColor: props.attributes.caption_color }} />
                        </p>
                        <Dashicon icon="image-rotate" onClick={clearCaptionColor} />
                    </div>
                    <ColorPalette
                        colors={color_palette_list}
                        clearable={false}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_color: new_val })
                        }}
                        value={props.attributes.caption_color}
                    />
                    <RangeControl
                        label={__('Caption Opacity', 'blocks-bakery')}
                        min={0}
                        max={1}
                        value={props.attributes.caption_opacity}
                        step={0.01}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_opacity: new_val })
                            capOpacityConverter(new_val)
                        }}
                    />
                    <hr />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p> <span>Caption Background Color</span>
                            <ColorIndicator
                                style={{ backgroundColor: props.attributes.caption_bg_color }} />
                        </p>
                        <Dashicon icon="image-rotate" onClick={clearCaptionBgColor} />
                    </div>
                    <ColorPalette
                        colors={color_palette_list}
                        clearable={false}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_bg_color: new_val })
                        }}
                        value={props.attributes.caption_bg_color}
                    />
                    <RangeControl
                        label={__('Caption Background Opacity', 'blocks-bakery')}
                        min={0}
                        max={1}
                        value={props.attributes.caption_bg_opacity}
                        step={0.01}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_bg_opacity: new_val })
                            capBgOpacityConverter(new_val)
                        }}
                    />
                    <hr />

                    < SelectControl
                        label="Caption Font Family"
                        options={all_font_families}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_family: new_val })
                        }}
                        value={props.attributes.caption_family}
                    />
                    <SelectControl
                        label="Caption Font Weight"
                        options={[
                            { label: '100', value: 100 },
                            { label: '200', value: 200 },
                            { label: '300', value: 300 },
                            { label: '400', value: 400 },
                            { label: '500', value: 500 },
                            { label: '600', value: 600 },
                            { label: '700', value: 700 },
                            { label: '800', value: 800 },
                            { label: '900', value: 900 },
                            { label: 'Default', value: '' },
                            { label: 'Normal', value: 'normal' },
                            { label: 'Bold', value: 'bold' }
                        ]
                        }
                        onChange={(new_val) => {
                            props.setAttributes({ caption_weight: new_val })
                        }}
                        value={props.attributes.caption_weight}
                    />

                    <SelectControl
                        label="Caption Blend Mode"
                        options={[
                            { label: 'Normal', value: 'normal' },
                            { label: 'Multiply', value: 'multiply' },
                            { label: 'Screen', value: 'screen' },
                            { label: 'Overlay', value: 'overlay' },
                            { label: 'Darken', value: 'darken' },
                            { label: 'Lighten', value: 'lighten' },
                            { label: 'Color Dodge', value: 'color-dodge' },
                            { label: 'Color Burn', value: 'color-burn' },
                            { label: 'Hard Light', value: 'hard-light' },
                            { label: 'Soft Light', value: 'soft-light' },
                            { label: 'Difference', value: 'difference' },
                            { label: 'Exclusion', value: 'exclusion' },
                            { label: 'HUE', value: 'hue' },
                            { label: 'Saturation', value: 'saturation' },
                            { label: 'Color', value: 'color' },
                            { label: 'Luminosity', value: 'luminosity' },
                        ]}
                        value={props.attributes.caption_blend_mode}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_blend_mode: new_val })
                        }}
                    />
                    <SelectControl
                        label="Caption Text Transform"
                        options={[
                            { label: 'Default', value: '' },
                            { label: 'Uppercase', value: 'uppercase' },
                            { label: 'Lowercase', value: 'lowercase' },
                            { label: 'Capitalize', value: 'capitalize' },
                            { label: 'Normal', value: 'normal' },
                        ]}
                        value={props.attributes.caption_transform}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_transform: new_val })
                        }}
                    />
                    <SelectControl
                        label="Caption Decoration"
                        options={[
                            { label: 'Default', value: 'inherit' },
                            { label: 'Underline', value: 'underline' },
                            { label: 'line Through', value: 'line-through' },
                            { label: 'Line Trough and Underline', value: 'underline line-through' },
                            { label: 'overline', value: 'overline' },
                            { label: 'None', value: 'none' },

                        ]}
                        value={props.attributes.caption_decoration}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_decoration: new_val })
                        }}
                    />
                    <SelectControl
                        label="Caption Style"
                        options={[
                            { label: 'Default', value: 'none' },
                            { label: 'Normal', value: 'normal' },
                            { label: 'Italic', value: 'italic' },
                            { label: 'Oblique', value: 'oblique' },
                        ]}
                        value={props.attributes.caption_style}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_style: new_val })
                        }}
                    />
                    <hr />

                    <PanelRow>
                        <p>Caption Typography</p>

                        <div>
                            <Button id="px_case" onClick={px_case} style={{ textDecoration: "underline", padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>px</Button>
                            <Button id="em_case" onClick={em_case} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>em</Button>
                            <Button id="rem_case" onClick={rem_case} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>rem</Button>
                            <Button id="vw_case" onClick={vw_case} style={{ padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>vw</Button>
                        </div>
                    </PanelRow>
                    <RangeControl
                        label="Caption Font Size"
                        min={0}
                        max={props.attributes.caption_range_controller}
                        step={1}
                        initialPosition={26}
                        value={props.attributes.caption_size}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_size: new_val })
                        }}
                    />
                    <PanelRow>
                        <p>Typography</p>

                        <div>
                            <Button id="caption_px_lineh" onClick={captionPxLh} style={{ textDecoration: "none", padding: 0, boxShadow: "none", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>px</Button>
                            <Button id="caption_em_lineh" onClick={captionEmLh} style={{ padding: 0, boxShadow: "underline", textTransform: "uppercase", fontSize: 10, marginRight: 5 }}>em</Button>
                        </div>
                    </PanelRow>
                    <RangeControl
                        label="Caption Line Height "
                        min={0}
                        max={props.attributes.line_range_controller}
                        step={0.1}
                        initialPosition={1.5}
                        value={props.attributes.caption_height}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_height: new_val })
                        }}
                    />
                    <RangeControl
                        label="Caption Letter Spacing (px)"
                        min={0}
                        max={10}
                        step={0.1}
                        initialPosition={0}
                        value={props.attributes.letter_spacing_title}
                        onChange={(new_val) => {
                            props.setAttributes({ letter_spacing_title: new_val })
                        }}
                    />


                    <PanelRow>
                        <p>Text Shadow</p>
                        <div>
                            <Button onClick={captionReset} style={{ paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="image-rotate" style={{ fontSize: 15 }} /></span></Button>
                            <Button onClick={captionToggle} style={{ paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="admin-tools" style={{ fontSize: 15 }} /></span></Button>
                        </div>
                    </PanelRow>
                    <Card id="prifex-toggle" style={{ display: "none" }}>
                        <CardBody style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 10, paddingRight: 10 }}>

                            <RangeControl
                                label="Blur"
                                min={0}
                                max={100}
                                step={0.1}
                                initialPosition={10}
                                value={props.attributes.caption_shadow_blur}
                                onChange={(new_val) => {
                                    props.setAttributes({ caption_shadow_blur: new_val })
                                }}
                            />
                            <RangeControl
                                label="horizontal"
                                min={-100}
                                max={100}
                                step={0.1}
                                initialPosition={0}
                                value={props.attributes.caption_shadow_horizontal}
                                onChange={(new_val) => {
                                    props.setAttributes({ caption_shadow_horizontal: new_val })
                                }}
                            />

                            <RangeControl
                                label="Vertical"
                                min={-100}
                                max={100}
                                step={0.1}
                                initialPosition={0}
                                value={props.attributes.caption_shadow_vertical}
                                onChange={(new_val) => {
                                    props.setAttributes({ caption_shadow_vertical: new_val })
                                }}
                            />

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p> <span>Text Shadow Color</span>
                                    <ColorIndicator
                                        style={{ backgroundColor: props.attributes.caption_shadow_colors }} />
                                </p>
                                <Dashicon icon="image-rotate" onClick={clearCaptionShadowColor} />
                            </div>
                            <ColorPalette
                                clearable={false}
                                colors={color_palette_list}
                                onChange={(new_val) => {
                                    props.setAttributes({ caption_shadow_colors: new_val })

                                }}
                                value={props.attributes.caption_shadow_colors}
                            />
                        </CardBody>
                    </Card>
                    <hr />

                    <RangeControl
                        label="Spacing"
                        min={1}
                        max={100}
                        step={1}
                        initialPosition={20}
                        value={attributes.caption_spacing}
                        onChange={(new_val) => {
                            props.setAttributes({ caption_spacing: new_val })
                        }}
                    />


                </PanelBody>
            </InspectorControls>

            <div style={{ textAlign: attributes.alignment }}>
                <figure >
                    <a style={{textDecoration:'none', color:'black'}} className="lightbox_trigger" href={attributes.mediaUrl != '' ? attributes.mediaUrl : 'none'} >


                        <img data-lightbox={attributes.mediaUrl != '' ? attributes.mediaUrl : 'none'} className={`${attributes.img_animation}`} src={attributes.mediaUrl != '' ? attributes.mediaUrl : 'none'} width={attributes.image_size} height='auto'
                            onMouseOver={imgHover}
                            onMouseLeave={imgNormal}
                            style={styles.img_styling}
                        />
                        <figcaption style={styles.caption_style}>
                            {attributes.img_caption}
                        </figcaption>
                    </a>
                </figure>
            </div>
        </Fragment>
    );
};


registerBlockType('blocksbakery/image', {
    title: 'Image',
    icon: 'smiley',
    category: 'layout',
    supports: {
        align: true
    },
    "attributes": {
        "mediaId": {
            "type": "number",
            "default": 0
        },
        "mediaUrl": {
            "type": "string",
            "default": {img_icon}
        },
        "image_size": {
            "type": "string"
        },
        "alignment": {
            "type": "string",
            "default": "none"
        },
        "caption_type": {
            "type": "string",
            "default": "none"
        },
        "fig_disp": {
            "type": "string",
            "default": "none"
        },
        "img_caption": {
            "type": "string",
        },
        "img_width": {
            "type": "number"
        },
        "img_width_unit": {
            "type": "number",
            "default": "%"
        },
        "img_width_controller": {
            "type": "number",
            "default": 100
        },
        "img_max_width": {
            "type": "string"
        },
        "img_max_width_unit": {
            "type": "string",
            "default": "%"
        },
        "img_max_width_controller": {
            "type": "number",
            "default": 100
        },
        "img_height": {
            "type": "string"
        },
        "img_height_unit": {
            "type": "string",
            "default": "px"
        },
        "img_height_controller": {
            "type": "number",
            "default": 500
        },
        "image_object_fit": {
            "type": "string",
            "default": ""
        },
        "img_opacity": {
            "type": "number"
        },
        "css_brightness": {
            "type": "number",
            "default": 100
        },
        "css_contrast": {
            "type": "number",
            "default": 100
        },
        "css_saturation": {
            "type": "number",
            "default": 100
        },
        "css_hue": {
            "type": "number",
            "default": 0,
        },
        "css_blur": {
            "type": "number",
            "default": 0,
        },
        "img_border_style": {
            "type": "string",
            "default": "none"
        },
        "border_left_width": {
            "type": "number"
        },
        "border_right_width": {
            "type": "number"
        },
        "border_top_width": {
            "type": "number"
        },
        "border_bottom_width": {
            "type": "number"
        },
        "type_border": {
            "type": "string"
        },
        "isAllBorder": {
            "type": "boolean",
            "default": true
        },
        "border_width_disp": {
            "type": "string",
            "default": "none"
        },
        "image_border_color": {
            "type": "string",
            "default": ""
        },
        "border_left_radius": {
            "type": "string",
            "default": 0
        },
        "border_right_radius": {
            "type": "string",
            "default": 0
        },
        "border_top_radius": {
            "type": "string",
            "default": 0
        },
        "border_bottom_radius": {
            "type": "string",
            "default": 0
        },
        "type_radius": {
            "type": "string"
        },
        "type_hover_radius": {
            "type": "string"
        },
        "isAllRadius": {
            "type": "boolean",
            "default": false
        },
        "img_border_radius_unit": {
            "type": "string",
            "default": "px"
        },
        "img_shadow_horizontal": {
            "type": "number"
        },
        "img_shadow_vertical": {
            "type": "number"
        },
        "img_shadow_color": {
            "type": "string"
        },
        "img_shadow_blur": {
            "type": "number"
        },
        "img_hover_opacity": {
            "type": "default",
        },
        "css_hover_brightness": {
            "type": "number",
            "default": 100
        },
        "css_hover_contrast": {
            "type": "number",
            "default": 100
        },
        "css_hover_saturation": {
            "type": "number",
            "default": 100
        },
        "css_hover_hue": {
            "type": "number",
            "default": 0,
        },
        "css_hover_blur": {
            "type": "number",
            "default": 0,
        },
        "img_trans_duration": {
            "type": "number"
        },
        "img_animation": {
            "type": "string"
        },
        "img_border_hover_style": {
            "type": "string"
        },

        "border_hover_left_radius": {
            "type": "number",
            "default": 0
        },
        "border_hover_right_radius": {
            "type": "number",
            "default": 0
        },
        "border_hover_top_radius": {
            "type": "number",
            "default": 0
        },
        "border_hover_bottom_radius": {
            "type": "number",
            "default": 0
        },
        "border_width_hover_disp": {
            "type": "string",
            "default": "none"
        },
        "border_left_hover_width": {
            "type": "number",
            "default": 0
        },
        "border_right_hover_width": {
            "type": "number",
            "default": 0
        },
        "border_top_hover_width": {
            "type": "number",
            "default": 0
        },
        "border_bottom_hover_width": {
            "type": "number",
            "default": 0
        },
        "type_hover_border": {
            "type": "string"
        },
        "isAllHoverBorder": {
            "type": "boolean",
            "default": false
        },
        "img_border_hover_radius_unit": {
            "type": "string",
            "default": "px"
        },
        "img_hover_shadow_horizental": {
            "type": "number"
        },
        "img_hover_shadow_vertical": {
            "type": "number"
        },
        "img_hover_shadow_color": {
            "type": "string"
        },
        "img_hover_shadow_blur": {
            "type": "number"
        },
        "isAllHoverRadius": {
            "type": "boolean",
            "default": false
        },
        "img_styling": {
            "source": "attribute",
            "attribute": "style"
        },
        "caption_styling": {
            "source": "attribute",
            "attribute": "style"
        },
        "caption_align": {
            "type": "string",
            "default": "left"
        },
        "caption_color": {
            "type": "string",
            "default": "#000000"
        },
        "caption_opacity": {
            "type": "string",
            "default": "FF"
        },
        "caption_bg_color": {
            "type": "string",
            "default": "#fff"
        },
        "caption_bg_opacity": {
            "type": "string",
            "default": "FF"
        },
        "caption_family": {
            "type": "string",
            "default": "Arial"
        },
        "caption_weight": {
            "type": "string",
            "default": "regular"
        },
        "caption_blend_mode": {
            "type": "string",
            "default": "normal"
        },

        "caption_decoration": {
            "type": "string",
            "default": "none",
        },
        "caption_style": {
            "type": "string",
            "default": "inherit"
        },
        "pxfortile": {
            "type": "string",
            "default": "px"
        },
        "caption_size": {
            "type": "number",
        },
        "lineheightpxemfortitle": {
            "type": "string",
            "default": "em"
        },
        "line_range_controller": {
            "type": "number",
            "default": 100
        },
        "letter_spacing_title": {
            "type": "number"
        },
        "caption_shadow_blur": {
            "type": "number",
            "default": 10
        },
        "caption_shadow_horizontal": {
            "type": "number"
        },
        "caption_shadow_vertical": {
            "type": "number"
        },
        "caption_shadow_colors": {
            "type": "string"
        },
        "caption_transform": {
            "type": "html",
            "default": "none",
        },
        "caption_spacing": {
            "type": "number",
            "default": 10
        },
        'caption_height': {
            'type': 'number',
        }
    },
    edit: withSelect((select, props) => {
        return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
    })(BlockEdit),
    save: (props) => {
        return (null);
    }
});