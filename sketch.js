var sonic,sonicImg;
var douctoreggman,douctoreggmanImg;
var coin,coinImg;
var esmeraldagreen,esmeraldagreenImg;
var wait,waitImg
var greenhill,greenhillImg;
var anel = 0;



//Esttados de Jogo
var PLAY = 1;
var END=0;
var gamestate=1;


function preload(){

sonic = loadImage("sonic.gif");
sonicImg = loadImage("sonic.gif");
douctoreggman = loadImage("douctoreggman.gif");
douctoreggmanImg = loadImage("douctoreggman.gif");
coin = loadImage("coin.gif");
coinImg = loadImage("coin.gif");
//wait = loadImage("wait.gif")
//waitImg = loadImage("wait.gif");
}

function setup() {
 creatCanvas(600,400);

 sonic = creatSprite(200,200,100,100);
 sonic.addImage(sonicImg);
 sonic.velocityX = 3
 
 greenhill = creatSprite(Width/2,200);
 greenhill.addImage(greenhillImg);
 greenhill.velocityX = 3; 

 douctoreggman = creatSprite();
 douctoreggmanImg.addImage(douctoreggmanImg);
 douctoreggman.velocityX = 3;

coin = creatSprite(200,200,200,200);
coin.addImage(coinImg);

}

function draw() {
 if(gameState===PLAY){
 background(0);
 //sonic.x=World.mouseX;




 }

}