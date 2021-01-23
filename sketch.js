var wall,thickness;
var bullet,speed,weight
thickness=random(22,83)
wall=createSprite(1200,200,thickness,height/2)
speed=random(223,321)
weight=random(30,52)

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
}