window.addEventListener("load", function() {
	
	const popup = document.querySelector(".popup");
	const closePopup = document.querySelector(".closePopup");
	const openMenu = document.querySelector(".openMenu");
	const closeMenu = document.querySelector(".closeMenu");
	const request = document.querySelector(".request");
	const menu = document.querySelector(".menu")

	closePopup.addEventListener("click", ()=>{
		popup.style.display = "none";
		
	})
	request.addEventListener("click", ()=>{
		popup.style.display = "flex";	
	})

	openMenu.addEventListener ("click", ()=>{
		menu.style.left = 0;
	})

	closeMenu.addEventListener ("click", ()=>{
		menu.style.left = (parseInt(menu.style.left,10)+-50)+'vw';
	})

	
})