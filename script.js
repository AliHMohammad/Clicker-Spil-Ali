let hearts = 3;
const heartImage = document.getElementById("life_board");

document.querySelector("#Baloon1_sprite").addEventListener("click", pop1);
document.querySelector("#Baloon2_sprite").addEventListener("click", pop2);
document.querySelector("#Baloon3_sprite").addEventListener("click", pop3);

document.querySelector("#AirBaloon1_sprite").addEventListener("click", airOutDR);
document.querySelector("#AirBaloon2_sprite").addEventListener("click", airOutDL);
document.querySelector("#AirBaloon3_sprite").addEventListener("click", fartLeft);
document.querySelector("#AirBaloon4_sprite").addEventListener("click", fartRight);

document.querySelector("#AirBomb_sprite").addEventListener("click", Boom);

function pop1() {
  const container = document.querySelector("#Baloon1_container");
  const sprite = document.querySelector("#Baloon1_sprite");
  container.classList.add("paused");
  sprite.classList.add("Pop");
}

function pop2() {
  const container = document.querySelector("#Baloon2_container");
  const sprite = document.querySelector("#Baloon2_sprite");
  container.classList.add("paused");
  sprite.classList.add("Pop");
}

function pop3() {
  const container = document.querySelector("#Baloon3_container");
  const sprite = document.querySelector("#Baloon3_sprite");
  container.classList.add("paused");
  sprite.classList.add("Pop");
}


function airOutDR() {
    const container = document.querySelector("#AirBaloon1_container");
    const sprite = document.querySelector("#AirBaloon1_sprite");
    container.classList.add("paused");
    sprite.classList.add("AirOut_DownRight");

    hearts--;

    lose();
}

function airOutDL() {
    const container = document.querySelector("#AirBaloon2_container");
    const sprite = document.querySelector("#AirBaloon2_sprite");
    container.classList.add("paused");
    sprite.classList.add("AirOut_DownLeft");

    hearts--;

    lose();
}

function fartLeft() {
    const container = document.querySelector("#AirBaloon3_container");
    const sprite = document.querySelector("#AirBaloon3_sprite");
    container.classList.add("paused");
    sprite.classList.add("FartLeft");

    hearts--;

    lose();
}

function fartRight() {
    const container = document.querySelector("#AirBaloon4_container");
    const sprite = document.querySelector("#AirBaloon4_sprite");
    container.classList.add("paused");
    sprite.classList.add("FartRight");

    hearts--;

    lose();
}











function Boom() {
  const container = document.querySelector("#AirBomb_container");
  const sprite = document.querySelector("#AirBomb_sprite");

  container.classList.add("paused");
  sprite.classList.add("Explosion");

  document.querySelector("#life_board").classList.add("Shake");
  document.querySelector("#time_board").classList.add("Shake");
  document.querySelector("#score_board").classList.add("Shake");
  document.querySelector("#blackBar").classList.add("Shake");
  document.querySelector("#blackBar").classList.add("paused");
  document.querySelector("#score_counter").classList.add("Shake");
  document.querySelector("#game_background").classList.add("Shake");

  hearts = -3;

  lose();
}





function lose() {
  if (hearts == 2) {
    heartImage.src = "./UI/HealthTwo.png";
  } else if (hearts == 1) {
    heartImage.src = "./UI/HealthOne.png";
  } else if (hearts <= 0) {
    heartImage.src = "./UI/HealthZero.png";
  }
}
