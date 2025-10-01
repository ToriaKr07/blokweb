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



// Zoek elementen op de juiste manier
// let zoekbalkTonen = document.querySelector(".search");  // of #search
// let menuOpenen = document.querySelector(".search button");
// let menuSluiten = document.querySelector(".search .close");

// // Open zoekbalk
// menuOpenen.addEventListener("click", function() {
//   zoekbalkTonen.classList.add("zoeken");
// });

// // Sluit zoekbalk
// menuSluiten.addEventListener("click", function() {
//   zoekbalkTonen.classList.remove("zoeken");
// });



// let menuOpenen = document.querySelector(".search button")
// let zoekbalkTonen = document.querySelector(".search");

// // stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
// menuOpenen.addEventListener("click", openMenu);

// // stap 3: voeg in de functie een class toe aan de nav
// function openMenu() {
//   zoekbalkTonen.classList.add("zoeken");
// }

// let menuSluiten = document.querySelector("header .search button")

// // stap 2 - laat die button luisteren naar kliks
// menuSluiten.addEventListener("click", sluitMenu2);

// // stap 3 - in de functie verwijder de class van de nav
// function sluitMenu2() {
//   let zoekbalkTonen = document.querySelector(".search");
//   zoekbalkTonen.classList.remove("zoeken");
// }




let videoButton = document.querySelector("section:nth-of-type(3) button");
let videoButtonImg = document.querySelector("section:nth-of-type(3) button img");
let deVideo = document.querySelector("video");

videoButton.addEventListener("click", toggleVideo);

function toggleVideo() {
	
	if( deVideo.paused == true ) {
		deVideo.play();
		// videoButton.textContent = "pauze";
		videoButtonImg.src = "images/pauze.svg";
		videoButtonImg.alt = "pauze";
		
	} else {
		deVideo.pause();
		// videoButton.textContent = "play";
		
		videoButtonImg.src = "images/play.svg";
		videoButtonImg.alt = "play";
  }
}