let urlParams = new URLSearchParams(window.location.search)
let lang;
let EnTxt = [
    "The 7 Wonders of the World",
    "Wonders",
    "Home",
    "The Great Wall of China",
    "Machu Picchu",
    "The Colosseum",
    "Christ the Redeemer",
    "The new 7 wonders of the world",
    "The year is 2001. 6 of the original 7 wonders of the world are no longer standing, with the sole exception of the Pyramids of Giza, of course. Either way, something had to be done.",
    "The New 7 Wonders of the World was a campaign started in 2001 to choose Wonders of the World from a selection of 200 existing monuments. The popularity poll via free web-based voting and telephone voting was led by Canadian-Swiss Bernard Weber and organized by the New 7 Wonders Foundation (N7W) based in Zurich, Switzerland. The winners of this poll are shown below:",
    "The Great Wall of China",
    "The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng, literally \"ten thousand li long wall\") is a series of fortifications in China. They were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. The first walls date to the 7th century BC; these were joined together in the Qin dynasty. Successive dynasties expanded the wall system; the best-known sections were built by the Ming dynasty (1368–1644).",
    "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge at 2,430 meters (7,970 ft). It is situated in the Machupicchu District of Urubamba Province about 80 kilometers (50 miles) northwest of Cusco, above the Sacred Valley and along the Urubamba River, which forms a deep canyon with a subtropical mountain climate. Often referred to as the \"Lost City of the Incas\", Machu Picchu is one of the most iconic symbols of the Inca civilization and a major archaeological site in the Americas. Estimated to be built around 1450, it is believed to have served as an estate for the Inca emperor Pachacuti, though no contemporary written records exist to confirm this. The site was abandoned roughly a century later, likely during the Spanish conquest. Modern radiocarbon dating places its occupation between c. 1420 and 1530.",
    "The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ -/ TAHJ mə-HAHL, Hindustani: [t̪ɑːd͡ʒ ˈmɛɦ(ɛ)l]; lit. Crown of the Palace')\n" +
    "is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was\n" +
    "commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r.1628–1658), to house the tomb of his beloved wife,\n" +
    "Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre)\n" +
    "complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.\n",
    "Petra (Arabic: ٱلْبَتْراء, romanised: Al-Batrāʾ; Ancient Greek: Πέτρα, lit.'Rock'), originally known to its inhabitants as Raqmu, is\n" +
    "            an ancient city and archaeological site in southern Jordan. Famous for its rock-cut architecture and water conduit systems, Petra\n" +
    "            is also called the \"Rose City\" because of the colour of the sandstone from which it is carved.",
    "Colosseum",
    "The Colosseum (/ˌkɒ.lə.ˈsiː.əm/ KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an elliptical amphitheatre in the centre of the city of Rome,\n" +
    "            Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is the largest standing amphitheatre in the world.\n" +
    "            Construction began under the Emperor Vespasian (r.69–79 AD) in 72 and was completed in AD 80 under his successor and heir, Titus (r.79–81). Further\n" +
    "            modifications were made during the reign of Domitian (r.81–96).[3] The three emperors who were patrons of the work are known as the Flavian dynasty,\n" +
    "            and the amphitheatre was named the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [aɱfiteˈaːtro ˈflaːvjo]) by later\n" +
    "            classicists and archaeologists for its association with their family name (Flavius).",
    "Christ the Redeemer",
    "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil,\n" +
    "            created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot.\n" +
    "            Romanian sculptor Gheorghe Leonida sculpted the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft)\n" +
    "            pedestal, and faces east. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. Christ the Redeemer differs\n" +
    "            considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other. Although the project organizers\n" +
    "            originally accepted the design, it later changed to the statue of today, with the arms spread out wide.",
    "Chichén Itzá was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality,\n" +
    "            Yucatán, Mexico. Chichén Itzá was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into\n" +
    "            the early portion of the Postclassic period (c. AD 900–1200). The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc\n" +
    "            and Chenes styles of the Northern Maya lowlands. The presence of central Mexican styles was once thought to have been representative of direct migration or even conquest from central\n" +
    "            Mexico, but most contemporary interpretations view the presence of these non-Maya styles more as the result of cultural diffusion.",
    "the Great Wall of China",
    "The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng, literally \"ten thousand li long wall\") is a series of fortifications in China. They were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. The first walls date to the 7th century BC; these were joined together in the Qin dynasty. Successive dynasties expanded the wall system; the best-known sections were built by the Ming dynasty (1368–1644).",
    "To aid in defense, the Great Wall utilized watchtowers, troop barracks, garrison stations, signaling capabilities through the means of smoke or fire, and its status as a transportation corridor. Other purposes of the Great Wall have included border controls (allowing control of immigration and emigration, and the imposition of duties on goods transported along the Silk Road), and the regulation of trade.",
    "The collective fortifications constituting the Great Wall stretch from Liaodong in the east to Lop Lake in the west, and from the present-day Sino-Russian border in the north to Tao River in the south: an arc that roughly delineates the edge of the Mongolian steppe, spanning 21,196.18 km (13,170.70 mi) in total. It is a UNESCO World Heritage Site, and was voted one of the New 7 Wonders of the World in 2007. Today, the defensive system of the Great Wall is recognized as one of the most impressive architectural feats in history.",
    "Christ the Redeemer",
    "Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ]) is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal, and faces east. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. Christ the Redeemer differs considerably from its original design, as the initial plan was a large Christ with a globe in one hand and a cross in the other. Although the project organizers originally accepted the design, it later changed to the statue of today, with the arms spread out wide.",
    "The statue weighs 635 metric tons (625 long, 700 short tons), and is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca National Park overlooking the city of Rio de Janeiro. This statue is the largest Art Deco–style sculpture in the world. A symbol of Christianity around the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil and was voted one of the New 7 Wonders of the World."
];

let DeTxt = [
    "Die 7 Weltwunder",
    "Wunder",
    "Homepage",
    "die Chinesische Mauer",
    "das Taj Mahal",
    "das Kolosseum",
    "Cristo Redentor",
    "Die neuen 7 Weltwunder",
    "Das Jahr ist 2001. 6 Von den originalen 7 Weltwunder stehen nicht mehr, nur außer Pyramiden von Gizeh natürlich.",
    "Die neuen 7 Weltwunder wurde 2001 gegrundet, um neuen Weltwunder von 200 bestehende Monumenten einzustellen. Die Beliebtheitsumfragestimmung (per Internet und Telefon) wurde vom Schweizer Bernard Weber geführt und vom  'Neuen 7 Wunder' Organisation organisiert. Die Gewinner dieser Umfrage stehen unten zu verfügung",
    "Die Chinesische Mauer",
    "Die Chinesische Mauer (traditionelles Chinesisch: 萬里長城; vereinfachtes Chinesisch: 万里长城;\n" +
    "Pinyin: Wànlǐ Chángchéng, wörtlich „zehntausend Li lange Mauer“) ist eine Reihe von Befestigungsanlagen in\n" +
    "China. Sie wurde entlang der historischen Nordgrenzen der alten chinesischen Staaten und des Kaiserreichs errichtet, um Schutz vor verschiedenen Nomadenstämmen aus der eurasischen Steppe zu bieten. Die ersten Mauern stammen aus dem 7. Jahrhundert v. Chr.; sie wurden in der Qin-Dynastie miteinander verbunden. Nachfolgende Dynastien erweiterten das Mauersystem; die bekanntesten Abschnitte wurden von der Ming-Dynastie (1368–1644) erbaut.",
    "Machu Picchu ist eine Inka-Zitadelle aus dem 15. Jahrhundert in der Ostkordillere im Süden Perus\n" +
    "auf einem Bergkamm in 2.430 Metern Höhe. Sie liegt im Distrikt Machupicchu der Provinz Urubamba\n" +
    "etwa 80 Kilometer nordwestlich von Cusco, oberhalb des Heiligen Tals und entlang des Urubamba-Flusses,\n" +
    "der eine tiefe Schlucht mit subtropischem Gebirgsklima bildet.\n" +
    "Machu Picchu, oft als „Verlorene Stadt der Inkas“ bezeichnet, ist eines der bekanntesten Symbole der Inka-Zivilisation\n" +
    "und eine bedeutende archäologische Stätte in Amerika. Die Zitadelle wurde schätzungsweise um 1450 erbaut und diente vermutlich als Landsitz\n" +
    "für den Inka-Herrscher Pachacuti, obwohl es keine zeitgenössischen schriftlichen Aufzeichnungen gibt, die dies bestätigen. Die Stätte wurde etwa ein Jahrhundert später verlassen, wahrscheinlich während der spanischen Eroberung. Moderne Radiokohlenstoffdatierungen datieren ihre Besiedlung auf die Zeit zwischen ca. 1420 und 1530.",
    "Das Taj Mahal (Hindustani: [t̪ɑːd͡ʒ ˈmɛɦ(ɛ)l]; wörtlich: „Krone des Palastes“)\n" +
    "\n" +
    "ist ein elfenbeinweißes Marmormausoleum am rechten Ufer des Flusses Yamuna in Agra, Uttar Pradesh, Indien.\n" +
    "Es wurde 1631 vom fünften Mogulkaiser Shah Jahan (Regierungszeit 1628–1658) in Auftrag gegeben, um das Grab seiner geliebten Frau Mumtaz Mahal zu beherbergen;\n" +
    "\n" +
    "es beherbergt auch das Grab von Shah Jahan selbst. Das Grabmal ist das Herzstück eines 17 Hektar (42 Acre) großen Komplexes\n" +
    "\n" +
    "zu dem auch eine Moschee und ein Gästehaus gehören. Es liegt inmitten formaler Gärten, die an drei Seiten von einer Zinnenmauer umgeben sind.",
    "Petra (arabisch: ٱلْبَتْراء, romanisiert: Al-Batrāʾ; altgriechisch: Πέτρα, wörtlich „Fels“), ursprünglich von seinen Bewohnern Raqmu genannt, ist\n" +
    "eine antike Stadt und archäologische Stätte im Süden Jordaniens. Berühmt für ihre in den Fels gehauene Architektur und ihre Wasserleitungssysteme, wird Petra\n" +
    "aufgrund der Farbe des Sandsteins, aus dem sie gehauen ist, auch „Rosenstadt“ genannt.",
    "Kolosseum",
    "Das Kolosseum (italienisch: Colosseo [kolosˈsɛːo]) ist ein elliptisches Amphitheater im Zentrum Roms,\n" +
    "\n" +
    "Italien, östlich des Forum Romanum. Es ist das größte jemals erbaute antike Amphitheater und das größte noch stehende Amphitheater der Welt.\n" +
    "Der Bau begann 72 n. Chr. unter Kaiser Vespasian (Regierungszeit 69–79 n. Chr.) und wurde 80 n. Chr. unter seinem Nachfolger Titus (Regierungszeit 79–81 n. Chr.) abgeschlossen.\n" +
    "Weitere Umbauten wurden während der Herrschaft Domitians (Regierungszeit 81–96 n. Chr.) vorgenommen.[3] Die drei Kaiser, die das Werk förderten, sind als die flavische Dynastie bekannt,\n" +
    "\n" +
    "und das Amphitheater wurde von späteren\n" +
    "Klassikern und Archäologen aufgrund der Verbindung zu ihrem Familiennamen (Flavius) als flavisches Amphitheater (lateinisch: Amphitheatrum Flavium; italienisch: Anfiteatro Flavio [aɱfiteˈaːtro ˈflaːvjo]) bezeichnet.",
    "Cristo Redentor",
    "Christus der Erlöser (portugiesisch: Cristo Redentor, brasilianisches Standardportugiesisch: [ˈkɾistu ʁedẽˈtoʁ]) ist eine Art-déco-Statue von Jesus in Rio de Janeiro, Brasilien.\n" +
    "\n" +
    "Sie wurde vom französisch-polnischen Bildhauer Paul Landowski geschaffen und vom brasilianischen Ingenieur Heitor da Silva Costa in Zusammenarbeit mit dem französischen Ingenieur Albert Caquot erbaut.\n" +
    "\n" +
    "Der rumänische Bildhauer Gheorghe Leonida gestaltete das Gesicht. Die zwischen 1922 und 1931 errichtete Statue ist 30 Meter hoch (ohne ihren 8 Meter hohen Sockel)\n" +
    "und blickt nach Osten. Ihre Arme sind 28 Meter breit. Sie besteht aus Stahlbeton und Speckstein. Christus der Erlöser weicht deutlich von seinem ursprünglichen Entwurf ab, da der ursprüngliche Plan einen großen Christus mit einer Weltkugel in der einen und einem Kreuz in der anderen Hand vorsah. Obwohl die Projektorganisatoren\n" +
    "den Entwurf ursprünglich akzeptierten, wurde er später in die heutige Statue mit weit ausgebreiteten Armen geändert.",
    "Chichén Itzá war eine große präkolumbische Stadt, die von den Maya der Spätklassik erbaut wurde. Die archäologische Stätte befindet sich in der Gemeinde Tinúm,\n" +
    "Yucatán, Mexiko. Chichén Itzá war ein bedeutendes Zentrum im nördlichen Maya-Tiefland von der Spätklassik (ca. 600–900 n. Chr.) über die Spätklassik (ca. 800–900 n. Chr.) bis in den frühen Teil der Postklassik (ca. 900–1200 n. Chr.).\n" +
    "Die Stätte weist eine Vielzahl architektonischer Stile auf, die an Stile aus Zentralmexiko sowie an die Puuc- und Chenes-Stile des nördlichen Maya-Tieflands erinnern.\n" +
    "Man nahm einst an, dass die Präsenz zentralmexikanischer Stile auf direkte Migration oder gar Eroberung aus Zentralmexiko zurückzuführen sei, doch die meisten heutigen Interpretationen sehen das Vorhandensein dieser nicht-Maya-Stile eher als Ergebnis kultureller Diffusion.",
    "die Chinesische Mauer",
    "Die Chinesische Mauer (traditionelles Chinesisch: 萬里長城; vereinfachtes Chinesisch: 万里长城; Pinyin: Wànlǐ Chángchéng, wörtlich „zehntausend Li lange Mauer“) ist ein System von Befestigungsanlagen in China. Sie wurde entlang der historischen Nordgrenzen der alten chinesischen Staaten und des Kaiserreichs China zum Schutz vor verschiedenen Nomadenstämmen aus der eurasischen Steppe errichtet. Die ersten Mauern stammen aus dem 7. Jahrhundert v. Chr.; sie wurden während der Qin-Dynastie miteinander verbunden. Nachfolgende Dynastien erweiterten das Mauersystem; die bekanntesten Abschnitte wurden von der Ming-Dynastie (1368–1644) erbaut.",
    "Zur Verteidigung nutzte die Chinesische Mauer Wachtürme, Truppenbaracken, Garnisonsstationen, Signalmittel wie Rauch und Feuer sowie ihre Funktion als Transportkorridor. Weitere Zwecke der Chinesischen Mauer waren die Grenzkontrolle (Kontrolle von Ein- und Auswanderung sowie Erhebung von Zöllen auf Waren entlang der Seidenstraße) und die Regulierung des Handels.",
    "Die Befestigungsanlagen der Chinesischen Mauer erstrecken sich von Liaodong im Osten bis zum Lop-See im Westen und von der heutigen chinesisch-russischen Grenze im Norden bis zum Tao-Fluss im Süden: ein Bogen, der grob den Rand der mongolischen Steppe markiert und sich über insgesamt 21.196,18 km (13.170,70 Meilen) erstreckt. Sie ist UNESCO-Welterbestätte und wurde 2007 zu einem der Neuen Sieben Weltwunder gewählt. Heute gilt das Verteidigungssystem der Chinesischen Mauer als eine der beeindruckendsten architektonischen Leistungen der Geschichte.",
    "Cristo Redentor",
    "Christus der Erlöser (portugiesisch: Cristo Redentor, brasilianisches Standardportugiesisch: [ˈkɾistu ʁedẽˈtoʁ]) ist eine Art-déco-Statue von Jesus in Rio de Janeiro, Brasilien. Sie wurde vom französisch-polnischen Bildhauer Paul Landowski geschaffen und vom brasilianischen Ingenieur Heitor da Silva Costa in Zusammenarbeit mit dem französischen Ingenieur Albert Caquot erbaut. Der rumänische Bildhauer Gheorghe Leonida gestaltete das Gesicht. Die zwischen 1922 und 1931 errichtete Statue ist 30 Meter hoch (ohne den 8 Meter hohen Sockel) und blickt nach Osten. Ihre Arme sind 28 Meter weit ausgebreitet. Sie besteht aus Stahlbeton und Speckstein. Christus der Erlöser weicht erheblich von seinem ursprünglichen Entwurf ab. Der ursprüngliche Plan sah einen großen Christus mit einer Weltkugel in der einen und einem Kreuz in der anderen Hand vor. Obwohl die Projektverantwortlichen den Entwurf zunächst akzeptierten, wurde er später zur heutigen Statue mit weit ausgebreiteten Armen geändert.",
    "Die Statue wiegt 635 Tonnen und befindet sich auf dem Gipfel des 700 Meter hohen Corcovado im Nationalpark Tijuca mit Blick auf Rio de Janeiro. Sie ist die größte Skulptur im Art-déco-Stil weltweit. Als Symbol des Christentums ist sie zu einer kulturellen Ikone von Rio de Janeiro und Brasilien geworden und wurde zu einem der Neuen Sieben Weltwunder gewählt."
];
function setup() {
    if (!urlParams.get("lang")) {
        urlParams.set("lang", "EN");
    }
}
onload = function(event) {
    setup();
    if (urlParams.get("lang") === "DE") {
        setDe();

    } else {
        setEn();
    }
    if (urlParams.get("scroll") && scrollY === 0) {
        window.scrollTo(0, parseInt(urlParams.get("scroll"))*1080)
    }
}

let bg = document.getElementById("bg")
window.onscroll= function updateBG(x) {
    if (window.location.href.split('?')[0].split("/")[8]==="home.html") {

        let pageScroll = scrollY / 1080;
        if (scrollY <= 0) {
            window.scrollTo(0, 1080 * 16)
        } else if (pageScroll < 1) {
            document.body.style.backgroundImage = "url(wonders3.jpg)";
        } else if (pageScroll < 3) {
            document.body.style.backgroundImage = "url(china.jpeg)";
        } else if (pageScroll < 5) {
            document.body.style.backgroundImage = "url(machu.jpg)";
        } else if (pageScroll < 7) {
            document.body.style.backgroundImage = "url(taj.jpeg)";
        } else if (pageScroll < 9) {
            document.body.style.backgroundImage = "url(petra.webp)";
        } else if (pageScroll < 11) {
            document.body.style.backgroundImage = "url(colosseum.webp)";
        } else if (pageScroll < 13) {
            document.body.style.backgroundImage = "url(christ.jpg)";
        } else if (pageScroll < 15) {
            document.body.style.backgroundImage = "url(itza.jpg)";
        } else if (pageScroll < 16) {
            document.body.style.backgroundImage = "url(wonders3.jpg)"
        } else {
            window.scrollTo(0, 0)
        }
        urlParams.set("scroll", Math.floor(pageScroll).toString());
    }
    else {
        document.getElementById("text0").innerText=window.location.href.split('?')[0].split("/")[8]
    }

}
function langBtn() {

    if (urlParams.get("lang") !== "DE") {
        setDe()
        urlParams.set("lang", "DE");
        window.location.search = urlParams.toString();
        lang=1
    }
    else {
        setEn()
        urlParams.set("lang", "EN")
        window.location.search = urlParams.toString();
        lang=0
    }
}
function setDe() {
    let btn = document.getElementById("flag");
    btn.src = "goodFlag.png";
    lang = 1
    for (let i of Array(30).keys()) {
        let txt = document.getElementById("text" + i.toString())
        if (txt != null) {
            txt.innerHTML = DeTxt[i];
        }
    }
    let langStr = urlParams.get("lang")
    let url = new URL(document.getElementById("text2").href)
    url.searchParams.set("lang",langStr)
    document.getElementById("text2").href = url.toString()
    for (let i of document.getElementsByClassName("learnMore")) {
        i.innerHTML = "Drücken sie hier, um mehr zu lernen"
        let url = new URL(i.href)
        url.searchParams.set("lang", langStr)
        i.href=url.toString()
    }
    for (let i of document.getElementsByClassName("ddLink")) {
        let url = new URL(i.href)
        url.searchParams.set("lang", langStr)
        i.href=url.toString()
    }
}
function setEn() {
    let btn = document.getElementById("flag")
    btn.src = "badFlag.png";
    lang = 0;
    for (let i of Array(30).keys()) {
        let txt = document.getElementById("text"+i.toString())
        if (txt != null) {
            txt.innerHTML=EnTxt[i];
        }
    }
    let langStr = urlParams.get("lang")
    let url = new URL(document.getElementById("text2").href)
    url.searchParams.set("lang",langStr)
    document.getElementById("text2").href = url.toString()
    for (let i of document.getElementsByClassName("learnMore")) {
        i.innerHTML = "Click here to learn more"
        url = new URL(i.href)
        url.searchParams.set("lang", langStr)
        i.href=url.toString()
    }
    for (let i of document.getElementsByClassName("ddLink")) {
        url = new URL(i.href)
        url.searchParams.set("lang", langStr)
        i.href=url.toString()
    }
}



window.onclick = function hideDD(event) {
    if (!event.target.matches(".dropDownContent")&& !event.target.matches("#text1")) {
        let dropdowns = document.getElementsByClassName("dropDownContent");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function showDD() {
    document.getElementsByClassName("dropDownContent")[0].classList.toggle("show")
}