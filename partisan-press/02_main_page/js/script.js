const bullet1 = document.querySelector (".bullet-1");
const bullet2 = document.querySelector (".bullet-2");
const bullet3 = document.querySelector (".bullet-3");
const bullet4 = document.querySelector (".bullet-4");
const bullet5 = document.querySelector (".bullet-5");
const bullet6 = document.querySelector (".bullet-6");
const bullet7 = document.querySelector (".bullet-7");
const bullet8 = document.querySelector (".bullet-8");
const mapHeading = document.querySelector (".map-heading");
const firstMapScreen = document.querySelector (".first-map-screen");

const firstTextBlock = document.querySelector (".first-text-block");
const secondTextBlock = document.querySelector (".second-text-block");
const thirdTextBlock = document.querySelector (".third-text-block");

const rng = document.getElementById("gallery");
const pic1 = document.querySelector(".pic1");
const pic2 = document.querySelector(".pic2");
const pic3 = document.querySelector(".pic3");
const pic4 = document.querySelector(".pic4");
const pic5 = document.querySelector(".pic5");
const pic6 = document.querySelector(".pic6");
const pic7 = document.querySelector(".pic7");
const pic8 = document.querySelector(".pic8");
const pic9 = document.querySelector(".pic9");
const pic10 = document.querySelector(".pic10");






bullet1.onmouseover = function (){
		firstMapScreen.style.display = "flex";
		bullet8.style.display = "none";
		bullet7.style.display = "none";
		bullet6.style.display = "none";
		bullet5.style.display = "none";
		bullet4.style.display = "none";
		bullet3.style.display = "none";
		bullet2.style.display = "none";
		mapHeading.style.display = "none"
}

bullet1.onmouseout = function (){
		firstMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		mapHeading.style.display = "block"
}



window.onscroll = function (){
	if (scrollY >= 720) {
		firstTextBlock.style.opacity = 0;
	}else if (scrollY >= 1020) {
		secondTextBlock.style.opacity = 0;
	}else if (scrollY >= 1320) {
		thirdTextBlock.style.opacity = 0;
	}else {
		firstTextBlock.style.opacity = 1;
		secondTextBlock.style.opacity = 1;
		thirdTextBlock.style.opacity = 1;

	}
}


