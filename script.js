const audioElement = document.querySelector("audio");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const playButton = document.getElementById("play-button");
let isPlaying = false;

function playSong() {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute("title", "Pause");
  audioElement.play();
}

function pauseSong() {
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "Play");
  audioElement.pause();
}

// Event listeners
playButton.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});
