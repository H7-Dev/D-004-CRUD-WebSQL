const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause-button');

playPauseButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = "Pause";
  } else {
    audio.pause();
    playPauseButton.innerHTML = "Play";
  }
});
