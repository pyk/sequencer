// Add event listener
window.addEventListener("DOMContentLoaded", function() {
    main();
}, false);

// Our main function
function main() {
    // Get the input
    var inputFile = document.getElementById("input-audio");
    // Register the event listener
    inputFile.addEventListener("change", handleAudio);
}

function handleAudio() {
    console.log("DEBUG: handleAudio() executed")
    var audioFile = this.files[0];
    console.log('Audio name: ' + audioFile.name)
    var audioPlayer = document.getElementById("audio-player");
    var audioSrcURL = window.URL.createObjectURL(audioFile);
    console.log('Audio URL: ' + audioSrcURL)
    audioPlayer.src = audioSrcURL;
    console.log("DEBUG: handleAudio() exit")
}
