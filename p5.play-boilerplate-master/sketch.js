var bg,bgImg
var pistol,pistolImage
var bulletGroup,bulletImage
var gameState = 1
var redTargetGroup,redTargetImage,redTarget
var blueTargetGroup,blueTargetImage,redTarget
var score = 0

function preload(){
  pistolImage = loadImage("transparent_pistol.png")
  bgImg = loadImage("background_image.jpeg")
  bulletImage = loadImage("download-removebg-preview.png")
 redTargetImage = loadImage("istockphoto-1076875584-612x612-removebg-preview.png")
 blueTargetImage = loadImage("blue_target.png")
}
function setup() {
  createCanvas(1000,600);
  bg = createSprite(750,250,1,1)
  bg.addImage(bgImg)
  bg.scale = 4

  pistol = createSprite(100,height/2,50,50)
  pistol.addImage(pistolImage)
  pistol.scale=0.5

  bulletGroup = createGroup()
  redTargetGroup = createGroup()
  blueTargetGroup = createGroup()
  scoreboard = createElement("h1")
}




function draw() {
 background ("blue")
  
   if (gameState ===1){
   pistol.y = mouseY
   }
   if(keyDown("space")){
   shootBullet();
   }
   
 

    for(var i=0;i<bulletGroup.length;i++){     
      if(bulletGroup[i].isTouching(blueTargetGroup)){
        blueTarget.destroy()
        bulletGroup[i].destroy()
       }
      
       if(bulletGroup[i].isTouching(redTargetGroup)){
        redTarget.destroy()
        bulletGroup[i].destroy()
       }
      }
 drawredTarget()
  drawSprites()
}
  

function shootBullet(){
  bullet= createSprite(235, width/2 , 50,20)
  bullet.y= pistol.y-20
  bullet.addImage(bulletImage)
  bullet.scale=0.4
  bullet.velocityX= 7
  bulletGroup.add(bullet)
 }

 function drawblueTarget(){
   if(frameCount%120===0){
  blueTarget = createSprite(800,random(20,780),40,40);
  blueTarget.addImage(blueTargetImage);
  blueTarget.scale = 0.5;
  blueTarget.velocityX = -8;
  blueTarget.lifetime = 400;
  blueTargetGroup.add(blueTarget);
   }
}
function drawredTarget(){
  if(frameCount%60===0){
  redTarget = createSprite(800,random(20,780),40,40);
  redTarget.addImage(redTargetImage);
  redTarget.scale = 0.5;
  redTarget.velocityX = -8;
  redTarget.lifetime = 400;
  redTargetGroup.add(redTarget);
  }
}

