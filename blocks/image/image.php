<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_IMAGE')) {
    /**
     * BB_IMAGE
     *
     * @category  Blocks_Bakery
     * @author    Essa Mamdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc BSD Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_IMAGE
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'imageBlockregister' ));
        }
        /**
         * Advanced_heading_block_register
         *
         * @return void
         */
        public function imageBlockregister()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'bb-image',
                plugins_url('../../build/image/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-components', 'wp-editor' )
            );
            
            wp_register_style(
                'bb-image-style',
                plugins_url('../../build/image/editor.css', __FILE__),
                array( 'wp-edit-blocks' )
            );
            // wp_register_style(
            //     'bb-image-lightbox-style',
            //     plugins_url('../../build/image/lightbox.css', __FILE__),
            //     array( 'wp-edit-blocks' )
            // );
            // wp_register_style(
            //     'bb-image-lightbox-script',
            //     plugins_url('../../build/image/lightbox.js', __FILE__),
            //     array( 'wp-edit-blocks' )
            // );

      

            wp_register_style(
                'gb_familycss',
                'https://fonts.googleapis.com/css?family=ABeeZee|Abel|Abhaya+Libre|Abril+Fatface|Aclonica| 
                Acme|Actor|Adamina|Advent+Pro|Aguafina+Script|Akaya+Kanadaka|Akaya+Telivigala|Akronim|Aladin|Alata|Alatsi|Aldrich|Alef|Alegreya|Alegreya+SC|Allerta+Stencil|Allura|Almarai|Almendra|Almendra+Display|Almendra+SC|Amarante|Amaranth|Amatic+SC|Amethysta|Amiko|Amiri|Amita|Anaheim|Andada|Andika|Andika+New+Basic|Angkor|Annie+Use+Your+Telescope|Anonymous+Pro|Antic|Antic+Didone|Antic+Slab|Anton|Antonio|Arapey|Arbutus|Arbutus+Slab|Architects+Daughter|Archivo|Archivo+Black|Archivo+Narrow|Aref+Ruqaa|Arima+Madurai|Arimo|Arizonia|Armata|Arsenal|Artifika|Arvo|Arya|Asap|Asap+Condensed|Asar|Asset|Assistant|Astloch|Asul|Athiti|Atma|Atomic+Age|Aubrey|Audiowide|Autour+One|Average|Average+Sans|Averia+Gruesa+Libre|Averia+Libre|Averia+Sans+Libre|Averia+Serif+Libre|B612|B612+Mono|Bad+Script|Bahiana|Bahianita|Bai+Jamjuree|Ballet|Baloo+2|Baloo+Bhai+2|Baloo+Bhaina+2|Baloo+Chettan+2|Baloo+Da+2|Baloo+Paaji+2|Baloo+Tamma+2|Baloo+Tammudu+2|Baloo+Thambi+2|Balsamiq+Sans|Balthazar|Bangers|Barlow|Barlow+Condensed|Barlow+Semi+Condensed|Barriecito|Barrio|Basic|Baskervville|Battambang|Baumans|Bayon|Be+Vietnam|Bebas+Neue|Belgrano|Bellefair|Belleza|Bellota|Bellota+Text|BenchNine|Benne|Bentham|Berkshire+Swash|Beth+Ellen|Bevan|Big+Shoulders+Display|Big+Shoulders+Inline+Display|Big+Shoulders+Inline+Text|Big+Shoulders+Stencil+Display|Big+Shoulders+Stencil+Text|Big+Shoulders+Text|Bigelow+Rules|Bigshot+One|Bilbo|Bilbo+Swash+Caps|BioRhyme|BioRhyme+Expanded|Biryani|Bitter|Black+And+White+Picture|Black+Han+Sans|Black+Ops+One|Blinker|Bodoni+Moda|Bokor|Bona+Nova|Bonbon|Boogaloo|Bowlby+One|Bowlby+One+SC|Brawler|Bree+Serif|Brygada+1918|Bubblegum+Sans|Bubbler+One|Buda|Buenard|Bungee|Bungee+Hairline|Bungee+Inline|Bungee+Outline|Bungee+Shade|Butcherman|Butterfly+Kids|Cabin|Cabin+Condensed|Cabin+Sketch|Caesar+Dressing|Cagliostro|Cairo|Caladea|Calistoga|Calligraffitti|Cambay|Cambo|Candal|Cantarell|Cantata+One|Cantora+One|Capriola|Cardo|Carme|Carrois+Gothic|Carrois+Gothic+SC|Carter+One|Castoro|Catamaran|Caudex|Caveat|Caveat+Brush|Cedarville+Cursive|Ceviche+One|Chakra+Petch|Changa|Changa+One|Chango|Charm|Charmonman|Chathura|Chau+Philomene+One|Chela+One|Chelsea+Market|Chenla|Cherry+Cream+Soda|Cherry+Swash|Chewy|Chicle|Chilanka|Chivo|Chonburi|Cinzel|Cinzel+Decorative|Clicker+Script|Coda|Coda+Caption|Codystar|Coiny|Combo|Comfortaa|Comic+Neue|Coming+Soon|Commissioner|Concert+One|Condiment|Content|Contrail+One|Convergence|Cookie|Copse|Corben|Cormorant|Cormorant+Garamond|Cormorant+Infant|Cormorant+SC|Cormorant+Unicase|Cormorant+Upright|Courgette|Courier+Prime|Cousine|Coustard|Covered+By+Your+Grace|Crafty+Girls|Creepster|Crete+Round|Crimson+Pro|Crimson+Text|Croissant+One|Crushed|Cuprum|Cute+Font|Cutive|Cutive+Mono|DM+Mono|DM+Sans|DM+Serif+Display|DM+Serif+Text|Damion|Dancing+Script|Dangrek|Darker+Grotesque|David+Libre|Dawning+of+a+New+Day|Days+One|Dekko|Dela+Gothic+One|Delius|Delius+Swash+Caps|Delius+Unicase|Della+Respira|Denk+One|Devonshire|Dhurjati|Didact+Gothic|Diplomata|Diplomata+SC|Do+Hyeon|Dokdo|Domine|Donegal+One|Doppio+One|Dorsa|Dosis|DotGothic16|Dr+Sugiyama|Duru+Sans|Dynalight|EB+Garamond|Eagle+Lake|East+Sea+Dokdo|Eater|Economica|Eczar|El+Messiri|Electrolize|Elsie|Elsie+Swash+Caps|Emblema+One|Emilys+Candy|Encode+Sans|Encode+Sans+Condensed|Encode+Sans+Expanded|Encode+Sans+SC|Encode+Sans+Semi+Condensed|Encode+Sans+Semi+Expanded|Engagement|Englebert|Enriqueta|Epilogue|Erica+One|Esteban|Euphoria+Script|Ewert|Exo|Exo+2|Expletus+Sans|Fahkwang|Fanwood+Text|Farro|Farsan|Fascinate|Fascinate+Inline|Faster+One|Fasthand|Fauna+One|Faustina|Federant|Federo|Felipa|Fenix|Festive|Finger+Paint|Fira+Code|Fira+Mono|Fira+Sans|Fira+Sans+Condensed|Fira+Sans+Extra+Condensed|Fjalla+One|Fjord+One|Flamenco|Flavors|Fondamento|Fontdiner+Swanky|Forum|Francois+One|Frank+Ruhl+Libre|Fraunces|Freckle+Face|Fredericka+the+Great|Fredoka+One|Freehand|Fresca|Frijole|Fruktur|Fugaz+One|Fuggles|GFS+Didot|GFS+Neohellenic|Gabriela|Gaegu|Gafata|Galada|Galdeano|Galindo|Gamja+Flower|Gayathri|Gelasio|Gentium+Basic|Gentium+Book+Basic|Geo|Geostar|Geostar+Fill|Germania+One|Gidugu|Gilda+Display|Girassol|Give+You+Glory|Glass+Antiqua|Glegoo|Gloria+Hallelujah|Goblin+One|Gochi+Hand|Goldman|Gorditas|Gothic+A1|Gotu|Goudy+Bookletter+1911|Graduate|Grand+Hotel|Grandstander|Gravitas+One|Great+Vibes|Grenze|Grenze+Gotisch|Griffy|Gruppo|Gudea|Gugi|Gupter|Gurajada|Habibi|Hachi+Maru+Pop|Halant|Hammersmith+One|Hanalei|Hanalei+Fill|Handlee|Hanuman|Happy+Monkey|Harmattan|Headland+One|Heebo|Henny+Penny|Hepta+Slab|Herr+Von+Muellerhoff|Hi+Melody|Hind|Hind+Guntur|Hind+Madurai|Hind+Siliguri|Hind+Vadodara|Holtwood+One+SC|Homemade+Apple|Homenaje|IBM+Plex+Mono|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif|IM+Fell+DW+Pica|IM+Fell+DW+Pica+SC|IM+Fell+Double+Pica|IM+Fell+Double+Pica+SC|IM+Fell+English|IM+Fell+English+SC|IM+Fell+French+Canon|IM+Fell+French+Canon+SC|IM+Fell+Great+Primer|IM+Fell+Great+Primer+SC|Ibarra+Real+Nova|Iceberg|Iceland|Imbue|Imprima|Inconsolata|Inder|Indie+Flower|Inika|Inknut+Antiqua|Inria+Sans|Inria+Serif|Inter|Irish+Grover|Istok+Web|Italiana|Italianno|Itim|Jacques+Francois|Jacques+Francois+Shadow|Jaldi|JetBrains+Mono|Jim+Nightshade|Jockey+One|Jolly+Lodger|Jomhuria|Jomolhari|Josefin+Sans|Josefin+Slab|Jost|Joti+One|Jua|Judson|Julee|Julius+Sans+One|Junge|Jura|Just+Another+Hand|Just+Me+Again+Down+Here|K2D|Kadwa|Kalam|Kameron|Kanit|Kantumruy|Karantina|Karla|Karma|Katibeh|Kaushan+Script|Kavivanar|Kavoon|Kdam+Thmor|Keania+One|Kelly+Slab|Kenia|Khand|Khmer|Khula|Kirang+Haerang|Kite+One|Kiwi+Maru|Knewave|KoHo|Kodchasan|Kosugi|Kosugi+Maru|Kotta+One|Koulen|Kranky|Kreon|Kristi|Krona+One|Krub|Kufam|Kulim+Park|Kumar+One|Kumar+One+Outline|Kumbh+Sans|Kurale|La+Belle+Aurore|Lacquer|Laila|Lakki+Reddy|Lalezar|Lancelot|Langar|Lateef|Lato|League+Script|Leckerli+One|Ledger|Lekton|Lemon|Lemonada|Lexend|Lexend+Deca|Lexend+Exa|Lexend+Giga|Lexend+Mega|Lexend+Peta|Lexend+Tera|Lexend+Zetta|Libre+Barcode+128|Libre+Barcode+128+Text|Libre+Barcode+39|Libre+Barcode+39+Extended|Libre+Barcode+39+Extended+Text|Libre+Barcode+39+Text|Libre+Barcode+EAN13+Text|Libre+Baskerville|Libre+Caslon+Display|Libre+Caslon+Text|Libre+Franklin|Life+Savers|Lilita+One|Lily+Script+One|Limelight|Linden+Hill|Literata|Liu+Jian+Mao+Cao|Livvic|Lobster|Lobster+Two|Londrina+Outline|Londrina+Shadow|Londrina+Sketch|Londrina+Solid|Long+Cang|Lora|Love+Ya+Like+A+Sister|Loved+by+the+King|Lovers+Quarrel|Luckiest+Guy|Lusitana|Lustria|M+PLUS+1p|M+PLUS+Rounded+1c|Ma+Shan+Zheng|Macondo|Macondo+Swash+Caps|Mada|Magra|Maiden+Orange|Maitree|Major+Mono+Display|Mako|Mali|Mallanna|Mandali|Manjari|Manrope|Mansalva|Manuale|Marcellus|Marcellus+SC|Marck+Script|Margarine|Markazi+Text|Marko+One|Marmelad|Martel|Martel+Sans|Marvel|Mate|Mate+SC|Maven+Pro|McLaren|Meddon|MedievalSharp|Medula+One|Meera+Inimai|Megrim|Meie+Script|Merienda|Merienda+One|Merriweather|Merriweather+Sans|Metal|Metal+Mania|Metamorphous|Metrophobic|Michroma|Milonga|Miltonian|Miltonian+Tattoo|Mina|Miniver|Miriam+Libre|Mirza|Miss+Fajardose|Mitr|Modak|Modern+Antiqua|Mogra|Molengo|Molle|Monda|Monofett|Monoton|Monsieur+La+Doulaise|Montaga|Montez|Montserrat|Montserrat+Alternates|Montserrat+Subrayada|Moul|Moulpali|Mountains+of+Christmas|Mouse+Memoirs|Mr+Bedfort|Mr+Dafoe|Mr+De+Haviland|Mrs+Saint+Delafield|Mrs+Sheppards|Mukta|Mukta+Mahee|Mukta+Malar|Mukta+Vaani|Mulish|MuseoModerno|Mystery+Quest|NTR|Nanum+Brush+Script|Nanum+Gothic|Nanum+Gothic+Coding|Nanum+Myeongjo|Nanum+Pen+Script|Nerko+One|Neucha|Neuton|New+Rocker|New+Tegomin|News+Cycle|Newsreader|Niconne|Niramit|Nixie+One|Nobile|Nokora|Norican|Nosifer|Notable|Nothing+You+Could+Do|Noticia+Text|Noto+Sans|Noto+Sans+HK|Noto+Sans+JP|Noto+Sans+KR|Noto+Sans+SC|Noto+Sans+TC|Noto+Serif|Noto+Serif+JP|Noto+Serif+KR|Noto+Serif+SC|Noto+Serif+TC|Nova+Cut|Nova+Flat|Nova+Mono|Nova+Oval|Nova+Round|Nova+Script|Nova+Slim|Nova+Square|Numans|Nunito|Nunito+Sans|Odibee+Sans|Odor+Mean+Chey|Offside|Oi|Old+Standard+TT|Oldenburg|Oleo+Script|Oleo+Script+Swash+Caps|Open+Sans|Open+Sans+Condensed|Oranienbaum|Orbitron|Oregano|Orelega+One|Orienta|Original+Surfer|Oswald|Otomanopee+One|Over+the+Rainbow|Overlock|Overlock+SC|Overpass|Overpass+Mono|Ovo|Oxanium|Oxygen|Oxygen+Mono|PT+Mono|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|PT+Serif|PT+Serif+Caption|Pacifico|Padauk|Palanquin|Palanquin+Dark|Pangolin|Paprika|Parisienne|Passero+One|Passion+One|Pathway+Gothic+One|Patrick+Hand|Patrick+Hand+SC|Pattaya|Patua+One|Pavanam|Paytone+One|Peddana|Peralta|Permanent+Marker|Petit+Formal+Script|Petrona|Philosopher|Piazzolla|Piedra|Pinyon+Script|Pirata+One|Plaster|Play|Playball|Playfair+Display|Playfair+Display+SC|Podkova|Poiret+One|Poller+One|Poly|Pompiere|Pontano+Sans|Poor+Story|Poppins|Port+Lligat+Sans|Port+Lligat+Slab|Potta+One|Pragati+Narrow|Prata|Preahvihear|Press+Start+2P|Pridi|Princess+Sofia|Prociono|Prompt|Prosto+One|Proza+Libre|Public+Sans|Puritan|Purple+Purse|Qahiri|Quando|Quantico|Quattrocento|Quattrocento+Sans|Questrial|Quicksand|Quintessential|Qwigley|Racing+Sans+One|Radley|Rajdhani|Rakkas|Raleway|Raleway+Dots|Ramabhadra|Ramaraja|Rambla|Rammetto+One|Ranchers|Rancho|Ranga|Rasa|Rationale|Ravi+Prakash|Recursive|Red+Hat+Display|Red+Hat+Text|Red+Rose|Redressed|Reem+Kufi|Reenie+Beanie|Reggae+One|Revalia|Rhodium+Libre|Ribeye|Ribeye+Marrow|Righteous|Risque|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Rochester|Rock+Salt|RocknRoll+One|Rokkitt|Romanesco|Ropa+Sans|Rosario|Rosarivo|Rouge+Script|Rowdies|Rozha+One|Rubik|Rubik+Mono+One|Ruda|Rufina|Ruge+Boogie|Ruluko|Rum+Raisin|Ruslan+Display|Russo+One|Ruthie|Rye|STIX+Two+Math|Sacramento|Sahitya|Sail|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Saira+Stencil+One|Salsa|Sanchez|Sancreek|Sansita|Sansita+Swashed|Sarabun|Sarala|Sarina|Sarpanch|Satisfy|Sawarabi+Gothic|Sawarabi+Mincho|Scada|Scheherazade|Schoolbell|Scope+One|Seaweed+Script|Secular+One|Sedgwick+Ave|Sedgwick+Ave+Display|Sen|Sevillana|Seymour+One|Shadows+Into+Light|Shadows+Into+Light+Two|Shanti|Share|Share+Tech|Share+Tech+Mono|Shippori+Mincho|Shippori+Mincho+B1|Shojumaru|Short+Stack|Shrikhand|Siemreap|Sigmar+One|Signika|Signika+Negative|Simonetta|Single+Day|Sintony|Sirin+Stencil|Six+Caps|Skranji|Slabo+13px|Slabo+27px|Slackey|Smokum|Smythe|Sniglet|Snippet|Snowburst+One|Sofadi+One|Sofia|Solway|Song+Myung|Sonsie+One|Sora|Sorts+Mill+Goudy|Source+Code+Pro|Source+Sans+Pro|Source+Serif+Pro|Space+Grotesk|Space+Mono|Spartan|Special+Elite|Spectral|Spectral+SC|Spicy+Rice|Spinnaker|Spirax|Squada+One|Sree+Krushnadevaraya|Sriracha|Srisakdi|Staatliches|Stalemate|Stalinist+One|Stardos+Stencil|Stick|Stint+Ultra+Condensed|Stint+Ultra+Expanded|Stoke|Strait|Stylish|Sue+Ellen+Francisco|Suez+One|Sulphur+Point|Sumana|Sunflower|Sunshiney|Supermercado+One|Sura|Suranna|Suravaram|Suwannaphum|Swanky+and+Moo+Moo|Syncopate|Syne|Syne+Mono|Syne+Tactile|Tajawal|Tangerine|Taprom|Tauri|Taviraj|Teko|Telex|Tenali+Ramakrishna|Tenor+Sans|Text+Me+One|Texturina|Thasadith|The+Girl+Next+Door|Tienne|Tillana|Timmana|Tinos|Titan+One|Titillium+Web|Tomorrow|Tourney|Trade+Winds|Train+One|Trirong|Trispace|Trocchi|Trochut|Truculenta|Trykker|Tulpen+One|Turret+Road|Ubuntu|Ubuntu+Condensed|Ubuntu+Mono|Uchen|Ultra|Uncial+Antiqua|Underdog|Unica+One|UnifrakturCook|UnifrakturMaguntia|Unkempt|Unlock|Unna|VT323|Vampiro+One|Varela|Varela+Round|Varta|Vast+Shadow|Vesper+Libre|Viaoda+Libre|Vibes|Vibur|Vidaloka|Viga|Voces|Volkhov|Vollkorn|Vollkorn+SC|Voltaire|Waiting+for+the+Sunrise|Wallpoet|Walter+Turncoat|Warnes|Wellfleet|Wendy+One|Wire+One|Work+Sans|Xanh+Mono|Yanone+Kaffeesatz|Yantramanav|Yatra+One|Yellowtail|Yeon+Sung|Yeseva+One|Yesteryear|Yomogi|Yrsa|Yusei+Magic|ZCOOL+KuaiLe|ZCOOL+QingKe+HuangYou|ZCOOL+XiaoWei|Zen+Dots|Zen+Loop|Zen+Tokyo+Zoo|Zeyada|Zhi+Mang+Xing|Zilla+Slab|Zilla+Slab+Highlight|'
            );
            wp_enqueue_style('gb_familycss');
            add_action('wp_enqueue_scripts', 'qf_enqueue');
            function qf_enqueue()
            {
                wp_enqueue_script(
                    'custom1_jquery',
                    plugin_dir_url(__FILE__) . 'jquery.min.js'
                );
                wp_enqueue_script(
                    'img_hover',
                    plugin_dir_url(__FILE__) . 'imgHover.js'
                );
                
                // wp_enqueue_script(
                //     'lightbox',
                //     plugin_dir_url(__FILE__) . 'lightbox.js'
                // );
        
            }
    
            // Enqueue the script in the editor
            register_block_type(
                'blocksbakery/image', array(
                'attributes' => 
                array (
                    'mediaId' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'mediaUrl' => 
                    array (
                    'type' => 'string',
                    'default' => '',
                    ),
                    'image_size' => 
                    array (
                    'type' => 'string',
                    'default' => ''

                    ),
                    'alignment' => 
                    array (
                    'type' => 'string',
                    'default' => 'left',
                    ),
                    'caption_type' => 
                    array (
                    'type' => 'string',
                    'default' => 'none',
                    ),
                    'fig_disp' => 
                    array (
                    'type' => 'string',
                    'default' => 'none',
                    ),
                    'img_caption' => 
                    array (
                    'type' => 'string',
                    'default' => ''
                    ),
                    'img_width' => 
                    array (
                    'type' => 'number',
                    'default' => ''
                    ),
                    'img_width_unit' => 
                    array (
                    'type' => 'string',
                    'default' => '%',
                    ),
                    'img_width_controller' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'img_max_width' => 
                    array (
                    'type' => 'number',
                    'default' => ''
                    ),
                    'img_max_width_unit' => 
                    array (
                    'type' => 'string',
                    'default' => '%',
                    ),
                    'img_max_width_controller' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'img_height' => 
                    array (
                    'type' => 'number',
                    'default' => ''
                    ),
                    'img_height_unit' => 
                    array (
                    'type' => 'string',
                    'default' => 'px',
                    ),
                    'img_height_controller' => 
                    array (
                    'type' => 'number',
                    'default' => 500,
                    ),
                    'image_object_fit' => 
                    array (
                    'type' => 'string',
                    'default' => '',
                    ),
                    'img_opacity' => 
                    array (
                    'type' => 'number',
                    'default' => 1
                    ),
                    'css_brightness' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_contrast' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_saturation' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_hue' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'css_blur' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'img_border_style' => 
                    array (
                    'type' => 'string',
                    'default' => 'none',
                    ),
                    'border_left_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_right_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_top_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_bottom_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'type_border' => 
                    array (
                    'type' => 'string',
                    ),
                    'isAllBorder' => 
                    array (
                    'type' => 'boolean',
                    'default' => false,
                    ),
                    'border_width_disp' => 
                    array (
                    'type' => 'string',
                    'default' => 'none',
                    ),
                    'image_border_color' => 
                    array (
                    'type' => 'string',
                    'default' => '',
                    ),
                    'border_left_radius' => 
                    array (
                    'type' => 'string',
                    'default' => 0,
                    ),
                    'border_right_radius' => 
                    array (
                    'type' => 'string',
                    'default' => 0,
                    ),
                    'border_top_radius' => 
                    array (
                    'type' => 'string',
                    'default' => 0,
                    ),
                    'border_bottom_radius' => 
                    array (
                    'type' => 'string',
                    'default' => 0,
                    ),
                    'type_radius' => 
                    array (
                    'type' => 'string',
                    ),
                    'type_hover_radius' => 
                    array (
                    'type' => 'string',
                    ),
                    'isAllRadius' => 
                    array (
                    'type' => 'boolean',
                    'default' => false,
                    ),
                    'img_border_radius_unit' => 
                    array (
                    'type' => 'string',
                    'default' => 'px',
                    ),
                    'img_shadow_horizontal' => 
                    array (
                    'type' => 'number',
                    'default' => 0
                    ),
                    'img_shadow_vertical' => 
                    array (
                    'type' => 'number',
                    'default' => 0
                    ),
                    'img_shadow_color' => 
                    array (
                    'type' => 'string',
                    'default' => ''
                    ),
                    'img_shadow_blur' => 
                    array (
                    'type' => 'number',
                    'default' => 0
                    ),
                    'img_hover_opacity' => 
                    array (
                    'type' => 'number',
                    'default' => ''

                    ),
                    'css_hover_brightness' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_hover_contrast' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_hover_saturation' => 
                    array (
                    'type' => 'number',
                    'default' => 100,
                    ),
                    'css_hover_hue' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'css_hover_blur' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'img_trans_duration' => 
                    array (
                    'type' => 'number',
                    'default' => '',
                    ),
                    'img_animation' => 
                    array (
                    'type' => 'string',
                    'default' => ''
                    ),
                    'img_border_hover_style' => 
                    array (
                    'type' => 'string',
                    ),
                    'border_hover_left_radius' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_hover_right_radius' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_hover_top_radius' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_hover_bottom_radius' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_width_hover_disp' => 
                    array (
                    'type' => 'string',
                    'default' => 'none',
                    ),
                    'border_left_hover_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_right_hover_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_top_hover_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'border_bottom_hover_width' => 
                    array (
                    'type' => 'number',
                    'default' => 0,
                    ),
                    'type_hover_border' => 
                    array (
                    'type' => 'string',
                    ),
                    'isAllHoverBorder' => 
                    array (
                    'type' => 'boolean',
                    'default' => false,
                    ),
                    'img_border_hover_radius_unit' => 
                    array (
                    'type' => 'string',
                    'default' => 'px',
                    ),
                    'img_hover_shadow_horizental' => 
                    array (
                    'type' => 'number',
                    ),
                    'img_hover_shadow_vertical' => 
                    array (
                    'type' => 'number',
                    ),
                    'img_hover_shadow_color' => 
                    array (
                    'type' => 'string',
                    ),
                    'img_hover_shadow_blur' => 
                    array (
                    'type' => 'number',
                    ),
                    'isAllHoverRadius' => 
                    array (
                    'type' => 'boolean',
                    'default' => false,
                    ),
                    'img_styling' => 
                    array (
                    'source' => 'attribute',
                    'attribute' => 'style',
                    ),
                    'caption_styling' => 
                    array (
                    'source' => 'attribute',
                    'attribute' => 'style',
                    ),
                    'caption_align' => 
                    array (
                        'type' => 'string',
                        'default' => 'left',
                    ),
                    'caption_color' => 
                    array (
                        'type' => 'string',
                        'default' => '#000000',
                    ),
                    'caption_opacity' => 
                    array (
                        'type' => 'string',
                        'default' => 'FF',
                    ),
                    'caption_bg_color' => 
                    array (
                        'type' => 'string',
                        'default' => '#fff',
                    ),
                    'caption_bg_opacity' => 
                    array (
                        'type' => 'string',
                        'default' => 'FF',
                    ),
                    'caption_family' => 
                    array (
                        'type' => 'string',
                        'default' => 'Arial',
                    ),
                    'caption_weight' => 
                    array (
                        'type' => 'string',
                        'default' => 'regular',
                    ),
                    'caption_blend_mode' => 
                    array (
                        'type' => 'string',
                        'default' => 'normal',
                    ),
                    'caption_decoration' => 
                    array (
                        'type' => 'string',
                        'default' => 'none',
                    ),
                    'caption_style' => 
                    array (
                        'type' => 'string',
                        'default' => 'inherit',
                    ),
                    'pxfortile' => 
                    array (
                        'type' => 'string',
                        'default' => 'px',
                    ),
                    'caption_size' => 
                    array (
                        'type' => 'number',
                        'default' => ''
                    ),
                    'caption_height' =>
                    array (
                        'type' => 'number',
                        'default' => ''
                    ),
                    'lineheightpxemfortitle' => 
                    array (
                        'type' => 'string',
                        'default' => 'em',
                    ),
                    'line_range_controller' => 
                    array (
                        'type' => 'number',
                        'default' => 100,
                    ),
                    'letter_spacing_title' => 
                    array (
                        'type' => 'number',
                        'default' => ''
                    ),
                    'caption_shadow_blur' => 
                    array (
                        'type' => 'number',
                        'default' => 10,
                    ),
                    'caption_shadow_horizontal' => 
                    array (
                        'type' => 'number',
                        'default' => ''

                    ),
                    'caption_shadow_vertical' => 
                    array (
                        'type' => 'number',
                        'default' => ''
                    ),
                    'caption_shadow_colors' => 
                    array (
                        'type' => 'string',
                        'default' => ''
                    ),
                    'caption_transform' => 
                    array (
                        'type' => 'html',
                        'default' => 'none',
                    ),
                    'caption_spacing' => 
                    array (
                        'type' => 'number',
                        'default' => 10,
                    ),
                ),

                    'editor_script' => 'bb-image',
                    'editor_style'  => 'bb-image-style',
                    // 'editor_lightbox_script'  => 'bb-image-lightbox-script',
                    'render_callback' 	=> 'image_render_callback',
                   
                )
            );
        }
    }
}

function image_render_callback($attributes){
    $image_style  = '';

    $image_style .= ($attributes['img_width'] . $attributes['img_width_unit'] != '%') ? "width: ". $attributes['img_width'] . $attributes['img_width_unit'] . "; " : '';
    $image_style .= ($attributes['img_max_width'] . $attributes['img_max_width_unit'] != '%') ? "max-width: ". $attributes['img_max_width'] . $attributes['img_max_width_unit'] . "; " : '';
    $image_style .= ($attributes['img_height'] . $attributes['img_height_unit'] != '%') ? "height: ". $attributes['img_height'] . $attributes['img_height_unit'] . "; " : '';
    $image_style .= ($attributes['image_object_fit'] != '%') ? "object-fit: ". $attributes['image_object_fit'] . "; " : '';
    $image_style .= ($attributes['img_opacity'] != '%') ? "opacity: ". $attributes['img_opacity'] . "; " : '';
    $image_style .= "filter: brightness(". $attributes['css_brightness'] . "%) contrast(" . $attributes['css_contrast'] . "%) saturate(".  $attributes['css_saturation'] . "%) " . "blur(". $attributes['css_blur'] . "px) " . "hue-rotate(" . $attributes['css_hue'] .  "deg); " ;
    $image_style .= ($attributes['img_border_style'] != 'none') ? "border-style: ". $attributes['img_border_style'] . "; " : '';
    $image_style .= 'border-width: ' . $attributes['border_top_width'] . 'px ' . $attributes['border_top_width'] . 'px ' . $attributes['border_top_width'] . 'px ' . $attributes['border_top_width'] . 'px; ' ;
    $image_style .= ($attributes['image_border_color'] != '') ? "border-color: ". $attributes['image_border_color']. "; " : '';
    $image_style .= ($attributes['border_top_radius'].$attributes['img_border_radius_unit']." ". $attributes['border_right_radius'].$attributes['img_border_radius_unit']." ". $attributes['border_bottom_radius'].$attributes['img_border_radius_unit']." ". $attributes['border_left_radius'].$attributes['img_border_radius_unit'] != '0px 0px 0px 0px' ) ? "border-radius: " . $attributes['border_top_radius'].$attributes['img_border_radius_unit']." ". $attributes['border_right_radius'].$attributes['img_border_radius_unit']." ". $attributes['border_bottom_radius'].$attributes['img_border_radius_unit']." ". $attributes['border_left_radius'].$attributes['img_border_radius_unit'] . "; " : '' ;
    $image_style .= ($attributes['img_shadow_horizontal']. 'px '. $attributes['img_shadow_vertical']. 'px '. $attributes['img_shadow_blur']. 'px '. $attributes['img_shadow_color'] != '0px 0px 0px ') ? "box-shadow: ". $attributes['img_shadow_horizontal']. 'px '. $attributes['img_shadow_vertical']. 'px '. $attributes['img_shadow_blur']. 'px '. $attributes['img_shadow_color'] : '' ;



    $image_style 	= (($image_style != '') ? ' style="'.$image_style . '"' : '');

    $caption_styling = '';    
    $caption_styling .= ($attributes['caption_decoration'] != 'none') ? "text-decoration: ". $attributes['caption_decoration'] .";" : '';
    $caption_styling .= ($attributes['caption_bg_color'] != 'black') ? "color: ". $attributes['caption_color'] . $attributes['caption_opacity'] . ";" : '';
    $caption_styling .= ($attributes['caption_color'] != 'black') ? "background-color: ". $attributes['caption_bg_color'] . $attributes['caption_bg_opacity'] . ";" : '';
    $caption_styling .= ($attributes['caption_family'] != 'Arial') ? "font-family: ". $attributes['caption_family']. ";" : '';
    $caption_styling .= ($attributes['caption_weight'] != 'regular') ? "font-weight: " . $attributes['caption_weight'] . ";" : '' ;
    $caption_styling .= ($attributes['caption_size'] . $attributes['pxfortile'] != '30px') ? "font-size: ". $attributes['caption_size'] . $attributes['pxfortile'] . ";" : '';
    $caption_styling .= ($attributes['caption_transform'] != 'none') ? "text-transform: ". $attributes['caption_transform'] .";" : '';
    $caption_styling .= ($attributes['caption_height'] . $attributes['lineheightpxemfortitle'] != '1.5em') ? "line-height: ". $attributes['caption_height'] . $attributes['lineheightpxemfortitle'] . ";" : '';
    $caption_styling .= ($attributes['letter_spacing_title'] != 0) ? "letter-spacing: ". $attributes['letter_spacing_title'] ."px;" : '';
    $caption_styling .= ($attributes['caption_shadow_horizontal'] . "px " . $attributes['caption_shadow_vertical'] . "px " . $attributes['caption_shadow_blur'] . "px " . $attributes['caption_shadow_colors'] != '0px 0px 0px black') ? "text-shadow: ". $attributes['caption_shadow_horizontal'] . "px " . $attributes['caption_shadow_vertical'] . "px " . $attributes['caption_shadow_blur'] . "px " . $attributes['caption_shadow_colors'] .";" : '';
    $caption_styling .= ($attributes['caption_blend_mode'] != 'normal') ? "mix-blend-mode: ". $attributes['caption_blend_mode'] .";" : '';
    $caption_styling .= ($attributes['caption_style'] != 'inherit') ? "font-style: ". $attributes['caption_style'] .";" : '';
    $caption_styling .= ($attributes['caption_align'] != 'left') ? "text-align: ". $attributes['caption_align'] .";" : '';
    $caption_styling .= ($attributes['caption_type'] != 'none') ? "display: ". $attributes['caption_type'] .";" : '';
    $caption_styling .= ($attributes['caption_spacing'] != 10) ? "margintop: ". $attributes['caption_spacing'] .";" : '';


    $caption_styling 	= (($caption_styling != '') ? ' style="'.$caption_styling . '"' : '');
    
    $attributes['mediaUrl'] = $attributes['mediaUrl'] != '' ? $attributes['mediaUrl'] : 'none';


    $image_block="";
    $image_block .= '<div style = "text-align:' . $attributes['alignment'] . ' " >';
    $image_block .= '<figure>';
    $image_block .= '<a style=text-decoration:none; color:black>';
    $image_block .= '<img id=simpleimage class = '. $attributes['img_animation'] . ' data-normal-opacity = ' . $attributes['img_opacity'] .  ' data-hover-opacity = ' . $attributes['img_hover_opacity'] . ' data-normal-transition = ' . $attributes['img_opacity'] .  ' data-hover-transition = ' . $attributes['img_trans_duration'] . 's' .
    ' data-normal-filter=  brightness('. $attributes['css_brightness'] . '%)contrast('. $attributes['css_contrast'] . '%)saturate('.  $attributes['css_saturation'] . '%)' . 'blur('. $attributes['css_blur'] . 'px)' . 'hue-rotate(' . $attributes['css_hue'] .  'deg) '.
    ' data-hover-filter= brightness('. $attributes['css_hover_brightness'] . '%)contrast(' . $attributes['css_hover_contrast'] . '%)saturate('.  $attributes['css_hover_saturation'] . '%)' . 'blur('. $attributes['css_hover_blur'] . 'px)' . 'hue-rotate(' . $attributes['css_hover_hue'] .  'deg) '.
    ' src = ' . $attributes['mediaUrl'] . ' ' . $image_style . ' width = ' . $attributes['image_size'] . ' />';
    $image_block .= '<figcaption '.$caption_styling. '>' .$attributes['img_caption']  .' </figcaption>';
    $image_block .= '</a>';
    $image_block .= '</figure>';
    $image_block .= '</div>';
  


    return $image_block;


}

new BB_IMAGE();
