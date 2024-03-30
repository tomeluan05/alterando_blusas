function mudarCorBlusa() {
    var cor = document.getElementById("corBlusa").value;
    var blusa = document.querySelector(".blusa");
    var partes = blusa.children;
    for (var i = 0; i < partes.length; i++) {
        partes[i].style.backgroundColor = cor;
    }
}

function mudarCorTexto() {
    var cor = document.getElementById("corTexto").value;
    var textos = document.querySelectorAll(".simbolo, .nome, .numero, .apollo");
    for (var i = 0; i < textos.length; i++) {
        textos[i].style.color = cor;
    }
}

function mudarSimbolo() {
    var simbolo = document.getElementById("simbolo");
    var nomeTime = document.getElementById("nomeTime").value;
    simbolo.textContent = nomeTime;
}

function mudarNumeroFrente() {
    var numero = document.getElementById("numero");
    var numeroFrente = document.getElementById("numeroFrente").value;
    numero.textContent = numeroFrente;
}

function mudarNome() {
    var nome = document.getElementById("nome");
    var nomeJogador = document.getElementById("nomeJogador").value;
    nome.textContent = nomeJogador;
}

function mudarNumeroTras() {
    var numeroAtras = document.getElementById("numero-atras");
    var numeroTras = document.getElementById("numeroTras").value;
    numeroAtras.textContent = numeroTras;
}

