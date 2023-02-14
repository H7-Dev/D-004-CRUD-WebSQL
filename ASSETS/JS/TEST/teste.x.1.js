// const recordButton = document.getElementById('btnIniStopRec');

// recordButton.addEventListener('click', () => {
//     recordButton.classList.toggle('gravando');
// });
const btnIniStopRec = document.getElementById("btnIniStopRec");
const audio = document.getElementById("audio");
const timeSpan = document.getElementById("time");

let recording = false;
let chunks = [];
let startTime = 0;
let intervalId = null;

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);

    btnIniStopRec.addEventListener("click", () => {
      if (recording) {
        mediaRecorder.stop();
        clearInterval(intervalId);
        btnIniStopRec.classList.remove("gravando");
      } else {
        chunks = [];
        startTime = Date.now();
        mediaRecorder.start();
        intervalId = setInterval(() => {
          updateTime(Date.now() - startTime);
        }, 1000);
        btnIniStopRec.classList.add("gravando");
      }
      recording = !recording;
    });

    mediaRecorder.addEventListener("dataavailable", e => {
      chunks.push(e.data);
    });

    mediaRecorder.addEventListener("stop", () => {
      const blob = new Blob(chunks, { type: "audio/wav" });
      const url = URL.createObjectURL(blob);
      audio.src = url;
      audio.play();
      updateTime(0);
      clearInterval(intervalId);
      btnIniStopRec.classList.remove("gravando");
    });
  })
  .catch(console.error);

function updateTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const paddedSeconds = seconds.toString().padStart(2, "0");
  timeSpan.innerText = `${minutes}:${paddedSeconds}`;
}
