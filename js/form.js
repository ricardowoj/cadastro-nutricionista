var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
     //seleciona formulario
    var form = document.querySelector("#form-adiciona");

    //buscando dados do formulário inserido pelo usuário
    var paciente = pacienteInseridoNoFormulario(form);

    //Cria uma nova Tr a partido do paciente inserido no formulário
    var pacienteTr = criaTr(paciente);

    //Validação das informações inseridas no formulário
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    };

    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //Limpar formulário após criar paciente
    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
});

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; //limita aquantidade de erro, ao clicar em adicionar

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function pacienteInseridoNoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc( form.peso.value, form.altura.value)
    }
    return paciente;
};

function criaTr(paciente){
    //cria elementos para inserir na tabela
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); 
    
    //Cirando os Tds
    var nomeTd     = criaTd(paciente.nome, "info-nome");
    var pesoTd     = criaTd(paciente.peso, "info-peso");
    var alturaTd     = criaTd(paciente.altura, "info-altura");
    var gorduraTd     = criaTd(paciente.gordura, "info-gordura");
    var imcTd     = criaTd(paciente.imc, "info-imc");
   
    //Colocando como filhos do Tr. PS: poderia inserir diretamente a funcao criaTd
    pacienteTr.appendChild(nomeTd    ); 
    pacienteTr.appendChild(pesoTd    );
    pacienteTr.appendChild(alturaTd  );
    pacienteTr.appendChild(gorduraTd );
    pacienteTr.appendChild(imcTd     );

    return pacienteTr
};

function criaTd(dadoInserido, classe){
    var td = document.createElement("td");
    td.textContent = dadoInserido;
    td.classList.add(classe);
    return td; 
};

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("É preciso inserir nome do paciente")
    }
    if(!validaPeso(paciente.peso) || paciente.peso.length == 0){
        erros.push("Peso é inválido");
    }
    if(!validaAltura(paciente.altura) || paciente.peso.length == 0){
        erros.push("Altura é inválida");
    }
    if(paciente.gordura.length == 0){
        erros.push("É preciso inserir % de gordura")
    }
    return erros;
}