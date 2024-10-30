/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/section-block/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/gb-helper/color_palette.js":
/*!*******************************************!*\
  !*** ./blocks/gb-helper/color_palette.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var color_palette_list = [{
  name: "HotPink ",
  color: "#FF69B4"
}, {
  name: "MediumOrchid ",
  color: "#BA55D3"
}, {
  name: "RebeccaPurple ",
  color: "#663399"
}, {
  name: "DarkSalmon ",
  color: "	#E9967A"
}, {
  name: "FireBrick ",
  color: "#B22222"
}, {
  name: "DarkOrange ",
  color: "#FF8C00"
}, {
  name: "Tomato ",
  color: "	#FF6347"
}, {
  name: "Moccasin ",
  color: "#FFE4B5"
}, {
  name: "DarkKhaki ",
  color: "#BDB76B"
}, {
  name: "Lime ",
  color: "#00FF00"
}, {
  name: "red",
  color: "red"
}, {
  name: "green",
  color: "green"
}, {
  name: "blue",
  color: "blue"
}, {
  name: "yellow",
  color: "yellow"
}, {
  name: "pink",
  color: "pink"
}, {
  name: "white",
  color: "white"
}, {
  name: "gray",
  color: "gray"
}, {
  name: "black",
  color: "black"
}, {
  name: "lightblue",
  color: "lightblue"
}, {
  name: "cyan",
  color: "cyan"
}];
/* harmony default export */ __webpack_exports__["default"] = (color_palette_list);

/***/ }),

/***/ "./blocks/icons/section.js":
/*!*********************************!*\
  !*** ./blocks/icons/section.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var block_icons = {
  section_icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    enableBackground: "new 0 0 512 512",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#e71515"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M501.333 170.667H10.667A10.66 10.66 0 000 181.333v21.333a10.66 10.66 0 0010.667 10.667h490.667a10.66 10.66 0 0010.667-10.667v-21.333a10.662 10.662 0 00-10.668-10.666zM309.333 298.667H10.667A10.66 10.66 0 000 309.333v21.333a10.66 10.66 0 0010.667 10.667h298.667a10.66 10.66 0 0010.667-10.667v-21.333a10.662 10.662 0 00-10.668-10.666zM309.333 426.667H10.667A10.66 10.66 0 000 437.333v21.333a10.66 10.66 0 0010.667 10.667h298.667a10.66 10.66 0 0010.667-10.667v-21.333a10.662 10.662 0 00-10.668-10.666zM501.333 42.667H74.667A10.66 10.66 0 0064 53.333v21.333a10.66 10.66 0 0010.667 10.667h426.667a10.66 10.66 0 0010.667-10.667V53.333a10.662 10.662 0 00-10.668-10.666zM501.333 277.333H416c-29.406 0-53.333 23.927-53.333 53.333S386.594 384 416 384h10.667v74.667a10.66 10.66 0 0010.667 10.667 10.66 10.66 0 0010.667-10.667v-160h21.333v160a10.66 10.66 0 0010.667 10.667 10.66 10.66 0 0010.667-10.667v-160h10.667c5.896 0 10.667-4.771 10.667-10.667s-4.773-10.667-10.669-10.667z",
    "data-original": "#000000"
  })))
};
/* harmony default export */ __webpack_exports__["default"] = (block_icons);

/***/ }),

/***/ "./blocks/section-block/main.js":
/*!**************************************!*\
  !*** ./blocks/section-block/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/section */ "./blocks/icons/section.js");
/* harmony import */ var _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gb-helper/color_palette */ "./blocks/gb-helper/color_palette.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _attributes;





var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlocksStyle = _wp$blocks.registerBlocksStyle;
var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
var ALLOWED_BLOCKS = ['core/paragraph'];
registerBlockType('blocksbakery/section', {
  title: __('Section', 'blocks-bakery'),
  description: __('This block is an outer wrap section that allows you to add other blocks within it.', 'blocks-bakery'),
  // common, formatting, layout, widgets, embed
  category: 'blocks-bakery',
  icon: _icons_section__WEBPACK_IMPORTED_MODULE_2__["default"].section_icon,
  keywords: [__('Section', 'blocks-bakery'), __('Paragraph', 'blocks-bakery')],
  supports: {
    html: false
  },
  attributes: (_attributes = {
    unique_class_id: {
      type: 'string',
      default: null
    },
    // Layout
    img_ID: {
      type: 'number'
    },
    img_URL: {
      type: 'string'
    },
    img_alt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img'
    },
    width_content: {
      type: 'html'
    },
    inner_width: {
      type: 'number',
      default: 1440
    },
    maininner_width: {
      type: 'number',
      default: 550
    },
    heading_tag: {
      type: 'string',
      default: 'section'
    },
    location1: {
      type: "number",
      default: 40
    },
    location2: {
      type: "number",
      default: 70
    },
    // Spacing
    top_padding: {
      type: 'number',
      default: 20
    },
    gradient_bg: {
      type: 'string'
    },
    gradient_type: {
      type: 'string',
      default: 'linear-gradient'
    },
    bottom_padding: {
      type: 'number',
      default: 20
    },
    left_padding: {
      type: 'number',
      default: 20
    },
    right_padding: {
      type: 'number',
      default: 20
    },
    uniqueID: {
      type: "string"
    },
    top_margin: {
      type: 'number',
      default: 0
    },
    bottom_margin: {
      type: 'number',
      default: 0
    },
    left_margin: {
      type: 'number',
      default: 0
    },
    right_margin: {
      type: 'number',
      default: 0
    },
    // Background Setting
    background_setting: {
      type: 'string'
    },
    color_opacity: {
      type: 'number',
      default: 100
    },
    bg_color: {
      type: 'string',
      default: 'white'
    },
    gradient_color_1: {
      type: 'string'
    },
    gradient_color_2: {
      type: 'string'
    },
    angle_picker: {
      type: 'number',
      default: 0
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "color_opacity", {
    type: 'number',
    default: 1
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "color_gradient_opacity", {
    type: 'number',
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "opacity_value", {
    type: 'string',
    default: 'FF'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "select_border", {
    type: 'string',
    default: 'dotted'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "border_radius", {
    type: 'number',
    default: 10
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "border_width", {
    type: 'number',
    default: 1
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "border_color", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "shadow_color", {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "hori_shadow", {
    type: 'number',
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "vertical_shadow", {
    type: 'number',
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "blur_shadow", {
    type: 'number',
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "spread_shadow", {
    type: 'number',
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "shadow_selector", {
    type: 'text',
    default: ''
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "select_gg", {
    type: 'string',
    default: 'none'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "save_background", {
    type: 'string',
    default: "linear-gradient"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "url_click1", {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "url_click2", {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "section_alignment", {
    type: "string",
    default: "center"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_attributes, "block_alignment", {
    type: 'string',
    default: 'center'
  }), _attributes),
  getEditWrapperProps: function getEditWrapperProps(_ref) {
    var block_alignment = _ref.block_alignment;

    if ('left' === block_alignment || 'right' === block_alignment || 'full' === block_alignment) {
      return {
        'data-align': block_alignment
      };
    }
  },
  edit: function edit(props) {
    if (!props.attributes.unique_class_id) {
      props.setAttributes({
        unique_class_id: makeUnqiueId()
      });
    }

    var select_img = function select_img(img) {
      props.setAttributes({
        img_ID: img.id,
        img_URL: img.url,
        img_alt: img.alt
      });
    };

    var remove_img = function remove_img() {
      props.setAttributes({
        img_URL: null,
        img_ID: null,
        img_alt: null
      });
    };

    var shadow_box = function shadow_box() {
      var x = document.getElementById("shadow");

      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };

    var hexConverter = function hexConverter(val) {
      val = Math.round(val * 100) / 100;
      var alpha = Math.round(val * 255);
      var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
      props.setAttributes({
        opacity_value: hex
      });
    };

    var background_setting = function background_setting(vvval) {
      var background_changer = [];
      var x = document.getElementById("bg1");
      var y = document.getElementById("bg2");
      var z = document.getElementById("bg3");
      var a = document.getElementsByClassName("gb-section-inner");

      if (vvval === 'color') {
        x.style.display = 'block';
        y.style.display = 'none';
        z.style.display = 'none';
        props.setAttributes({
          bg_color: props.attributes.bg_color
        });
      } else if (vvval === 'gradient') {
        y.style.display = 'block';
        z.style.display = 'none';
        x.style.display = 'none';
        props.setAttributes({
          gradient_bg: props.attributes.gradient_bg
        });
      } else if (vvval = 'image') {
        x.style.display = 'none';
        y.style.display = 'none';
        z.style.display = 'block';
      }
    };

    var Divtag = props.attributes.heading_tag;

    var boxShadowReset = function boxShadowReset() {
      props.setAttributes({
        shadow_color: ""
      });
      props.setAttributes({
        hori_shadow: 0
      });
      props.setAttributes({
        vertical_shadow: 0
      });
      props.setAttributes({
        blur_shadow: 0
      });
      props.setAttributes({
        spread_shadow: 0
      });
      props.setAttributes({
        shadow_selector: ""
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", {
      dangerouslySetInnerHTML: {
        __html: "\n                    .gb-section".concat(props.attributes.unique_class_id, "{align:").concat(props.attributes.block_alignment, "} \n                    .gb-section").concat(props.attributes.unique_class_id, " .gb-section-wrapper .gb-section-inner{margin:auto; box-sizing:border-box; border-radius:").concat(props.attributes.border_radius, "px; box-shadow:").concat(props.attributes.hori_shadow, "px ").concat(props.attributes.vertical_shadow, "px ").concat(props.attributes.blur_shadow, "px ").concat(props.attributes.spread_shadow, "px ").concat(props.attributes.shadow_color, " ").concat(props.attributes.shadow_selector, "; margin-top:").concat(props.attributes.top_margin, "px;margin-bottom: ").concat(props.attributes.bottom_margin, "px; margin-left: ").concat(props.attributes.left_margin, "px; margin-right: ").concat(props.attributes.right_margin, "px; max-width: ").concat(props.attributes.width_content, "px; background-size:cover; background-position:center; background-image:url(").concat(props.attributes.img_URL, ");position:relative; }\n                    .gb-section").concat(props.attributes.unique_class_id, " .gb-section-wrapper .gb-section-inner .gb-section-inner-overlay{ border-style: ").concat(props.attributes.select_border, "; border-width: ").concat(props.attributes.border_width, "px; border-color: ").concat(props.attributes.border_color, "; padding-top: ").concat(props.attributes.top_padding, "px; padding-bottom: ").concat(props.attributes.bottom_padding, "px; padding-left: ").concat(props.attributes.left_padding, "px; padding-right: ").concat(props.attributes.right_padding, "px; border-radius: ").concat(props.attributes.border_radius, "px; background: ").concat(props.attributes.gradient_bg, "; background-color: ").concat(props.attributes.bg_color + props.attributes.opacity_value, "; overflow-wrap:break-word; }\n                    .gb-section").concat(props.attributes.unique_class_id, " .gb-section-wrapper .gb-section-inner .gb-section-inner-overlay .gb-section-changetag{ max-width: ").concat(props.attributes.maininner_width, "px; margin: 'auto';}\n                    ")
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Layout', 'blocks-bakery'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Box Width', 'blocks-bakery'),
      min: 0,
      max: 2000,
      initialPosition: 580,
      value: props.attributes.width_content,
      onChange: function onChange(new_val) {
        props.setAttributes({
          width_content: new_val
        });
        props.setAttributes({
          maininner_width: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Content width', 'blocks-bakery'),
      min: 0,
      max: 2000,
      initialPosition: 1140,
      value: props.attributes.inner_width,
      onChange: function onChange(new_val) {
        props.setAttributes({
          inner_width: new_val
        });
        props.setAttributes({
          maininner_width: new_val
        });
      },
      help: "adjust your content according to your box width"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('HTML Tag', 'blocks-bakery'),
      value: props.attributes.heading_tag,
      options: [{
        value: 'div',
        label: 'Div'
      }, {
        value: 'header',
        label: 'Header'
      }, {
        value: 'footer',
        label: 'Footer'
      }, {
        value: 'main',
        label: 'Main'
      }, {
        value: 'article',
        label: 'Article'
      }, {
        value: 'section',
        label: 'Section'
      }, {
        value: 'aside',
        label: 'Aside'
      }, {
        value: 'nav',
        label: 'Nav'
      }],
      onChange: function onChange(new_val) {
        props.setAttributes({
          heading_tag: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Spacing', 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      style: {
        fontWeight: "bold"
      }
    }, __('Padding', 'blocks-bakery'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
      })),
      min: 0,
      max: 2000,
      initialPosition: 20,
      value: props.attributes.top_padding,
      step: 0.1,
      onChange: function onChange(new_val) {
        props.setAttributes({
          top_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          top_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.bottom_padding,
      step: 0.1,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bottom_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          bottom_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.left_padding,
      step: 0.1,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          left_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          left_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.right_padding,
      step: 0.1,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          right_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          right_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      style: {
        fontWeight: "bold"
      }
    }, __('Margin', 'blocks-bakery'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
      })),
      min: -2000,
      max: 2000,
      initialPosition: 0,
      value: props.attributes.top_margin,
      step: 0.1,
      onChange: function onChange(new_val) {
        props.setAttributes({
          top_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          top_margin: 0
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
      })),
      min: -2000,
      max: 2000,
      value: props.attributes.bottom_margin,
      step: 0.1,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bottom_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          bottom_margin: 0
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.left_margin,
      step: 0.1,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          left_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          left_margin: 0
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
        fill: "#575E67",
        d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.right_margin,
      step: 0.1,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          right_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          right_margin: 0
        });
      }
    }, " Reset"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Background', 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Background Type', 'blocks-bakery'),
      value: props.attributes.background_setting,
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'color',
        label: 'Color'
      }, {
        value: 'gradient',
        label: 'Gradient'
      }, {
        value: 'image',
        label: 'Image'
      }],
      onChange: function onChange(new_val) {
        props.setAttributes({
          background_setting: new_val
        });
        background_setting(new_val);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: "bg1",
      style: {
        display: 'none'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, __('Background Color', 'blocks-bakery'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.bg_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_3__["default"],
      value: props.attributes.bg_color,
      disableCustomColors: false,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bg_color: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Opacity"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      min: 0,
      max: 1,
      value: props.attributes.opacity_value,
      step: 0.01,
      onChange: function onChange(new_val) {
        props.setAttributes({
          opacity_value: new_val
        });
        hexConverter(new_val);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: "bg2",
      style: {
        display: 'none'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalGradientPicker, {
      value: props.attributes.gradient_bg,
      onChange: function onChange(new_val) {
        props.setAttributes({
          gradient_bg: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      id: "bg3",
      style: {
        display: 'none'
      }
    }, props.attributes.img_ID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "image-ctr"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: props.attributes.img_URL,
      alt: props.attributes.img_alt
    }), props.isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      className: "btn-remove",
      onClick: remove_img
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
      icon: "no",
      size: "20"
    })) : null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      allowedType: ['image'],
      value: props.attributes.img_ID,
      onSelect: select_img,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
          className: "button button-large",
          onClick: open
        }, !props.attributes.img_ID ? __('Upload Image/Video', 'blocks-bakery') : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
          src: props.attributes.img_URL
        }));
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Border', 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Border Style', 'blocks-bakery'),
      value: props.attributes.select_border,
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'solid',
        label: 'Solid'
      }, {
        value: 'dotted',
        label: 'Dotted'
      }, {
        value: 'dashed',
        label: 'Dashed'
      }, {
        value: 'double',
        label: 'Double'
      }, {
        value: 'groove',
        label: 'Groove'
      }, {
        value: 'inset',
        label: 'Inset'
      }, {
        value: 'outset',
        label: 'Outset'
      }, {
        value: 'ridge',
        label: 'Ridge'
      }],
      onChange: function onChange(new_val) {
        props.setAttributes({
          select_border: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Border Width', 'blocks-bakery'),
      min: 0,
      max: 50,
      value: props.attributes.border_width,
      step: 0.1,
      initialPosition: 1,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_width: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba",
        marginTop: "25px"
      },
      onClick: function onClick() {
        props.setAttributes({
          border_width: 1
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Border Radius', 'blocks-bakery'),
      min: 0,
      max: 50,
      value: props.attributes.border_radius,
      step: 0.1,
      initialPosition: 10,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_radius: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        width: "22%",
        height: "31px",
        color: "#007cba",
        marginTop: "25px"
      },
      onClick: function onClick() {
        props.setAttributes({
          border_radius: 10
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Border Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.border_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_3__["default"],
      value: props.attributes.border_color,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_color: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Box Shadow"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      onClick: boxShadowReset,
      style: {
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
      icon: "image-rotate",
      style: {
        fontSize: 15
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Dashicon, {
      icon: "admin-tools",
      style: {
        fontSize: 15
      },
      onClick: shadow_box
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Card, {
      id: "shadow",
      style: {
        display: 'none'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(CardBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.shadow_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_3__["default"],
      value: props.attributes.shadow_color,
      onChange: function onChange(new_val) {
        props.setAttributes({
          shadow_color: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Horizontal', 'blocks-bakery'),
      min: -100,
      max: 100,
      step: 0.1,
      value: props.attributes.hori_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          hori_shadow: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        height: "31px",
        color: "#007cba",
        marginTop: "25px"
      },
      onClick: function onClick() {
        props.setAttributes({
          hori_shadow: 0
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Vertical', 'blocks-bakery'),
      min: -100,
      max: 100,
      step: 0.1,
      value: props.attributes.vertical_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          vertical_shadow: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        height: "31px",
        color: "#007cba",
        marginTop: "25px"
      },
      onClick: function onClick() {
        props.setAttributes({
          vertical_shadow: 0
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Blur', 'blocks-bakery'),
      min: 0,
      max: 100,
      step: 0.1,
      value: props.attributes.blur_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          blur_shadow: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        height: "31px",
        color: "#007cba",
        marginTop: "25px"
      },
      onClick: function onClick() {
        props.setAttributes({
          blur_shadow: 0
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Spread', 'blocks-bakery'),
      min: 0,
      max: 100,
      step: 0.1,
      value: props.attributes.spread_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          spread_shadow: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '11px',
        height: "31px",
        color: "#007cba",
        marginTop: "25px"
      },
      onClick: function onClick() {
        props.setAttributes({
          spread_shadow: 0
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: __('Position', 'blocks-bakery'),
      value: props.attributes.shadow_selector,
      options: [{
        value: 'inset',
        label: 'inset'
      }, {
        value: '',
        label: 'outset'
      }],
      onChange: function onChange(new_val) {
        props.setAttributes({
          shadow_selector: new_val
        });
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockAlignmentToolbar, {
      value: props.attributes.block_alignment,
      onChange: function onChange(new_val) {
        props.setAttributes({
          block_alignment: new_val
        });

        if (new_val === "full") {
          props.setAttributes({
            width_content: 'initial'
          });
        }
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      align: props.attributes.block_alignment,
      className: "gb-section".concat(props.attributes.unique_class_id)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gb-section-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Divtag, {
      className: "gb-section-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gb-section-inner-overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gb-section-changetag",
      tagName: props.attributes.heading_tag
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      orientation: "horizontal",
      template: [['core/paragraph']]
    })))))))];
  },
  save: function save(props) {
    var Divtag = props.attributes.heading_tag;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", {
      dangerouslySetInnerHTML: {
        __html: "\n                    .gb-section".concat(props.attributes.unique_class_id, "{align:").concat(props.attributes.block_alignment, "} \n                    .gb-section").concat(props.attributes.unique_class_id, " .gb-section-wrapper .gb-section-inner{margin:auto; box-sizing:border-box; border-radius:").concat(props.attributes.border_radius, "px; box-shadow:").concat(props.attributes.hori_shadow, "px ").concat(props.attributes.vertical_shadow, "px ").concat(props.attributes.blur_shadow, "px ").concat(props.attributes.spread_shadow, "px ").concat(props.attributes.shadow_color, " ").concat(props.attributes.shadow_selector, "; margin-top:").concat(props.attributes.top_margin, "px;margin-bottom: ").concat(props.attributes.bottom_margin, "px; margin-left: ").concat(props.attributes.left_margin, "px; margin-right: ").concat(props.attributes.right_margin, "px; max-width: ").concat(props.attributes.width_content, "px; background-size:cover; background-position:center; background-image:url(").concat(props.attributes.img_URL, ");position:relative; }\n                    .gb-section").concat(props.attributes.unique_class_id, " .gb-section-wrapper .gb-section-inner .gb-section-inner-overlay{ border-style: ").concat(props.attributes.select_border, "; border-width: ").concat(props.attributes.border_width, "px; border-color: ").concat(props.attributes.border_color, "; padding-top: ").concat(props.attributes.top_padding, "px; padding-bottom: ").concat(props.attributes.bottom_padding, "px; padding-left: ").concat(props.attributes.left_padding, "px; padding-right: ").concat(props.attributes.right_padding, "px; border-radius: ").concat(props.attributes.border_radius, "px; background: ").concat(props.attributes.gradient_bg, "; background-color: ").concat(props.attributes.bg_color + props.attributes.opacity_value, "; overflow-wrap:break-word; }\n                    .gb-section").concat(props.attributes.unique_class_id, " .gb-section-wrapper .gb-section-inner .gb-section-inner-overlay .gb-section-changetag{ max-width: ").concat(props.attributes.maininner_width, "px; margin: 'auto';}\n                    ")
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      align: props.attributes.block_alignment,
      className: "gb-section".concat(props.attributes.unique_class_id)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gb-section-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Divtag, {
      className: "gb-section-inner"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gb-section-inner-overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "gb-section-changetag",
      tagName: props.attributes.heading_tag
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null)))))));
  }
});

function makeUnqiueId() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map