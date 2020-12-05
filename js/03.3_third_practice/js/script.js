haveEnough()
function haveEnough () {
	let totalCash = prompt('Сколько денег?');
	let watchesCount = prompt('Кол-во часов?');
	let watchesSum = watchesCount*prompt('Сколько стоят одни часы?');
	let earringsCount = prompt('Кол-во брюликов?');
	let earringsSum = earringsCount*prompt('Сколько стоит один брюлик?');
	let result = totalCash >= watchesSum+earringsSum;
	if (result == true) {
		alert ("Enough $$$");
	} else if (result == false) {
		alert ("NotEnough $$$");
	}
	return result;

}