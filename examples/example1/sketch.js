//Based off the particle system example on p5.js

//spin and collection for spins
let spin;
let spins = [];

function setup() {
  createCanvas(600, 600);
   colorMode(HSB);
  // Initialize all values
  for (let i = 0; i < 200; i++) {
    //Set the direction of the spin
    var dir = -1;
    if(i%2 == 0){
      dir = 1;
    }
    spin = new Spinner(createVector(width/2, height/2), random(0, 400), dir, 0, random(0.01, 0.1), random(0, 200));
    spins.push(spin);
  }
}

function draw() {
  // Convert polar to cartesian
  for (let i = 0; i < spins.length; i++) {
    spins[i].run();
  }
}

class Spinner{
  constructor(center, radius, direction, theta, vel, hue) {
    this.x = 0;
    this.y = 0; 
    this.center = center;
    this.radius = radius;
    this.direction = direction;
    this.theta = theta;
    this.vel = vel;
    this.hue = hue;
    this.color = color(hue, 0.3);
    this.size = random(5, 60);
  }
  update(){
    this.x= (this.radius * cos(this.theta) + this.center.x);
    this.y = (this.radius * sin(this.theta) + this.center.y);
    this.theta += this.vel;
  }
  display(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
  run(){
    this.update();
    this.display();
  }
};