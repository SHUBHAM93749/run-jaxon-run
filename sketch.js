var pathboy, leftBoundary,rightBoundary;
var pathImg,boyImg
var I;

function preload(){
  pathImg = loadImage("path.png");
  boyImg =
  loadAnimation("Runner-1.png","Runner-2.png");
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  //Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;
//create sprites here
  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.addAnimation("RunnerRunning",boyImg);

  // create left Boundary
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  // create right boundary
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  //create sprites here
}

function draw() {
  background(0);
path.velocityY = 4;

// boy moving on Xaxis with mouse
boy.x = mouseX;

edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);



//code to reset the background
if(path.y> 400){
path.y =height/2;
}

drawSprites();
}
