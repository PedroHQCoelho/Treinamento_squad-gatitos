/*
Faça um programa para a leitura de duas notas parciais de um aluno. 
Dica: #Estrutura de decisão e #Estrutura de repetição 
O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.
*/

var ler = require("prompt-sync")();

var nota1 = ler("Informe a primeira nota: ");
var nota2 = ler("Informe a segunda nota: ");

var media = ((parseFloat(nota1) + parseFloat(nota2))/2);

console.log("Média: " + media.toFixed(1));

if (media < 7) {
    console.log("REPROVADO!");
}else if (media >= 7 && media < 10) {
    console.log("APROVADO!");
}else if (media == 10){
    console.log("APROVADO COM DISTINÇÃO!");
}else {
    console.log("Você não digitou a média certa, por favor, insira os valores corretos.");
}