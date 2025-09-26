// JavaScript Document
console.log("hi");

let openMenuButton = document.querySelector("header > nav > button")
let navTonen = document.querySelector("header nav:nth-of-type(2)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openMenuButton.addEventListener("click", openMenu);

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
  navTonen.classList.add("is-open");
}

let sluitMenuButton = document.querySelector("header nav:nth-of-type(2) button")

// stap 2 - laat die button luisteren naar kliks
sluitMenuButton.addEventListener("click", sluitMenu);

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  let navTonen = document.querySelector("header nav:nth-of-type(2)");
  navTonen.classList.remove("is-open");
}




// Video homepagina
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

btn.addEventListener("click", myFunction);

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}