const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const audioElement = document.querySelector("audio");
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
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

// Event listeners
playButton.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});
previousButton.addEventListener("click", previousSong);
nextButton.addEventListener("click", nextSong);

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  audioElement.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// On load select the first song
loadSong(songs[songIndex]);
