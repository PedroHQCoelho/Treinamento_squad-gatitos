// Escreva um programa  para converter um número decimal em número octal.

var ler = require("prompt-sync")();

var decimal = Number(ler("Digite um número na base decimal: "));

var octal = Number(decimal.toString(8));

console.log("O número em octal é " + octal);