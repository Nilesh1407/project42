var iss, spacecraft
var hasDocked=false;
function setup() {
  createCanvas(800,400);
  iss = createSprite(330,130);
  iss.addImage(issImg)
  iss.scale = 0.25

  sc1 = createSprite(285,258);
  sc1.addImage(spacecraft1)
  sc1.scale = 0.15


}

function draw() {
  background(bg);  
  drawSprites();
  if(!hasDocked){
    sc1.x = sc1.x + random(-1,1)
    if(keyDown("UP_ARROW")){
      sc1.y=sc1.y-2
    }
    if(keyDown("DOWN_ARROW")){
      sc1.y=sc1.y+2
      
    }
    if(keyDown("LEFT_ARROW")){
      sc1.x=sc1.x-2
      sc1.addImage(spacecraft3)
    }
    if(keyDown("RIGHT_ARROW")){
      sc1.x=sc1.x+2
      sc1.addImage(spacecraft4)

    }
  }
  if (sc1.y<=(iss.y+70) && sc1.x<=(iss.x-10)){
    hasDocked=true
    textSize(25)
    fill("white")
    text("docking successful",200,300)
  }
}
function preload() {
bg = loadImage("Docking-undocking/spacebg.jpg")
spacecraft1 = loadImage("Docking-undocking/spacecraft1.png")
spacecraft2 = loadImage("Docking-undocking/spacecraft2.png")
spacecraft3 = loadImage("Docking-undocking/spacecraft3.png")
spacecraft4 = loadImage("Docking-undocking/spacecraft4.png")
issImg = loadImage("Docking-undocking/iss.png")
}
