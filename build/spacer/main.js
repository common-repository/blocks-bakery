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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/spacer/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/icons/spacer_icon.js":
/*!*************************************!*\
  !*** ./blocks/icons/spacer_icon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var Spacer = {
  Spacer: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "512",
    height: "512",
    enableBackground: "new 0 0 512 512",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "red",
    d: "M401 0L111 0 111 40 254.716 40 152.469 142.246 180.754 170.53 235 116.284 235 396.104 180.754 341.858 152.469 370.142 254.328 472 111 472 111 512 401 512 401 472 255.672 472 357.531 370.142 329.246 341.858 275 396.104 275 116.284 329.246 170.53 357.531 142.246 255.284 40 401 40z",
    "data-original": "#000000"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Spacer);

/***/ }),

/***/ "./blocks/spacer/main.js":
/*!*******************************!*\
  !*** ./blocks/spacer/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_spacer_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/spacer_icon */ "./blocks/icons/spacer_icon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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
registerBlockType('blocksbakery/spacer', {
  title: __('Spacer', 'blocks-bakery'),
  description: __('This block is Adding Space Between the Elements', 'blocks-bakery'),
  // common, formatting, layout, widgets, embed
  category: 'blocks-bakery',
  icon: _icons_spacer_icon__WEBPACK_IMPORTED_MODULE_1__["default"].Spacer,
  keywords: [__('Spacer', 'blocks-bakery'), __('Padding', 'blocks-bakery'), __('Height', 'blocks-bakery')],
  supports: {
    html: false
  },
  "attributes": {
    "spacer_height": {
      "type": "number",
      "default": "10"
    },
    "spacer_height_units": {
      "type": "string",
      "default": "px"
    },
    "units_control": {
      "type": "number",
      "default": "600"
    },
    "bb_spacer_wrapper": {
      "source": "attribute",
      "attribute": "style"
    },
    "bb_spacer_inner": {
      "source": "attribute",
      "attribute": "style"
    },
    "bg_color": {
      "type": "string",
      "default": "#eee"
    }
  },
  edit: function edit(props) {
    var styles = {
      bb_spacer_wrapper: {
        backgroundColor: props.attributes.bg_color
      },
      bb_spacer_inner: {
        height: props.attributes.spacer_height + props.attributes.spacer_height_units
      }
    };

    var px_height = function px_height() {
      var px_height = document.querySelector('.px_height');
      var vh_height = document.querySelector('.vh_height');
      var em_height = document.querySelector('.em_height');
      px_height.style.textDecoration = "underline";
      vh_height.style.textDecoration = "none";
      em_height.style.textDecoration = "none";
      props.setAttributes({
        spacer_height_units: 'px'
      });
      props.setAttributes({
        units_control: 600
      });
    };

    var vh_height = function vh_height() {
      var px_height = document.querySelector('.px_height');
      var vh_height = document.querySelector('.vh_height');
      var em_height = document.querySelector('.em_height');
      px_height.style.textDecoration = "none";
      vh_height.style.textDecoration = "underline";
      em_height.style.textDecoration = "none";
      props.setAttributes({
        spacer_height_units: 'vh'
      });
      props.setAttributes({
        units_control: 100
      });
    };

    var em_height = function em_height() {
      var px_height = document.querySelector('.px_height');
      var vh_height = document.querySelector('.vh_height');
      var em_height = document.querySelector('.em_height');
      px_height.style.textDecoration = "none";
      vh_height.style.textDecoration = "none";
      em_height.style.textDecoration = "underline";
      props.setAttributes({
        spacer_height_units: 'em'
      });
      props.setAttributes({
        units_control: 20
      });
    }; //For Responsive Design


    var laptop = function laptop() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    };

    var tablet = function tablet() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    };

    var smartphone = function smartphone() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Spacer"),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      style: {
        marginRight: 10
      }
    }, "Height"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: laptop,
      icon: "laptop"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: tablet,
      icon: "tablet"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: smartphone,
      icon: "smartphone"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "px_height",
      onClick: px_height,
      style: {
        textDecoration: "underline",
        padding: 0,
        boxShadow: "none",
        textTransform: "uppercase",
        fontSize: 10,
        marginRight: 5
      }
    }, "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "vh_height",
      onClick: vh_height,
      style: {
        padding: 0,
        boxShadow: "none",
        textTransform: "uppercase",
        fontSize: 10,
        marginRight: 5
      }
    }, "vh"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "em_height",
      onClick: em_height,
      style: {
        padding: 0,
        boxShadow: "none",
        textTransform: "uppercase",
        fontSize: 10,
        marginRight: 5
      }
    }, "em"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      min: 0,
      max: props.attributes.units_control,
      initialPosition: 10,
      value: props.attributes.spacer_height,
      onChange: function onChange(new_val) {
        props.setAttributes({
          spacer_height: new_val
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bb-spacer-container",
      style: styles.bb_spacer_wrapper
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bb-spacer-inner",
      style: styles.bb_spacer_inner
    })))];
  },
  save: function save(props) {
    return null;
  }
});

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