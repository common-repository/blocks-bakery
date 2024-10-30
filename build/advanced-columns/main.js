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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/advanced-columns/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/advanced-columns/main.js":
/*!*****************************************!*\
  !*** ./blocks/advanced-columns/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_advace_column_child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/advace_column_child */ "./blocks/icons/advace_column_child.js");
/* harmony import */ var _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gb-helper/color_palette */ "./blocks/gb-helper/color_palette.js");
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent */ "./blocks/advanced-columns/parent.js");

// Import Section


var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    SelectControl = _wp$components.SelectControl,
    Dashicon = _wp$components.Dashicon,
    RangeControl = _wp$components.RangeControl,
    ColorIndicator = _wp$components.ColorIndicator,
    ColorPalette = _wp$components.ColorPalette,
    Button = _wp$components.Button,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker;
var ALLOWED_BLOCKS = ['core/columns'];

registerBlockType('blocksbakery/advanced-column', {
  title: __('columns', 'blocks-bakery'),
  description: __('The advanced column block allows to insert many number of columns in a single row. This is an advanced option with customization ease to manage the look of this block on the page with different advanced shape dividers and many more.', 'blocks-bakery'),
  // common, formatting, layout, widgets, embed
  category: 'blocks_bakery',
  icon: _icons_advace_column_child__WEBPACK_IMPORTED_MODULE_1__["default"].advace_child_icon,
  parent: ['blocksbakery/advanced-columns'],
  keywords: [__('advance', 'blocks-bakery'), __('columns', 'blocks-bakery')],
  supports: {
    html: false
  },
  attributes: {
    // layout
    width_child_content: {
      type: "number"
    },
    // Spacing
    top_padding_child: {
      type: 'number'
    },
    gradient_bg: {
      type: 'string'
    },
    bottom_padding_child: {
      type: 'number'
    },
    left_padding_child: {
      type: 'number',
      default: 20
    },
    right_padding_child: {
      type: 'number',
      default: 20
    },
    bg_color_child: {
      type: "string"
    },
    top_margin_child: {
      type: 'number',
      default: 30
    },
    bottom_margin_child: {
      type: 'number',
      default: 30
    },
    left_margin_child: {
      type: 'number',
      default: 30
    },
    bg_color_opacity_child: {
      type: "number",
      default: 1
    },
    right_margin_child: {
      type: 'number',
      default: 30
    },
    // Background Setting
    background_setting: {
      type: 'string',
      source: 'text',
      default: 'None'
    },
    color_opacity: {
      type: 'number',
      default: 100
    },
    bg_color: {
      type: 'string'
    },
    select_gg: {
      type: 'string',
      default: 'none'
    },
    gradient_selector_child: {
      type: "string",
      default: "linear-gradient"
    },
    color1_child: {
      type: 'string'
    },
    color2_child: {
      type: 'string'
    },
    location1_child: {
      type: "number",
      default: 40
    },
    location2_child: {
      type: "number",
      default: 70
    },
    angle_child: {
      type: "number",
      default: 180
    },
    color_gradient_opacity: {
      type: 'number',
      default: 100
    },
    img_ID_child: {
      type: 'number'
    },
    img_URL_child: {
      type: 'string',
      default: undefined
    },
    img_alt_child: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img'
    },
    imgbgposition_child: {
      type: "string",
      default: "center"
    },
    bgimgattachment_child: {
      type: "string",
      default: "fixed"
    },
    bgimgrepeat_child: {
      type: "string",
      default: "no-repeat"
    },
    bgimgsize_child: {
      type: "string",
      default: "cover"
    },
    // border
    select_border_child: {
      type: 'html',
      default: 'dotted'
    },
    border_radius_child: {
      type: 'number',
      default: 10
    },
    border_width_child: {
      type: 'number',
      default: 1
    },
    border_color_child: {
      type: 'string'
    },
    save_background_child: {
      type: 'string',
      default: "linear-gradient"
    },
    bg_selctor_type_img_child: {
      type: "string"
    },
    bg_selctor_type_child: {
      type: "string"
    },
    opacity_value: {
      type: 'string',
      default: 'FF'
    },
    pd_pxper: {
      type: "string",
      default: 'px'
    },
    mar_pxper: {
      type: "string",
      default: 'px'
    }
  },
  edit: function edit(props) {
    var select_img_child = function select_img_child(img) {
      props.setAttributes({
        img_ID_child: img.id,
        img_URL_child: img.url,
        img_alt_child: img.alt
      });
    };

    var remove_img_child = function remove_img_child() {
      props.setAttributes({
        img_ID_child: null,
        img_URL_child: 'undefined',
        img_alt_child: null
      });
    };

    var hexConverter = function hexConverter(val) {
      val = Math.round(val * 100) / 100;
      var alpha = Math.round(val * 255);
      var hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
      props.setAttributes({
        opacity_value: hex
      });
    };

    var p_px = function p_px() {
      var x = document.getElementById("p_px");
      var y = document.getElementById("p_per");
      x.style.textDecoration = "underline";
      y.style.textDecoration = "none";
      props.setAttributes({
        pd_pxper: "px"
      });
    };

    var p_per = function p_per() {
      var x = document.getElementById("p_px");
      var y = document.getElementById("p_per");
      x.style.textDecoration = "none";
      y.style.textDecoration = "underline";
      props.setAttributes({
        pd_pxper: "%"
      });
    };

    var m_px = function m_px() {
      var x = document.getElementById("m_px");
      var y = document.getElementById("m_per");
      x.style.textDecoration = "underline";
      y.style.textDecoration = "none";
      props.setAttributes({
        mar_pxper: "px"
      });
    };

    var m_per = function m_per() {
      var x = document.getElementById("m_px");
      var y = document.getElementById("m_per");
      x.style.textDecoration = "none";
      y.style.textDecoration = "underline";
      props.setAttributes({
        mar_pxper: "%"
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(React.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Layout', 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Content Width (%)', 'blocks-bakery'),
      min: 0,
      max: 100,
      initialPosition: 100,
      value: props.attributes.width_child_content,
      onChange: function onChange(new_val) {
        props.setAttributes({
          width_child_content: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Spacing', 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        marginRight: 82
      }
    }, "Padding"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "desktop",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "tablet",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "phone",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: p_px,
      id: "p_px",
      style: {
        fontSize: 12,
        marginTop: "9px",
        paddingLeft: 5,
        paddingRight: 5
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "px")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: p_per,
      id: "p_per",
      style: {
        fontSize: 10,
        marginTop: "10px",
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "%")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
      })),
      min: 0,
      max: 2000,
      initialPosition: 20,
      value: props.attributes.top_padding_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          top_padding_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          top_padding_child: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.bottom_padding_child,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bottom_padding_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          bottom_padding_child: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.left_padding_child,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          left_padding_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          left_padding_child: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.right_padding_child,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          right_padding_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          right_padding_child: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        marginRight: 82
      }
    }, "Margin"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "desktop",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "tablet",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "phone",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: m_px,
      id: "m_px",
      style: {
        fontSize: 12,
        marginTop: "9px",
        paddingLeft: 5,
        paddingRight: 5
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "px")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: m_per,
      id: "m_per",
      style: {
        fontSize: 10,
        marginTop: "10px",
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "%")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
      })),
      min: -2000,
      max: 2000,
      initialPosition: 0,
      value: props.attributes.top_margin_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          top_margin_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          top_margin_child: 30
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
      })),
      min: -2000,
      max: 2000,
      value: props.attributes.bottom_margin_child,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bottom_margin_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          bottom_margin_child: 30
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
      })),
      min: -2000,
      max: 2000,
      value: props.attributes.left_margin_child,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          left_margin_child: new_val
        });
      }
    }), "                            "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          left_margin_child: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
      })),
      min: -2000,
      max: 2000,
      value: props.attributes.right_margin_child,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          right_margin_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          right_margin_child: 30
        });
      }
    }, " Reset"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Background', 'block-for-editors'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Background Color", 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, __('Background Color', 'blocks-bakery'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.bg_color_child
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"],
      value: props.attributes.bg_color_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bg_color_child: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: '#007cba',
        position: "relative",
        top: "-28px",
        left: "174px",
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "24%",
        height: "30px",
        color: "#ffffff"
      },
      onClick: function onClick() {
        var x = document.querySelector(".child_overlay");
        x.style.backgroundColor = "transparent";
        props.setAttributes({
          bg_color_child: 'transparent'
        });
      }
    }, " Reset"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Opacity', 'blocks-bakery'),
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Gradient Color", 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(__experimentalGradientPicker, {
      value: props.attributes.gradient_bg,
      onChange: function onChange(new_val) {
        props.setAttributes({
          gradient_bg: new_val
        }); // props.setAttributes({bg_color:null})  
        // props.setAttributes({
        //     img_ID: null,
        //     img_URL: null,
        //     img_alt: null
        // })
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Image or video", 'blocks-bakery'),
      initialOpen: false
    }, props.attributes.img_ID_child ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-ctr"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: props.attributes.img_URL_child,
      alt: props.attributes.img_alt_child
    }), props.isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "btn-remove",
      onClick: remove_img_child
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "no",
      size: "20"
    })) : null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      allowedType: ['image'],
      value: props.attributes.img_ID_child,
      onSelect: select_img_child,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "button button-large",
          onClick: open
        }, __('Upload Image/Video', 'blocks-bakery'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Image Position",
      options: [{
        label: 'Top Left',
        value: 'top left'
      }, {
        label: 'Top Center',
        value: 'top center'
      }, {
        label: 'Top Right',
        value: 'top right'
      }, {
        label: 'Center Left',
        value: 'center left'
      }, {
        label: 'Center Center',
        value: 'center'
      }, {
        label: 'Center Right',
        value: 'center right'
      }, {
        label: 'Bottom Left',
        value: 'bottom left'
      }, {
        label: 'Bottom Center',
        value: 'bottom center'
      }, {
        label: 'Bottom Right',
        value: 'bottom right'
      }],
      value: props.attributes.imgbgposition_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          imgbgposition_child: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Attachment",
      options: [{
        label: 'Fixed',
        value: 'fixed'
      }, {
        label: 'Scroll',
        value: 'scroll'
      }],
      value: props.attributes.bgimgattachment_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bgimgattachment_child: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Repeat",
      options: [{
        label: 'No Repeat',
        value: 'no-repeat'
      }, {
        label: 'Repeat',
        value: 'repeat'
      }, {
        label: 'Repeat-X',
        value: 'repeat-x'
      }, {
        label: 'Repeat-Y',
        value: 'repeat-y'
      }],
      value: props.attributes.bgimgrepeat_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bgimgrepeat_child: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Size",
      options: [{
        label: 'Auto',
        value: 'auto'
      }, {
        label: 'Cover',
        value: 'cover'
      }, {
        label: 'Contain',
        value: 'contain'
      }],
      value: props.attributes.bgimgsize_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bgimgsize_child: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Opacity', 'blocks-bakery'),
      min: 0,
      max: 1,
      value: props.attributes.bg_color_opacity_child,
      step: 0.1,
      initialPosition: 1,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bg_color_opacity_child: new_val
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Border', 'block-for-editors'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Border Style', 'blocks-bakery'),
      value: props.attributes.select_border_child,
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'solid',
        label: 'Solid'
      }, {
        value: 'dottod',
        label: 'Dotted'
      }, {
        value: 'dashed',
        label: 'Dashed'
      }, {
        value: 'double',
        label: 'Double'
      }, {
        value: 'groobe',
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
          select_border_child: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Border Width', 'blocks-bakery'),
      min: 0,
      max: 50,
      value: props.attributes.border_width_child,
      initialPosition: 1,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_width_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        marginTop: 12,
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          border_width_child: 1
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Border Radius', 'blocks-bakery'),
      min: 0,
      max: 1000,
      value: props.attributes.border_radius_child,
      initialPosition: 447,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_radius_child: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        marginTop: 12,
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          border_radius_child: 10
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Border Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.border_color_child
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"],
      value: props.attributes.border_color_child,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_color_child: new_val
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gb-ad-col-child",
      id: "main_child",
      style: {
        borderStyle: props.attributes.select_border_child,
        borderWidth: props.attributes.border_width_child,
        borderRadius: props.attributes.border_radius_child,
        borderColor: props.attributes.border_color_child,
        width: props.attributes.width_child_content + '%',
        minWidth: '20%',
        marginBottom: props.attributes.bottom_margin_child + props.attributes.mar_pxper,
        marginLeft: props.attributes.left_margin_child + props.attributes.mar_pxper,
        marginRight: props.attributes.right_margin_child + props.attributes.mar_pxper,
        marginTop: props.attributes.top_margin_child + props.attributes.mar_pxper,
        backgroundImage: "url(".concat(props.attributes.img_URL_child, ")"),
        backgroundSize: props.attributes.bgimgsize_child,
        backgroundPosition: props.attributes.imgbgposition_child,
        backgroundRepeat: props.attributes.bgimgrepeat_child,
        backgroundAttachment: props.attributes.bgimgattachment_child
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "child_overlay",
      style: {
        display: 'flex',
        borderRadius: props.attributes.border_radius_child,
        background: props.attributes.gradient_bg,
        backgroundColor: props.attributes.bg_color_child + props.attributes.opacity_value,
        paddingTop: props.attributes.top_padding_child + props.attributes.pd_pxper,
        paddingBottom: props.attributes.bottom_padding_child + props.attributes.pd_pxper,
        paddingLeft: props.attributes.left_padding_child + props.attributes.pd_pxper,
        paddingRight: props.attributes.right_padding_child + props.attributes.pd_pxper
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      className: "gb-ad-col-child-inner-block",
      allowedBlocks: ALLOWED_BLOCKS,
      template: [['core/columns']]
    }))));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gb-ad-col-child",
      style: {
        borderStyle: props.attributes.select_border_child,
        borderWidth: props.attributes.border_width_child,
        borderRadius: props.attributes.border_radius_child,
        borderColor: props.attributes.border_color_child,
        width: props.attributes.width_child_content + '%',
        minWidth: '20%',
        marginBottom: props.attributes.bottom_margin_child + props.attributes.mar_pxper,
        marginLeft: props.attributes.left_margin_child + props.attributes.mar_pxper,
        marginRight: props.attributes.right_margin_child + props.attributes.mar_pxper,
        marginTop: props.attributes.top_margin_child + props.attributes.mar_pxper,
        backgroundImage: "url(".concat(props.attributes.img_URL_child, ")"),
        backgroundSize: props.attributes.bgimgsize_child,
        backgroundPosition: props.attributes.imgbgposition_child,
        backgroundRepeat: props.attributes.bgimgrepeat_child,
        backgroundAttachment: props.attributes.bgimgattachment_child,
        opacity: props.attributes.bg_color_opacity_child
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "child_overlay",
      style: {
        display: 'flex',
        borderRadius: props.attributes.border_radius_child,
        background: props.attributes.gradient_bg,
        sbackgroundColor: props.attributes.bg_color_child + props.attributes.opacity_value,
        paddingTop: props.attributes.top_padding_child + props.attributes.pd_pxper,
        paddingBottom: props.attributes.bottom_padding_child + props.attributes.pd_pxper,
        paddingLeft: props.attributes.left_padding_child + props.attributes.pd_pxper,
        paddingRight: props.attributes.right_padding_child + props.attributes.pd_pxper
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, {
      className: "gb-ad-col-child-inner-block"
    }))));
  }
});

/***/ }),

/***/ "./blocks/advanced-columns/parent.js":
/*!*******************************************!*\
  !*** ./blocks/advanced-columns/parent.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_advance_columns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/advance_columns */ "./blocks/icons/advance_columns.js");
/* harmony import */ var _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gb-helper/color_palette */ "./blocks/gb-helper/color_palette.js");



var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Dashicon = _wp$components.Dashicon,
    RangeControl = _wp$components.RangeControl,
    TabPanel = _wp$components.TabPanel,
    ColorIndicator = _wp$components.ColorIndicator,
    ColorPalette = _wp$components.ColorPalette,
    Button = _wp$components.Button,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker;
registerBlockType('blocksbakery/advanced-columns', {
  title: __('Advanced Columns', 'blocks-bakery'),
  description: __('The advanced column block allows to insert many number of columns in a single row. This is an advanced option with customization ease to manage the look of this block on the page with different advanced shape dividers and many more.', 'blocks-bakery'),
  // common, formatting, layout, widgets, embed
  category: 'blocks_bakery',
  icon: _icons_advance_columns__WEBPACK_IMPORTED_MODULE_1__["default"].advace_icon,
  keywords: [__('advaced', 'blocks-bakery'), __('columns', 'blocks-bakery')],
  supports: {
    html: false
  },
  attributes: {
    // border
    select_border: {
      type: 'string',
      default: 'dotted'
    },
    border_radius: {
      type: 'number',
      default: 1
    },
    border_width: {
      type: 'number',
      default: 1
    },
    border_color: {
      type: 'string'
    },
    shadow_color: {
      type: 'string'
    },
    hori_shadow: {
      type: 'number',
      default: 0
    },
    vertical_shadow: {
      type: 'number',
      default: 0
    },
    blur_shadow: {
      type: 'number',
      default: 0
    },
    spread_shadow: {
      type: 'number',
      default: 0
    },
    shadow_selector: {
      type: 'text',
      default: ''
    },
    opacity_value: {
      type: 'string',
      default: 'FF'
    },
    // shape dividers
    select_divider_top: {
      type: 'string',
      default: 'none'
    },
    select_divider_bottom: {
      type: 'string',
      default: 'none'
    },
    divider_color_top: {
      type: 'string'
    },
    divider_opacity_top: {
      type: 'number',
      default: 1
    },
    divider_width_top: {
      type: 'number',
      default: 100
    },
    divider_height_top: {
      type: 'number'
    },
    divider_color_bottom: {
      type: 'string'
    },
    divider_opacity_bottom: {
      type: 'number',
      default: 1
    },
    divider_width_bottom: {
      type: 'number',
      default: 100
    },
    divider_height_bottom: {
      type: 'number'
    },
    select_type_bk_ft: {
      type: 'string',
      default: '-1'
    },
    shape_divider_position: {
      type: 'string',
      default: 'top'
    },
    // Background Setting
    background_setting: {
      type: 'string',
      source: 'text',
      default: 'None'
    },
    bg_color_opacity: {
      type: 'number',
      default: 1
    },
    bg_color: {
      type: 'string'
    },
    gradient_selector: {
      type: "string",
      default: "linear-gradient"
    },
    color1: {
      type: 'string'
    },
    color2: {
      type: 'string'
    },
    location1: {
      type: "number",
      default: 40
    },
    location2: {
      type: "number",
      default: 70
    },
    angle: {
      type: "number",
      default: 180
    },
    img_ID: {
      type: 'number'
    },
    img_URL: {
      type: 'string',
      default: undefined
    },
    img_alt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img'
    },
    imgbgposition: {
      type: "string"
    },
    bgimgattachment: {
      type: "string"
    },
    bgimgrepeat: {
      type: "string"
    },
    bgimgsize: {
      type: "string"
    },
    // Spacing
    top_padding: {
      type: 'number',
      default: 20
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
    top_margin: {
      type: 'number',
      default: 70
    },
    bottom_margin: {
      type: 'number',
      default: 70
    },
    left_margin: {
      type: 'number',
      default: 0
    },
    right_margin: {
      type: 'number',
      default: 0
    },
    // layout
    width_content: {
      type: 'number'
    },
    heading_tag: {
      type: 'string',
      default: 'section'
    },
    save_background: {
      type: 'string',
      default: "linear-gradient"
    },
    bg_selctor_type_img: {
      type: "string"
    },
    text_alignment: {
      type: 'string'
    },
    block_alignment: {
      type: 'string'
    },
    m_pxper: {
      type: "string",
      default: 'px'
    },
    p_pex: {
      type: "string",
      default: 'px'
    },
    gradient_bg: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var p_px = function p_px() {
      var x = document.getElementById("p_px");
      var y = document.getElementById("p_per");
      x.style.textDecoration = "underline";
      y.style.textDecoration = "none";
      props.setAttributes({
        m_pxper: "px"
      });
    };

    var select_divider = function select_divider(val) {
      var top_divider = document.getElementsByClassName('top_divider')[0];
      var bottom_divider = document.getElementsByClassName('bottom_divider')[0];

      if (val === "top") {
        top_divider.style.display = "block";
        bottom_divider.style.display = "none";
      } else {
        top_divider.style.display = "none";
        bottom_divider.style.display = "block";
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

    var p_per = function p_per() {
      var x = document.getElementById("p_px");
      var y = document.getElementById("p_per");
      x.style.textDecoration = "none";
      y.style.textDecoration = "underline";
      props.setAttributes({
        m_pxper: "%"
      });
    };

    var m_px = function m_px() {
      var x = document.getElementById("m_px");
      var y = document.getElementById("m_per");
      x.style.textDecoration = "underline";
      y.style.textDecoration = "none";
      props.setAttributes({
        p_pex: "px"
      });
    };

    var m_per = function m_per() {
      var x = document.getElementById("m_px");
      var y = document.getElementById("m_per");
      x.style.textDecoration = "none";
      y.style.textDecoration = "underline";
      props.setAttributes({
        p_pex: "%"
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

    var select_img = function select_img(img) {
      props.setAttributes({
        img_ID: img.id,
        img_URL: img.url,
        img_alt: img.alt
      });
    };

    var remove_img = function remove_img() {
      props.setAttributes({
        img_ID: null,
        img_alt: null,
        img_URL: 'undefined'
      });
    };

    var Divtag = props.attributes.heading_tag;

    var boxShadowReset = function boxShadowReset() {
      props.setAttributes({
        hori_shadow: '0',
        vertical_shadow: '0',
        blur_shadow: '0',
        spread_shadow: '0',
        shadow_color: '',
        shadow_selector: ''
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(React.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Layout', 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Content Width', 'blocks-bakery'),
      min: 0,
      max: 1000,
      initialPosition: 610,
      value: props.attributes.width_content,
      onChange: function onChange(new_val) {
        props.setAttributes({
          width_content: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Spacing', 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        marginRight: 82
      }
    }, "Padding"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "desktop",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "tablet",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "phone",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: p_px,
      id: "p_px",
      style: {
        fontSize: 12,
        marginTop: "9px",
        paddingLeft: 5,
        paddingRight: 5
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "px")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: p_per,
      id: "p_per",
      style: {
        fontSize: 10,
        marginTop: "10px",
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "%")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
      })),
      min: 0,
      max: 2000,
      initialPosition: 20,
      value: props.attributes.top_padding,
      onChange: function onChange(new_val) {
        props.setAttributes({
          top_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          top_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.bottom_padding,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bottom_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          bottom_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.left_padding,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          left_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          left_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
      })),
      min: 0,
      max: 2000,
      value: props.attributes.right_padding,
      initialPosition: 20,
      onChange: function onChange(new_val) {
        props.setAttributes({
          right_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          right_padding: 20
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      style: {
        marginRight: 82
      }
    }, "Margin"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "desktop",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "tablet",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        padding: 1,
        marginRight: 4,
        boxShadow: 0,
        height: 14,
        backgroundColor: "#e4e5e5",
        color: "#23282d"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "phone",
      style: {
        fontSize: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: m_px,
      id: "m_px",
      style: {
        fontSize: 12,
        marginTop: "9px",
        paddingLeft: 5,
        paddingRight: 5
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "px")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: m_per,
      id: "m_per",
      style: {
        fontSize: 10,
        marginTop: "10px",
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        height: 30
      }
    }, "%")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M17 0.984h-14c-1.103 0-2 0.897-2 2v0.797h18v-0.797c0-1.103-0.897-2-2-2z"
      })),
      min: -2000,
      max: 2000,
      initialPosition: 70,
      value: props.attributes.top_margin,
      onChange: function onChange(new_val) {
        props.setAttributes({
          top_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          top_margin: 70
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 1c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17 0h-14c-1.657 0-3 1.343-3 3v14c0 1.656 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M3 19.016h14c1.103 0 2-0.896 2-2v-0.797h-18v0.797c0 1.103 0.897 2 2 2z"
      })),
      min: -2000,
      max: 2000,
      value: props.attributes.bottom_margin,
      initialPosition: 70,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bottom_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          bottom_margin: 70
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.656 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.657 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M0.984 2.999v14c0 1.103 0.896 2 2 2h0.797v-18h-0.797c-1.104 0-2 0.897-2 2z"
      })),
      min: -2000,
      max: 2000,
      value: props.attributes.left_margin,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          left_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          left_margin: 70
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      beforeIcon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
        width: "20",
        height: "20"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#999",
        d: "M17 0.999c1.103 0 2 0.897 2 2v14c0 1.103-0.897 2-2 2h-14c-1.103 0-2-0.897-2-2v-14c0-1.103 0.897-2 2-2h14zM17-0.001h-14c-1.657 0-3 1.343-3 3v14c0 1.657 1.343 3 3 3h14c1.656 0 3-1.343 3-3v-14c0-1.657-1.343-3-3-3v0z"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
        fill: "#575E67",
        d: "M19.015 16.999v-14c0-1.103-0.896-2-2-2h-0.797v18h0.797c1.104 0 2-0.896 2-2z"
      })),
      min: -2000,
      max: 2000,
      value: props.attributes.right_margin,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          right_margin: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          right_margin: 70
        });
      }
    }, " Reset"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Background', 'block-for-editors'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Background Color", 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, __('Background Color1', 'blocks-bakery'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.bg_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"],
      value: props.attributes.bg_color,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bg_color: new_val
        });
        props.setAttributes({
          gradient_bg: props.attributes.bg_color
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Opacity', 'blocks-bakery'),
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Gradient Color", 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(__experimentalGradientPicker, {
      value: props.attributes.gradient_bg,
      onChange: function onChange(new_val) {
        props.setAttributes({
          gradient_bg: new_val
        });
        props.setAttributes({
          bg_color: 'transparent'
        }); // props.setAttributes({
        //     img_ID: null,
        //     img_URL: null,
        //     img_alt: null
        // })
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Image or video", 'blocks-bakery'),
      initialOpen: false
    }, props.attributes.img_ID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-ctr"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: props.attributes.img_URL,
      alt: props.attributes.img_alt
    }), props.isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "btn-remove",
      onClick: remove_img
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "no",
      size: "20"
    })) : null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUploadCheck, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      allowedType: ['image'],
      value: props.attributes.img_ID,
      onSelect: select_img,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
          className: "button button-large",
          onClick: open
        }, __('Upload Image/Video', 'blocks-bakery'));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Image Position",
      options: [{
        label: 'Top Left',
        value: 'top left'
      }, {
        label: 'Top Center',
        value: 'top center'
      }, {
        label: 'Top Right',
        value: 'top right'
      }, {
        label: 'Center Left',
        value: 'center left'
      }, {
        label: 'Center Center',
        value: 'center'
      }, {
        label: 'Center Right',
        value: 'center right'
      }, {
        label: 'Bottom Left',
        value: 'bottom left'
      }, {
        label: 'Bottom Center',
        value: 'bottom center'
      }, {
        label: 'Bottom Right',
        value: 'bottom right'
      }],
      value: props.attributes.imgbgposition,
      onChange: function onChange(new_val) {
        props.setAttributes({
          imgbgposition: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Attachment",
      options: [{
        label: 'Fixed',
        value: 'fixed'
      }, {
        label: 'Scroll',
        value: 'scroll'
      }],
      value: props.attributes.bgimgattachment,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bgimgattachment: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Repeat",
      options: [{
        label: 'No Repeat',
        value: 'no-repeat'
      }, {
        label: 'Repeat',
        value: 'repeat'
      }, {
        label: 'Repeat-X',
        value: 'repeat-x'
      }, {
        label: 'Repeat-Y',
        value: 'repeat-y'
      }],
      value: props.attributes.bgimgrepeat,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bgimgrepeat: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Size",
      options: [{
        label: 'Auto',
        value: 'auto'
      }, {
        label: 'Cover',
        value: 'cover'
      }, {
        label: 'Contain',
        value: 'contain'
      }],
      value: props.attributes.bgimgsize,
      onChange: function onChange(new_val) {
        props.setAttributes({
          bgimgsize: new_val
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Shape dividers', 'block-for-editors'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Shape Divider Position",
      options: [{
        label: 'To Top',
        value: 'top'
      }, {
        label: 'To Bottom',
        value: 'bottom'
      }],
      value: props.attributes.shape_divider_position,
      onChange: function onChange(new_val) {
        props.setAttributes({
          shape_divider_position: new_val
        });
        select_divider(new_val);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "top_divider",
      style: {
        padding: '10px',
        borderRadius: "5px",
        border: "1px solid gray"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        textAlign: 'center',
        margin: '0px'
      }
    }, "Top Shape Divider"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Type', 'blocks-bakery'),
      options: [{
        label: 'none',
        value: 'none'
      }, {
        label: 'Polygon',
        value: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+'
      }, {
        label: 'Waves Opacity 1',
        value: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI2NXB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0LjMtNjQwLTg0LjNDNTkuNC41OSAyOC4yIDEuNiAwIDMuNFYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAyNC4zMWM0My40Ni01LjY5IDk0LjU2LTkuMjUgMTU4LjQyLTkuMjUgMzIwIDAgMzIwIDg5LjI0IDY0MCA4OS4yNCAyNTYuMTMgMCAzMDcuMjgtNTcuMTYgNDgxLjU4LTgwVjE0MEgweiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMjgwIDUxLjc2Yy0yMDEgMTIuNDktMjQyLjQzIDUzLjQtNTEzLjU4IDUzLjQtMzIwIDAtMzIwLTU3LTY0MC01Ny00OC44NS4wMS05MC4yMSAxLjM1LTEyNi40MiAzLjZWMTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg=="
      }, {
        label: 'Waves',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNOTg1LjY2LDkyLjgzQzkwNi42Nyw3Miw4MjMuNzgsMzEsNzQzLjg0LDE0LjE5Yy04Mi4yNi0xNy4zNC0xNjguMDYtMTYuMzMtMjUwLjQ1LjM5LTU3Ljg0LDExLjczLTExNCwzMS4wNy0xNzIsNDEuODZBNjAwLjIxLDYwMC4yMSwwLDAsMSwwLDI3LjM1VjEyMEgxMjAwVjk1LjhDMTEzMi4xOSwxMTguOTIsMTA1NS43MSwxMTEuMzEsOTg1LjY2LDkyLjgzWiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="
      }, {
        label: 'Curve',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjAwLDExMi43N0MyNjguNjMsMTEyLjc3LDAsNjUuNTIsMCw3LjIzVjEyMEgxMjAwVjcuMjNDMTIwMCw2NS41Miw5MzEuMzcsMTEyLjc3LDYwMCwxMTIuNzdaIiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Waves opacity 2',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNMCwwVjQ2LjI5YzQ3Ljc5LDIyLjIsMTAzLjU5LDMyLjE3LDE1OCwyOCw3MC4zNi01LjM3LDEzNi4zMy0zMy4zMSwyMDYuOC0zNy41QzQzOC42NCwzMi40Myw1MTIuMzQsNTMuNjcsNTgzLDcyLjA1YzY5LjI3LDE4LDEzOC4zLDI0Ljg4LDIwOS40LDEzLjA4LDM2LjE1LTYsNjkuODUtMTcuODQsMTA0LjQ1LTI5LjM0Qzk4OS40OSwyNSwxMTEzLTE0LjI5LDEyMDAsNTIuNDdWMFoiIG9wYWNpdHk9Ii4yNSIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoICBkPSJNMCwwVjE1LjgxQzEzLDM2LjkyLDI3LjY0LDU2Ljg2LDQ3LjY5LDcyLjA1LDk5LjQxLDExMS4yNywxNjUsMTExLDIyNC41OCw5MS41OGMzMS4xNS0xMC4xNSw2MC4wOS0yNi4wNyw4OS42Ny0zOS44LDQwLjkyLTE5LDg0LjczLTQ2LDEzMC44My00OS42NywzNi4yNi0yLjg1LDcwLjksOS40Miw5OC42LDMxLjU2LDMxLjc3LDI1LjM5LDYyLjMyLDYyLDEwMy42Myw3Myw0MC40NCwxMC43OSw4MS4zNS02LjY5LDExOS4xMy0yNC4yOHM3NS4xNi0zOSwxMTYuOTItNDMuMDVjNTkuNzMtNS44NSwxMTMuMjgsMjIuODgsMTY4LjksMzguODQsMzAuMiw4LjY2LDU5LDYuMTcsODcuMDktNy41LDIyLjQzLTEwLjg5LDQ4LTI2LjkzLDYwLjY1LTQ5LjI0VjBaIiBvcGFjaXR5PSIuNSIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoICBkPSJNMCwwVjUuNjNDMTQ5LjkzLDU5LDMxNC4wOSw3MS4zMiw0NzUuODMsNDIuNTdjNDMtNy42NCw4NC4yMy0yMC4xMiwxMjcuNjEtMjYuNDYsNTktOC42MywxMTIuNDgsMTIuMjQsMTY1LjU2LDM1LjRDODI3LjkzLDc3LjIyLDg4Niw5NS4yNCw5NTEuMiw5MGM4Ni41My03LDE3Mi40Ni00NS43MSwyNDguOC04NC44MVYwWiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="
      }, {
        label: 'Curve asymmetric',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNzQxLDExNi4yM0MyOTEsMTE3LjQzLDAsMjcuNTcsMCw2VjEyMEgxMjAwVjZDMTIwMCwyNy45MywxMTg2LjQsMTE5LjgzLDc0MSwxMTYuMjNaIiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Triangle',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNTk4Ljk3IDExNC43MkwwIDAgMCAxMjAgMTIwMCAxMjAgMTIwMCAwIDU5OC45NyAxMTQuNzJ6IiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Triangle asymmetric',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNODkyLjI1IDExNC43MkwwIDAgMCAxMjAgMTIwMCAxMjAgMTIwMCAwIDg5Mi4yNSAxMTQuNzJ6IiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Tilt',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNMTIwMCAxMjBMMCAxNi40OCAwIDAgMTIwMCAwIDEyMDAgMTIweiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="
      }, {
        label: 'Arrow',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjQ5Ljk3IDBMNTk5LjkxIDU0LjEyIDU1MC4wMyAwIDAgMCAwIDEyMCAxMjAwIDEyMCAxMjAwIDAgNjQ5Ljk3IDB6IiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Split',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjAwLDE2LjhjMC04LjExLTguODgtMTMuMi0xOS45Mi0xMy4ySDBWMTIwSDEyMDBWMy42SDYxOS45MkM2MDguODgsMy42LDYwMCw4LjY2LDYwMCwxNi44WiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="
      }, {
        label: 'Book',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjAyLjQ1LDMuODZoMFM1NzIuOSwxMTYuMjQsMjgxLjk0LDEyMEg5MjNDNjMyLDExNi4yNCw2MDIuNDUsMy44Niw2MDIuNDUsMy44NloiIGNsYXNzPSJzaGFwZS1maWxsIiBmaWxsPSIjRkRGQUZBIiBmaWxsLW9wYWNpdHk9IjEiPjwvcGF0aD48L3N2Zz4="
      }],
      value: props.attributes.select_divider_top,
      onChange: function onChange(new_val) {
        props.setAttributes({
          select_divider_top: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.divider_color_top
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: props.attributes.divider_color_top,
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"],
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_color_top: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Opacity",
      initialPosition: 1,
      min: 0,
      max: 1,
      step: 0.1,
      value: props.attributes.divider_opacity_top,
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_opacity_top: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        marginTop: 12,
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          divider_opacity_top: 1
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Width",
      initialPosition: 100,
      min: 0,
      max: 100,
      value: props.attributes.divider_width_top,
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_width_top: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Height",
      initialPosition: 100,
      min: 0,
      max: 500,
      value: props.attributes.divider_height_top,
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_height_top: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bottom_divider",
      style: {
        display: "none",
        padding: '10px',
        borderRadius: "5px",
        border: "1px solid gray"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        textAlign: 'center',
        margin: '0px'
      }
    }, "Bottom Shape Divider"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __('Type', 'blocks-bakery'),
      options: [{
        label: 'none',
        value: 'none'
      }, {
        label: 'Polygon',
        value: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+'
      }, {
        label: 'Waves Opacity 1',
        value: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI2NXB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0LjMtNjQwLTg0LjNDNTkuNC41OSAyOC4yIDEuNiAwIDMuNFYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAyNC4zMWM0My40Ni01LjY5IDk0LjU2LTkuMjUgMTU4LjQyLTkuMjUgMzIwIDAgMzIwIDg5LjI0IDY0MCA4OS4yNCAyNTYuMTMgMCAzMDcuMjgtNTcuMTYgNDgxLjU4LTgwVjE0MEgweiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMjgwIDUxLjc2Yy0yMDEgMTIuNDktMjQyLjQzIDUzLjQtNTEzLjU4IDUzLjQtMzIwIDAtMzIwLTU3LTY0MC01Ny00OC44NS4wMS05MC4yMSAxLjM1LTEyNi40MiAzLjZWMTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg=="
      }, {
        label: 'Waves',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNMzIxLjM5LDU2LjQ0YzU4LTEwLjc5LDExNC4xNi0zMC4xMywxNzItNDEuODYsODIuMzktMTYuNzIsMTY4LjE5LTE3LjczLDI1MC40NS0uMzlDODIzLjc4LDMxLDkwNi42Nyw3Miw5ODUuNjYsOTIuODNjNzAuMDUsMTguNDgsMTQ2LjUzLDI2LjA5LDIxNC4zNCwzVjBIMFYyNy4zNUE2MDAuMjEsNjAwLjIxLDAsMCwwLDMyMS4zOSw1Ni40NFoiIGNsYXNzPSJzaGFwZS1maWxsIiBmaWxsPSIjRkRGQUZBIiBmaWxsLW9wYWNpdHk9IjEiPjwvcGF0aD48L3N2Zz4="
      }, {
        label: 'Curve',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjAwLDExMi43N0MyNjguNjMsMTEyLjc3LDAsNjUuNTIsMCw3LjIzVjEyMEgxMjAwVjcuMjNDMTIwMCw2NS41Miw5MzEuMzcsMTEyLjc3LDYwMCwxMTIuNzdaIiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Waves opacity 2',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNMCwwVjQ2LjI5YzQ3Ljc5LDIyLjIsMTAzLjU5LDMyLjE3LDE1OCwyOCw3MC4zNi01LjM3LDEzNi4zMy0zMy4zMSwyMDYuOC0zNy41QzQzOC42NCwzMi40Myw1MTIuMzQsNTMuNjcsNTgzLDcyLjA1YzY5LjI3LDE4LDEzOC4zLDI0Ljg4LDIwOS40LDEzLjA4LDM2LjE1LTYsNjkuODUtMTcuODQsMTA0LjQ1LTI5LjM0Qzk4OS40OSwyNSwxMTEzLTE0LjI5LDEyMDAsNTIuNDdWMFoiIG9wYWNpdHk9Ii4yNSIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoICBkPSJNMCwwVjE1LjgxQzEzLDM2LjkyLDI3LjY0LDU2Ljg2LDQ3LjY5LDcyLjA1LDk5LjQxLDExMS4yNywxNjUsMTExLDIyNC41OCw5MS41OGMzMS4xNS0xMC4xNSw2MC4wOS0yNi4wNyw4OS42Ny0zOS44LDQwLjkyLTE5LDg0LjczLTQ2LDEzMC44My00OS42NywzNi4yNi0yLjg1LDcwLjksOS40Miw5OC42LDMxLjU2LDMxLjc3LDI1LjM5LDYyLjMyLDYyLDEwMy42Myw3Myw0MC40NCwxMC43OSw4MS4zNS02LjY5LDExOS4xMy0yNC4yOHM3NS4xNi0zOSwxMTYuOTItNDMuMDVjNTkuNzMtNS44NSwxMTMuMjgsMjIuODgsMTY4LjksMzguODQsMzAuMiw4LjY2LDU5LDYuMTcsODcuMDktNy41LDIyLjQzLTEwLjg5LDQ4LTI2LjkzLDYwLjY1LTQ5LjI0VjBaIiBvcGFjaXR5PSIuNSIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjxwYXRoICBkPSJNMCwwVjUuNjNDMTQ5LjkzLDU5LDMxNC4wOSw3MS4zMiw0NzUuODMsNDIuNTdjNDMtNy42NCw4NC4yMy0yMC4xMiwxMjcuNjEtMjYuNDYsNTktOC42MywxMTIuNDgsMTIuMjQsMTY1LjU2LDM1LjRDODI3LjkzLDc3LjIyLDg4Niw5NS4yNCw5NTEuMiw5MGM4Ni41My03LDE3Mi40Ni00NS43MSwyNDguOC04NC44MVYwWiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="
      }, {
        label: 'Curve asymmetric',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNzQxLDExNi4yM0MyOTEsMTE3LjQzLDAsMjcuNTcsMCw2VjEyMEgxMjAwVjZDMTIwMCwyNy45MywxMTg2LjQsMTE5LjgzLDc0MSwxMTYuMjNaIiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Triangle',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNTk4Ljk3IDExNC43MkwwIDAgMCAxMjAgMTIwMCAxMjAgMTIwMCAwIDU5OC45NyAxMTQuNzJ6IiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Triangle asymmetric',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNODkyLjI1IDExNC43MkwwIDAgMCAxMjAgMTIwMCAxMjAgMTIwMCAwIDg5Mi4yNSAxMTQuNzJ6IiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Tilt',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNMTIwMCAxMjBMMCAxNi40OCAwIDAgMTIwMCAwIDEyMDAgMTIweiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="
      }, {
        label: 'Arrow',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjQ5Ljk3IDBMNTk5LjkxIDU0LjEyIDU1MC4wMyAwIDAgMCAwIDEyMCAxMjAwIDEyMCAxMjAwIDAgNjQ5Ljk3IDB6IiBjbGFzcz0ic2hhcGUtZmlsbCIgZmlsbD0iI0ZERkFGQSIgZmlsbC1vcGFjaXR5PSIxIj48L3BhdGg+PC9zdmc+"
      }, {
        label: 'Split',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjAwLDE2LjhjMC04LjExLTguODgtMTMuMi0xOS45Mi0xMy4ySDBWMTIwSDEyMDBWMy42SDYxOS45MkM2MDguODgsMy42LDYwMCw4LjY2LDYwMCwxNi44WiIgY2xhc3M9InNoYXBlLWZpbGwiIGZpbGw9IiNGREZBRkEiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvc3ZnPg=="
      }, {
        label: 'Book',
        value: "data:image/svg+xml;base64,PHN2ZyAgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgPjxwYXRoICBkPSJNNjAyLjQ1LDMuODZoMFM1NzIuOSwxMTYuMjQsMjgxLjk0LDEyMEg5MjNDNjMyLDExNi4yNCw2MDIuNDUsMy44Niw2MDIuNDUsMy44NloiIGNsYXNzPSJzaGFwZS1maWxsIiBmaWxsPSIjRkRGQUZBIiBmaWxsLW9wYWNpdHk9IjEiPjwvcGF0aD48L3N2Zz4="
      }],
      value: props.attributes.select_divider_bottom,
      onChange: function onChange(new_val) {
        props.setAttributes({
          select_divider_bottom: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.divider_color_bottom
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: props.attributes.divider_color_bottom,
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"],
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_color_bottom: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Opacity",
      allowReset: true,
      initialPosition: 1,
      min: 0,
      max: 1,
      step: 0.1,
      value: props.attributes.divider_opacity_bottom,
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_opacity_bottom: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Width",
      initialPosition: 100,
      min: 0,
      max: 100,
      value: props.attributes.divider_width_bottom,
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_width_bottom: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Height",
      initialPosition: 100,
      min: 0,
      max: 500,
      value: props.attributes.divider_height_bottom,
      onChange: function onChange(new_val) {
        props.setAttributes({
          divider_height_bottom: new_val
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Border', 'block-for-editors'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Border Width', 'blocks-bakery'),
      min: 0,
      max: 50,
      value: props.attributes.border_width,
      initialPosition: 1,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_width: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        marginTop: 13,
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          border_width: 1
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Border Radius', 'blocks-bakery'),
      min: 0,
      max: 200,
      value: props.attributes.border_radius,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_radius: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        marginTop: 13,
        background: 'transparent',
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "22%",
        height: "30px",
        padding: "6px",
        color: "#007cba"
      },
      onClick: function onClick() {
        props.setAttributes({
          border_radius: 1
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Border Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.border_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"],
      value: props.attributes.border_color,
      onChange: function onChange(new_val) {
        props.setAttributes({
          border_color: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Box Shadow"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: boxShadowReset,
      style: {
        padding: 0
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "image-rotate",
      style: {
        fontSize: 15
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "admin-tools",
      style: {
        fontSize: 15
      },
      onClick: shadow_box
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Card, {
      id: "shadow",
      style: {
        display: 'none'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CardBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.shadow_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"],
      value: props.attributes.shadow_color,
      onChange: function onChange(new_val) {
        props.setAttributes({
          shadow_color: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        background: '#007cba',
        position: "relative",
        top: "-28px",
        left: "151px",
        border: '1px solid #007cba',
        fontSize: '12px',
        width: "27%",
        height: "30px",
        color: "#ffffff"
      },
      onClick: function onClick() {
        var x = document.querySelector(".gb-ad-col-tagChange");
        x.style.backgroundColor = "transparent";
        props.setAttributes({
          shadow_color: 'transparent'
        });
      }
    }, " Reset"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Horizontal', 'blocks-bakery'),
      min: -100,
      max: 100,
      value: props.attributes.hori_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          hori_shadow: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Vertical', 'blocks-bakery'),
      min: -100,
      max: 100,
      value: props.attributes.vertical_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          vertical_shadow: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Blur', 'blocks-bakery'),
      min: 0,
      max: 100,
      value: props.attributes.blur_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          blur_shadow: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: __('Spread', 'blocks-bakery'),
      min: 0,
      max: 100,
      value: props.attributes.spread_shadow,
      initialPosition: 0,
      onChange: function onChange(new_val) {
        props.setAttributes({
          spread_shadow: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
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
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockAlignmentToolbar, {
      value: props.attributes.block_alignment,
      onChange: function onChange(new_val) {
        props.setAttributes({
          block_alignment: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
      value: props.attributes.text_alignment,
      onChange: function onChange(new_val) {
        props.setAttributes({
          text_alignment: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "align".concat(props.attributes.block_alignment, "  gb-ad-col-main")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Divtag, {
      id: "main_div",
      className: "gb-ad-col-tagChange  ",
      style: {
        borderStyle: props.attributes.select_border,
        borderWidth: props.attributes.border_width,
        borderRadius: props.attributes.border_radius,
        borderColor: props.attributes.border_color,
        boxShadow: props.attributes.hori_shadow + 'px' + ' ' + props.attributes.vertical_shadow + 'px' + ' ' + props.attributes.blur_shadow + 'px' + ' ' + props.attributes.spread_shadow + 'px' + ' ' + props.attributes.shadow_color + ' ' + props.attributes.shadow_selector,
        marginTop: props.attributes.top_margin + props.attributes.p_pex,
        overflow: 'auto',
        marginBottom: props.attributes.bottom_margin + props.attributes.p_pex,
        marginLeft: props.attributes.left_margin + props.attributes.p_pex,
        marginRight: props.attributes.right_margin + props.attributes.p_pex,
        width: props.attributes.width_content,
        minWidth: '150px',
        backgroundSize: props.attributes.bgimgsize,
        backgroundPosition: props.attributes.imgbgposition,
        backgroundRepeat: props.attributes.bgimgrepeat,
        backgroundAttachment: props.attributes.bgimgattachment,
        // opacity: props.attributes.bg_color_opacity,
        backgroundImage: 'url(' + props.attributes.img_URL + ')'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "top-divider",
      style: {
        borderRadius: props.attributes.border_radius,
        position: 'relative',
        backgroundColor: props.attributes.divider_color_top,
        backgroundImage: "url(".concat(props.attributes.select_divider_top, ")"),
        width: props.attributes.divider_width_top + '%',
        height: props.attributes.divider_height_top + 'px',
        opacity: props.attributes.divider_opacity_top,
        top: '0',
        left: '0'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay",
      style: {
        paddingTop: props.attributes.top_padding + props.attributes.m_pxper,
        paddingBottom: props.attributes.bottom_padding + props.attributes.m_pxper,
        paddingLeft: props.attributes.left_padding + props.attributes.m_pxper,
        paddingRight: props.attributes.right_padding + props.attributes.m_pxper,
        background: props.attributes.gradient_bg,
        backgroundColor: props.attributes.bg_color + props.attributes.opacity_value
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gb-ad-col-divider-innerBlock"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ['blocksbakery/advanced-column'],
      template: [['blocksbakery/advanced-column']]
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bottom-divider",
      style: {
        position: 'relative',
        backgroundColor: props.attributes.divider_color_bottom,
        backgroundImage: "url(".concat(props.attributes.select_divider_bottom, ")"),
        width: props.attributes.divider_width_bottom + "%",
        height: props.attributes.divider_height_bottom + 'px',
        opacity: props.attributes.divider_opacity_bottom,
        bottom: '0',
        left: '0'
      }
    }))));
  },
  save: function save(props) {
    var Divtag = props.attributes.heading_tag;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "align".concat(props.attributes.block_alignment, "  gb-ad-col-main")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gb-ad-col-main-inner",
      style: {
        textAlign: props.attributes.text_alignment
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Divtag, {
      className: "gb-ad-col-tagChange",
      style: {
        borderStyle: props.attributes.select_border,
        borderWidth: props.attributes.border_width,
        borderRadius: props.attributes.border_radius,
        borderColor: props.attributes.border_color,
        boxShadow: props.attributes.hori_shadow + 'px' + ' ' + props.attributes.vertical_shadow + 'px' + ' ' + props.attributes.blur_shadow + 'px' + ' ' + props.attributes.spread_shadow + 'px' + ' ' + props.attributes.shadow_color + ' ' + props.attributes.shadow_selector,
        marginTop: props.attributes.top_margin + props.attributes.p_pex,
        overflow: "auto",
        marginBottom: props.attributes.bottom_margin + props.attributes.p_pex,
        marginLeft: props.attributes.left_margin + props.attributes.p_pex,
        marginRight: props.attributes.right_margin + props.attributes.p_pex,
        width: props.attributes.width_content,
        minWidth: '150px',
        backgroundImage: "url(".concat(props.attributes.img_URL, ")"),
        backgroundSize: props.attributes.bgimgsize,
        backgroundPosition: props.attributes.imgbgposition,
        backgroundRepeat: props.attributes.bgimgrepeat,
        backgroundAttachment: props.attributes.bgimgattachment // opacity: props.attributes.bg_color_opacity,

      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        position: 'relative',
        backgroundColor: props.attributes.divider_color_top,
        content: '',
        backgroundImage: "url(".concat(props.attributes.select_divider_top, ")"),
        width: props.attributes.divider_width_top + '%',
        height: props.attributes.divider_height_top + 'px',
        opacity: props.attributes.divider_opacity_top,
        top: '0',
        left: '0' // zindex:props.attributes.select_type_bk_ft,

      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "overlay",
      style: {
        paddingTop: props.attributes.top_padding + props.attributes.m_pxper,
        paddingBottom: props.attributes.bottom_padding + props.attributes.m_pxper,
        paddingLeft: props.attributes.left_padding + props.attributes.m_pxper,
        paddingRight: props.attributes.right_padding + props.attributes.m_pxper,
        background: props.attributes.gradient_bg,
        backgroundColor: props.attributes.bg_color + props.attributes.opacity_value
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "gb-ad-col-divider-innerBlock"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        position: 'relative',
        backgroundColor: props.attributes.divider_color_bottom,
        content: '',
        backgroundImage: "url(".concat(props.attributes.select_divider_bottom, ")"),
        width: props.attributes.divider_width_bottom + "%",
        height: props.attributes.divider_height_bottom + 'px',
        opacity: props.attributes.divider_opacity_bottom,
        bottom: '0',
        left: '0'
      }
    }))));
  }
});

/***/ }),

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

/***/ "./blocks/icons/advace_column_child.js":
/*!*********************************************!*\
  !*** ./blocks/icons/advace_column_child.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var block_icons = {
  advace_child_icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    enableBackground: "new 0 0 512 512",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fill: "#cb1d1d"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M0 18v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1H1a1 1 0 00-1 1zM6 0H1a1 1 0 00-1 1v13.5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM15.5 14.5V1a1 1 0 00-1-1h-5a1 1 0 00-1 1v13.5a1 1 0 001 1h5a1 1 0 001-1zM8.5 18v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1h-5a1 1 0 00-1 1zM23 0h-5a1 1 0 00-1 1v13.5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM18 24h5a1 1 0 001-1v-5a1 1 0 00-1-1h-5a1 1 0 00-1 1v5a1 1 0 001 1z",
    "data-original": "#000000"
  })))
};
/* harmony default export */ __webpack_exports__["default"] = (block_icons);

/***/ }),

/***/ "./blocks/icons/advance_columns.js":
/*!*****************************************!*\
  !*** ./blocks/icons/advance_columns.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var block_icons = {
  advace_icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    enableBackground: "new 0 0 512 512",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fill: "#bf1414"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    xmlns: "http://www.w3.org/2000/svg",
    d: "M1 24h4a1 1 0 001-1v-4a1 1 0 00-1-1H1a1 1 0 00-1 1v4a1 1 0 001 1zM9 23a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1zM23 18h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zM1 15h4a1 1 0 001-1v-4a1 1 0 00-1-1H1a1 1 0 00-1 1v4a1 1 0 001 1zM10 15h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zM23 9h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zM23 0H1a1 1 0 00-1 1v4a1 1 0 001 1h22a1 1 0 001-1V1a1 1 0 00-1-1z",
    "data-original": "#000000"
  })))
};
/* harmony default export */ __webpack_exports__["default"] = (block_icons);

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map