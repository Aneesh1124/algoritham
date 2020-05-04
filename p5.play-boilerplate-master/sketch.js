var moving, sprite

function setup() {
  createCanvas(800,400);
 moving = createSprite(400, 200, 50, 50);
 sprite = createSprite(200,200,70,70)
}

function draw() {
  background(180,220,170);  
  moving.x = mouseX
  moving.y = mouseY
  if(moving.x-sprite.x<moving.width/2+sprite.width/2
    &&sprite.x-moving.x<moving.width/2+sprite.width/2
    &&sprite.y-moving.y<moving.height/2+sprite.height/2
    &&moving.y-sprite.y<moving.height/2+sprite.height/2){
  moving.shapeColor = "red"
  sprite.shapeColor = "green"
  }
  drawSprites();
}