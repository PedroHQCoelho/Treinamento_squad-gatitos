/* 
Missão Terra

Escreva um programa  para dividir dois números e imprimir na tela 
*/

var ler = require("prompt-sync")();

var numero1 = ler("Digite o primeiro número: ");
var numero2 = ler("Digite o segundo número: ");

var div = numero1/numero2;
console.log("A divisão dos números é: " + div);