document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const audioElement = document.getElementById("audioElement");

    playButton.addEventListener("click", function () {
        audioElement.paused
        audioElement.play();
        playButton.textContent = "Play Sound";
        
    });
});
