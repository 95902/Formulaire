const slidePage =document.querySelector(".sliderpage");
const premierBtnSuivant =document.querySelector(".nextBtn");
const btnPrecedentSelc = document.querySelector(".prev-1");
const btnSuivantSelc = document.querySelector(".next-1");
const secondBtnPrecedentSelc = document.querySelector(".prev-2");
const secondBtnSuivantSelc = document.querySelector(".next-2");
const troisdBtnPrecedentSelc = document.querySelector(".prev-3");
const troisBtnSuivantSelc = document.querySelector(".next-3");
const quatreBtnPrecedentSelc = document.querySelector(".prev-4");
const sumbitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bulle = document.querySelectorAll(".step .bulle");
let max=4;
let current = 1;

//******************************************
//*************BOUTON SUIVANT**************
//******************************************
premierBtnSuivant.addEventListener("click",function(){
    slidePage.style.marginLeft = "-25%"
    bulle[current -1].classList.add("active");
    current += 1;
});
btnSuivantSelc.addEventListener("click",function(){
    slidePage.style.marginLeft = "-50%"
});
secondBtnSuivantSelc.addEventListener("click",function(){
    slidePage.style.marginLeft = "-75%"
});
troisBtnSuivantSelc.addEventListener("click",function(){
    slidePage.style.marginLeft = "-100%"
});
//******************************************
//*************BOUTON PRECEDENT**************
//******************************************
btnPrecedentSelc.addEventListener("click",function(){
    slidePage.style.marginLeft = "0%"
});
secondBtnPrecedentSelc.addEventListener("click",function(){
    slidePage.style.marginLeft = "-25%"
});
troisdBtnPrecedentSelc.addEventListener("click",function(){
    slidePage.style.marginLeft = "-50%"
});
quatreBtnPrecedentSelc.addEventListener("click",function(){
    slidePage.style.marginLeft = "-75%"
});

//******************************************
//*************FUNCTION ETOILE**************
//******************************************

const allStars = document.querySelectorAll(".fa-star");
    

init();

function init() {
allStars.forEach((star) => {
    star.addEventListener("click", saveRating);
    star.addEventListener("mouseover", addCSS);
    star.addEventListener("mouseleave", removeCSS);
});
}

function saveRating(e) {

console.log(e.target.dataset);
removeEventListenersToAllStars();
}

function removeEventListenersToAllStars() {
allStars.forEach((star) => {
    star.removeEventListener("click", saveRating);
    star.removeEventListener("mouseover", addCSS);
    star.removeEventListener("mouseleave", removeCSS);
});
}

function addCSS(e, css = "checked") {
const overedStar = e.target;
overedStar.classList.add(css);
const previousSiblings = getPreviousSiblings(overedStar);

previousSiblings.forEach((elem) => elem.classList.add(css));
}

function removeCSS(e, css = "checked") {
const overedStar = e.target;
overedStar.classList.remove(css);
const previousSiblings = getPreviousSiblings(overedStar);
previousSiblings.forEach((elem) => elem.classList.remove(css));
}

function getPreviousSiblings(elem) {

let sibs = [];
const spanNodeType = 1;
while ((elem = elem.previousSibling)) {
    if (elem.nodeType === spanNodeType) {
    sibs = [elem, ...sibs];
    }
}
return sibs;
}
