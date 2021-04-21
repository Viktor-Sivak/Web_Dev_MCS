let totalCash = parseInt(prompt("Сколько есть денег на кармане"));
let watchesCount = parseInt(prompt("Сколько купим часов"));
let earringsCount = parseInt(prompt("Сколько купим брюликов"));
let watchesSum = parseInt(prompt("Сколько стоят одни часы"));
let earringsSum = parseInt(prompt("Сколько стоят один брюлик"));
console.log (totalCash >= watchesCount * watchesSum + earringsSum * earringsCount);

