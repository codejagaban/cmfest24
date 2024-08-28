const playButton = document?.querySelector("#play-button");
const thumbnail = document?.querySelector("#thumbnail");
const videoIframe = document?.querySelector("#video-iframe");
playButton?.addEventListener("click", () => {
  thumbnail.style.display = "none"; 
  playButton.style.display = "none";
  videoIframe.style.display = "block";
});