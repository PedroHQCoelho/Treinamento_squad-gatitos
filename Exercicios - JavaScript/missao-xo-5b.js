//Escreva um programa para reverter uma string.

var ler = require("prompt-sync")();

var string = ler("Escreve algo aí, irmão: ");

var inversa = string.split("").reverse().join("");

console.log(inversa);