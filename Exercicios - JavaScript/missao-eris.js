/* 
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. 
As perguntas são:

"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", 
entre 3 e 4 como "Cúmplice" e 5 como "Assassino". 
Caso contrário, ele será classificado como "Inocente". 
*/

var ler = require("prompt-sync")();

var perguntas = ["Telefonou para a vítima? ",
"Esteve no local do crime? ",
"Mora perto da vítima? ",
"Devia para a vítima? ",
"Já trabalhou com a vítima? "]
var sim = 0;

console.log("Digite S ou N para as perguntas:");

for (i = 0; i < perguntas.length; i++) {
    var resposta = ler(perguntas[i])
    if (resposta.toLowerCase() == 'sim' || resposta.toLowerCase() == 's') {
        sim++
    }
}

if (sim == 2) {
    console.log("Suspeito!")
} else if ((sim == 3) || (sim == 4)) {
    console.log("Cúmplice!")
} else if (sim == 5) {
    console.log("Culpado!")
} else {
    console.log("Inocente!")
}