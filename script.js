const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const audioElement = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const playButton = document.getElementById("play-button");
let isPlaying = false;
let songIndex = 0;

const songs = [
  {
    name: "jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army (remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    displayName: "Front Row (remix)",
    artist: "Metric/Jacinto Design",
  },
];

function playSong() {
  isPlaying = true;
  playButton.classList.replace("fa-play", "fa-pause");
  playButton.setAttribute("title", "Pause");
  audioElement.play();
  console.log(songIndex);
}

function pauseSong() {
  isPlaying = false;
  playButton.classList.replace("fa-pause", "fa-play");
  playButton.setAttribute("title", "Play");
  audioElement.pause();
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songIndex);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songIndex);
  playSong();
}

function updateProgressBar(event) {
  if (isPlaying) {
    const { duration, currentTime } = event.srcElement;
    const progressPercentage = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  }
}

// Event listeners
playButton.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});
previousButton.addEventListener("click", previousSong);
nextButton.addEventListener("click", nextSong);
audioElement.addEventListener("timeupdate", updateProgressBar);

// Update DOM
function loadSong(songIndex) {
  let song = songs[songIndex];
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  audioElement.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// On load select the first song
loadSong(songIndex);
