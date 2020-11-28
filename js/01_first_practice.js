var totalCash = prompt('Сколько денег?');

var watchesCount = prompt('Кол-во часов?');

var earringsCount = prompt('Кол-во брюликов?');

var watchesSum = watchesCount*prompt('Сколько стоят одни часы?');

var earringsSum = earringsCount*prompt('Сколько стоит один брюлик?');

var Result = totalCash >= watchesSum+earringsSum

alert (Result) 