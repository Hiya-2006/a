var bg, bgImg
var gun, gunImg
var monster, monsterImg
var tree, treeImg
var tree2, treeImg
var tree3, treeImg
var score=0;
var hitSound, GameOverSound, FailSound
var gameOverImg
var bullet,bulletGrp



function preload()
{
    bgImg=loadImage("bg.jpg")
    gunImg=loadImage("gun.png")
    monsterImg=loadImage("monster.png")
    treeImg=loadImage("tree.png")
    tree2Img=loadImage("tree.png")
    tree3Img=loadImage("tree.png")
    gameOverImg=loadImage("game over.jpg")

    hitSound = loadSound("hit.mp3")
    FailSound = loadSound("fail.mp3")
    GameOverSound = loadSound("game over.wav")
    
}
function setup()
{
  createCanvas(600,600)
  gun=createSprite(50,350)
  gun.addImage(gunImg)
  gun.scale=0.8
  
 
  tree=createSprite(250,500)
  tree.addImage(treeImg)
tree.scale=0.6

tree2=createSprite(375,500)
  tree2.addImage(treeImg)
tree2.scale=0.6

tree3=createSprite(505,500)
  tree3.addImage(treeImg)
tree3.scale=0.6

  
}
function draw()
{
    background(bgImg)

    gun.y=World.mouseY

    if (keyDown("space")) {
createBullet();
    }

    if (frameCount % 150 === 0){
      monster = createSprite(Math.round(random(250, 550)),0, 10, 10);
      monster.addImage(monsterImg)
      monster.velocityY = 3
      monster.scale=0.2
  }
  text("Score: "+ score, 500,50);
 
 /*if(bullet.isTouching(monster)){
   bullet.destroy();
   score=score+3
   monster.destroy();
hitSound.play();

  }
//add tree2 and tree3
  if(monster.isTouching(tree)){
    score=score-1
    FailSound.play();
    monster.destroy();
    tree.scale=0.008
     tree2.scale=0.008
      tree3.scale=0.008
  }
 */

    drawSprites ();
  
  
}

function createBullet(){
  bullet=createSprite(100,100,40,15)
bullet.velocityX=15
bullet.lifeTime=100
bullet.y=gun.y
}

