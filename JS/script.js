const btnShow = document.querySelector(".btn")
const textAbout = document.querySelector(".section-about__text")
btnShow.onclick = function(){
    textAbout.classList.toggle("text-about__active")
}