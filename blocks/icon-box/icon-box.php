<?php

if (! defined('ABSPATH')) {
    exit;
}
if (!class_exists('BB_ICON_BOX')) {
    /**
     * BB_ICON_BOX
     *
     * @category  Blocks_Bakery
     * @author    Essa Mamdani <essa@zagop.com>
     * @copyright 2020-2021 Zagop Pvt Ltd
     * @license   https://github.com/ZagopInc BSD Licence
     * @link      http://pear.php.net/package/PHP_CodeSniffer
     */
    class BB_ICON_BOX
    {
        /**
         * __construct
         *
         * @return void
         */
        public function __construct()
        {
            add_action('init', array( $this, 'iconboxBlockregister' ));
        }
        /**
         * Advanced_heading_block_register
         *
         * @return void
         */
        public function iconboxBlockregister()
        {
    
            // Register our block script with WordPress
            wp_register_script(
                'bb-icon-box',
                plugins_url('../../build/icon-box/main.js', __FILE__),
                array( 'wp-blocks', 'wp-i18n', 'wp-components', 'wp-editor' )
            );

         // Register our block's base CSS
         wp_register_style(
            'bb-icon-box-style',
            plugins_url('../../build/icon-box/editor.css', __FILE__),
            array( 'wp-edit-blocks' )
        );

        wp_register_style(
            'fontawesome',
            'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
        );  
        wp_enqueue_style( 'fontawesome' );

            wp_register_style(
                'gb_familycss',
                'https://fonts.googleapis.com/css?family=ABeeZee|Abel|Abhaya+Libre|Abril+Fatface|Aclonica| 
                Acme|Actor|Adamina|Advent+Pro|Aguafina+Script|Akaya+Kanadaka|Akaya+Telivigala|Akronim|Aladin|Alata|Alatsi|Aldrich|Alef|Alegreya|Alegreya+SC|Allerta+Stencil|Allura|Almarai|Almendra|Almendra+Display|Almendra+SC|Amarante|Amaranth|Amatic+SC|Amethysta|Amiko|Amiri|Amita|Anaheim|Andada|Andika|Andika+New+Basic|Angkor|Annie+Use+Your+Telescope|Anonymous+Pro|Antic|Antic+Didone|Antic+Slab|Anton|Antonio|Arapey|Arbutus|Arbutus+Slab|Architects+Daughter|Archivo|Archivo+Black|Archivo+Narrow|Aref+Ruqaa|Arima+Madurai|Arimo|Arizonia|Armata|Arsenal|Artifika|Arvo|Arya|Asap|Asap+Condensed|Asar|Asset|Assistant|Astloch|Asul|Athiti|Atma|Atomic+Age|Aubrey|Audiowide|Autour+One|Average|Average+Sans|Averia+Gruesa+Libre|Averia+Libre|Averia+Sans+Libre|Averia+Serif+Libre|B612|B612+Mono|Bad+Script|Bahiana|Bahianita|Bai+Jamjuree|Ballet|Baloo+2|Baloo+Bhai+2|Baloo+Bhaina+2|Baloo+Chettan+2|Baloo+Da+2|Baloo+Paaji+2|Baloo+Tamma+2|Baloo+Tammudu+2|Baloo+Thambi+2|Balsamiq+Sans|Balthazar|Bangers|Barlow|Barlow+Condensed|Barlow+Semi+Condensed|Barriecito|Barrio|Basic|Baskervville|Battambang|Baumans|Bayon|Be+Vietnam|Bebas+Neue|Belgrano|Bellefair|Belleza|Bellota|Bellota+Text|BenchNine|Benne|Bentham|Berkshire+Swash|Beth+Ellen|Bevan|Big+Shoulders+Display|Big+Shoulders+Inline+Display|Big+Shoulders+Inline+Text|Big+Shoulders+Stencil+Display|Big+Shoulders+Stencil+Text|Big+Shoulders+Text|Bigelow+Rules|Bigshot+One|Bilbo|Bilbo+Swash+Caps|BioRhyme|BioRhyme+Expanded|Biryani|Bitter|Black+And+White+Picture|Black+Han+Sans|Black+Ops+One|Blinker|Bodoni+Moda|Bokor|Bona+Nova|Bonbon|Boogaloo|Bowlby+One|Bowlby+One+SC|Brawler|Bree+Serif|Brygada+1918|Bubblegum+Sans|Bubbler+One|Buda|Buenard|Bungee|Bungee+Hairline|Bungee+Inline|Bungee+Outline|Bungee+Shade|Butcherman|Butterfly+Kids|Cabin|Cabin+Condensed|Cabin+Sketch|Caesar+Dressing|Cagliostro|Cairo|Caladea|Calistoga|Calligraffitti|Cambay|Cambo|Candal|Cantarell|Cantata+One|Cantora+One|Capriola|Cardo|Carme|Carrois+Gothic|Carrois+Gothic+SC|Carter+One|Castoro|Catamaran|Caudex|Caveat|Caveat+Brush|Cedarville+Cursive|Ceviche+One|Chakra+Petch|Changa|Changa+One|Chango|Charm|Charmonman|Chathura|Chau+Philomene+One|Chela+One|Chelsea+Market|Chenla|Cherry+Cream+Soda|Cherry+Swash|Chewy|Chicle|Chilanka|Chivo|Chonburi|Cinzel|Cinzel+Decorative|Clicker+Script|Coda|Coda+Caption|Codystar|Coiny|Combo|Comfortaa|Comic+Neue|Coming+Soon|Commissioner|Concert+One|Condiment|Content|Contrail+One|Convergence|Cookie|Copse|Corben|Cormorant|Cormorant+Garamond|Cormorant+Infant|Cormorant+SC|Cormorant+Unicase|Cormorant+Upright|Courgette|Courier+Prime|Cousine|Coustard|Covered+By+Your+Grace|Crafty+Girls|Creepster|Crete+Round|Crimson+Pro|Crimson+Text|Croissant+One|Crushed|Cuprum|Cute+Font|Cutive|Cutive+Mono|DM+Mono|DM+Sans|DM+Serif+Display|DM+Serif+Text|Damion|Dancing+Script|Dangrek|Darker+Grotesque|David+Libre|Dawning+of+a+New+Day|Days+One|Dekko|Dela+Gothic+One|Delius|Delius+Swash+Caps|Delius+Unicase|Della+Respira|Denk+One|Devonshire|Dhurjati|Didact+Gothic|Diplomata|Diplomata+SC|Do+Hyeon|Dokdo|Domine|Donegal+One|Doppio+One|Dorsa|Dosis|DotGothic16|Dr+Sugiyama|Duru+Sans|Dynalight|EB+Garamond|Eagle+Lake|East+Sea+Dokdo|Eater|Economica|Eczar|El+Messiri|Electrolize|Elsie|Elsie+Swash+Caps|Emblema+One|Emilys+Candy|Encode+Sans|Encode+Sans+Condensed|Encode+Sans+Expanded|Encode+Sans+SC|Encode+Sans+Semi+Condensed|Encode+Sans+Semi+Expanded|Engagement|Englebert|Enriqueta|Epilogue|Erica+One|Esteban|Euphoria+Script|Ewert|Exo|Exo+2|Expletus+Sans|Fahkwang|Fanwood+Text|Farro|Farsan|Fascinate|Fascinate+Inline|Faster+One|Fasthand|Fauna+One|Faustina|Federant|Federo|Felipa|Fenix|Festive|Finger+Paint|Fira+Code|Fira+Mono|Fira+Sans|Fira+Sans+Condensed|Fira+Sans+Extra+Condensed|Fjalla+One|Fjord+One|Flamenco|Flavors|Fondamento|Fontdiner+Swanky|Forum|Francois+One|Frank+Ruhl+Libre|Fraunces|Freckle+Face|Fredericka+the+Great|Fredoka+One|Freehand|Fresca|Frijole|Fruktur|Fugaz+One|Fuggles|GFS+Didot|GFS+Neohellenic|Gabriela|Gaegu|Gafata|Galada|Galdeano|Galindo|Gamja+Flower|Gayathri|Gelasio|Gentium+Basic|Gentium+Book+Basic|Geo|Geostar|Geostar+Fill|Germania+One|Gidugu|Gilda+Display|Girassol|Give+You+Glory|Glass+Antiqua|Glegoo|Gloria+Hallelujah|Goblin+One|Gochi+Hand|Goldman|Gorditas|Gothic+A1|Gotu|Goudy+Bookletter+1911|Graduate|Grand+Hotel|Grandstander|Gravitas+One|Great+Vibes|Grenze|Grenze+Gotisch|Griffy|Gruppo|Gudea|Gugi|Gupter|Gurajada|Habibi|Hachi+Maru+Pop|Halant|Hammersmith+One|Hanalei|Hanalei+Fill|Handlee|Hanuman|Happy+Monkey|Harmattan|Headland+One|Heebo|Henny+Penny|Hepta+Slab|Herr+Von+Muellerhoff|Hi+Melody|Hind|Hind+Guntur|Hind+Madurai|Hind+Siliguri|Hind+Vadodara|Holtwood+One+SC|Homemade+Apple|Homenaje|IBM+Plex+Mono|IBM+Plex+Sans|IBM+Plex+Sans+Condensed|IBM+Plex+Serif|IM+Fell+DW+Pica|IM+Fell+DW+Pica+SC|IM+Fell+Double+Pica|IM+Fell+Double+Pica+SC|IM+Fell+English|IM+Fell+English+SC|IM+Fell+French+Canon|IM+Fell+French+Canon+SC|IM+Fell+Great+Primer|IM+Fell+Great+Primer+SC|Ibarra+Real+Nova|Iceberg|Iceland|Imbue|Imprima|Inconsolata|Inder|Indie+Flower|Inika|Inknut+Antiqua|Inria+Sans|Inria+Serif|Inter|Irish+Grover|Istok+Web|Italiana|Italianno|Itim|Jacques+Francois|Jacques+Francois+Shadow|Jaldi|JetBrains+Mono|Jim+Nightshade|Jockey+One|Jolly+Lodger|Jomhuria|Jomolhari|Josefin+Sans|Josefin+Slab|Jost|Joti+One|Jua|Judson|Julee|Julius+Sans+One|Junge|Jura|Just+Another+Hand|Just+Me+Again+Down+Here|K2D|Kadwa|Kalam|Kameron|Kanit|Kantumruy|Karantina|Karla|Karma|Katibeh|Kaushan+Script|Kavivanar|Kavoon|Kdam+Thmor|Keania+One|Kelly+Slab|Kenia|Khand|Khmer|Khula|Kirang+Haerang|Kite+One|Kiwi+Maru|Knewave|KoHo|Kodchasan|Kosugi|Kosugi+Maru|Kotta+One|Koulen|Kranky|Kreon|Kristi|Krona+One|Krub|Kufam|Kulim+Park|Kumar+One|Kumar+One+Outline|Kumbh+Sans|Kurale|La+Belle+Aurore|Lacquer|Laila|Lakki+Reddy|Lalezar|Lancelot|Langar|Lateef|Lato|League+Script|Leckerli+One|Ledger|Lekton|Lemon|Lemonada|Lexend|Lexend+Deca|Lexend+Exa|Lexend+Giga|Lexend+Mega|Lexend+Peta|Lexend+Tera|Lexend+Zetta|Libre+Barcode+128|Libre+Barcode+128+Text|Libre+Barcode+39|Libre+Barcode+39+Extended|Libre+Barcode+39+Extended+Text|Libre+Barcode+39+Text|Libre+Barcode+EAN13+Text|Libre+Baskerville|Libre+Caslon+Display|Libre+Caslon+Text|Libre+Franklin|Life+Savers|Lilita+One|Lily+Script+One|Limelight|Linden+Hill|Literata|Liu+Jian+Mao+Cao|Livvic|Lobster|Lobster+Two|Londrina+Outline|Londrina+Shadow|Londrina+Sketch|Londrina+Solid|Long+Cang|Lora|Love+Ya+Like+A+Sister|Loved+by+the+King|Lovers+Quarrel|Luckiest+Guy|Lusitana|Lustria|M+PLUS+1p|M+PLUS+Rounded+1c|Ma+Shan+Zheng|Macondo|Macondo+Swash+Caps|Mada|Magra|Maiden+Orange|Maitree|Major+Mono+Display|Mako|Mali|Mallanna|Mandali|Manjari|Manrope|Mansalva|Manuale|Marcellus|Marcellus+SC|Marck+Script|Margarine|Markazi+Text|Marko+One|Marmelad|Martel|Martel+Sans|Marvel|Mate|Mate+SC|Maven+Pro|McLaren|Meddon|MedievalSharp|Medula+One|Meera+Inimai|Megrim|Meie+Script|Merienda|Merienda+One|Merriweather|Merriweather+Sans|Metal|Metal+Mania|Metamorphous|Metrophobic|Michroma|Milonga|Miltonian|Miltonian+Tattoo|Mina|Miniver|Miriam+Libre|Mirza|Miss+Fajardose|Mitr|Modak|Modern+Antiqua|Mogra|Molengo|Molle|Monda|Monofett|Monoton|Monsieur+La+Doulaise|Montaga|Montez|Montserrat|Montserrat+Alternates|Montserrat+Subrayada|Moul|Moulpali|Mountains+of+Christmas|Mouse+Memoirs|Mr+Bedfort|Mr+Dafoe|Mr+De+Haviland|Mrs+Saint+Delafield|Mrs+Sheppards|Mukta|Mukta+Mahee|Mukta+Malar|Mukta+Vaani|Mulish|MuseoModerno|Mystery+Quest|NTR|Nanum+Brush+Script|Nanum+Gothic|Nanum+Gothic+Coding|Nanum+Myeongjo|Nanum+Pen+Script|Nerko+One|Neucha|Neuton|New+Rocker|New+Tegomin|News+Cycle|Newsreader|Niconne|Niramit|Nixie+One|Nobile|Nokora|Norican|Nosifer|Notable|Nothing+You+Could+Do|Noticia+Text|Noto+Sans|Noto+Sans+HK|Noto+Sans+JP|Noto+Sans+KR|Noto+Sans+SC|Noto+Sans+TC|Noto+Serif|Noto+Serif+JP|Noto+Serif+KR|Noto+Serif+SC|Noto+Serif+TC|Nova+Cut|Nova+Flat|Nova+Mono|Nova+Oval|Nova+Round|Nova+Script|Nova+Slim|Nova+Square|Numans|Nunito|Nunito+Sans|Odibee+Sans|Odor+Mean+Chey|Offside|Oi|Old+Standard+TT|Oldenburg|Oleo+Script|Oleo+Script+Swash+Caps|Open+Sans|Open+Sans+Condensed|Oranienbaum|Orbitron|Oregano|Orelega+One|Orienta|Original+Surfer|Oswald|Otomanopee+One|Over+the+Rainbow|Overlock|Overlock+SC|Overpass|Overpass+Mono|Ovo|Oxanium|Oxygen|Oxygen+Mono|PT+Mono|PT+Sans|PT+Sans+Caption|PT+Sans+Narrow|PT+Serif|PT+Serif+Caption|Pacifico|Padauk|Palanquin|Palanquin+Dark|Pangolin|Paprika|Parisienne|Passero+One|Passion+One|Pathway+Gothic+One|Patrick+Hand|Patrick+Hand+SC|Pattaya|Patua+One|Pavanam|Paytone+One|Peddana|Peralta|Permanent+Marker|Petit+Formal+Script|Petrona|Philosopher|Piazzolla|Piedra|Pinyon+Script|Pirata+One|Plaster|Play|Playball|Playfair+Display|Playfair+Display+SC|Podkova|Poiret+One|Poller+One|Poly|Pompiere|Pontano+Sans|Poor+Story|Poppins|Port+Lligat+Sans|Port+Lligat+Slab|Potta+One|Pragati+Narrow|Prata|Preahvihear|Press+Start+2P|Pridi|Princess+Sofia|Prociono|Prompt|Prosto+One|Proza+Libre|Public+Sans|Puritan|Purple+Purse|Qahiri|Quando|Quantico|Quattrocento|Quattrocento+Sans|Questrial|Quicksand|Quintessential|Qwigley|Racing+Sans+One|Radley|Rajdhani|Rakkas|Raleway|Raleway+Dots|Ramabhadra|Ramaraja|Rambla|Rammetto+One|Ranchers|Rancho|Ranga|Rasa|Rationale|Ravi+Prakash|Recursive|Red+Hat+Display|Red+Hat+Text|Red+Rose|Redressed|Reem+Kufi|Reenie+Beanie|Reggae+One|Revalia|Rhodium+Libre|Ribeye|Ribeye+Marrow|Righteous|Risque|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Rochester|Rock+Salt|RocknRoll+One|Rokkitt|Romanesco|Ropa+Sans|Rosario|Rosarivo|Rouge+Script|Rowdies|Rozha+One|Rubik|Rubik+Mono+One|Ruda|Rufina|Ruge+Boogie|Ruluko|Rum+Raisin|Ruslan+Display|Russo+One|Ruthie|Rye|STIX+Two+Math|Sacramento|Sahitya|Sail|Saira|Saira+Condensed|Saira+Extra+Condensed|Saira+Semi+Condensed|Saira+Stencil+One|Salsa|Sanchez|Sancreek|Sansita|Sansita+Swashed|Sarabun|Sarala|Sarina|Sarpanch|Satisfy|Sawarabi+Gothic|Sawarabi+Mincho|Scada|Scheherazade|Schoolbell|Scope+One|Seaweed+Script|Secular+One|Sedgwick+Ave|Sedgwick+Ave+Display|Sen|Sevillana|Seymour+One|Shadows+Into+Light|Shadows+Into+Light+Two|Shanti|Share|Share+Tech|Share+Tech+Mono|Shippori+Mincho|Shippori+Mincho+B1|Shojumaru|Short+Stack|Shrikhand|Siemreap|Sigmar+One|Signika|Signika+Negative|Simonetta|Single+Day|Sintony|Sirin+Stencil|Six+Caps|Skranji|Slabo+13px|Slabo+27px|Slackey|Smokum|Smythe|Sniglet|Snippet|Snowburst+One|Sofadi+One|Sofia|Solway|Song+Myung|Sonsie+One|Sora|Sorts+Mill+Goudy|Source+Code+Pro|Source+Sans+Pro|Source+Serif+Pro|Space+Grotesk|Space+Mono|Spartan|Special+Elite|Spectral|Spectral+SC|Spicy+Rice|Spinnaker|Spirax|Squada+One|Sree+Krushnadevaraya|Sriracha|Srisakdi|Staatliches|Stalemate|Stalinist+One|Stardos+Stencil|Stick|Stint+Ultra+Condensed|Stint+Ultra+Expanded|Stoke|Strait|Stylish|Sue+Ellen+Francisco|Suez+One|Sulphur+Point|Sumana|Sunflower|Sunshiney|Supermercado+One|Sura|Suranna|Suravaram|Suwannaphum|Swanky+and+Moo+Moo|Syncopate|Syne|Syne+Mono|Syne+Tactile|Tajawal|Tangerine|Taprom|Tauri|Taviraj|Teko|Telex|Tenali+Ramakrishna|Tenor+Sans|Text+Me+One|Texturina|Thasadith|The+Girl+Next+Door|Tienne|Tillana|Timmana|Tinos|Titan+One|Titillium+Web|Tomorrow|Tourney|Trade+Winds|Train+One|Trirong|Trispace|Trocchi|Trochut|Truculenta|Trykker|Tulpen+One|Turret+Road|Ubuntu|Ubuntu+Condensed|Ubuntu+Mono|Uchen|Ultra|Uncial+Antiqua|Underdog|Unica+One|UnifrakturCook|UnifrakturMaguntia|Unkempt|Unlock|Unna|VT323|Vampiro+One|Varela|Varela+Round|Varta|Vast+Shadow|Vesper+Libre|Viaoda+Libre|Vibes|Vibur|Vidaloka|Viga|Voces|Volkhov|Vollkorn|Vollkorn+SC|Voltaire|Waiting+for+the+Sunrise|Wallpoet|Walter+Turncoat|Warnes|Wellfleet|Wendy+One|Wire+One|Work+Sans|Xanh+Mono|Yanone+Kaffeesatz|Yantramanav|Yatra+One|Yellowtail|Yeon+Sung|Yeseva+One|Yesteryear|Yomogi|Yrsa|Yusei+Magic|ZCOOL+KuaiLe|ZCOOL+QingKe+HuangYou|ZCOOL+XiaoWei|Zen+Dots|Zen+Loop|Zen+Tokyo+Zoo|Zeyada|Zhi+Mang+Xing|Zilla+Slab|Zilla+Slab+Highlight|'
            );
            wp_enqueue_style('gb_familycss');
    
            // Enqueue the script in the editor
            register_block_type( 'blocksbakery/icon-box', array(
                'attributes' =>   array (
                  'icon_selector' => 
                  array (
                    'type' => 'string',
                    'default' => 'fas fa-truck',
                  ),
                  'ibheading' =>  array (
                    'type' => 'string',
                    'default' => 'Write a Heading',
                  ),
                  'ibheadingtag' => 
                  array (
                    'type' => 'string',
                    'default' => 'h1',
                  ),
                  'ibpara' => 
                  array (
                    'type' => 'string',
                    'default' => 'Paragraph',
                  ),
                  'icon_size' => 
                  array (
                    'type' => 'number',
                    'default' => 30,
                  ),
                  'headingml' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'headingmr' => 
                  array (
                    'type' => 'number',
                    'default' => 10,
                  ),
                  'headingmt' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'headingmb' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'iconposition' => 
                  array (
                    'type' => 'string',
                    'default' => 'default',
                  ),
                  'iconpositionVertical' => 
                  array (
                    'type' => 'string',
                    'default' => 'top',
                  ),
                  'title_family' => 
                  array (
                    'type' => 'string',
                    'default' => 'ABeeZee',
                  ),
                  'title_weight' => 
                  array (
                    'type' => 'string',
                    'default' => 'regular',
                  ),
                  'font_sizeib' => 
                  array (
                    'type' => 'number',
                    'default'=>'',
                    
                  ),
                  'title_height' => 
                  array (
                    'type' => 'number',
                    'default' => 1.5,
                  ),
                  'letter_spacing_title' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'description_family' => 
                  array (
                    'type' => 'string',
                    'default' => 'ABeeZee',
                  ),
                  'description_weight' => 
                  array (
                    'type' => 'string',
                    'default' => 'regular',
                  ),
                  'description_sizeib' => 
                  array (
                    'type' => 'number',
                    'default' => 16,
                  ),
                  'description_line_Height' => 
                  array (
                    'type' => 'number',
                    'default' => 1.5,
                  ),
                  'letter_spacing_desc' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'text_colr' => 
                  array (
                    'type' => 'string',
                    'default' => 'black',
                  ),
                  'para_clr' => 
                  array (
                    'type' => 'string',
                    'default'=>'black',
                  ),
                  'icon_clr' => 
                  array (
                    'type' => 'string',
                    'default' => 'black',

                  ),
                  'bg_wrap' => 
                  array (
                    'type' => 'string',
                    'default'=>'transparent',
                  ),
                  'ic_b_clr' => 
                  array (
                    'type' => 'string',
                    'default'=> 'red',
                  ),   
                    'pl_wrap' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'pr_wrap' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'pt_wrap' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'pb_wrap' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'icon_border' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'icon_radius' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'ic_bg_clr' => 
                  array (
                    'type' => 'string',
                    'default'=>'transparent',
                  ),
                  'icon_padding' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'border_style' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'display_default' => 
                  array (
                    'type' => 'string',
                    'default'=>'block',
                  ),
                  'display_left' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'display_right' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'alg' => 
                  array (
                    'type' => 'string',
                    'default' => 'flex-start',
                  ),
                  'wrap_border_radius' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'text_alignment' => 
                  array (
                    'type' => 'string',
                    'default' => 'center',
                  ),
                  'title_transform' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'title_decoration' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'description_transform' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'description_decoration' => 
                  array (
                    'type' => 'string',
                    'default' => 'none',
                  ),
                  'text_shadow_color_desc' => 
                  array (
                    'type' => 'string',
                    'default' => 'black',
                  ),
                  'horizontal_desc' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'vertical_desc' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'blur_desc' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'text_shadow_color_title' => 
                  array (
                    'type' => 'string',
                    'default' => 'yellow',
                  ),
                  'horizontal_title' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'vertical_title' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'blur_title' => 
                  array (
                    'type' => 'number',
                    'default' => 0,
                  ),
                  'wrapper_style' => 
                  array (
                    'source' => 'attribute',
                    'attribute' => 'style',
                  ),
                  'icon_style' => 
                  array (
                    'source' => 'attribute',
                    'attribute' => 'style',
                  ),
                  'heading_style' => 
                  array (
                    'source' => 'attribute',
                    'attribute' => 'style',
                  ),
                  'paragrpaph_style' => 
                  array (
                    'source' => 'attribute',
                    'attribute' => 'style',
                  ),
                ),

                    'editor_script' => 'bb-icon-box',
                    'style'         => 'bb-icon-box-style',
                    'render_callback' 	=> 'iconbox_render_callback',
                )
            );
        }
    }
}
  
   function iconbox_render_callback($attributes){
    
 


   $icon_block="";
  // $icon_block.='<div class="bb-ib-image">';
 $iconposition=($attributes['iconposition'] != 'default') ? "".$attributes['iconposition']."" :'default';
  

  if($iconposition == "default")
  {
    $align =($attributes['alg'] != 'flex-start') ? "align-self:".$attributes['alg']."": 'align-self:flex-start;';
    $align 	= (($align != '') ? ' style="'.$align.' "' : '');


    $wrapper_align =($attributes['text_alignment'] != 'center') ? "text-align:".$attributes['text_alignment'].";": 'text-align:center;';
   
    $wrapper_style="";
    //$wrapper_style.=($attributes['text_alignment'] != 'center') ? "text-align:".$attributes['text_alignment']."": 'text-align:center;';
    $wrapper_style.=($attributes['bg_wrap'] != 'transparent') ? "background-color:".$attributes['bg_wrap'].";"  : 'background-color:transparent;';
    $wrapper_style.=($attributes['pt_wrap'] != '0') ?  "padding-top:".$attributes['pt_wrap']."px;" : 'padding-top:0px;';
    $wrapper_style.=($attributes['pr_wrap'] != '0') ? "padding-right:".$attributes['pr_wrap']."px;"  : 'padding-right:0px;';
    $wrapper_style.=($attributes['pb_wrap'] != '0') ? "padding-bottom:".$attributes['pb_wrap']."px;"  : 'padding-bottom:0px;';
    $wrapper_style.=($attributes['pl_wrap'] != '0') ?  "padding-left:".$attributes['pl_wrap']."px;"   : 'padding-left:0px;';
    $wrapper_style.=($attributes['display_default'] != 'block') ? "display:".$attributes['display_default'].";"  : 'display:block;';
    $wrapper_style.=($attributes['wrap_border_radius'] != '0') ? "border-radius:".$attributes['wrap_border_radius']."px;"  : 'border-radius:0px;';
    $wrapper_style 	= (($wrapper_style != '') ? ' style="'.$wrapper_style.' '.$wrapper_align.'"' : '');
   
     //icon style 
     $icon_style = "";
     $icon_style.= ($attributes['icon_size'] != '30') ? "font-size:".$attributes['icon_size']."px;"  : 'font-size:30px;';
     //$icon_style.= ($attributes['icon_selector'] != 'fas fa-truck') ? "icon-selector:".$attributes['icon_selector'].";"  : 'icon-selector:fas fa-truck;';
     $icon_style.= ($attributes['headingmt'] != '0') ?  "margin-top:".$attributes['headingmt']."px;"  : 'margin-top:0px;';
     $icon_style.= ($attributes['headingmr'] != '10') ? "margin-right:".$attributes['headingmr']."px;" : 'margin-right:10px;';
     $icon_style.= ($attributes['headingmb'] != '0') ?  "margin-bottom:".$attributes['headingmb']."px;"  : 'margin-bottom:0px;';
     $icon_style.= ($attributes['headingml'] != '0') ? "margin-left:".$attributes['headingml']."px;" : 'margin-left:0px;';
     $icon_style.= ($attributes['icon_clr'] != 'black') ? "color:" .$attributes['icon_clr'].";"  : 'color:black;';
     $icon_style.= ($attributes['ic_bg_clr'] != 'transparent') ? "background-color:".$attributes['ic_bg_clr'].";"  : 'background-color:transparent;';
     $icon_style.= ($attributes['icon_padding'] != '0') ? "padding:".$attributes['icon_padding']."px;"  : 'padding:0px;';
     $icon_style.= ($attributes['icon_border'] != '0') ?  "border-width:".$attributes['icon_border']."px;"  : 'border-width:0px;';
     $icon_style.= ($attributes['border_style'] != 'none') ? "border-style:" .$attributes['border_style'].";"  : 'border-style:none;';
     $icon_style.= ($attributes['ic_b_clr'] != 'red') ?  "border-color:".$attributes['ic_b_clr'].";"  : 'border-color:red;';
     $icon_style.= ($attributes['icon_radius'] != '0') ? "border-radius:".$attributes['icon_radius']."px;"  : 'border-radius:0px';
     $icon_style 	= (($icon_style != '') ? ' style="'.$icon_style.'"' : '');
    //heading style
     $heading_content = ($attributes['ibheading'] != 'How are you') ? "".$attributes['ibheading'].""  : 'How are you;';
    
     $heading_style = "";
   //$heading_style.= ($attributes['ibheadingtag'] != 'h2') ? "heading:".$attributes['ibheadingtag'].";"  : 'heading:h2;';
     $heading_style.= ($attributes['title_family'] != 'ABeeZee') ? "font-family:".$attributes['title_family'].";"  : 'font-family:ABeeZee;';
     $heading_style.= ($attributes['title_weight'] != 'normal') ?  "font-weight:".$attributes['title_weight'].";"  : 'font-weight:normal;';
     $heading_style.= ($attributes['title_transform'] != 'none') ?  "text-transform:".$attributes['title_transform'].";"  : 'text-transform:none;';
     $heading_style.= ($attributes['title_decoration'] != 'none') ? "text-decoration:".$attributes['title_decoration'].";"  : 'text-decoration:none;';
     $heading_style.= ($attributes['font_sizeib'] != '') ? "font-size:".$attributes['font_sizeib']."px;"  : 'font-size:px;';
     $heading_style.= ($attributes['title_height'] != '1.5') ? "line-height:".$attributes['title_height']."em;"  : 'line-height:1.5em;';
     $heading_style.= ($attributes['letter_spacing_title'] != '0') ?  "letter-spacing:".$attributes['letter_spacing_title']."px;"  : 'letter-spacing:0px;';
     $heading_style.= ($attributes['text_colr'] != 'black') ?  "color:".$attributes['text_colr'].";"  : 'color:black;';
     //text shadow
     $horizantl_title=($attributes['horizontal_title'] != '0') ? "" .$attributes['horizontal_title']."px "  : '0px ';
     $vertical_title=($attributes['vertical_title'] != '0') ?  "".$attributes['vertical_title']."px "  : '0px ';
     $blur_title=($attributes['blur_title'] != '0') ? "".$attributes['blur_title']."px "  : ' 0px'; 
     $shadow = $horizantl_title .= $vertical_title .= $blur_title ;
     $heading_style.=($attributes['text_shadow_color_title'] != 'yellow') ? "text-shadow:".$attributes['text_shadow_color_title']." $shadow ;"  : 'text-shadow:yellow '.$shadow.';';
     $heading_style 	= (($heading_style != '') ? ' style="'.$heading_style.'"' : '');
    
     $paragrpaph_content= ($attributes['ibpara'] != 'this is paragraph') ? "".$attributes['ibpara'].""  : 'this is paragraph;';
     //paragraph style
     $paragrpaph_style = "";
     $paragrpaph_style.= ($attributes['description_family'] != 'ABeeZee') ? "font-family:".$attributes['description_family'].";"  : 'font-family:ABeeZee;';
     $paragrpaph_style.= ($attributes['description_weight'] != 'regular') ? "font-weight:".$attributes['description_weight'].";"  : 'font-weight:regular;';
     $paragrpaph_style.= ($attributes['description_transform'] != 'none') ?  "text-transform:".$attributes['description_transform'].";"  : 'text-transform:none;';
     $paragrpaph_style.= ($attributes['description_decoration'] != 'none') ? "text-decoration:".$attributes['description_decoration'].";"  : 'text-decoration:none;';
     $paragrpaph_style.= ($attributes['description_sizeib'] != '16') ? "font-size:".$attributes['description_sizeib']."px;"  : 'font-size:16px;';
     $paragrpaph_style.= ($attributes['description_line_Height'] != '1.5') ? "line-height:".$attributes['description_line_Height']."em;"  : 'line-height:1.5em;';
     $paragrpaph_style.= ($attributes['letter_spacing_desc'] != '0') ? "letter-spacing:".$attributes['letter_spacing_desc']."px;" : 'letter-spacing:0px;';
     $paragrpaph_style.= ($attributes['para_clr'] != 'black') ? "color:".$attributes['para_clr'].";"  : 'color:black;';
     $horizontal_desc=($attributes['horizontal_desc'] != '0') ? "".$attributes['horizontal_desc']."px "  : '0px';
     $vertical_desc=($attributes['vertical_desc'] != '0') ?  "".$attributes['vertical_desc']."px "  : '0px ';
     $blur_desc=($attributes['blur_desc'] != '0') ? "".$attributes['blur_desc']."px "  : ' 0px'; 
     $des_shadow= $horizontal_desc .= $vertical_desc .=  $blur_desc ;
     $paragrpaph_style.=($attributes['text_shadow_color_desc'] != 'black') ? "text-shadow:".$attributes['text_shadow_color_desc']." $des_shadow ;"  : 'text-shadow:black '.$des_shadow.';';
     $paragrpaph_style	= (($paragrpaph_style != '') ? ' style="'.$paragrpaph_style. '"' : '');


   //  $icon_block="";
     $icon_block.= '<div class="bb-ib-wrapper" '.$wrapper_style.'>';
     $icon_block.='<div class"bb-ib-icon" '.$align.'>';
     $icon_block.='<a href="" >';
     $icon_block.='<span class="'.$attributes['icon_selector'].'" '.$icon_style.'>
     </span></a>';
     $icon_block.='</div>';
     $icon_block.='<div class="bb-ib-heading">';
     $icon_block.='<'.$attributes['ibheadingtag'].' '.$heading_style .'>'.$heading_content.
     '</'.$attributes['ibheadingtag'].'>';
     $icon_block.='<p class="bb-ib-content-description" '.$paragrpaph_style.' >'.$paragrpaph_content. '</p>';
     $icon_block.='</div>';
     $icon_block.='</div>';
  // $icon_block.='<div>';
     return  $icon_block;
  }

 else if($iconposition=='left')
  {

    $align =($attributes['alg'] != 'flex-start') ? "align-self:".$attributes['alg']."": 'align-self:flex-start;'; 
    $align 	= (($align != '') ? ' style="'.$align.' "' : '');
  
    $wrapper_style="";
    
    $wrapper_style.=($attributes['bg_wrap'] != 'transparent') ? "background-color:".$attributes['bg_wrap'].";"  : 'background-color:transparent;';
    $wrapper_style.=($attributes['pt_wrap'] != '0') ?  "padding-top:".$attributes['pt_wrap']."px;" : 'padding-top:0px;';
    $wrapper_style.=($attributes['pr_wrap'] != '0') ? "padding-right:".$attributes['pr_wrap']."px;"  : 'padding-right:0px;';
    $wrapper_style.=($attributes['pb_wrap'] != '0') ? "padding-bottom:".$attributes['pb_wrap']."px;"  : 'padding-bottom:0px;';
    $wrapper_style.=($attributes['pl_wrap'] != '0') ?  "padding-left:".$attributes['pl_wrap']."px;"   : 'padding-left:0px;';
    $wrapper_style.=($attributes['display_left'] != 'flex') ? "display:".$attributes['display_left'].";"  : 'display:flex;';
    $wrapper_style.=($attributes['wrap_border_radius'] != '0') ? "border-radius:".$attributes['wrap_border_radius']."px;"  : 'border-radius:0px;';
    $wrapper_style.=($attributes['text_alignment'] != 'center') ? "text-align:".$attributes['text_alignment'].";": 'text-align:center;';
    $wrapper_style 	= (($wrapper_style != '') ? ' style="'.$wrapper_style.' justify-content:center; "' : '');
   
     //icon style 
     $icon_style = "";
     $icon_style.= ($attributes['icon_size'] != '30') ? "font-size:".$attributes['icon_size']."px;"  : 'font-size:30px;';
     //$icon_style.= ($attributes['icon_selector'] != 'fas fa-truck') ? "icon-selector:".$attributes['icon_selector'].";"  : 'icon-selector:fas fa-truck;';
     $icon_style.= ($attributes['headingmt'] != '0') ?  "margin-top:".$attributes['headingmt']."px;"  : 'margin-top:0px;';
     $icon_style.= ($attributes['headingmr'] != '10') ? "margin-right:".$attributes['headingmr']."px;" : 'margin-right:10px;';
     $icon_style.= ($attributes['headingmb'] != '0') ?  "margin-bottom:".$attributes['headingmb']."px;"  : 'margin-bottom:0px;';
     $icon_style.= ($attributes['headingml'] != '0') ? "margin-left:".$attributes['headingml']."px;" : 'margin-left:0px;';
     $icon_style.= ($attributes['icon_clr'] != 'black') ? "color:" .$attributes['icon_clr'].";"  : 'color:black;';
     $icon_style.= ($attributes['ic_bg_clr'] != 'transparent') ? "background:".$attributes['ic_bg_clr'].";"  : 'background:transparent;';
     $icon_style.= ($attributes['icon_padding'] != '0') ? "padding:".$attributes['icon_padding']."px;"  : 'padding:0px;';
     $icon_style.= ($attributes['icon_border'] != '0') ?  "border-width:".$attributes['icon_border']."px;"  : 'border-width:0px;';
     $icon_style.= ($attributes['border_style'] != 'none') ? "border-style:" .$attributes['border_style'].";"  : 'border-style:none;';
     $icon_style.= ($attributes['ic_b_clr'] != 'red') ?  "border-color:".$attributes['ic_b_clr'].";"  : 'border-color:red;';
     $icon_style.= ($attributes['icon_radius'] != '0') ? "border-radius:".$attributes['icon_radius']."px;"  : 'border-radius:0px';
     $icon_style 	= (($icon_style != '') ? ' style="'.$icon_style.'"' : '');
     
    //heading style
     $heading_content = ($attributes['ibheading'] != 'How are you') ? "".$attributes['ibheading'].""  : 'How are you;';
    
     $heading_style = "";
  //   $heading_style.= ($attributes['ibheadingtag'] != 'h2') ? "heading:".$attributes['ibheadingtag'].";"  : 'heading:h2;';
     $heading_style.= ($attributes['title_family'] != 'ABeeZee') ? "font-family:".$attributes['title_family'].";"  : 'font-family:ABeeZee;';
     $heading_style.= ($attributes['title_weight'] != 'normal') ?  "font-weight:".$attributes['title_weight'].";"  : 'font-weight:normal;';
     $heading_style.= ($attributes['title_transform'] != 'none') ?  "text-transform:".$attributes['title_transform'].";"  : 'text-transform:none;';
     $heading_style.= ($attributes['title_decoration'] != 'none') ? "text-decoration:".$attributes['title_decoration'].";"  : 'text-decoration:none;';
     $heading_style.= ($attributes['font_sizeib'] != '') ? "font-size:".$attributes['font_sizeib']."px;"  : 'font-size:px;';
     $heading_style.= ($attributes['title_height'] != '1.5') ? "line-height:".$attributes['title_height']."em;"  : 'line-height:1.5em;';
     $heading_style.= ($attributes['letter_spacing_title'] != '0') ?  "letter-spacing:".$attributes['letter_spacing_title']."px;"  : 'letter-spacing:0px;';
     $heading_style.= ($attributes['text_colr'] != 'black') ?  "color:".$attributes['text_colr'].";"  : 'color:black;';
     //text shadow
     $horizantl_title=($attributes['horizontal_title'] != '0') ? "" .$attributes['horizontal_title']."px "  : '0px ';
     $vertical_title=($attributes['vertical_title'] != '0') ?  "".$attributes['vertical_title']."px "  : '0px ';
     $blur_title=($attributes['blur_title'] != '0') ? "".$attributes['blur_title']."px "  : ' 0px'; 
     $shadow = $horizantl_title .= $vertical_title .= $blur_title ;
     $heading_style.=($attributes['text_shadow_color_title'] != 'yellow') ? "text-shadow:".$attributes['text_shadow_color_title']." $shadow ;"  : 'text-shadow:yellow '.$shadow.';';
     $heading_style 	= (($heading_style != '') ? ' style="'.$heading_style.'"' : '');
    
     $paragrpaph_content= ($attributes['ibpara'] != 'this is paragraph') ? "".$attributes['ibpara'].""  : 'this is paragraph;';
     $paragrpaph_style = "";
     $paragrpaph_style.= ($attributes['description_family'] != 'ABeeZee') ? "font-family:".$attributes['description_family'].";"  : 'font-family:ABeeZee;';
     $paragrpaph_style.= ($attributes['description_weight'] != 'regular') ? "font-weight:".$attributes['description_weight'].";"  : 'font-weight:regular;';
     $paragrpaph_style.= ($attributes['description_transform'] != 'none') ?  "text-transform:".$attributes['description_transform'].";"  : 'text-transform:none;';
     $paragrpaph_style.= ($attributes['description_decoration'] != 'none') ? "text-decoration:".$attributes['description_decoration'].";"  : 'text-decoration:none;';
     $paragrpaph_style.= ($attributes['description_sizeib'] != '16') ? "font-size:".$attributes['description_sizeib']."px;"  : 'font-size:16px;';
     $paragrpaph_style.= ($attributes['text_shadow_color_desc'] != 'black') ? "text-shadow:".$attributes['text_shadow_color_desc'].";"  : 'text-shadow:black;';
     $paragrpaph_style.= ($attributes['description_line_Height'] != '1.5') ? "line-height:".$attributes['description_line_Height']."em;"  : 'line-height:1.5em;';
     $paragrpaph_style.= ($attributes['letter_spacing_desc'] != '0') ? "letter-spacing:".$attributes['letter_spacing_desc']."px;" : 'letter-spacing:0px;';
     $paragrpaph_style.= ($attributes['para_clr'] != 'black') ? "color:".$attributes['para_clr'].";"  : 'color:black;';
     $horizontal_desc=($attributes['horizontal_desc'] != '0') ? "".$attributes['horizontal_desc']."px "  : '0px';
     $vertical_desc=($attributes['vertical_desc'] != '0') ?  "".$attributes['vertical_desc']."px "  : '0px ';
     $blur_desc=($attributes['blur_desc'] != '0') ? "".$attributes['blur_desc']."px "  : ' 0px'; 
     $des_shadow= $horizontal_desc .= $vertical_desc .=  $blur_desc ;
     $paragrpaph_style.=($attributes['text_shadow_color_desc'] != 'black') ? "text-shadow:".$attributes['text_shadow_color_desc']." $des_shadow ;"  : 'text-shadow:black '.$des_shadow.';';
     $paragrpaph_style	= (($paragrpaph_style != '') ? ' style="'.$paragrpaph_style. '"' : '');


   //  $icon_block="";
     $icon_block.= '<div class="bb-ib-wrapper" '.$wrapper_style.'>';
     $icon_block.='<div class"bb-ib-icon" '.$align.'>';
     $icon_block.='<a href="" >';
     $icon_block.='<span class="'.$attributes['icon_selector'].'" '.$icon_style.'>
     </span></a>';
     $icon_block.='</div>';
     $icon_block.='<div class="bb-ib-heading">';
     $icon_block.='<'.$attributes['ibheadingtag'] .$heading_style .'>'.$heading_content.
     '</'.$attributes['ibheadingtag'].'>';
     $icon_block.='<p class="bb-ib-content-description" '.$paragrpaph_style.' >'.$paragrpaph_content. '</p>';
     $icon_block.='</div>';
     $icon_block.='</div>';

     return  $icon_block;
  
  }

 else if($iconposition=="right")
  {
    $align =($attributes['alg'] != 'flex-start') ? "align-self:".$attributes['alg']."": 'align-self:flex-start;'; 
    $align 	= (($align != '') ? ' style="'.$align.' "' : '');

    $wrapper_style="";
    
    $wrapper_style.=($attributes['bg_wrap'] != 'transparent') ? "background-color:".$attributes['bg_wrap'].";"  : 'background-color:transparent;';
    $wrapper_style.=($attributes['pt_wrap'] != '0') ?  "padding-top:".$attributes['pt_wrap']."px;" : 'padding-top:0px;';
    $wrapper_style.=($attributes['pr_wrap'] != '0') ? "padding-right:".$attributes['pr_wrap']."px;"  : 'padding-right:0px;';
    $wrapper_style.=($attributes['pb_wrap'] != '0') ? "padding-bottom:".$attributes['pb_wrap']."px;"  : 'padding-bottom:0px;';
    $wrapper_style.=($attributes['pl_wrap'] != '0') ?  "padding-left:".$attributes['pl_wrap']."px;"   : 'padding-left:0px;';
    $wrapper_style.=($attributes['display_right'] != 'flex') ? "display:".$attributes['display_default'].";"  : 'display:flex;';
    $wrapper_style.=($attributes['wrap_border_radius'] != '0') ? "border-radius:".$attributes['wrap_border_radius']."px;"  : 'border-radius:0px;';
    $wrapper_style.=($attributes['text_alignment'] != 'center') ? "text-align:".$attributes['text_alignment'].";": 'text-align:center;';
    $wrapper_style 	= (($wrapper_style != '') ? ' style="'.$wrapper_style.'  justify-content:center; flex-direction:row-reverse; "' : '');
   
     //icon style 
     $icon_style = "";
     $icon_style.= ($attributes['icon_size'] != '30') ? "font-size:".$attributes['icon_size']."px;"  : 'font-size:30px;';
     //$icon_style.= ($attributes['icon_selector'] != 'fas fa-truck') ? "icon-selector:".$attributes['icon_selector'].";"  : 'icon-selector:fas fa-truck;';
     $icon_style.= ($attributes['headingmt'] != '0') ?  "margin-top:".$attributes['headingmt']."px;"  : 'margin-top:0px;';
     $icon_style.= ($attributes['headingmr'] != '10') ? "margin-right:".$attributes['headingmr']."px;" : 'margin-right:10px;';
     $icon_style.= ($attributes['headingmb'] != '0') ?  "margin-bottom:".$attributes['headingmb']."px;"  : 'margin-bottom:0px;';
     $icon_style.= ($attributes['headingml'] != '0') ? "margin-left:".$attributes['headingml']."px;" : 'margin-left:0px;';
     $icon_style.= ($attributes['icon_clr'] != 'black') ? "color:" .$attributes['icon_clr'].";"  : 'color:black;';
     $icon_style.= ($attributes['ic_bg_clr'] != 'transparent') ? "background:".$attributes['ic_bg_clr'].";"  : 'background:transparent;';
     $icon_style.= ($attributes['icon_padding'] != '0') ? "padding:".$attributes['icon_padding']."px;"  : 'padding:0px;';
     $icon_style.= ($attributes['icon_border'] != '0') ?  "border-width:".$attributes['icon_border']."px;"  : 'border-width:0px;';
     $icon_style.= ($attributes['border_style'] != 'none') ? "border-style:" .$attributes['border_style'].";"  : 'border-style:none;';
     $icon_style.= ($attributes['ic_b_clr'] != 'red') ?  "border-color:".$attributes['ic_b_clr'].";"  : 'border-color:red;';
     $icon_style.= ($attributes['icon_radius'] != '0') ? "border-radius:".$attributes['icon_radius']."px;"  : 'border-radius:0px';
     $icon_style 	= (($icon_style != '') ? ' style="'.$icon_style.'"' : '');
     
    //heading style
     $heading_content = ($attributes['ibheading'] != 'How are you') ? "".$attributes['ibheading'].""  : 'How are you;';
    // $headingTag = ($attributes['ibheadingtag'] != 'h2') ? "heading:".$attributes['ibheadingtag'].";"  : 'heading:h2;';
     
     $heading_style = "";
     $heading_style.= ($attributes['title_family'] != 'ABeeZee') ? "font-family:".$attributes['title_family'].";"  : 'font-family:ABeeZee;';
     $heading_style.= ($attributes['title_weight'] != 'normal') ?  "font-weight:".$attributes['title_weight'].";"  : 'font-weight:normal;';
     $heading_style.= ($attributes['title_transform'] != 'none') ?  "text-transform:".$attributes['title_transform'].";"  : 'text-transform:none;';
     $heading_style.= ($attributes['title_decoration'] != 'none') ? "text-decoration:".$attributes['title_decoration'].";"  : 'text-decoration:none;';
     $heading_style.= ($attributes['font_sizeib'] != '') ? "font-size:".$attributes['font_sizeib']."px;"  : 'font-size:px;';
     $heading_style.= ($attributes['title_height'] != '1.5') ? "line-height:".$attributes['title_height']."em;"  : 'line-height:1.5em;';
     $heading_style.= ($attributes['letter_spacing_title'] != '0') ?  "letter-spacing:".$attributes['letter_spacing_title']."px;"  : 'letter-spacing:0px;';
     $heading_style.= ($attributes['text_colr'] != 'black') ?  "color:".$attributes['text_colr'].";"  : 'color:black;';
     $horizantl_title=($attributes['horizontal_title'] != '0') ? "" .$attributes['horizontal_title']."px "  : '0px ';
     $vertical_title=($attributes['vertical_title'] != '0') ?  "".$attributes['vertical_title']."px "  : '0px ';
     $blur_title=($attributes['blur_title'] != '0') ? "".$attributes['blur_title']."px "  : ' 0px'; 
     $shadow = $horizantl_title .= $vertical_title .= $blur_title ;
     $heading_style.=($attributes['text_shadow_color_title'] != 'yellow') ? "text-shadow:".$attributes['text_shadow_color_title']." $shadow ;"  : 'text-shadow:yellow '.$shadow.';';
     $heading_style 	= (($heading_style != '') ? ' style="'.$heading_style.'"' : '');
    
     $paragrpaph_content= ($attributes['ibpara'] != 'this is paragraph') ? "".$attributes['ibpara'].""  : 'this is paragraph;';
     $paragrpaph_style = "";
     $paragrpaph_style.= ($attributes['description_family'] != 'ABeeZee') ? "font-family:".$attributes['description_family'].";"  : 'font-family:ABeeZee;';
     $paragrpaph_style.= ($attributes['description_weight'] != 'regular') ? "font-weight:".$attributes['description_weight'].";"  : 'font-weight:regular;';
     $paragrpaph_style.= ($attributes['description_transform'] != 'none') ?  "text-transform:".$attributes['description_transform'].";"  : 'text-transform:none;';
     $paragrpaph_style.= ($attributes['description_decoration'] != 'none') ? "text-decoration:".$attributes['description_decoration'].";"  : 'text-decoration:none;';
     $paragrpaph_style.= ($attributes['description_sizeib'] != '16') ? "font-size:".$attributes['description_sizeib']."px;"  : 'font-size:16px;';
     $paragrpaph_style.= ($attributes['text_shadow_color_desc'] != 'black') ? "text-shadow:".$attributes['text_shadow_color_desc'].";"  : 'text-shadow:black;';
     $paragrpaph_style.= ($attributes['description_line_Height'] != '1.5') ? "line-height:".$attributes['description_line_Height']."em;"  : 'line-height:1.5em;';
     $paragrpaph_style.= ($attributes['letter_spacing_desc'] != '0') ? "letter-spacing:".$attributes['letter_spacing_desc']."px;" : 'letter-spacing:0px;';
     $paragrpaph_style.= ($attributes['para_clr'] != 'black') ? "color:".$attributes['para_clr'].";"  : 'color:black;';
     $horizontal_desc=($attributes['horizontal_desc'] != '0') ? "".$attributes['horizontal_desc']."px "  : '0px';
     $vertical_desc=($attributes['vertical_desc'] != '0') ?  "".$attributes['vertical_desc']."px "  : '0px ';
     $blur_desc=($attributes['blur_desc'] != '0') ? "".$attributes['blur_desc']."px "  : ' 0px'; 
     $des_shadow= $horizontal_desc .= $vertical_desc .=  $blur_desc ;
     $paragrpaph_style.=($attributes['text_shadow_color_desc'] != 'black') ? "text-shadow:".$attributes['text_shadow_color_desc']." $des_shadow ;"  : 'text-shadow:black '.$des_shadow.';';
     $paragrpaph_style	= (($paragrpaph_style != '') ? ' style="'.$paragrpaph_style. '"' : '');

     $icon_block.= '<div class="bb-ib-wrapper" '.$wrapper_style.'>';
     $icon_block.='<div class"bb-ib-icon" '.$align.'>';
     $icon_block.='<a href="" >';
     $icon_block.='<span class="'.$attributes['icon_selector'].'" '.$icon_style.'>
     </span></a>';
     $icon_block.='</div>';
     $icon_block.='<div class="bb-ib-heading">';
     $icon_block.='<'.$attributes['ibheadingtag'] .$heading_style .'>'.$heading_content.
     '</'.$attributes['ibheadingtag'].'>';
     $icon_block.='<p class="bb-ib-content-description" '.$paragrpaph_style.' >'.$paragrpaph_content. '</p>';
     $icon_block.='</div>';
     $icon_block.='</div>';

     return  $icon_block;
    }
 }

new BB_ICON_BOX();
