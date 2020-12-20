const bullet1 = document.getElementById ("bullet-1");
const bullet2 = document.getElementById ("bullet-2");
const bullet3 = document.getElementById ("bullet-3");
const bullet4 = document.getElementById ("bullet-4");
const bullet5 = document.getElementById ("bullet-5");
const bullet6 = document.getElementById ("bullet-6");
const bullet7 = document.getElementById ("bullet-7");
const bullet8 = document.getElementById ("bullet-8");
const mapHeading = document.querySelector (".map-heading");
const firstMapScreen = document.getElementById ("bullet-1-screen");

const firstStory = document.getElementById ("story-block-1")
const secondStory = document.getElementById ("story-block-2")
const thirdStory = document.getElementById ("story-block-3")
const firstStoryButton = document.getElementById ("1-s-b")
const secondStoryButton = document.getElementById ("2-s-b")
const thirdStoryButton = document.getElementById("3-s-b")

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
		firstMapScreen.style.display = "block";
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





