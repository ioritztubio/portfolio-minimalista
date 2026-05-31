import { Translation } from './types';

export const eu: Translation = {
    lang: 'eu',
    profile: {
        name: "Ioritz Tubio Sanchez",
        subtitle: "Software Ingeniari · Fullstack Garatzaile",
        about: [
            "Software ingeniaria naiz Informatika Ingeniaritzako graduarekin, eta gaur egun Adimen Artifizialeko masterra egiten ari naiz UNIRen.",
            "Frontendean hasi eta fullstack eta cloud lanera igaro nintzen. Web aplikazioak eraikitzen ditut hasieratik amaierara — React eta Next.js interfazeetatik datu-base diseinura eta atzeko alderaino. Nire backend lana nagusiki Django eta PostgreSQL-rekin REST API-ak dira, eta aplikazioak hazten diren heinean irauten duten datu-base egiturak diseinatuz. AWS-rekin ere lan egin dut web aplikazioak hodeiean hedatzeko eta martxan mantentzeko.",
            "Masterra hurrengo urratsa da. AI ingeniaritzara mugitu nahi naiz eta oinarri errealak eraikitzeko erabiltzen ari naiz, ez ziurtagiri bat lortzeko bakarrik. Proiektu baten zati zailenen ardura hartzea eta dena nola lotzen den ulertzea gustatzen zait, aurrean daukadarena bakarrik ez."
        ],
        aboutHighlights: [
            "Adimen Artifizialeko masterra",
            "React eta Next.js",
            "Django eta PostgreSQL",
            "AWS",
            "AI ingeniaritza"
        ],
        avatarUrl: "/images/avatar.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritz-tubio", label: "LinkedIn" },
            { platform: "Email", url: "mailto:ioritztubio1@gmail.com", label: "Email" }
        ]
    },
    timeline: {
        sectionTitle: "Esperientzia & Hezkuntza",
        present: "Gaur egun",
        legendWork: "Lana",
        legendEducation: "Hezkuntza",
        items: [
            {
                type: "education",
                title: "Adimen Artifizialeko Masterra",
                organization: "UNIR — Universidad Internacional de La Rioja",
                dateStart: "Ekaina 2026",
                dateEnd: "Maiatza 2027",
                description: "Online masterra Adimen Artifizialean. 60 ECTS machine learning, deep learning, NLP, ikusmen konputazioa eta AI ingeniaritza landuz. AI aplikazioen garapenera eboluzionatzeko oinarri errealak eraikitzera zuzendua.",
                highlights: ["machine learning", "deep learning", "AI ingeniaritza"]
            },
            {
                type: "work",
                title: "Software Ingeniari Gaztea",
                organization: "PKF Attest — AA Saila",
                dateStart: "2025eko uztaila",
                dateEnd: "Gaur egun",
                description: "PKF Attest-en lan egiten dut — Espainiako 10 enpresa profesional onenetako bat eta PKF Global sarearen kide (150+ herrialde, 480 bulego). Zehazki AA Sailean, Skootik-en eskaintzarekin lotuta: bezeroen datuak abantaila lehiakor iraunkorrean bihurtzen AI aholkularitza, estrategia eta garapen bidez. Next.js, TypeScript, Django eta Python erabiliz produkzio-kalitako aplikazio fullstack-ak eraikitzen eta mantentzen, arkitektura garbia, CI/CD pipeline-ak Jenkins bidez eta sistema eskalagarrien diseinua aplikatuz.",
                highlights: ["10 enpresa profesional onenetako bat", "Skootik", "AA Saila"],
                tags: ["Next.js", "TypeScript", "Django", "Python", "AWS"]
            },
            {
                type: "work",
                title: "Software Garatzaile Praktika",
                organization: "Alerion Technologies",
                dateStart: "2024ko uztaila",
                dateEnd: "2024ko abuztua",
                description: "Drone autonomoen sistemetarako softwarea garatu nuen. TypeScript, Python eta Bash-en soluzioak. Jenkins-ekin CI pipeline-ak konfiguratu, Git eta Bitbucket-ekin errepositorioak kudeatu, eta misio-kontrol softwarean lan egin: telemetria prozesatzea, konektibitatearen egiaztatzea eta ROS-en oinarritutako middleware komunikazioa. Sprint-etan oinarritutako Agile metodologia.",
                highlights: ["drone autonomoak"],
                tags: ["TypeScript", "Python", "Jenkins"]
            },
            {
                type: "education",
                title: "Informatika Ingeniaritzako Gradua",
                organization: "Euskal Herriko Unibertsitatea (EHU/UPV)",
                dateStart: "2021eko iraila",
                dateEnd: "2026ko otsaila",
                description: "Informatika Ingeniaritzako Gradua. Software garapen, algoritmo, sistemen programazio eta lankidetza ingeniaritza praktiketan espezializatua. Gradu amaierako proiektua ikastetxe akademiko baten baliabideen planifikazioarekin lotuta.",
                highlights: ["Euskal Herriko Unibertsitatea (EHU/UPV)", "baliabideen planifikazioa"]
            },
            {
                type: "education",
                title: "Batxilergoa — Zientzia eta Teknologia",
                organization: "Pasaia Lezo Lizeoa",
                dateStart: "2019ko iraila",
                dateEnd: "2021eko ekaina",
                description: "Batxilergoa zientzia eta teknologia arloan espezializatua."
            },
            {
                type: "work",
                title: "Zerbitzaria",
                organization: "Restaurante VaBene",
                dateStart: "2022ko martxoa",
                dateEnd: "2022ko iraila",
                description: "Zerbitzari lana ez da oso glamurosoa — azkarra, zorrotza eta errukigabea da. Aldi berean hainbat mahai kudeatzen nituen, une gogorretan lasaitasuna mantentzen nuen, eta bezero bakoitza pozik joaten ziurtatu nuen. Goiz ikasi nuen hori: presio operazional errealean ondo aritzea ezin da faltsifikatu, eta inongo ikasgelak ez dizu irakasten.",
                extra: true
            },
            {
                type: "work",
                title: "Catering Zerbitzaria",
                organization: "Muka, Ixo Restauración SL",
                dateStart: "2022ko iraila",
                dateEnd: "2023ko urria",
                description: "Bezeroari arreta eta mahai-zerbitzua catering ekitaldietan: galetan, enpresa-afarietan eta ospakizun pribatuetan. Jornada luze eta estuetan lan egitea, beti jarrera profesionala mantenduz.",
                extra: true
            },
            {
                type: "work",
                title: "3. mailako Langilea — Inprimategia",
                organization: "MCC Graphics S. Coop",
                dateStart: "2023ko uztaila",
                dateEnd: "2023ko uztaila",
                description: "Hilabete bat inprimaketa kooperatiba bateko produkzio-lerroan. Materialen manipulazioan, inprimatze-kalitatearen kontrolean eta produkzio-katearen mantentze-lanetan lagundu nuen. Ingurune industrial erreal batekin eta operari esperientziadunekin lan egiteko lehen harremana.",
                extra: true
            }
        ]
    },
    projects: {
        sectionTitle: "Proiektuak",
        sectionSubtitle: "Produkziora irten diren eta publikoki eskuragarri dauden proiektu errealak — benetako pertsonek erabiltzen dituzte, ez localhost-etik sekula irten ez diren side-projects.",
        privateCodeBadge: "Kode pribatua",
        privateCodeTooltip: "Iturburu-kodea pribatua da enpresako politikak direla eta",
        viewDemo: "Zuzenean ikusi",
        viewCode: "Kodea ikusi",
        items: [
            {
                title: "Oris Dental Scan",
                description: "Adimen artifizialak bultzatutako hortz aurrediagnosi tresna, batez ere mugikorrerako pentsatua. Erabiltzaileek argazki bat igotzen dute eta minutu gutxitan ahoko osasunaren aurrebalioespen bat jasotzen dute, AI pipeline pertsonalizatu batek sortua. Frontend-ean (Next.js + TypeScript) zein backend-ean (Django + Python) lagundu nuen. Aplikazioa aktibo dago, benetako pazienteek erabiltzen dute, eta EBk, Espainiako Gobernuak eta Eusko Jaurlaritzak finantzatua dago. Iturburu-kodea pribatua da enpresako politikak direla eta — baina zuzeneko aplikazioa proba dezakezu.",
                tags: ["Next.js", "TypeScript", "Django", "Python", "AA"],
                imageUrl: "/images/projects/oris.webp",
                demoUrl: "https://orisdentalscan.com",
                codePrivate: true,
                codePrivateNote: "Iturburu-kodea pribatua da enpresako politikak direla eta"
            },
            {
                title: "Zerbait prestatzen ari da",
                description: "Beti dago zerbait martxan. Proiektu gehiago eraikitzen ari naiz — bezero lanak, neure mugak gainditzen dituzten esperimentu pertsonalak. Ezer ez da localhost-ean betirako geratzen.",
                tags: [],
                imageUrl: "",
                comingSoon: true
            }
        ]
    },
    ui: {
        langToggle: "FR",
        footerBuiltWith: "React & Tailwind-ekin eginda",
        downloadCV: "CV Deskargatu",
        birthdayMessage: "🎂 Gaur nire urtebetetzea da! Hartu konfeti pixka bat!",
        showExtra: "Teklatutik haratago",
        hideExtra: "Ezkutatu esperientzia gehigarria",
        extraExperienceTagline: "Informatikaren aurretik, mahaiez betetako gelak, ekitaldiak eta produkzio txandak zeuden.",
        comingSoonBadge: "Laster",
        startingSoon: "Laster hasiko",
        inProgress: "Ikastaro",
        navAbout: "Niri buruz",
        navProjects: "Proiektuak",
        navExperience: "Esperientzia"
    }
};
