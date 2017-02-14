function setup() {
  createCanvas(1000,1000);
  background(255);
  stroke(220,40,80);
  strokeWeight(0.5);
}

function draw() {
  background(255);
  push();
  translate(width/2,height/2);
  for(var x = -4.0; x<=4.0;x+=0.00005){
     var y = sqrt(cos(x))*cos(300*sin(x))+sqrt(abs(x))-0.3 ;

     point(x*300,y*-300);

  }
  pop();
  //text("y = sqrt(cos(x))*cos(300*sin(x))+sqrt(abs(x))-0.3",widht/2, height-100);

}
