const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const restartButton = document.getElementById('restart-button');
const timeDecorrido = document.getElementById('timeDecorrido');
const timeTotal = document.getElementById('timeTotal');

playPauseButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    // playPauseButton.innerHTML = "Pause";
  } else {
    audio.pause();
    // playPauseButton.innerHTML = "Play";
  }
});

restartButton.addEventListener('click', function() {
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

audio.addEventListener('timeupdate', function() {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  timeDecorrido.innerHTML = `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  const durMinutes = Math.floor(audio.duration / 60);
  const durSeconds = Math.floor(audio.duration % 60);
  timeTotal.innerHTML = `${durMinutes}:${(durSeconds < 10 ? '0' : '')}${durSeconds}`;
});
