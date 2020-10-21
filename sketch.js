var monkey , monkey_running;

var banana ,bananaImage;

var obstacle, obstacleImage;

var foodGroup, obstacleGroup;

var score=0;

var ground;

function preload(){ 
  
    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,300);
  monkey=createSprite(40,230,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;
  
  ground = createSprite(0,270,1000,10);
  ground.shapeColor="green";
  ground.velocityX=-4;
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  
  score=0;
  monkey.debug=false;
}


function draw() {
  background("pink");
  score=Math.ceil(frameCount/frameRate());
  textSize(20);
  stroke("white");
  fill("blue");
  text("Survival Time:"+score,160,50);
  if(ground.x<0){
    ground.x=ground.width/2;
  }

  if(keyWentDown("space")){
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY+0.4;
    monkey.collide(ground);
  spawnRocks();
  spawnBananas();

  drawSprites();
}

function spawnRocks(){
  if (frameCount%120===0){
    obstacle=createSprite(500,250,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.08;
    obstacle.velocityX=-2;
    obstacle.lifetime=250;
    obstacleGroup.add(obstacle)
  }
}
function spawnBananas(){
  if (frameCount%90===0){
    banana=createSprite(500,110,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-2;
    banana.lifetime=260;
    foodGroup.add(banana);
  }
}




