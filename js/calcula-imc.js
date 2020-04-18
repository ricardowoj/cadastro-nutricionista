var titulo = document.querySelector("h1");
titulo.textContent = "Controle clientes - Nutrição"

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imc = calculaImc(peso, altura);
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = calculaImc(peso, altura);

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);
    

    if(!pesoEhValido){
        tdPeso.textContent = "Peso inválido";
        tdImc.textContent = "Peso inválido";    
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValido){
        tdAltura.textContent = "Altura inválida";
        tdImc.textContent = "Altura inválido";
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 300){
        return true;        
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0.1 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}