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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/icon/main.js");
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

/***/ "./blocks/gb-helper/font_awesome.js":
/*!******************************************!*\
  !*** ./blocks/gb-helper/font_awesome.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const category = {"label": "Font Awesome","short": "fa-regular"}
var font_awesome = ["fas fa-ad", "fas fa-address-book", "fas fa-address-card", "fas fa-adjust", "fas fa-air-freshener", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fas fa-allergies", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fas fa-anchor", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fas fa-angry", "fas fa-ankh", "fas fa-apple-alt", "fas fa-archive", "fas fa-archway", "fas fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fas fa-at", "fas fa-atlas", "fas fa-atom", "fas fa-audio-description", "fas fa-award", "fas fa-baby", "fas fa-baby-carriage", "fas fa-backspace", "fas fa-backward", "fas fa-bacon", "fas fa-bacteria", "fas fa-bacterium", "fas fa-bahai", "fas fa-balance-scale", "fas fa-balance-scale-left", "fas fa-balance-scale-right", "fas fa-ban", "fas fa-band-aid", "fas fa-barcode", "fas fa-bars", "fas fa-baseball-ball", "fas fa-basketball-ball", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fas fa-bell", "fas fa-bell-slash", "fas fa-bezier-curve", "fas fa-bible", "fas fa-bicycle", "fas fa-biking", "fas fa-binoculars", "fas fa-biohazard", "fas fa-birthday-cake", "fas fa-blender", "fas fa-blender-phone", "fas fa-blind", "fas fa-blog", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-bone", "fas fa-bong", "fas fa-book", "fas fa-book-dead", "fas fa-book-medical", "fas fa-book-open", "fas fa-book-reader", "fas fa-bookmark", "fas fa-border-all", "fas fa-border-none", "fas fa-border-style", "fas fa-bowling-ball", "fas fa-box", "fas fa-box-open", "fas fa-box-tissue", "fas fa-boxes", "fas fa-braille", "fas fa-brain", "fas fa-bread-slice", "fas fa-briefcase", "fas fa-briefcase-medical", "fas fa-broadcast-tower", "fas fa-broom", "fas fa-brush", "fas fa-bug", "fas fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fas fa-burn", "fas fa-bus", "fas fa-bus-alt", "fas fa-business-time", "fas fa-calculator", "fas fa-calendar", "fas fa-calendar-alt", "fas fa-calendar-check", "fas fa-calendar-day", "fas fa-calendar-minus", "fas fa-calendar-plus", "fas fa-calendar-times", "fas fa-calendar-week", "fas fa-camera", "fas fa-camera-retro", "fas fa-campground", "fas fa-candy-cane", "fas fa-cannabis", "fas fa-capsules", "fas fa-car", "fas fa-car-alt", "fas fa-car-battery", "fas fa-car-crash", "fas fa-car-side", "fas fa-caravan", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "fas fa-caret-square-left", "fas fa-caret-square-right", "fas fa-caret-square-up", "fas fa-caret-up", "fas fa-carrot", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fas fa-cash-register", "fas fa-cat", "fas fa-certificate", "fas fa-chair", "fas fa-chalkboard", "fas fa-chalkboard-teacher", "fas fa-charging-station", "fas fa-chart-area", "fas fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "fas fa-check-double", "fas fa-check-square", "fas fa-cheese", "fas fa-chess", "fas fa-chess-bishop", "fas fa-chess-board", "fas fa-chess-king", "fas fa-chess-knight", "fas fa-chess-pawn", "fas fa-chess-queen", "fas fa-chess-rook", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fas fa-church", "fas fa-circle", "fas fa-circle-notch", "fas fa-city", "fas fa-clinic-medical", "fas fa-clipboard", "fas fa-clipboard-check", "fas fa-clipboard-list", "fas fa-clock", "fas fa-clone", "fas fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-meatball", "fas fa-cloud-moon", "fas fa-cloud-moon-rain", "fas fa-cloud-rain", "fas fa-cloud-showers-heavy", "fas fa-cloud-sun", "fas fa-cloud-sun-rain", "fas fa-cloud-upload-alt", "fas fa-cocktail", "fas fa-code", "fas fa-code-branch", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-coins", "fas fa-columns", "fas fa-comment", "fas fa-comment-alt", "fas fa-comment-dollar", "fas fa-comment-dots", "fas fa-comment-medical", "fas fa-comment-slash", "fas fa-comments", "fas fa-comments-dollar", "fas fa-compact-disc", "fas fa-compass", "fas fa-compress", "fas fa-compress-alt", "fas fa-compress-arrows-alt", "fas fa-concierge-bell", "fas fa-cookie", "fas fa-cookie-bite", "fas fa-copy", "fas fa-copyright", "fas fa-couch", "fas fa-credit-card", "fas fa-crop", "fas fa-crop-alt", "fas fa-cross", "fas fa-crosshairs", "fas fa-crow", "fas fa-crown", "fas fa-crutch", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fas fa-database", "fas fa-deaf", "fas fa-democrat", "fas fa-desktop", "fas fa-dharmachakra", "fas fa-diagnoses", "fas fa-dice", "fas fa-dice-d20", "fas fa-dice-d6", "fas fa-dice-five", "fas fa-dice-four", "fas fa-dice-one", "fas fa-dice-six", "fas fa-dice-three", "fas fa-dice-two", "fas fa-digital-tachograph", "fas fa-directions", "fas fa-disease", "fas fa-divide", "fas fa-dizzy", "fas fa-dna", "fas fa-dog", "fas fa-dollar-sign", "fas fa-dolly", "fas fa-dolly-flatbed", "fas fa-donate", "fas fa-door-closed", "fas fa-door-open", "fas fa-dot-circle", "fas fa-dove", "fas fa-download", "fas fa-drafting-compass", "fas fa-dragon", "fas fa-draw-polygon", "fas fa-drum", "fas fa-drum-steelpan", "fas fa-drumstick-bite", "fas fa-dumbbell", "fas fa-dumpster", "fas fa-dumpster-fire", "fas fa-dungeon", "fas fa-edit", "fas fa-egg", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fas fa-envelope", "fas fa-envelope-open", "fas fa-envelope-open-text", "fas fa-envelope-square", "fas fa-equals", "fas fa-eraser", "fas fa-ethernet", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-alt", "fas fa-expand-arrows-alt", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "fas fa-fan", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-faucet", "fas fa-fax", "fas fa-feather", "fas fa-feather-alt", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "fas fa-file-alt", "fas fa-file-archive", "fas fa-file-audio", "fas fa-file-code", "fas fa-file-contract", "fas fa-file-csv", "fas fa-file-download", "fas fa-file-excel", "fas fa-file-export", "fas fa-file-image", "fas fa-file-import", "fas fa-file-invoice", "fas fa-file-invoice-dollar", "fas fa-file-medical", "fas fa-file-medical-alt", "fas fa-file-pdf", "fas fa-file-powerpoint", "fas fa-file-prescription", "fas fa-file-signature", "fas fa-file-upload", "fas fa-file-video", "fas fa-file-word", "fas fa-fill", "fas fa-fill-drip", "fas fa-film", "fas fa-filter", "fas fa-fingerprint", "fas fa-fire", "fas fa-fire-alt", "fas fa-fire-extinguisher", "fas fa-first-aid", "fas fa-fish", "fas fa-fist-raised", "fas fa-flag", "fas fa-flag-checkered", "fas fa-flag-usa", "fas fa-flask", "fas fa-flushed", "fas fa-folder", "fas fa-folder-minus", "fas fa-folder-open", "fas fa-folder-plus", "fas fa-font", "fas fa-football-ball", "fas fa-forward", "fas fa-frog", "fas fa-frown", "fas fa-frown-open", "fas fa-funnel-dollar", "fas fa-futbol", "fas fa-gamepad", "fas fa-gas-pump", "fas fa-gavel", "fas fa-gem", "fas fa-genderless", "fas fa-ghost", "fas fa-gift", "fas fa-gifts", "fas fa-glass-cheers", "fas fa-glass-martini", "fas fa-glass-martini-alt", "fas fa-glass-whiskey", "fas fa-glasses", "fas fa-globe", "fas fa-globe-africa", "fas fa-globe-americas", "fas fa-globe-asia", "fas fa-globe-europe", "fas fa-golf-ball", "fas fa-gopuram", "fas fa-graduation-cap", "fas fa-greater-than", "fas fa-greater-than-equal", "fas fa-grimace", "fas fa-grin", "fas fa-grin-alt", "fas fa-grin-beam", "fas fa-grin-beam-sweat", "fas fa-grin-hearts", "fas fa-grin-squint", "fas fa-grin-squint-tears", "fas fa-grin-stars", "fas fa-grin-tears", "fas fa-grin-tongue", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink", "fas fa-grin-wink", "fas fa-grip-horizontal", "fas fa-grip-lines", "fas fa-grip-lines-vertical", "fas fa-grip-vertical", "fas fa-guitar", "fas fa-h-square", "fas fa-hamburger", "fas fa-hammer", "fas fa-hamsa", "fas fa-hand-holding", "fas fa-hand-holding-heart", "fas fa-hand-holding-medical", "fas fa-hand-holding-usd", "fas fa-hand-holding-water", "fas fa-hand-lizard", "fas fa-hand-middle-finger", "fas fa-hand-paper", "fas fa-hand-peace", "fas fa-hand-point-down", "fas fa-hand-point-left", "fas fa-hand-point-right", "fas fa-hand-point-up", "fas fa-hand-pointer", "fas fa-hand-rock", "fas fa-hand-scissors", "fas fa-hand-sparkles", "fas fa-hand-spock", "fas fa-hands", "fas fa-hands-helping", "fas fa-hands-wash", "fas fa-handshake", "fas fa-handshake-alt-slash", "fas fa-handshake-slash", "fas fa-hanukiah", "fas fa-hard-hat", "fas fa-hashtag", "fas fa-hat-cowboy", "fas fa-hat-cowboy-side", "fas fa-hat-wizard", "fas fa-hdd", "fas fa-head-side-cough", "fas fa-head-side-cough-slash", "fas fa-head-side-mask", "fas fa-head-side-virus", "fas fa-heading", "fas fa-headphones", "fas fa-headphones-alt", "fas fa-headset", "fas fa-heart", "fas fa-heart-broken", "fas fa-heartbeat", "fas fa-helicopter", "fas fa-highlighter", "fas fa-hiking", "fas fa-hippo", "fas fa-history", "fas fa-hockey-puck", "fas fa-holly-berry", "fas fa-home", "fas fa-horse", "fas fa-horse-head", "fas fa-hospital", "fas fa-hospital-alt", "fas fa-hospital-symbol", "fas fa-hospital-user", "fas fa-hot-tub", "fas fa-hotdog", "fas fa-hotel", "fas fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fas fa-house-damage", "fas fa-house-user", "fas fa-hryvnia", "fas fa-i-cursor", "fas fa-ice-cream", "fas fa-icicles", "fas fa-icons", "fas fa-id-badge", "fas fa-id-card", "fas fa-id-card-alt", "fas fa-igloo", "fas fa-image", "fas fa-images", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-infinity", "fas fa-info", "fas fa-info-circle", "fas fa-italic", "fas fa-jedi", "fas fa-joint", "fas fa-journal-whills", "fas fa-kaaba", "fas fa-key", "fas fa-keyboard", "fas fa-khanda", "fas fa-kiss", "fas fa-kiss-beam", "fas fa-kiss-wink-heart", "fas fa-kiwi-bird", "fas fa-landmark", "fas fa-language", "fas fa-laptop", "fas fa-laptop-code", "fas fa-laptop-house", "fas fa-laptop-medical", "fas fa-laugh", "fas fa-laugh-beam", "fas fa-laugh-squint", "fas fa-laugh-wink", "fas fa-layer-group", "fas fa-leaf", "fas fa-lemon", "fas fa-less-than", "fas fa-less-than-equal", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "fas fa-lightbulb", "fas fa-link", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fas fa-luggage-cart", "fas fa-lungs", "fas fa-lungs-virus", "fas fa-magic", "fas fa-magnet", "fas fa-mail-bulk", "fas fa-male", "fas fa-map", "fas fa-map-marked", "fas fa-map-marked-alt", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-marker", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fas fa-mask", "fas fa-medal", "fas fa-medkit", "fas fa-meh", "fas fa-meh-blank", "fas fa-meh-rolling-eyes", "fas fa-memory", "fas fa-menorah", "fas fa-mercury", "fas fa-meteor", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "fas fa-microscope", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "fas fa-mitten", "fas fa-mobile", "fas fa-mobile-alt", "fas fa-money-bill", "fas fa-money-bill-alt", "fas fa-money-bill-wave", "fas fa-money-bill-wave-alt", "fas fa-money-check", "fas fa-money-check-alt", "fas fa-monument", "fas fa-moon", "fas fa-mortar-pestle", "fas fa-mosque", "fas fa-motorcycle", "fas fa-mountain", "fas fa-mouse", "fas fa-mouse-pointer", "fas fa-mug-hot", "fas fa-music", "fas fa-network-wired", "fas fa-neuter", "fas fa-newspaper", "fas fa-not-equal", "fas fa-notes-medical", "fas fa-object-group", "fas fa-object-ungroup", "fas fa-oil-can", "fas fa-om", "fas fa-otter", "fas fa-outdent", "fas fa-pager", "fas fa-paint-brush", "fas fa-paint-roller", "fas fa-palette", "fas fa-pallet", "fas fa-paper-plane", "fas fa-paperclip", "fas fa-parachute-box", "fas fa-paragraph", "fas fa-parking", "fas fa-passport", "fas fa-pastafarianism", "fas fa-paste", "fas fa-pause", "fas fa-pause-circle", "fas fa-paw", "fas fa-peace", "fas fa-pen", "fas fa-pen-alt", "fas fa-pen-fancy", "fas fa-pen-nib", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-pencil-ruler", "fas fa-people-arrows", "fas fa-people-carry", "fas fa-pepper-hot", "fas fa-percent", "fas fa-percentage", "fas fa-person-booth", "fas fa-phone", "fas fa-phone-alt", "fas fa-phone-slash", "fas fa-phone-square", "fas fa-phone-square-alt", "fas fa-phone-volume", "fas fa-photo-video", "fas fa-piggy-bank", "fas fa-pills", "fas fa-pizza-slice", "fas fa-place-of-worship", "fas fa-plane", "fas fa-plane-arrival", "fas fa-plane-departure", "fas fa-plane-slash", "fas fa-play", "fas fa-play-circle", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "fas fa-podcast", "fas fa-poll", "fas fa-poll-h", "fas fa-poo", "fas fa-poo-storm", "fas fa-poop", "fas fa-portrait", "fas fa-pound-sign", "fas fa-power-off", "fas fa-pray", "fas fa-praying-hands", "fas fa-prescription", "fas fa-prescription-bottle", "fas fa-prescription-bottle-alt", "fas fa-print", "fas fa-procedures", "fas fa-project-diagram", "fas fa-pump-medical", "fas fa-pump-soap", "fas fa-puzzle-piece", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "fas fa-quidditch", "fas fa-quote-left", "fas fa-quote-right", "fas fa-quran", "fas fa-radiation", "fas fa-radiation-alt", "fas fa-rainbow", "fas fa-random", "fas fa-receipt", "fas fa-record-vinyl", "fas fa-recycle", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "fas fa-remove-format", "fas fa-reply", "fas fa-reply-all", "fas fa-republican", "fas fa-restroom", "fas fa-retweet", "fas fa-ribbon", "fas fa-ring", "fas fa-road", "fas fa-robot", "fas fa-rocket", "fas fa-route", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-ruler", "fas fa-ruler-combined", "fas fa-ruler-horizontal", "fas fa-ruler-vertical", "fas fa-running", "fas fa-rupee-sign", "fas fa-sad-cry", "fas fa-sad-tear", "fas fa-satellite", "fas fa-satellite-dish", "fas fa-save", "fas fa-school", "fas fa-screwdriver", "fas fa-scroll", "fas fa-sd-card", "fas fa-search", "fas fa-search-dollar", "fas fa-search-location", "fas fa-search-minus", "fas fa-search-plus", "fas fa-seedling", "fas fa-server", "fas fa-shapes", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-shield-virus", "fas fa-ship", "fas fa-shipping-fast", "fas fa-shoe-prints", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-shuttle-van", "fas fa-sign", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fas fa-signature", "fas fa-sim-card", "fas fa-sink", "fas fa-sitemap", "fas fa-skating", "fas fa-skiing", "fas fa-skiing-nordic", "fas fa-skull", "fas fa-skull-crossbones", "fas fa-slash", "fas fa-sleigh", "fas fa-sliders-h", "fas fa-smile", "fas fa-smile-beam", "fas fa-smile-wink", "fas fa-smog", "fas fa-smoking", "fas fa-smoking-ban", "fas fa-sms", "fas fa-snowboarding", "fas fa-snowflake", "fas fa-snowman", "fas fa-snowplow", "fas fa-soap", "fas fa-socks", "fas fa-solar-panel", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-down-alt", "fas fa-sort-alpha-up", "fas fa-sort-alpha-up-alt", "fas fa-sort-amount-down", "fas fa-sort-amount-down-alt", "fas fa-sort-amount-up", "fas fa-sort-amount-up-alt", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-down-alt", "fas fa-sort-numeric-up", "fas fa-sort-numeric-up-alt", "fas fa-sort-up", "fas fa-spa", "fas fa-space-shuttle", "fas fa-spell-check", "fas fa-spider", "fas fa-spinner", "fas fa-splotch", "fas fa-spray-can", "fas fa-square", "fas fa-square-full", "fas fa-square-root-alt", "fas fa-stamp", "fas fa-star", "fas fa-star-and-crescent", "fas fa-star-half", "fas fa-star-half-alt", "fas fa-star-of-david", "fas fa-star-of-life", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fas fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "fas fa-stopwatch", "fas fa-stopwatch-20", "fas fa-store", "fas fa-store-alt", "fas fa-store-alt-slash", "fas fa-store-slash", "fas fa-stream", "fas fa-street-view", "fas fa-strikethrough", "fas fa-stroopwafel", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-suitcase-rolling", "fas fa-sun", "fas fa-superscript", "fas fa-surprise", "fas fa-swatchbook", "fas fa-swimmer", "fas fa-swimming-pool", "fas fa-synagogue", "fas fa-sync", "fas fa-sync-alt", "fas fa-syringe", "fas fa-table", "fas fa-table-tennis", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tablets", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tape", "fas fa-tasks", "fas fa-taxi", "fas fa-teeth", "fas fa-teeth-open", "fas fa-temperature-high", "fas fa-temperature-low", "fas fa-tenge", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fas fa-theater-masks", "fas fa-thermometer", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "fas fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "fas fa-tint", "fas fa-tint-slash", "fas fa-tired", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-toilet", "fas fa-toilet-paper", "fas fa-toilet-paper-slash", "fas fa-toolbox", "fas fa-tools", "fas fa-tooth", "fas fa-torah", "fas fa-torii-gate", "fas fa-tractor", "fas fa-trademark", "fas fa-traffic-light", "fas fa-trailer", "fas fa-train", "fas fa-tram", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "fas fa-trash-restore", "fas fa-trash-restore-alt", "fas fa-tree", "fas fa-trophy", "fas fa-truck", "fas fa-truck-loading", "fas fa-truck-monster", "fas fa-truck-moving", "fas fa-truck-pickup", "fas fa-tshirt", "fas fa-tty", "fas fa-tv", "fas fa-umbrella", "fas fa-umbrella-beach", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fas fa-upload", "fas fa-user", "fas fa-user-alt", "fas fa-user-alt-slash", "fas fa-user-astronaut", "fas fa-user-check", "fas fa-user-circle", "fas fa-user-clock", "fas fa-user-cog", "fas fa-user-edit", "fas fa-user-friends", "fas fa-user-graduate", "fas fa-user-injured", "fas fa-user-lock", "fas fa-user-md", "fas fa-user-minus", "fas fa-user-ninja", "fas fa-user-nurse", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-shield", "fas fa-user-slash", "fas fa-user-tag", "fas fa-user-tie", "fas fa-user-times", "fas fa-users", "fas fa-users-cog", "fas fa-users-slash", "fas fa-utensil-spoon", "fas fa-utensils", "fas fa-vector-square", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fas fa-vest", "fas fa-vest-patches", "fas fa-vial", "fas fa-vials", "fas fa-video", "fas fa-video-slash", "fas fa-vihara", "fas fa-virus", "fas fa-virus-slash", "fas fa-viruses", "fas fa-voicemail", "fas fa-volleyball-ball", "fas fa-volume-down", "far fa-envelope-open", "fas fa-volume-mute", "fas fa-volume-off", "fas fa-volume-up", "fas fa-vote-yea", "fas fa-vr-cardboard", "fas fa-walking", "fas fa-wallet", "fas fa-warehouse", "fas fa-water", "fas fa-wave-square", "fas fa-weight", "fas fa-weight-hanging", "fas fa-wheelchair", "fas fa-wifi", "fas fa-wind", "fas fa-window-close", "fas fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "fas fa-wine-bottle", "fas fa-wine-glass", "fas fa-wine-glass-alt", "fas fa-won-sign", "fas fa-wrench", "fas fa-x-ray", "fas fa-yen-sign", "fas fa-yin-yang", //    Regular
"far fa-address-book", "far fa-address-card", "far fa-angry", "far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-up", "far fa-bell", "far fa-bell-slash", "far fa-bookmark", "far fa-building", "far fa-calendar", "far fa-calendar-alt", "far fa-calendar-check", "far fa-calendar-minus", "far fa-calendar-plus", "far fa-calendar-times", "far fa-caret-square-down", "far fa-caret-square-left", "far fa-caret-square-right", "far fa-caret-square-up", "far fa-chart-bar", "far fa-check-circle", "far fa-check-square", "far fa-circle", "far fa-clipboard", "far fa-clock", "far fa-clone", "far fa-closed-captioning", "far fa-comment", "far fa-comment-alt", "far fa-comment-dots", "far fa-comments", "far fa-compass", "far fa-copy", "far fa-copyright", "far fa-credit-card", "far fa-dizzy", "far fa-dot-circle", "far fa-edit", "far fa-envelope", "far fa-envelope-open", "far fa-eye", "far fa-eye-slash", "far fa-file", "far fa-file-alt", "far fa-file-archive", "far fa-file-audio", "far fa-file-code", "far fa-file-excel", "far fa-file-image", "far fa-file-pdf", "far fa-file-powerpoint", "far fa-file-video", "far fa-file-word", "far fa-flag", "far fa-flushed", "far fa-folder", "far fa-folder-open", "far fa-frown", "far fa-frown-open", "far fa-futbol", "far fa-gem", "far fa-grimace", "far fa-grin", "far fa-grin-alt", "far fa-grin-beam", "far fa-grin-beam-sweat", "far fa-grin-hearts", "far fa-grin-squint", "far fa-grin-squint-tears", "far fa-grin-stars", "far fa-grin-tears", "far fa-grin-tongue", "far fa-grin-tongue-squint", "far fa-grin-tongue-wink", "far fa-grin-wink", "far fa-hand-lizard", "far fa-hand-paper", "far fa-hand-peace", "far fa-hand-point-down", "far fa-hand-point-left", "far fa-hand-point-right", "far fa-hand-point-up", "far fa-hand-pointer", "far fa-hand-rock", "far fa-hand-scissors", "far fa-hand-spock", "far fa-handshake", "far fa-hdd", "far fa-heart", "far fa-hospital", "far fa-hourglass", "far fa-id-badge", "far fa-id-card", "far fa-image", "far fa-images", "far fa-keyboard", "far fa-kiss", "far fa-kiss-beam", "far fa-kiss-wink-heart", "far fa-laugh", "far fa-laugh-beam", "far fa-laugh-squint", "far fa-laugh-wink", "far fa-lemon", "far fa-life-ring", "far fa-lightbulb", "far fa-list-alt", "far fa-map", "far fa-meh", "far fa-meh-blank", "far fa-meh-rolling-eyes", "far fa-minus-square", "far fa-money-bill-alt", "far fa-moon", "far fa-newspaper", "far fa-object-group", "far fa-object-ungroup", "far fa-paper-plane", "far fa-pause-circle", "far fa-play-circle", "far fa-plus-square", "far fa-question-circle", "far fa-registered", "far fa-sad-cry", "far fa-sad-tear", "far fa-save", "far fa-share-square", "far fa-smile", "far fa-smile-beam", "far fa-smile-wink", "far fa-snowflake", "far fa-square", "far fa-star", "far fa-star-half", "far fa-sticky-note", "far fa-stop-circle", "far fa-sun", "far fa-surprise", "far fa-thumbs-down", "far fa-thumbs-up", "far fa-times-circle", "far fa-tired", "far fa-trash-alt", "far fa-user", "far fa-user-circle", "far fa-window-close", "far fa-window-maximize", "far fa-window-minimize", "far fa-window-restore", // Brands
"fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fab fa-acquisitions-incorporated", "fab fa-adn", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-airbnb", "fab fa-algolia", "fab fa-alipay", "fab fa-amazon", "fab fa-amazon-pay", "fab fa-amilia", "fab fa-android", "fab fa-angellist", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fab fa-artstation", "fab fa-asymmetrik", "fab fa-atlassian", "fab fa-audible", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fab fa-bandcamp", "fab fa-battle-net", "fab fa-behance", "fab fa-behance-square", "fab fa-bimobject", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fab fa-bootstrap", "fab fa-btc", "fab fa-buffer", "fab fa-buromobelexperte", "fab fa-buy-n-large", "fab fa-buysellads", "fab fa-canadian-maple-leaf", "fab fa-cc-amazon-pay", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fab fa-centos", "fab fa-chrome", "fab fa-chromecast", "fab fa-cloudflare", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fab fa-codepen", "fab fa-codiepie", "fab fa-confluence", "fab fa-connectdevelop", "fab fa-contao", "fab fa-cotton-bureau", "fab fa-cpanel", "fab fa-creative-commons", "fab fa-creative-commons-by", "fab fa-creative-commons-nc", "fab fa-creative-commons-nc-eu", "fab fa-creative-commons-nc-jp", "fab fa-creative-commons-nd", "fab fa-creative-commons-pd", "fab fa-creative-commons-pd-alt", "fab fa-creative-commons-remix", "fab fa-creative-commons-sa", "fab fa-creative-commons-sampling", "fab fa-creative-commons-sampling-plus", "fab fa-creative-commons-share", "fab fa-creative-commons-zero", "fab fa-critical-role", "fab fa-css3", "fab fa-css3-alt", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-d-and-d-beyond", "fab fa-dailymotion", "fab fa-dashcube", "fab fa-deezer", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fab fa-dev", "fab fa-deviantart", "fab fa-dhl", "fab fa-diaspora", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-ebay", "fab fa-edge", "fab fa-edge-legacy", "fab fa-elementor", "fab fa-ello", "fab fa-ember", "fab fa-empire", "fab fa-envira", "fab fa-erlang", "fab fa-ethereum", "fab fa-etsy", "fab fa-evernote", "fab fa-expeditedssl", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fab fa-fantasy-flight-games", "fab fa-fedex", "fab fa-fedora", "fab fa-figma", "fab fa-firefox", "fab fa-firefox-browser", "fab fa-first-order", "fab fa-first-order-alt", "fab fa-firstdraft", "fab fa-flickr", "fab fa-flipboard", "fab fa-fly", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fab fa-fulcrum", "fab fa-galactic-republic", "fab fa-galactic-senate", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fab fa-git", "fab fa-git-alt", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fab fa-glide", "fab fa-glide-g", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-pay", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-guilded", "fab fa-gulp", "fab fa-hacker-news", "fab fa-hacker-news-square", "fab fa-hackerrank", "fab fa-hips", "fab fa-hire-a-helper", "fab fa-hive", "fab fa-hooli", "fab fa-hornbill", "fab fa-hotjar", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fab fa-ideal", "fab fa-imdb", "fab fa-innosoft", "fab fa-instagram", "fab fa-instagram-square", "fab fa-instalod", "fab fa-intercom", "fab fa-internet-explorer", "fab fa-invision", "fab fa-ioxhost", "fab fa-itch-io", "fab fa-itunes", "fab fa-itunes-note", "fab fa-java", "fab fa-jedi-order", "fab fa-jenkins", "fab fa-jira", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fab fa-kaggle", "fab fa-keybase", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fab fa-korvue", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fab fa-leanpub", "fab fa-less", "fab fa-line", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fab fa-lyft", "fab fa-magento", "fab fa-mailchimp", "fab fa-mandalorian", "fab fa-markdown", "fab fa-mastodon", "fab fa-maxcdn", "fab fa-mdb", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fab fa-medrt", "fab fa-meetup", "fab fa-megaport", "fab fa-mendeley", "fab fa-microblog", "fab fa-microsoft", "fab fa-mix", "fab fa-mixcloud", "fab fa-mixer", "fab fa-mizuni", "fab fa-modx", "fab fa-monero", "fab fa-napster", "fab fa-neos", "fab fa-nimblr", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fab fa-octopus-deploy", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-old-republic", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-orcid", "fab fa-osi", "fab fa-page4", "fab fa-pagelines", "fab fa-palfed", "fab fa-patreon", "fab fa-paypal", "fab fa-penny-arcade", "fab fa-perbyte", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fab fa-phoenix-squadron", "fab fa-php", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-hat", "fab fa-pied-piper-pp", "fab fa-pied-piper-square", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fab fa-playstation", "fab fa-product-hunt", "fab fa-pushed", "fab fa-python", "fab fa-qq", "fab fa-quinscape", "fab fa-quora", "fab fa-r-project", "fab fa-raspberry-pi", "fab fa-ravelry", "fab fa-react", "fab fa-reacteurope", "fab fa-readme", "fab fa-rebel", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fab fa-redhat", "fab fa-renren", "fab fa-replyd", "fab fa-researchgate", "fab fa-resolving", "fab fa-rev", "fab fa-rocketchat", "fab fa-rockrms", "fab fa-rust", "fab fa-safari", "fab fa-salesforce", "fab fa-sass", "fab fa-schlix", "fab fa-scribd", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fab fa-servicestack", "fab fa-shirtsinbulk", "fab fa-shopify", "fab fa-shopware", "fab fa-simplybuilt", "fab fa-sistrix", "fab fa-sith", "fab fa-sketch", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fab fa-slideshare", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fab fa-soundcloud", "fab fa-sourcetree", "fab fa-speakap", "fab fa-speaker-deck", "fab fa-spotify", "fab fa-squarespace", "fab fa-stack-exchange", "fab fa-stack-overflow", "fab fa-stackpath", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fab fa-sticker-mule", "fab fa-strava", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fab fa-superpowers", "fab fa-supple", "fab fa-suse", "fab fa-swift", "fab fa-symfony", "fab fa-teamspeak", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fab fa-the-red-yeti", "fab fa-themeco", "fab fa-themeisle", "fab fa-think-peaks", "fab fa-tiktok", "fab fa-trade-federation", "fab fa-trello", "fab fa-tripadvisor", "fab fa-tumblr", "fab fa-tumblr-square", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-ubuntu", "fab fa-uikit", "fab fa-umbraco", "fab fa-uncharted", "fab fa-uniregistry", "fab fa-unity", "fab fa-unsplash", "fab fa-untappd", "fab fa-ups", "fab fa-usb", "fab fa-usps", "fab fa-ussunnah", "fab fa-vaadin", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fab fa-vuejs", "fab fa-watchman-monitoring", "fab fa-waze", "fab fa-weebly", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fab fa-whmcs", "fab fa-wikipedia-w", "fab fa-windows", "fab fa-wix", "fab fa-wizards-of-the-coast", "fab fa-wodu", "fab fa-wolf-pack-battalion", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fab fa-wpressr", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yammer", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yarn", "fab fa-yelp", "fab fa-yoast", "fab fa-youtube", "fab fa-youtube-square", "fab fa-zhihu", "far fa-envelopee"];
/* harmony default export */ __webpack_exports__["default"] = (font_awesome);

/***/ }),

/***/ "./blocks/icon/icon-picker/index.js":
/*!******************************************!*\
  !*** ./blocks/icon/icon-picker/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _gb_helper_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../gb-helper/font_awesome */ "./blocks/gb-helper/font_awesome.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

// import { TEXT_DOMAIN } from "../../../global/constants";
// import { labels as IconPacks } from "../../extensions/icon-inserter/data.json";
 // import { labels as IconPacks } from "../../gb-helper/font_awesome"

var Component = wp.element.Component;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    Popover = _wp$components.Popover,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    Icon = _wp$components.Icon;
var _lodash = lodash,
    map = _lodash.map,
    invoke = _lodash.invoke,
    get = _lodash.get,
    isEmpty = _lodash.isEmpty,
    isEqual = _lodash.isEqual;

var IconPicker = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(IconPicker, _Component);

  var _super = _createSuper(IconPicker);

  function IconPicker() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IconPicker);

    _this = _super.call(this);
    _this.state = {
      isVisible: false,
      selectedClassName: ""
    };
    _this.handleSelect = _this.handleSelect.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.toggleVisibility = _this.toggleVisibility.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(IconPicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = get(this.props, "value");

      if (!isEmpty(value)) {
        this.setState({
          selectedClassName: value
        });
      }
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(IconClassName) {
      var _this2 = this;

      var props = this.props;
      this.setState({
        selectedClassName: IconClassName
      }, function () {
        // invoking change listener safely
        invoke(props, "onChange", IconClassName);

        _this2.toggleVisibility(false);
      });
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.setState({
        isVisible: typeof state === "undefined" ? !this.state.isVisible : state
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          selectedClassName = _this$state.selectedClassName;
      var _this$props = this.props,
          _this$props$label = _this$props.label,
          label = _this$props$label === void 0 ? "Select Icon" : _this$props$label,
          _this$props$allowRese = _this$props.allowReset,
          allowReset = _this$props$allowRese === void 0 ? true : _this$props$allowRese;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "bb-icon-picker"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "bb-flex"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, " ", __(label, 'blocks-bakery')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, !isEmpty(selectedClassName) && allowReset && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
        isSmall: true,
        showTooltip: true,
        label: __("Reset Icon", 'blocks-bakery'),
        style: {
          marginLeft: 5
        },
        onClick: function onClick() {
          return _this3.handleSelect("");
        },
        key: selectedClassName
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Icon, {
        icon: "redo"
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Button, {
        isDefault: true,
        onClick: this.toggleVisibility
      }, !isEmpty(selectedClassName) ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        className: selectedClassName
      }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Icon, {
        icon: "list-view"
      }), isVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Popover, {
        expandOnMobile: true,
        headerTitle: __("Icons", 'blocks-bakery'),
        position: "top",
        className: "bb-icon-picker-popover",
        onFocusOutside: function onFocusOutside() {
          return _this3.setState({
            isVisible: false
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "bb-icon-picker-root",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "bb-icon-picker-grid"
      }, map(_gb_helper_font_awesome__WEBPACK_IMPORTED_MODULE_7__["default"], function (icon) {
        var className = "".concat(icon);
        var isActive = isEqual(className, _this3.state.selectedClassName);
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          className: "bb-icon ".concat(isActive ? "bb-active" : ""),
          onClick: function onClick() {
            return _this3.handleSelect(className);
          }
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
          className: className
        }));
      })))))))));
    }
  }]);

  return IconPicker;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (IconPicker);

/***/ }),

/***/ "./blocks/icon/main.js":
/*!*****************************!*\
  !*** ./blocks/icon/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/icon */ "./blocks/icons/icon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_picker_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-picker/index */ "./blocks/icon/icon-picker/index.js");
/* harmony import */ var _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gb-helper/color_palette */ "./blocks/gb-helper/color_palette.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);






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
    CheckboxControl = _wp$components.CheckboxControl,
    optgroup = _wp$components.optgroup,
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
registerBlockType('blocksbakery/icon', {
  title: __('Icon', 'blocks-bakery'),
  description: __('This Block is About for Icon', 'blocks-bakery'),
  // common, formatting, layout, widgets, embed
  category: 'blocks-bakery',
  icon: _icons_icon__WEBPACK_IMPORTED_MODULE_1__["default"].bb_icon,
  keywords: [__('icon', 'blocks-bakery'), __('list', 'blocks-bakery'), __('icon list', 'blocks-bakery')],
  supports: {
    html: false
  },
  "attributes": {
    //for icon wrapper all styling
    "text_align_wrapper": {
      "type": "html",
      "default": "center"
    },
    "width_per_px": {
      "type": "string",
      "default": "%"
    },
    "icon_selector": {
      "type": "string",
      "default": "fas fa-star"
    },
    "icon_size": {
      "type": "number",
      "default": 50
    },
    "icon_colors": {
      "type": "string",
      "default": "black"
    },
    "rotate_size": {
      "type": "number",
      "default": ""
    },
    "icon_element_bg": {
      "type": "string",
      "default": ""
    },
    "icon_element_padding": {
      "type": "number",
      "default": 25
    },
    "icon_border_radius": {
      "type": "number",
      "default": "50%"
    },
    "border_left_radius": {
      "type": "string",
      "default": 50
    },
    "border_right_radius": {
      "type": "string",
      "default": 50
    },
    "border_top_radius": {
      "type": "string",
      "default": 50
    },
    "border_bottom_radius": {
      "type": "string",
      "default": 50
    },
    "type_border": {
      "type": "string",
      "default": ""
    },
    "isAllBorder": {
      "type": "boolean",
      "default": true
    },
    "type_radius": {
      "type": "string",
      "default": ""
    },
    "img_border_radius_unit": {
      "type": "string",
      "default": "%"
    },
    "border_left_width": {
      "type": "number",
      "default": 1
    },
    "border_right_width": {
      "type": "number",
      "default": 1
    },
    "border_top_width": {
      "type": "number",
      "default": 1
    },
    "border_bottom_width": {
      "type": "number",
      "default": 1
    },
    "border_style": {
      "type": "string"
    },
    "icon_view": {
      "type": "text",
      "default": "defaultf"
    },
    "shape_for_icon": {
      "type": "string",
      "default": "circle"
    },
    "icon_link": {
      "type": "string",
      "default": "#"
    },
    "open_tab_option": {
      "type": "boolean",
      "default": 'false'
    },
    "open_tab": {
      "type": "string",
      "default": "NULL"
    },
    "rel_nofollow": {
      "type": "string",
      "default": "NULL"
    },
    "nofollow": {
      "type": "boolean",
      "default": "false"
    },
    "hover_icon_color": {
      "type": "string",
      "default": ""
    },
    "border_style_width": {
      "type": "string",
      "default": "none"
    },
    "hover_icon_bg_color": {
      "type": "string"
    },
    "display_second": {
      "type": "string",
      "default": "none"
    },
    //space the message 
    "for_stratch_image": {
      "type": "string",
      "default": "#6EC1E4"
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;

    var open_link = function open_link() {
      console.log("hello");
      var x = document.querySelector(".open_link");

      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }; //start Border-Radius


    var changeFlagForRadius = function changeFlagForRadius() {
      if (attributes.isAllRadius) {
        setAttributes({
          isAllRadius: false
        });
      } else {
        setAttributes({
          isAllRadius: true
        });
      }
    };

    if (attributes.isAllRadius === true) {
      console.log("true");

      if (attributes.type_radius === "left") {
        setAttributes({
          border_right_radius: attributes.border_left_radius,
          border_left_radius: attributes.border_left_radius,
          border_bottom_radius: attributes.border_left_radius,
          border_top_radius: attributes.border_left_radius
        });
      } else if (attributes.type_radius === "right") {
        setAttributes({
          border_right_radius: attributes.border_right_radius,
          border_left_radius: attributes.border_right_radius,
          border_bottom_radius: attributes.border_right_radius,
          border_top_radius: attributes.border_right_radius
        });
      } else if (attributes.type_radius === "top") {
        setAttributes({
          border_right_radius: attributes.border_top_radius,
          border_left_radius: attributes.border_top_radius,
          border_bottom_radius: attributes.border_top_radius,
          border_top_radius: attributes.border_top_radius
        });
      } else if (attributes.type_radius === "bottom") {
        setAttributes({
          border_right_radius: attributes.border_bottom_radius,
          border_left_radius: attributes.border_bottom_radius,
          border_bottom_radius: attributes.border_bottom_radius,
          border_top_radius: attributes.border_bottom_radius
        });
      }
    } else if (attributes.isAllRadius === false) {
      console.log("false");
      setAttributes({
        border_top_radius: attributes.border_top_radius,
        border_right_radius: attributes.border_right_radius,
        border_left_radius: attributes.border_left_radius,
        border_bottom_radius: attributes.border_bottom_radius
      });
    } //end border radius
    //start border-radis
    // Change Flag


    var changeFlagForBorder = function changeFlagForBorder() {
      if (attributes.isAllBorder) {
        setAttributes({
          isAllBorder: false
        });
      } else {
        setAttributes({
          isAllBorder: true
        });
      }
    };

    if (attributes.isAllBorder) {
      if (attributes.type_border === "left") {
        setAttributes({
          border_top_width: attributes.border_left_width,
          border_right_width: attributes.border_left_width,
          border_left_width: attributes.border_left_width,
          border_bottom_width: attributes.border_left_width
        });
        console.log("left", attributes.border_left_width);
      } else if (attributes.type_border === "right") {
        setAttributes({
          border_top_width: attributes.border_right_width,
          border_right_width: attributes.border_right_width,
          border_left_width: attributes.border_right_width,
          border_bottom_width: attributes.border_right_width
        });
        console.log("right", attributes.border_right_width);
      } else if (attributes.type_border === "top") {
        setAttributes({
          border_top_width: attributes.border_top_width,
          border_right_width: attributes.border_top_width,
          border_left_width: attributes.border_top_width,
          border_bottom_width: attributes.border_top_width
        });
        console.log("top", attributes.border_top_width);
      } else if (attributes.type_border === "bottom") {
        setAttributes({
          border_top_width: attributes.border_bottom_width,
          border_right_width: attributes.border_bottom_width,
          border_left_width: attributes.border_bottom_width,
          border_bottom_width: attributes.border_bottom_width
        });
        console.log("bottom", attributes.border_bottom_width);
      }
    } //end border-radius
    //for clearing border 


    var img_radius_PX = document.getElementById("img_radius_px");
    var img_radius_PER = document.getElementById("img_radius_per");

    var imgBorderPX = function imgBorderPX() {
      img_radius_PX.style.textDecoration = "underline";
      img_radius_PER.style.textDecoration = "none";
      setAttributes({
        img_height: null,
        img_border_radius_unit: 'px'
      });
    };

    var imgBorderPER = function imgBorderPER() {
      img_radius_PX.style.textDecoration = "none";
      img_radius_PER.style.textDecoration = "underline";
      setAttributes({
        img_height: null,
        img_border_radius_unit: '%'
      });
    };

    var alignCenter = function alignCenter() {
      props.setAttributes({
        text_align_wrapper: 'center'
      });
    };

    var alignLeft = function alignLeft() {
      props.setAttributes({
        text_align_wrapper: 'left'
      });
    };

    var alignRight = function alignRight() {
      props.setAttributes({
        text_align_wrapper: 'right'
      });
    };

    var laptop = function laptop() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    };

    var tablet = function tablet() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    };

    var smartphone = function smartphone() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    };

    var sizelaptop = function sizelaptop() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    };

    var sizetablet = function sizetablet() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    };

    var sizesmartphone = function sizesmartphone() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    };

    var rotatelaptop = function rotatelaptop() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Device');
    };

    var rotatetablet = function rotatetablet() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
    };

    var rotatesmartphone = function rotatesmartphone() {
      wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
    };

    var G = function G(val) {
      if (val === 'defaultf') {
        var w = document.getElementsByClassName("d")[0];
        var x = document.getElementById("framed_straced");
        x.style.display = "none"; //    w.style.backgroundColor="transparent"

        props.setAttributes({
          icon_element_bg: "transparent"
        });
        props.setAttributes({
          border_style_width: "none"
        });
        props.setAttributes({
          display_second: "none"
        });
        console.log(w.style.backgroundColor = "transparent");
      } else if (val === 'stracked') {
        var x = document.getElementById("framed_straced");
        x.style.display = "block";
        var w = document.getElementsByClassName("d")[0]; // var qw = document.getElementById("bb_stracked");
        // qw.style.display="block";
        // w.style.backgroundColor=props.attributes.icon_element_bg;

        props.setAttributes({
          icon_element_bg: props.attributes.for_stratch_image
        });
        props.setAttributes({
          border_top_radius: props.attributes.border_top_radius
        });
        props.setAttributes({
          border_right_radius: props.attributes.border_right_radius
        });
        props.setAttributes({
          border_bottom_radius: props.attributes.border_bottom_radius
        });
        props.setAttributes({
          border_left_radius: props.attributes.border_left_radius
        });
        props.setAttributes({
          border_style_width: "none"
        });
        props.setAttributes({
          display_second: "block"
        });
      } else if (val === 'framed') {
        var w = document.getElementsByClassName("d")[0];
        var x = document.getElementById("framed_straced");
        x.style.display = "block";
        props.setAttributes({
          border_style_width: "solid"
        }); // w.style.backgroundColor="transparent"

        props.setAttributes({
          icon_element_bg: "transparent"
        }); // var qw = document.getElementById("bb_stracked");
        // qw.style.display="block";

        props.setAttributes({
          border_top_width: props.attributes.border_top_width
        });
        props.setAttributes({
          border_right_width: props.attributes.border_right_width
        });
        props.setAttributes({
          border_bottom_width: props.attributes.border_bottom_width
        });
        props.setAttributes({
          border_left_width: props.attributes.border_left_width
        });
        props.setAttributes({
          display_second: "block"
        });
      }
    };

    var G1 = function G1(new_val) {
      if (new_val === "circle") {
        props.setAttributes({
          border_top_radius: 50
        });
        props.setAttributes({
          border_right_radius: 50
        });
        props.setAttributes({
          border_bottom_radius: 50
        });
        props.setAttributes({
          border_left_radius: 50
        });
      } else {
        props.setAttributes({
          border_top_radius: 0
        });
        props.setAttributes({
          border_right_radius: 0
        });
        props.setAttributes({
          border_bottom_radius: 0
        });
        props.setAttributes({
          border_left_radius: 0
        });
      }
    }; //For hover on Icon


    var color_hover_enter = function color_hover_enter(e) {
      var x = e.target.style; // var x =  document.querySelector(".bb_icon_selector")

      x.color = props.attributes.hover_icon_color;
      x.backgroundColor = props.attributes.hover_icon_bg_color;
    };

    var color_hover_remove = function color_hover_remove(e) {
      // var x =  document.querySelector(".bb_icon_selector")
      var x = e.target.style;
      x.color = props.attributes.icon_colors;
      x.backgroundColor = props.attributes.icon_element_bg;
    }; //End of hover..
    //Hover on Background.......


    var color_bg_wrapper_hover_enter = function color_bg_wrapper_hover_enter(e) {
      e.target.style.backgroundColor = props.attributes.hover_icon_bg_color; // var x = document.querySelector(".bb_icon_element");
      // x.backgroundColor = props.attributes.hover_icon_bg_color;
      // props.setAttributes({backgroundColor:props.attributes.hover_icon_bg_color})

      console.log("enter on backgorund");
    };

    var color_bg_wrapper_hover_remove = function color_bg_wrapper_hover_remove(e) {
      var x = e.target.style;
      x.backgroundColor = props.attributes.icon_element_bg; // props.setAttributes({icon_element_bg:props.attributes.icon_element_bg})

      console.log("leave on background");
    };

    var styles = {
      bb_icon_container: {
        width: "100%"
      },
      bb_icon_wrapper: {
        textAlign: props.attributes.text_align_wrapper
      },
      bb_icon_element: {
        fontSize: props.attributes.icon_size + "px",
        display: "inline-block",
        transition: "all .3s",
        backgroundColor: props.attributes.icon_element_bg,
        textAlign: "center",
        padding: props.attributes.icon_element_padding,
        borderRadius: attributes.border_top_radius + attributes.img_border_radius_unit + " " + attributes.border_right_radius + attributes.img_border_radius_unit + " " + attributes.border_bottom_radius + attributes.img_border_radius_unit + " " + attributes.border_left_radius + attributes.img_border_radius_unit + " ",
        borderTopWidth: attributes.border_top_width + "px",
        borderRightWidth: attributes.border_right_width + "px",
        borderBottomWidth: attributes.border_bottom_width + "px ",
        borderLeftWidth: attributes.border_left_width + "px ",
        borderColor: props.attributes.icon_colors,
        borderStyle: props.attributes.border_style_width
      },
      bb_icon_selector: {
        width: "1em",
        height: "1em",
        position: "relative",
        display: "block",
        transform: "rotate(" + props.attributes.rotate_size + "deg)",
        color: props.attributes.icon_colors
      },
      bb_icon_wrapper_icon: {
        textDecoration: "none"
      }
    };
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Icon")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bb_element_icon",
      style: {
        display: props.setAttributes.element_icon_content
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_icon_picker_index__WEBPACK_IMPORTED_MODULE_3__["default"], {
      allowReset: false,
      value: props.attributes.icon_selector,
      onChange: function onChange(newIcon) {
        return props.setAttributes({
          icon_selector: newIcon
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
      style: {
        margin: "20px 0"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "View")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      options: [{
        label: 'Default',
        value: 'defaultf'
      }, {
        label: 'Stacked',
        value: 'stracked'
      }, {
        label: 'Framed',
        value: 'framed'
      }],
      value: props.attributes.icon_view,
      onChange: function onChange(new_val) {
        props.setAttributes({
          icon_view: new_val
        });
        G(new_val);
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "framed_straced",
      style: {
        display: "none"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, {
      style: {
        margin: "20px 0"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Shape")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      options: [{
        label: 'Circle',
        value: 'circle'
      }, {
        label: 'Squre',
        value: 'squre'
      }],
      value: props.attributes.shape_for_icon,
      onChange: function onChange(new_val) {
        props.setAttributes({
          shape_for_icon: new_val
        });
        G1(new_val);
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Link"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        width: "85%"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(TextControl, {
      value: props.attributes.icon_link,
      onChange: function onChange(new_val) {
        props.setAttributes({
          icon_link: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "",
      style: {
        width: "15%",
        border: "1px solid black",
        height: "31px",
        textAlign: "center",
        lineHeight: "29px",
        cursor: "pointer"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
      class: "eicon-cog",
      "aria-hidden": "true",
      onClick: open_link
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "open_link",
      style: {
        display: "none"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: "open in new window",
      checked: props.attributes.open_tab_option,
      onChange: function onChange(value) {
        if (value === false) {
          props.setAttributes({
            open_tab: "_self",
            open_tab_option: false
          });
        } else {
          props.setAttributes({
            open_tab: "_blank",
            open_tab_option: true
          });
        }
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(CheckboxControl, {
      label: "Add nofollow",
      checked: props.attributes.nofollow,
      onChange: function onChange(value) {
        if (value === false) {
          props.setAttributes({
            rel_nofollow: null,
            nofollow: false
          });
        } else {
          props.setAttributes({
            rel_nofollow: "nofollow",
            nofollow: true
          });
        }
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Alignment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: alignLeft,
      icon: "editor-alignleft"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: alignCenter,
      icon: "editor-aligncenter"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: alignRight,
      icon: "editor-alignright"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Responsive"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
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
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Style"),
      initialOption: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Primary Icon Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.icon_colors
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_4__["default"],
      onChange: function onChange(new_val) {
        props.setAttributes({
          icon_colors: new_val
        });
      },
      value: props.attributes.icon_colors
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "bb_stracked",
      style: {
        display: props.attributes.display_second
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Secondory Icon Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.icon_element_bg
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_4__["default"],
      onChange: function onChange(new_val) {
        props.setAttributes({
          icon_element_bg: new_val
        });
      },
      value: props.attributes.icon_element_bg
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: sizelaptop,
      icon: "laptop"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: sizetablet,
      icon: "tablet"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: sizesmartphone,
      icon: "smartphone"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      min: 0,
      max: 300,
      initialPosition: 50,
      value: props.attributes.icon_size,
      onChange: function onChange(new_val) {
        props.setAttributes({
          icon_size: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      label: "Padding",
      initialPosition: 0,
      min: 0,
      max: 100,
      value: props.attributes.icon_element_padding,
      onChange: function onChange(new_val) {
        props.setAttributes({
          icon_element_padding: new_val
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Rotate"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: rotatelaptop,
      icon: "laptop"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: rotatetablet,
      icon: "tablet"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      style: {
        cursor: 'pointer'
      },
      onClick: rotatesmartphone,
      icon: "smartphone"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RangeControl, {
      min: 0,
      max: 360,
      initialPosition: 0,
      value: props.attributes.rotate_size,
      onChange: function onChange(new_val) {
        props.setAttributes({
          rotate_size: new_val
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "show_in_strach"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Border Width"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
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
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: 'flex',
        fontSize: '10px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "TOP",
      onChange: function onChange(e) {
        return setAttributes({
          border_top_width: e,
          type_border: "top"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_top_width
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "RIGHT",
      onChange: function onChange(e) {
        return setAttributes({
          border_right_width: e,
          type_border: "right"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_right_width
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "BOTTOM",
      onChange: function onChange(e) {
        return setAttributes({
          border_bottom_width: e,
          type_border: "bottom"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_bottom_width
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "LEFT",
      onChange: function onChange(e) {
        return setAttributes({
          border_left_width: e,
          type_border: "left"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_left_width
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      onClick: changeFlagForBorder,
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15px',
        marginLeft: '10px',
        width: '150px',
        height: '30px',
        border: '1px solid darkslategray'
      },
      icon: "admin-links"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "show_in_framed"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, " Border Radius "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
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
      id: "img_radius_px",
      onClick: imgBorderPX,
      style: {
        textDecoration: "underline",
        padding: 0,
        boxShadow: "none",
        textTransform: "uppercase",
        fontSize: 10,
        marginRight: 5
      }
    }, "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      id: "img_radius_per",
      onClick: imgBorderPER,
      style: {
        padding: 0,
        boxShadow: "none",
        textTransform: "uppercase",
        fontSize: 10,
        marginRight: 5
      }
    }, "%"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: 'flex',
        fontSize: '10px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "TOP",
      onChange: function onChange(e) {
        return setAttributes({
          border_top_radius: e,
          type_radius: "top"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_top_radius
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "RIGHT",
      onChange: function onChange(e) {
        return setAttributes({
          border_right_radius: e,
          type_radius: "right"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_right_radius
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "BOTTOM",
      onChange: function onChange(e) {
        return setAttributes({
          border_bottom_radius: e,
          type_radius: "bottom"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_bottom_radius
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["__experimentalNumberControl"], {
      label: "LEFT",
      onChange: function onChange(e) {
        return setAttributes({
          border_left_radius: e,
          type_radius: "left"
        });
      },
      isDragEnabled: true,
      isShiftStepEnabled: true,
      shiftStep: 1,
      step: 1,
      value: attributes.border_left_radius
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      onClick: changeFlagForRadius,
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15px',
        marginLeft: '10px',
        width: '150px',
        height: '30px',
        border: '1px solid darkslategray'
      },
      icon: "admin-links"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __("Hover Color")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Primary Icon Background Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.hover_icon_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_4__["default"],
      onChange: function onChange(new_val) {
        props.setAttributes({
          hover_icon_color: new_val
        });
      },
      value: props.attributes.hover_icon_color
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "bb_stracked",
      style: {
        display: props.attributes.display_second
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Secondory Icon Background Color", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
      style: {
        backgroundColor: props.attributes.hover_icon_bg_color
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      colors: _gb_helper_color_palette__WEBPACK_IMPORTED_MODULE_4__["default"],
      onChange: function onChange(new_val) {
        props.setAttributes({
          hover_icon_bg_color: new_val
        });
      },
      value: props.attributes.hover_icon_bg_color
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("br", null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bb_icon_container ",
      style: styles.bb_icon_container
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bb_icon_wrapper",
      style: styles.bb_icon_wrapper
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "bb_icon_element ",
      style: styles.bb_icon_element,
      onMouseOver: color_bg_wrapper_hover_enter,
      onMouseLeave: color_bg_wrapper_hover_remove
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "bb_icon_wrapper_inner",
      style: styles.bb_icon_wrapper_icon,
      href: props.attributes.icon_link,
      target: props.attributes.open_tab,
      rel: props.attributes.rel_nofollow
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: props.attributes.icon_selector + " bb_icon_selector",
      style: styles.bb_icon_selector,
      onMouseOver: color_hover_enter,
      onMouseLeave: color_hover_remove
    }))))))];
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./blocks/icons/icon.js":
/*!******************************!*\
  !*** ./blocks/icons/icon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var bb_icon = {
  bb_icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "512",
    height: "512",
    enableBackground: "new 0 0 512 512",
    viewBox: "0 0 512 512"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "red",
    d: "M472.208 201.712c9.271-9.037 12.544-22.3 8.544-34.613-4.001-12.313-14.445-21.118-27.257-22.979l-112.03-16.279a6.75 6.75 0 01-5.084-3.694L286.28 22.632c-5.729-11.61-17.331-18.822-30.278-18.822s-24.549 7.212-30.278 18.822l-50.101 101.516a6.756 6.756 0 01-5.085 3.694L58.51 144.12c-12.812 1.861-23.255 10.666-27.257 22.979-4.002 12.313-.728 25.576 8.544 34.613l81.065 79.019a6.755 6.755 0 011.942 5.978l-19.137 111.576c-2.188 12.761 2.958 25.414 13.432 33.024 10.474 7.612 24.102 8.595 35.56 2.572l100.201-52.679a6.751 6.751 0 016.286 0l100.202 52.679c4.984 2.62 10.377 3.915 15.744 3.914 6.97 0 13.896-2.184 19.813-6.487 10.474-7.611 15.621-20.265 13.432-33.024L389.2 286.708a6.758 6.758 0 011.942-5.978l81.066-79.018zm-109.629 89.564l19.137 111.578c.64 3.734-1.665 5.863-2.686 6.604-1.022.74-3.76 2.277-7.112.513l-100.202-52.679a33.76 33.76 0 00-31.424-.001l-100.201 52.678c-3.354 1.763-6.091.228-7.112-.513s-3.327-2.87-2.686-6.604l19.137-111.576a33.755 33.755 0 00-9.711-29.886l-81.065-79.019c-2.713-2.646-2.099-5.723-1.708-6.923.389-1.201 1.702-4.052 5.451-4.596l112.027-16.279a33.76 33.76 0 0025.424-18.471l50.101-101.516c1.677-3.397 4.793-3.764 6.056-3.764 1.261 0 4.377.366 6.055 3.764v.001l50.101 101.516a33.754 33.754 0 0025.422 18.471l112.029 16.279c3.749.544 5.061 3.395 5.451 4.596.39 1.201 1.005 4.279-1.709 6.923l-81.065 79.019a33.754 33.754 0 00-9.71 29.885zM413.783 22.625c-6.036-4.384-14.481-3.046-18.865 2.988l-14.337 19.732c-4.384 6.034-3.047 14.481 2.988 18.865a13.456 13.456 0 007.928 2.58c4.177 0 8.295-1.931 10.937-5.567l14.337-19.732c4.384-6.035 3.047-14.482-2.988-18.866zM131.36 45.265l-14.337-19.732c-4.383-6.032-12.829-7.37-18.865-2.988-6.034 4.384-7.372 12.831-2.988 18.865l14.337 19.732a13.485 13.485 0 0010.939 5.569c2.753 0 5.531-.839 7.927-2.581 6.034-4.383 7.372-12.83 2.987-18.865zM49.552 306.829c-2.305-7.093-9.924-10.976-17.019-8.671l-23.197 7.538c-7.095 2.305-10.976 9.926-8.671 17.019 1.854 5.709 7.149 9.337 12.842 9.337 1.383 0 2.79-.215 4.177-.666l23.197-7.538c7.094-2.305 10.976-9.924 8.671-17.019zM256.005 456.786c-7.459 0-13.506 6.047-13.506 13.506v24.392c0 7.459 6.047 13.506 13.506 13.506 7.459 0 13.506-6.047 13.506-13.506v-24.392c0-7.46-6.046-13.506-13.506-13.506zM502.664 305.715l-23.197-7.538c-7.092-2.303-14.714 1.577-17.019 8.672-2.305 7.095 1.576 14.714 8.671 17.019l23.197 7.538a13.51 13.51 0 004.176.664c5.694 0 10.989-3.629 12.843-9.337 2.305-7.094-1.577-14.713-8.671-17.018z",
    "data-original": "#000000"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (bb_icon);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

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