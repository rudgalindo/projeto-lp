var SetaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function RolarDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top: 55px"
}

function RolarEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}