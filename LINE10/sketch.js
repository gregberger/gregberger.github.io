/**
 * 	Implementation of 10PRINT-like algorithm (https://10print.org/)
 *
 * 	Many thanks to Daniel Shiffman (http://shiffman.net) for the tremendous amount of work he puts
 * 	in teaching the creative coders community
**/
let x = 0;
let y = 0;
let spacing = 30;
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

}

function draw() {
	if(print){
		printChars();
	}

}

function printChars (){
	let d = dist(x,y,width/2, height/2);
	let strk  = map(d,0,maxDist,0.3,spacing/9);
	strokeWeight(strk);
	let schemeIndex = floor(map(d, 0, maxDist,0,4));

	stroke(scheme[schemeIndex]);
	translate(x,y);
	
	if(random(1)>0.5){

		if(random(1)>0.5 ){
			if(random(1)>0.5){
				triangle(spacing/2,0,0,spacing,spacing,spacing);
			}else{
				triangle(0,0,spacing/2,spacing,spacing,0);
			}
		}else{
			let ellFill = color(scheme[4-schemeIndex]);
			fill(ellFill._getRed(), ellFill._getGreen(), ellFill._getBlue(), strk*10);
			noStroke();
			let diam = spacing*(8-strk)
			ellipse(0,0,diam);
		}
	}else{
		if(random(1)<0.5){
			line(0,0, spacing, spacing);
		}else{
			line(spacing,0,0,spacing);
		}


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
