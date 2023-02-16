class AudioPlayer {
    constructor(audioId, playPauseId, voltInicioId, avanSegsId, voltSegsId, timeDecorridoId, timeTotalId, timeProgressId) {
        this.audio = document.getElementById(audioId);
        this.btnPlayPause = document.getElementById(playPauseId);
        this.btnVoltInicio = document.getElementById(voltInicioId);
        this.btnAvanSegs = document.getElementById(avanSegsId);
        this.btnVoltSegs = document.getElementById(voltSegsId);
        this.timeDecorrido = document.getElementById(timeDecorridoId);
        this.timeTotal = document.getElementById(timeTotalId);
        this.timeThumb = document.createElement("span");
        this.timeProgress = document.getElementById(timeProgressId);
        this.setup();
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        this.timeProgress.style.setProperty("--progress", progress + "%");
        this.timeThumb.style.left = progress + "%";
        this.timeDecorrido.textContent = this.formatTime(this.audio.currentTime);
    }

    setTotalTime() {
        if (isFinite(this.audio.duration)) {
            this.timeTotal.textContent = this.formatTime(this.audio.duration);
        }
    }

    setup() {
        this.timeThumb.id = "timeThumb";
        this.timeProgress.appendChild(this.timeThumb);
        this.audio.addEventListener("loadedmetadata", () => {
            this.setTotalTime();
        });
        this.audio.addEventListener("timeupdate", () => {
            this.updateProgress();
        });
        this.audio.addEventListener("ended", () => {
            this.btnPlayPause.textContent = "Play";
        });
        this.btnPlayPause.addEventListener("click", () => {
            if (this.audio.paused) {
                this.audio.play();
                this.btnPlayPause.textContent = "Pause";
            } else {
                this.audio.pause();
                this.btnPlayPause.textContent = "Play";
            }
        });
        this.btnVoltInicio.addEventListener("click", () => {
            this.audio.currentTime = 0;
            if (!this.audio.paused) {
                this.audio.play();
            }
        });
        this.btnAvanSegs.addEventListener("click", () => {
            this.audio.currentTime += 10; // avança 10 segundos
        });
        this.btnVoltSegs.addEventListener("click", () => {
            this.audio.currentTime -= 10; // retrocede 10 segundos
        });
    }
}

const player = new AudioPlayer("audio", "play-pause-button", "restart-button", "btnAvanSegs", "btnVoltSegs", "timeDecorrido", "timeTotal", "timeProgress");
