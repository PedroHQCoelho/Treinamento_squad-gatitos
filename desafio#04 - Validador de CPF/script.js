function validaCPF() {
    var cpf = document.getElementById('cpf').value,
        cpfSoNumero = cpf.replace('.', '').replace('.', '').replace('-', ''),
        novePrimeiros = cpfSoNumero.substr(0, 9),
        dezPrimeiros = cpfSoNumero.substr(0, 10),
        somaNovePrimeiros = 0,
        somaDezPrimeiros = 0,
        multiplicador = 10;

    for (var i = 0; i < novePrimeiros.length; i++) {
        var numero = novePrimeiros.substr(i, 1);
        somaNovePrimeiros += numero * multiplicador;
        multiplicador--;
    }
    
    multiplicador = 11;
    
    for (var i = 0; i < dezPrimeiros.length; i++) {
        var numero2 = dezPrimeiros.substr(i, 1);
        somaDezPrimeiros += numero2 * multiplicador;
        multiplicador--;
    }

    var modulo1 = ((somaNovePrimeiros * 10) % 11);
    var modulo2 = ((somaDezPrimeiros * 10) % 11);

    resultado=""
    if (modulo1.toString() + modulo2.toString() === cpfSoNumero.substr(9, 2)) {
        resultado="Válido"
    } else {
        resultado="Falso"
    }

    document.getElementById("resultadocpf").innerText= `Seu CPF é ${resultado}`
}