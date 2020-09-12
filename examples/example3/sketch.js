let size = 600;
let numPetals = 10;
let petalSize;
let minPetalSize;
let outStep;
let outFraction = 0.5;
let phi;
let epsilon = 0.05;

function setup() {
  createCanvas(size, size);
  minPetalSize = floor(size/numPetals);
  outStep = minPetalSize * outFraction;
  phi = sqrt(5)/2;
  frameRate = 20;
}

function draw() {
  theta = millis()/4000;
  petalSize = minPetalSize + mouseY/height * 100;

  background(0, 10);
  translate(width/2, height/2);
  
  stroke(255);
  strokeWeight(0.5)

  for (let i=0; i<numPetals; i++) {
    let r = i*outStep;
    let angle = i*theta;
    let prev = (i-1)*theta;
    let x = r*cos(angle);
    let y = r*sin(angle);
    let px = r*cos(prev);
    let py = r*sin(prev);
    let scale = 1 + i/numPetals * 3;
    line(px, py, x, y);
  }
 }