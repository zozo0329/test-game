document
  .querySelector(".main-menu-btns")
  .addEventListener("click", function () {
    var sound = new Audio("audio/When-hover.mp3");
    sound.play();
  });

// INSTRUCTION

let instruction = document.getElementById("ins");
function insAp() {
  instruction.style.display = "block";
}
document
  .querySelector(".Instruction button")
  .addEventListener("click", function () {
    instruction.style.display = "none";
  });
document
  .querySelector(".Instruction button")
  .addEventListener("click", function () {
    let insClick = new Audio("audio/When-hover.mp3");
    insClick.play();
  });

// DEV MESSAGE
let devMes = document.getElementById("devMess");
function devAp() {
  devMes.style.display = "block";
}
document
  .querySelector(".dev-message button")
  .addEventListener("click", function () {
    devMes.style.display = "none";
  });
document
  .querySelector(".dev-message button")
  .addEventListener("click", function () {
    let devSound = new Audio("audio/When-hover.mp3");
    devSound.play();
  });

// MUSIC ICON
let musicOff = document.getElementById("musicOff");
let musicOn = document.getElementById("musicOn");
document.getElementById("musicOff").addEventListener("click", function () {
  musicOff.style.display = "none";
  musicOn.style.display = "block";
});
document.getElementById("musicOn").addEventListener("click", function () {
  musicOff.style.display = "block";
  musicOn.style.display = "none";
});

// FOR BACKGROUND MUSIC
let bgm = new Audio("audio/HorrorBgm.mp3");
document.querySelector("#musicOff").addEventListener("click", function () {
  bgm.play();
  bgm.loop();
});

document.querySelector("#musicOn").addEventListener("click", function () {
  bgm.pause();
});
