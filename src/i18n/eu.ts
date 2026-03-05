import { Translation } from './types';

export const eu: Translation = {
    lang: 'eu',
    profile: {
        name: "Ioritz Tubío Sánchez",
        subtitle: "Software Ingeniari · Fullstack Garatzaile",
        about: [
            "{age} urte ditut, Euskal Herriko informatika ingeniaria naiz, eta gaur egun PKF Attesteko Adimen Artifizialaren sailean lan egiten dut, non jendeak egunero erabiltzen duen produkzio-softwarea garatu dudan.",
            "Benetan funtzionatzen duen kodea idazteaz arduratzen naiz, kalitatea ahaztu gabe — sistema mantengarriak garrantzitsuak direlako. Hobetzera bultzatzen nauten pertsonekin lan egitea eta egunero zerbait berria ikastea gustatzen zait.",
            "Neure burua pertsona ezin-egon gisa ikusten dut, egoera berrietara egokitzeko eta etengabe hazten joateko gai dena. Teknologiaz gain, ekintzailetzak liluratu egiten nau eta nire bizitzako uneren batean horretara dedikatzea gustatuko litzaidake."
        ],
        avatarUrl: "https://github.com/ioritztubio.png",
        socials: [
            { platform: "GitHub", url: "https://github.com/ioritztubio", label: "GitHub" },
            { platform: "LinkedIn", url: "https://linkedin.com/in/ioritztubio", label: "LinkedIn" },
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
                type: "work",
                title: "Software Ingeniari Gaztea",
                organization: "PKF Attest — AA Saila",
                dateStart: "2025eko uztaila",
                dateEnd: "Gaur egun",
                description: "PKF Attest-en lan egiten dut — Espainiako 10 enpresa profesional onenetako bat eta PKF Global sarearen kide (150+ herrialde, 480 bulego). Zehazki AA Sailean, Skootik-en eskaintzarekin lotuta: bezeroen datuak abantaila lehiakor iraunkorrean bihurtzen AI aholkularitza, estrategia eta garapen bidez. Next.js, TypeScript, Django eta Python erabiliz produkzio-kalitako aplikazio fullstack-ak eraikitzen eta mantentzen, arkitektura garbia, CI/CD pipeline-ak Jenkins bidez eta sistema eskalagarrien diseinua aplikatuz.",
                highlights: ["10 enpresa profesional onenetako bat", "Skootik", "AA Saila"]
            },
            {
                type: "work",
                title: "Software Garatzaile Praktika",
                organization: "Alerion Technologies",
                dateStart: "2024ko uztaila",
                dateEnd: "2024ko abuztua",
                description: "Drone autonomoen sistemetarako softwarea garatu nuen. TypeScript, Python eta Bash-en soluzioak. Jenkins-ekin CI pipeline-ak konfiguratu, Git eta Bitbucket-ekin errepositorioak kudeatu, eta misio-kontrol softwarean lan egin: telemetria prozesatzea, konektibitatearen egiaztatzea eta ROS-en oinarritutako middleware komunikazioa. Sprint-etan oinarritutako Agile metodologia.",
                highlights: ["drone autonomoak"]
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
                description: "Ekitaldietako catering-a da benetako baldintza zailetan aritzea ikasteko lekua: ezezagunak diren espazioak, denbora-tarte estuak, bezero zorrotzak eta akatserako tokirik ez. Gala, enpresa-afari eta ospakizun pribatuetan — batzuetan talderik gazteena, baina beti adituenen pare. Frogatu nuen egokitasuna eta profesionaltasuna ez direla nortasun ezaugarri hutsak; agertuz eta lana eginez eraikitzen diren ohiturak dira.",
                extra: true
            },
            {
                type: "work",
                title: "3. mailako Langilea — Inprimategia",
                organization: "MCC Graphics S. Coop",
                dateStart: "2023ko uztaila",
                dateEnd: "2023ko uztaila",
                description: "Hilabete bat inprimaketa kooperatiba bateko produkzio-lerroan irakaspen batzuk ematen dizkizu graduak ezin dituenak: ingurune industrial errealeko diziplina, kalitate-kontrolak eskatzen duen zehaztasuna, eta hamarkadak horretan dauden pertsonekin besoz beso lan egiteak zer esan nahi duen. Ezein lan ez zait txikia iruditu — materialak, inprimatze-kalitatea eta benetako produkzio-katea lehenengo egunetik.",
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
        comingSoonBadge: "Laster"
    }
};
