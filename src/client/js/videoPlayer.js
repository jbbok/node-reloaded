const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline")

let volume = 0.5;
video.volume = volumeValue;

const handlePlayClick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtn.innerText = video.paused ? "Play" : "Pause";
};

const handleMute = () => {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
};

const handleVolumeChange = (event) => {
  const {
    target: {value},
  } = event;

  if(video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }

  volumeValue = value; 
  video.volume = value;
}

const farmatTime = (seconds) => {
  new Date (seconds * 1000).toISOString().substring(11,19);
}

const handleLoadedMetadata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.currentTime);
}

const handleTimeUpdate = () => {
  currentTime.innerText =Math.Floor(video.currentTime);
  console.log(video.currentTime);
}

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleVolumeChange)
video.addEventListener("loadedmetadata", handleLoadedMetadata);
video.addEventListener("timeUpdate", handleTimeUpdate);