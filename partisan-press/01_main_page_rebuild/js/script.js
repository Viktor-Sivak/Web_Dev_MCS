const bullet1 = document.getElementById ("bullet-1");
const bullet2 = document.getElementById ("bullet-2");
const bullet3 = document.getElementById ("bullet-3");
const bullet4 = document.getElementById ("bullet-4");
const bullet5 = document.getElementById ("bullet-5");
const bullet6 = document.getElementById ("bullet-6");
const bullet7 = document.getElementById ("bullet-7");
const bullet8 = document.getElementById ("bullet-8");
const bulletCont = document.getElementById ("bullet-8");

const mapHeading = document.querySelector (".map-heading");
const firstMapScreen = document.getElementById ("bullet-1-screen");
const secondMapScreen = document.getElementById ("bullet-2-screen");
const thirdMapScreen = document.getElementById ("bullet-3-screen");
const fourthMapScreen = document.getElementById ("bullet-4-screen");
const fifthMapScreen = document.getElementById ("bullet-5-screen");
const sixthMapScreen = document.getElementById ("bullet-6-screen");
const seventhMapScreen = document.getElementById ("bullet-7-screen");
const eighthMapScreen = document.getElementById ("bullet-8-screen");

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
		bullet1.style.display = "flex";
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
		bullet1.style.display = "flex";
		mapHeading.style.display = "block"
}

bullet2.onmouseover = function (){
		secondMapScreen.style.display = "block";
		bullet8.style.display = "none";
		bullet7.style.display = "none";
		bullet6.style.display = "none";
		bullet5.style.display = "none";
		bullet4.style.display = "none";
		bullet3.style.display = "none";
		bullet2.style.display = "flex";
		bullet1.style.display = "none";
		mapHeading.style.display = "none"
}

bullet2.onmouseout = function (){
		secondMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		bullet1.style.display = "flex";
		mapHeading.style.display = "block"
}

bullet3.onmouseover = function (){
		thirdMapScreen.style.display = "block";
		bullet8.style.display = "none";
		bullet7.style.display = "none";
		bullet6.style.display = "none";
		bullet5.style.display = "none";
		bullet4.style.display = "none";
		bullet3.style.display = "flex";
		bullet2.style.display = "none";
		bullet1.style.display = "none";
		mapHeading.style.display = "none"
}

bullet3.onmouseout = function (){
		thirdMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		bullet1.style.display = "flex";
		mapHeading.style.display = "block"
}

bullet4.onmouseover = function (){
		fourthMapScreen.style.display = "block";
		bullet8.style.display = "none";
		bullet7.style.display = "none";
		bullet6.style.display = "none";
		bullet5.style.display = "none";
		bullet4.style.display = "flex";
		bullet3.style.display = "none";
		bullet2.style.display = "none";
		bullet1.style.display = "none";
		mapHeading.style.display = "none"
}

bullet4.onmouseout = function (){
		fourthMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		bullet1.style.display = "flex";
		mapHeading.style.display = "block"
}

bullet5.onmouseover = function (){
		fifthMapScreen.style.display = "block";
		bullet8.style.display = "none";
		bullet7.style.display = "none";
		bullet6.style.display = "none";
		bullet5.style.display = "flex";
		bullet4.style.display = "none";
		bullet3.style.display = "none";
		bullet2.style.display = "none";
		bullet1.style.display = "none";
		mapHeading.style.display = "none"
}

bullet5.onmouseout = function (){
		fifthMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		bullet1.style.display = "flex";
		mapHeading.style.display = "block"
}

bullet6.onmouseover = function (){
		sixthMapScreen.style.display = "block";
		bullet8.style.display = "none";
		bullet7.style.display = "none";
		bullet6.style.display = "flex";
		bullet5.style.display = "none";
		bullet4.style.display = "none";
		bullet3.style.display = "none";
		bullet2.style.display = "none";
		bullet1.style.display = "none";
		mapHeading.style.display = "none"
}

bullet6.onmouseout = function (){
		sixthMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		bullet1.style.display = "flex";
		mapHeading.style.display = "block";
}

bullet7.onmouseover = function (){
		seventhMapScreen.style.display = "block";
		bullet8.style.display = "none";
		bullet7.style.display = "flex";
		bullet6.style.display = "none";
		bullet5.style.display = "none";
		bullet4.style.display = "none";
		bullet3.style.display = "none";
		bullet2.style.display = "none";
		bullet1.style.display = "none";
		mapHeading.style.display = "none"
}

bullet7.onmouseout = function (){
		seventhMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		bullet1.style.display = "flex";
		mapHeading.style.display = "block"
}

bullet8.onmouseover = function (){
		eighthMapScreen.style.display = "block";
		bullet8.style.display = "flex";
		bullet7.style.display = "none";
		bullet6.style.display = "none";
		bullet5.style.display = "none";
		bullet4.style.display = "none";
		bullet3.style.display = "none";
		bullet2.style.display = "none";
		bullet1.style.display = "none";
		mapHeading.style.display = "none"
}

bullet8.onmouseout = function (){
		eighthMapScreen.style.display = "none";
		bullet8.style.display = "flex";
		bullet7.style.display = "flex";
		bullet6.style.display = "flex";
		bullet5.style.display = "flex";
		bullet4.style.display = "flex";
		bullet3.style.display = "flex";
		bullet2.style.display = "flex";
		bullet1.style.display = "flex";
		mapHeading.style.display = "block"
}


let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');

})


var linkNav = document.querySelectorAll('[href^="#to-store"]'), //выбираем все ссылки к якорю на странице
    V = .1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
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