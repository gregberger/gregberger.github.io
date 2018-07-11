let seed;
let pos;
let txtSize = 170;

function setup() {
  createCanvas(800, 600);
  background(255);
  seed = createVector(3.378, 0.087);
  pos = createVector(random(width), random(height));

}

function draw() {
  background(255, 0.5);
  textSize(txtSize * noise(seed.x, seed.y));
  pos.x = width * noise(seed.y, seed.y)
  pos.y = height * noise(seed.x, seed.y);
  text("🤔", pos.x, pos.y);
  seed.x += 0.001 / noise(seed.x*seed.x);
  seed.y += 0.008 * noise(seed.y*seed.y);
}