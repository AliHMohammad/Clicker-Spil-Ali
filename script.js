
/*==================== ELEMENT VARIABLES =========================*/

let hearts = 3;
let score = 0;

const baloon1Sprite = document.querySelector("#Baloon1_sprite");
const baloon2Sprite = document.querySelector("#Baloon2_sprite");
const baloon3Sprite = document.querySelector("#Baloon3_sprite");

const baloon1Container = document.querySelector("#Baloon1_container");
const baloon2Container = document.querySelector("#Baloon2_container");
const baloon3Container = document.querySelector("#Baloon3_container");

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



/*==================== GAME INITIATE =========================*/

function startGame() {
  baloon1Container.classList.add("FlyUp");
  baloon2Container.classList.add("FlyUp")
  baloon3Container.classList.add("FlyUp")
  airBaloon1Container.classList.add("FlyUp");
  airBaloon2Container.classList.add("FlyUp");
  airBaloon3Container.classList.add("FlyUp");
  airBaloon4Container.classList.add("FlyUp");
  airBombContainer.classList.add("FlyUp");

  timer.classList.add("Timer")
  heartImage.classList.add("pulse")


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


/*==================== EVENTS =========================*/


baloon1Sprite.addEventListener("click", pop1);
baloon2Sprite.addEventListener("click", pop2);
baloon3Sprite.addEventListener("click", pop3);

airBaloon1Sprite.addEventListener("click", airOutDR);
airBaloon2Sprite.addEventListener("click", airOutDL);
airBaloon3Sprite.addEventListener("click", fartLeft);
airBaloon4Sprite.addEventListener("click", fartRight);

airBombSprite.addEventListener("click", Boom);

timer.addEventListener("animationed", timerEnd);


restart.addEventListener("click", startGame);


/*==================== CLICK FUNCTIONS =========================*/

function pop1() {
  baloon1Container.classList.add("paused");
  baloon1Sprite.classList.add("Pop");
  
  scoreStatus();
}

function pop2() {
  baloon2Container.classList.add("paused");
  baloon2Sprite.classList.add("Pop");
  

  scoreStatus();
}

function pop3() {
  baloon3Container.classList.add("paused");
  baloon3Sprite.classList.add("Pop");

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

function Boom() {
  airBombContainer.classList.add("paused");
  airBombSprite.classList.add("Explosion");

  document.querySelector("#life_board").classList.add("Shake");
  document.querySelector("#time_board").classList.add("Shake");
  document.querySelector("#score_board").classList.add("Shake");
  timer.classList.add("Shake");
  document.querySelector("#score_counter").classList.add("Shake");
  document.querySelector("#game_background").classList.add("Shake");

  hearts = -3;

  gameStatus();
}



/*==================== GAME STATUS =========================*/

function timerEnd() {
  if (score >= 20) {
    //Game win shows up
  } else {
    //Game over shows up
  }
}

function scoreStatus() {
  score++
  document.querySelector("#score_counter").innerHTML = score
}

function gameStatus() {


  if (hearts == 3) {
    heartImage.src = "./UI/HealthThree.png";
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
    //Game over shows up.
  }
}



/*==================== START SCREEN =========================*/

document.querySelector("#start_button").addEventListener("click", function () {
  document.querySelector("#start").classList.add("hidden");

  startGame();
})








