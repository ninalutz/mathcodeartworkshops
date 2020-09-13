//Fork from openprocessing sketch
var t;
var theta;
var maxFrameCount = 200; // frameCount, change for faster or slower animation

function setup() {
  createCanvas(600, 600);
  background(0)
}

function draw() {
  background(0, 15); //creates ghosting effect 
  translate(width/2, height/2); // translate 0,0 to center

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t;

  for ( var x= -width/2; x <= width/2; x += 25) {
    for (var y= -height/2; y <= height/2; y += 50) {
      var offSet = 50*x+y+y;   // play with offSet to change map below
      var x2 = map(cos(-theta+offSet), 0, 1, 0, 25); // map x position
      var y2 = map(cos(-theta+offSet), 0, 1, 25, 0); // map y position
      var sz2 = map(sin(-theta+offSet), 0, 1, 10, 35); // map size off the ellipse
      fill(250-(x/2), 250-(y/2), 150+(x/6)); // color with gradient created
      stroke(250-(x/2) - 10, 250-(y/2) - 10 , 150+(x/6) - 10)
      rect(x+x2, y-y2, sz2, sz2);
    }
  }

}