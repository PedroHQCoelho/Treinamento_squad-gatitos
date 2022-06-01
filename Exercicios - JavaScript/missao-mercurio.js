/* 
As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contaram para desenvolver o programa que calculará os reajustes. 
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento. 
*/

var ler = require("prompt-sync")();

var salario = ler ("Informe o seu salário: ");
salario = parseFloat(salario);

var percentual = calcularPercentualAumento(salario);

function calcularPercentualAumento(salario) {
    if (salario <= 280) {
        return 20
    } else if (salario <= 700) {
        return 15
    } else if (salario <= 1500){
        return 10
    } else {
        return 5
    }
}

var aumento = salario * (percentual/100);

var novoSalario = parseFloat(salario) + parseFloat(aumento);

console.log("Salário Original: R$" + salario.toFixed(2));
console.log("Percentual Aumentado: " + percentual + "%");
console.log("Aumento em Reais: R$" + aumento.toFixed(2));
console.log("Novo Salário: R$" + novoSalario.toFixed(2));