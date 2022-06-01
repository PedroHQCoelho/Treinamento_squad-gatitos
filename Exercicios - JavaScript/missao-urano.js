// Escreva um programa  que recebe um número como entrada e imprime sua tabuada até 10.

const prompt = require("prompt-sync")();

var tabuada = prompt("Qual número que você seja exibir a tabuada? ")

console.log("TABUADA DE " + tabuada)
for (var seqTabuada = 1; seqTabuada <= 10; seqTabuada++)
{
    var resultado = seqTabuada * tabuada   

    console.log(tabuada + " x " + seqTabuada + " = " + resultado)
}