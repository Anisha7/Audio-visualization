
// **** Setup ****

let playing = false;
// Analysing audio
let audio;
let audioContext;
let analyzer;
let frequencyArray;

// select song form
const selectSongForm = document.getElementById("select-song");
selectSongForm.onchange = updateSongIndex;

// files
let currSong = selectSongForm.value;

// play button
const playButton = document.getElementById("button-play");
playButton.addEventListener("click", e => {
  stopAudio();
  startAudio();
});

// stop button
const stopButton = document.getElementById("button-stop");
stopButton.addEventListener("click", e => {
  stopAudio();
});


// **** functions ****

// Update song index
function updateSongIndex() {
  currSong = selectSongForm.value;
  stopAudio();
}

// load audio
function startAudio() {
  audio = new Audio();
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  audio.src = currSong;

  // Analyzing audio
  analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  frequencyArray = new Uint8Array(analyser.frequencyBinCount);
  audio.play();
  render();
  render2();
  render3();
}

function stopAudio() {
  if (audioContext) {
    audioContext.close();
  }
}
