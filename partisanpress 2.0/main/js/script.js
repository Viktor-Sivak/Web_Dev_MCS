const contentTextPress = document.getElementById ("about-press-text");
const contentTextFont = document.getElementById ("about-font-text");
const contentTextWords = document.getElementById ("about-words-text");
const leftSideContent = document.getElementById ("left-about-container");
const optionPress = document.getElementById ("left-about-press");
const optionFont = document.getElementById ("left-about-font");
const optionWords = document.getElementById ("left-about-words");


optionPress.style.display = "none";
optionFont.style.display = "none";



contentTextPress.onmouseover = function (){
		optionPress.style.display = "block";
		leftSideContent.style.display = "none";
		contentTextFont.style.visibility = "hidden";
}

contentTextPress.onmouseout = function (){
		optionPress.style.display = "none";
		leftSideContent.style.display = "block";
		contentTextFont.style.visibility = "visible";
}

contentTextFont.onmouseover = function (){
		optionFont.style.display = "block";
		leftSideContent.style.display = "none";
		contentTextPress.style.visibility = "hidden";
}

contentTextFont.onmouseout = function (){
		optionFont.style.display = "none";
		leftSideContent.style.display = "block";
		contentTextPress.style.visibility = "visible";
}










const bullet1 = document.getElementById ("map-point-1");
const bullet2 = document.getElementById ("map-point-2");
const bullet3 = document.getElementById ("map-point-3");
const bullet4 = document.getElementById ("map-point-4");
const bullet5 = document.getElementById ("map-point-5");
const bullet6 = document.getElementById ("map-point-6");
const bullet7 = document.getElementById ("map-point-7");
const bullet8 = document.getElementById ("map-point-8");
const mapHeading = document.querySelector (".right-map-text-wrapper");
const firstMapScreen = document.getElementById ("map-text-1");
const secondMapScreen = document.getElementById ("map-text-2");
const thirdMapScreen = document.getElementById ("map-text-3");
const fourthMapScreen = document.getElementById ("map-text-4");
const fifthMapScreen = document.getElementById ("map-text-5");
const sixthMapScreen = document.getElementById ("map-text-6");
const seventhMapScreen = document.getElementById ("map-text-7");
const eighthMapScreen = document.getElementById ("map-text-8");

bullet1.onmouseover = function (){
		firstMapScreen.style.display = "block";
		secondMapScreen.style.display = "none";
		thirdMapScreen.style.display = "none";
		fourthMapScreen.style.display = "none";
		fifthMapScreen.style.display = "none";
		sixthMapScreen.style.display = "none";
		seventhMapScreen.style.display = "none";
		eighthMapScreen.style.display = "none";
		mapHeading.style.display = "none";
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
		mapHeading.style.display = "none";
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
		mapHeading.style.display = "none";
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
		mapHeading.style.display = "none";
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
		mapHeading.style.display = "none";
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
		mapHeading.style.display = "none";
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
		mapHeading.style.display = "none";
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
		mapHeading.style.display = "none";
}




const story1 = document.getElementById ("story-text-1");
const story2 = document.getElementById ("story-text-2");
const story3 = document.getElementById ("story-text-3");
const story4 = document.getElementById ("story-text-4");
const story5 = document.getElementById ("story-text-5");
const story6 = document.getElementById ("story-text-6");
const story7 = document.getElementById ("story-text-7");
const story8 = document.getElementById ("story-text-8");
const story9 = document.getElementById ("story-text-9");

const buttonStory1 = document.getElementById ("story-button-1");
const buttonStory2 = document.getElementById ("story-button-2");
const buttonStory3 = document.getElementById ("story-button-3");
const buttonStory4 = document.getElementById ("story-button-4");
const buttonStory5 = document.getElementById ("story-button-5");
const buttonStory6 = document.getElementById ("story-button-6");
const buttonStory7 = document.getElementById ("story-button-7");
const buttonStory8 = document.getElementById ("story-button-8");
const buttonStory9 = document.getElementById ("story-button-9");

story1.style.display = "block";
story2.style.display = "none";
story3.style.display = "none";
story4.style.display = "none";
story5.style.display = "none";
story6.style.display = "none";
story7.style.display = "none";
story8.style.display = "none";
story9.style.display = "none";


buttonStory1.addEventListener("click", function (){
	story1.style.display = "none";
	story2.style.display = "block";
})

buttonStory2.addEventListener("click", function (){
	story2.style.display = "none";
	story3.style.display = "block";
})

buttonStory3.addEventListener("click", function (){
	story3.style.display = "none";
	story4.style.display = "block";
})

buttonStory4.addEventListener("click", function (){
	story4.style.display = "none";
	story5.style.display = "block";
})

buttonStory5.addEventListener("click", function (){
	story5.style.display = "none";
	story6.style.display = "block";
})

buttonStory6.addEventListener("click", function (){
	story6.style.display = "none";
	story7.style.display = "block";
})

buttonStory7.addEventListener("click", function (){
	story7.style.display = "none";
	story8.style.display = "block";
})

buttonStory8.addEventListener("click", function (){
	story8.style.display = "none";
	story9.style.display = "block";
})

buttonStory9.addEventListener("click", function (){
	story9.style.display = "none";
	story1.style.display = "block";
})




const fixedMenu = document.getElementById ("fixed-menu");
const iconMenu = document.getElementById ("icon-menu")
const menuList = document.getElementById ("menu-wrapper");



fixedMenu.onmouseover = function() {
	iconMenu.style.transform = 'rotate('+360+'deg)'; 
	menuList.style.display = "flex";
}

fixedMenu.onmouseout = function() {
	iconMenu.style.transform = 'rotate('+0+'deg)'; 
	menuList.style.display = "none";
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	menuBtn.style.transform = 'rotate('+360+'deg)'; 

})

var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = .2;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
