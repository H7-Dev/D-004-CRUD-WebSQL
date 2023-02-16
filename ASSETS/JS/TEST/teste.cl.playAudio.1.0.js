/*
  * Nome do Arquivo: exemplo.js
  Data de Criação: 01/01/2022

  Descrição:

  -Este código JavaScript é responsável por controlar a reprodução de um áudio em uma página web

  Dependências: Nenhuma.

  Configurações: Nenhuma.

  Aqui estão as descrições dos elementos do código:

  - audio: representa o elemento de áudio na página web.
  - playPauseButton: representa o botão de "Play/Pause" do áudio.
  - restartButton: representa o botão de "Reiniciar" do áudio.
  - timeDecorrido: representa o elemento onde é mostrado o tempo decorrido do áudio.
  - timeTotal: representa o elemento onde é mostrado o tempo total do áudio.
  - timeProgress: representa o elemento onde é mostrado o progresso de reprodução do áudio.
  - btnAvanSegs: representa o botão para avançar um número de segundos no áudio.
  - btnVoltSegs: representa o botão para retroceder um número de segundos no áudio.

  Seções do Código:
  1.
  2.

*/

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const restartButton = document.getElementById('restart-button');
const timeDecorrido = document.getElementById('timeDecorrido');
const timeTotal = document.getElementById('timeTotal');
const timeProgress = document.getElementById('timeProgress');

const btnAvanSegs = document.getElementById("btnAvanSegs");
const btnVoltSegs = document.getElementById("btnVoltSegs");

playPauseButton.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.toggle('activePlay')
    } else {
        audio.pause();
        playPauseButton.classList.toggle('activePlay')
    }
});

restartButton.addEventListener('click', function () {
    if (!audio.paused) {
        // Se o áudio estiver tocando, apenas reiniciamos a reprodução a partir do início
        audio.currentTime = 0;
        playPauseButton.classList.toggle('activePlay')
    } else {
        // Se o áudio estiver pausado, reiniciamos a reprodução a partir do início e pausamos novamente
        audio.currentTime = 0;
        audio.pause();
        // playPauseButton.innerHTML = "Play";
        playPauseButton.classList.toggle('activePlay')
    }
});

audio.addEventListener('loadedmetadata', function () {
    const durMinutes = isFinite(audio.duration) ? Math.floor(audio.duration / 60) : 0;
    const durSeconds = isFinite(audio.duration) ? Math.floor(audio.duration % 60) : 0;
    timeTotal.innerHTML = `${durMinutes}:${(durSeconds < 10 ? '0' : '')}${durSeconds}`;
});

audio.addEventListener('timeupdate', function () {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    timeDecorrido.innerHTML = `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;

    const progress = (audio.currentTime / audio.duration) * 100;
    timeProgress.style.setProperty('--progress', `${progress}%`);
})

btnAvanSegs.addEventListener("click", function () {
    audio.currentTime += 10; // avança 10 segundos
});

btnVoltSegs.addEventListener("click", function () {
    audio.currentTime -= 10; // retrocede 10 segundos
});