function atualizarTempo() {
    let display = document.querySelector('.display')
    let agora = new Date();
    let horario = agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds();
    display.textContent = horario;
}

atualizarTempo()
setInterval(atualizarTempo, 1000)
