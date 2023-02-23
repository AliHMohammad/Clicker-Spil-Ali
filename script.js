"use strict";

/*==================== ELEMENT VARIABLES =========================*/

let hearts = 3;
let airbaloonsShot = 0;
let score = 0;

const levelComplete = document.querySelector("#Level_Complete");
const gameOver = document.querySelector("#game_over");

const baloon1Sprite = document.querySelector("#Baloon1_sprite");
const baloon2Sprite = document.querySelector("#Baloon2_sprite");
const baloon3Sprite = document.querySelector("#Baloon3_sprite");
const baloon4Sprite = document.querySelector("#Baloon4_sprite");

const baloon1Container = document.querySelector("#Baloon1_container");
const baloon2Container = document.querySelector("#Baloon2_container");
const baloon3Container = document.querySelector("#Baloon3_container");
const baloon4Container = document.querySelector("#Baloon4_container");

const airBaloon1Sprite = document.querySelector("#AirBaloon1_sprite");
const airBaloon2Sprite = document.querySelector("#AirBaloon2_sprite");
const airBaloon3Sprite = document.querySelector("#AirBaloon3_sprite");
const airBaloon4Sprite = document.querySelector("#AirBaloon4_sprite");

const airBaloon1Container = document.querySelector("#AirBaloon1_container");
const airBaloon2Container = document.querySelector("#AirBaloon2_container");
const airBaloon3Container = document.querySelector("#AirBaloon3_container");
const airBaloon4Container = document.querySelector("#AirBaloon4_container");

const airBombSprite = document.querySelector("#AirBomb_sprite");

const airBombContainer = document.querySelector("#AirBomb_container");

const timer = document.querySelector("#blackBar");
const heartImage = document.querySelector("#life_board");

const restart = document.querySelector("#restart");

/*==================== GAME INITIATE & RESET =========================*/

function startGame() {
  // baloon1Container.classList.add("FlyUp");
  // baloon2Container.classList.add("FlyUp");
  // baloon3Container.classList.add("FlyUp");
  // baloon4Container.classList.add("FlyUp");
  // airBaloon1Container.classList.add("FlyUp");
  // airBaloon2Container.classList.add("FlyUp");
  // airBaloon3Container.classList.add("FlyUp");
  // airBaloon4Container.classList.add("FlyUp");
  // airBombContainer.classList.add("FlyUp");
  timer.classList.remove("hidden");
  timer.classList.add("Timer");
  heartImage.classList.add("pulse");

  /*Clouds*/
  document.querySelector("#Cloud1_container").classList.add("FlyRight");
  document.querySelector("#Cloud2_container").classList.add("FlyRight");
  document.querySelector("#Cloud3_container").classList.add("FlyRight");
  document.querySelector("#Cloud4_container").classList.add("FlyRight");
  document.querySelector("#Cloud5_container").classList.add("FlyLeft");
  document.querySelector("#Cloud6_container").classList.add("FlyLeft");
  document.querySelector("#Cloud7_container").classList.add("FlyLeft");
  document.querySelector("#Cloud8_container").classList.add("FlyLeft");
}

function resetGame() {
  resetGameElements();
  timerReset();
  otherReset();
  addEventListenerAnimationendFunction();
  addEventListenerSoundFunction();

  airbaloonsShot = 0;
  hearts = 3;
  heartStatus();

  score = 0;
  document.querySelector("#score_counter").textContent = `${score}/20`;
}

/*==================== CLICK/MOUSEDOWN EVENTS =========================*/

// function addEventListenerToElements() {
//   console.log("Im locked and loaded!");

//   baloon1Container.addEventListener("mousedown", pop1);
//   baloon2Container.addEventListener("mousedown", pop2);
//   baloon3Container.addEventListener("mousedown", pop3);
//   baloon4Container.addEventListener("mousedown", pop4);

//   airBaloon1Container.addEventListener("mousedown", airOutDR);
//   airBaloon2Container.addEventListener("mousedown", airOutDL);
//   airBaloon3Container.addEventListener("mousedown", fartLeft);
//   airBaloon4Container.addEventListener("mousedown", fartRight);

//   airBombContainer.addEventListener("mousedown", boom);

//   restart.addEventListener("mousedown", resetGame);

// }



//======================= GAME ELEMENTS SOUNDEFFECTS ===============================

function addEventListenerSoundFunction() {

  airBombContainer.addEventListener("mousedown", () => playAudio(explosion));
  baloon1Container.addEventListener("mousedown", () => playAudio(pop));
  baloon2Container.addEventListener("mousedown", () => playAudio(pop));
  baloon3Container.addEventListener("mousedown", () => playAudio(pop));
  baloon4Container.addEventListener("mousedown", () => playAudio(pop));
  airBaloon1Container.addEventListener("mousedown", () => playAudio(deflating));
  airBaloon2Container.addEventListener("mousedown", () => playAudio(deflating));
  airBaloon3Container.addEventListener("mousedown", () => playAudio(deflating));
  airBaloon4Container.addEventListener("mousedown", () => playAudio(deflating));

}

function startGameSound() {
  wind.play()
}

function stopGameSound() {
  wind.pause();
  wind.currentTime = 0;
}

function playAudio(sound) {
  console.log(sound);
  sound.play();
}

/*==================== ANIMATIONEND EVENTS =========================*/

function addEventListenerAnimationendFunction() {

  timer.addEventListener("animationend", timerEnd);
  airBombSprite.addEventListener("animationend", loseScreen);

  baloon1Sprite.addEventListener("animationend", () => {
    respawn(baloon1Container, pop1, baloon1Container, baloon1Sprite);
  });
  baloon2Sprite.addEventListener("animationend", () => {
    respawn(baloon2Container, pop2, baloon2Container, baloon2Sprite);
  });
  baloon3Sprite.addEventListener("animationend", () => {
    respawn(baloon3Container, pop3, baloon3Container, baloon3Sprite);
  });
  baloon4Sprite.addEventListener("animationend", () => {
    respawn(baloon4Container, pop4, baloon4Container, baloon4Sprite);
  });

  airBaloon1Sprite.addEventListener("animationend", () => {
    respawn(airBaloon1Container, airOutDR, airBaloon1Container, airBaloon1Sprite);
  });
  airBaloon2Sprite.addEventListener("animationend", () => {
    respawn(airBaloon2Container, airOutDL, airBaloon2Container, airBaloon2Sprite);
  });
  airBaloon3Sprite.addEventListener("animationend", () => {
    respawn(airBaloon3Container, fartLeft, airBaloon3Container, airBaloon3Sprite);
  });
  airBaloon4Sprite.addEventListener("animationend", () => {
    respawn(airBaloon4Container, fartRight, airBaloon4Container, airBaloon4Sprite);
  });

}


/*==================== RESPAWNER & RESETTER =========================*/

function resetGameElements() {
  respawn(baloon1Container, pop1, baloon1Container, baloon1Sprite);
  respawn(baloon2Container, pop2, baloon2Container, baloon2Sprite);
  respawn(baloon3Container, pop3, baloon3Container, baloon3Sprite);
  respawn(baloon4Container, pop4, baloon4Container, baloon4Sprite);

  respawn(airBaloon1Container, airOutDR, airBaloon1Container, airBaloon1Sprite);
  respawn(airBaloon2Container, airOutDL, airBaloon2Container, airBaloon2Sprite);
  respawn(airBaloon3Container, fartLeft, airBaloon3Container, airBaloon3Sprite);
  respawn(airBaloon4Container, fartRight, airBaloon4Container, airBaloon4Sprite);

  respawn(airBombContainer, boom, airBombContainer, airBombSprite);
}

function respawn(element, animation, container, sprite) {
  addEventListenerMousedownFunction(element, animation);
  container.className = "";
  sprite.className = "";

  void container.offsetWidth;

  container.classList.add("FlyUp");
}

function addEventListenerMousedownFunction(element, animation) {
  element.addEventListener("mousedown", animation);
}

function timerReset() {
  timer.className = "";

  void timer.offsetWidth;

  timer.classList.add("Timer");
}

function otherReset() {

  document.querySelector("#life_board").className = "";
  document.querySelector("#time_board").className = "";
  document.querySelector("#score_board").className = "";
  document.querySelector("#score_counter").className = "";
  document.querySelector("#game_background").className = "";
  document.querySelector("#restart").className = "";

  restart.addEventListener("mousedown", resetGame);
}

/*==================== CLICK FUNCTIONS =========================*/

function pop1() {
  baloon1Container.removeEventListener("mousedown", pop1);
  baloon1Container.classList.add("paused");
  baloon1Sprite.classList.add("Pop");
  scoreStatus();
}

function pop2() {
  baloon2Container.removeEventListener("mousedown", pop2);
  baloon2Container.classList.add("paused");
  baloon2Sprite.classList.add("Pop");
  scoreStatus();
}

function pop3() {
  baloon3Container.removeEventListener("mousedown", pop3);
  baloon3Container.classList.add("paused");
  baloon3Sprite.classList.add("Pop");
  scoreStatus();
}

function pop4() {
  baloon4Container.removeEventListener("mousedown", pop4);
  baloon4Container.classList.add("paused");
  baloon4Sprite.classList.add("Pop");
  scoreStatus();
}

function airOutDR() {
  airBaloon1Container.removeEventListener("mousedown", airOutDR);
  airBaloon1Container.classList.add("paused");
  airBaloon1Sprite.classList.add("AirOut_DownRight");

  hearts--;
  airbaloonsShot++;

  heartStatus();
}

function airOutDL() {
  airBaloon2Container.removeEventListener("mousedown", airOutDL);
  airBaloon2Container.classList.add("paused");
  airBaloon2Sprite.classList.add("AirOut_DownLeft");

  hearts--;
  airbaloonsShot++;

  heartStatus();
}

function fartLeft() {
  airBaloon3Container.removeEventListener("mousedown", fartLeft);
  airBaloon3Container.classList.add("paused");
  airBaloon3Sprite.classList.add("FartLeft");

  hearts--;
  airbaloonsShot++;

  heartStatus();
}

function fartRight() {
  airBaloon4Container.removeEventListener("mousedown", fartRight);
  airBaloon4Container.classList.add("paused");
  airBaloon4Sprite.classList.add("FartRight");

  hearts--;
  airbaloonsShot++;

  heartStatus();
}

function boom() {
  airBombContainer.removeEventListener("mousedown", boom);
  airBombContainer.classList.add("paused");
  airBombSprite.classList.add("Explosion");

  /*tilføj evt hjerter shake*/
  document.querySelector("#life_board").classList.add("Shake");
  document.querySelector("#time_board").classList.add("Shake");
  document.querySelector("#score_board").classList.add("Shake");
  timer.classList.add("Shake");
  document.querySelector("#score_counter").classList.add("Shake");
  document.querySelector("#game_background").classList.add("Shake");
  document.querySelector("#restart").classList.add("Shake");
  document.querySelector("#life_board").classList.add("Shake");

  hearts -= 3;

  heartStatus();
}

/*==================== GAME STATUS =========================*/

function timerEnd() {
  if (score >= 20 && hearts > 0) {
    winScreen();
  } else {
    loseScreen();
  }
}

function scoreStatus() {
  score++;
  document.querySelector("#score_counter").textContent = `${score}/20`;
}

function heartStatus() {
  if (hearts == 3) {
    heartImage.src = "./UI/HealthThree.png";
    heartImage.className = "";
    heartImage.classList.add("pulse");
  } else if (hearts == 2) {
    heartImage.src = "./UI/HealthTwo.png";
    heartImage.classList.add("pulse_2hearts");
  } else if (hearts == 1) {
    heartImage.src = "./UI/HealthOne.png";
    heartImage.classList.add("pulse_1hearts");
  } else if (hearts <= 0) {
    heartImage.src = "./UI/HealthZero.png";
    heartImage.classList.add("pulse_0hearts");
    timer.classList.add("paused");
  }

  if (airbaloonsShot == 3) {
    loseScreen();
  }
}

/*==================== START SCREEN =========================*/

document.querySelector("#start_button").addEventListener("click", function () {
  console.log("START!");
  document.querySelector("#start").classList.add("hidden");
  resetGame();
  startGame();
  startGameSound();
  //addEventListenerToElements();
});

document.querySelector("#help_button").addEventListener("click", showHelpScreen);
document.querySelector("#back_button").addEventListener("click", hideHelpScreen);

function showHelpScreen() {
  document.querySelector("#scroll").classList.remove("hidden");
  document.querySelector("#text1").classList.remove("hidden");
  document.querySelector("#text2").classList.remove("hidden");
  document.querySelector("#text3").classList.remove("hidden");
  document.querySelector("#back_button").classList.remove("hidden");
  
}

function hideHelpScreen() {
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector("#text1").classList.add("hidden");
  document.querySelector("#text2").classList.add("hidden");
  document.querySelector("#text3").classList.add("hidden");
  document.querySelector("#back_button").classList.add("hidden");
}

/*==================== WIN SCREEN =========================*/

function winScreen() {
  console.log("YOU WIN!");
  levelComplete.classList.remove("hidden");
  stopGameSound();
  playAudio(win_sound);
}

document.querySelector("#Menu_Button").addEventListener("click", function () {
  console.log("Back to menu");
  document.querySelector("#start").classList.remove("hidden");
  levelComplete.classList.add("hidden");
  //main menu sound
});

document.querySelector("#Next_Button").addEventListener("click", function () {
  console.log("Play again");
  resetGame();
  startGameSound();
  levelComplete.classList.add("hidden");
});

/*==================== LOSE SCREEN =========================*/

function loseScreen() {
  console.log("YOU LOSE!");
  gameOver.classList.remove("hidden");
  stopGameSound();
  playAudio(lose_sound);
}

document.querySelector("#Menu_Button2").addEventListener("click", function () {
  console.log("Back to menu");
  document.querySelector("#start").classList.remove("hidden");
  gameOver.classList.add("hidden");
  //main menu sound
});

document.querySelector("#Retry_Button").addEventListener("click", function () {
  console.log("Play again");
  resetGame();
  startGameSound();
  gameOver.classList.add("hidden");
});
