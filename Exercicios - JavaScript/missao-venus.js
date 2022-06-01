// Escreva um programa que tenha dois números como entrada e exiba o produto de dois números. 

var ler = require("prompt-sync")();

var numero1 = ler("Digite o primeiro número: ");
var numero2 = ler("Digite o segundo número: ");

var prod = numero1 * numero2;
console.log("O produto dos números é: " + prod);