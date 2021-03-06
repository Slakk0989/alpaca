(function($) {

	// french - france

	var Alpaca = $.alpaca;

	Alpaca.registerView ({
		"id": "base",
		"messages": {
			"fr_FR": {
				"countries": {
					"fra":	"France",
					"afg":	"Afghanistan",
					"zaf":	"Afrique du Sud",
					"ala":	"Åland (Îles)",
					"alb":	"Albanie",
					"dza":	"Algérie",
					"deu":	"Allemagne",
					"and":	"Andorre",
					"ago":	"Angola",
					"aia":	"Anguilla",
					"ata":	"Antarctique",
					"atg":	"Antigua-et-Barbuda",
					"sau":	"Arabie saoudite",
					"arg":	"Argentine",
					"arm":	"Arménie",
					"abw":	"Aruba",
					"aus":	"Australie",
					"aut":	"Autriche",
					"aze":	"Azerbaïdjan",
					"bhs":	"Bahamas",
					"bhr":	"Bahreïn",
					"bgd":	"Bangladesh",
					"brb":	"Barbade",
					"blr":	"Bélarus",
					"bel":	"Belgique",
					"blz":	"Belize",
					"ben":	"Bénin",
					"bmu":	"Bermudes",
					"btn":	"Bhoutan",
					"bol":	"Bolivie (État plurinational de)",
					"bes":	"Bonaire, Saint-Eustache et Saba",
					"bih":	"Bosnie-Herzégovine",
					"bwa":	"Botswana",
					"bvt":	"Bouvet (Île)",
					"bra":	"Brésil",
					"brn":	"Brunéi Darussalam",
					"bgr":	"Bulgarie",
					"bfa":	"Burkina Faso",
					"bdi":	"Burundi",
					"cpv":	"Cabo Verde",
					"cym":	"Caïmans (Îles)",
					"khm":	"Cambodge",
					"cmr":	"Cameroun",
					"can":	"Canada",
					"chl":	"Chili",
					"chn":	"Chine",
					"cxr":	"Christmas (Île)",
					"cyp":	"Chypre",
					"cck":	"Cocos (Îles)/ Keeling (Îles)",
					"col":	"Colombie",
					"com":	"Comores",
					"cod":	"Congo (République démocratique du)",
					"cog":	"Congo",
					"cok":	"Cook (Îles)",
					"kor":	"Corée (République de)",
					"prk":	"Corée (République populaire démocratique de)",
					"cri":	"Costa Rica",
					"civ":	"Côte d'Ivoire",
					"hrv":	"Croatie",
					"cub":	"Cuba",
					"cuw":	"Curaçao",
					"dnk":	"Danemark",
					"dji":	"Djibouti",
					"dom":	"dominicaine (République)",
					"dma":	"Dominique",
					"egy":	"Égypte",
					"slv":	"El Salvador",
					"are":	"Émirats arabes unis",
					"ecu":	"Équateur",
					"eri":	"Érythrée",
					"esp":	"Espagne",
					"est":	"Estonie",
					"swz":	"Eswatini",
					"usa":	"États-Unis d'Amérique",
					"eth":	"Éthiopie",
					"flk":	"Falkland (Îles)/Malouines (Îles)",
					"fro":	"Féroé (Îles)",
					"fji":	"Fidji",
					"fin":	"Finlande",
					"gab":	"Gabon",
					"gmb":	"Gambie",
					"geo":	"Géorgie",
					"sgs":	"Géorgie du Sud-et-les Îles Sandwich du Sud",
					"gha":	"Ghana",
					"gib":	"Gibraltar",
					"grc":	"Grèce",
					"grd":	"Grenade",
					"grl":	"Groenland",
					"glp":	"Guadeloupe",
					"gum":	"Guam",
					"gtm":	"Guatemala",
					"ggy":	"Guernesey",
					"gin":	"Guinée",
					"gnq":	"Guinée équatoriale",
					"gnb":	"Guinée-Bissau",
					"guy":	"Guyana",
					"guf":	"Guyane française",
					"hti":	"Haïti",
					"hmd":	"Heard-et-Îles MacDonald (Île)",
					"hnd":	"Honduras",
					"hkg":	"Hong Kong",
					"hun":	"Hongrie",
					"imn":	"Île de Man",
					"umi":	"Îles mineures éloignées des États-Unis",
					"ind":	"Inde",
					"iot":	"Indien (Territoire britannique de l'océan)",
					"idn":	"Indonésie",
					"irn":	"Iran (République Islamique d')",
					"irq":	"Iraq",
					"irl":	"Irlande",
					"isl":	"Islande",
					"isr":	"Israël",
					"ita":	"Italie",
					"jam":	"Jamaïque",
					"jpn":	"Japon",
					"jey":	"Jersey",
					"jor":	"Jordanie",
					"kaz":	"Kazakhstan",
					"ken":	"Kenya",
					"kgz":	"Kirghizistan",
					"kir":	"Kiribati",
					"kwt":	"Koweït",
					"lao":	"Lao, République démocratique populaire",
					"lso":	"Lesotho",
					"lva":	"Lettonie",
					"lbn":	"Liban",
					"lbr":	"Libéria",
					"lby":	"Libye",
					"lie":	"Liechtenstein",
					"ltu":	"Lituanie",
					"lux":	"Luxembourg",
					"mac":	"Macao",
					"mkd":	"Macédoine (l'ex-République yougoslave de)",
					"mdg":	"Madagascar",
					"mys":	"Malaisie",
					"mwi":	"Malawi",
					"mdv":	"Maldives",
					"mli":	"Mali",
					"mlt":	"Malte",
					"mnp":	"Mariannes du Nord (Îles)",
					"mar":	"Maroc",
					"mhl":	"Marshall (Îles)",
					"mtq":	"Martinique",
					"mus":	"Maurice",
					"mrt":	"Mauritanie",
					"myt":	"Mayotte",
					"mex":	"Mexique",
					"fsm":	"Micronésie (États fédérés de)",
					"mda":	"Moldova, République de",
					"mco":	"Monaco",
					"mng":	"Mongolie",
					"mne":	"Monténégro",
					"msr":	"Montserrat",
					"moz":	"Mozambique",
					"mmr":	"Myanmar",
					"nam":	"Namibie",
					"nru":	"Nauru",
					"npl":	"Népal",
					"nic":	"Nicaragua",
					"ner":	"Niger",
					"nga":	"Nigéria",
					"niu":	"Niue",
					"nfk":	"Norfolk (Île)",
					"nor":	"Norvège",
					"ncl":	"Nouvelle-Calédonie",
					"nzl":	"Nouvelle-Zélande",
					"omn":	"Oman",
					"uga":	"Ouganda",
					"uzb":	"Ouzbékistan",
					"pak":	"Pakistan",
					"plw":	"Palaos",
					"pse":	"Palestine, État de",
					"pan":	"Panama",
					"png":	"Papouasie-Nouvelle-Guinée",
					"pry":	"Paraguay",
					"nld":	"Pays-Bas",
					"per":	"Pérou",
					"phl":	"Philippines",
					"pcn":	"Pitcairn",
					"pol":	"Pologne",
					"pyf":	"Polynésie française",
					"pri":	"Porto Rico",
					"prt":	"Portugal",
					"qat":	"Qatar",
					"syr":	"République arabe syrienne",
					"caf":	"République centrafricaine",
					"reu":	"Réunion",
					"rou":	"Roumanie",
					"gbr":	"Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
					"rus":	"Russie (Fédération de)",
					"rwa":	"Rwanda",
					"esh":	"Sahara occidental",
					"blm":	"Saint-Barthélemy",
					"shn":	"Sainte-Hélène, Ascension et Tristan da Cunha",
					"lca":	"Sainte-Lucie",
					"kna":	"Saint-Kitts-et-Nevis",
					"smr":	"Saint-Marin",
					"maf":	"Saint-Martin (partie française)",
					"sxm":	"Saint-Martin (partie néerlandaise)",
					"spm":	"Saint-Pierre-et-Miquelon",
					"vat":	"Saint-Siège",
					"vct":	"Saint-Vincent-et-les Grenadines",
					"slb":	"Salomon (Îles)",
					"wsm":	"Samoa",
					"asm":	"Samoa américaines",
					"stp":	"Sao Tomé-et-Principe",
					"sen":	"Sénégal",
					"srb":	"Serbie",
					"syc":	"Seychelles",
					"sle":	"Sierra Leone",
					"sgp":	"Singapour",
					"svk":	"Slovaquie",
					"svn":	"Slovénie",
					"som":	"Somalie",
					"sdn":	"Soudan",
					"ssd":	"Soudan du Sud",
					"lka":	"Sri Lanka",
					"swe":	"Suède",
					"che":	"Suisse",
					"sur":	"Suriname",
					"sjm":	"Svalbard et l'Île Jan Mayen",
					"tjk":	"Tadjikistan",
					"twn":	"Taïwan (Province de Chine)",
					"tza":	"Tanzanie, République-Unie de",
					"tcd":	"Tchad",
					"cze":	"Tchéquie",
					"atf":	"Terres australes françaises",
					"tha":	"Thaïlande",
					"tls":	"Timor-Leste",
					"tgo":	"Togo",
					"tkl":	"Tokelau",
					"ton":	"Tonga",
					"tto":	"Trinité-et-Tobago",
					"tun":	"Tunisie",
					"tkm":	"Turkménistan",
					"tca":	"Turks-et-Caïcos (Îles)",
					"tur":	"Turquie",
					"tuv":	"Tuvalu",
					"ukr":	"Ukraine",
					"ury":	"Uruguay",
					"vut":	"Vanuatu",
					"ven":	"Venezuela (République bolivarienne du)",
					"vgb":	"Vierges britanniques (Îles)",
					"vir":	"Vierges des États-Unis (Îles)",
					"vnm":	"Viet Nam",
					"wlf":	"Wallis-et-Futuna",
					"yem":	"Yémen",
					"zmb":	"Zambie",
					"zwe":	"Zimbabwe"
				},
				required: "Ce champ est requis",
				invalid: "Ce champ est invalide",
				months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
				timeUnits: {
					SECOND: "secondes",
					MINUTE: "minutes",
					HOUR: "heures",
					DAY: "jours",
					MONTH: "mois",
					YEAR: "années"
				},
				"notOptional": "Ce champ n'est pas optionnel.",
				"disallowValue": "{0} sont des valeurs interdites.",
				"invalidValueOfEnum": "Ce champ doit prendre une des valeurs suivantes : {0}. [{1}]",
				"notEnoughItems": "Le nombre minimum d'éléments est {0}",
				"tooManyItems": "Le nombre maximum d'éléments est {0}",
				"valueNotUnique": "Les valeurs sont uniques",
				"notAnArray": "Cette valeur n'est pas une liste",
				"invalidDate": "Cette date ne correspond pas au format {0}",
				"invalidEmail": "Adresse de courriel invalide, ex: info@cloudcms.com",
				"stringNotAnInteger": "Cette valeur n'est pas un nombre entier.",
				"invalidIPv4": "Adresse IPv4 invalide, ex: 192.168.0.1",
				"stringValueTooSmall": "La valeur minimale pour ce champ est {0}",
				"stringValueTooLarge": "La valeur maximale pour ce champ est {0}",
				"stringValueTooSmallExclusive": "La valeur doit-être supérieure à {0}",
				"stringValueTooLargeExclusive": "La valeur doit-être inférieure à {0}",
				"stringDivisibleBy": "La valeur doit-être divisible par {0}",
				"stringNotANumber": "Cette valeur n'est pas un nombre.",
				"invalidPassword": "Mot de passe invalide",
				"invalidPhone": "Numéro de téléphone invalide, ex: (123) 456-9999",
				"invalidPattern": "Ce champ doit correspondre au motif {0}",
				"stringTooShort": "Ce champ doit contenir au moins {0} caractères",
				"stringTooLong": "Ce champ doit contenir au plus {0} caractères",
				"chooseFile": "Sélectionnez un fichier...",
				"chooseFiles": "Sélectionnez des fichiers...",
				"dropZoneSingle": "Cliquez sur le bouton Sélection ou glissez déposez un fichier ici...",
				"dropZoneMultiple": "Cliquez sur le bouton Sélection ou glissez déposez des fichiers ici...",
				"thumbnail": "Aperçu",
				"name": "Nom",
				"size": "Taille",
				"actions": "Actions",
				"filetypeNotAccepted": "Type de fichier non accepté : {0}",
				"filesizeTooBig": "Fichier trop gros : {0}",
				"delete": "Supprimer"
            }
        }
    });

})(jQuery);
