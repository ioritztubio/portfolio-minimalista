import { Translation } from './types';

export const eu: Translation = {
    lang: 'eu',
    profile: {
        name: "Ioritz Tubio Sanchez",
        subtitle: "Web garapenean espezializatutako software ingeniaria",
        location: "Donostia",
        about: [
            "Informatika ingeniaria naiz eta web aplikazioak garatzen ditut. Orain adimen artifizialeko (AA) masterra egiten ari naiz.",
            "React eta Next.js-ekin interfazeak garatzen hasi nintzen, eta denborarekin aplikazio baten geruza guztietan lan egitera pasatu naiz. Zerbitzariaren aldean REST APIak sortu ditut Django, FastAPI eta Node-rekin, PostgreSQL eta MySQL datu-baseen gainean. Amazon Web Services-en (AWS) zerbitzariak ere konfiguratu eta mantendu ditut Docker-ekin, aplikazioak produkzioan hedatzeko.",
            "Gaur egungo lanean egunero erabiltzen dut AA garapen-prozesuaren barruan, eta masterrak erabiltzen ditudan ereduak barrutik nola dabiltzan ulertzen laguntzen dit. Nire helburua AA ingeniaritzan aritzea da."
        ],
        aboutHighlights: [
            "React eta Next.js",
            "Django, FastAPI eta Node",
            "Amazon Web Services-en (AWS)",
            "AA ingeniaritzan"
        ],
        avatarUrl: "/images/avatar.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Esperientzia eta prestakuntza",
        present: "Gaur egun",
        legendWork: "Lana",
        legendEducation: "Prestakuntza",
        items: [
            {
                type: "education",
                title: "Adimen artifizialeko masterra",
                organization: "Universidad Internacional de La Rioja (UNIR)",
                dateStart: "2026ko ekaina",
                dateEnd: "2027ko maiatza",
                description: "60 ECTS krediturreko online masterra. Programak ikasketa automatikoa, ikaskuntza sakona, hizkuntza naturalaren prozesamendua, ordenagailu bidezko ikusmena eta AA ingeniaritza lantzen ditu.\n\nNire ibilbidea AA aplikazioen garapenera bideratzeko egiten ari naiz.",
                highlights: ["ikasketa automatikoa", "ikaskuntza sakona", "AA ingeniaritza"]
            },
            {
                type: "work",
                title: "Software garatzailea",
                organization: "Swap Energía",
                dateStart: "2026ko iraila",
                dateEnd: "Gaur egun",
                description: "Swap Energía-ko garapen taldean nago, eta barne-erabilerako enpresa-baliabideen plangintza sistema (ERP) batean lan egiten dut. Aplikazioan PHP eta Vue erabiltzen ditut, eta zerbitzuetan Python, FastAPI eta MySQL.\n\nFuntzionalitate bakoitzean arkitekturaren eta interfazearen diseinuaz, garapenaz eta probez arduratzen naiz. Produkziorako hedapena automatizatuta dago.\n\nTaldeak AA garapen-prozesuan txertatuta du. Claude erabiltzen dugu, baita kode-berrikuspenaren eta probetan aurkitutako akatsen zuzenketaren zati bat egiten duten lan-fluxu automatizatuak ere.",
                tags: ["PHP", "Vue", "Python", "FastAPI", "MySQL", "Claude"]
            },
            {
                type: "work",
                title: "Software ingeniari gaztea",
                organization: "Skootik",
                dateStart: "2025eko uztaila",
                dateEnd: "2026ko abuztua",
                description: "Bezeroekin zuzenean lan egin dut, bilerak prestatu ditut eta haien aktak idatzi ditut. Parte hartu dudan proiektuetan, eskakizunak bezeroarekin jaso ditut eta zehaztapen tekniko bihurtu ditut.\n\nOndoren, aurrerapenak jarraipen-bileretan aurkeztu ditut eta sortzen ziren irismen-aldaketak kudeatu ditut.\n\nAplikazioak ere diseinatu eta garatu ditut Next.js, Node eta Django REST-ekin, eta AWS-ko zerbitzariak muntatu ditut Docker-ekin produkzioan hedatzeko. Produkzioan jarri ondoren, gorabeherak konpondu ditut erabiltzaileekin harreman zuzenean.",
                highlights: ["Bezeroekin zuzenean", "AWS-ko zerbitzariak"],
                examples: [
                {
                    title: "Oris Dental Scan",
                    subtitle: "AA bidezko hortz-aurrediagnostikoa",
                    body: ["Erabiltzaileak argazki bat igotzen du eta minutu gutxitan aho-osasunaren aurretiazko balorazioa jasotzen du.", "Web interfazea, zerbitzariaren logikaren zati bat eta AWS-ko azpiegitura garatu ditut."],
                    tags: ["Next.js", "TypeScript", "Django", "AWS"]
                },
                {
                    title: "Laborategiko kudeaketa-aplikazioa",
                    subtitle: "Sistema zahar baten berrikuntza",
                    body: ["Aplikazioak laginak aztertzeko eta jasotzeko behar diren kalkuluak egiten ditu, eta harreman konplexuak dituzten entitateak egitura modular eta eskalagarri baten bidez kudeatzen ditu. Sistema zahar batetik egungo teknologietara egindako migrazioan parte hartu dut.", "Laborategiaren eguneroko lanera egokitzeko, langileei elkarrizketak egin dizkiet, aplikazioa erabiltzen zuten bitartean behatu ditut eta aurkitzen zituzten arazoetan oinarrituta aldaketak proposatu ditut. Helburuak zuzendaritzarekin adostu ditut eta lan-fluxuak erabiltzaileekin baliozkotu ditut.", "Bertsio berriak diseinu hobea du eta, kasu batzuetan, hiru aldiz baino azkarrago kargatzen da."]
                }
                ],
                tags: ["Next.js", "TypeScript", "Node.js", "Django REST", "Docker", "AWS"]
            },
            {
                type: "work",
                title: "Software garatzailea praktiketan",
                organization: "Alerion Technologies",
                dateStart: "2024ko uztaila",
                dateEnd: "2024ko abuztua",
                description: "Drone autonomoen sistemetarako software garapeneko praktikak. TypeScript, Python eta Bash-ekin lan egin dut misio-kontroleko softwarean, zehazki telemetriaren prozesamenduan, konektibitatearen egiaztapenean eta osagaien arteko komunikazioan, Robot Operating System (ROS) bidez.\n\nIntegrazio jarraitua ere konfiguratu dut Jenkins-ekin, eta biltegiak kudeatu ditut Git eta Bitbucket-ekin. Taldeak iterazio laburretan antolatutako metodologia arina erabiltzen zuen.",
                highlights: ["Drone autonomoen"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Informatika ingeniaritzako gradua",
                organization: "Euskal Herriko Unibertsitatea (EHU/UPV)",
                dateStart: "2021eko iraila",
                dateEnd: "2026ko otsaila",
                description: "Software garapenean, algoritmoetan eta sistemen programazioan prestakuntza, taldeko ingeniaritza-proiektuekin. Gradu amaierako lana ikastetxe baten baliabideak planifikatzeko plataforma bat izan zen, eta 8,5eko kalifikazioa lortu zuen.",
                highlights: ["ikastetxe baten baliabideak planifikatzeko"]
            },
            {
                type: "education",
                title: "Zientzia eta teknologiako batxilergoa",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "2019ko iraila",
                dateEnd: "2021eko ekaina",
                description: "Zientzia eta teknologiako modalitateko batxilergoa."
            },
            {
                type: "work",
                title: "Zerbitzaria",
                organization: "Restaurante VaBene",
                dateStart: "2022ko martxoa",
                dateEnd: "2022ko iraila",
                description: "Jende asko dabilen jatetxe batean hainbat mahai aldi berean zerbitzatu ditut, batez ere puntako orduetan. Lan zorrotza izan zen, eta lan-karga handiarekin antolatzen eta lasai mantentzen ikasi nuen.",
                extra: true
            },
            {
                type: "work",
                title: "Catering zerbitzaria",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "2022ko iraila",
                dateEnd: "2023ko urria",
                description: "Catering ekitaldietan zerbitzatu dut, hala nola galetan, enpresa-afarietan eta ospakizun pribatuetan. Lanaldi luzeak ziren, eta erritmoari eta gonbidatuen arretari amaierara arte eutsi behar zitzaien.",
                extra: true
            },
            {
                type: "work",
                title: "Hirugarren mailako langilea inprimategian",
                organization: "MCC Graphics S. Coop",
                dateStart: "2023ko uztaila",
                dateEnd: "2023ko uztaila",
                description: "Hilabete bat eman nuen inprimaketa-kooperatiba baten produkzio-lerroan, materialak maneiatzen, inprimaketaren kalitatea egiaztatzen eta lerroaren mantentzean laguntzen. Ingurune industrial batean izan nuen lehen esperientzia.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Proiektuak",
        sectionSubtitle: "Produkzioan dauden eta benetako pertsonek erabiltzen dituzten proiektuak.",
        privateCodeBadge: "Kode pribatua",
        privateCodeTooltip: "Iturburu-kodea pribatua da enpresako politikak direla eta",
        viewDemo: "Webgunea ikusi",
        viewCode: "Kodea ikusi",
        items: [
            {
                title: "Oris Dental Scan",
                description: "Mugikorrerako pentsatutako AA bidezko hortz-aurrediagnostiko tresna. Erabiltzaileak argazki bat igotzen du eta minutu gutxitan aho-osasunaren aurretiazko balorazioa jasotzen du.\n\nWeb interfazea Next.js eta TypeScript-ekin garatu dut, zerbitzariaren zati bat Django eta Python-ekin, eta AWS-ko azpiegitura. Produkzioan dago eta benetako pazienteek erabiltzen dute.",
                note: "Europar Batasunak, Espainiako Gobernuak eta Eusko Jaurlaritzak finantzatua",
                tags: ["Next.js", "TypeScript", "Django", "Python", "AA"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Iturburu-kodea pribatua da enpresako politikak direla eta"
            },
            {
                title: "Datozen proiektuak",
                description: "Proiektu berrietan ari naiz lanean, bezeroentzat zein pertsonalak. Amaitzen ditudanean hemen argitaratuko ditut.",
                tags: [],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "FR",
        footerBuiltWith: "React eta Tailwind-ekin eginda",
        downloadCV: "CVa deskargatu",
        birthdayMessage: "🎂 Gaur nire urtebetetzea da! Hartu konfeti pixka bat!",
        showExtra: "Beste lan-esperientzia",
        hideExtra: "Ezkutatu beste lan-esperientzia",
        extraExperienceTagline: "Ikasketekin batera egin ditudan lanak.",
        comingSoonBadge: "Laster",
        startingSoon: "Laster hasiko",
        inProgress: "Abian",
        navAbout: "Niri buruz",
        navProjects: "Proiektuak",
        navExperience: "Esperientzia",
        navCV: "CV",
        examplesShow: "Gehiago jakin",
        examplesHide: "Gutxiago erakutsi"
    }
};
