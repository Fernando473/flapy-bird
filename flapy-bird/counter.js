const canvas  = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gameContainer = document.getElementById("game-container");


const flappyImg = new Image();
flappyImg.src = "./images/flappy.png";

//Game constats 
const FLAP_SPEED = -5;
const BIRD_WIDHT = 40;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;


// Bird variables

let birdX = 50;
let birdY = 50;
let birdAcceleration = 0.1;

// Pipe variables
let pipeX = 400;
let pipeY = canvas.height - 200;


// Score and highscore variables

let score = 0;
let scoreDiv = document.getElementById("score-display");
let highscore = 0;

document.body.onkeyup = function(e){
  if(e.code == "Space"){
    birdAcceleration = FLAP_SPEED;
  }
}


function increaseScore(){
  score++;
  scoreDiv.innerHTML = score;
}

function hideEndMenu(){
  document.getElementById("end-menu").style.display = "none";
  gameContainer.classList.remove("backdrop-blur");
}

function showEndMenu(){
  // * TODO:
  document.getElementById("end-menu").style.display = "block";
  gameContainer.classList.add("backdrop-blur");
  document.getElementById("end-score").innerHTML = score;

}

function collisionCheck(){
  //  * TODO:
}

function resetGame(){
  // * TODO: 
}


function endGame(){
  // * TODO:
}

function  loop(){
  // reset the ctx
  ctx.clearReect(0, 0, canvas.width, canvas.height);


  // draw the bird
  ctx.drawImage(flappyImg, birdX, birdY, BIRD_WIDHT, BIRD_HEIGHT);

  // draw the pipe

  //ctx.fillStyle = "#333";


  requestAnimationFrame(loop);
}

loop( )
