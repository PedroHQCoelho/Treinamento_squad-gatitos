function calculaIMC() {
    var height = ((document.getElementById("height").value)/100);
    var weight = (document.getElementById("weight").value);

    var imc = (weight/(height**2)).toFixed(1);
    var text=""
    if(imc < 18.5){
        text="Abaixo do peso"
    } else if(imc < 25){
        text="Normal"
    }
    else if(imc < 30){
        text="Sobrepeso"
    }else if(imc < 40){
        text="Obesidade"
    }else if (imc >=40) {
        text="Obesidade Mórbida"
    } else {
        text="Impreciso! Informe os números corretos, por favor."
    }

    document.getElementById("imcresposta").innerText=`Seu IMC é ${imc} - ${text}`
}