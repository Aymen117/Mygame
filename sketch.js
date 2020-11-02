var ObstaclesGroup,ObstacleGroup2;
var score = 0
var Obstacles,Obstacle2;
var tankimg1,tankimg2,bomb;
var gameState="stage1";
function preload(){
 tankimg1=loadImage("images/Tank1.png");
 bomb=loadImage("images/Bomb.png");
}

function setup(){
 createCanvas(800,800);
 ObstaclesGroup = new Group();
 ObstacleGroup2 = new Group();
}


function draw(){
 background("blue");
 if (score === 3)
 {
gameState="stage2";
 }
 if (gameState==="stage2")
 {
ObstaclesGroup.destroyEach()
ObstacleGroup2.destroyEach()
 }
 if (gameState==="stage1")
 {
 spawnObstacles();
 spawnObstacles2();
 }
 if (mousePressedOver(Obstacles))
 {
     score++
     Obstacles.destroy();
     Obstacles = null;
 }
 if (mousePressedOver(Obstacle2))
 {
     score--
     Obstacle2.destroy();
     Obstacle2 = null
 }
 drawSprites();
 textSize(20);
 fill("red")
 text("score  "+score,100,20)
}
 
function spawnObstacles(){
 if  (frameCount%60 === 0){
 Obstacles = createSprite(800,200,20,20);
 Obstacles.addImage(tankimg1);
 Obstacles.scale=0.3
 Obstacles.lifetime=500
var rand = random(0,800)
Obstacles.y=rand;
Obstacles.velocityX=-5
ObstaclesGroup.add(Obstacles);
   } 
}
function spawnObstacles2()
{
    if (frameCount%60 === 0)
    {
Obstacle2 = createSprite(0,200,30,30);
Obstacle2.addImage(bomb);
Obstacle2.scale=0.1
var rand2 = random(0,800);
Obstacle2.lifetime=500
Obstacle2.y=rand2;
Obstacle2.velocityX=5;
ObstacleGroup2.add(Obstacle2);
    }
}