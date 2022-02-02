var bg,bgImg;

var player1;
var player1Img;

var zombie1, zombie2, zombie3, zombie4, zombie5, zombie6;
var zombie1Img, zombie2Img, zombie3Img, zombie4Img, zombie5Img, zombie6Img;

var zombieGroup;

var heal1,heal2,healImg;

var gameState = 0;


function preload(){
  
  zombie1Img = loadImage("assets/zombie 1.png");
  zombie2Img = loadImage("assets/zombie 2.png");
  zombie3Img = loadImage("assets/zombie 3.png");
  zombie4Img = loadImage("assets/zombie 4.png");
  zombie5Img = loadImage("assets/zombie 5.png");
  zombie6Img = loadImage("assets/zombie 6.png");
  player1Img = loadImage("assets/player 1.png");
  bgImg = loadImage("assets/bg.jpg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-20,10,10)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite

   //creating zombie sprites
   zombie1 = createSprite(displayWidth/2-10,190,20,20)
   zombie1.visible = true
   zombie1.addImage("zombie1",zombie1Img)
   zombie1.scale = 0.4
   zombie1.velocityX = 1.8

   zombie2 = createSprite(displayWidth/2-140,240,20,20)
   zombie2.visible = true
   zombie2.addImage("zombie2",zombie2Img)
   zombie2.scale = 0.3
   zombie2.velocityY = 1.4

   zombie3 = createSprite(displayWidth/2+140,240,20,20)
   zombie3.visible = true
   zombie3.addImage("zombie3",zombie3Img)
   zombie3.scale = 0.25
   zombie3.velocityY = 0.7
  
   zombie4 = createSprite(displayWidth/2-75,210,20,20)
   zombie4.visible = true
   zombie4.addImage("zombie4",zombie4Img)
   zombie4.scale = 0.095
   zombie4.velocityY = 0.9

   zombie5 = createSprite(displayWidth/2+65,200,20,20)
   zombie5.visible = true
   zombie5.addImage("zombie5",zombie5Img)
   zombie5.scale = 0.1
   zombie5.velocityX = -0.8

   zombie6 = createSprite(displayWidth/2-200,240,20,20)
   zombie6.visible = true
   zombie6.addImage("zombie6",zombie6Img)
   zombie6.scale = 0.4
   zombie6.velocityX = -1.5

   player1 = createSprite(displayWidth/2-160,380,20,20);
   player1.visible = true
   player1.addImage("player1",player1Img)
   player1.scale = 0.15

   //creating groups for zombies
    zombieGroup = new Group()
}

function draw() {
  background(0); 

  if (keyDown("UP_ARROW")){
    player1.y += -2;
  }

  if (keyDown("LEFT_ARROW")){
    player1.x += -2;
  }

  if (keyDown("RIGHT_ARROW")){
    player1.x += 2;
  }

  if (zombie1.x > windowWidth){
    zombie1.x = displayWidth/2-10
  }

  if (zombie2.y > windowHeight){
    zombie2.y = 240
  }

  if (zombie3.y > windowHeight){
    zombie3.y = 240
  }

  if (zombie4.y > windowHeight){
    zombie4.y = 210
  }

  if (zombie5.x > windowWidth){
    zombie5.x = displayWidth/2+65
  }

  if (zombie6.x > displayWidth){
    zombie6.x = displayWidth/2-200
  }

  if (player1.isTouching(zombie1||zombie2||zombie3||zombie4||zombie5||zombie6)){
    gameState = 0;
    text("GAME OVER",windowWidth/2, windowHeight/2)
  }
  

  drawSprites();

}






