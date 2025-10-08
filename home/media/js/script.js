// import * as Tone from "tone";

const playButton = document.querySelector("#play-toggle");
const player = new Tone.Player({
    url: "https://tonejs.github.io/audio/loop/FWDL.mp3",
    loop: true,
    loopStart: 0.5,
    loopEnd: 0.7,
}).toDestination();

let isPlaying = false;

playButton.addEventListener("click", () => {
    if (isPlaying) {
        player.stop();
        playButton.textContent = "Play";
    } else {
        player.start();
        playButton.textContent = "Stop";
    }
    isPlaying = !isPlaying;
});




// const player = new Tone.Player({
//     url: "https://tonejs.github.io/audio/loop/FWDL.mp3",
//     loop: true,
//     loopStart: 0.5,
//     loopEnd: 0.7,
// }).toDestination();

// // bind the interface
// document
//     .querySelector("tone-play-toggle")
//     .addEventListener("start", () => player.start());
// document
//     .querySelector("tone-play-toggle")
//     .addEventListener("stop", () => player.stop());