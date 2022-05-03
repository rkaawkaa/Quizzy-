/* titre h1*/
/*image selon les scores et les thèmes*/

const dataQuizz = {
    "histoire" : {
        "titreH": "Histoire",
        "bgPerfect": "https://images.unsplash.com/photo-1641563127349-c9d58bc9847d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80",
        "bgGood": "https://images.unsplash.com/photo-1588109294864-29a636347faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "bgMedium": "https://images.unsplash.com/photo-1541513982013-5dc4f56697f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "bgBad": "https://images.unsplash.com/photo-1647264017490-979dfb5d05af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    "philosophie" : {
        "titreH": "Philosophie",
        "bgPerfect": "https://images.unsplash.com/photo-1622411587202-4bb3873d087c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        
        "bgGood": "https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
     
        "bgMedium": "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    
        "bgBad": "https://images.unsplash.com/photo-1508014924734-d75124b0f402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  
    },
    "litterature" : {
        "titreH": "Littérature",
        "bgPerfect": "https://img-4.linternaute.com/Of_eub0VqCjDRQKbvABLS_q5ZXw=/1500x/smart/6c54dedde8674b9eaddbd9e43031d22b/ccmcms-linternaute/10992342.jpg",
 
        "bgGood": "https://images.lanouvellerepublique.fr/image/upload/t_1020w/5fa817635a0a3052738b45a6.jpg",

        "bgMedium": "https://images.unsplash.com/photo-1605337548923-f8649982be84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

        "bgBad": "https://images.unsplash.com/photo-1598967998269-9b84a4e402f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
 
    },
    "sport" : {
        "titreH": "Sport",
        "bgPerfect": "https://www.afriquesports.net/wp-content/uploads/2022/01/cristiano-ronaldo-body.jpg",

        "bgGood": "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",

        "bgMedium": "https://images.unsplash.com/photo-1489659831163-682b5af42225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
 
        "bgBad": "https://t3.ftcdn.net/jpg/03/29/41/42/360_F_329414257_QZRuivga1aZgVqkxfbIVgkb4K65dr5D7.jpg",
 
    },
    "sciences" : {
        "titreH": "Sciences",
        "bgPerfect": "https://i.pinimg.com/550x/60/ae/b4/60aeb4bdf6a300cc9346ee7835c28d39.jpg",

        "bgGood": "https://images.news18.com/ibnlive/uploads/2021/04/1618728765_einstein.jpg?im=FitAndFill,width=1200,height=900",
  
        "bgMedium": "https://images.unsplash.com/photo-1575468130797-aa950b68aeec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
 
        "bgBad": "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    },
    "art" : {
        "titreH": "Art",
        "bgPerfect": "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",

        "bgGood": "https://images.unsplash.com/photo-1533408944756-4950754f3ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80",

        "bgMedium": "https://www.artranked.com/images/33/336ba3a396bb3adbaeadb2bf07a6b377.JPG",

        "bgBad": "https://i.pinimg.com/originals/11/a9/b2/11a9b299fe9166a3a507e408ac488470.jpg",

    }
}

var mesQuestions ={};
/*questions et réponses */
mesQuestions.histoireQuestions = [
    {
        question: "Qui est à l'origine de la naissance du code civil français?",
        a: 'Charles de Gaulle',
        b:'Napoléon Bonaparte',
        c:'Charles Martel',
        d:'Louis XIV',
        correct : 'Napoléon Bonaparte',
        texteAnswer: 'Le Code civil des Français fut promulgué le 21 mars 1804. Napoléon réussit là où tous les gouvernements avaient échoué avait lui : l’adoption d’un Code des lois civiles bien rédigé, facile à interpréter, triomphe du droit écrit sur les coutumes. Il fut le moteur de ce grand œuvre pensé et préparé par une cohorte des juristes de premier plan, auxquels il fournit les moyens de travailler.'

    },{
        question: "Qui a été le successeur au pouvoir de Joseph Staline ?",
        a: 'Lavrenti Beria',
        b:'Vasily Vakhrushev',
        c:'Nikita Khrouchtchev',
        d:'Vladimir Lénine',
        correct: 'Nikita Khrouchtchev',
        texteAnswer: 'Nikita Khroutchev devint, à la suite de la mort de Joseph Staline en 1953, le premier secrétaire du Parti Communiste de l\'union soviétique puis président du conseil des ministres. Il joua un rôle important dans le processus de déstalinisation et dans le développement du programme spatial soviétique.'
    }, {
        question: "Où Abraham Lincoln a-t-il été assassiné ?",
        a: 'A la sortie d\'un théatre',
        b:'A la sortie d\'un cinéma',
        c:'A la sortie d\'un congrès',
        d:'A la sortie d\'un restaurant',
        correct: 'A la sortie d\'un théatre',
        texteAnswer: 'Abraham Lincoln, plaidant pour l\'abolition total de l\'esclavage, se retrouve être la cible de plusieurs tentatives d\'assassinat. Le soir du 14 avril 1865, au Théâtre Ford à Washington, il se fait tirer dessus à bout portant et décède. Des millions d\'américains salueront le passage du cortège funèbre pour lui rendre mémoire.'
    }, {
        question: "Que s\'est-il passé lors de la mission américaine Apollo 1 ?",
        a: 'L\'équipage mourut lors d\'un exercice au sol suite à un incendie dans la capsule',
        b:'A cause d\'une panne tout le vol se déroula sans communications radio',
        c:'La fusée explosa environ une heure après le décollage',
        d:'Rien d\'anormal',
        correct: 'L\'équipage mourut lors d\'un exercice au sol suite à un incendie dans la capsule',
        texteAnswer: 'Le 27 janvier 1967, un incendie se déclara dans le module du commande de vaisseau dü à un court-circuit provoqué par un fil éléctrique dénudé. Cette incendie provoquera la mort des trois membres de l\'équipage.'
    }, {
        question: "Qu\'est-ce que l\'holodomor ?",
        a: 'Un rituel réligieux chez les incas',
        b:'Le nom d\'une grande récession économique qui toucha la Russie au XVIIIè siècle',
        c:'Le nom d\'un mythe grecque très ancien',
        d:'Une famine en Union Soviétique qui tua des millions d\'ukrainiens.',
        correct: 'Une famine en Union Soviétique qui tua des millions d\'ukrainiens.',
        texteAnswer: 'L\'holodomor désigne la grande famine organisée par l\'URSS en 1932-1933, qui tua entre 3 et 5 millions d\'ukrainiens. On peut traduire ce mot par \'une extermination par la faim\'.'
    }, {
        question: "Qui tient-on pour responsable du terrible incendie qui a ravagé Rome en 64 ?",
        a: 'Jules César',
        b:'Néron',
        c:'Marc-Aurèle',
        d:'Nous ne savons pas.',
        correct: 'Néron',
        texteAnswer: 'En 64, Rome est ravagée par un terrible incendie. Une légende tenace a depuis lors fait de Néron, qu\'on aurait vu déclamer des vers au milieu des flammes, le responsable de cette catastrophe.'
    }, {
        question: "Qu\'est-ce que le massacre de la Saint-Barthélemy ?",
        a: 'L\'assassinat de l\'homme d\'église le Saint Barthélémy',
        b:'Le massacre de musulmans par de fervents catholiques',
        c:'Le massage de protestants à Paris',
        d:'L\'assassinat de centaines de civils sur l\'île de Saint-Barthélémy',
        correct: 'Le massage de protestants à Paris',
        texteAnswer: 'Le massacre de la Saint-Barthélemy est le massacre de protestants déclenché à Paris, le 24 août 1572, jour de la saint Barthélemy, prolongé pendant plusieurs jours dans la capitale, puis étendu à plus d\'une vingtaine de villes de province durant les semaines suivantes et même les mois suivants.'
    }, {
        question: "Quelle est l'écriture utilisée par les Sumériens (Mésopotamiens) ?",
        a: 'Les hiéroglyphes',
        b:'L\'écriture cunéiforme',
        c:'L\'alphabet à 22 lettres',
        d:'L\'alphabet à 26 lettres',
        correct: 'L\'écriture cunéiforme',
        texteAnswer: 'Le sumérien semble être la plus ancienne langue écrite connue, sous une forme d\'écriture appelée le cunéiforme, voire la plus ancienne langue connue. L’écriture cunéiforme est un système d\'écriture mis au point en Basse Mésopotamie entre 3400 et 3300 av. J.-C., qui s\'est par la suite répandu dans tout le Proche-Orient ancien, avant de disparaître dans les premiers siècles de l\'ère chrétienne.'
    }, {
        question: "En quelle année, la première expédition négrière française a-t-elle eu lieu ?",
        a: '1594',
        b:'1513',
        c:'1661',
        d:'1365',
        correct: '1594',
        texteAnswer: 'En 1594, le bateau Espérance part au Gabon puis au Brésil. Une autorisation sera accordée pour déporter des esclaves noirs à l\'ile de Saint-Christophe. En 1642, Louis XIII autoriste la traite. Des dizaines d\'expéditions seront menés ensuite.'
    }, {
        question: 'Quelle est la plus grande pyramide d’Egypte ?',
        a: 'La pyramide de Khéops',
        b:'La pyramide de Djéser',
        c:'La pyramide de Khéphren',
        d:'La pyramide du Caire',
        correct: 'La pyramide de Khéops',
        texteAnswer: 'Haute de 137 mètres, elle s’élève depuis plus de 4 500 ans sur le plateau de Gizeh, aux côtés des pyramides de Khéphren et de Mykérinos. Des sept merveilles du monde antique, la pyramide de Khéops – du nom du pharaon dont elle est le tombeau – est la seule qui existe encore aujourd’hui.'
    }
]  


mesQuestions.philosophieQuestions = [
    {
        question: "De quel courant philosophique Marc-Aurèle fait-il partie ?",
        a: 'Le stoïcisme',
        b:'Le déterminisme',
        c:'L\'essentialisme',
        d:'L\'existentialisme',
        correct : 'Le stoïcisme',
        texteAnswer: 'Marc-Aurèle (121 – 180 ap. J.-C.) est un philosophe romain stoïcien. Pendant les vingt dernières années de sa vie, il devint empereur et rédige les Pensées pour moi-même pendant ses campagnes militaires, contre les Parthes ou les Quades. Son règne fut en effet marqué par des attaques incessantes des barbares contre l’Empire, dont il eut à assurer la défense.'

    },{
        question: "Qu\'est-il inscrit sur le temple de Delphes ?",
        a: 'Cueille la vie',
        b:'Dieu est mort',
        c:'Connais toi toi-même',
        d:'Les dieux sont miséricordieux',
        correct : 'Connais toi toi-même',
        texteAnswer: 'Gnothi seauton est une expression en grec ancien signifiant « Connais-toi toi-même ».C’est, selon le Charmide de Platon, le plus ancien des trois préceptes qui étaient gravés à l\'entrée du temple d\'Apollon à Delphes.'

    }, {
        question: "Quel est le livre que n\'a pas écrit Friedrich Nietzsche ?",
        a: 'Par delà bien et mal',
        b:'Ainsi parlait Zarathoustra',
        c:'Le monde comme volonté et comme représentation',
        d:'Ecce Homo',
        correct : 'Le monde comme volonté et comme représentation',
        texteAnswer: 'Le monde comme volonté et comme représentation est un livre d\'Arthur Schopenhauer, un philosophe allemand du XIXè siècle.'

    }, {
        question: "Quel philosophe n\'appartient au courant de pensée de l\'existentialisme ?",
        a: 'Baruch Spinoza',
        b:'Sören Kierkegaard',
        c:'Simone de Beauvoir',
        d:'Jean-Paul Sartre',
        correct : 'Baruch Spinoza',
        texteAnswer: 'Baruch Spinoza était un déterministe. Kierkegaard était un existentialisme chrétien, tandis que Jean-Paul Sartre et Simone de Beauvoir étaient des existentialistes athées.'

    }, {
        question: "Qui a dit que la vie, telle une pendule, oscille de l\'ennui à la souffrance ?",
        a: 'Platon',
        b:'Arthur Schopenhauer',
        c:'Jean-Jacques Rousseau',
        d:'Friedrich Engels',
        correct : 'Arthur Schopenhauer',
        texteAnswer: 'Cette phrase extraite du Monde comme Volonté et comme Répresentation  souligne que la souffrance est le fond de l\'existence humaine selon Schopenhauer, elle provient de la différence entre les désirs humains et la capacité à les réaliser.'

    }, {
        question: "Qui a écrit les Essais ?",
        a: 'Jean Cocteau',
        b:'Paul Valéry',
        c:'Jacques Derrida',
        d:'Michel de Montaigne',
        correct : 'Michel de Montaigne',
        texteAnswer: 'Les Essais sont l\'œuvre majeure de Michel de Montaigne (1533-1592), à laquelle il consacre un travail d\'écriture et de réécriture à partir de 1572 continué pratiquement jusqu\'à sa mort. Il traite de nombre de sujets, sans ordre apparent : médecine, arts, livres, affaires domestiques, histoire ancienne, chevaux, maladien 1 entre autres, auxquels Montaigne mêle des réflexions sur sa propre vie et sur l\'Homme.'

    }, {
        question: "Qu\'est-ce qu\'être épicurien ?",
        a: 'Rechercher un maximum les plaisirs de la vie',
        b:'Croire que le bonheur se trouve dans la mesure de ses désirs',
        c:'Considérer que le bien collectif est le but suprème',
        d:'Croire que la joie se trouve dans l\'élaboration de grands projects',
        correct : 'Rechercher un maximum les plaisirs de la vie',
        texteAnswer: 'Le mot épicurien désigne une personne qui profite de la vie, qui recherche le plaisir dans la vie, en particulier avec la nourriture. Au départ, ce mot qualifiait une personne adepte de la doctrine philosophique d’Épicure, un philosophe grec de l’Antiquité. Une partie de cette doctrine concernait le bonheur et les désirs.'

    }, {
        question: "Qu\'est-ce que l\'hédonisme ?",
        a: 'Une morale fondée sur la recherche du plaisir',
        b:'Une morale fondée sur la recherche du salut',
        c:'Une morale fondée sur la recherche du bonheur',
        d:'Une morale fondée sur la recherche de la justice',
        correct : 'Une morale fondée sur la recherche du plaisir',
        texteAnswer: 'L’hédonisme est une doctrine philosophique attribuée à Aristippe de Cyrène selon laquelle la recherche de plaisirs et l\'évitement de souffrances constituent le but de l\'existence humaine'

    }, {
        question: "Qui a affirmé : « le cœur a ses raisons que la raison ne connaît point » ?",
        a: 'Blaise Pascal',
        b:'Friedrich Hegel',
        c:'René Descartes',
        d:'Gilles Deleuze',
        correct : 'Blaise Pascal',
        texteAnswer: '« Le cœur a ses raisons que la raison ne connaît point » est un aphorisme philosophique de Blaise Pascal issu de ses Pensées.'

    }, {
        question: "Qu’est-ce que l’« homo faber » chez Hannah Arendt et chez Henri Bergson?",
        a: 'L’artiste',
        b:'Le producteur d’outils',
        c:'Le consommateur',
        d:'Le technocrate',
        correct : 'Le producteur d’outils',
        texteAnswer: 'En philosophie, la notion d\'homo faber fait référence à l\'Homme en tant qu\'être susceptible de fabriquer des outils.'

    }
]  

mesQuestions.sportQuestions = [
    {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    },{
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }
]  

mesQuestions.litteratureQuestions = [
    {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    },{
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }
]  

mesQuestions.sciencesQuestions = [
    {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    },{
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }
]  

mesQuestions.artQuestions = [
    {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    },{
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }, {
        question: "",
        a: '',
        b:'',
        c:'',
        d:'',
        correct : '',
        texteAnswer: ''

    }
]  






/*message selon bonnes ou mauvaises réponses */

const generalData = {
    "finalmessage1" : {
        "scorePerfect": "Excellent !<br> Votre score est parfait. Il est de ",
        "scoreGood": "Félicitations !<br> Votre score final est de ",
        "scoreMedium": "Pas mal !<br> Votre score final est de ",
        "scoreBad": "Aïe !<br> Vous n'avez pas été très bon et votre score final est de ",
    },
    "finalmessage2" : {
        "scorePerfect": "Vous êtes simplement le <span class=\"purple-span\">meilleur !</span>",
        "scoreGood": "Vous avez été <span class=\"purple-span\">très bon !</span>",
        "scoreMedium": "Vous avez été <span class=\"purple-span\">moyen !</span>",
        "scoreBad": "La prochaine, vous pourrez faire <span class=\"purple-span\">mieux !</span>",
    }
}