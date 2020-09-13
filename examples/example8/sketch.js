function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  strokeWeight(0.2);
  background(0);
  loadParticles();
}

let noiseVal = 0.009;
let p = [];

function draw() {
  for(let i = 0; i < p.length; i++){
    p[i].move();
    p[i].display();
  }
}

class Particle{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  
  move(){
    this.n = noise(this.x * noiseVal, this.y * noiseVal, frameCount * noiseVal);
    let noi = map(this.n,0,1,-360,360);
    this.x += sin(noi);
    this.y += cos(noi);
    this.y+=0.5;
  }  
  
  display(){
    let d = dist(this.x,this.y,width/2,height/2);
    let h = map(this.n,0,1,-50,410);
    stroke((d/1.5+h)%360, 50);
    point(this.x,this.y);
  }
}

function loadParticles(){
  for(let i = 0; i < width; i+=0.5){
      p.push(new Particle(i,0));
  }

}