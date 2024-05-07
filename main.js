document
  .querySelector(".main-menu-btns")
  .addEventListener("click", function () {
    var sound = new Audio("audio/When-hover.mp3");
    sound.play();
  });
document.querySelector(".game-title").addEventListener("click", function () {
  var bgm = new Audio("audio/HorrorBgm.mp3");
  bgm.play();
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
