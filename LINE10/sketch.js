/**
 * 	Implementation of 10PRINT-like algorithm (https://10print.org/)
 *
 * 	Many thanks to Daniel Shiffman (http://shiffman.net) for the tremendous amount of work he puts
 * 	in teaching the creative coders community
**/
let x = 0;
let y = 0;
let spacing = 60;
let strk = 1;
let maxDist = 0;
let print = true;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noFill();
	maxDist = dist(0,0, width/1.4, height/3);
	strokeCap(ROUND);
	colorMode(HSB);
	frameRate(200);
}

function draw() {
	if(print){
		printChars();
	}

}

function printChars (){
	let d = dist(x,y,width/2, height/2);
	let strk  = map(d,0,maxDist,0.3,8);
	strokeWeight(strk);

	stroke(map(d, 0, maxDist,0,360),200, 250);
	translate(x,y);

	if(random(1)>0.55){
		if(random(1)>0.6 ){
			line(0,0, spacing, spacing);
		}else{
			rect(0,0,spacing, spacing,1);
		}
	}else{
		line(spacing,0,0,spacing);
	}


	x+=spacing;
	if(x>width){
		x=0;
		y+=spacing;
		if(y>height){
			print = false;
		}
	}
}

function keyTyped(){
	if(key == ' '){
		x = 0;
		y = 0;
		background(0);
	}
}
