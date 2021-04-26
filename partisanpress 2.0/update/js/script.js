//WELCOME//

const nelzya = document.getElementById ("nelzya");
const welcomeButton = document.getElementById ("welcome-button-active");
const welcomeButtonAfter = document.getElementById ("welcome-button-after");
welcomeButtonAfter.style.display = "none";

welcomeButton.addEventListener("click", function (){
	nelzya.style.opacity = 1.0;
	welcomeButton.style.display = "none";
	welcomeButtonAfter.style.display = "block";
})

welcomeButtonAfter.addEventListener("click", function (){
	nelzya.style.opacity = 0;
	welcomeButton.style.display = "block";
	welcomeButtonAfter.style.display = "none";
})

//WELCOME//


//WORDS//

const wordsLeftActive = document.getElementById ("words-left-active");
const wordsRightActive = document.getElementById ("words-right-active");
const wordsButtonActive = document.getElementById ("words-button-active");

const wordsImageOne = document.getElementById ("words-image-1");
const wordsImageTwo = document.getElementById ("words-image-2");
const wordsImageThree = document.getElementById ("words-image-3");
const wordsImageFour = document.getElementById ("words-image-4");
const wordsImageFive = document.getElementById ("words-image-5");

const wordsTextOne = document.getElementById ("words-text-after-1");
const wordsTextTwo = document.getElementById ("words-text-after-2");
const wordsTextThree = document.getElementById ("words-text-after-3");
const wordsTextFour = document.getElementById ("words-text-after-4");
const wordsTextFive = document.getElementById ("words-text-after-5");

const wordsButtonAfterOne = document.getElementById ("words-button-after-1");
const wordsButtonAfterTwo = document.getElementById ("words-button-after-2");
const wordsButtonAfterThree = document.getElementById ("words-button-after-3");
const wordsButtonAfterFour = document.getElementById ("words-button-after-4");
const wordsButtonAfterFive = document.getElementById ("words-button-after-5");

wordsImageOne.style.display = "none";
wordsImageTwo.style.display = "none";
wordsImageThree.style.display = "none";
wordsImageFour.style.display = "none";
wordsImageFive.style.display = "none";

wordsTextOne.style.display = "none";
wordsTextTwo.style.display = "none";
wordsTextThree.style.display = "none";
wordsTextFour.style.display = "none";
wordsTextFive.style.display = "none";

wordsButtonActive.addEventListener("click", function () {
	wordsLeftActive.style.display = "none";
	wordsRightActive.style.display = "none";
	wordsImageOne.style.display = "block";
	wordsTextOne.style.display = "block";

})

wordsButtonAfterOne.addEventListener("click", function () {
	wordsImageOne.style.display = "none";
	wordsTextOne.style.display = "none";
	wordsImageTwo.style.display = "block";
	wordsTextTwo.style.display = "block";

})

wordsButtonAfterTwo.addEventListener("click", function () {
	wordsImageTwo.style.display = "none";
	wordsTextTwo.style.display = "none";
	wordsImageThree.style.display = "block";
	wordsTextThree.style.display = "block";

})

wordsButtonAfterThree.addEventListener("click", function () {
	wordsImageThree.style.display = "none";
	wordsTextThree.style.display = "none";
	wordsImageFour.style.display = "block";
	wordsTextFour.style.display = "block";

})

wordsButtonAfterFour.addEventListener("click", function () {
	wordsImageFour.style.display = "none";
	wordsTextFour.style.display = "none";
	wordsTextFive.style.display = "block";
	wordsImageFive.style.display = "block";

})

wordsButtonAfterFive.addEventListener("click", function () {
	wordsImageFive.style.display = "none";
	wordsTextFive.style.display = "none";
	wordsLeftActive.style.display = "block";
	wordsRightActive.style.display = "block";

})

//WORDS//


//TECH//

const techRightActive = document.getElementById ("tech-right-active");
const techButtonActive = document.getElementById ("tech-button-active");

const techWrapperOne = document.getElementById ("tech-wrapper-after-1");
const techWrapperTwo = document.getElementById ("tech-wrapper-after-2");
const techWrapperThree = document.getElementById ("tech-wrapper-after-3");

const techButtonAfterOne = document.getElementById ("tech-button-after-1");
const techButtonAfterTwo = document.getElementById ("tech-button-after-2");
const techButtonAfterThree = document.getElementById ("tech-button-after-3");

techWrapperOne.style.display = "none";
techWrapperTwo.style.display = "none";
techWrapperThree.style.display = "none";

techButtonActive.addEventListener("click", function () {
	techRightActive.style.display = "none";
	techWrapperOne.style.display = "block";
})

techButtonAfterOne.addEventListener("click", function () {
	techWrapperOne.style.display = "none";
	techWrapperTwo.style.display = "block";
})

techWrapperTwo.addEventListener("click", function () {
	techWrapperTwo.style.display = "none";
	techWrapperThree.style.display = "block";
})

techWrapperThree.addEventListener("click", function () {
	techWrapperThree.style.display = "none";
	techRightActive.style.display = "block";
})

//TECH//


//STREET//
const streetLeftActive = document.getElementById ("street-left-active");
const streetRightActive = document.getElementById ("street-right-active");
const streetButtonActive = document.getElementById ("street-button-active");
const streetButtonAfter = document.getElementById ("street-button-after");

const streetLeftAfter = document.getElementById ("street-left-after");
const streetRightAfter = document.getElementById ("street-right-after");

const bullet1 = document.getElementById ("map-point-1");
const bullet2 = document.getElementById ("map-point-2");
const bullet3 = document.getElementById ("map-point-3");
const bullet4 = document.getElementById ("map-point-4");
const bullet5 = document.getElementById ("map-point-5");
const bullet6 = document.getElementById ("map-point-6");
const bullet7 = document.getElementById ("map-point-7");
const bullet8 = document.getElementById ("map-point-8");

const firstMapScreen = document.getElementById ("map-text-1");
const secondMapScreen = document.getElementById ("map-text-2");
const thirdMapScreen = document.getElementById ("map-text-3");
const fourthMapScreen = document.getElementById ("map-text-4");
const fifthMapScreen = document.getElementById ("map-text-5");
const sixthMapScreen = document.getElementById ("map-text-6");
const seventhMapScreen = document.getElementById ("map-text-7");
const eighthMapScreen = document.getElementById ("map-text-8");

streetLeftAfter.style.display = "none";
streetRightAfter.style.display = "none";
streetButtonAfter.style.display = "none";


secondMapScreen.style.display = "none";
thirdMapScreen.style.display = "none"
fourthMapScreen.style.display = "none"
fifthMapScreen.style.display = "none"
sixthMapScreen.style.display = "none"
seventhMapScreen.style.display = "none"
eighthMapScreen.style.display = "none"




streetButtonActive.addEventListener("click", function () {
	streetLeftActive.style.display = "none";
	streetRightActive.style.display = "none";
	streetLeftAfter.style.display = "grid";
	streetRightAfter.style.display = "block";
	streetButtonAfter.style.display = "block";
})

streetButtonAfter.addEventListener("click", function () {
	streetLeftActive.style.display = "block";
	streetRightActive.style.display = "block";
	streetLeftAfter.style.display = "none";
	streetRightAfter.style.display = "none";
	streetButtonAfter.style.display = "none";
})


bullet1.onmouseover = function (){
		firstMapScreen.style.display = "block";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "none";
}



bullet2.onmouseover = function (){
		firstMapScreen.style.display = "none";
		secondMapScreen.style.display = "block";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "none";
}


bullet3.onmouseover = function (){
		firstMapScreen.style.display = "none";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "block";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "none";
}



bullet4.onmouseover = function (){
		firstMapScreen.style.display = "none";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "block";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "none";
}


bullet5.onmouseover = function (){
		firstMapScreen.style.display = "none";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "block";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "none";
}


bullet6.onmouseover = function (){
		firstMapScreen.style.display = "none";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "block";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "none";
}


bullet7.onmouseover = function (){
		firstMapScreen.style.display = "none";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "block";
		eighthMapScreen.style.display = "none";
}



bullet8.onmouseover = function (){
		firstMapScreen.style.display = "none";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "block";
}


//STREET//

//COLLAB//

const collabLeftActive = document.getElementById ("collab-left-active");
const collabRightActive = document.getElementById ("collab-right-active");
const collabButtonActive = document.getElementById ("collab-button-active");

const collabImageOne = document.getElementById ("collab-image-1");
const collabImageTwo = document.getElementById ("collab-image-2");
const collabImageThree = document.getElementById ("collab-image-3");
const collabImageFour = document.getElementById ("collab-image-4");
const collabImageFive = document.getElementById ("collab-image-5");

const collabTextOne = document.getElementById ("collab-text-after-1");
const collabTextTwo = document.getElementById ("collab-text-after-2");
const collabTextThree = document.getElementById ("collab-text-after-3");
const collabTextFour = document.getElementById ("collab-text-after-4");
const collabTextFive = document.getElementById ("collab-text-after-5");

const collabButtonAfterOne = document.getElementById ("collab-button-after-1");
const collabButtonAfterTwo = document.getElementById ("collab-button-after-2");
const collabButtonAfterThree = document.getElementById ("collab-button-after-3");
const collabButtonAfterFour = document.getElementById ("collab-button-after-4");
const collabButtonAfterFive = document.getElementById ("collab-button-after-5");

collabImageOne.style.display = "none";
collabImageTwo.style.display = "none";
collabImageThree.style.display = "none";
collabImageFour.style.display = "none";
collabImageFive.style.display = "none";

collabTextOne.style.display = "none";
collabTextTwo.style.display = "none";
collabTextThree.style.display = "none";
collabTextFour.style.display = "none";
collabTextFive.style.display = "none";

collabButtonActive.addEventListener("click", function () {
	collabLeftActive.style.display = "none";
	collabRightActive.style.display = "none";
	collabImageOne.style.display = "block";
	collabTextOne.style.display = "block";

})

collabButtonAfterOne.addEventListener("click", function () {
	collabImageOne.style.display = "none";
	collabTextOne.style.display = "none";
	collabImageTwo.style.display = "block";
	collabTextTwo.style.display = "block";

})

collabButtonAfterTwo.addEventListener("click", function () {
	collabImageTwo.style.display = "none";
	collabTextTwo.style.display = "none";
	collabImageThree.style.display = "block";
	collabTextThree.style.display = "block";

})
collabButtonAfterThree.addEventListener("click", function () {
	collabImageThree.style.display = "none";
	collabTextThree.style.display = "none";
	collabImageFour.style.display = "block";
	collabTextFour.style.display = "block";

})

collabButtonAfterFour.addEventListener("click", function () {
	collabImageFour.style.display = "none";
	collabTextFour.style.display = "none";
	collabTextFive.style.display = "block";
	collabImageFive.style.display = "block";

})

collabButtonAfterFive.addEventListener("click", function () {
	collabImageFive.style.display = "none";
	collabTextFive.style.display = "none";
	collabLeftActive.style.display = "block";
	collabRightActive.style.display = "block";

})

//COLLAB//

//CHARITY//

const charityLeftActive = document.getElementById ("charity-left-active");
const charityRightActive = document.getElementById ("charity-right-active");
const charityButtonActive = document.getElementById ("charity-button-active");

const charityImageOne = document.getElementById ("charity-image-1");
const charityImageTwo = document.getElementById ("charity-image-2");
const charityImageThree = document.getElementById ("charity-image-3");

const charityTextOne = document.getElementById ("charity-text-after-1");
const charityTextTwo = document.getElementById ("charity-text-after-2");
const charityTextThree = document.getElementById ("charity-text-after-3");

const charityButtonAfterOne = document.getElementById ("charity-button-after-1");
const charityButtonAfterTwo = document.getElementById ("charity-button-after-2");
const charityButtonAfterThree = document.getElementById ("charity-button-after-3");

charityImageOne.style.display = "none";
charityImageTwo.style.display = "none";
charityImageThree.style.display = "none";

charityTextOne.style.display = "none";
charityTextTwo.style.display = "none";
charityTextThree.style.display = "none";

charityButtonActive.addEventListener("click", function () {
	charityLeftActive.style.display = "none";
	charityRightActive.style.display = "none";
	charityImageOne.style.display = "block";
	charityTextOne.style.display = "block";

})

charityButtonAfterOne.addEventListener("click", function () {
	charityImageOne.style.display = "none";
	charityTextOne.style.display = "none";
	charityImageTwo.style.display = "block";
	charityTextTwo.style.display = "block";

})

charityButtonAfterTwo.addEventListener("click", function () {
	charityImageTwo.style.display = "none";
	charityTextTwo.style.display = "none";
	charityImageThree.style.display = "block";
	charityTextThree.style.display = "block";

})

charityButtonAfterThree.addEventListener("click", function () {
	charityImageThree.style.display = "none";
	charityTextThree.style.display = "none";
	charityLeftActive.style.display = "block";
	charityRightActive.style.display = "block";

})

//CHARITY//



//CONTACT//

const contactLeftActive = document.getElementById ("contact-left-active");
const contactButtonActive = document.getElementById ("contact-button-active");
const contactButtonAfter = document.getElementById ("contact-button-after");
const contactImageOne = document.getElementById ("contact-image-1");

contactButtonAfter.style.display = "none";
contactImageOne.style.display = "none";

contactButtonActive.addEventListener("click", function () {
	contactLeftActive.style.display = "none";
	contactButtonActive.style.display = "none";
	contactImageOne.style.display = "block";
	contactButtonAfter.style.display = "block";

})

contactButtonAfter.addEventListener("click", function () {
	contactLeftActive.style.display = "block";
	contactButtonActive.style.display = "block";
	contactImageOne.style.display = "none";
	contactButtonAfter.style.display = "none";


})


//CONTACT//



//WHY//

const xueta = document.getElementById ("xueta");
const whyButton = document.getElementById ("why-button-active");
const whyButtonAfter = document.getElementById ("why-button-after");

whyButtonAfter.style.display = "none";

whyButton.addEventListener("click", function (){
	xueta.style.opacity = 1.0;
	whyButton.style.display = "none";
	whyButtonAfter.style.display = "block";
})

whyButtonAfter.addEventListener("click", function (){
	xueta.style.opacity = 0;
	whyButton.style.display = "block";
	whyButtonAfter.style.display = "none";
})

//WHY//