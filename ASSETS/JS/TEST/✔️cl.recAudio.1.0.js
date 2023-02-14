class AudioRecorder {
    constructor(config) {
        this.btnIniStopRec = config.btnIniStopRec;
        this.audio = config.audio;
        this.timeSpan = config.timeSpan;
        this.totalTimeSpan = config.totalTimeSpan;
        this.sizeSpan = config.sizeSpan;
        this.recording = false;
        this.chunks = [];
        this.startTime = 0;
        this.intervalId = null;
        this.mediaStream = null;

        this.btnIniStopRec.addEventListener("click", () => this.toggleRecord());
    }
    toggleRecord() {
        if (this.recording) {
            this.stopRecording();
        } else {
            this.startRecording();
        }
        this.recording = !this.recording;
    }
    startRecording() {
        console.log('AudioRecorder | startRecording')
        navigator.mediaDevices.getUserMedia({
                audio: true
            })
            .then(stream => {
                this.mediaStream = stream;
                const mediaRecorder = new MediaRecorder(stream);

                this.chunks = [];
                this.startTime = Date.now();
                mediaRecorder.start();
                this.intervalId = setInterval(() => {
                    this.updateTime(Date.now() - this.startTime);
                }, 1000);
                this.btnIniStopRec.classList.add("gravando");

                mediaRecorder.addEventListener("dataavailable", e => {
                    this.chunks.push(e.data);
                });

                mediaRecorder.addEventListener("stop", () => {
                    const blob = new Blob(this.chunks, {
                        type: "audio/wav"
                    });
                    const url = URL.createObjectURL(blob);
                    this.audio.src = url;
                    this.audio.play();
                    this.updateTime(0);

                    // Calcular tempo total
                    const audioContext = new AudioContext();
                    const fileReader = new FileReader();
                    fileReader.readAsArrayBuffer(blob);
                    fileReader.onload = () => {
                        const arrayBuffer = fileReader.result;
                        audioContext.decodeAudioData(arrayBuffer, decodedData => {
                            const totalTime = decodedData.duration;
                            const totalMinutes = Math.floor(totalTime / 60);
                            const totalSeconds = Math.floor(totalTime % 60);
                            this.totalTimeSpan.innerText = `${totalMinutes}:${totalSeconds.toString().padStart(2, "0")}`;
                        });
                    };

                    // Calcular tamanho do áudio
                    const sizeMb = (blob.size / (1024 * 1024)).toFixed(2);
                    this.sizeSpan.innerText = `${sizeMb} MB`;

                    clearInterval(this.intervalId);
                    this.btnIniStopRec.classList.remove("gravando");
                    this.mediaStream.getTracks().forEach(track => track.stop());
                });
            })
            .catch(console.error);
    }

    stopRecording() {
        const mediaRecorder = this.mediaStream.getAudioTracks()[0].stop();
        clearInterval(this.intervalId);
        this.btnIniStopRec.classList.remove("gravando");
        this.mediaStream.getTracks().forEach(track => track.stop());
    }

    updateTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const paddedSeconds = seconds.toString().padStart(2, "0");
        this.timeSpan.innerText = `${minutes}:${paddedSeconds}`;
    }
}

const recorder = new AudioRecorder({
    btnIniStopRec: document.getElementById("btnIniStopRec"),
    audio: document.getElementById("audio"),
    timeSpan: document.getElementById("time"),
    totalTimeSpan: document.getElementById("totalTime"),
    sizeSpan: document.getElementById("sizeAudio")
})
