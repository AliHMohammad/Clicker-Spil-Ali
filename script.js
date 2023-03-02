"use strict";

window.addEventListener("load", initialize);


/*==================== ELEMENT VARIABLES =========================*/

let hearts;
let airbaloonsShot;
let score;
let explosion;

let levelComplete;
let gameOver;

let baloon1Sprite;
let baloon2Sprite;
let baloon3Sprite;
let baloon4Sprite;

let baloon1Container;
let baloon2Container;
let baloon3Container;
let baloon4Container;

let airBaloon1Sprite;
let airBaloon2Sprite;
let airBaloon3Sprite;
let airBaloon4Sprite;

let airBaloon1Container;
let airBaloon2Container;
let airBaloon3Container;
let airBaloon4Container;

let cloud1Container;
let cloud2Container;
let cloud3Container;
let cloud4Container;
let cloud5Container;
let cloud6Container;
let cloud7Container;
let cloud8Container;


let airBombSprite;

let airBombContainer;

let timer;
let heartImage;

let restart;


/*==================== ON WINDOW LOAD DECLARE VARIABLES =========================*/


function initialize() {

  document.querySelector("#Game_Title").classList.add("title_fly_up");
  document.querySelector("#girl").classList.add("girl_fly_up");

  levelComplete = document.querySelector("#level_complete");
  gameOver = document.querySelector("#game_over");

  baloon1Sprite = document.querySelector("#Baloon1_sprite");
  baloon2Sprite = document.querySelector("#Baloon2_sprite");
  baloon3Sprite = document.querySelector("#Baloon3_sprite");
  baloon4Sprite = document.querySelector("#Baloon4_sprite");

  baloon1Container = document.querySelector("#Baloon1_container");
  baloon2Container = document.querySelector("#Baloon2_container");
  baloon3Container = document.querySelector("#Baloon3_container");
  baloon4Container = document.querySelector("#Baloon4_container");

  airBaloon1Sprite = document.querySelector("#AirBaloon1_sprite");
  airBaloon2Sprite = document.querySelector("#AirBaloon2_sprite");
  airBaloon3Sprite = document.querySelector("#AirBaloon3_sprite");
  airBaloon4Sprite = document.querySelector("#AirBaloon4_sprite");

  airBaloon1Container = document.querySelector("#AirBaloon1_container");
  airBaloon2Container = document.querySelector("#AirBaloon2_container");
  airBaloon3Container = document.querySelector("#AirBaloon3_container");
  airBaloon4Container = document.querySelector("#AirBaloon4_container");

  cloud1Container = document.querySelector("#Cloud1_container");
  cloud2Container = document.querySelector("#Cloud2_container");
  cloud3Container = document.querySelector("#Cloud3_container");
  cloud4Container = document.querySelector("#Cloud4_container");
  cloud5Container = document.querySelector("#Cloud5_container");
  cloud6Container = document.querySelector("#Cloud6_container");
  cloud7Container = document.querySelector("#Cloud7_container");
  cloud8Container = document.querySelector("#Cloud8_container");

  airBombSprite = document.querySelector("#AirBomb_sprite");

  airBombContainer = document.querySelector("#AirBomb_container");

  timer = document.querySelector("#blackBar");
  heartImage = document.querySelector("#life_board");

  restart = document.querySelector("#restart");
}


/*==================== GAME INITIATE & STOP =========================*/

function startGame() {
  timer.classList.remove("hidden");
  resetGameElements();
  timerReset();
  otherReset();
  addEventListenerAnimationendFunction();
  addEventListenerSoundFunction();

  airbaloonsShot = 0;
  explosion = false;

  hearts = 3;
  heartStatus();

  score = 0;
  document.querySelector("#score_counter").textContent = `${score}/20`;

  startGameSound();
}

function stopGame() {

  baloon1Container.className = "hidden";
  baloon2Container.className = "hidden";
  baloon3Container.className = "hidden";
  baloon4Container.className = "hidden";

  airBaloon1Container.className = "hidden";
  airBaloon2Container.className = "hidden";
  airBaloon3Container.className = "hidden";
  airBaloon4Container.className = "hidden";

  airBombContainer.className = "hidden";
  cloud1Container.className = "hidden";
  cloud2Container.className = "hidden";
  cloud3Container.className = "hidden";
  cloud4Container.className = "hidden";
  cloud5Container.className = "hidden";
  cloud6Container.className = "hidden";
  cloud7Container.className = "hidden";
  cloud8Container.className = "hidden";

}

//======================= GAME ELEMENTS SOUNDEFFECTS ===============================

function addEventListenerSoundFunction() {

  airBombContainer.addEventListener("mousedown", () => playAudio(explode));
  baloon1Container.addEventListener("mousedown", () => playAudio(popBalloon));
  baloon2Container.addEventListener("mousedown", () => playAudio(popBalloon));
  baloon3Container.addEventListener("mousedown", () => playAudio(popBalloon));
  baloon4Container.addEventListener("mousedown", () => playAudio(popBalloon));
  airBaloon1Container.addEventListener("mousedown", () => playAudio(deflating));
  airBaloon2Container.addEventListener("mousedown", () => playAudio(deflating));
  airBaloon3Container.addEventListener("mousedown", () => playAudio(deflating));
  airBaloon4Container.addEventListener("mousedown", () => playAudio(deflating));

}

function startGameSound() {
  gameSound.currentTime = 0;
  gameSound.play()
}

function stopGameSound() {
  gameSound.pause();
}

function playAudio(sound) {
  console.log(sound);
  
  
  sound.currentTime = 0;
  sound.play();

  switch (score) {
    case 20:
      document.querySelector("#twennyWan").play();
      break;
  }
 
}

/*==================== ANIMATIONEND EVENTS =========================*/

function addEventListenerAnimationendFunction() {

  timer.addEventListener("animationend", timerEnd);
  airBombSprite.addEventListener("animationend", bombExploded);

  baloon1Sprite.addEventListener("animationend", () => {
    respawn(baloon1Container, pop, baloon1Container, baloon1Sprite);
  });
  baloon2Sprite.addEventListener("animationend", () => {
    respawn(baloon2Container, pop, baloon2Container, baloon2Sprite);
  });
  baloon3Sprite.addEventListener("animationend", () => {
    respawn(baloon3Container, pop, baloon3Container, baloon3Sprite);
  });
  baloon4Sprite.addEventListener("animationend", () => {
    respawn(baloon4Container, pop, baloon4Container, baloon4Sprite);
  });

  airBaloon1Sprite.addEventListener("animationend", () => {
    respawn(airBaloon1Container, popAirBalloon, airBaloon1Container, airBaloon1Sprite);
  });
  airBaloon2Sprite.addEventListener("animationend", () => {
    respawn(airBaloon2Container, popAirBalloon, airBaloon2Container, airBaloon2Sprite);
  });
  airBaloon3Sprite.addEventListener("animationend", () => {
    respawn(airBaloon3Container, popAirBalloon, airBaloon3Container, airBaloon3Sprite);
  });
  airBaloon4Sprite.addEventListener("animationend", () => {
    respawn(airBaloon4Container, popAirBalloon, airBaloon4Container, airBaloon4Sprite);
  });

  baloon1Container.addEventListener("animationiteration", respawnBalloon);
  baloon2Container.addEventListener("animationiteration", respawnBalloon);
  baloon3Container.addEventListener("animationiteration", respawnBalloon);
  baloon4Container.addEventListener("animationiteration", respawnBalloon);

  airBaloon1Container.addEventListener("animationiteration", respawnAirBalloon);
  airBaloon2Container.addEventListener("animationiteration", respawnAirBalloon);
  airBaloon3Container.addEventListener("animationiteration", respawnAirBalloon);
  airBaloon4Container.addEventListener("animationiteration", respawnAirBalloon);
  
}

function respawnBalloon() {
  respawn(this, pop, this, this.querySelector("img"));
}

function respawnAirBalloon() {
  respawn(this, popAirBalloon, this, this.querySelector("img"));
}


/*==================== RESPAWNER & RESETTER =========================*/

function resetGameElements() {
  respawn(baloon1Container, pop, baloon1Container, baloon1Sprite);
  respawn(baloon2Container, pop, baloon2Container, baloon2Sprite);
  respawn(baloon3Container, pop, baloon3Container, baloon3Sprite);
  respawn(baloon4Container, pop, baloon4Container, baloon4Sprite);

  respawn(airBaloon1Container, popAirBalloon, airBaloon1Container, airBaloon1Sprite);
  respawn(airBaloon2Container, popAirBalloon, airBaloon2Container, airBaloon2Sprite);
  respawn(airBaloon3Container, popAirBalloon, airBaloon3Container, airBaloon3Sprite);
  respawn(airBaloon4Container, popAirBalloon, airBaloon4Container, airBaloon4Sprite);

  respawn(airBombContainer, boom, airBombContainer, airBombSprite);

  respawnCloudsRight(cloud1Container)
  respawnCloudsRight(cloud2Container);
  respawnCloudsRight(cloud3Container);
  respawnCloudsRight(cloud4Container);

  respawnCloudsLeft(cloud5Container)
  respawnCloudsLeft(cloud6Container);
  respawnCloudsLeft(cloud7Container);
  respawnCloudsLeft(cloud8Container);

}

function respawn(element, animation, container, sprite) {
  addEventListenerMousedownFunction(element, animation);
  addEventListenerAnimationIterationNewPosition(element);
  container.className = "";
  sprite.className = "";

  void container.offsetWidth;

  addPosition(element);
  addDelay(element);;
  container.classList.add("FlyUp");
}

function addPosition(element) {
  element.classList.remove(
    "position1",
    "position2",
    "position3",
    "position4",
    "position5",
    "position6",
    "position7",
    "position8",
    "position9"
  );
  let pos = Math.floor(Math.random() * 9 + 1);
  element.classList.add(`position${pos}`);
}

function addDelay(element) {
  let del = Math.floor(Math.random() * 5 + 1);
  element.classList.add(`delay${del}`);
}

function respawnCloudsRight(container) {
  container.className = "";

  void container.offsetWidth;

  container.classList.add("FlyRight");
  
}

function respawnCloudsLeft(container) {
  container.className = "";

  void container.offsetWidth;

  container.classList.add("FlyLeft");
  
}

function addEventListenerMousedownFunction(element, animation) {
  element.addEventListener("mousedown", animation);
}

function addEventListenerAnimationIterationNewPosition(element) {
  element.addEventListener("animationiteration", () => addPosition(element));
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

  restart.addEventListener("mousedown", startGame);
}

/*==================== CLICK FUNCTIONS =========================*/

function pop() {
  this.removeEventListener("mousedown", pop);
  this.classList.add("paused");
  this.querySelector("img").classList.add("Pop");
  scoreStatus();
}

function popAirBalloon() {
  let number = Math.floor(Math.random() * 4 + 1);
  this.removeEventListener("mousedown", popAirBalloon);
  this.classList.add("paused");
  this.querySelector("img").classList.add(`airballoonPop${number}`);

  hearts--;
  airbaloonsShot++;

  heartStatus();
}

function boom() {
  airBombContainer.removeEventListener("mousedown", boom);
  airBombContainer.classList.add("paused");
  airBombSprite.classList.add("Explosion");

  stopGameSound();

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
  if (score >= 20) {
    winScreen();
  } else {
    loseScreen();
  }
}

function bombExploded() {
  explosion = true;

  if (explosion) {
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
    document.querySelector("#milk").play();
  } else if (hearts <= 0) {
    heartImage.src = "./UI/HealthZero.png";
    heartImage.classList.add("pulse_0hearts");
    timer.classList.add("paused");
  }

  if (airbaloonsShot == 3) {
    loseScreen();
  }
}

/*==================== GAME SCREEN TRANSITIONS =========================*/

function transitionOut() {
  this.classList.add("hidden");
  this.classList.remove("transition_out", "transition_in");
  this.removeEventListener("animationend", transitionOut);
}

function transitionIn() {
  this.classList.remove("transition_out", "transition_in");
  this.removeEventListener("animationend", transitionIn);
}

/*==================== START SCREEN =========================*/

document.querySelector("#start_button").addEventListener("click", function () {
  console.log("START!");
  //document.querySelector("#start").classList.add("hidden");

  document.querySelector("#start").classList.add("transition_out");
  document.querySelector("#start").addEventListener("animationend", transitionOut)

  startGame();
});

document.querySelector("#help_button").addEventListener("click", showHelpScreen);
document.querySelector("#back_button").addEventListener("click", hideHelpScreen);

function showHelpScreen() {
  console.log("SHOW");
  document.querySelector("#scroll").classList.remove("hidden");
  document.querySelector("#text1").classList.remove("hidden");
  document.querySelector("#text2").classList.remove("hidden");
  document.querySelector("#text3").classList.remove("hidden");
  document.querySelector("#back_button").classList.remove("hidden");
  
}

function hideHelpScreen() {
  console.log("HIDE");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector("#text1").classList.add("hidden");
  document.querySelector("#text2").classList.add("hidden");
  document.querySelector("#text3").classList.add("hidden");
  document.querySelector("#back_button").classList.add("hidden");
}

/*==================== WIN SCREEN =========================*/

function winScreen() {
  console.log("YOU WIN!");
  stopGame();
  stopGameSound();
  levelComplete.classList.remove("hidden");

  levelComplete.classList.add("transition_in");
  levelComplete.addEventListener("animationend", transitionIn);

  document.querySelector("#win_score").textContent = `${score}/20`;


  playAudio(win_sound);
}

document.querySelector("#Menu_Button").addEventListener("click", function () {

  console.log("Back to menu");
  document.querySelector("#start").classList.remove("hidden");

  document.querySelector("#level_complete").classList.add("transition_out");
  document.querySelector("#level_complete").addEventListener("animationend", transitionOut)


  //levelComplete.classList.add("hidden");
  //main menu sound
});

document.querySelector("#Next_Button").addEventListener("click", function () {

  console.log("Play again");


  document.querySelector("#level_complete").classList.add("transition_out");
  document.querySelector("#level_complete").addEventListener("animationend", transitionOut)

  startGame();
  //startGameSound();
  //levelComplete.classList.add("hidden");
});

/*==================== LOSE SCREEN =========================*/

function loseScreen() {

  console.log("YOU LOSE!");
  stopGame();
  stopGameSound();
  gameOver.classList.remove("hidden");

  gameOver.classList.add("transition_in");
  gameOver.addEventListener("animationend", transitionIn)

  document.querySelector("#lose_score").textContent = `${score}/20`;


  playAudio(lose_sound);
}

document.querySelector("#Menu_Button2").addEventListener("click", function () {

  console.log("Back to menu");
  document.querySelector("#start").classList.remove("hidden");

  document.querySelector("#game_over").classList.add("transition_out");
  document.querySelector("#game_over").addEventListener("animationend", transitionOut)

  //gameOver.classList.add("hidden");
  //main menu sound
});

document.querySelector("#Retry_Button").addEventListener("click", function () {

  console.log("Play again");

  document.querySelector("#game_over").classList.add("transition_out");
  document.querySelector("#game_over").addEventListener("animationend", transitionOut)


  startGame();
  //startGameSound();
  //gameOver.classList.add("hidden");
});
