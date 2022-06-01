/* 
Escreva um programa  para aceitar um número e verifique se o número é par ou não. 
Imprime 1 se o número for par ou 0 se o número for ímpar.  
*/

var ler = require("prompt-sync")();

var numero = ler("Digite um número: ");

if (numero % 2 == 0){
    console.log("1");
}

else {
    console.log("0");
}