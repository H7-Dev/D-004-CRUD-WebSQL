const startBtn = document.querySelector("#start-recording-btn");
const stopBtn = document.querySelector("#stop-recording-btn");
const playBtn = document.querySelector("#play-recording-btn");
const recordedAudio = document.querySelector("#recorded-audio");

let recorder;

startBtn.addEventListener("click", startRecording);
stopBtn.addEventListener("click", stopRecording);
playBtn.addEventListener("click", playRecording);

function startRecording() {
  startBtn.setAttribute("disabled", true);
  stopBtn.removeAttribute("disabled");

  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(stream => {
      recorder = new MediaRecorder(stream);
      recorder.start();

      const audioChunks = [];
      recorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });

      recorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        recordedAudio.src = URL.createObjectURL(audioBlob);
        recordedAudio.controls = true;
        playBtn.removeAttribute("disabled");
      });
    })
    .catch(console.error);
}

function stopRecording() {
  if (recorder) {
    recorder.stop();
  }
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", true);
}

function playRecording() {
  recordedAudio.play();
}
