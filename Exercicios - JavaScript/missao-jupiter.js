// Escreva um programa para converter segundos em horas, minutos e segundos.

var ler = require("prompt-sync")();

var tempo = ler("Digite o número de segundos: ");

var horas = parseInt(tempo/3600);
var minutos = parseInt((tempo % 3600)/60);
var segundos = parseInt((tempo % 3600)%60);

console.log(tempo + "s = " + horas + ":" + minutos + ":" + segundos);
console.log(tempo + "s = " + horas + "h" + minutos + "m" + segundos + "s");