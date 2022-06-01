/* 
Faça um programa que pergunte o preço de três produtos e 
informe qual produto você deve comprar, 
sabendo que a decisão é sempre pelo mais barato.  
*/

var ler = require("prompt-sync")();

var produtoA = ler("Informe o preço do Produto A: ");
var produtoB = ler("Informe o preço do Produto B: ");
var produtoC = ler("Informe o preço do Produto C: ");

if ((produtoA < produtoB) && (produtoA < produtoC)) {
    console.log ("O produto mais barato é o Produto A."); 
} else if ((produtoB < produtoC) && (produtoB < produtoA)) {
    console.log ("O produto mais barato é o Produto B."); 
} else if ((produtoC < produtoA) && (produtoC < produtoB)) {
    console.log ("O produto mais barato é o Produto C."); 
}  else if ((produtoA === produtoB) && (produtoA < produtoC)) {
    console.log ("Os produtos mais baratos são os Produtos A e B."); 
}  else if ((produtoA === produtoC) && (produtoA < produtoB)) {
    console.log ("Os produtos mais baratos são os Produtos A e C."); 
}  else if ((produtoB === produtoC) && (produtoB < produtoA)) {
    console.log ("Os produtos mais baratos são os Produtos B e C."); 
} else {
    console.log("Todos os produtos têm o mesmo preço!");
}