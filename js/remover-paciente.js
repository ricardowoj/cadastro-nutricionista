var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){  
    var alvoEvento = event.target; // TD
    var paiDoAlvo = alvoEvento.parentNode; // TR 
    paiDoAlvo.classList.add("fadeOut"); // buscando classe no CSS - fadeOut

    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);

});