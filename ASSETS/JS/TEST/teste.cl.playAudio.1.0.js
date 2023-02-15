const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');
const restartButton = document.getElementById('restart-button');

playPauseButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = "Pause";
  } else {
    audio.pause();
    playPauseButton.innerHTML = "Play";
  }
});

restartButton.addEventListener('click', function() {
  audio.currentTime = 0;
  audio.pause();
  playPauseButton.innerHTML = "Play";
});
