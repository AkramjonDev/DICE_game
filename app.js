// const mainTitle = document.getElementById(`main-title`);
// const image1 = document.getElementById(`box-img1`);
// const image2 = document.getElementById(`box-img2`);
// const main = document.getElementById(`main`);

// const random1 = Math.trunc(Math.random() * 6) + 1;
// const random2 = Math.trunc(Math.random() * 6) + 1;

// image1.src = `./image-${random1}.png`;
// image2.src = `./image-${random2}.png`;

// if(random1 > random2){
//     mainTitle.textContent = `Player 1 win !`;
//     main.style.background = `red`;
// }else if (random1 < random2){
//     mainTitle.textContent = `Player 2 win !`;
//     main.style.background = `green`;
// }
// else{
//     mainTitle.textContent = `Draw`;
// }

const main = document.querySelector(`main`)
const rolldice0 = document.querySelector(`.btn0`)
const rolldice1 = document.querySelector(`.btn1`)

const PlayerSec1 = document.querySelector(`.player1`)
const PlayerSec2 = document.querySelector(`.player2`)
const orgScore1 = document.querySelector(`.score1`)
const orgScore2 = document.querySelector(`.score2`)

const dice = document.querySelector(`.dice`)
const winner = document.querySelector(`.winner`)

rolldice0.addEventListener(`click`, () =>{
    const random = Math.floor(Math.random()* 6 + 1)
    let score = 0;
    dice.src = `./dice-${random}.png`;
    score += random
    orgScore1.textContent = score;
});

rolldice1.addEventListener(`click`, () =>{
    const random0 = Math.floor(Math.random()* 6 + 1)
    let score0 = 0;
    dice.src = `./dice-${random0}.png`;
    score0 += random0
    orgScore2.textContent = score0;
});

if(orgScore1 < orgScore2){
    main.style.display = `none`
    winner.innerHTML = `<h1>Winner </h1>`
}

// DAVOMI BOR