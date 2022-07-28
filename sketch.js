var ship
var shipImg
var seaImg
var sea



function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  
  sea= createSprite(200,180,400,20);
  sea.addImage("sea", seaImg);
  sea.scale = 0.5

  ship= createSprite(150,180,20,50);
  ship.addAnimation("ship", shipImg);
  ship.scale = 0.3
  
}

function draw() {
  background("blue");
    drawSprites();
 
}
