/**
 * 	Implementation of 10PRINT-like algorithm (https://10print.org/)
 *
 * 	Many thanks to Daniel Shiffman (http://shiffman.net) for the tremendous amount of work he puts
 * 	in teaching the creative coders community
**/
let x = 0;
let y = 0;
let spacing = 25;
let strk = 1;
let maxDist = 0;
let print = true;
let scheme = ['#524E43','#64676E','#B4C5CC','#609692','#DCE1DB'];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noFill();
	maxDist = dist(0,0, width/2, height/2);
	strokeCap(ROUND);
	//colorMode(HSB);
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
	let schemeIndex = floor(map(d, 0, maxDist,0,4));

	stroke(scheme[schemeIndex]);
	translate(x,y);

	if(random(1)>0.55){
		if(random(1)>0.79 ){
			line(0,0, spacing, spacing);
		}else{
			fill(scheme[4-schemeIndex]);
			noStroke();
			ellipse(0,0,spacing/2, spacing/2,1);
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
		print = true;
	}
}
