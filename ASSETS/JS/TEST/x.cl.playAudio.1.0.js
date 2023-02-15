const audio = document.getElementById("audio");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnVoltInicio = document.getElementById("btnVoltInicio");
const timeDecorrido = document.getElementById("timeDecorrido");
const timeTotal = document.getElementById("timeTotal");
const timeThumb = document.getElementById("timeThumb");
const timeProgress = document.getElementById("timeProgress");
const btnAvanSegs = document.getElementById("btnAvanSegs");
const btnVoltSegs = document.getElementById("btnVoltSegs");


function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  timeProgress.style.setProperty("--progress", progress + "%");
  timeThumb.style.left = progress + "%";
  timeDecorrido.textContent = formatTime(audio.currentTime);
}

function setTotalTime() {
  timeTotal.textContent = formatTime(audio.duration);
}

audio.addEventListener("loadedmetadata", setTotalTime);
audio.addEventListener("timeupdate", updateProgress);

btnPlayPause.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    btnPlayPause.textContent = "Pause";
  } else {
    audio.pause();
    btnPlayPause.textContent = "Play";
  }
});

btnVoltInicio.addEventListener("click", function() {
  audio.currentTime = 0;
  if (!audio.paused) {
    audio.play();
  }
});

btnAvanSegs.addEventListener("click", function() {
  audio.currentTime += 10; // avança 10 segundos
});

btnVoltSegs.addEventListener("click", function() {
  audio.currentTime -= 10; // retrocede 10 segundos
});
