var incX=0.0053;
var incY = 0.003;
var offsetX = 0.1;
var offsetY = 0.2;
var posX, posY;
function setup() 
{
    createCanvas(800, 800);
    posX = width/2;
    posY = height/2;
    noFill();
    strokeWeight(0.1);
}

function draw() 
{
  stroke(0,0, 512*noise(offsetX), 60);
  var size = abs(sin(pow(offsetX, cos(posY/1000)))) * 60;
  posX = width * noise(offsetX);
  posY = height * noise(offsetY);
  ellipse(posX, posY, size, size);
  
  
  offsetX+=incX;
  offsetY+=incY;
}

function mousePressed()
{
  saveCanvas("mysketch_"+millis()+".png", "png");
}