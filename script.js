let hearts = 3;


document.querySelector("#Baloon1_sprite").addEventListener("click", pop1);
document.querySelector("#Baloon2_sprite").addEventListener("click", pop2);
document.querySelector("#Baloon3_sprite").addEventListener("click", pop3);


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
