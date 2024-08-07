const playButton = document?.querySelector("#play-button");
const thumbnail = document?.querySelector("#thumbnail");
const videoIframe = document?.querySelector("#video-iframe");
playButton?.addEventListener("click", () => {
    console.log("clicked")
  thumbnail.style.display = "none"; 
  playButton.style.display = "none"; // Hide the play button
  videoIframe.style.display = "block"; // Show the iframe
});