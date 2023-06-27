let ground;
let lander;
var lander_img;
var bg_img;
var nave_image
var nave_direita
var nave_esquerda
var normal
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  nave_image = loadAnimation("b_thrust_1.png", "b_thrust_2.png", "b_thrust_3.png",)
  nave_direita = loadAnimation("right_thruster_1.png","right_thruster_2.png",) 
  nave_esquerda = loadAnimation("left_thruster_1.png","left_thruster_2.png")
  normal = loadAnimation("normal.png")
  nave_image.playing = true
  nave_image.looping = false
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img)
  lander.scale = 0.1
  lander.addAnimation("nave_image",nave_image)
  lander.addAnimation("nave_deireita",nave_direita)
  lander.addAnimation("nave_esquerda",nave_esquerda)
  lander.addAnimation("normal",normal)
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("velocidade vertical: "+ round(vy), 800,75);
  pop();

  //configurar a descida da nave em y + gravidade
  vy += g
  lander.position.y += vy

  drawSprites();
}
  function keyPressed(){

    if(keyCode==UP_ARROW){
      vy = -1;
      lander.changeAnimation('nave_image');
    }
  }
  function keyReleased(){

    if(keyCode==UP_ARROW){
      vy = -1;
      lander.changeAnimation('normal');
    }
  }

