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
        // playPauseButton.innerHTML = "Pause";
    } else {
        audio.pause();
        // playPauseButton.innerHTML = "Play";
    }
});

restartButton.addEventListener('click', function () {
    if (!audio.paused) {
        // Se o áudio estiver tocando, apenas reiniciamos a reprodução a partir do início
        audio.currentTime = 0;
    } else {
        // Se o áudio estiver pausado, reiniciamos a reprodução a partir do início e pausamos novamente
        audio.currentTime = 0;
        audio.pause();
        // playPauseButton.innerHTML = "Play";
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