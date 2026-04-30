let urlParams = new URLSearchParams(window.location.search)
urlParams.set("lang", "EN")
let lang = 0
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
    "Die neuen 7 Weltwunder wurde 2001 gegrundet, um neuen Weltwunder von 200 bestehende Monumenten einzustellen. Die Beliebtheitsumfragestimmung (per Internet und Telefon) wurde vom Schweizer Bernard Weber geführt und vom  'Neuen 7 Wunder' Organisation organisiert. Die Gewinner dieser Umfrage stehen unten zu verfügung"
];
onload = function (event) {
    if (urlParams.get("lang") ==="DE" && lang===0) {
        changeLang()
    }
    urlParams = new URLSearchParams(window.location.search)
}

let bg = document.getElementById("bg")
window.onscroll= function updateBG(x) {
    let pageScroll = scrollY/1080;
    if (scrollY <= 0) {
        window.scrollTo(0, 1080*16)
    }
    else if (pageScroll < 1) {
        document.body.style.backgroundImage="url(wonders3.jpg)";
    }
    else if (pageScroll < 3) {
        document.body.style.backgroundImage="url(china.jpeg)";
    }
    else if (pageScroll < 5) {
        document.body.style.backgroundImage="url(machu.jpg)";
    }
    else if (pageScroll < 7) {
        document.body.style.backgroundImage="url(taj.jpeg)";
    }
    else if (pageScroll < 9) {
        document.body.style.backgroundImage="url(petra.webp)";
    }
    else if (pageScroll < 11) {
        document.body.style.backgroundImage="url(colosseum.webp)";
    }
    else if (pageScroll < 13) {
        document.body.style.backgroundImage="url(christ.jpg)";
    }
    else if (pageScroll < 15) {
        document.body.style.backgroundImage = "url(itza.jpg)";
    }
    else if (pageScroll < 16){
        document.body.style.backgroundImage = "url(wonders3.jpg)"
    }
    else {
        window.scrollTo(0, 0)
    }

}
function changeLang() {
    let btn = document.getElementById("flag");
    if (lang === 0) {
        btn.src = "goodFlag.png";
        lang = 1
        for (let i of Array(10).keys()) {
            let txt = document.getElementById("text"+i.toString())
            if (txt != null) {
                txt.innerHTML=DeTxt[i];
            }
        }
        if (urlParams.get("lang") !== "DE") {
            urlParams.set("lang","DE");
            window.location.search = urlParams;
        }
    }
    else {
        btn.src = "badFlag.png";
        lang = 0;
        for (let i of Array(10).keys()) {
            let txt = document.getElementById("text"+i.toString())
            if (txt != null) {
                txt.innerHTML=EnTxt[i];
            }
        }
        if (urlParams.get("lang") !== "EN") {
            urlParams.set("lang","EN");
            window.location.search = urlParams;
        }
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