
/*==================== ELEMENT VARIABLES =========================*/

let hearts = 3;
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

const airBombSprite = document.querySelector("#AirBomb_sprite")

const airBombContainer = document.querySelector("#AirBomb_container")

const timer = document.querySelector("#blackBar");
const heartImage = document.querySelector("#life_board");

const restart = document.querySelector("#restart");



/*==================== GAME INITIATE & RESET =========================*/

function startGame() {
  baloon1Container.classList.add("FlyUp");
  baloon2Container.classList.add("FlyUp")
  baloon3Container.classList.add("FlyUp")
  baloon4Container.classList.add("FlyUp");
  airBaloon1Container.classList.add("FlyUp");
  airBaloon2Container.classList.add("FlyUp");
  airBaloon3Container.classList.add("FlyUp");
  airBaloon4Container.classList.add("FlyUp");
  airBombContainer.classList.add("FlyUp");
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

  hearts = 3;
  gameStatus();

  score = 0;
  document.querySelector("#score_counter").innerHTML = `${score}/20`;
}


/*==================== CLICK/MOUSEDOWN EVENTS =========================*/

baloon1Sprite.addEventListener("mousedown", () => { pop(baloon1Container, baloon1Sprite) });
baloon2Sprite.addEventListener("mousedown", () => { pop(baloon2Container, baloon2Sprite) });
baloon3Sprite.addEventListener("mousedown", () => { pop(baloon3Container, baloon3Sprite) });
baloon4Sprite.addEventListener("mousedown", () => { pop(baloon4Container, baloon4Sprite) });
  
airBaloon1Sprite.addEventListener("mousedown", airOutDR);
airBaloon2Sprite.addEventListener("mousedown", airOutDL);
airBaloon3Sprite.addEventListener("mousedown", fartLeft);
airBaloon4Sprite.addEventListener("mousedown", fartRight);

airBombSprite.addEventListener("mousedown", boom);


restart.addEventListener("mousedown", resetGame);


/*==================== ANIMATIONED EVENTS =========================*/

timer.addEventListener("animationend", timerEnd);
airBombSprite.addEventListener("animationend", loseScreen);

baloon1Sprite.addEventListener("animationend", () => { respawn(baloon1Container, baloon1Sprite) })
baloon2Sprite.addEventListener("animationend", () => { respawn(baloon2Container, baloon2Sprite) })
baloon3Sprite.addEventListener("animationend", () => { respawn(baloon3Container, baloon3Sprite) })
baloon4Sprite.addEventListener("animationend", () => { respawn(baloon4Container, baloon4Sprite) })

airBaloon1Sprite.addEventListener("animationend", () => { respawn(airBaloon1Container, airBaloon1Sprite)})
airBaloon2Sprite.addEventListener("animationend", () => { respawn(airBaloon2Container, airBaloon2Sprite) })
airBaloon3Sprite.addEventListener("animationend", () => { respawn(airBaloon3Container, airBaloon3Sprite)})
airBaloon4Sprite.addEventListener("animationend", () => { respawn(airBaloon4Container, airBaloon4Sprite)})



/*==================== RESPAWNER & RESETTER =========================*/


function respawn(container, sprite) {
  container.className = "";
  sprite.className = "";

  void container.offsetWidth;

  container.classList.add("FlyUp");
}

function resetGameElements() {
  respawn(baloon1Container, baloon1Sprite);
  respawn(baloon2Container, baloon2Sprite);
  respawn(baloon3Container, baloon3Sprite);
  respawn(baloon4Container, baloon4Sprite);

  respawn(airBaloon1Container, airBaloon1Sprite);
  respawn(airBaloon2Container, airBaloon2Sprite);
  respawn(airBaloon3Container, airBaloon3Sprite);
  respawn(airBaloon4Container, airBaloon4Sprite);

  respawn(airBombContainer, airBombSprite);
}

function timerReset() {
  timer.className = "";

  void timer.offsetWidth;

  timer.classList.add("Timer");
}

function otherReset() {
 /*tilføj evt hjerter*/
  document.querySelector("#life_board").className = "";
  document.querySelector("#time_board").className = "";
  document.querySelector("#score_board").className = "";
  document.querySelector("#score_counter").className = "";
  document.querySelector("#game_background").className = "";
  document.querySelector("#restart").className = "";
}


/*==================== CLICK FUNCTIONS =========================*/


function pop(container, sprite) {
  container.classList.add("paused");
  sprite.classList.add("Pop");
  scoreStatus();
}

function airOutDR() {
  airBaloon1Container.classList.add("paused");
  airBaloon1Sprite.classList.add("AirOut_DownRight");
  
  hearts--;

  gameStatus();
}

function airOutDL() {
  airBaloon2Container.classList.add("paused");
  airBaloon2Sprite.classList.add("AirOut_DownLeft");

  hearts--;

  gameStatus();
}

function fartLeft() {
  airBaloon3Container.classList.add("paused");
  airBaloon3Sprite.classList.add("FartLeft");

  hearts--;

  gameStatus();
}

function fartRight() {
  airBaloon4Container.classList.add("paused");
  airBaloon4Sprite.classList.add("FartRight");

  hearts--;

  gameStatus();
}

function boom() {
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

  hearts = -3;

  gameStatus();
}


/*==================== GAME STATUS =========================*/

function timerEnd() {
  if (score >= 20  && hearts > 0) {
    winScreen();
  } else {
    loseScreen();
  }
}

function scoreStatus() {
  score++
  document.querySelector("#score_counter").innerHTML = `${score}/20`
}

function gameStatus() {


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
    loseScreen();
  }
}

/*==================== START SCREEN =========================*/

document.querySelector("#start_button").addEventListener("click", function () {
  console.log("BING!");
  document.querySelector("#start").classList.add("hidden");
  resetGame();
  startGame();
})


/*==================== WIN SCREEN =========================*/

function winScreen() {
  levelComplete.classList.remove("hidden");
}

document.querySelector("#Menu_Button").addEventListener("click", function () {
  document.querySelector("#start").classList.remove("hidden");
  levelComplete.classList.add("hidden");
});

document.querySelector("#Next_Button").addEventListener("click", function () {
  resetGame();
  levelComplete.classList.add("hidden");
})


/*==================== LOSE SCREEN =========================*/

function loseScreen() {
  gameOver.classList.remove("hidden");
}

document.querySelector("#Menu_Button2").addEventListener("click", function () {
  document.querySelector("#start").classList.remove("hidden");
  gameOver.classList.add("hidden");
});

document.querySelector("#Retry_Button").addEventListener("click", function () {
  resetGame();
  gameOver.classList.add("hidden");
});

