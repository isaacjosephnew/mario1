var mario, marioRunning
var marioBackground
var ground
var bombImage
function preload(){
marioRunning = loadAnimation("mario1-removebg-preview.png","mario2-removebg-preview.png","mario3-removebg-preview.png")
marioBackground = loadImage("background.jpg")
bombImage = loadImage("bomb.png")
}
function setup(){
createCanvas(1000,500)
backgroundSprite = createSprite(200,250)
backgroundSprite.addImage(marioBackground)
backgroundSprite.scale = 4
ground = createSprite(500,495,1000,10)
mario = createSprite(50,420)
mario.scale = 0.5
mario.addAnimation("running",marioRunning)

}
function draw(){
background("blue")
backgroundSprite.velocityX = -5
if (backgroundSprite.x < 0){backgroundSprite.x = 500}
if (keyDown("space")){
mario.velocityY = -17
}
mario.velocityY = mario.velocityY +1
mario.collide(ground)
spawnBombs();
drawSprites() 
}
function spawnBombs(){
if(frameCount%150 === 0){
var bomb = createSprite(1050,440,50,50)
var rand = random(-2,0)
bomb.rotationSpeed = rand
var rand3 = random(0.5,1)
bomb.scale = rand3
bomb.addImage(bombImage)
var rand1 = random(-22,-10)
bomb.velocityX = rand1
}
}