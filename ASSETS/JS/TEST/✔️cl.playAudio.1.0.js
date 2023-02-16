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
        // console.log('=> ⚡-formatTime<=')
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    updateProgress() {
        // console.log('=> ⚡-updateProgress<=')
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        this.timeProgress.style.setProperty("--progress", progress + "%");
        this.timeThumb.style.left = progress + "%";
        this.timeDecorrido.textContent = this.formatTime(this.audio.currentTime);
    }

    setTotalTime() {
        console.log('=> ⚡-setTotalTime<=')
        this.timeTotal.textContent = this.formatTime(this.audio.duration);

    }

    setup() {
        this.timeThumb.id = "timeThumb";
        this.timeProgress.appendChild(this.timeThumb);
        this.audio.addEventListener("loadedmetadata", this.setTotalTime.bind(this));
        this.audio.addEventListener("timeupdate", this.updateProgress.bind(this));
        this.btnPlayPause.addEventListener("click", () => {
            console.log('=> ⚡-btnPlayPause<=')

            if (this.audio.paused) {
                this.audio.play();
                this.btnPlayPause.textContent = "Pause";
            } else {
                this.audio.pause();
                this.btnPlayPause.textContent = "Play";
            }
        });
        this.btnVoltInicio.addEventListener("click", () => {
            console.log('=> ⚡-btnVoltInicio<=')
            this.audio.currentTime = 0;
            if (!this.audio.paused) {
                this.audio.play();
            }
        });
        this.btnAvanSegs.addEventListener("click", () => {
            console.log('=> ⚡-btnVoltInicio<=')
            this.audio.currentTime += 10; // avança 10 segundos
        });
        this.btnVoltSegs.addEventListener("click", () => {
            console.log('=> ⚡-btnVoltSegs<=')
            this.audio.currentTime -= 10; // retrocede 10 segundos
        });
    }
}
const player = new AudioPlayer("audio", "play-pause-button", "restart-button", "btnAvanSegs", "btnVoltSegs", "timeDecorrido", "timeTotal", "timeProgress");