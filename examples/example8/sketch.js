
function setup() {
  createCanvas(600, 600);
  background(100);
  
  //gra
  gra = createGraphics(width, height);
  gra.noStroke();
  for (let i = 0; i < 300000; i++) {
    let x = random(width);
    let y = random(height);
    let s = noise(x*0.01, y*0.01)*width*0.002;
    gra.fill(255,10);
    gra.rect(x, y, s, s);
  } 
  
}

function draw() {
  background(0);
  let angleStep = TAU/10;
  let baseRadius = width*0.2;
  let noiseScale = 1;
  let hei = height*0.5;
  let strokeW = baseRadius*0.15;
  noFill();
  strokeWeight(strokeW);
  push();
  translate(width/2,height*0.55);
  
  for(let yoff = hei/2; yoff >= -hei/2; yoff-=strokeW/5)
  {
    let colorRatio = map(yoff,hei/2,-hei/2,0,6);
    let coli = int(colorRatio);
    colorRatio = colorRatio%1;
    if(coli == 0)colorRatio=pow(colorRatio,1.5);
    if(coli == 5)colorRatio=pow(colorRatio,0.8);
    let col = lerpColor(color(0), color(255),colorRatio);
    stroke(col, 20);
    beginShape();
    for(let angle = 0 ; angle < TAU+angleStep*3; angle+=angleStep){
      let centerOff = noise((frameCount/50+yoff/100)*0.3)-0.5;
      let x = cos(angle)+centerOff;
      let y = sin(angle);
      let nv = noise((x+10)*noiseScale,y*noiseScale,(yoff*noiseScale + frameCount)/100);
      let radius = baseRadius*(1+map(nv,0,1,-0.8,0.8));
      curveVertex(x*radius,y*radius*0.7+yoff);
    }
    endShape();
  }
  pop();
  
  image(gra,0,0);

  fill(255);
  text("8.27.20", 30, height-30);
}
