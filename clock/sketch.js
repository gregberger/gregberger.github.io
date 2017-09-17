let colors = {
	h: "#34495E",
	m: '#8EACBF',
	s: '#FF6600',
	bg: '#000000'
};
function setup() {
	createCanvas(windowWidth, windowHeight);
	fill(255);
	strokeWeight(5);
	strokeCap(SQUARE);
	displayDensity(2);
	//noFill();
	//noStroke();
}

function draw() {
	let d = new Date();
	let hr = d.getHours();
	let min = d.getMinutes();
	let sec = d.getSeconds();

	background(colors.bg);
	fill(255);
	textSize(40);
	text(hr+":"+min+":"+sec, 100, 50);

	push();
	translate(width/2, height/2, 0);
	let rotationSec = radians(map(sec,0,60,0,360));
	let rotationMin = radians(map(min, 0,60, 0, 360));
	let rotationH = radians(map(hr%12, 0, 12, 0, 360));
	rotate(-HALF_PI);
	fill(colors.h);
	arc(0,0, 700,700, 0, rotationH);
	fill(colors.bg);
	ellipse(0,0,600,600);
	fill(colors.m);
	arc(0,0, 600,600, 0, rotationMin);
	fill(colors.bg);
	ellipse(0,0,100,100);
	fill(colors.s);
	arc(0,0, 100,100, 0, rotationSec);
	pop();

}
