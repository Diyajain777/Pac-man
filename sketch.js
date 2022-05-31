var pacMan,pacManImg
var gameState = "play"

function preload(){
  pacManImg=loadImage("pacman.png");


}

function setup() {
  
  createCanvas(600, 600);
  pacMan=createSprite(300,300);
  pacMan.addImage(pacManImg);
  pacMan.scale=0.02;

  w1=createSprite(300,5,600,5)
  w1.shapeColor="blue"
  w2=createSprite(241,30,5,50)
  w2.shapeColor="blue"
  w3=createSprite(105,300,5,400)
  w3.shapeColor="blue"
  w4=createSprite(305,200,400,5)
  w4.shapeColor="blue"
 

  
  
}

function draw() {
  background(0);

  text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites()
}