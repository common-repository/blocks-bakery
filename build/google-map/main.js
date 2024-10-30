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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/google-map/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/gb-helper/language_code.js":
/*!*******************************************!*\
  !*** ./blocks/gb-helper/language_code.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lang_code = [{
  value: "aa",
  label: "Afar"
}, {
  value: "ab",
  label: "Abkhazian"
}, {
  value: "ae",
  label: "Avestan"
}, {
  value: "af",
  label: "Afrikaans"
}, {
  value: "ak",
  label: "Akan"
}, {
  value: "am",
  label: "Amharic"
}, {
  value: "an",
  label: "Aragonese"
}, {
  value: "ar",
  label: "Arabic"
}, {
  value: "as",
  label: "Assamese"
}, {
  value: "av",
  label: "Avaric"
}, {
  value: "ay",
  label: "Aymara"
}, {
  value: "az",
  label: "Azerbaijani"
}, {
  value: "ba",
  label: "Bashkir"
}, {
  value: "be",
  label: "Belarusian"
}, {
  value: "bg",
  label: "Bulgarian"
}, {
  value: "bh",
  label: "Bihari languages"
}, {
  value: "bi",
  label: "Bislama"
}, {
  value: "bm",
  label: "Bambara"
}, {
  value: "bn",
  label: "Bengali"
}, {
  value: "bo",
  label: "Tibetan"
}, {
  value: "br",
  label: "Breton"
}, {
  value: "bs",
  label: "Bosnian"
}, {
  value: "ca",
  label: "Catalan; Valencian"
}, {
  value: "ce",
  label: "Chechen"
}, {
  value: "ch",
  label: "Chamorro"
}, {
  value: "co",
  label: "Corsican"
}, {
  value: "cr",
  label: "Cree"
}, {
  value: "cs",
  label: "Czech"
}, {
  value: "cu",
  label: "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic"
}, {
  value: "cv",
  label: "Chuvash"
}, {
  value: "cy",
  label: "Welsh"
}, {
  value: "da",
  label: "Danish"
}, {
  value: "de",
  label: "German"
}, {
  value: "dv",
  label: "Divehi; Dhivehi; Maldivian"
}, {
  value: "dz",
  label: "Dzongkha"
}, {
  value: "ee",
  label: "Ewe"
}, {
  value: "el",
  label: "Greek, Modern (1453-)"
}, {
  value: "en",
  label: "English"
}, {
  value: "eo",
  label: "Esperanto"
}, {
  value: "es",
  label: "Spanish; Castilian"
}, {
  value: "et",
  label: "Estonian"
}, {
  value: "eu",
  label: "Basque"
}, {
  value: "fa",
  label: "Persian"
}, {
  value: "ff",
  label: "Fulah"
}, {
  value: "fi",
  label: "Finnish"
}, {
  value: "fj",
  label: "Fijian"
}, {
  value: "fo",
  label: "Faroese"
}, {
  value: "fr",
  label: "French"
}, {
  value: "fy",
  label: "Western Frisian"
}, {
  value: "ga",
  label: "Irish"
}, {
  value: "gd",
  label: "Gaelic; Scomttish Gaelic"
}, {
  value: "gl",
  label: "Galician"
}, {
  value: "gn",
  label: "Guarani"
}, {
  value: "gu",
  label: "Gujarati"
}, {
  value: "gv",
  label: "Manx"
}, {
  value: "ha",
  label: "Hausa"
}, {
  value: "he",
  label: "Hebrew"
}, {
  value: "hi",
  label: "Hindi"
}, {
  value: "ho",
  label: "Hiri Motu"
}, {
  value: "hr",
  label: "Croatian"
}, {
  value: "ht",
  label: "Haitian; Haitian Creole"
}, {
  value: "hu",
  label: "Hungarian"
}, {
  value: "hy",
  label: "Armenian"
}, {
  value: "hz",
  label: "Herero"
}, {
  value: "ia",
  label: "Interlingua (International Auxiliary Language Association)"
}, {
  value: "id",
  label: "Indonesian"
}, {
  value: "ie",
  label: "Interlingue; Occidental"
}, {
  value: "ig",
  label: "Igbo"
}, {
  value: "ii",
  label: "Sichuan Yi; Nuosu"
}, {
  value: "ik",
  label: "Inupiaq"
}, {
  value: "io",
  label: "Ido"
}, {
  value: "is",
  label: "Icelandic"
}, {
  value: "it",
  label: "Italian"
}, {
  value: "iu",
  label: "Inuktitut"
}, {
  value: "ja",
  label: "Japanese"
}, {
  value: "jv",
  label: "Javanese"
}, {
  value: "ka",
  label: "Georgian"
}, {
  value: "kg",
  label: "Kongo"
}, {
  value: "ki",
  label: "Kikuyu; Gikuyu"
}, {
  value: "kj",
  label: "Kuanyama; Kwanyama"
}, {
  value: "kk",
  label: "Kazakh"
}, {
  value: "kl",
  label: "Kalaallisut; Greenlandic"
}, {
  value: "km",
  label: "Central Khmer"
}, {
  value: "kn",
  label: "Kannada"
}, {
  value: "ko",
  label: "Korean"
}, {
  value: "kr",
  label: "Kanuri"
}, {
  value: "ks",
  label: "Kashmiri"
}, {
  value: "ku",
  label: "Kurdish"
}, {
  value: "kv",
  label: "Komi"
}, {
  value: "kw",
  label: "Cornish"
}, {
  value: "ky",
  label: "Kirghiz; Kyrgyz"
}, {
  value: "la",
  label: "Latin"
}, {
  value: "lb",
  label: "Luxembourgish; Letzeburgesch"
}, {
  value: "lg",
  label: "Ganda"
}, {
  value: "li",
  label: "Limburgan; Limburger; Limburgish"
}, {
  value: "ln",
  label: "Lingala"
}, {
  value: "lo",
  label: "Lao"
}, {
  value: "lt",
  label: "Lithuanian"
}, {
  value: "lu",
  label: "Luba-Katanga"
}, {
  value: "lv",
  label: "Latvian"
}, {
  value: "mg",
  label: "Malagasy"
}, {
  value: "mh",
  label: "Marshallese"
}, {
  value: "mi",
  label: "Maori"
}, {
  value: "mk",
  label: "Macedonian"
}, {
  value: "ml",
  label: "Malayalam"
}, {
  value: "mn",
  label: "Mongolian"
}, {
  value: "mr",
  label: "Marathi"
}, {
  value: "ms",
  label: "Malay"
}, {
  value: "mt",
  label: "Maltese"
}, {
  value: "my",
  label: "Burmese"
}, {
  value: "na",
  label: "Nauru"
}, {
  value: "nb",
  label: "Bokmål, Norwegian; Norwegian Bokmål"
}, {
  value: "nd",
  label: "Ndebele, North; North Ndebele"
}, {
  value: "ne",
  label: "Nepali"
}, {
  value: "ng",
  label: "Ndonga"
}, {
  value: "nl",
  label: "Dutch; Flemish"
}, {
  value: "nn",
  label: "Norwegian Nynorsk; Nynorsk, Norwegian"
}, {
  value: "no",
  label: "Norwegian"
}, {
  value: "nr",
  label: "Ndebele, South; South Ndebele"
}, {
  value: "nv",
  label: "Navajo; Navaho"
}, {
  value: "ny",
  label: "Chichewa; Chewa; Nyanja"
}, {
  value: "oc",
  label: "Occitan (post 1500)"
}, {
  value: "oj",
  label: "Ojibwa"
}, {
  value: "om",
  label: "Oromo"
}, {
  value: "or",
  label: "Oriya"
}, {
  value: "os",
  label: "Ossetian; Ossetic"
}, {
  value: "pa",
  label: "Panjabi; Punjabi"
}, {
  value: "pi",
  label: "Pali"
}, {
  value: "pl",
  label: "Polish"
}, {
  value: "ps",
  label: "Pushto; Pashto"
}, {
  value: "pt",
  label: "Portuguese"
}, {
  value: "qu",
  label: "Quechua"
}, {
  value: "rm",
  label: "Romansh"
}, {
  value: "rn",
  label: "Rundi"
}, {
  value: "ro",
  label: "Romanian; Moldavian; Moldovan"
}, {
  value: "ru",
  label: "Russian"
}, {
  value: "rw",
  label: "Kinyarwanda"
}, {
  value: "sa",
  label: "Sanskrit"
}, {
  value: "sc",
  label: "Sardinian"
}, {
  value: "sd",
  label: "Sindhi"
}, {
  value: "se",
  label: "Northern Sami"
}, {
  value: "sg",
  label: "Sango"
}, {
  value: "si",
  label: "Sinhala; Sinhalese"
}, {
  value: "sk",
  label: "Slovak"
}, {
  value: "sl",
  label: "Slovenian"
}, {
  value: "sm",
  label: "Samoan"
}, {
  value: "sn",
  label: "Shona"
}, {
  value: "so",
  label: "Somali"
}, {
  value: "sq",
  label: "Albanian"
}, {
  value: "sr",
  label: "Serbian"
}, {
  value: "ss",
  label: "Swati"
}, {
  value: "st",
  label: "Sotho, Southern"
}, {
  value: "su",
  label: "Sundanese"
}, {
  value: "sv",
  label: "Swedish"
}, {
  value: "sw",
  label: "Swahili"
}, {
  value: "ta",
  label: "Tamil"
}, {
  value: "te",
  label: "Telugu"
}, {
  value: "tg",
  label: "Tajik"
}, {
  value: "th",
  label: "Thai"
}, {
  value: "ti",
  label: "Tigrinya"
}, {
  value: "tk",
  label: "Turkmen"
}, {
  value: "tl",
  label: "Tagalog"
}, {
  value: "tn",
  label: "Tswana"
}, {
  value: "to",
  label: "Tonga (Tonga Islands)"
}, {
  value: "tr",
  label: "Turkish"
}, {
  value: "ts",
  label: "Tsonga"
}, {
  value: "tt",
  label: "Tatar"
}, {
  value: "tw",
  label: "Twi"
}, {
  value: "ty",
  label: "Tahitian"
}, {
  value: "ug",
  label: "Uighur; Uyghur"
}, {
  value: "uk",
  label: "Ukrainian"
}, {
  value: "ur",
  label: "Urdu"
}, {
  value: "uz",
  label: "Uzbek"
}, {
  value: "ve",
  label: "Venda"
}, {
  value: "vi",
  label: "Vielabele"
}, {
  value: "vo",
  label: "Volapük"
}, {
  value: "wa",
  label: "Walloon"
}, {
  value: "wo",
  label: "Wolof"
}, {
  value: "xh",
  label: "Xhosa"
}, {
  value: "yi",
  label: "Yiddish"
}, {
  value: "yo",
  label: "Yoruba"
}, {
  value: "za",
  label: "Zhuang; Chuang"
}, {
  value: "zh",
  label: "Chinese"
}, {
  value: "zu",
  label: "Zulu"
}];
/* harmony default export */ __webpack_exports__["default"] = (lang_code);

/***/ }),

/***/ "./blocks/google-map/main.js":
/*!***********************************!*\
  !*** ./blocks/google-map/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_google_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/google_map.js */ "./blocks/icons/google_map.js");
/* harmony import */ var _gb_helper_language_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gb-helper/language_code */ "./blocks/gb-helper/language_code.js");



var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    PanelRow = _wp$components.PanelRow,
    Dashicon = _wp$components.Dashicon,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody;
registerBlockType('blocksbakery/google-map', {
  title: __('Google map', 'blocks-bakery'),
  description: __('Google Maps block is capable of displaying locations with zoom options as well as Blocks bakery.', 'blocks-bakery'),
  // common, formatting, layout, widgets, embed
  category: 'blocks-bakery',
  icon: _icons_google_map_js__WEBPACK_IMPORTED_MODULE_1__["default"].flat_icon,
  keywords: [__('Map', 'blocks-bakery'), __('Google', 'blocks-bakery')],
  "attributes": {
    "zoom_map": {
      "type": "number",
      "default": 15
    },
    "height_map": {
      "type": "number",
      "default": 300
    },
    "address": {
      "type": "string",
      "default": "damn e koh"
    },
    "lang_code": {
      "type": "string",
      "default": "en"
    },
    "googlemap_style": {
      "source": "attribute",
      "attribute": "style"
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
      "default": 0
    },
    "css_blur": {
      'type': 'number',
      'default': 0
    },
    //New for today
    "height_max_min": {
      "type": "number",
      "default": "100"
    },
    "heigphtpxvh": {
      "type": "string",
      "default": "vh"
    },
    //for hover filter 
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
      "default": 0
    },
    "css_hover_blur": {
      "type": "number",
      "default": 0
    }
  },
  edit: function edit(props) {
    var cssfilter_toggle = function cssfilter_toggle() {
      var x = document.getElementById("cssfilter_toggle");
      console.log("open");

      if (x.style.display === "block") {
        x.style.display = "none";
      } else if (x.style.display === "none") {
        x.style.display = "block";
      }
    };

    var cssfilter_remove = function cssfilter_remove() {
      props.setAttributes({
        css_blur: 0
      });
      props.setAttributes({
        css_brightness: 100
      });
      props.setAttributes({
        css_contrast: 100
      });
      props.setAttributes({
        css_hue: 0
      });
      props.setAttributes({
        css_saturation: 100
      });
    }; //For Responsive Devices...


    var laptop = function laptop() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    };

    var tablet = function tablet() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    };

    var smartphone = function smartphone() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    }; //End of the Responsive Devices...
    //For height change the unitex


    var heightpx = function heightpx() {
      var x = document.getElementById("heightpx");
      var y = document.getElementById("heightvh");
      x.style.textDecoration = "underline";
      y.style.textDecoration = "none";
      props.setAttributes({
        heigphtpxvh: 'px'
      });
      props.setAttributes({
        height_max_min: '1440'
      });
    };

    var heightvh = function heightvh() {
      var x = document.getElementById("heightpx");
      var y = document.getElementById("heightvh");
      x.style.textDecoration = "none";
      y.style.textDecoration = "underline";
      props.setAttributes({
        heigphtpxvh: 'vh'
      });
      props.setAttributes({
        height_max_min: '100'
      });
    }; //For For hover oopacity..


    var clearImgBorderColor = function clearImgBorderColor() {
      props.setAttributes({
        image_border_color: ""
      });
    };

    var clearImgShadowColor = function clearImgShadowColor() {
      props.setAttributes({
        img_shadow_color: ''
      });
    };

    var clearImgShadowHoverColor = function clearImgShadowHoverColor() {
      props.setAttributes({
        img_hover_shadow_blur: ''
      });
    }; // Reset


    var imgShadowReset = function imgShadowReset() {
      props.setAttributes({
        img_shadow_horizontal: 0
      });
      props.setAttributes({
        img_shadow_vertical: 0
      });
      props.setAttributes({
        img_shadow_color: ''
      });
      props.setAttributes({
        img_shadow_blur: 0
      });
    };

    var filter_edit_panel_reset = function filter_edit_panel_reset() {
      props.setAttributes({
        css_blur: 0
      });
      props.setAttributes({
        css_brightness: 100
      });
      props.setAttributes({
        css_contrast: 100
      });
      props.setAttributes({
        css_hue: 0
      });
      props.setAttributes({
        css_saturation: 100
      });
    };

    var imgFilterHoverResetPanel = function imgFilterHoverResetPanel() {
      props.setAttributes({
        css_hover_blur: 0
      });
      props.setAttributes({
        css_hover_brightness: 100
      });
      props.setAttributes({
        css_hover_contrast: 100
      });
      props.setAttributes({
        css_hover_hue: 0
      });
      props.setAttributes({
        css_hover_saturation: 100
      });
    };

    var imgHover = function imgHover(e) {
      var hover = e.target.style;
      hover.filter = "brightness(".concat(props.attributes.css_hover_brightness, "%) contrast(").concat(props.attributes.css_hover_contrast, "%) saturate(").concat(props.attributes.css_hover_saturation, "%) blur(").concat(props.attributes.css_hover_blur, "px) hue-rotate(").concat(props.attributes.css_hover_hue, "deg)");
    };

    var imgNormal = function imgNormal(e) {
      var normal = e.target.style;
      normal.filter = "brightness(".concat(props.attributes.css_brightness, "%) contrast(").concat(props.attributes.css_contrast, "%) saturate(").concat(props.attributes.css_saturation, "%) blur(").concat(props.attributes.css_blur, "px) hue-rotate(").concat(props.attributes.css_hue, "deg)");
    };

    var imgFilterEditPanel = function imgFilterEditPanel() {
      var filter_edit_panel = document.getElementById("img_filter_edit_panel");
      var filter_reset_display = document.getElementById("filter_reset_display");
      filter_reset_display.style.display = "inline-block";

      if (filter_edit_panel.style.display === "block") {
        filter_edit_panel.style.display = "none";
      } else if (filter_edit_panel.style.display === "none") {
        filter_edit_panel.style.display = "block";
      }
    };

    var imgFilterHoverEditPanel = function imgFilterHoverEditPanel() {
      var filter_edit_panel = document.getElementById("img_hover_filter_edit_panel");
      var filter_reset_display = document.getElementById("filter_hover_reset_display");
      filter_reset_display.style.display = "inline-block";

      if (filter_edit_panel.style.display === "block") {
        filter_edit_panel.style.display = "none";
      } else if (filter_edit_panel.style.display === "none") {
        filter_edit_panel.style.display = "block";
      }
    }; //end of the hover......


    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('General', 'blocks-bakery'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      label: "Address",
      value: props.attributes.address,
      onChange: function onChange(new_val) {
        props.setAttributes({
          address: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
      label: "Zoom",
      min: 1,
      max: 22,
      step: 0.1,
      initialPosition: 15,
      value: props.attributes.zoom_map,
      onChange: function onChange(new_val) {
        props.setAttributes({
          zoom_map: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
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
          zoom_map: 15
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
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
      id: "heightpx",
      onClick: heightpx,
      style: {
        padding: 0,
        boxShadow: "none",
        textTransform: "uppercase",
        fontSize: 10,
        marginRight: 5
      }
    }, "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      id: "heightvh",
      onClick: heightvh,
      style: {
        textDecoration: "underline",
        padding: 0,
        boxShadow: "none",
        textTransform: "uppercase",
        fontSize: 10,
        marginRight: 5
      }
    }, "vh"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "range-controler",
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        marginRight: "10px",
        width: "100%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      min: 10,
      max: props.attributes.height_max_min,
      initialPosition: 100,
      step: 0.1,
      value: props.attributes.height_map,
      onChange: function onChange(new_val) {
        props.setAttributes({
          height_map: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
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
          height_map: 100
        });
      }
    }, " Reset")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: __("Language", 'Google Map'),
      value: props.attributes.lang_code,
      options: _gb_helper_language_code__WEBPACK_IMPORTED_MODULE_2__["default"],
      onChange: function onChange(new_val) {
        props.setAttributes({
          lang_code: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Map", "blocks-bakery")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "CSS Filter"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: cssfilter_remove,
      style: {
        paddingLeft: 7,
        paddingRight: 7
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "image-rotate",
      style: {
        fontSize: 15
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: cssfilter_toggle,
      style: {
        paddingLeft: 7,
        paddingRight: 7
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "admin-tools",
      style: {
        fontSize: 15
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Card, {
      id: "cssfilter_toggle",
      style: {
        display: "none"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CardBody, {
      style: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 10,
        paddingRight: 10
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Blur",
      min: 0,
      max: 10,
      initialPosition: 0,
      value: props.attributes.css_blur,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_blur: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Brightness",
      min: 0,
      max: 200,
      initialPosition: 100,
      value: props.attributes.css_brightness,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_brightness: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Contrast",
      min: 0,
      max: 200,
      initialPosition: 100,
      value: props.attributes.css_contrast,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_contrast: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Saturation",
      min: 0,
      max: 200,
      initialPosition: 100,
      value: props.attributes.css_saturation,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_saturation: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Hue",
      min: 0,
      max: 360,
      initialPosition: 0,
      value: props.attributes.css_hue,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_hue: new_val
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Hover", 'blocks-bakery')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Image Hover Filters"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: imgFilterHoverResetPanel,
      id: "filter_hover_reset_display",
      style: {
        display: 'none',
        paddingLeft: 7,
        paddingRight: 7
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "image-rotate",
      style: {
        fontSize: 15
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: imgFilterHoverEditPanel,
      style: {
        textDecoration: "underline",
        paddingLeft: 7,
        paddingRight: 7
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "edit",
      style: {
        fontSize: 15
      }
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Card, {
      id: "img_hover_filter_edit_panel",
      style: {
        display: "none"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CardBody, {
      style: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 10,
        paddingRight: 10
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Blur",
      min: 0,
      max: 10,
      initialPosition: 0,
      value: props.attributes.css_hover_blur,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_hover_blur: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Brightness",
      min: 0,
      max: 200,
      initialPosition: 100,
      value: props.attributes.css_hover_brightness,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_hover_brightness: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Contrast",
      min: 0,
      max: 200,
      initialPosition: 100,
      value: props.attributes.css_hover_contrast,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_hover_contrast: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Saturation",
      min: 0,
      max: 200,
      initialPosition: 100,
      value: props.attributes.css_hover_saturation,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_hover_saturation: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Hue",
      min: 0,
      max: 360,
      initialPosition: 0,
      value: props.attributes.css_hover_hue,
      onChange: function onChange(new_val) {
        props.setAttributes({
          css_hover_hue: new_val
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
      className: "bb-google-map",
      style: {
        filter: "brightness(".concat(props.attributes.css_brightness, "%) contrast(").concat(props.attributes.css_contrast, "%) saturate(").concat(props.attributes.css_saturation, "%) blur(").concat(props.attributes.css_blur, "px) hue-rotate(").concat(props.attributes.css_hue, "deg)"),
        height: props.attributes.height_map + props.attributes.heigphtpxvh
      },
      onMouseOver: imgHover,
      onMouseLeave: imgNormal,
      src: "https://www.google.com/maps/embed/v1/place?key=AIzaSyA-1FeCwOmIay86tOgg-NIejXLmHKqKVzA&q=".concat(props.attributes.address, "&zoom=").concat(props.attributes.zoom_map, "&language=").concat(props.attributes.lang_code)
    })));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./blocks/icons/google_map.js":
/*!************************************!*\
  !*** ./blocks/icons/google_map.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var block_icons = {
  flat_icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", {
    fill: "#FD003A"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M258.499 512a15 15 0 01-12.745-7.091L102.869 274.652C85.289 246.26 76 213.534 76 180 76 80.748 156.748 0 256 0s180 80.748 180 180c0 32.539-8.779 64.428-25.389 92.22L271.368 504.707a15 15 0 01-12.75 7.292l-.119.001zM256 30c-82.71 0-150 67.29-150 150 0 27.95 7.734 55.214 22.368 78.846l129.905 209.34 126.594-211.368C398.689 233.688 406 207.121 406 180c0-82.71-67.29-150-150-150z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M256 270c-31.397 0-60.044-15.977-76.631-42.737C170.62 213.117 166 196.778 166 180c0-49.626 40.374-90 90-90s90 40.374 90 90c0 16.284-4.371 32.209-12.639 46.055C316.913 253.574 287.994 270 256 270zm0-150c-33.084 0-60 26.916-60 60 0 11.2 3.069 22.082 8.875 31.47C215.945 229.33 235.06 240 256 240c21.337 0 40.629-10.965 51.607-29.331 5.49-9.193 8.393-19.8 8.393-30.669 0-33.084-26.916-60-60-60z"
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