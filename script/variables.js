//!DOM ELEMENTS

const buttonStart = document.getElementById("startButton");
const start = document.getElementById("start");
const gameOver = document.getElementById("gameOver");
const restartButton = document.getElementById("restart");
const popupScore = document.getElementById("score");
const scoreText = document.querySelector(".gameScore");
const time = document.querySelector(".time");

//!INITIAL VARIABLE CONFIG

let gameSpeed = 5.5;
let initialLoad = true;
let score = 0;
let stationsArray = [];
let carsArray = [];
let animationId;
let layer1;
let layer2;
let layer3;
let layer4;
let stationInterval = 5000;
let timer = 20;

//! CANVAS

const canvas = document.querySelector("#canvas1");

const ctx = canvas.getContext("2d");

let CANVAS_WIDTH = (canvas.width = 300);
let CANVAS_HEIGHT = (canvas.height = 600);

//! SPRITES

const backgroundLayer1 = new Image();
backgroundLayer1.src = "./imgs/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./imgs/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./imgs/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./imgs/layer-4.png";

const logo = new Image();
logo.src = "./imgs/logo-juego.png";

const explosion = new Image();
explosion.src = "./imgs/explosions.png";

const firework2 = new Image();
firework2.src = "./imgs/fireworks2.png";
