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
        texteAnswer: 'Le Code civil des Français fut promulgué le 21 mars 1804. Napoléon réussit là où tous les gouvernements avaient échoué avant lui : l’adoption d’un Code des lois civiles bien rédigé, facile à interpréter, triomphe du droit écrit sur les coutumes. Il fut le moteur de cettee grand œuvre pensée et préparée par une cohorte des juristes de premier plan, auxquels il fournit les moyens de travailler.'

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
        texteAnswer: 'Abraham Lincoln, plaidant pour l\'abolition total de l\'esclavage, se retrouve être la cible de plusieurs tentatives d\'assassinat. Le soir du 14 avril 1865, au Théâtre Ford à Washington, il se fait tirer dessus à bout portant et décède. Des millions d\'américains salueront le passage du cortège funèbre pour lui rendre hommage.'
    }, {
        question: "Que s\'est-il passé lors de la mission américaine Apollo 1 ?",
        a: 'L\'équipage mourut lors d\'un exercice au sol suite à un incendie dans la capsule',
        b:'A cause d\'une panne tout le vol se déroula sans communications radio',
        c:'La fusée explosa environ une heure après le décollage',
        d:'Rien d\'anormal',
        correct: 'L\'équipage mourut lors d\'un exercice au sol suite à un incendie dans la capsule',
        texteAnswer: 'Le 27 janvier 1967, un incendie se déclara dans le module du commande de vaisseau dû à un court-circuit provoqué par un fil éléctrique dénudé. Cette incendie provoquera la mort des trois membres de l\'équipage.'
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
        question: "Quel est la nationalité de Usain Bolt ?",
        a: 'Congolais',
        b:'Jamaïcain',
        c:'Ivoirien',
        d:'Equatorien',
        correct : 'Jamaïcain',
        texteAnswer: 'Usain Bolt est un sprinteur jamaïcain, spécialiste des épreuves de sprint. Parmi les athlètes les plus titrés de l\'histoire des Jeux olympiques en sprint avec huit médailles d\'or, il est le plus titré de l\'histoire des championnats du monde avec onze victoires. Il est le premier athlète à détenir simultanément les records du monde du 100 m, 200 m et 4x100 m.'

    },{
        question: "Au judo, quel est le grade le plus élevé parmi ces ceintures ?",
        a: 'Bleue',
        b:'Orange',
        c:'Verte',
        d:'Jaune',
        correct : 'Bleue',
        texteAnswer: 'Dans l\'ordre de la moins élevée à la plus élevée, les ceintures au judo sont celles-ci: blanche, jaune, orange, verte, bleue, marron, noire puis rouge. La ceinture rouge n\'a été décernée qu\'une fois, à Jigoro Kano, le père du Judo.'

    }, {
        question: "Qui est le meilleur buteur de l\'histoire en ligue des champions au football?",
        a: 'Lionel Messi',
        b:'Pelé',
        c:'C. Ronaldo',
        d:'Michel Platini',
        correct : 'C. Ronaldo',
        texteAnswer: 'Le meilleur buteur de l\'histoire de la compétition est C.Ronaldo. Il est suivi par Lionel Messi. Ni Pelé ni Michel Platini ne font partie des 20 plus grands buteurs de cette compétition.'

    }, {
        question: "Quel est le joueur le plus titré de l\'histoire au tennis?",
        a: 'Rafael Nadal',
        b:'Novak Djokovic',
        c:'Yannick Noah',
        d:'Roger Federer',
        correct : 'Rafael Nadal',
        texteAnswer: 'Rafael Nadal, en remportant l\'open d\'Australie en 2022, devance Roger Federer et devient le joueur le plus titré de l\'histoire au tennis.'

    }, {
        question: "Quelle est le record du monde de lancer de javelot?",
        a: '98,48m',
        b:'82,14m',
        c:'103,66m',
        d:'112,69m',
        correct : '98,48m',
        texteAnswer: 'Les records du monde du lancer du javelot sont actuellement détenus par le Tchèque Jan Železný qui établit la marque de 98,48 m le 25 mai 1996 à Iéna en Allemagne.'

    }, {
        question: "A quel sport doit-on jouer pendant 2 mi-temps de 40 minutes ?",
        a: 'Au rugby',
        b:'Au football',
        c:'Au handball',
        d:'Au basketball',
        correct : 'Au rugby',
        texteAnswer: 'Le rugby est un sport collectif où deux équipes s\'affronte pendant 2 mi-temps de 40 minutes chacune.'

    }, {
        question: "Quelle objet dans le sport féminin ci-dessous mesure 76cm de haut ?",
        a: 'Une haie d\'athlétisme',
        b:'Un but de hockey sur glace',
        c:'Une table de tennis de table',
        d:'Une poutre de gymnastique',
        correct : 'Une haie d\'athlétisme',
        texteAnswer: 'Les haies d\'athlétisme chez les femmes mesurent 76cm de haut. Pour les hommes, cette hauteur monte à 91cm'

    }, {
        question: "De combien de joueurs est composée une équipe de water-polo?",
        a: '5',
        b:'6',
        c:'7',
        d:'8',
        correct : '7',
        texteAnswer: 'Le water-polo est un sport collectif aquatique opposant deux formations de sept joueurs. Il fut codifié dans le Royaume-Uni à la fin du xixe siècle et devint sport olympique en 1900 pour les hommes, et en 2000 pour les femmes.'

    }, {
        question: "Lequel de ces quatre noms ne fait pas partie du vocabulaire du golfeur ?",
        a: 'Birdie',
        b:'Albatros',
        c:'Eagles',
        d:'Cacatoès',
        correct : 'Cacatoès',
        texteAnswer: 'Seul le cacatoès n\'est pas un mot du vocabulaire du golf. Les autres représentent diverses coups techniques.'

    }, {
        question: "Quel art utilise un sabre en lamelles de bambou ?",
        a: 'Kendo',
        b:'Kyudo',
        c:'Tae Kwon Do',
        d:'Le Viet-vo-dao',
        correct : 'Kendo',
        texteAnswer: 'Le kendo ou l\'escrime au sabre était pratiqué autrefois au Japon par les samouraïs. Le kendo n\'est pas seulement un art martial mais également un sport de compétition, aujourd\'hui largement pratiqué au Japon. Le kendo ne se résume toutefois pas à un simple ensemble de techniques et de tactiques du combat au sabre. Il comprend également un volet spirituel. Le kendo permet à ses pratiquants de développer leur force de caractère et leur détermination.'

    }
]  

mesQuestions.litteratureQuestions = [
    {
        question: "Qui a écrit \"crime et Châtiment\",",
        a: 'Fyodor Dostoevsky',
        b:'Léon Tolstoï',
        c:'Milan Kundera',
        d:'Victor Hugo',
        correct : 'Fyodor Dostoevsky',
        texteAnswer: 'Crime et Châtiment est un roman de l’écrivain russe Fiodor Dostoïevski en 1866. Le roman dépeint l\'assassinat d’une vieille prêteuse sur gage et de sa sœur par Rodion Raskolnikov, ancien étudiant de Saint-Pétersbourg tombé dans la pauvreté, et ses conséquences émotionnelles, mentales et physiques sur le meurtrier.'

    },{
        question: "A quel courant littéraire appartient Albert Camus?",
        a: 'Les Lumières',
        b:'Le classicisme',
        c:'L\'absurde',
        d:'L\'humanisme',
        correct : 'L\'absurde',
        texteAnswer: 'L\'oeuvre s\'inscrit dans le mouvement littéraire de l\'absurde. Albert Camus a inventé une notion qu\'il appelle philosophie de l\'absurde.'

    }, {
        question: "Comment s\'appelle la pièce de théâtre de Jean-Paul Sartre qui se termine par la célèbre citation \"L\'enfer c\'est les autres\"?",
        a: 'La Nausée',
        b:'L\'être et le néant',
        c:'Huis clos',
        d:'Phèdre',
        correct : 'Huis clos',
        texteAnswer: 'Huis clos est une pièce de théâtre en un acte de Jean-Paul Sartre, rédigée à la fin de l\'année 1943 et représentée pour la première fois le 27 mai 1944 au théâtre du Vieux-Colombier, à Paris1. Cette pièce est symbolique de l\'existentialisme, mouvement littéraire du début du xxe siècle où l\'être humain est défini par ses actes. Sartre pensait avoir écrit une pièce drôle.'

    }, {
        question: "Quel est le genre littéraire de prédilection de Stefan Zweig?",
        a: 'Le théâtre',
        b:'La poésie',
        c:'Le roman',
        d:'La nouvelle',
        correct : 'La nouvelle',
        texteAnswer: 'Stefan Zweig est un écrivain, dramaturge, journaliste et biographe autrichien. Son genre de prédilection est la nouvelle, dont certaines sont extremement connues comme \"Le joueur d\'échecs \".'

    }, {
        question: "Quelle est l'arme du crime la plus souvent utilisée par les coupables dans les romans d\'Agatha Christie ?",
        a: 'La dague',
        b:'Le poison',
        c:'Le pistolet',
        d:'La strangulation',
        correct : 'Le poison',
        texteAnswer: 'Agatha Christie est une femme de lettres britannique, auteur de nombreux romans policiers. Elle fait partie des écrivains les plus connus au monde et elle est considérée comme l\'auteur le plus lu de l\'histoire, c\'est aussi de très loin l\'auteur le plus traduit dans le monde. Dans la plupart de ses romans, les criminelles utilisent le poison pour tuer.'

    }, {
        question: "Quelle est la différence entre un polar et un thriller ?",
        a: 'La présence de crimes',
        b:'Le portrait psychologique des personnages',
        c:'La présence d\'une enquête de police',
        d:'Le déroulement dans un seul lieu',
        correct : 'La présence d\'une enquête de police',
        texteAnswer: 'Ce qui distingue le polar du thriller est principalement l\'intrigue. Alors que le polar se base sur l\'investigation des forces de police ou d\'un détective privée, le thriller tient en haleine les lecteurs en montrant progressivement ô combien l\'ennemi est dangereux pour le monde.'

    }, {
        question: "Quelle est le prénom de Madame Bovary, livre de Gustave Flaubert ?",
        a: 'Sarah',
        b:'Marie',
        c:'Emma',
        d:'Eglantine',
        correct : 'Emma',
        texteAnswer: 'adame Bovary, est un roman de Gustave Flaubert paru en 1857. L\'histoire est celle de l\'épouse d\'un médecin de province, Emma Bovary, qui lie des relations adultères et vit au-dessus de ses moyens, essayant ainsi d\'éviter l’ennui, la banalité et la médiocrité de la vie provinciale.'

    }, {
        question: "Où se déroule l'intrigue du roman \"Les Misérables\" ?",
        a: 'Londres',
        b:'Paris',
        c:'Berlin',
        d:'Rome',
        correct : 'Paris',
        texteAnswer: 'Les Misérables est un roman de Victor Hugo publié en 1862,Il décrit la vie de pauvres gens dans Paris et la France provinciale du premier tiers du xixe siècle, l’auteur s\'attachant plus particulièrement au destin du bagnard Jean Valjean ; il a donné lieu à de nombreuses adaptations, au cinéma et sur d’autres supports.'

    }, {
        question: "Quelle période est décrite dans le roman \"Gatsby Le Magnifique\" de Francis Scott Fitzgerald ?",
        a: 'Les années 1940',
        b:'Les années 1920',
        c:'Les années 1850',
        d:'Les années 1900',
        correct : 'Les années 1920',
        texteAnswer: 'Gatsby le Magnifique est un roman de l\'écrivain américain F. Scott Fitzgerald publié en 1925. L\'histoire se déroule à New York dans les années 1920. Il est souvent décrit comme le reflet des années folles dans la littérature américaine.'

    }, {
        question: "Comment s\'appelle le personnage qui symbolise la surveillance et le contrôle des populations dans le roman \"1984\" de George Orwell ?",
        a: 'Big Father',
        b:'God Father',
        c:'Big Brother',
        d:'The eyes man',
        correct : 'Big Brother',
        texteAnswer: 'Il décrit une Grande-Bretagne trente ans après une guerre nucléaire entre l\'Est et l\'Ouest censée avoir eu lieu dans les années 1950 et où s\'est instauré un régime de type totalitaire fortement inspiré à la fois de certains éléments du stalinisme et du nazisme. La liberté d\'expression n’existe plus. Toutes les pensées sont minutieusement surveillées et d’immenses affiches sont placardées dans les rues, indiquant à tous que « Big Brother vous regarde »'

    }
]  

mesQuestions.sciencesQuestions = [
    {
        question: "Quelle est l'unité de mesure de la tension éléctrique ?",
        a: 'L\'ampère',
        b:'Le volt',
        c:'Le lumens',
        d:'Le watt',
        correct : 'Le volt',
        texteAnswer: 'L\'ampère désigne l\'intensité éléctrique, le lumens le flux lumineux et le watt est une unité de puissance. Le volt, lui exprime la tension éléctrique.'

    },{
        question: "Dans quel domaine des sciences s\'est surtout exprimé Nikola Tesla?",
        a: 'La chimie',
        b:'L\'énergie éléctrique',
        c:'Le nucléaire',
        d:'La mécanique',
        correct : 'L\'énergie éléctrique',
        texteAnswer: 'Nikola Tesla était un savant fou. Ses travaux les plus connus et les plus largement diffusés portent sur l’énergie électrique. Il a mis au point les premiers alternateurs permettant la naissance des réseaux électriques de distribution en courant alternatif, dont il est l’un des pionniers. '

    }, {
        question: "Quel est l'élement de l'atome qui est chargé positivement ?",
        a: 'L\'éléctron',
        b:'Le proton',
        c:'Le neutron',
        d:'Le carbone',
        correct : 'Le proton',
        texteAnswer: 'Les protons, situés dans le noyau de l\'atome sont chargés positivement. Le neutron n\'est pas chargé, l\'éléctron est chargé négativement et le carbone est simplement un élement chimique parmi pleins d\'autres.'

    }, {
        question: "Quelle science s\'intéresse à l\'étude de la vie passée sous formes de fossiles?",
        a: 'La paléontologie',
        b:'La géodynamique',
        c:'L\'hydrogéologie',
        d:'Aucun de tous ceux-là',
        correct : 'La paléontologie',
        texteAnswer: 'La paléontologie est l\'étude de la vie passée au travers des êtres et organismes fossilisés ayant existé au cours des temps géologiques. L\'ensemble de paléontologie comporte entre 5 et 6 millions de spécimens et de lames de microfossiles dont 4 millions de lots d\'invertébrés et 450 000 de vertébrés.'

    }, {
        question: "Qu'est-ce que la rotule ?",
        a: 'Un os',
        b:'Un muscle',
        c:'Un vertèbre',
        d:'Un tendon',
        correct : 'Un os',
        texteAnswer: 'La rotule est l\'un des trois os qui constituent le genou. Il s\'agit d\'une structure ronde, située sur la partie antérieure du genou. Son rôle est capital car elle permet l\'extension du genou.'

    }, {
        question: "Quelle est la somme des angles d’un triangle ?",
        a: '90°',
        b:'180°',
        c:'360°',
        d:'500°',
        correct : '180°',
        texteAnswer: 'En géométrie euclidienne, la somme des angles d\'un triangle est égale à l\'angle plat, soit 180 degrés ou π radians. Ce résultat est connu et démontré par Euclide.'

    }, {
        question: "À quel inventeur doit-on la première calculatrice ?",
        a: 'Blaise Pascal',
        b:'Henri Becquerel',
        c:'Rudolf Diesel',
        d:'Thomas Edison',
        correct : 'Blaise Pascal',
        texteAnswer: 'C’est en 1645, après trois ans de recherche et cinquante prototypes, que Blaise Pascal présente sa première machine. Il construit ensuite une vingtaine de Pascalines dans la décennie suivante et les perfectionne à chaque fois.'

    }, {
        question: "Combien font 122 x 12 ?",
        a: '1212',
        b:'1464',
        c:'1636',
        d:'2444',
        correct : '1464',
        texteAnswer: '122 * 12 = 120 * 10 + 2 * 122 = 1220 + 264 = 1464'

    }, {
        question: "Quelles sont les deux plus grosses planètes du système solaire ?",
        a: 'Jupiter et Vénus',
        b:'Pluton et Uranus',
        c:'Mars et Mercure',
        d:'Jupiter et Saturne',
        correct : 'Jupiter et Saturne',
        texteAnswer: 'Jupiter est une planète géante gazeuse du système solaire. Elle est 318 fois plus massive que la Terre et environ 1300 fois plus volumineuse qu\'elle. Saturne elle, est 95 fois plus massive que la Terre et 760 plus volumineuse. Uranus et Neptune sont les 3e et 4e plus grosses planètes du système solaire. La Terre vient en 5e position.'

    }, {
        question: "Qu\'est que le myocarde ?",
        a: 'Un organe chez les insectes.',
        b:'Un élement du sang humain',
        c:'Une maladie',
        d:'Un tissu musculaire du coeur',
        correct : 'Un tissu musculaire du coeur',
        texteAnswer: 'Le myocarde est le tissu musculaire (myo-, muscle) du cœur (-carde). C\'est un muscle épais et creux à contraction rythmique contrôlée par le système nerveux végétatif (involontaire/autonome).'

    }
]  

mesQuestions.artQuestions = [
    {
        question: "Quel film n'a pas réalisé Stanley Kubrick ?",
        a: 'Orange mécaniuqe',
        b:'Shining',
        c:'The Truman Show',
        d:'Full Metal Jacket',
        correct : 'The Truman Show',
        texteAnswer: 'The Truman Show est un film réalisé par Peter Weir. Il  raconte la vie d\'un homme, Truman Burbank, vedette à son insu d\'un spectacle de télé-réalité. Depuis sa naissance, son monde n\'est qu\'un gigantesque plateau de tournage et tous ceux qui l\'entourent sont des acteurs.'

    },{
        question: "A quel courant artistique appartient le peintre Réné Magritte?",
        a: 'Impressionnisme',
        b:'Surréalisme',
        c:'Romantisme',
        d:'Réalisme',
        correct : 'Surréalisme',
        texteAnswer: 'Réné Magritte est un peintre surréaliste belge. Son oeuvre la plus connue est un tableau représentant une pipe en dessous de laquelle il y est inscrit \"Ceci n\'est pas une pipe \"'

    }, {
        question: "A quel célèbre compositeur doit-on la musique du ballet \"Le lac des cygnes\" ?",
        a: 'Igor Stravinsky',
        b:'Jean-Baptiste Lully',
        c:'Reynaldo Hahn',
        d:'Piotr ilitch Tchaïkovski',
        correct : 'Piotr ilitch Tchaïkovski',
        texteAnswer: 'Le Lac des cygnes est un ballet en quatre actes sur une musique de Piotr Ilitch Tchaïkovski et un livret de Vladimir Begitchev inspiré d\'une légende allemande.'

    }, {
        question: "Quand a eu lieu la première exposition universelle de Paris ?",
        a: '1842',
        b:'1905',
        c:'1889',
        d:'1812',
        correct : '1889',
        texteAnswer: 'L\'Exposition universelle de Paris de 1889 est la dixième Exposition universelle organisée. Elle se tient du 5 mai au 31 octobre 1889 . Son thème est la Révolution française, dans le cadre du centenaire de cet événement. C\'est à l\'occasion de cette Exposition commémorative que la tour Eiffel est construite.'

    }, {
        question: "Quel est le nom du festival de cinéma qui se tient à Venise chaque année ?",
        a: 'Festival dei due mondi',
        b:'Umbria Jazz ',
        c:'il Carnevale di Venezia',
        d:'La Mostra',
        correct : 'La Mostra',
        texteAnswer: 'La Mostra de Venise est un festival de cinéma qui se déroule annuellement en septembre, dans l\'historique Palais du cinéma, sur le lungomare Marconi, au Lido de Venise. Créée en 1932, la manifestation s\'inscrit dans le cadre de l\'organisation plus vaste de la Biennale de Venise, festival culturel d\'art contemporain dont elle constitue la section cinéma. '

    }, {
        question: "Quel personnage réel ou fictif a été le plus souvent représenté à l'écran ?",
        a: 'Sherlock Holmes',
        b:'Napoléon',
        c:'Dracula',
        d:'Jesus Christ',
        correct : 'Sherlock Holmes',
        texteAnswer: 'Sherlock Holmes détient le record mondial du personnage littéraire le plus représenté dans l\'histoire du cinéma et de la télévision: plus de 75 acteurs se sont glissés dans la peau du célèbre détective.'

    }, {
        question: "Qui a composé la musique du film \"Il était une fois dans l'ouest?\"",
        a: 'Hans Zimmer',
        b:'Ennio Morricone',
        c:'Francis Lai',
        d:'James Horner',
        correct : 'Ennio Morricone',
        texteAnswer: 'Il était une fois dans l\'Ouest est un album de Ennio Morricone, sorti en octobre 1969, comme bande originale du film Il était une fois dans l\'Ouest.'

    }, {
        question: "A quel style architecturale appartient la cathédrale de Strasbourg ?",
        a: 'Gothique',
        b:'Baroque',
        c:'Classique',
        d:'Roman',
        correct : 'Gothique',
        texteAnswer: 'La cathédrale Notre-Dame de Strasbourg  est une cathédrale gothique fondée en 1015 et élevée à partir de 1220. Les travaux s\'achèvent en 1439'

    }, {
        question: "Quel personnage la Vénus de Milo répresente-t-elle ?",
        a: 'La vierge Marie',
        b:'La déesse Aphrodite',
        c:'La déesse Adéona',
        d:'Cléopatre',
        correct : 'La déesse Aphrodite',
        texteAnswer: 'La Vénus de Milo est une statue en marbre de Paros qui représente la déesse Aphrodite. Chef d\'oeuvre de l\'époque hellénistique, c\'est l\'une des plus célèbres sculptures grecques.'

    }, {
        question: "Dans quelle ville prends place la photographie du \"Baiser de la ville\"?",
        a: 'Rome',
        b:'Venise',
        c:'Pragues',
        d:'Paris',
        correct : 'Paris',
        texteAnswer: 'Le Baiser de l\'hôtel de ville est une célèbre photographie en noir et blanc du photographe français Robert Doisneau. Prise en 1950 à proximité de l\'hôtel de ville de Paris, elle représente un homme et une femme qui s\'embrassent tout en marchant sur un trottoir encombré de passants, devant une terrasse de café.'

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