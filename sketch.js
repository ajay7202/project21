var wall,thickness;
var bullet,speed,weight;

function setup() {
  thickness=random(22,83);
  createCanvas(1600,400);
  wall = createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  
if(hasCollided(bullet,wall))
{
 bullet.velocityX=0;
 var damage=0.5 * weight * speed * speed/(thickness * thickness *thickness);

 if(damage>10)
 {
   wall.shapeColor=color(255,0,0);
 }


 if(damage<10){
   wall.shapeColor=color(0,255,0);
 }

}

  drawSprites();
}

function hascollided(bullet ,wall)
{
  bulletRightEdge=bullet.X +bullet.weight;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
return false;

}