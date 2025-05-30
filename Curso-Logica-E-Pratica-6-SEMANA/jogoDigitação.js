let textOriginal = document.getElementById('texto').textContent
let campoTexto = document.getElementById('campoTexto')
let resultado = document.getElementById('resultado')
let contador = document.getElementById('contador')
let reiniciarButton = document.getElementById('reiniciar')

let tempoIniciado = false;
let tempo = 0;
let intervalId;

function iniciarTempo(){
    tempoIniciado = true
    intervalId = setInterval(function(){
        tempo++
        contador.textContent = tempo;
    },1000)
}

function reiniciarJogo(){
    clearInterval(intervalId)
    tempo = 0
    contador.textContent = tempo;
    campoTexto.value = ''
    campoTexto.disabled = false;
    tempoIniciado = false;
}

campoTexto.addEventListener('input', function(){
    if(tempoIniciado){
        iniciarTempo();
    }

    if(campoTexto === textOriginal){
        clearInterval(intervalId)
        resultado.textContent = `Parabéns você digitou o texto em ${tempo} segundos!`
        campoTexto.disabled = true;
    }
})

reiniciarButton.addEventListener('click',reiniciarJogo())