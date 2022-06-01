// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

var ler = require("prompt-sync")();

var letra = ler("Digite 1 letra: ");
var letra = letra.toLowerCase();

if(letra == 'a' || letra == 'e' || letra == 'i' || letra =='o' || letra =='u') {
    console.log("A letra é vogal");
} else {
    console.log("A letra é consoante");
}