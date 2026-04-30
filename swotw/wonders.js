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
    "The year is 2001. 6 of the original 7 wonders of the world are no longer standing, with the sole exception of the Pyramids of Giza, of course. Either way, something had to be done."
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
    "Das Jahr ist 2001. 6 Von den originalen 7 Weltwunder stehen nicht mehr, nur außer Pyramiden von Gizeh natürlich."
];
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
        for (let i of Array(7).keys()) {
            let txt = document.getElementById("text"+i.toString())
            if (txt != null) {
                txt.innerHTML=DeTxt[i];
            }
        }
    }
    else {
        btn.src = "badFlag.png";
        lang = 0;
        for (let i of Array(7).keys()) {
            let txt = document.getElementById("text"+i.toString())
            if (txt != null) {
                txt.innerHTML=EnTxt[i];
            }
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