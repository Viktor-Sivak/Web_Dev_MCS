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
const firstStory = document.querySelector (".first-story-screen")
const secondStory = document.querySelector (".second-story-screen")
const thirdStory = document.querySelector (".third-story-screen")
const firstStoryButton = document.querySelector (".first-story-button")
const secondStoryButton = document.querySelector (".second-story-button")
const thirdStoryButton = document.querySelector (".third-story-button")

firstStoryButton.addEventListener("click", function (){
	secondStory.style.display = "flex";
	firstStory.style.display = "none";
})

secondStoryButton.addEventListener("click", function (){
	thirdStory.style.display = "flex";
	secondStory.style.display = "none";
})

thirdStoryButton.addEventListener("click", function (){
	firstStory.style.display = "flex";
	thirdStory.style.display = "none";
})




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





